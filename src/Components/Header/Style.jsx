import colors from '../../Utils/Colors';
import styled from 'styled-components';

const HeaderStyle = styled.header`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: ${colors.primary};

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default HeaderStyle;
