(() => {

    console.log("fired");

    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector(".popover"); //#beer1

    function fetchData() {
        let targetElement = this,
            url = `./includes/connect.php?id=${this.dataset.target}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                buildPopover(data, targetElement);
            })
            .catch((err) => console.log(err));
    }

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `Average Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    seeMoreButtons.forEach(el => el.addEventListener("click", fetchData));
})();