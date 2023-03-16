import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styles from "./task.module.scss";
import { string_to_slug } from "@site/src/util";

export default function Task( { caption }: { caption: string } ): JSX.Element {

    const [checked, setChecked] = useState(false);
    const ref = useRef()

    useEffect(() => {
        //if we are the first task component in the dom, we handle things
        // console.log( 'ref', ref )

        // document.querySelector('.pagination-nav__link--next')?.addEventListener( 'mouseenter', onNextHover );
    }, []);

    const onChangeInput = () => {
        setChecked(!checked)
    }

    return (
        <div 
            className={ clsx( 'ps-task', styles.task, checked && styles.complete ) }
            ref={ ref }
            id={ string_to_slug( caption ) }
        >
            <div className={ styles.title }>Task!</div>
            <label className="">
                <input 
                    type="checkbox"
                    checked={ checked }
                    onChange={ onChangeInput }
                />
                <span>{ caption }</span>
            </label>
        </div>
    )
}