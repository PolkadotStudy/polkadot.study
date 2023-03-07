import React, { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

export default function Task( { caption }: { caption: string } ): JSX.Element {

    const [checked, setChecked] = useState(false);

    const onChangeInput = () => {

    }

    return (
        <div className={ clsx( 'ps-task', styles.task ) }>
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