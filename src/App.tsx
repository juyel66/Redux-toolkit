
import { decrement, increment } from "./redux/feature/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter)
 
  
  const handleIncrement = (amount: number) =>{
    dispatch(increment(amount))
  }


  const handleDecrement = () =>{
    dispatch(decrement())
  }


  return (
    <>


    <div className="text-center mt-16 text-5xl">
      <h1>Counter with Redux</h1>
      <button className="outline bg-green-500 border-2 " onClick={()=> handleIncrement(5)}>Increment 5</button>
      <button  className="outline bg-blue-500 border-2 " onClick={()=>  dispatch(increment(1))}>Increment</button>
      <div className="text-6xl text-sky-500">{count}</div>
      <button  className="outline bg-red-500 border-2 " onClick={handleDecrement}>Decrement</button>

    </div>
    
    </>
  )
}

export default App
