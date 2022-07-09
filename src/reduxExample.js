import {useState} from "react";

function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)

    // Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // View: the UI definition
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1
        }
    }
    // otherwise return the existing state unchanged
    return state
}