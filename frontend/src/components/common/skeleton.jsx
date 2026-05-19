const SkeletonCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">
      <div className="h-5 bg-gray-300 rounded w-1/2 mb-5"></div>

      <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>

      <div className="h-10 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

export default SkeletonCard;