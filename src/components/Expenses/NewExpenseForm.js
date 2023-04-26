import React, {useState} from 'react'
import './NewExpenseForm.css'

export default function NewExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput((PrevState) => {
        //     return({...PrevState,
        //         enteredTitle : event.target.value
        //     })
        // })
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput((PrevState) => {
        //     return({...PrevState,
        //         enteredDate : event.target.value
        //     })
        // })
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput((PrevState) => {
        //     return({...PrevState,
        //         enteredAmount : event.target.value
        //     })
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            title : enteredTitle,
            date : enteredDate,
            amount : enteredAmount
        }
        props.onFormSubmit(data)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className = 'formitem_container'>
                <div className = "newexpense_form_item">
                    <label>Title</label>
                    <input type='text' value = {enteredTitle} onChange={titleHandler}/>
                </div>
                <div className = 'newexpense_form_item'>
                    <label>Date</label>
                    <input type='date' value = {enteredDate} min='2019-01-01' max={Date.now()} onChange={dateHandler}/>
                </div>
                <div className = 'newexpense_form_item'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='1' onChange={amountHandler}/>
                </div>
                <div className='btn_container'>
                    <button>Add Item</button>
                </div>
            </div>
        </form>
    )
}