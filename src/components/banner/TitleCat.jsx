import React from "react";

const TitleCat = ({ title, description }) => {
  return (
    <div style={{ margin: "0 auto", width: "100%", textAlign: "center" , marginTop:'70px'}}>
      <div className="standard_wrapper">
        <h2 className="page_title">{title}</h2>
        <p className="page_tagline">{description}</p>
      </div>
    </div>
  );
};

export default TitleCat;
