import { Action } from '../actions/index';

const defaultLanguage = "en";

const ChangeLanguage = (state: string = defaultLanguage, action: Action) => {
    switch(action.type) {
        case "English":
            return "en";
        case "Kyrgyz":
            return "kg";
        case "Russian":
            return "ru"
        default:
            return state;
    }
}

export default ChangeLanguage;
