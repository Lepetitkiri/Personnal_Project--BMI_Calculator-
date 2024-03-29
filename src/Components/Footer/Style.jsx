import colors from '../../Utils/Colors';
import styled from 'styled-components';

const FooterStyle = styled.footer`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: ${colors.secondary};
  font: small-caps 16px Montserrat, "Courier New", Courier, sans-serif;
  color: ${colors.black};

  p {
    text-align: center;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default FooterStyle;
