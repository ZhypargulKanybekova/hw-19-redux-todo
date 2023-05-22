export const authActionTypes = {
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT",
};

const initialState = {
    email:"",
    password:"",
    isAuthozired: false,
}

 const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case authActionTypes.LOGIN:
            return{
                ...state,
                email:action.email,
                password:action.password,
                isAuthozired:true,
            };
            case authActionTypes.LOGOUT:
                return initialState;
                default:
                    return state;
                
        }
    };

    export default authReducer