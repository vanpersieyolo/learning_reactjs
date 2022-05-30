import {ADD, DELETE, EDIT, FETCH_ALL} from "../../commons/commons";


export const addPost = (title, content) => ({
    type: ADD,
    title,
    content
});

export const editPost = (id) => ({
    type: EDIT,
    id: id
});

export const deletePost = (id) => ({
    type: DELETE,
    id: id
});

export const fetchAllDate = () => ({
    type: FETCH_ALL
});

export const getById = (id) => ({
    type: FETCH_ALL,
    id: id

});