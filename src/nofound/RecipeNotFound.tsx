import { Link } from "react-router-dom"
import { FaSadTear } from "react-icons/fa"
import { motion } from "framer-motion"

const RecipeNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        <FaSadTear className="text-6xl text-orange-400 mb-4 drop-shadow-lg" />
      </motion.div>

      <h2 className="text-2xl font-bold text-orange-600 mb-2">
        Recipe Not Found
      </h2>

      <p className="text-orange-500 mb-4 max-w-md">
        We couldn’t find the recipe you were looking for. It might be removed or doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md">
        Go Back Home
      </Link>

    </motion.div>
  )
}

export default RecipeNotFound
