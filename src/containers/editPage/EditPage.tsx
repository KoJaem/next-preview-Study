import Router from 'next/router';
import React, { useState } from 'react'

export const EditPage = () => {
  const [name, setName] = useState(''); // Todo 성능을 고려한다면 useState 사용 X
  const [age, setAge] = useState('');
  return (
    <>
      <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
      <button onClick={() => Router.push({pathname: '/api/preview', query: {redirect: 'previewTest', name, age} })}>preview 버튼</button>
    </>
  );
}
