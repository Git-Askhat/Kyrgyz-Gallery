import { combineReducers } from 'redux';
import ChangeLanguage from './changeLanguage';

const reducer = combineReducers({
    lang: ChangeLanguage
})

export default reducer;

export type State = ReturnType<typeof reducer>