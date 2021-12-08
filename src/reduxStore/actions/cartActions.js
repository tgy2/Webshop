import * as actionTypes from './actionTypes';

export const resetCart = (payload) => {
	return { type: actionTypes.RESET_CART };
};

const calculateTotalCartAmount = (params) => {};

export const incrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload: payload });
		// dispatch(calculateTotalCartAmount());
	};
};

export const decrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload: payload });
		// dispatch(calculateTotalCartAmount());
	};
};
