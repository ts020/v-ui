export default class Path {

    constructor() {
        this.source = "";
    }

    addRect(rect) {
        this.source += "M"+rect.left+","+rect.top+
            " L"+rect.right+"," +rect.top +
            " L"+rect.right+","+rect.bottom+
            " L"+rect.left +","+rect.bottom+
            " L"+rect.left+","+rect.top+" Z ";
        return this;
    }

    getSource() {
        return this.source;
    }
}