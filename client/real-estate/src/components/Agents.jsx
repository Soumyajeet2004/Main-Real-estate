import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles/Agents.css';

const agentsData = [
  {
    img: "https://img.lovepik.com/element/40247/1471.png_1200.png",
    name: "Arjun Mehra",
    contact: "+91 9876543210",
    location: "Delhi, India",
  },
  {
    img: "https://thumbs.dreamstime.com/b/government-agent-black-male-bodyguard-wearing-sunglasses-black-suit-35529797.jpg?w=768",
    name: "Soubhik Bhattacharya",
    contact: "+91 9123456780",
    location: "Mumbai, India",
  },
  {
    img: "https://thumbs.dreamstime.com/b/government-agent-black-male-bodyguard-wearing-sunglasses-black-suit-35529813.jpg",
    name: "Soumyajeet Saha",
    contact: "+91 9988776655",
    location: "Bangalore, India",
  },
];

const Agents = () => {
    const copyToClipboard = (number) => {
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
  };
  return <>
    <div className="agents-container">
      <h1 className="page-title">Details of Agents</h1>
      <ul className="agents-list">
        {agentsData.map((agent, index) => (
          <li key={index} className="agent-card">
            <img src={agent.img} alt={`${agent.name} Photo`}/>
            <div className="agent-details">
              <p>
                <strong>Name:</strong> {agent.name}
              </p>
              <p>
                <strong>Contact:</strong> {agent.contact}
              </p>
              <p>
                <strong>Location:</strong> {agent.location}
              </p>
            </div>
            <div className="button-container">
              <button onClick={() => copyToClipboard(agent.contact)}>
                Copy Number
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  </>
}

export default Agents
