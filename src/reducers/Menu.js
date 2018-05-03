const initialState={
	current:"/"
};

const Menu=(state=initialState, action)=>{
	switch(action.type){
		case "CLICK_MENU":{
			return Object.assign({}, state, {
				current:action.current
			});
		}
		default:{
			return state;
		}
	}
}

export default Menu;
