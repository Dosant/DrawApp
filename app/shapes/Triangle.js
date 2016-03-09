import RegularPolygon from './RegularPolygon'
export default class Triangle extends RegularPolygon{
    constructor(point1, point2, colorConfig){
        super(point1, point2, 3, colorConfig)
    }
}