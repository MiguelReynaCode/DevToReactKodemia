import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const articles = [
    {
      id: 123,
      title: 'Cómo hacer un perfil de GitHub impresionante',
      excerpt: 'Mejora tu perfil de GitHub para destacar en la comunidad de desarrolladores...',
      image: 'https://via.placeholder.com/150' 
    },
    
  ];

  return (
    <div className="container px-2 bg-gay-200 pt-6">
        <div className="flex ">
      <a className="text-xl font-bold hover:text-indigo-700 hover:bg-white p-2  rounded-md mb-6">
        Relevant
      </a>
      <a className="text-xl hover:text-indigo-700 hover:bg-white p-2  rounded-md mb-6">
        Lates
      </a>
      <a className="text-xl hover:text-indigo-700 hover:bg-white p-2  rounded-md mb-6">
        top
      </a>
      </div>
      
      <div className="space-x-6 mr-4">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg border border-gray-300  overflow-hidden">
            <img className="w-full h-64 object-cover" src={article.image} alt={article.title} />
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-3">{article.title}</h2>
              <p className="text-gray-700 mb-3">{article.excerpt}</p>
              <Link to={`/article/${article.id}`} className="text-blue-600 hover:underline">
                Leer más
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
