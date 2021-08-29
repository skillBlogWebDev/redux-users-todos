export interface ITodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}

interface IFetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}

interface IFetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}

interface ISetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoActions = IFetchTodoAction | IFetchTodoSuccessAction | IFetchTodoErrorAction | ISetTodoPage;