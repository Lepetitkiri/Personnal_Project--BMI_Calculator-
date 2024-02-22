import React, { useState, useEffect } from "react";
import ImcPartStyle from "./Style.jsx";

function ImcPart() {

  /* Initialisation du state */
  let [Weight, setWeight] = useState("");
  let [WeightUnit, setWeightUnit] = useState("kg");
  let [Size, setSize] = useState("");
  let [SizeUnit, setSizeUnit] = useState("m");
  let [Imc, setImc] = useState(0);

  /**
  * Fonction de récupération des données du formulaire
  */
  const getDatas = () => {
    setWeight(document.getElementById("Weight").value);
    setWeightUnit(document.getElementById("WeightValue").value);
    setSize(document.getElementById("Size").value);
    setSizeUnit(document.getElementById("SizeValue").value);
  }


  /**
  * Fonction de vérification de la validité du format de données renseignées dans le formulaire
  * @param {Number} Weight
  * @param {Number} Size
  * @param {String} WeightUnit
  * @param {String} SizeUnit
  * @param {HTMLElement} domElement 
  * @param {String} errorMessage 
  */

  const formChecking = (Weight, Size, domElement) => {
    let mask = /^[0-9]+([,.]|[0-9]*)[0-9]+$/;
    if (Weight === "" || Size === "") {
      domElement.innerText = `Veuillez renseigner tous les champ`;
    } else {
      if (!mask.test(Weight) || !mask.test(Size)) {
        domElement.innerText = `Veuillez remplir les cases avec des chiffres SVP`;
      } else {
        domElement.innerText = ``;
        const [WeightForCalculation] = dataFormatting(Weight, WeightUnit);
        console.log(WeightForCalculation);
      }
    }
  };


  /**
  * Fonction de formatage des datas récupérées
  * @param {String} Weight
  * @param {String} WeightUnit
  * @param {String} Size
  * @param {String} SizeUnit
  * @returns {WeightForCalculation}
  * @returns {SizeForCalculation}
  */
  const dataFormatting = (Weight, WeightUnit) => {
    let WeightForCalculation;

    switch (WeightUnit) {
      case 'kg': {
        WeightForCalculation = parseFloat(Weight.split(/[.,]/)[0])
        break;
      }
      case 'lb': {
        WeightForCalculation = Math.floor(parseFloat(Weight) * 0.453)
        break;
      }
      default: console.log('Weight unit error')
    }

    return [WeightForCalculation];
  }


  useEffect(() => {
    formChecking(Weight, Size, document.getElementById(`Message`));
  }, [Weight, Size, WeightUnit, SizeUnit]);

  const handleClick = (e) => {
    e.preventDefault();
    getDatas();
  };

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
          <input type="submit" value="Calculer" onClick={handleClick}></input>
        </div>
        <div id="Message"></div>
      </form>

      <div className='ImcCalculator__ResultPart'>
        <div className="ImcCalculator__ResultPart--Scale">
          <div className="ImcCalculator__ResultPart--Circle"></div>
          <div className="ImcCalculator__ResultPart--Arrow" id='Arrow'></div>
        </div>
        <div className="ImcCalculator__ResultPart--Imc" id="Result"></div>
        <div className="ImcCalculator__ResultPart--Comment" id="Comment">Rentrez vos données</div>
      </div>
    </ImcPartStyle >
  );
}

export default ImcPart;