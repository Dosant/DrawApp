import Shape from './Shape'
export default class FillShape extends Shape {
    constructor (colorConfig){
        super(colorConfig);
        this.fillColor = colorConfig.fillColor || 'black';
    }

    getFillColor() {
        return this.fillColor;
    }
    setFillColor(color) {
        this.fillColor = color;
    }
}