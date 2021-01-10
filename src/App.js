import React from 'react';
import Cards from './components/Cards';
import ControlButtons from './components/ControlButtons';
import './index.css';
import {useDispatch} from 'react-redux'
import { fetchCards, fetchCategories } from '../src/redux/actions';
import { initialCategoryId } from './consts';


function App() {
  const dispatch = useDispatch();
  dispatch(fetchCategories());
  dispatch(fetchCards(initialCategoryId));
  return (
      <div className="body">
        <ControlButtons />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
