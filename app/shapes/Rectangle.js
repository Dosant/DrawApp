import FillShape from './FillShape'

export default class Rectangle extends FillShape {
    constructor(point1, point2, colorConfig) {
        super(colorConfig);
        this.point1 = point1;
        this.point2 = point2;
    }
    draw () {
        this.path = new Path.Rectangle(this.point1, this.point2);
        this.path.fillColor = this.fillColor
        this.path.strokeColor = this.strokeColor
    }

    getPoints() {
        return [this.point1, this.point2];
    }
    setPoints(points) {
        this.point1 = points[0];
        this.point2 = points[1];
    }
}