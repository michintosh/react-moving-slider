import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./MovingSlider.css";

function MovingSlider({
  minHeight = 20,
  maxHeight = 100,
  numColumns = 30,
  images,
  smartphoneNumColumns = 15,
  fixedHeight,
  fixedWidth,
  speed = 3
}) {
  const isBrowser = typeof window !== "undefined";
  const isSmartphone = 768;
  const [close, setClose] = useState(false);
  const [windows, setWindows] = useState(isBrowser ? window.innerWidth < isSmartphone ? smartphoneNumColumns : numColumns : numColumns);
  const [img, setImg] = useState(0);
  const [title, setTitle] = useState(0);

  const handleSlide = () => {
    if (!close) {
      setClose(true);
      setTimeout(() => {
        if (img < images.length - 1) {
          setImg(img + 1);
          setTitle(title + 1);
        } else {
          setImg(0);
          setTitle(0);
        }

        setTimeout(() => {
          setClose(false);
        }, 500);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", function () {
        if (window.innerWidth < isSmartphone) {
          setWindows(smartphoneNumColumns);
        }

        if (window.innerWidth > isSmartphone && windows != numColumns) {
          setWindows(numColumns);
        }
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "movingslider-container",
    style: {
      height: fixedHeight != undefined ? `${fixedHeight}px` : "100%",
      width: fixedWidth != undefined ? `${fixedWidth}px` : "100%"
    }
  }, [...Array(windows).keys()].map((key, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      onClick: images.length > 1 ? handleSlide : () => {},
      key: idx,
      className: `movingslider ${close ? "__close" : ""}`,
      style: {
        height: `${Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight}%`,
        backgroundImage: `url(${images[img]})`,
        animation: `mover ${speed}s infinite cubic-bezier(0.41, 0.01, 0.69, 0.99) alternate`,
        animationDelay: `-${Math.floor(Math.random() * 10) + 1}s`
      }
    });
  }));
}

MovingSlider.propTypes = {
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  numColumns: PropTypes.number,
  images: PropTypes.array.isRequired,
  smartphoneNumColumns: PropTypes.number,
  fixedHeight: PropTypes.number,
  fixedWidth: PropTypes.number,
  speed: PropTypes.number
};
export default MovingSlider;