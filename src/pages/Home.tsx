import { useState } from "react"
import RecipeCard from "../components/RecipeCard"
import { useQuery } from "@tanstack/react-query"
import { getAreas, getCategories, getRecipe, getRecipesByAreas, getRecipesByCategory } from "../api/Filters"
import LoadingSpinner from "../loading/LoadingSpinner"
import NoRecipeCard from "../nofound/NoRecipeCard"
import { FiSearch } from "react-icons/fi"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const Home = () => {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [area, setArea] = useState("")

    const {data:categories = []} = useQuery({
      queryKey:["categories"],
      queryFn:getCategories
    })

    const {data:areas = []} = useQuery({
      queryKey:["areas"],
      queryFn:getAreas
    })
    

    const {data:recipes = [], isLoading} = useQuery({
      queryKey:["recipes", search, category, area ],
      queryFn: async () =>{
        if(search) return getRecipe(search)
          if(category) return getRecipesByCategory(category)
            if(area) return getRecipesByAreas(area)
              return getRecipe("chicken")
      }
    })

  return (
    <div className="px-4 sm:px-6 md:px-8 my-5 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="w-full">
          <label className="block mb-2 text-orange-500 text-[20px] font-semibold">Filter by Category</label>
          <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setSearch("")
            setArea("")}}
            className="w-full px-4 py-2 border-2 border-orange-500 rounded-md text-orange-600 font-semibold focus:ring-2 focus:ring-orange-400 transition outline-none">
              <option value="">All Categories</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="w-full">
          <label className="block mb-2 text-orange-500 text-[20px] font-semibold">Filter by Area</label>
          <select
          value={area}
          onChange={(e) => {
            setArea(e.target.value)
            setCategory("")
            setSearch("")}}
            className="w-full px-4 py-2 border-2 border-orange-500 rounded-md text-orange-600 font-semibold focus:ring-2 focus:ring-orange-400 transition outline-none">
              <option value="">All Areas</option>
              {areas.map((ar) => <option key={ar} value={ar}>{ar}</option>)}
          </select>
        </motion.div>
      </div>

       {/* Hero Section with Background Image and Animated Title */}
      <motion.div 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10 shadow-xl">

        <img
        src="backgroundimage.jpeg"
        alt="Delicious Food Banner"
        className="absolute inset-0 w-full h-full object-cover"/>

        <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="p-2 text-white text-3xl md:text-5xl font-bold tracking-wide text-center drop-shadow-md ">
          Discover Delicious Recipes from Around the World
        </motion.h1>
      </motion.div>

       {/* Search Box */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="w-full relative mb-10">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-orange-500 focus:ring-2 focus:ring-orange-400 font-semibold text-orange-500 placeholder-orange-400 transition outline-none"/>
          <FiSearch size={20} className="absolute top-1/2 left-3 -translate-y-1/2 text-orange-500 pointer-events-none" />
      </motion.div>

      {
        isLoading ? <LoadingSpinner/> : 
        recipes.length === 0 ? <NoRecipeCard/> : (
            <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
                {
                    recipes.map((item)=><RecipeCard item={item} key={item.idMeal}/>)
                }
            </div>
        )
      }
    </div>
  )
}

export default Home

