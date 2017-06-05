const callbackContainer = [];

const runCallbacks = ()=>{
	callbackContainer.forEach((cb)=>cb());
}

window.addEventListener("popstate",runCallbacks);

const webRouter = {
	path: ()=>{
		return window.location.pathname
	},
	navigateTo: (path)=>{
		window.history.pushState({},null,path);
		runCallbacks();
	},
	subscribe: (callback)=>{
		callbackContainer.push(callback);
	}
}

export default webRouter;
