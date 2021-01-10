import React from 'react';
import {useSelector} from 'react-redux'

const Cards = () => {
    //const dispatch = useDispatch()
    //dispatch(fetchCards())
    const cards = useSelector(state => state.cards.fetchedCards)
    //const loading = useSelector(state => state.app.loading)

    // if(loading) {
    //     return (
    //         <div classNameName="spinner-border text-primary" role="status">
    //             <span classNameName="sr-only">Loading...</span>
    //         </div>
    //     )
    // }

    return (
        cards.map(card => {
            return (
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm" key={card.id}>
                        <small className="text-muted" id="heart">☆</small>
                        <img src={card.url} alt="KIGURUMI me" className="bd-placeholder-img card-img-top" width="0" />
                        <div className="card-body">
                            <small className="text-muted price" id="price">10.99 $</small>
                            <p className="card-text">Kigurumi are coloreful, awsome and warm. This is a great gift for everybody.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-BUY" cardid="10" disabled="">
                                        BUY
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary" type="button" id="card_btn-quantity">
                                        <span className="button_span" id="left" cardid="10">–</span>
                                        <span id="number" qty="true" cardid="10">0</span>
                                        <span className="button_span" id="right" cardid="10">+</span>
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" id="card_btn-sizes">
                                        SIZE
                                    </button>
                                    <div className="dropdown-menu" id="sizeDroppdownMenu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/">S</a>
                                        <a className="dropdown-item" href="/">M</a>
                                        <a className="dropdown-item" href="/">L</a>
                                        <a className="dropdown-item" href="/">XL</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Cards