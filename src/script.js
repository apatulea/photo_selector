//fading in the container
$(".container").hide().fadeIn(3000);

//images array
let imgArray = new Array();
imgArray[0] = "img/space0.jpg";
imgArray[1] = "img/space1.jpg";
imgArray[2] = "img/space2.jpg";
imgArray[3] = "img/space3.jpg";
imgArray[4] = "img/space4.jpg";

function getImage(e){
    let itemId = e.target.id;
    let changeId = $("img").attr("id",itemId);
    let newImg = $("img").attr("src", imgArray[itemId]);
    newImg.hide().fadeIn(2000);
}
$(".item").on("click",getImage)

//fore button
function getNextImg(){
    let getId = $("img").attr("id");
    console.log(getId)
    if(getId == "main"){
        getId = "0";
        let changeId = $("img").attr("id",getId);
        let nextImg = $("img").attr("src", imgArray[getId]);
        nextImg.hide().fadeIn(2000);
    }
    else if(getId >=0 && getId <4){
    getId = parseInt(getId) +1;
    let changeId = $("img").attr("id",getId);
    let nextImg = $("img").attr("src", imgArray[getId]);
    nextImg.hide().fadeIn(2000);
    }
    else{
        let changeId = $("img").attr("id","main");
        let mainImg = $("img").attr("src", "img/main.jpg");
        mainImg.hide().fadeIn(2000);
    }
}
$(".arrow2").on("click",getNextImg);

//back button
function getPrevImg(){
    let getId = $("img").attr("id");
    console.log(getId)
    if(getId == "0"){
        getId = "main";
        let changeId = $("img").attr("id",getId);
        let nextImg = $("img").attr("src", "img/main.jpg");
        nextImg.hide().fadeIn(2000);
    }
    else if(getId >=1 && getId <=4){
    getId = parseInt(getId)-1;  //convert to integer
    let changeId = $("img").attr("id",getId);
    let nextImg = $("img").attr("src", imgArray[getId]);
    nextImg.hide().fadeIn(2000);
    }
    else if (getId == "main"){
        getId = 4;
        let changeId = $("img").attr("id",getId);
        let mainImg = $("img").attr("src",imgArray[getId]);
        mainImg.hide().fadeIn(2000);
    }
}
$(".arrow1").on("click",getPrevImg);