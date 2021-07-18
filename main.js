nosex = 0;
nosey = 0;


function preload() {
    img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotpose);


}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, nosex, nosey, 30, 30);
}

function take_snapshot() {
    save('lokesh_photo')
}

function gotpose(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nosex=" + results[0].pose.nose.x);
        console.log("nosey=" + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;
    }

}

function modeloaded() {
    console.log("poseNet is Working");

}