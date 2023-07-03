var canvas;
var video;
var c;

function preload(){

}
function setup(){
    canvas=createCanvas(640, 440);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 440);
    c = color("green");
    fill(c);
    circle(10,10,90);
    circle(635,10,90);
    circle(635,435,90);
    circle(10,435,90);
}
function tirar_foto(){
    save("foto_capturada.jpg"); 
}