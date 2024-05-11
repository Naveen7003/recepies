import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
const Home = () => {
  return (
    <div>
        <div className='h-[88vh]  flex pl-24 pr'>
            <div className=''>
                <h1 className='text-[8vh] -tracking-4 font-sans mt-40 font-semibold text-green-600'>SIMPLE AND TASTY RECIPES</h1>
                <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iste impedit, id voluptatibus sit totam<br /> velit quis distinctio, tempore ipsa non </p>
                <button className='h-10 w-28 rounded-md mt-7 bg-green-600'>Get Started →</button>
            </div>
            <img className='h-[70vh] w-[60vh] mt-16 ml-10' src="https://i.pinimg.com/736x/73/15/fd/7315fd3baa9b42d32e7af98d9a92e2ce.jpg" alt="" />
        </div>
        <div>
        <h1 className='text-2xl text-center font-semibold'>Our Recipes</h1>
        <p className='text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, iusto!</p>
        <div className='flex pl-48 pt-10 flex-wrap gap-8'>
          <Link to="/recipe" className=" mb-[3%] text-center w-[20%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
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
          <Link to="/recipe" className="ml-36 mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
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
          <Link to="/recipe" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
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
          <Link to="/recipe" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
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
          <Link to="/recipe" className=" mb-[3%] text-center w-[30%]  b p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200">
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
        <h1 className='text-3xl font-semibold text-center mt-16'>Our Awesome Services</h1>
        <div className='flex flex-wrap pl-40 pr-40 gap-36'>
            <div className='h-40 w-[70vh] mt-10 flex'>
              <img className='h-40 w-28' src="https://www.freeiconspng.com/uploads/fork-knife-spoon-black-png-5.png" alt="" />
              <div>
                <h1 className='text-3xl font-semibold ml-8 mt-5'>Quality Food</h1>
                <p className='ml-8 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, rem!</p>
              </div>
            </div>
            <div className='h-40 w-[70vh] mt-10 flex'>
              <img className='h-40 w-28' src="https://atlas-content-cdn.pixelsquid.com/stock-images/graduation-hat-cap-aq3W6y5-600.jpg" alt="" />
              <div>
                <h1 className='text-3xl font-semibold ml-8 mt-5'>Cook Like a Chef</h1>
                <p className='ml-8 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, rem!</p>
              </div>
            </div>
            <div className='h-40 w-[70vh] -mt-24 flex'>
              <img className='h-40 w-28' src="https://cdn-icons-png.flaticon.com/512/157/157035.png" alt="" />
              <div>
                <h1 className='text-3xl font-semibold ml-8 mt-5'>Fresh eats</h1>
                <p className='ml-8 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, rem!</p>
              </div>
            </div>
            <div className='h-40 w-[70vh] -mt-24  flex'>
              <img className='h-40 w-28' src="https://cdn-icons-png.flaticon.com/512/57/57922.png" alt="" />
              <div>
                <h1 className='text-3xl font-semibold ml-8 mt-5'>Easy Route</h1>
                <p className='ml-8 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, rem!</p>
              </div>
            </div>
            <div className='h-40 w-[70vh] -mt-24  flex'>
              <img className='h-40 w-28' src="https://pngimg.com/d/thermometer_PNG43.png" alt="" />
              <div>
                <h1 className='text-3xl font-semibold ml-8 mt-5'>Serve Hot</h1>
                <p className='ml-8 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, rem!</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home