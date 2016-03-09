import paper from 'paper'
import $ from 'jquery'
window.$ = $
import {handleMouseClick, activateTool, reset} from './utils'
import Shapes from './shapes'
paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

$('.panel-left>.button').click(function (event) {
    $(event.target).addClass('active');
    $('.panel-left>.button').not($(event.target)).removeClass('active');
})

let SegmentTool = new Tool();
let RayTool = new Tool();
let LineTool = new Tool();
let PolylineTool = new Tool();
let RectangleTool = new Tool();
let EllipseTool = new Tool();
let CircleTool = new Tool();
let PolygonTool = new Tool();
let TriangleTool = new Tool();
let SquareTool = new Tool();

$('#segment').click(activateTool(SegmentTool));
$('#ray').click(activateTool(RayTool));
$('#line').click(activateTool(LineTool));
$('#polyline').click(activateTool(PolylineTool));
$('#rectangle').click(activateTool(RectangleTool));
$('#ellipse').click(activateTool(EllipseTool));
$('#circle').click(activateTool(CircleTool));
$('#polygon').click(activateTool(PolygonTool));
$('#triangle').click(activateTool(TriangleTool));
$('#square').click(activateTool(SquareTool));

$('#clear').click(function () {
    console.log('Clear');
    reset();
    project.clear();
})


SegmentTool.onMouseDown = handleMouseClick(Shapes.Segment, 2);
RayTool.onMouseDown = handleMouseClick(Shapes.Ray, 2);
LineTool.onMouseDown = handleMouseClick(Shapes.Line, 2);
PolylineTool.onMouseDown = handleMouseClick(Shapes.Polyline)
RectangleTool.onMouseDown = handleMouseClick(Shapes.Rectangle, 2);
EllipseTool.onMouseDown = handleMouseClick(Shapes.Ellipse, 2);
CircleTool.onMouseDown = handleMouseClick(Shapes.Circle, 2);
PolygonTool.onMouseDown = handleMouseClick(Shapes.Polygon);
TriangleTool.onMouseDown = handleMouseClick(Shapes.Triangle, 2);
SquareTool.onMouseDown = handleMouseClick(Shapes.Square, 2);
