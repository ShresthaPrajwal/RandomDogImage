import React from "react";

const Image = ({ src, alt }) => {
  return (
    <div className="w-80 h-80 rounded-lg m-5 ">
      <img src={src} alt={alt} className="object-contain w-full h-full" />
    </div>
  );
};

export default Image;
