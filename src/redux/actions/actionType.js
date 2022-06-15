import {
  LANGUAGES_FETCHING_REQUEST,
  LANGUAGES_FETCHING_SUCCESS,
  REMOVE_LANGUAGE,
} from "../../commons/commons";
import { getAllData } from "../../service/DataSerivce.service";

export const fetchAllLanguage = () => async (dispatch, unknown, action) => {
  dispatch({
    type: LANGUAGES_FETCHING_REQUEST,
  });
  const fetchAllData = await getAllData();
  dispatch({ type: LANGUAGES_FETCHING_SUCCESS, payload: fetchAllData.data });
};

export const removeLanguage = (e) => async (dispatch, unknown, action) => {
  dispatch({
    type: LANGUAGES_FETCHING_REQUEST,
  });
  dispatch({ type: REMOVE_LANGUAGE, payload: e });
};
