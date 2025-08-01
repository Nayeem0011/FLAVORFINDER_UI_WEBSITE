import { useSelector } from "react-redux"
import RecipeCard from "./RecipeCard"
import type { RootState } from "../redux/store"
import NoFavoriteCard from "../nofound/NoFavoriteCard"

const Favorite = () => {
  const favorites = useSelector((state: RootState) => state.favorite.favorites)

  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      <h2 className="flex items-center justify-center text-orange-500 text-2xl font-bold mb-6">Your Favorite Recipes</h2>
      {
        favorites.length === 0 ? (
          <p><NoFavoriteCard/></p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map(item => <RecipeCard key={item.idMeal} item={item} />)}
          </div>
        )
      }
    </div>
  )
}

export default Favorite
