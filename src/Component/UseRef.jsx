import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
        <h3>Q-1 :- What is useRef hook(Implementation)?</h3>
        <p>useState will re-render when the content change and update in UI.</p>
        <p>UseRef doesnot notify you when its content changes.Mutating the(current) property doesn't cause a re-render.</p>
        <ul className='bold'>
          <li>Implementation</li>
          </ul>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default UseRef;