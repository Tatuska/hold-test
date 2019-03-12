export const startPageAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};
export const checkBoxChanges = key => dispatch => {
  return dispatch({ type: "CHECKBOX_CHANGE", key });
};
