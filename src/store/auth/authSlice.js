import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    password:"",
    isAuthozired: false,
}


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            return{
                ...state,
                email:action.email,
                password:action.password,
                isAuthozired:true,
            };
        }, 
        logout:(state,action)=>{
            return initialState;
        }
    },
   
})

export const authAction = authSlice.actions
console.log(authAction);

//  const authReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case authActionTypes.LOGIN:
//             return{
//                 ...state,
//                 email:action.email,
//                 password:action.password,
//                 isAuthozired:true,
//             };
//             case authActionTypes.LOGOUT:
//                 return initialState;
//                 default:
//                     return state;
                
//         }
//     };

//     export default authReducer