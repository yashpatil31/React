import './ExpenseItems.css'

function ExpenseItems(props){
    const day = props.item.date.getDate()
    const month = props.item.date.toLocaleString('default', {month:'long'})
    const year = props.item.date.getFullYear()

    return(
        <div className="expense-item">
            <div className="expense-item_description">
                <h1>{props.item.title}</h1>
                <h3>{day}-{month},{year}</h3>
            </div>
            <div className="expense-item_amount">{props.item.amount}</div>
        </div>
    )
}

export default ExpenseItems