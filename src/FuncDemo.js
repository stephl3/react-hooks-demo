import React, { useState } from 'react';

export default function FuncDemo() {
  const [name, setName] = useState('Jules');

  function handleInput(e) {
    setName(e.target.value);
  }

  return (

    <section className='form'>
      <header>Yoooo, {name}</header>
      <label>New code who this?:
        <input
          value={name}
          onChange={handleInput}
        />
      </label>
    </section>

  )

}