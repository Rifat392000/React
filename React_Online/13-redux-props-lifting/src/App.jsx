import { useState } from "react";

import Counter from "./Components/Counter";
import Stats from "./Components/Stats";


const initialCounters =[
  {
    id : 1,
    value:0
  },

  {
    id : 2,
    value:8
  },

  {
    id : 3,
    value:0
  }


]

export default function App() {


const [counters, setCounters] = useState(initialCounters);




const handleIncrement = (counterId) => {
 setCounters(counters.map((counter) => {
  if (counter.id === counterId) {
    return {
      ...counter,
      value: counter.value + 1,
    };
  }
  return counter;
}))
  
};

const handleDecrement = (counterId) => {
  setCounters(counters.map((counter) => {
    if (counter.id === counterId) {
      return {
        ...counter,
        value: counter.value - 1,
      };
    }
    return counter;
  }))
  
};


const totalCount = counters.reduce(
  (sum, current) => sum + current.value,
  0
);



  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
       
      {counters.map((counter) => (
  <Counter
    count={counter.value}
    key={counter.id}
    onIncrement={() => handleIncrement(counter.id)}
    onDecrement={() => handleDecrement(counter.id)}
  />
))}
        <Stats count={totalCount}/>
      </div>
    </div>
  );
}