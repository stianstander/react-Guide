import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { // takes in data collected from submit
        const expenseData = {
            ...enteredExpenseData, // concatenate old data with new data
            id: Math.random().toString()
        }
        console.log('NewExpense')
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            {/*below: function from child that causes saveExpenseDataHandler to run */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense