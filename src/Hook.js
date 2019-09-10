import React, { useState, useEffect } from 'react';

export default function FuncDemo() {
  const [name, setName] = useState('');

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleColor() {
    if (name === 'Voldemort') {
      document.getElementsByClassName('form')[1].style.backgroundColor = 'red';
    } else {
      document.getElementsByClassName('form')[1].style.backgroundColor = 'white';
    }
  }

  useEffect(() => {
    document.title = name;
  });

  useEffect(() => {
    handleColor();
  });

  return (

    <section className='form'>
      <header>Welcome, {name}</header>
      <label>Please provide your name 
        <input
          value={name}
          onChange={handleInput}
        />
      </label>
    </section>

  )
}

