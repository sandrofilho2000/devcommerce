import React from 'react'
import './CartAnimation.css';

type Props = {}

export const CartPopUp: React.FC<Props> = () => {
  return (
    /* CART CONTAINER */
    <div className='h-96 w-60 bg-white rounded-2xl absolute top-25 mt-1 right-8 z-50 shadow-md justify-between hidden md:flex flex-col CartPopUpContainer active box-content px-3'>

      {/* CART TOP */}
      <div className="w-11/12 h-20 rounded-2xl flex items-center justify-center mx-auto">
          <h4 className='leading-6 tracking-wider w-full block h-1/2 border-b border-b-solid'>
            Seu Carrinho
          </h4>
      </div>


      {/* CART LATEST PRODUCT */}
      <div className="w-full h-auto  flex flex-row items-center">

        {/* PRODUCT CART PIC CONTAINER */}
        <div className='w-24 h-auto'>
          <img className='w-11/12 mx-auto h-full' src="	https://graffite.vteximg.com.br/arquivos/ids/162793-1000-1000/shopping.png?v=636995026143930000"/>
        </div>

        {/* PRODUCT CART TEXT CONTAINER */}
        <div className='w-full h-full'>

          {/* PRODUCT PRICE */}
          <h3 className='text-lg'>
            R$ 3,50
          </h3>

          {/*PRODUCT NAME*/}
          <h3 className='text-xs leading-6 text-gray-400 font-medium block w-10/12'>
            Caneta esferográfica azul BIC
          </h3>


        </div>

      </div>
      {/* OTHER PRODUCTS */}
      <div className='w-10/12 h-16 rounded-lg flex items-center text-sm bg-gray-100 mx-auto'>
          <span className='mx-auto font-medium' >Você tem <span className='text-orange-500' >3</span> itens no carrinho</span>
      </div>

      <hr/>

      {/* TOTAL */}
      <div className='w-11/12 h-12 flex justify-between mx-auto'>
        <span className='font-medium' >Total: </span> <span>R$ 254,99</span>
      </div>

      {/* CART BUTTONS */}
      <div className='w-11/12 h-12 flex justify-between mx-auto relative -top-4'>

        <a href="#" className='ease-in-out duration-200 cursor-pointer w-24 h-10 font-medium hover:text-white hover:bg-black text-center leading-9 rounded-md border border-black border-solid hover:border-transparent'>
          Voltar
        </a>
        <a href="#" className='ease-in-out duration-200 cursor-pointer w-24 h-10 text-white hover:text-orange-500 font-medium text-center leading-9 rounded-md bg-orange-500 hover:bg-transparent hover:border hover:border-orange-500 hover:border-solid'>
          Finalizar
        </a>
      </div>
    </div>
  )
}


