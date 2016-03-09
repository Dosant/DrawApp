import $ from 'jquery';
// buffer for clicks
let points = [];

// clear buffer
export function reset () {
    points = [];
}

// stoke and fill
$('#fill').click(function (event) {
    document.getElementById('set-fill-color').jscolor.show();
})
$('#stroke').click(function (event) {
    document.getElementById('set-stroke-color').jscolor.show();
})

let currentStrokeColor = '#F7CAC9';
let currentFillColor = '#F7CAC9';
window.setStrokeColor = function(jscolor) {
    currentStrokeColor = jscolor.toHEXString();
    console.log(currentStrokeColor);
}
window.setFillColor = function(jscolor) {
    currentFillColor = jscolor.toHEXString()
    console.log(currentFillColor);
}

export function handleMouseClick (ShapeClass, clicksNum) {
    if (clicksNum) {
        return function (event) {
            let colorConfig = {
                strokeColor: currentStrokeColor,
                fillColor: currentFillColor
            }

            if (points.length < clicksNum) {
                points.push(event.point);
                if (points.length == clicksNum) {

                    let el = new ShapeClass(points[0], points[1], colorConfig);
                    el.draw();
                    points = [];
                }
            }
        }
    } else {
        let polyline;
        return function (event) {
            let colorConfig = {
                strokeColor: currentStrokeColor,
                fillColor: currentFillColor
            };

            if (event.event.button == 2 || event.event.shiftKey) {
                reset();
                polyline = null;
                return;
            }
            points.push(event.point);

            if (points.length == 2) {
                polyline = new ShapeClass(points, colorConfig);
                polyline.draw();
            }

            if (points.length > 2) {
                polyline.addPoint(event.point);
                polyline.draw();
            }
        }
    }
}

export function activateTool(tool) {
    return function () {
        reset();
        tool.activate()
    }
}

