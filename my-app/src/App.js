import React from 'react';
import Bar from './components/Bar';
import CenterBlock from './components/CenterBlock';
import Container from './components/Container';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';
import Burger from './components/Burger';
import './index.css';


// function App() {
//   return (
//     <Wrapper>
//       <div>
//         <Container>
//           <main>
//             <Main>
//               <Navigation>

//               </Navigation>
//               <CenterBlock />
//               <Sidebar />
//             </Main>
//           </main>

//           <Bar />
//           <Footer />
//         </Container>
//       </div>
//     </Wrapper>

//   );
// }


function App() {
  return (
    <div>
      <Wrapper> 
        <Container>
          <Main>
            <Navigation />
            <Burger />
            <CenterBlock />
            <Sidebar />
          </Main>
          <div>
            <Bar />
          </div>
            <Footer />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
