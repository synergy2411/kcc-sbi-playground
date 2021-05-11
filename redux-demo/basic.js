// ES5 Syntax for importing module
const redux = require("redux");


const intialState = {
    counter : 0
}

// Reducer
function rootReducer(state = intialState, action){
    if(action.type === "INCREMENT"){
        // return state.counter++; NEVER DO THIS
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    }
    return state;
}

// Store
const store = redux.createStore(rootReducer);

console.log("[INITIAL STATE]", store.getState());

// Subscribe

store.subscribe(() => {
    console.log("[SUBSCRIBE]", store.getState());
})

// Actions
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});