import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../../store/actions';
import { SHOW_CARDS } from '../../store/actionTypes';
import { ICategory } from '../../store/controlsReducer';
import { ApplicationState } from '../../store/rootReducer';

const ControlButtons: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: ApplicationState) => state.controls.fetchedCategoires);
  const sortedCategories: Array<ICategory> = [];
  categories.forEach((category) => {//stupid solution, but have no idea what parameter to sort by
    if(category.titleEng === 'YOUR KIGURUMI') {
      sortedCategories[0] = category
    }
    if(category.titleEng === 'KIDS KIGURUMI') {
      sortedCategories[1] = category
    }
    if(category.titleEng === 'YOUR SLIPPERS') {
      sortedCategories[2] = category
    }
    if(category.titleEng === 'YOUR TOYS') {
      sortedCategories[3] = category
    }
  })
  
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
    <div className='row jc ml-0 mr-0'>
      {sortedCategories.map((category) => {
        const titleEng = category.titleEng
        const titleRu = category.titleRu    
        let titleText = (lang.value === 'eng')? titleEng: titleRu;
        const categoryBtnClassName = `col-4 p-5 ${category.color}`;
        const className = `${categoryBtnClassName}`
          return (
            <button
              className={className}
              key={category.color}
              id={category.color}
              onClick={(event) => {
                dispatch(chooseCategory(event.currentTarget.getAttribute('id')))
                dispatch({type: SHOW_CARDS, show: true})
              }}>
              {titleText}
            </button>
          );
      })}
    </div>
  );
};

export default ControlButtons;
