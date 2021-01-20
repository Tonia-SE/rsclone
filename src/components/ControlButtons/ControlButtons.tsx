import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../../redux/actions';
//import {chooseCategory} from '../redux/actions';
import { ApplicationState } from '../../redux/rootReducer';

interface ICategory {
  title: string;
  color: string;
}

const ControlButtons: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: ApplicationState) => state.controls.fetchedCategoires);
  console.log(categories);
  const lang = useSelector((state: ApplicationState)  => state.lang);

  
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
        const titleEng = category.titleEng
        const titleRu = category.titleRu
        const categoryBtnClassName = `btn btn-secondary btn-primary ${category.color}`;
        if(lang.value === 'eng') {
          return (
            <button
              className={categoryBtnClassName}
              key={category.color}
              id={category.color}
              onClick={(event) => dispatch(chooseCategory(event.currentTarget.getAttribute('id')))}
            >
              {titleEng}
            </button>
          );
        } else {
          return (
            <button
              className={categoryBtnClassName}
              key={category.color}
              id={category.color}
              onClick={(event) => dispatch(chooseCategory(event.currentTarget.getAttribute('id')))}
            >
              {titleRu}
            </button>
          );
        }
      })}
    </div>
  );
};

export default ControlButtons;
