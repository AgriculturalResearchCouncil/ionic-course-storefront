import { createAction, props } from '@ngrx/store';

export const setUserId = createAction(
  '[User] Set User ID',
  props<{ userId: Number }>()
);