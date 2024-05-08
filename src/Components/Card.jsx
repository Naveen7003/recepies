import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
    const {id,image,title,description,instruction,ingredients} = props.recipe
  return (
    <div className=''>
        <Link to={`/recipe/{id}`} className=" shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src={image} alt="{title}" />
                <h1 className='text-center text-xl mt-1 font-semibold'>{title}</h1>
                <p className='text-center font-semibold'>{description.slice(0,100)}</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
    </div>
  )
}

export default Card