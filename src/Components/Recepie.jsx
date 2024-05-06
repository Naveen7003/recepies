import React from 'react'
import { Link } from 'react-router-dom'
const Recepie = () => {
  return (
    <div>
      <h1 className='text-2xl mt-9 text-center font-semibold'>Our Recipes</h1>
      <Link to="/create" className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]   bg-green-600 gap-x-3 flex items-center">Create Recepie</Link>
        <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, iusto!</p>
        <div className='flex pl-20 pr-20 pt-10 flex-wrap gap-8'>
          <Link to="/samagri" className=" mb-[3%] text-center w-[20%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png" alt="" />
                <h1 className='text-center text-xl mt-1 font-semibold'>North Indian</h1>
                <p className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
          <Link to="/samagri" className="ml-36 mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png" alt="" />
                <h1 className='text-center text-xl mt-1 font-semibold'>North Indian</h1>
                <p className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
          <Link to="/samagri" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png" alt="" />
                <h1 className='text-center text-xl mt-1 font-semibold'>North Indian</h1>
                <p className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
          <Link to="/samagri" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png" alt="" />
                <h1 className='text-center text-xl mt-1 font-semibold'>North Indian</h1>
                <p className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
          <Link to="/samagri" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
            <div className='h-[50vh] w-[50vh] bg-slate-100 shadow-2xl'>
                <img className='h-[35vh]' src="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png" alt="" />
                <h1 className='text-center text-xl mt-1 font-semibold'>North Indian</h1>
                <p className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                <div className='flex gap-24 mt-2 pl-8 pr-8 text-2xl'>
                    <i class="ri-thumb-up-line"></i>
                    <i class="ri-thumb-down-line"></i>
                    <i class="ri-share-line"></i>
                </div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Recepie