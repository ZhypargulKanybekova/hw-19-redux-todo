export const calculateType = {
    PLUS:"PLUS",
    MINUS:"MINUS",
    MULTIPLIC:"MULTIPLIC",
    DIVISION:"DIVISION",
    RESET:"RESET"
}

export const initialState = {
    result: 0,
    }

 const calculatorReducer = (state=initialState,action)  =>{
    switch(action.type){
        case calculateType.PLUS:
            return{
                ...state,result: state.result + action.payload 
            }
        case calculateType.MINUS:
            return{
                ...state,result:state.result - action.payload
            } 
        case calculateType.MULTIPLIC:
            return{
                ...state,result:state.result * action.payload
            }
        case calculateType.DIVISION:
            return{
                ...state,result:state.result / action.payload
            }
        case calculateType.RESET:
            return initialState
                         
            default:
            return state
    }
 } 

 export default calculatorReducer