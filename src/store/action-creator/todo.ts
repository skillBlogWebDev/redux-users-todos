import axios from 'axios';
import { Dispatch } from 'react';
import { TodoActions, TodoActionTypes } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODO });
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            });
            setTimeout(() => {
                dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data });
            }, 500);
        } catch (error) {
            dispatch({ 
                type: TodoActionTypes.FETCH_TODO_ERROR, 
                payload: 'Произошла ошибка при загрузке списка дел' 
            });
        }
    }
}

export function setTodoPage(page: number): TodoActions {
    return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}