let myElement = document.querySelector(".container div"),
    allElement = document.querySelectorAll(".container div"),
    swapBtn = document.querySelector(".swapBtn");
nomberElement = allElement.length,
    i = 0;



setInterval(() => {


    allElement.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("hide");
    });

    /* allElement[i].addEventListener('transitionstart', () => {

        allElement[i + 1].style.display = "block";
        allElement[i + 1].classList.add("preActive");
        console.log("the transitionstart works perfectly");

    }); */

    if (allElement.length - 1 === i) {
        i = 0;
    }


    if (allElement.length - 2 === i) {

        allElement[i].classList.add('hide');
        allElement[i + 1].classList.add('active');
        allElement[i + 1].classList.remove("preActive");

        allElement[i].addEventListener('transitionend', (e) => {
            allElement[0].classList.add('active');
            allElement[1].classList.add("preActive");
            e.target.classList.remove('hide');
        });

        allElement[i + 1].addEventListener('transitionend', (e) => {
            e.target.classList.remove('hide');

        });
    } else {


        allElement[i].classList.add('hide');
        allElement[i + 1].classList.add('active');
        allElement[i + 1].classList.remove("preActive");
        console.log(i);

        allElement[i].addEventListener('transitionend', (e) => {

            allElement[i + 1].classList.add("preActive");
            e.target.classList.remove('hide');

        });

        allElement[i + 1].addEventListener('transitionend', (e) => {
            e.target.classList.remove('hide');

        });
    }

    i++;


}, 5000);



