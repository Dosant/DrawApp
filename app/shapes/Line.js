import Ray from './Ray'
export default class Line extends Ray {
    draw = () => {
        const point1 = this.getPointOnLine(3000);
        const point2 = this.getPointOnLine(-10);

        this.path.add(point1);
        this.path.lineTo(point2);
        this.path.strokeColor = this.strokeColor;
        this.path.strokeWidth = this.strokeWidth;
    }
}