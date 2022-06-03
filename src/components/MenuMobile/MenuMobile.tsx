import { List } from 'phosphor-react';
import { SearchProduct } from '../SearchProduct/SearchProduct';

export const MenuMobile = () => {
  return (
    <nav className="flex gap-5 items-center sm:hidden">
      <SearchProduct />
      <button className="bg-white p-2 rounded-md border-transparent hover:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-neutral-800">
        <List weight="bold" className="w-6 h-6" />
      </button>
    </nav>
  );
};
