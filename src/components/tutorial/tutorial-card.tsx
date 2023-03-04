import React, { ChangeEvent, useEffect, useState } from "react";
import cn from "classnames";

import Link from "@docusaurus/Link";
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './tutorial-card.module.scss';
import { string_to_slug } from "@site/src/util";

type quizItemType = {
    question: string;
    answers: Array<string>;
    correctAnswerIdx: number | Array<number>;
    msgCorrect: string;
    msgIncorrect: string;
    explanation: string;
    tries: number | undefined;
};

export default function TutorialCard( { title, description, category, permalink } ): JSX.Element {
    return (
        <div className={ styles.tutorialCard }>
            <Link to={permalink} className={ styles.imgLink } >
                <img src={ useBaseUrl(`/img/categories/${string_to_slug(category)}.svg`) } />
            </Link>
            <Link to={permalink}>
                <h3>
                    { title }
                </h3>
            </Link>
            <p>
                { description }
            </p>
        </div>
    )
}