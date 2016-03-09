import Rectangle from './Rectangle'
export default class Ellipse extends Rectangle {
    draw () {
        this.path = new Path.Ellipse(this.point1, this.point2);
        this.path.fillColor = this.fillColor;
        this.path.strokeColor = this.strokeColor;
    }
}