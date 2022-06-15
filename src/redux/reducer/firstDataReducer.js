import {
  LANGUAGES_FETCHING_REQUEST,
  LANGUAGES_FETCHING_SUCCESS,
  REMOVE_LANGUAGE,
} from "../../commons/commons";
import { element } from "prop-types";

const initialData = {
  data: [],
  loading: false,
};

const firstDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case LANGUAGES_FETCHING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LANGUAGES_FETCHING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case REMOVE_LANGUAGE:
      return {
        loading: false,
        data: state.data.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};

export default firstDataReducer;
