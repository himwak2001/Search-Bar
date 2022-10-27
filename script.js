const searchBarContainer = document.querySelector(".search-bar-container");
const GoogleSearch = document.querySelector(".google-search");

GoogleSearch.addEventListener("click", () => {
	searchBarContainer.classList.toggle("active");
})