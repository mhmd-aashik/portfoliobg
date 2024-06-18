import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="size-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
    </div>
  );
};

export default loading;
