function toggleFavorite(button) {
  var favoriteIcon = button.querySelector("img");
  if (favoriteIcon.src.includes("star_outline.svg")) {
    favoriteIcon.src = "../img/star_filled.svg";
  } else {
    favoriteIcon.src = "../img/star_outline.svg";
  }
}

function redirectToStoreDetailPage() {
  window.location.href = "store-detail-page.html";
}
