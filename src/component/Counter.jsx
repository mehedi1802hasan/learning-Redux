import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const {count}  = useSelector((state) => state.counter)
    const dispatch =useDispatch();
    console.log(count);
    return (
        <div className="mt-16 w-52 mx-auto">
                      <button onClick={()=>dispatch(incrementByValue(5))} className="bg-blue-500">Payload</button>
<hr /> <hr />
          <button onClick={()=>dispatch(increment())} className="bg-red-500">increment</button>
          <hr />
          <h3>{count}</h3> <hr />   
          
          <button onClick={()=>dispatch(decrement())} className="bg-yellow-500">dicrement</button>    </div>
    );
};

export default Counter;