import React from "react";

const PaginateIndicator = () => {
  return (
    <div className="absolute right-8 bottom-[10%] xl:right-24">
      <ul className="flex gap-1">
        <li className="h-1 w-6 cursor-pointer bg-slate-100 xl:w-8"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600 xl:w-8"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600 xl:w-8"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600 xl:w-8"></li>
      </ul>
    </div>
  );
};

export default PaginateIndicator;
