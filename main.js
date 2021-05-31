$(document).ready(function showPage() {
    const hid = document.querySelectorAll('.hid')
    const about = document.querySelector('.a')
    const contact = document.querySelector('.b')

    about.addEventListener('click', () => {
        if (hid[1].classList.contains('contact')) {
            hid[1].classList.toggle('contact')

        }
        hid[0].classList.toggle('about')
    })
    contact.addEventListener('click', () => {
        if (hid[0].classList.contains('about')) {
            hid[0].classList.toggle('about')
        }
        hid[1].classList.toggle('contact')
    })
    const mybutton = document.querySelector(".to-top");
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user scrolls down 20px from the top of the document, show the button

})