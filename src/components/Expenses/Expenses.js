import ExpenseItems from './ExpenseItems'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import { useState } from 'react'

export default function Expenses(props){
    const [year, setYear] = useState('2019')
    const [FilteredList, setFilteredList] = useState(props.items)

    const setYearHandler = (selectedyear) => {
        setYear(selectedyear)
        setFilteredList(
            props.items.filter(item => item.date.getFullYear().toString() === selectedyear ))
    }

    return(
        <div className='expenses'>
        <ExpenseFilter selected = {year} onSetYearHandler = {setYearHandler}/>
        {FilteredList.map((item) => {
            return <ExpenseItems key ={item.id} item = {item}/>
        })}
        </div>
    )
}