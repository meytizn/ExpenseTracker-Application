import Image from "next/image";

export default function Home() {
  return (
      <>
 
          <div className="flex flex-row  bg-red-800 text-white  bg-gray-800 h-[60px] content-center items-center  text-center text-[25px]">
            <div className="w-[100%]">Tracker application </div>
            
         
            </div>







            <div className="flex flex-col text-white  bg-gray-800 text-center text-[25px] my-10 gap-12">
            <div className="w-[100%] text-green-500">balance : $ 800 </div>
          


            <div className="flex flex-row justify-around items-center content-center">
              <div>benefit : </div>
              <div>negative : </div>
              </div>


              <div className="flex flex-row justify-around items-center content-center">
              <div className=" flex flex-row justify-center w-[90%]"> <input type="text" id="success" className="w-[95%] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="title ... " />
              </div>
              </div>




              <div className="flex flex-row justify-center items-center content-center ">
              <div className=" flex flex-row justify-arround w-[60%]"> <input type="text" id="success" className="w-[95%] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="price ... " />
              </div>

              <div className=" flex flex-row justify-arround my-3 items-center content-center justify-center w-[30%]"> 
                <button type="button" className="w-[100%] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-2">Green</button>

              </div>
              </div>

            </div>
      </>
  );
}
