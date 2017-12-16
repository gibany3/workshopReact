import React from 'react';
import './App.css';
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import Footer from './Components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <MainSection/>
          <Footer/>
      </div>
    );
  }
}

export default App;
