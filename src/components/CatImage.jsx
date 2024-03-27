import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CatImage() {
  const location = useLocation();
  const { catUrl } = location.state;
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "800px", height: "800px", objectFit: "cover" }}
        src={catUrl}
        alt="Cat"
      />
      <br />
      <br />
      <button
        style={{
          padding: "20px 40px",
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </div>
  );
}

export default CatImage;
