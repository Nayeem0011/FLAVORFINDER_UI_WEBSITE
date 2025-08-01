import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaUtensils, FaBalanceScale, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';
import LoadingSpinner from '../loading/LoadingSpinner';
import RecipeNotFound from '../nofound/RecipeNotFound';

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strSource: string;
  strYoutube: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <LoadingSpinner/>;
  if (!meal) return <div><RecipeNotFound/></div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-xl shadow-md mb-6" />
      <h1 className="text-3xl font-bold text-orange-500 mb-4 flex items-center gap-2"><FaUtensils /> {meal.strMeal}</h1>
      
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center gap-2"><FaBalanceScale /> Category: {meal.strCategory}</p>
        <p className="flex items-center gap-2"><FaMapMarkerAlt /> Area: {meal.strArea}</p>
        <p><strong>Instructions:</strong> {meal.strInstructions}</p>
      </div>

      {meal.strYoutube && (
        <div className="mt-6">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-orange-500 mb-2">
            <FaVideo className="text-2xl" />
            Watch Tutorial
          </h3>

          <iframe
            className="w-full aspect-video rounded-md"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}
            allowFullScreen>
          </iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;