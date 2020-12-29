var website = website || {

    init: function () {
        website.bindings.navbar();
    },

    bindings: {
        navbar: function () {
            var navbuttons = document.querySelectorAll("nav button");
            var tabcontents = document.querySelectorAll(".tab-content");
            navbuttons.forEach(function (elem) {
                elem.addEventListener("click", function (element) {
                    var toShow = this.dataset.for;
                    // remove active class on navbuttons
                    navbuttons.forEach(function (e) {
                        e.classList.remove("active");
                    });
                    // remove active class on tabcontent
                    tabcontents.forEach(function (e) {
                        e.classList.remove("active");
                    });
                    // set active classes
                    element.target.classList.add("active");
                    document.getElementById(toShow).classList.add("active");
                });
            });
        }
    }
};

window.onload = function () {
    website.init();
};