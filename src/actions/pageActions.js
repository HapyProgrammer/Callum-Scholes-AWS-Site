import {UPDATE_CURRENT_PAGE,
        UPDATE_PROJECT_PAGE_FADE_LEFT} from './types';

export const updateCurrentPage = newCurrentPage => async dispatch => {
    dispatch({
      type: UPDATE_CURRENT_PAGE,
      payload: newCurrentPage
    });
  };

export const updateProjectPageFadeLeft = isProjectPageFadeLeft => async dispatch => {
  dispatch({
    type: UPDATE_PROJECT_PAGE_FADE_LEFT,
    payload: isProjectPageFadeLeft
  })
}