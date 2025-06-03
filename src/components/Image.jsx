import { useEffect, useState } from "react";

const ImageComponent = ({ className, src, width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
      };
      return () => {
        img.onload = null;
      };
    }
  }, [src]);

  return (
    <img
      className={currentSrc === src || !src ? className : `${className} blur-md`}
      src={currentSrc}
      width={width}
      height={height}
    />
  );
};
export default ImageComponent;
