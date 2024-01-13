import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  let { id } = useParams(); 

  return (
    <div className=" shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--KXJhu_2---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0vav6ffj6z02ewhozsku.jpg" 
          alt="Imagen del artículo"
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              alt="Avatar del autor"
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src="/path-to-avatar.jpg" 
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">Nombre del autor</p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Fecha de publicación</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">Título del Artículo {id}</h1>
        
        <p className="text-gray-700 text-lg mb-8">
          Este es el contenido del artículo con ID: {id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        
      </div>
    </div>
  );
};

export default Article;
