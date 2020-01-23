import { combineReducers, createStore } from 'redux';

type State = {
  user: firebase.User;
};

type Action =
  | {
      type: 'set_user';
      user: firebase.User;
    }
  | {
      type: 'clear_user';
    };

const initialState: State = {
  user: null
};

export const userReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'set_user': {
      return {
        ...state,
        user: action.user
      };
    }
    case 'clear_user': {
      return {
        ...state,
        user: null
      };
    }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user: userReducer
});

export const store = createStore(reducers);
