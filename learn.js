const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        }
    }
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
    let c = 0
    
    for (let i = 0; i < 10000; i++) {
        if ((i % 5 === 0) && (i % 7 === 0))
        
        if ( (i > 1000) && (i % 10 === 0)) {
            c = c + 1;
        }
        // console.log(i)
    }

    console.log(c)
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment'});
// store.dispatch({ type: 'increment'});
// store.dispatch({ type: 'decrement'});
// store.dispatch({ type: 'nothing'});