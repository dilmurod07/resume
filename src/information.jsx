import React from "react";
import "./app.scss";
const Information = () => {
  return (
    <div className="information">
      <div className="informationLeft">
        <h1>
          mening ismim <strong>Abduvohob</strong>
          <p>
            men 16 yoshdaman men web-dasturlashga qiziqaman hozirda najot
            talimda backend node js yonalishida oqiyapman
          </p>
        </h1>
      </div>
      <div>
        <img
          className="informationLogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zU9oVJCA7L04y0hPqmpHz910ZezLgRFwFlE34BDrNHzXG87iT1sXA2_dnyn7QvD7ljI&usqp=CAU"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Information;
