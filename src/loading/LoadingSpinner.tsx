const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <div className="relative w-24 h-24">
        <div className="absolute border-4 border-t-orange-500 border-gray-300 rounded-full w-24 h-24 animate-spin"></div>
        <div className="absolute border-4 border-b-orange-500 border-gray-300 rounded-full w-16 h-16 top-4 left-4 animate-spin animation-delay-200"></div>
        <div className="absolute border-4 border-l-orange-500 border-gray-300 rounded-full w-8 h-8 top-8 left-8 animate-spin animation-delay-400"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
