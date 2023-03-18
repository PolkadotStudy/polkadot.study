import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import styles from "./task.module.scss";
import { string_to_slug } from "@site/src/util";
import { DocTaskContext, DocTaskDispatchContext } from "./doc-task-context";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

export default function Task( { caption }: { caption: string } ): JSX.Element {

    const ref = useRef()
    const location = useLocation()
    const dispatch = useContext(DocTaskDispatchContext);

    const taskId = string_to_slug( caption )

    const tasks = useContext(DocTaskContext);
    const task = tasks.find( t => t.id === taskId )
    const checked = task ? task.checked : false

    useEffect(() => {
        dispatch({
            type: 'added',
            page: location.pathname,
            id: taskId,
            checked: false,
        });
    }, []);

    const onChangeInput = () => {
        dispatch({
            type: 'changed',
            id: taskId,
            page: location.pathname,
        })
    }

    return (
        <div 
            className={ clsx( 'ps-task', styles.task, checked && styles.complete ) }
            ref={ ref }
        >
            <div className={ styles.title }>Task!</div>
            <label className="">
                <input
                    id={ taskId }
                    className="task-checkbox"
                    type="checkbox"
                    checked={ checked }
                    onChange={ onChangeInput }
                />
                <span>{ caption }</span>
            </label>
        </div>
    )
}