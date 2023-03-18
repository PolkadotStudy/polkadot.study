import React, { ChangeEvent, useEffect, useState } from "react";
import Markdown from 'markdown-to-jsx';

export default function CategoryMDX( { category } ): JSX.Element{

    const [mdxContent,setMdxContent] = useState('');

    const categoryFile = category.permalink.replace('/tags/', '/category/')

    useEffect(() => {
		fetch(`${categoryFile}.mdx`).then(res => res.text()).then(text => setMdxContent(text))
	})

    return (
        <div className="category-mdx">
            categoryFile: { `${categoryFile}.mdx` }
            <pre>
            { mdxContent }
            </pre>
        </div>
    )
}
