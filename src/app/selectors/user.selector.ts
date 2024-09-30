import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { UserState } from '../states/user.state';

export const selectUserState = (state: AppState) => state.user;

export const selectUserId = createSelector(
  selectUserState,
  (state: UserState) => state ? state.userId : null
);
