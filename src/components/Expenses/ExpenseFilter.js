import './ExpenseFilter.css'

export default function ExpenseFilter(props){

    const selectHandler = (event) => {
        props.onSetYearHandler(event.target.value)
    }

    return(
        <div className='expense_filter_container'>
            <label>Filter by Year</label>
            <select value = {props.selected} onChange={selectHandler}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
        </div>
    )
}