import React from "react";
import ImcPartStyle from "./Style.jsx";

function ImcPart() {

  return (
    <ImcPartStyle>
      <form method="post" className="ImcCalculator__datas">

        <div className="ImcCalculator__datasLine">
          <label htmlFor="Weight"> Poids : </label>
          <input type="text" name="Weightpart" id="Weight"></input>
          <select name="Weight" id="WeightValue">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>

        <div className="ImcCalculator__datasLine">
          <label htmlFor="Size"> Taille : </label>
          <input type="text" name="Sizepart" id="Size"></input>
          <select name="Size" id="SizeValue">
            <option value="m">m</option>
            <option value="cm">cm</option>
            <option value="foot">foot</option>
          </select>
        </div>

        <div className="ImcCalculator__datasLine">
          <input type="submit" value="Calculer"></input>
        </div>
        <div id="Message"></div>
      </form>
    </ImcPartStyle >
  );
}

export default ImcPart;