import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Context } from './context/Context'
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';

function App() {

  const [products, setProducts] = useState([])
  let url = "https://dummyjson.com/products"

  const footerRef = useRef()

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [url])

  function removeProduct(id) {
    let removedProduct = products.filter((elem) => elem.id !== id)
    setProducts(removedProduct)
  }

  function scrollToBottom() {
    footerRef.current.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <Context.Provider value={{ products, removeProduct, footerRef }}>
      <div className="App">
        <Header scrollToBottom={scrollToBottom} />
        <ProductsList />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
