import React, { useEffect, useRef, useState } from 'react'

export default function Login(props) {

    
    let [value, setValue] = useState("");
    let myRef = useRef();
    let { onDataChanged } = props;

    useEffect(() => {
        onDataChanged(value);
    }, [value, onDataChanged])

    let changeHandler = () => {
        setValue(myRef.current.value);
    }


  return (
    <div>
          <div className="alert alert-warning p-3 mt-4"> 
              <input type="text"
                  ref={myRef}
                  className='form-control'
                  placeholder='Search'
                  name="search"
              onChange={changeHandler}></input>
              <p>You typed: {value}</p>
          </div>          
    </div>
  )
}
