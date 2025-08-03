import { useState } from "react"
import { getRandomRecipe } from "../api/Filters"
import RandomRecipeModal from "../components/RandomRecipeModal"

const RandomRecipeSection = () => {
  const [randomRecipe, setRandomRecipe] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRandomClick = async () => {
    try {
      const result = await getRandomRecipe()
      setRandomRecipe(result)
      setIsModalOpen(true)
    } catch (error) {
      console.error("Failed to fetch random recipe:", error)
    }
  }

  const onClose = () => {
    setIsModalOpen(false)
    setRandomRecipe(null)
  }

  return (
    <div className="text-center">

        <div className="flex items-center justify-center ">
            <button onClick={handleRandomClick}
            className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semiboldtracking-wide tracking-wide animate-bounce">
                🍽 Click Me for Surprise!
            </button>
       </div>

        {
            isModalOpen && randomRecipe && (<RandomRecipeModal isModalOpen={isModalOpen} onClose={onClose} recipe={randomRecipe}/>)
        }
    </div>
  )
}

export default RandomRecipeSection
