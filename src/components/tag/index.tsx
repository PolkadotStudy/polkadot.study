import React from "react";
import clsx from "clsx";
import styles from './index.module.scss';

export default function ( { name } ) : JSX.Element {
    return(
        <span 
            className={ clsx( 'ps-tag', `ps-tag-${name}`, styles.tag )}
        >
            {name}
        </span>
    )
}