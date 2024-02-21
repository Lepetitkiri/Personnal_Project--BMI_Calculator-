import styled from 'styled-components';
import colors from './Colors';

const GlobalStyle = styled.div`

    main {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      font-family: Montserrat, 'Courier New', Courier, sans-serif;
      color: ${colors.black};
      background: ${colors.white};
      object-fit: cover;
    }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  ::placeholder {
    color: ${colors.white};
  }

  /* Version tablette */
    @media only screen and (max-width : 992px) {
      max-width: 992px;
    }

    /* Version mobile */
    @media only screen and (max-width : 767px) {
      max-width: 767px;
    }

`;

export default GlobalStyle;
