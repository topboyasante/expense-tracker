import React, {useState,useContext,useEffect} from 'react'
import {BsMoon,BsSun} from 'react-icons/bs'
import { AppContext } from './AppContext'
import List from './List'

function ExpenseTracker() {
    const {dark,setDark} = useContext(AppContext)

    function toggleDarkMode(){
        setDark(!dark)
    }

    //Gets Items //Understand!
    const allExpenses = localStorage.getItem('expenses')
    ? JSON.parse(localStorage.getItem('expenses'))
    : [];
  
    const [expenses,setExpenses] = useState(allExpenses)

    const [name,setName] = useState()
    const [amount,setAmount] = useState()

    // Storage // Understand!
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
      }, [expenses]);

    function handleName(event){
        setName(event.target.value)
    }
    function handleAmount(event){
        setAmount(event.target.value)
    }
    function handleSubmitForm(event){
        event.preventDefault()
        if(name !== '' & amount>0){
            const newExpense = {name,amount}
            setExpenses([...expenses,newExpense])
            setName('');
            setAmount('');
        }else{
            alert('Invalid Expense or Amount.')
        }
    }

    function handleClearExpenses(){
        setExpenses([])
    }

  return (
    <main className={dark?'max-w-[1240px] mx-auto h-screen p-5 text-white':'max-w-[1240px] mx-auto h-screen p-5'}>
        {/* Card */}
        <section className='w-full h-full'>
            {/* Navigation */}
            <nav className='flex justify-between items-center p-5 shadow-md rounded-3xl'>
                <h1 className='font-bold text-2xl'>ExpenseTracker</h1>
                {dark?<BsSun onClick={toggleDarkMode} size={30}/>:<BsMoon onClick={toggleDarkMode} size={30}/>}
            </nav>
           <section className='flex flex-col items-center justify-center h-[90%] mt-2'>
                {/* Info Board */}
                <section>
                    <h1 className='text-center my-5 text-2xl'>Your Total Expenses:</h1>
                    <p className={dark?'text-center text-3xl text-white':'text-center text-5xl text-green-900'}>
                        {`GHC ${
                            expenses.reduce((accumulator,currentValue)=>{
                                return accumulator+=parseInt(currentValue.amount)
                            },0)
                        }`}
                    </p>
                </section>
                {/* Form */}
                <br />
                <form className='text-center' onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="expense" className='text-xl text-center'>What Did We Spend Money On?</label>
                        <br />
                        <input type="text" placeholder='What did you Buy?' className={dark?'border rounded-md p-2 w-[300px] text-black':'border rounded-md p-2 w-[300px]'} 
                        value={name} onChange={handleName}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="expense" className='text-xl text-center'>How Much Was It?</label>
                        <br />
                        <input type="number" placeholder='Write the Price' className={dark?'border rounded-md p-2 w-[300px] text-black':'border rounded-md p-2 w-[300px]'}
                        value={amount} onChange={handleAmount}/>
                    </div>
                    <button className={dark?'bg-white text-green-900 text-2xl my-5 p-2 rounded-md shadow-md'
                    :'bg-green-900 text-white text-2xl my-5 p-2 rounded-md shadow-md'}
                    >Add Expense</button>
                </form>
                <button className={dark?'bg-white text-red-900 text-2xl my-5 p-2 rounded-md shadow-md'
                    :'bg-red-900 text-white text-2xl my-5 p-2 rounded-md shadow-md'}
                    onClick={handleClearExpenses}
                    >Delete Expenses</button>
                <br />
                <List expenses={expenses}/>
           </section>
        </section>
    </main>
  )
}

export default ExpenseTracker