import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SplashScreen from './components/Common/SplashScreen';
import HomePage from './components/Home/HomePage';


const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <div style={styles.container}>
      {showSplashScreen ? <SplashScreen /> : (
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
        </BrowserRouter>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
