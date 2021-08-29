export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;

}

export enum IUserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
    type: IUserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: IUserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface IFetchUsersErrorAction {
    type: IUserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;