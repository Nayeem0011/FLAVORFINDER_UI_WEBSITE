import { motion } from "framer-motion";
import { FaSearch, FaListUl, FaGlobeAsia, FaRocket, FaThumbtack } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-orange-50 min-h-screen px-4 py-12">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-orange-500 mb-8">
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">

        <span className="text-orange-500 font-semibold">FlavorFinder</span> is your go-to destination for discovering unique recipes from around the world. We aim to make your cooking experience easier, faster, and more enjoyable with a sleek and responsive platform built using modern tools.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaSearch /> Search Recipes
          </h3>

          <p className="text-gray-600">
            Use the search bar to find meals like "Chicken", "Pasta", or "Dessert". Our system fetches real-time results using TheMealDB API.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaListUl /> Filter by Category
          </h3>

          <p className="text-gray-600">
            Select from categories like "Vegetarian", "Seafood", and more to view meals tailored to your preferences.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaGlobeAsia /> Filter by Area
          </h3>

          <p className="text-gray-600">
            Explore traditional dishes from various regions like "Indian", "Chinese", or "Mexican" by selecting the desired area.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
            <FaRocket /> Fast & Easy
          </h3>

          <p className="text-gray-600">
            Built with React, TypeScript, and Tailwind CSS, our UI ensures quick load times and a modern responsive experience.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto border-t-4 border-orange-500">

        <h3 className="text-2xl font-semibold text-orange-500 mb-2 flex items-center gap-2">
          <FaThumbtack /> Upcoming Features
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>User login & save favorite recipes</li>
          <li>Dark mode support</li>
          <li>Submit your own recipes</li>
          <li>Nutritional and calorie info</li>
        </ul>
      </motion.div>

      <p className="mt-8 text-center text-gray-500 text-sm">❤️ Designed & Developed by Nayeem</p>
    </div>
  );
};

export default About;
