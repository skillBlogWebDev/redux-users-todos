import { IUserActionTypes, IUserState, UserAction } from "../../types/user";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case IUserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] };
        case IUserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload };
        case IUserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] };    
    
        default:
            return state;
    }
}