import Shape from './Shape'
export default class Segment extends Shape{
    constructor(point1, point2, colorConfig) {
        super(colorConfig);
        this.point1 = point1;
        this.point2 = point2;
    }

    draw () {
        this.path.add(this.point1);
        this.path.lineTo(this.point2);
        this.path.strokeColor = this.strokeColor;
        this.path.strokeWidth = this.strokeWidth;
    }
}