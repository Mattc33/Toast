const initialState = {
   toastCollection: []
}

const reducer = (state = initialState, action) => {
   // ? Do Not mutate initial state instead copy it
   const newState = {...state}

   switch (action.type) {
      case 'AGE_UP':
         return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({
                  id: Math.random(), 
                  age: state.age + action.value
            })
         }
      default:
         break
   }

   return newState
}

export default reducer
