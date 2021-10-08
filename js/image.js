//let image1 = document.querySelector("#img1").src="../img/image1.jpg";



//console.log(image1);


let tourner = () => {
    let image1 = document.querySelector("#img1").src;
    let image2 = document.querySelector("#img2").src;
    let tempImg2 = image2;
    let image3 = document.querySelector("#img3").src;
    let tempImg3 = image3;
    let image4 = document.querySelector("#img4").src;
    let tempImg4 = image4;
    // console.log(image1);
    // console.log(image2);
    // console.log(image3);
    // console.log(image4);
    // console.log(tempImg2);
    // console.log(tempImg3);
    // console.log(tempImg4);

    //console.log("Ok");
    image2.src="../img/image1.jpg";
    image3.src= tempImg2;
    image4.src= tempImg3;
    image1.src= tempImg4;
    // console.log(image2);
    // console.log(image3);

}