import React from 'react';
import Bar from './components/Bar';
import CenterBlock from './components/CenterBlock';
import Container from './components/Container';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';



function App() {
  return (
    <div>
      <Wrapper />
      <div>
        <Container />
        <div>
          <Main />
            <Navigation />
            <CenterBlock />
            <Sidebar />

        </div>
        <Bar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
