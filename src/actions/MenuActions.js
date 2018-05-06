export const clickMenu=(page)=>{
	return {
		type:"CLICK_MENU",
		current:page
	}
}

export const clickLogout=()=>{
	localStorage.removeItem("user");
	return {
		type:"CLICK_LOGOUT"
	}
}