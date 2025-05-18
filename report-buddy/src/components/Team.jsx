import React from "react";
import dhirajImage from '../assets/Dhiraj.jpeg'; // path relative to the file
import AshishImage from '../assets/Ashsih.jpeg';
import Omkarimage from '../assets/Omkar.jpeg';


const teamMembers = [
  {
    name: "Dhiraj Patil",
    role: "Lead Developer",
    image: dhirajImage,
  },
  {
    name: "Omkar Kumbhar",
    role: "AI Specialist/Researcher",
    image: Omkarimage,
  },
  {
    name: "Ashish",
    role: "UI/UX Designer",
    image: AshishImage,
  },
 
];

const Team = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-500 to-indigo-500 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">👥 Meet Our Team</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Behind every great project is a team of passionate minds working together. Here's the core team that brought this idea to life.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-100 h-100 rounded-full mx-auto mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-500 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
