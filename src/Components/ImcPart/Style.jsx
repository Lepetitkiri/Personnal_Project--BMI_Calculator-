import colors from '../../Utils/Colors';
import styled from 'styled-components';

const ImcPartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  color: ${colors.black};
  background-color: ${colors.primary};
  border: 5px solid ${colors.tertiary};
  border-radius: 20px;
  padding: 2%;
  margin-top: 60px;
  margin-bottom: 60px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
  
    & .ImcCalculator__datasLine {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 40px;
      & input {
        width: 25%;
      }
    }
    & .ImcCalculator__datasLine:nth-child(1) label, .ImcCalculator__datasLine:nth-child(2) label {
      width: 20%;
    }
    & .ImcCalculator__datasLine:nth-child(1) select, .ImcCalculator__datasLine:nth-child(2) select {
      width: 20%;
    }
  }

  .ImcCalculator__ResultPart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
    &--Scale {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    &--Circle {
      width: 200px;
      height: 100px;
      background: conic-gradient(from 180deg at 50% 100%, #7FFF00, #228B22, #FFFF00, #FF0000, #FF0000);
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        border: 2px solid ${colors.secondary};
    }
    &--Arrow {
      position: absolute;
      bottom: auto;
      width: auto;
      height: 0px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 100px solid ${colors.black};
    }
    &--Imc {
      font-weight: bold;
    }
    &--Comment {
      text-align: center;
      font-size: small;
    }
  }
}

/* Version tablette */
@media only screen and (max-width: 992px) {
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
}
/* Version mobile */
@media only screen and (max-width: 767px) {
  width: 95%;
  margin-top: 10px;
  margin-bottom: 10px;
}
`;

export default ImcPartStyle;