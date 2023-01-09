
import style from './App.module.scss';
import Home from './pages/Home';
import CartContextProvider from 'Context/CartContext';
import Header from 'components/Header';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <CartContextProvider>
      <div className={style.header_container}>
        <Container>
          <Header />
        </Container>
      </div>
      <Home />
    </CartContextProvider>
  );
}

export default App;
