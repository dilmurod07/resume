import React from "react";
import "./app.scss";
const Information = () => {
  return (
    <div className="information">
      <div className="informationLeft">
        <h1>
          mening ismim <strong>Abduvohob</strong>
          <p>
            I am sixteen years old. I know html , scss , css , react ,
            java-script, express, http. man 16 yoshdaman . man html , css , scss
            , react, java-script , express, http larni bilaman. men bilan
            bog'lanish uchun tepadagi nomerga murojat qiling , men bu yerda
            korganingizda koproq narsani uddalay olaman
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
