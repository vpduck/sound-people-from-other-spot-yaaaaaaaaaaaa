function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}


 

function modelReady() {
    classifier.classify(gotResult);

}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    } else {
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I Can Hear :" + results[0].label;
        document.getElementById("result_confidance").innerHTML = "Accuracy :" + results[0].confidence.toFixed(3);
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidance").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if (results[0].label == "Clap") {
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        } else if (results[0].label == "Bell") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        } else if (results[0].label == "Snapping") {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        } else {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }

    }

}