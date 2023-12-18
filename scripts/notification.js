function toggleDetail(event) {
  var detailButton = event.target.closest(".detail_toggle_button");
  if (detailButton) {
    var container = detailButton.closest(".notification_container");
    container.querySelector(".notification_content").classList.toggle("hidden");

    var img = detailButton.querySelector("img");
    if (img.getAttribute("src") === "../img/collapse_detail.svg") {
      img.setAttribute("src", "../img/expand_detail.svg");
    } else {
      img.setAttribute("src", "../img/collapse_detail.svg");
    }
  }
}

function deleteNotification(event) {
  if (event.target.matches(".delete")) {
    event.preventDefault();
    var notification = event.target.closest("li.notification_container");
    if (notification) {
      notification.remove();
    }
  }
}

function redirectToStoreDetailPage() {
  window.location.href = "store-detail-page.html";
}

function redirectToProductDetailPage() {
  window.location.href = "product-detail-page.html";
}

function redirectToMypage() {
  window.location.href = "mypage.html";
}

function redirectToFAQ() {
  window.location.href = "FAQ.html";
}
