import React from "react";

const loading = () => {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-md"></div>
      <div className="h-4 bg-gray-200 rounded mt-4"></div>
      <div className="h-4 bg-gray-200 rounded mt-2 w-2/3"></div>
    </div>
  );
};

export default loading;
