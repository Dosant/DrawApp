class Shape {
    constructor (colorConfig) {
    this.strokeColor = colorConfig.strokeColor || 'black';
    this.strokeWidth = 3;
    this.path = new Path();
}

    draw () {
        throw new Error("Method draw is abstract in Shape");
    }

    getPath() {
        return this.path;
    }
    setPath(path) {
        this.path = path;
    }

    getStrokeColor() {
        return this.strokeColor;
    }
    setStrokeColor(color) {
        this.strokeColor = color;
    }

    getStrokeWidth() {
        return this.strokeWidth;
    }
    setStrokeWidth(width) {
        this.strokeWidth = width;
    }

    getLocation() {
        return this.path.position;
    }

    move (Point) {
        this.path.moveTo(Point);
    }
}

export default Shape