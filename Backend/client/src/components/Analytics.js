import React from 'react'
import { Progress } from 'antd'

const Analytics = ({allTransection}) => {
    //category
   const categories = ['salary','tip','project','food','movie','bills','medical','fee','tax']


   //total transactions
    const totalTransection = allTransection.length
    const totalIncomeTransaction=allTransection.filter(transaction => transaction.type === 'Income')
    const totalExpenseTransaction=allTransection.filter(transaction=>transaction.type === 'expense') 
    const totalIncomePercent = (totalIncomeTransaction.length/totalTransection)*100
    const totalExpensePercent = (totalExpenseTransaction.length/totalTransection)*100

    //total turnover
    const totalTurnover = allTransection.reduce((acc,transaction) => acc + transaction.amount,0);

    const totalIncomeTurnover = allTransection.filter((transaction) => transaction.type === 'Income').reduce((acc,transaction) => acc + transaction.amount,0 )

    const totalExpenseTurnover = allTransection.filter(transaction=> transaction.type === 'expense').reduce((acc,transaction) => acc + transaction.amount,0 )

    const totalIncomeTurnoverPercent = (totalIncomeTurnover/totalTurnover)*100
    const totalExpenseTurnoverPercent = (totalExpenseTurnover/totalTurnover)*100;
  return (
    <>
     <div className='row m-3'>
        <div className='col-md-4'>
            <div className='card'>
                 <div className='card-header'>
                     Total Transactions : {totalTransection}
                 </div>
                 <div className='card-body'>
                 <h5 className='text-success'>Income : {totalIncomeTransaction.length}</h5>
                 <h5 className='text-danger'>Expense : {totalExpenseTransaction.length}</h5>
                 <div>
                 <Progress type="circle" 
                 strokeColor={'green'} 
                 className='mx-2'
                 percent={totalIncomePercent.toFixed(0)}
                 />
                 <Progress type="circle" 
                 strokeColor={'red'} 
                 className='mx-2'
                 percent={totalExpensePercent.toFixed(0)}/>
            </div>
            </div>
        </div>
        </div>
        <div className='col-md-4'>
            <div className='card'>
                 <div className='card-header'>
                     Total TurnOver : {totalTurnover}
                 </div>
                 <div className='card-body'>
                 <h5 className='text-success'>Income : {totalIncomeTransaction.length}</h5>
                 <h5 className='text-danger'>Expense : {totalExpenseTransaction.length}</h5>
                 <div>
                 <Progress type="circle" 
                 strokeColor={'green'} 
                 className='mx-2'
                 percent={totalIncomeTurnoverPercent.toFixed(0)}
                 />
                 <Progress type="circle" 
                 strokeColor={'red'} 
                 className='mx-2'
                 percent={totalExpenseTurnoverPercent.toFixed(0)}/>
            </div>
          </div>
        </div>
      </div>
   </div>
        <div className='row mt-3'>
        <div className='col-md-4'>
        <h4 className='Incomeblock'>Categorywise Income</h4>
        {
            categories.map((category)=>{
                const amount = allTransection.filter(transaction => transaction.type === 'Income' && transaction.category.toLowerCase() === category.toLowerCase())
                .reduce((acc,transaction)=> acc + transaction.amount,0);
                return(
                    amount>0 && (
                    <div className='card'>
                    <div className='card-body'>
                    <h5>{category}</h5>
                    <Progress 
                    percent={((amount/totalIncomeTurnover)*100).toFixed(0)}/>
                    </div>
                    </div>
                )
                )
                
            })
        }
        </div>
        <div className='col-md-4'>
        <h4 class="Expenseblock">Categorywise Expense</h4>
        {
            categories.map((category)=>{
                const amount = allTransection.filter(transaction => transaction.type === 'expense' && transaction.category.toLowerCase() === category.toLowerCase())
                .reduce((acc,transaction)=> acc + transaction.amount,0);
                return(
                    amount>0 && (
                    <div className='card'>
                    <div className='card-body'>
                    <h5>{category}</h5>
                    <Progress 
                    percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
                    </div>
                    </div>
                )
                )
                
            })
        }
        </div>
        </div> 
     </>
  )
}

export default Analytics
