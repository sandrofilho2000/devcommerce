import LogoImg from '../../assets/logo.png';
import { Menu } from '../Menu/Menu';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { Link } from 'react-router-dom';
import React from 'react';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <header className="max-h-22 py-2 flex justify-center bg-zinc-200">
      <div className="max-w-7xl w-11/12 relative flex justify-between items-center">

        <Link to="/pagina-inicial">
          <img className="max-w-xs w-8/12" src={LogoImg} alt="logo" />
        </Link>

        <Menu />
        <MenuMobile />
      </div>
    </header>
  );
};
