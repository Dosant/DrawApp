import Rectangle from './Rectangle'
export default class Circle extends Rectangle {
    draw () {
        const center = this.point1;
        const radius = this.point1.getDistance(this.point2);
        this.path = new Path.Circle(center, radius);
        this.path.fillColor = this.fillColor
        this.path.strokeColor = this.strokeColor
    }
}