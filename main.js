var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("texbox");

var num1 = Math.floor(Math.random() * 256);
console.log(num1);
var num2 = Math.floor(Math.random() * 256);
console.log(num2);
var num3 = Math.floor(Math.random() * 256);
console.log(num3);

document.getElementById("michael_jackson").style.color = ` rgb(${num1}, ${num2}, ${num3}) `;

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    Textbox.innerHTML = content;
    console.log(content);
    if ((content =="tó te devendo r$ 50 Heitor") || (content == "Já é moleque faz minha nft" ))
    {
       console.log("tirando selfie ---"); 
       speak();
    }

}

    camera=document.getElementById("bola_quadrada");
    Webcam.set({
        width:360,
        height:250,
        Image_format : 'jpeg',
        jpeg_quality:90
    });

    function speak(){
        var synth = window.speechSynthesis;
        speakData = "fazendo sua nft enquanto c me da cinquentinha";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        Webcam.attach(camera);

        setTimeout(function()
        {
            takeSelfie();
            save();
        }, 1);
    }

    function takeSelfie()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("fogo_molhado").innerHTML = '<img id= "selfieImage" src="'+data_uri+'"/>';
            
        });
    }

    function save()
    {
        link = document.getElementById("link");
        image =document.getElementById("selfieImage").src;
        link.href = image;
        link.click();
    }