import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const SwipeScreen = () => {
  const [catUrl, setCatUrl] = useState("https://cataas.com/cat");
  const [initialX, setInitialX] = useState(0);
  const [dragDirection, setDragDirection] = useState(null);

  const navigate = useNavigate();
  
  const handleImageClick = () => {
    navigate("/cat-image", { state: { catUrl } });
  };

  const handleDragStart = (event, info) => {
    setInitialX(info.point.x);
  };

  const handleDrag = (event, info) => {
    if (info.point.x > initialX) {
      setDragDirection("Right");
    } else {
      setDragDirection("Left");
    }
  };

  const handleDragEnd = () => {
    console.log(dragDirection);
    fetchCatImage();
  };

  const fetchCatImage = () => {
    fetch("https://cataas.com/cat")
      .then((response) => response.blob())
      .then((blob) => {
        setCatUrl(URL.createObjectURL(blob));
      });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        src={catUrl}
        alt="Cat"
        onClick={handleImageClick}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default SwipeScreen;