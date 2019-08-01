import React from 'react';
import Header from './components/Header';
import Card from "./Card";
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

function App() {
	return (
    <>
    <GlobalStyle />
    <Header />
    <Card />
    <Footer />
    </>
  )
}

export default App;
