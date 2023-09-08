https://teachablemachine.withgoogle.com/models/Xq7RdZqHy/

function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Xq7RdZqHy/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
    }
}