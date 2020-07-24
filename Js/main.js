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


    console.log(anchor);
    console.log(e.target);
});

let dropdownButton = document.querySelector('#dropButton'),
    navbar = document.querySelector("nav");

dropdownButton.addEventListener('click', () => {
    navbar.classList.toggle("act");

});


let images = document.querySelector(".slide-container"),
    items = document.querySelectorAll('.slide-container .item'),
    i = 0,
    j = 1;



/**  The final work of the slide**/

setInterval(() => {


    items.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("hide");
    });

    /* items[i].addEventListener('transitionstart', () => {

        items[i + 1].style.display = "block";
        items[i + 1].classList.add("preActive");
        console.log("the transitionstart works perfectly");

    }); */

    if (items.length - 1 === i) {
        i = 0;
    }


    if (items.length - 2 === i) {

        items[i].classList.add('hide');
        items[i + 1].classList.add('active');
        items[i + 1].classList.remove("preActive");
        console.log(i);

        items[i].addEventListener('transitionend', (e) => {
            items[0].classList.add('active');
            items[1].classList.add("preActive");
            e.target.classList.remove('hide');
        });

        items[i + 1].addEventListener('transitionend', (e) => {
            e.target.classList.remove('hide');

        });
    } else {


        items[i].classList.add('hide');
        items[i + 1].classList.add('active');
        items[i + 1].classList.remove("preActive");
        console.log(i);

        items[i].addEventListener('transitionend', (e) => {

            items[i + 1].classList.add("preActive");
            e.target.classList.remove('hide');

        });

        items[i + 1].addEventListener('transitionend', (e) => {
            e.target.classList.remove('hide');

        });
    }

    i++;

}, 5000);





