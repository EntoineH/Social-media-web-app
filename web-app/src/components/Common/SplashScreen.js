import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo_transparent.png';

const SplashScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
        }
        return prevProgress + 10;
      });
    }, 500);
  }, []);

  return (
    <div style={styles.container}>
      <img src={logo} style={styles.logo} alt="Logo" />
      <div style={{ ...styles.loadingBar, width: `${loadingProgress}%` }}></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: '700px',
    height: '700px',
  },
  loadingBar: {
    height: '5px',
    backgroundColor: '#333',
    position: 'fixed',
    bottom: '0',
    transition: 'width 0.5s ease-in-out',
  },
};

export default SplashScreen;
