import React, { useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';

const Ingredients = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [recipe, setrecipe] = useContext(Recipecontext);
    const recipes = recipe.find((r) => r.id == params.id);

    const deleteHandler = () => {
        setrecipe(recipe.filter((r) => r.id != params.id));
        localStorage.setItem(
            "recipe",
            JSON.stringify(recipe.filter((r) => r.id != params.id))
        );
        toast.success("Recipe deleted Successfully!")
        navigate("/recipe")
    }
   
    return recipes ? (
        <div className="w-[80%] m-auto p-5">
            <Link to="/recipe" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img className="" src={recipes.image} alt="" />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {recipes.title}
                    </h1>
                    <p className="text-zinc-400">{recipes.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link
                            to={`/update-recipe/${params.id}`}
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <button onClick={deleteHandler} className="text-red-400 border-red-400 border py-2 px-5">
                            Delete
                        </button>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc  p-3 ">
                        {recipes.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Instructions
                    </h1>
                    <ul className="text-zinc-600 list-decimal p-3">
                        {recipes.instructions.split(",").map((d, i) => (
                            <li className="list-item text-sm mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) :  (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );;
}

export default Ingredients;
