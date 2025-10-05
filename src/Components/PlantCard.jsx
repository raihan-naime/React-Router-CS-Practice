import React from "react";
import { useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  const { description, id, image, name } = plant;
  // console.log(plant);
  const navigate = useNavigate()

  return (
    <div className="card p-5 bg-gray-100 hover:bg-gray-300  shadow-sm">
      <figure>
        <img className="h-100 w-full object-cover rounded-lg" src={image} alt={name} />
      </figure>
      <div className="card-body text-2xl">
        <h2 className="card-title text-2xl">Name: {name}</h2>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <button onClick={()=> navigate(`/plant-details/${id}`, {state:plant})} className="btn btn-primary text-xl">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
