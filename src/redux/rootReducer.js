import {combineReducers} from 'redux'
import { appReducer } from './appReduser'
import { cardsReducer } from './cardsReduser'
import { controlsReducer } from './controlsReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    cards: cardsReducer,
    controls: controlsReducer    
})