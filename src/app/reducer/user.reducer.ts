import { createReducer, on } from '@ngrx/store';
import { setUserId } from '../actions/user.action';
import { UserState } from '../states/user.state';

export const initialState: UserState = {
  userId: null,
};

export const userReducer = createReducer(
  initialState,
  on(setUserId, (state, { userId }) => ({ ...state, userId: Number(userId) }))
);