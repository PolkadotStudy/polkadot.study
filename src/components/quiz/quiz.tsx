import React, { ChangeEvent, useEffect, useState } from "react";
import cn from "classnames";
import styles from './quiz.module.scss';

type quizItemType = {
    question: string;
    answers: Array<string>;
    correctAnswerIdx: number | Array<number>;
    msgCorrect: string;
    msgIncorrect: string;
    explanation: string;
    tries: number | undefined;
};

export default function Quiz( { quizItem }: { quizItem: quizItemType } ): JSX.Element {
    let {
        question,
        answers,
        correctAnswerIdx,
        msgCorrect,
        msgIncorrect,
        explanation,
        tries = 3,
    } = quizItem;

    let [submitted, setSubmitted] = useState<boolean>(false);
    let [userTries, setUserTries] = useState<number>(0);
    let [checkedState, setCheckedState] = useState<Array<boolean>>(
        new Array(answers.length).fill(false)
    );
    let [isCorrect, setIsCorrect] = useState<boolean>(false);

    const onSubmitAnswer = () => {
        setSubmitted( true );
        setIsCorrect( isAnswerCorrect() );
        if ( ! isAnswerCorrect() ) {
            setUserTries( userTries + 1 );
        } else {
            setUserTries( 0 );
        }
    }

    const onShowSolution = () => {
        const solution = new Array(answers.length).fill(false)

        if ( typeof correctAnswerIdx == 'number' ) {
            solution[correctAnswerIdx] = true;
        } else {
            correctAnswerIdx.forEach( i => solution[i] = true)
        }

        setSubmitted( true );
        setCheckedState( solution );
        setIsCorrect( true );
        setUserTries( 0 );
    }

    const onChangeInput = ( e ) => {
        setSubmitted( false )
        const parentLabel = e.target.parentNode
        const elIndex = Array.from(parentLabel.parentNode.children)
            .indexOf(parentLabel as Element);

        const newItems = [...checkedState];
        newItems[elIndex] = e.target.checked;
        setCheckedState(newItems);
    }

    const isAnswerCorrect = () => {
        if ( ! correctAnswerIdx ) return false;

        let res = checkedState.reduce(
            (prev, curr, idx) => {
                let correct = false;
                correct = idx === correctAnswerIdx ? curr : curr === false
                return prev && correct
            }, 
        true
        )

        return res;
    }

    const solutionClassName = cn(
        styles.feedback, 
        {
            [styles.isWrong]: ! isCorrect,
            [styles.isCorrect]: isCorrect,
        }
    )

    let incorrectFeedback = userTries < tries ? 
        `${ msgIncorrect } (Solution available in ${ tries - userTries } attempts)` :
        `Try again or click the "Show Solution" button above.`

    return (
        <div className={ styles.quiz }>
            <div className={ styles.question }>
                <span className={ styles.questionMark }>?</span><span>{ question }</span>
            </div>
            <div className={ styles.answers }>
                { 
                    answers?.map( (a, idx) => 
                    <label className="q-answer" key={ idx }>
                        <input 
                            type="checkbox"
                            checked={ checkedState[idx] }
                            onChange={ onChangeInput }
                        />
                        <span>{ a }</span>
                    </label>
                    ) 
                }
            </div>
            <div className={ styles.interaction }>
                    { userTries < tries && <button onClick={ onSubmitAnswer }>Submit</button> }
                    { userTries === tries && <button onClick={ onShowSolution }>Show Solution</button> }
            </div>
            { submitted && 
                <div className={ solutionClassName }>
                    { 
                        isCorrect ? 
                            <><span>{ msgCorrect }</span></>
                        :
                            <><span className={ styles.feedbackIcon }>!</span><span>{ incorrectFeedback }</span></>
                    }
                    
                </div> 
            }
        </div>
    )
}