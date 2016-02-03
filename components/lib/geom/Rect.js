export default class Rect{
    constructor(left,top,right,bottom) {
        this.left = left || 0;
        this.top = top || 0;
        this.right = right || 0;
        this.bottom = bottom || 0;
    }

    get width() {
        return this.right - this.left;
    }

    get height() {
        return this.bottom - this.top;
    }

    get center() {
        return this.left - (this.width/ 2);
    }

    get middle() {
        return (this.top + this.bottom) /2;
    }


    setMove(x,y) {
        this.left += x;
        this.right += x;
        this.top += y;
        this.bottom += y;
        return this;
    }

    setSize(width, height) {
        this.right = this.right + (width - this.width);
        this.bottom = this.bottom + (height - this.height);

        return this;
    }

	clone() {
		return new Rect(this.left, this.top, this.right, this.bottom);
	}

    static buildDomToRelativeRect(dom) {
        return new Rect(dom.offsetLeft, dom.offsetTop, dom.offsetLeft+dom.offsetWidth, dom.offsetTop+dom.offsetHeight);
    }

    static domToGlobal(dom) {
        var rect = dom.getBoundingClientRect();
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    }

    static buildToBoundRect(rect) {
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    }
}