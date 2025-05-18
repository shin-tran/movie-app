import React from "react";

const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-black text-white shadow-sm">
      <img
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w276_and_h350_face${profilePath}`
            : `/ActorNoImage.svg`
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        {name && <p className="font-bold">{name}</p>}
        {character && <p>{character}</p>}
      </div>
    </div>
  );
};

export default ActorInfo;
