import React from 'react';
import { Route } from "react-router-dom";

import Container from '@material-ui/core/Container';

import HeaderContainer from './containers/Header';
import Footer from './components/Footer';
import NotificationContainer from './containers/Notification';

import HomeContainer from './containers/Home';
import ShopContainer from './containers/Shop';
import DetailsContainer from './containers/Detail';
import CategoryContainer from './containers/Category';
import CartContainer from './containers/Cart';
import FavContainer from './containers/Fav';

import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Thankyou from './components/Thankyou';
import './styles.scss';

export default function App() {
  return (
    <>
      <HeaderContainer />
      <Container maxWidth="lg" className="main-container">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/shop" component={ShopContainer} />
        <Route path="/detail/:id" component={DetailsContainer} />
        <Route path="/category" component={CategoryContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/fav" component={FavContainer} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/Payment" component={Payment} />
        <Route path="/Thankyou" component={Thankyou} />
      </Container>
      <NotificationContainer />
      <Footer />
    </>
  )
}