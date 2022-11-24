import React, {useState} from 'react'
import {AppContext} from './AppContext'
import ExpenseTracker from './ExpenseTracker'

function App() {
  const[dark,setDark] = useState(false)
  return (
    <AppContext.Provider value={{dark,setDark}}>
      <div className={dark?'bg-[#264653]':''}>
      <ExpenseTracker/>
      </div>
    </AppContext.Provider>
  )
}

export default App