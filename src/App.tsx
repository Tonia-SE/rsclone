// import * as React from 'react';
// import Cards from './components/Cards';
// import ControlButtons from './components/ControlButtons';
// import { Footer } from './components/Footer';
// import { Navbar } from './components/Navbar';
// import { Slider } from './components/Slider';
// import './styles/index.scss';

// export const App = () => (
//   <div className="body">
//     <Navbar />
//     <Slider />
//     <ControlButtons />
//     <Cards />
//     <Footer />
//   </div>
// );
import React from 'react';
import Album from './components/Album/Album';
import ControlButtons from './components/ControlButtons/ControlButtons';
import { useDispatch } from 'react-redux';
import { chooseCategory, fetchCategories } from '../src/redux/actions';
import { initialCategoryName } from './consts';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { LogInForm, SignUpForm } from './components/Regforms/Regforms';
import { Slider } from './components/Slider/Slider';
import './index.scss';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCategories());
  dispatch(chooseCategory(initialCategoryName));
  return (    
    <>
      <Slider />
      <ControlButtons />
      <Album />
    </>
  );
}

export default App;
