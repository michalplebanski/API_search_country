import * as constants from '../constants';

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case constants.SEARCH:
			return {
				...state, sum: state.sum + state.value
			};
		default:
			return state;
	}
};