import Segment from './Segment'
export default class Polyline extends Segment {
    constructor(pointsArray, colorConfig) {
        super(pointsArray[0], pointsArray[1], colorConfig);
        this.pointsArray = pointsArray
    }

    addPoint(point) {
        this.pointsArray.push(point);
    }

    draw () {
        this.path.remove();
        this.path = new Path();
        for (let i = 0; i < this.pointsArray.length - 1; i++) {
            this.point1 = this.pointsArray[i];
            this.point2 = this.pointsArray[i+1];
            super.draw();
        }
    }
}