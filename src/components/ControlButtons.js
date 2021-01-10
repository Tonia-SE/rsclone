import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchCards} from '../redux/actions';

const ControlButtons = () => {
    const dispatch = useDispatch()
    //dispatch(fetchCategories())
    const categories = useSelector(state => state.controls.fetchedCategoires)

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
            {categories.map(category => {
                const categoryBtnClassName = `btn btn-secondary btn-primary ${category.color}`
                return (
                    <button className={categoryBtnClassName} key={category.id} id={category._id} onClick={(event) => dispatch(fetchCards(event.target.getAttribute('id')))}>
                        {category.title}
                    </button>
                )
            })}
        </div>
    )
}

export default ControlButtons