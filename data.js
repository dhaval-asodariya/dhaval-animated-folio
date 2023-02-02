const discription ={
    "about-me" : [
        "computer engineer",
        "developer and problem solver",
        "i like to play outdoor games",
        "i am a 2nd year computer engineering student from gec gandhinagar. i like to solve compititive problems.i am a quick learner."
    ],

    "hobby" :[
        "playing foodball, vollyball, kabaddi",
        "lisening music",
        "traveling, traking and explorong new things",
        "conquering real life problems"

    ],
    "education":[

        "web development cource by clube IDE",
        "computer engineer(25) from gec gandhinagar",
        "11th-12th(jee) from resonance",
        "6th-10th(ssc) from jnv gir-somnath"

    ],
    
    "achivements":[
        "c programing essentials by cisco netacad",
        "javascipt essentials by cisco netacad",
        "cybercecurity  by simplilearn",  
        "google cloud computing by google cloud"
    ],
}
function updateAbout(id){
    document.getElementById("detail1").innerHTML=discription[id][0]
    document.getElementById("detail2").innerHTML=discription[id][1]
    document.getElementById("detail3").innerHTML=discription[id][2]
    document.getElementById("detail4").innerHTML=discription[id][3]
}

var toggle =false;
function showMenu(){
    if(!toggle){
        document.getElementById("navitems").style.transform="none";

    }
    else{
        document.getElementById("navitems").style.transform = "translate(-150%)";
    }
    toggle = !toggle;
}
