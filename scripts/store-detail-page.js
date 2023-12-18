function toggleFavorite() {
  var favoriteIcon = document.getElementById("favoriteIcon");
  if (favoriteIcon.src.includes("star_outline.svg")) {
    favoriteIcon.src = "../img/star_filled.svg";
  } else {
    favoriteIcon.src = "../img/star_outline.svg";
  }
}

function openNavigationPage() {
  window.open(
    "https://map.kakao.com/link/to/민달팽이주택협동조합 ,37.5622,126.9558",
    "_blank"
  );
}

function redirectToHomepage() {
  window.location.href = "homepage.html";
}

function redirectToProductDetailPage() {
  window.location.href = "product-detail-page.html";
}

function updateCheckedLabel(selectedElement) {
  var labels = document.querySelectorAll(
    ".sale_product > .products > .product_type > label"
  );

  labels.forEach(function (label) {
    label.classList.remove("checked_product_type");
  });

  selectedElement.classList.add("checked_product_type");
}
