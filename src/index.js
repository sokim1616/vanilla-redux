import { createStore } from 'redux'; //Store is where you're going to put your data / state && State is a data that changes in your application / in this app, "count" is the state!
//createStore function basically creates a place where you put your data
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const number = document.querySelector('span');

number.innerText = 0; // countModifier에서 default parameter를 넣어줬기 때문에 딱히 필요하진 않음!

//const reducer = () => { }; //reducer is a function that modifies your data && whatever the reducer returns, it's going to be the data that's going to be on the application
const countModifier = (count = 0, action) => { // 1st parameter: "state" - countModifier (reducer) changes your data & at the same time, whatever it returns, that is the data that's on your application! && 2nd parameter: "action" is how we modify the "state" / it is the second parameter / "action" is the way we communicate with the count modifier because we need a way to tell the "countModifier" that it should return a certain return value
    //... modify count    // ONLY ONE FUNCTION, countModifier (reducer), modifies the data / where "count" is, is where the "state" of the application is supposed to be
    console.log("여길봐라!", count, action);
    if (action.type === 'ADD') {
        return count + 1;
    }
    else if (action.type === 'SUBTRACT') {
        return count - 1;
    }
    else {
        return count;
    }
}

//const store = createStore(reducer)
const countStore = createStore(countModifier); // "countStore" 라는 변수에 "countModifier" 라는 함수를 담는 store를 담아줌!

const onChange = () => {
    //console.log(countStore.getState())
    number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

// countStore.dispatch({ type: 'ADD' }) // HOW to send an action to "countModifier"?? When there is a "store", "dispatch", and "action" -> BEHIND THE SCENE: Redux will call "countModifier" like such: countModifier(currentState = 0, { type: 'ADD' })
// * "dispatch" sends messages to "countModifier" && whatever the countModifier returns, that becomes the data
// countStore.dispatch({ type: 'ADD' })
// countStore.dispatch({ type: 'ADD' })
// countStore.dispatch({ type: 'SUBTRACT' })

// console.log(countStore.getState());

add.addEventListener("click", () => countStore.dispatch({ type: 'ADD' }));
subtract.addEventListener("click", () => countStore.dispatch({ type: 'SUBTRACT' }))


// "dispatch" function is the way we communicate with the store
// "subscribe" function allows us to listen to changes in our store