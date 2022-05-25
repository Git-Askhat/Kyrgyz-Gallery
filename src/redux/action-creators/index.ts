import { Dispatch } from 'redux';
import { Action } from '../actions';

export const englishLanguage = (language: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: 'English',
      payload: language,
    });
  };
};

export const kyrgyzLanguage = (language: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: 'Kyrgyz',
      payload: language,
    });
  };
};

export const russianLanguage = (language: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: 'Russian',
      payload: language,
    });
  };
};
