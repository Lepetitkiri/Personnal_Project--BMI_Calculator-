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