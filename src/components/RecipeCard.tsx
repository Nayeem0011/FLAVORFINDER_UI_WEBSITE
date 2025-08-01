import { Heart, HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBalanceScale, FaUtensils, FaThumbtack } from "react-icons/fa";
import { addToFavorite, removeFromFavorite } from '../redux/favoriteSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from "../redux/store";

interface RecipeProps {
  item: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
    strSource: string;
    strMeasure1?: string;
  };
}

const RecipeCard = ({ item }: RecipeProps) => {
  const dispatch = useDispatch()
const favorites = useSelector((state: RootState) => state.favorite.favorites)
const isFav = favorites.some(fav => fav.idMeal === item.idMeal)


  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all relative border border-gray-100 group">
      <div className="overflow-hidden">
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"/>
      </div>

      <div className="p-4 space-y-2 pb-20">
        <h2 className="text-xl font-bold text-orange-500 flex items-center gap-2">
          <FaThumbtack className="text-orange-500" /> {item.strMeal}
        </h2>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaThumbtack className="text-gray-500" /> Category: {item.strCategory}
        </p>

        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" /> Area: {item.strArea}
        </p>

        {item.strMeasure1 && (
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaBalanceScale className="text-gray-500" /> Primary Measure: {item.strMeasure1}
          </p>
        )}
      </div>

      <Link
        to={`/recipe/${item.idMeal}`}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] text-center text-white bg-[#ff6b35] px-4 py-2 rounded-full text-sm shadow-md hover:bg-[#ff550f] transition flex items-center justify-center gap-2">
        <FaUtensils /> View Full Recipe
      </Link>

      <button
      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      onClick={() => {
        if (isFav) {
          dispatch(removeFromFavorite(item.idMeal))
          } else {
            dispatch(addToFavorite(item))
          }
        }}>

          {isFav ? (
            <HeartOff className="text-red-500 w-5 h-5" />
            ) : (
              <Heart className="text-gray-500 w-5 h-5" />
          )}
      </button>
    </div>
  );
};

export default RecipeCard;

