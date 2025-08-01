const NoFavoriteCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-orange-50 border-2 border-orange-300 rounded-2xl p-8 flex flex-col items-center shadow-lg animate-pulse">
      <div className="text-6xl mb-4 animate-bounce" role="img" aria-label="No favorites">
        💔
      </div>
      <h2 className="text-2xl font-semibold text-orange-600 mb-2">No Favorites Yet</h2>
      <p className="text-center text-orange-500 max-w-xs">
        You haven't added any recipes to your favorites yet. Click the heart icon on a recipe to save it here!
      </p>
    </div>
  )
}

export default NoFavoriteCard
