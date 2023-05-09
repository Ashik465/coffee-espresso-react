/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee,handleDelete }) => {
  const {
    _id,
    name,
    availableQuantity,
    supplier,
    taste,
   
    photoURL,
  } = coffee;


 

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoURL} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full items-center  pr-4">
        <div><h2 className="card-title">{name}</h2>
        <p>{availableQuantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p></div>
        <div className="card-actions justify-end">
        <div className="btn-group btn-group-vertical space-y-2">
  <button className="btn ">view </button>
  <Link to={`/updatecoffee/${_id}`} className="btn">Edit </Link>
  <button onClick={()=>handleDelete(_id)} className="btn  bg-red-600 border-none">delete</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
