import React, { useState, useEffect } from 'react';

export default function FuncDemo() {
  const [name, setName] = useState('Jules');

  function handleInput(e) {
    setName(e.target.value);
  }

  function handleColor() {
    if (name === 'Maria') {
      document.getElementsByClassName('form')[1].style.backgroundColor = 'red';
    } else {
      document.getElementsByClassName('form')[1].style.backgroundColor = 'white';
    }
  }

  useEffect(() => {
    document.title = name;
  })

  useEffect(() => {
    handleColor();
  })

  return (

    <section className='form'>
      <header>Yoooo, {name}</header>
      <label>New code who this?
        <input
          value={name}
          onChange={handleInput}
        />
      </label>
    </section>

  )
}

