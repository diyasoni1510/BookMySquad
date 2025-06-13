import React from "react";

const ClickableIcon = ({ image, name }) => {
  return (
    <>
      <div className="group text-sm flex flex-col justify-center items-center flex-shrink-0 cursor-pointer rounded-lg p-3 transition ms-10">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover rounded-tl-3xl rounded-br-3xl border-2 border-transparent group-hover:scale-105 transition"
        />
        <p className="mt-2 group-hover:font-semibold">{name}</p>
      </div>
    </>
  );
};

export default ClickableIcon;
