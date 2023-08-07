import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-screen w-screen">
      <span className="loading loading-bars loading-lg" />
      <h1 className="text-4xl font-semibold text-primary">Loading</h1>
    </div>
  );
};

export default loading;
