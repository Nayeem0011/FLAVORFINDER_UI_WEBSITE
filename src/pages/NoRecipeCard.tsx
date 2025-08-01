const NoRecipeCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-orange-50 border-2 border-orange-300 rounded-2xl p-8 flex flex-col items-center shadow-lg animate-pulse">
      <div className="text-6xl mb-4 animate-bounce" role="img" aria-label="No results">
        😞
      </div>
      <h2 className="text-2xl font-semibold text-orange-600 mb-2">No Recipe Found</h2>
      <p className="text-center text-orange-500 max-w-xs">
        Sorry, we couldn’t find any recipes matching your search or filters. Try different keywords or reset filters.
      </p>
    </div>
  )
}

export default NoRecipeCard;
