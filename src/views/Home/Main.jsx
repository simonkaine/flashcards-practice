import React from 'react'
// import { Questions } from '../../components/Questions'

export default function Home() {

    const questions = [
        {id: 0, question: 'This is question 1', answer: 'this is answer 1'}, 
        {id: 1, question: 'This is question 2', answer: 'this is answer 2'},
        {id: 2, question: 'This is question 3', answer: 'this is answer 3'},
        {id: 3, question: 'This is question 4', answer: 'this is answer 4'},
        {id: 4, question: 'This is question 5', answer: 'this is answer 5'},
    ]

    const random = Math.floor(Math.random() * questions.length)
    const question = questions[random];

    // const seeAnswer = () => {
    //     console.log('question inside handle',question)
    //     const answer = seeAnswer ? question : null;
    // }

    const onSeeClickHandler = () => {
        window.alert(`You've clicked the button to see the answer to, "${question.answer}"`)
        console.log(question.answer)
    };

    return (
        <>
        <div style={{height: '100vh'}}>
            <h2>Ready to practice technical interview questions with Flashcards?!</h2>

            <div style={{border: '1px solid black', margin: '100px 0 0 0'}}>
                <p>{question.question}</p>   

                <button type='button' onClick={onSeeClickHandler}>
                    See Answer
                </button>
                
                <button type='button' >
                    Next
                </button>
            </div>

            <div style={{border: '1px solid black', margin: '100px 0 0 0'}}>
                <p></p>
            </div>

        </div>
        </>
    )
}
