export default function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="h-screen bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 bg-gray-400 rounded w-64 mx-auto mb-4"></div>
            <div className="h-8 bg-gray-400 rounded w-48 mx-auto mb-8"></div>
            <div className="h-16 bg-gray-400 rounded w-80 mx-auto mb-6"></div>
            <div className="flex justify-center space-x-4">
              <div className="h-12 bg-gray-400 rounded w-32"></div>
              <div className="h-12 bg-gray-400 rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Skeleton */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-300 rounded w-96 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-64 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                <div className="flex space-x-3">
                  <div className="h-10 bg-gray-300 rounded flex-1"></div>
                  <div className="h-10 bg-gray-300 rounded flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}