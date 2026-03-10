import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-base-100 shadow-xl max-w-4xl w-full gap-10 p-10 mx-auto">
      {/* Image Skeleton */}
      <div className="bg-base-200 px-10 py-12 flex items-center justify-center h-full">
        <div className="skeleton w-[300px] h-[420px] rounded-lg"></div>
      </div>

      <div className="space-y-4">
        {/* Title + Author */}
        <div className="space-y-3">
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-1/3"></div>
        </div>

        <div className="divider my-4"></div>

        {/* Review */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="skeleton h-6 w-12"></div>
          <div className="skeleton h-6 w-16"></div>
          <div className="skeleton h-6 w-14"></div>
        </div>

        <div className="divider my-0"></div>

        {/* Info */}
        <div className="space-y-3">
          <div className="skeleton h-4 w-2/3"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-1/3"></div>
        </div>

        <div className="divider my-4"></div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-8 w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
