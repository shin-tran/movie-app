import React from "react";
import ActorInfo from "./ActorInfo";

const ActorList = () => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        <ActorInfo />
        <ActorInfo />
        <ActorInfo />
        <ActorInfo />
      </div>
    </div>
  );
};

export default ActorList;
