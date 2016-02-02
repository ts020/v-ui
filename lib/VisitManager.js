export default class VisitManager {
	static isVisit() {
		return this.getVisitAll()[location.pathname] == true;
	}

	static getVisitAll() {
		var str = window.localStorage.getItem("vui_visit");
		if(str) {
			return JSON.parse(str)
		}
		return {};
	}

	static visit() {
		var item = this.getVisitAll();
		item[location.pathname] = true;
		window.localStorage.setItem("vui_visit",JSON.stringify(item));
	}

	clear() {
		window.localStorage.removeItem("vui_visit");
	}
}