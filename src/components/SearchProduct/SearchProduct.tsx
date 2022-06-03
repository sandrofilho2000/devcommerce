import { MagnifyingGlass } from 'phosphor-react';

export const SearchProduct = () => {
  return (
    <label className="flex bg-white p-2 rounded-md border-transparent hover:bg-zinc-300 transition-colors cursor-pointer group">
      <input
        placeholder="Pesquisar produto..."
        type="text"
        id="search"
        className="invalid:w-0 h-6 bg-transparent border-transparent transition-all duration-500 outline-none focus:w-40 group-hover:w-40 valid:w-40 sm:group-hover:w-60 sm:focus:w-60 sm:valid:w-60 font-normal"
        required
      />
      <MagnifyingGlass weight="bold" className="w-6 h-6" />
    </label>
  );
};
