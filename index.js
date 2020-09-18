const redux require('redux');
const createStore = redux.createStore

// A string constant that indicates the TYPE of the action
const BUY_CAKE = 'BUY_CAKE';

// 
// Action Creator: an action creator simply create an action
// An action Creator is a function that return an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

// Reducer specify how the app's state changes in response to actions sent to the store
// Reducers are function that accepts state and action as arguements, and returns the next state of the application. 
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}