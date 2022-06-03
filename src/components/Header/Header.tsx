import LogoImg from '../../assets/logo.png';
import { Menu } from '../Menu/Menu';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export const Header = () => {
  return (
    <header className="max-h-22 py-2 flex justify-center bg-zinc-200">
      <div className="max-w-7xl w-full relative flex justify-between items-center">
        <a href="#">
          <img className="max-w-xs w-8/12" src={LogoImg} alt="logo" />
        </a>

        <Menu />
        <MenuMobile />
      </div>
    </header>
  );
};
