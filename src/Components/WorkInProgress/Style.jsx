import colors from '../../Utils/Colors';
import styled from 'styled-components';

const WorkInProgressStyle = styled.div`

  display: flex;
  align-items: column;
  justify-content: center;
  height: 500px;
  width: 100%;
  color: ${colors.black};

  img {
    height: auto;
    width: auto;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default WorkInProgressStyle;
