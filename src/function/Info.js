import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log(name);
    return() => {
      console.log('cleanUp');
    };
  }, [name]);

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNickName = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickName} />
    </div>
  );
};

export default Info;