import Router from 'next/router';
import React from 'react';
type Props = {
  name?: string;
  age?: string;
};
export const PreviewTestPage = ({ name, age }: Props) => {
  return (
    <>
      <h1>preview Mode</h1>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
      <button onClick={() => Router.push('/api/disable-preview')}>
        preview mode 해제
      </button>
      <button onClick={() => Router.push('/')}>
        해제하지않고 index 페이지로
      </button>
    </>
  );
};
