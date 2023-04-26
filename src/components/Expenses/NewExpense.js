import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css'

export default function NewExpense(props){
    const onFormSubmit = (data) => {
        const newitem = {...data, id : Math.random().toString()}
        props.addExpenseItem(newitem)
    }

    return(
        <div className = "new_expense">
            <NewExpenseForm onFormSubmit = {onFormSubmit}/>
        </div>
    )
}