/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

    });

});


/* =========================
   MENU FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filters.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.category;


        /* Change active button */

        filters.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter food */

        foodCards.forEach(function(card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================
   ADD TO CART
========================= */

function addToCart(foodName) {

    alert(foodName + " added to your order! 🍽️");

}


/* =========================
   RESERVATION
========================= */

const reservationForm =
    document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const guests =
        document.getElementById("guests").value;


    alert(
        "Reservation Confirmed! 🎉\n\n" +
        "Name: " + name + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Guests: " + guests
    );


    reservationForm.reset();

});


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(function(section) {

    observer.observe(section);

});