import Polyline from './Polyline'
export default class Polygon extends Polyline {
    constructor(pointsArray, colorConfig) {
        super(pointsArray, colorConfig);
        this.fillColor = colorConfig.fillColor;
    }

    draw () {
        super.draw();
        this.path.fillColor = this.fillColor;
        this.path.closed = true;
    }
}