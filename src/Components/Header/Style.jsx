import colors from '../../Utils/Colors';
import styled from 'styled-components';

const HeaderStyle = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: ${colors.tertiary};
  font-size: large;
  font-family: Montserrat,'Courier New',Courier,sans-serif;

  h1 {
    color: ${colors.black};
    text-align: center;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    font-size: small;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    font-size: x-small;
  }
`;

export default HeaderStyle;
