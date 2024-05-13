import { useState } from 'react'
import { Header } from './components/header'
import { ProductList } from './components/productList'
import { PagesDiv, ProductListStyle } from './scripts/styles'
import { DefaultTemplate } from './defaultTemplate'
import { CartModal } from './components/cartModal'
import { CartProvider } from './context/CartContext'
import { MarvelProvider } from './context/DatabaseContex'



function App() {


  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };




  return (
    <>
    <MarvelProvider>
      
      <CartProvider>
    
        <DefaultTemplate handleOpenCart={handleOpenCart} handleCloseCart={handleCloseCart}>

          <ProductListStyle>
            <ProductList />
      
              <PagesDiv>
              <span>Pages:</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>next</span>
              </PagesDiv>
            
          </ProductListStyle>



          <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
        </DefaultTemplate>

      </CartProvider>
    </MarvelProvider>




    </>
  )
}

export default App
