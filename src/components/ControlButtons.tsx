import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../redux/actions';
//import {chooseCategory} from '../redux/actions';
import { ApplicationState } from '../redux/rootReducer';

interface ICategory {
  title: string;
  color: string;
}

const ControlButtons: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: ApplicationState) => state.controls.fetchedCategoires);

  //const loading = useSelector(state => state.app.loading)
  // if(loading) {
  //     return (
  //         <div className="spinner-border text-primary" role="status">
  //             <span className="sr-only">Loading...</span>
  //         </div>
  //     )
  // }

  return (
    <div>
      {categories.map((category) => {
        const categoryBtnClassName = `btn btn-secondary btn-primary ${category.color}`;
        return (
          <button
            className={categoryBtnClassName}
            key={category.title}
            id={category.color}
            onClick={(event) => dispatch(chooseCategory(event.currentTarget.getAttribute('id')))}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
};

export default ControlButtons;
