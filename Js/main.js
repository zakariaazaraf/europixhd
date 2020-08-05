/* let fig = document.querySelector("figure"),
    card = document.querySelector('.card');;



card.addEventListener('mouseout', () => {
    console.log("you pass by me stupied !!");
    fig.style.transform = "perspective(1000px) rotateY(180deg)"
}) */

/*  start working on the dropdown menu navigation */
let dropdownmenus = document.querySelectorAll('nav .dropdownMenu'),
    drop = document.querySelectorAll(".drop"),
    navigation = document.querySelector("nav"),
    anchor = document.querySelectorAll(".drop a"),
    carets = document.querySelectorAll(".drop a b");


navigation.addEventListener("click", (e) => {


    anchor.forEach(item => {

        /*test if i get the anchor that i want */
        if (e.target === item) {

            // Remove the classes exipt the current one, to let the toggle complet the work
            dropdownmenus.forEach(itemDrop => {

                if (e.target.nextElementSibling !== itemDrop) {
                    itemDrop.classList.remove("showFlex");
                }

            });

            anchor.forEach(itemAnchor => {

                if (e.target !== itemAnchor) {
                    itemAnchor.classList.remove("dropActive");
                }

            });

            carets.forEach(itemCaret => {

                if (e.target.firstElementChild !== itemCaret) {
                    itemCaret.classList.remove("caretActive");
                }

            });

            //add the classes in the right places
            e.target.nextElementSibling.classList.toggle("showFlex");
            e.target.classList.toggle("dropActive");
            e.target.firstElementChild.classList.toggle("caretActive");
        }
    });


});

let dropdownButton = document.querySelector('#dropButton'),
    navbar = document.querySelector("nav");

dropdownButton.addEventListener('click', () => {
    navbar.classList.toggle("act");

});


let images = document.querySelector(".slide-container"),
    items = document.querySelectorAll('.slide-container .item'),
    circle = document.querySelectorAll(".main-container .slide-container .circle"),
    circlesContainer = document.querySelector(".main-container .slide-container .circles"),
    i = 0,
    verifie = false;



circlesContainer.children[circlesContainer.children.length - 1].classList.add("colorCircle");


/**  The final work of the slide**/

let currentNumber = 0;

/*The main function of the slides*/

slideFunction = () => {

    items.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("hide");
        item.classList.remove("preActive");
    });

    circle.forEach(item => {
        item.classList.remove("colorCircle");
    });


    /* initialize the counter */
    if (items.length - 1 === i) {
        i = 0;
    }

    /*deal with the conflict of the circles*/
    if (i < circlesContainer.children.length - 1) {
        circlesContainer.children[circlesContainer.children.length - (2 + i)].classList.add("colorCircle");
    } else {
        circlesContainer.children[i].classList.add("colorCircle");
    }



    if (items.length - 2 === i) { // this is the last image without counting that one in front to adjust the transition


        items[i].classList.add('hide');
        items[i + 1].classList.add('active');
        items[i + 1].classList.remove("preActive");



        items[i].addEventListener('transitionend', (e) => {
            items[0].classList.add('active');
            items[1].classList.add("preActive");
            e.target.classList.remove('hide');
        });

    } else {

        items[i].classList.add('hide');
        items[i + 1].classList.add('active');
        items[i + 1].classList.remove("preActive");


        items[i].addEventListener('transitionend', (e) => {
            items.forEach(item => {
                item.classList.remove("preActive");
            });
            items[i + 1].classList.add("preActive");
            e.target.classList.remove('hide');

        });

    }

    console.log("the number of i : " + i);
    console.log("the number of crrent circle : " + currentNumber);
    console.log(items.length);

    i++; // Increment the counter
}

let sweepImagesID = setInterval(slideFunction, 5000);













/* starting the function that deal with teh click on the circles */

/* circlesContainer.addEventListener("click", (e) => {

    currentNumber = parseInt(e.target.dataset.number, 10);

    clearInterval(sweepImagesID);


    items[currentNumber].classList.add("preActiveTow");

    circle.forEach(item => { //clear the class from the circle
        item.classList.remove("colorCircle");
    });

    e.target.classList.add("colorCircle");


    e.target.addEventListener("transitionend", () => {
        items[i].classList.add("hideTow");
        items.forEach(item => {
            item.classList.remove("active");
        });
        items[currentNumber].classList.add("active");
    });

    items[currentNumber].addEventListener("transitionend", () => {

        //remove the classes from the items except the "active"
        items.forEach(item => {
            item.classList.remove("preActive");
            item.classList.remove("hide");
            item.classList.remove("hideTow");
            item.classList.remove("preActiveTow");
        });

        if (currentNumber !== circlesContainer.children.length - 1) {
            items[currentNumber + 1].classList.add("preActive");
        } else {
            items[0].classList.add("preActive");
        }

        i = currentNumber; // this fucking inrementation cause trouble if you modifie it before the transition done

    });


    console.log("the value of circle onClick event: " + currentNumber);
    console.log("the value of i onclick event: " + i);

    sweepImagesID = setInterval(slideFunction, 5000);

});
 */



