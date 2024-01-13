import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  let { username } = useParams(); 

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-2xl">Perfil de Usuario: {username}</h1>
     
    </div>
  );
};

export default User;
