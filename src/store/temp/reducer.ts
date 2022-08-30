import {SET_TENP_TYPE} from "./actionstype";

export const initialState ={
    isMetric: true,
};

const tempTypeReducer =(state=initialState,action:any)=>{
    switch(action.type){
        case SET_TENP_TYPE:
            return{
                ...state,
                isMetric:action.payload
            };
        default:
            return state;
    }
}
export default tempTypeReducer;