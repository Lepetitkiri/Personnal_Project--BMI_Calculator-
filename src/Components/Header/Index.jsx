import React from "react";
import { Link } from 'react-router-dom';
import HeaderStyle from "./Style.jsx";

function Header() {
  return (
    <HeaderStyle>
      <Link to="/"> Retour vers Accueil </Link>
    </HeaderStyle>
  );
}

export default Header;