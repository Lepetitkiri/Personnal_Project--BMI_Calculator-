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
  margin: 60px;
/* Version tablette */
@media only screen and (max-width: 992px) {
  width: 80%;
}
/* Version mobile */
@media only screen and (max-width: 767px) {
  width: 95%;
}
`;

export default ImcPartStyle;