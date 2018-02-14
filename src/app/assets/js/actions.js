
// ACTIONS
var initialState = {
	data: {},
	loading: false,
	errors: []
};

var buttonClicked = 'buttonClicked';


function(state=initialState, action) {
	switch(action.type) {
		case buttonClicked:
			return {
				action.payload
			}
		default: 
			return state;
	}
}