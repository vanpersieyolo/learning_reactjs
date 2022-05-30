import {ADD, DELETE, EDIT, FETCH_ALL} from "../../commons/commons";


const firstDataReducer = (state = [], action) => {
    switch (action.type) {
        case ADD: {
            const newList = [...state.list];
            newList.push(action.payload);

            return {
                ...state,
                list: newList,
            };
        }

        case EDIT:{
            return state.map((data) => data.id === action.id
                ? { ...data, editing: !data.editing }
                : data);
        }

        case DELETE: {
            return state.filter((data) => data.id !== action.id);
        }

        default:
            return state;
    }

}

export default firstDataReducer;