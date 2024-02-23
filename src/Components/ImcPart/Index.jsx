import React, { useState, useEffect, useRef } from "react";
import ImcPartStyle from "./Style.jsx";

function ImcPart() {

  /* Initialisation du state */
  let [Weight, setWeight] = useState("");
  let [WeightUnit, setWeightUnit] = useState("kg");
  let [Size, setSize] = useState("");
  let [SizeUnit, setSizeUnit] = useState("m");
  let [Imc, setImc] = useState(0);

  /* Référence pour suivre la première montée */
  const initialMount = useRef(true);

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
  * @returns {Imc}
  */
  const formChecking = (Weight, Size, WeightUnit, SizeUnit, domElement) => {
    let mask = /^[0-9]+([,.]|[0-9]*)[0-9]+$/;
    if (Weight === "" || Size === "") {
      domElement.innerText = `Veuillez renseigner tous les champ`;
    } else {
      if (!mask.test(Weight) || !mask.test(Size)) {
        domElement.innerText = `Veuillez remplir les cases avec des chiffres SVP`;
      } else {
        domElement.innerText = ``;
        const [WeightForCalculation, SizeForCalculation] = dataFormatting(Weight, WeightUnit, Size, SizeUnit);
        const Imc = imcCalculation(WeightForCalculation, SizeForCalculation);
        return Imc
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
  const dataFormatting = (Weight, WeightUnit, Size, SizeUnit) => {
    let WeightForCalculation;
    let SizeForCalculation;

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

    switch (SizeUnit) {
      case 'm': {
        SizeForCalculation = parseFloat(Size)
      }
        break;
      case 'cm': {
        SizeForCalculation = parseFloat(Size.split(/[.,]/)[0]) / 100
      }
        break;
      case 'foot': {
        SizeForCalculation = parseFloat(Size) * 0.3048
      }
        break;
      default: console.log('Size unit error')
    }

    return [WeightForCalculation, SizeForCalculation];
  }

  /**
 * Fonction de calcul de l'IMC
 * @param {Number} Weight
 * @param {Number} Size
 * @returns {Imc}
 */
  const imcCalculation = (Weight, Size) => {

    let ImcValue = Weight / (Math.pow(Size, 2));

    if (ImcValue < 18) {
      ImcValue = 18;
    } else {
      if (ImcValue > 40) {
        ImcValue = 40
      }
    }
    Imc = ImcValue.toFixed(1)
    return Imc;
  }

  /**
* Fonction de rotation de la fleche
* @param {Number} Imc
*/
  function rotationAnimation(Imc) {
    const element = document.getElementById('Arrow');

    let ImcAnimationValue = Imc;
    ImcAnimationValue = (90 / 11) * Imc - (90 + (1620 / 11));
    element.style.transform = `rotate(${ImcAnimationValue}deg)`;
    element.style.transformOrigin = 'bottom center';
    element.style.transition = 'transform 2s ease-out';
  }

  useEffect(() => {
    if (initialMount.current == true) {
      initialMount.current = false;
    } else {
      formChecking(Weight, Size, WeightUnit, SizeUnit, document.getElementById(`Message`));
      setImc(Imc);
      if (Imc !== 0) {
        document.getElementById('Result').innerText = `Votre IMC est : ${Imc}`;
        document.getElementById('Comment').innerText = `Attention, l'IMC est un outil de mesure utile, mais nous sommes des êtres complexes et votre état de santé nécessite un diagnostic complet pour être représentatif.`;
        rotationAnimation(Imc);
      }
    }
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