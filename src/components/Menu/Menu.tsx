import { ShoppingCart } from 'phosphor-react';
import { SearchProduct } from '../SearchProduct/SearchProduct';

export const Menu = () => {
  return (
    <nav className="gap-5 items-center hidden sm:flex">
      <button className="p-2 bg-zing-800 rounded-md border-transparent  hover:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-neutral-800">
        Entrar
      </button>
      |
      <button className="p-2 bg-zing-800 rounded-md border-transparent  hover:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-neutral-800">
        Criar Conta
      </button>
      <SearchProduct />
      <button className="max-h-[40px] flex gap-5 items-center bg-white p-2 rounded-md border-transparent hover:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-neutral-800">
        <ShoppingCart weight="bold" className="w-6 h-6" />
        <span>R$ 254,99</span>
      </button>
    </nav>
  );
};
