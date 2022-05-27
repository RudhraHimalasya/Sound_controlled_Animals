// dog= 0;
// cat= 0;
// bn = 0;
// lion = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/C5DwVwNDb/model.json' ,
    { probabilityThreshold: 0.7 } ,modelReady);}

function modelReady(){
    classifier.classify(gotResults)
}



function gotResults(error, results){
    if(error) { 
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("heading3").innerHTML = results[0].label;
        document.getElementById("result_confidence").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("heading3").style.color = "rgb("+random_number_r+","+random_number_g +","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g +","+random_number_b+")";

        img1 = document.getElementById('dog');
        img2 = document.getElementById('Cat');
        img3 = document.getElementById('Lion');
        img4 = document.getElementById('background_Noise'); 
        
        if(results[0].label == "dog"){
            img.src = 'dog.JPG';
        } 
        if(results[0].label == "cat"){
            img.src = 'Cat.JPG';
        } 
        if(results[0].label == "lion"){
            img.src = 'Lion.JPG';
        } 
        if(results[0].label == "background_Noise"){
        img.src = 'bn.JPG';
        }                
      } 
    }
    
