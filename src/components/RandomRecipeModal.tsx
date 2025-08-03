import { Dialog } from "@headlessui/react"
import { Fragment } from "react"
import { FaUtensils } from "react-icons/fa"

type RandomRecipeModalProps = {
  isModalOpen: boolean
  onClose: () => void
  recipe: {
    idMeal: string
    strMeal: string
    strMealThumb: string
    strCategory: string
    strArea: string
    strInstructions: string
  } | null
}

const RandomRecipeModal = ({ isModalOpen, onClose, recipe }: RandomRecipeModalProps) => {
  if (!recipe) return null

  return (
    <Dialog open={isModalOpen} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
        <Dialog.Panel className="bg-gradient-to-br from-orange-50 to-white shadow-2xl rounded-2xl max-w-lg w-full p-6 border border-orange-200 relative">
          
          <div className="absolute -top-6 left-6 bg-orange-500 p-3 rounded-full shadow-lg">
            <FaUtensils className="text-white text-xl" />
          </div>

          <Dialog.Title className="text-2xl font-bold text-orange-500 mb-3 mt-3 text-center">
            {recipe.strMeal}
          </Dialog.Title>

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-xl mb-4 w-full h-52 object-cover shadow-md"/>

          <div className="space-y-1 text-sm text-gray-700 mb-3">
            <p><span className="font-medium text-gray-900">Category:</span> {recipe.strCategory}</p>
            <p><span className="font-medium text-gray-900">Area:</span> {recipe.strArea}</p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 italic">
            {recipe.strInstructions}
          </p>

          <div className="mt-5 text-right">
            <button
              onClick={onClose}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition duration-300 shadow-md">
              Close
            </button>
          </div>
          
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default RandomRecipeModal
