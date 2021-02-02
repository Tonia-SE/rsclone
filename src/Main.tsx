import React from 'react';
import { Album } from './components/Album/Album';
import { ControlButtons } from './components/ControlButtons/ControlButtons';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './store/controlsReducer';
import { KigurumiSlider } from './components/Slider/Slider';
import './styles/index.scss';

function Main() {
  const dispatch = useDispatch();
  dispatch(fetchCategories());
  return (
    <>
      <KigurumiSlider />
      <ControlButtons />
      <Album />
    </>
  );
}

export default Main;
