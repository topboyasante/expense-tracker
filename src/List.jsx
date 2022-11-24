import React from 'react'

function List({expenses}) {
  return (
    <ul className='grid grid-cols-3 gap-3'>
        {
            expenses.map((item)=>{
                return(
                    <li key={item.id}>
                        <p className='text-xl text-center border shadow-sm my-2 rounded-md p-3'>
                            {item.name} - GHC {item.amount}
                        </p>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default List