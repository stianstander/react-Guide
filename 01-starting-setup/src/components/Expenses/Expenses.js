import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
    // picked year goes here
    const [currentYear, setYear] = useState('2020')

    const filterExpenseYear = (year) => {
        setYear(year)
    }

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === currentYear
    })

    return (
        <Card className="expenses">
            <div className="">

                <ExpensesFilter selectedYear={currentYear} onExpenseYear={filterExpenseYear} />

                {filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </div>
        </Card>
    )
}

export default Expenses