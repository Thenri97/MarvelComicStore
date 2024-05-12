import { useState } from 'react'
import { Header } from './components/header'
import { ProductList } from './components/productList'
import { ProductListStyle } from './scripts/styles'
import { DefaultTemplate } from './defaultTemplate'


// import {Title} from './scripts/styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <DefaultTemplate>

        <ProductListStyle>
          <ProductList />
        </ProductListStyle>

      </DefaultTemplate>



    </>
  )
}

export default App
