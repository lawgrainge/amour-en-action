import React from "react";

import "./polaroid-image.css";

function PolaroidImage(props) {
  const { src, alt } = props;

  return (
    <div className="polaroid-image">
      <div className="polaroid-image__container">
        {src && <img src={src} alt={alt} />}
      </div>
    </div>
  );
}

export default PolaroidImage;
