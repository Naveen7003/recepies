import React from 'react'
import { Link } from 'react-router-dom';


const Indigrients = () => {

    
    
  return (
    <div className="w-[80%] m-auto p-5">
    <Link to="/recepie" class="text-3xl ri-arrow-left-line"></Link>
    <div className="details w-full flex h-[75vh] mt-3">
        <div className="dets w-[50%] p-[3%] shadow">
            <img className="" src={dish.image} alt="" />
            <h1 className="text-xl mb-5 mt-[10%] text-center">
                {dish.title}
            </h1>
            <p className="text-zinc-400">{dish.description}</p>
            <div className="flex justify-between py-10 px-5">
                <Link
                    to="/update-recipe"
                    className="text-blue-400 border-blue-400 border py-2 px-5"
                >
                    Update
                </Link>
                <Link className="text-red-400 border-red-400 border py-2 px-5">
                    Delete
                </Link>
            </div>
        </div>
        <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
            <h1 className="text-3xl border-b border-green-600 text-green-600">
                Ingredients
            </h1>
            <ul className="text-zinc-600 list-disc  p-3 ">
                {dish.ingredients.split(",").map((d, i) => (
                    <li className="list-item text-sm  mb-2" key={i}>
                        {d}
                    </li>
                ))}
            </ul>
            <h1 className="text-3xl border-b border-green-600 text-green-600">
                Instructions
            </h1>
            <ul className="text-zinc-600 list-decimal  p-3 ">
                {dish.instructions.split(".").map((d, i) => (
                    <li className="list-item text-sm  mb-2" key={i}>
                        {d}
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>
  )
}

export default Indigrients