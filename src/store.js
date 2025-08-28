import { createStore } from 'redux';

import { appReducer } from "./reducer";

// export const createStore = (reducer) => {
//     let state;

//     return {
//         dispatch: (action) => {
//             state = reducer(state, action);
//             console.log(state);
//         },
//          getState: () => state,
//     };
// };

export const store = createStore(appReducer);

// store.dispatch({});
