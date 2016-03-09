import RegularPolygon from './RegularPolygon'
export default class Square extends RegularPolygon{
    constructor(point1, point2, colorConfig){
        super(point1, point2, 4, colorConfig)
    }
}