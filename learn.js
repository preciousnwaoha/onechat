const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        }
    }
    // "react-redux": "^8.0.2",
    //     "react-scripts": "^2.1.3",
    //     "redux": "^4.2.0",

    // "react-redux": "^8.0.2",
    //     "react-scripts": "^2.1.3",
    //     "redux": "^4.2.0",
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        }
    }

    return {
        counter: state.counter,
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment'});
store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});
store.dispatch({ type: 'nothing'});