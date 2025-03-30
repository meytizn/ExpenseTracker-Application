"use client"
import Image from "next/image";
import { useState } from "react";
import { Transaction } from "./Transaction";

export default function Home() {

const [transactions,settransactions]=useState<Transaction[]>([])  //transaction_list
const [text,settext]=useState("")
const [amount,setamount]=useState("")



function addTransaction(){
  if (!text || !amount) {
    return alert("dont leave filed empty ")
  }
  else{
    let newtransaction:Transaction={
      id:Date.now(),
      text:text,
      amount:parseFloat(amount)
    }
    settransactions([newtransaction, ...transactions])
    settext("")
    setamount("")
  }
}





function deleteTransaction(id:number){
  settransactions(transactions.filter((item)=> item.id!=id))
}



// balance counter
let total = 0
transactions.map((item)=>total+=item.amount)


// income and expense counter
let income = 0
let expense = 0
transactions.map((item)=>{
  if(item.amount>0){
    income+=item.amount
  }
  else{
    expense+=item.amount
  }
})



  return (
      <>
 
          <div className=" flex flex-row text-white  bg-red-800 h-[60px] content-center items-center  text-center text-[25px]">
            <div className="w-[100%]">Expense Tracker Application </div>
            
         
            </div>







            <div className="flex flex-col text-white  bg-gray-800 text-center text-[25px] my-10 gap-12  ">
            <div className="w-[100%] text-white">balance : $ {total} </div>
          


            <div className="flex flex-row justify-around items-center content-center text-[20px]">
              <div className="text-green-400">Income : $ {income}</div>
              <div className="text-red-400">Expense : $ {expense} </div>
              </div>


              <div className="flex flex-row justify-around items-center content-center">
              <div className=" flex flex-row justify-center w-[90%]">
                 <input type="text" value={text} onChange={(e)=>settext(e.target.value)} id="success" className="w-[95%] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="title ... " />
              </div>
              </div>




              <div className="flex flex-row justify-center items-center content-center w-[100%] ">


                <div className="flex flex-row w-[82%]">

              <div className=" flex flex-row justify-arround w-[70%] ">

                <input type="text" value={amount} onChange={(e)=>setamount(e.target.value)}  id="success" className="w-[95%] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="price ... " />
             
              </div>

              <div className=" flex flex-row justify-arround my-3 items-center content-center justify-center w-[30%]"> 
                <button type="button" onClick={()=>addTransaction()} className="w-[100%] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-2">pay</button>
              </div>



              </div>

              </div>

            </div>

            






             

          <div className="absolute bottom-0 left-0 right-0 h-[230px] p-5 bg-gray-800 ">
            
            {transactions.map((item)=>(<div className={`${item.amount>0 ?"bg-green-800":"bg-red-600" } text-white flex flex-row md:w-[50%] md:m-auto justify-around items-center content-center  my-2 rounded-md h-[35px]`} key={item.id}>
             
              <div>{item.text}</div>
             
              <div>$ {item.amount}</div>


              <div onClick={()=>deleteTransaction(item.id)}><svg className="w-6 h-6 text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
              </svg>
              </div>
               
              
              </div>))}

          </div>


      </>
  );
}
