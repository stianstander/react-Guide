// import { useState } from 'react' //this is part of React and is used to rerun the code in case of an update

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate' // Date component
import Card from '../UI/Card' //imported js that has repeatable css attached to it

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title) //this is part of React and is used to rerun the code in case of an update + can only be called here

    let title = props.title // this is why we only call 'title' below and it is connected in useState

    // const clickHandler = () => { //function to change title defined in useState
    //     setTitle('Updated...') //new title after click
    //     console.log(title + ' changed') //only changes this state and not other states of other ExpenseItems
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button>  we only call functions, we do not execute in react */}
        </Card >
    )
}

export default ExpenseItem