import React,{useState, useEffect} from 'react'

export default function Counter(props) {
    let [count, setCount] = useState(0);
    let [title, setTitle] = useState('hello counter');
    let { onCounterChanged } = props;
    
    
    useEffect(() => {
      onCounterChanged(count)
    }, [count, onCounterChanged])
  
    let addHandler = () => {
        setCount(count + 1);
    }
    
    let decreaseHandler = () => {
        if(count !== 0)  setCount(count - 1);
    }
  
    let changeHandler = () => {
        setTitle('new title');
    }


  return (
    <div className='alert alert-danger'>
          <h1>{title}</h1>
            <button className='btn btn-info' onClick={changeHandler}>change title</button>
          <button className='btn btn-success' onClick={addHandler}>+</button>
          <span>{count}</span>
          
          <button className='btn btn-warning' onClick={decreaseHandler}>-</button>          
          {count === 0 && <p>count can't be less than 0</p>}  
    </div>
  )
}
