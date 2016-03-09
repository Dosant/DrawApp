import Segment from './Segment'
export default class Ray extends Segment {
    draw = () => {
        const x = (this.point1.x - this.point2.x) < 0 ? 3000 : -10;
        const point = this.getPointOnLine(x);

        this.path.add(this.point1);
        this.path.lineTo(point);
        this.path.strokeColor = this.strokeColor;
        this.path.strokeWidth = this.strokeWidth;
    }

    getPointOnLine = (x) => {
        const A = this.point1.y - this.point2.y;
        const B = this.point2.x - this.point1.x;
        const C = (this.point1.x * this.point2.y - this.point2.x * this.point1.y);

        const y = (-C - A * x) / B;

        return new Point(x,y);
    }

}