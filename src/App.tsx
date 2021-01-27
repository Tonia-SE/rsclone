import React from 'react';
import { Album } from './components/Album/Album';
import { ControlButtons } from './components/ControlButtons/ControlButtons';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './store/controlsReducer';
import { chooseCategory } from './store/albumReducer';
import { initialCategoryName } from './consts';
import { KigurumiSlider } from './components/Slider/Slider';
import './styles/index.scss';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCategories());
  dispatch(chooseCategory(initialCategoryName));
  return (
    <>
      <KigurumiSlider />
      <ControlButtons />
      <Album />
    </>
  );
}

export default App;
