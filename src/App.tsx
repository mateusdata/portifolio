import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A Node.js project',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A React project',
    technologies: ['React', 'Redux', 'TailwindCSS'],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A React Native project',
    technologies: ['React Native', 'Expo', 'Firebase'],
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A full-stack project',
    technologies: ['Node.js', 'React', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Another React project',
    technologies: ['React', 'TypeScript', 'GraphQL'],
  },
];

export default function App() {
  return (
    <div className='bg-pink-600 min-h-screen p-8'>
      <h1 className='text-white text-4xl font-bold text-center mb-8'>My Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div key={project.id} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
            <h2 className='text-pink-600 text-2xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-700 mb-4'>{project.description}</p>
            <h3 className='text-gray-900 font-medium'>Technologies:</h3>
            <ul className='list-disc list-inside'>
              {project.technologies.map((tech, index) => (
                <li key={index} className='text-gray-700'>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
