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
              <button onClick={() => alert("page 1")}>1</button>
              <button>2</button>
              <button>3</button>
              <button>next</button>
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
