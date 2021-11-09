// POST /user/login
export const loginUser = (formInput, router, state) => async (dispatch) => {
    try {
      const { data } = await login(formInput);
      dispatch({ type: AUTH, data });
      router.push(state?.from || '/');
    } catch (error) {
      if (error.response) {
        dispatch({ type: AUTH_ERROR_OCCURRED, payload: error.response.data.message });
      } else {
        dispatch({ type: AUTH_ERROR_OCCURRED, payload: "Auth server is down!" });
      }
    }
  };