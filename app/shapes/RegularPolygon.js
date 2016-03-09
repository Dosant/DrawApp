import FillShape from './FillShape'
export default class RegularPolygon extends FillShape {
    constructor (point1, point2, dimension, colorConfig) {
        super(colorConfig);
        this.point1 = point1;
        this.point2 = point2;
        this.dimension = dimension;
        this.radius = this.point1.getDistance(this.point2);
    }

    draw () {
        this.path = new Path.RegularPolygon(this.point1, this.dimension, this.radius);
        this.path.fillColor = this.fillColor
        this.path.strokeColor = this.strokeColor
    }
}