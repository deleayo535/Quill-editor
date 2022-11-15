import React from "react";
// import { imageProps } from "./image.types";

export const Image = ({
  srcSet,
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  bodyClassName,
  containerStyle,
  className,
  onClick,
  style,
}) => {
  return (
    <picture
      onClick={onClick}
      className={bodyClassName}
      style={{ ...containerStyle }}
    >
      <source srcSet={srcSet || src} />
      <img
        src={src}
        alt={alt || ""}
        style={{ width, height, layout, objectFit, ...style }}
        className={className}
      />
    </picture>
  );
};
