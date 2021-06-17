import React from 'react';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import RomanPage from './pages/RomanPage';


const App: React.FC = () => {
  return (
    <>
      <Switch>   
        <Route path='/' component={RomanPage}/>   
      </Switch>
      <Footer />
    </>
  );
}

export default App;