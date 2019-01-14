function mouseOver(picture) {
    if (picture.id == "image1") {
        document.getElementById("image1").src = "assets/img/image1_2.jpg";
    }
    else if (picture.id == "image2") {
        document.getElementById("image2").src = "assets/img/image2_2.jpg";
    }
    else if (picture.id == "image3") {
        document.getElementById("image3").src = "assets/img/image3_2.jpg";
    }
    else if (picture.id == "image4") {
        document.getElementById("image4").src = "assets/img/image4_2.jpg";
    }
    else {
        document.getElementById("image5").src = "assets/img/image5_2.jpg";
    }
}