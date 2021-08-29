import axios from 'axios';
import { Dispatch } from 'react';
import { IUserActionTypes, UserAction } from '../../types/user';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: IUserActionTypes.FETCH_USERS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch({ type: IUserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
            }, 500);
        } catch (error) {
            dispatch({ 
                type: IUserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Произошла ошибка при загрузке данных' 
            });
        }
    }
}