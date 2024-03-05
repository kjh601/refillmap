function updateStyle(input) {
  // 라디오 버튼의 경우, 같은 이름을 가진 다른 버튼의 스타일 초기화
  if (input.type === "radio" && input.checked) {
    const allRadios = document.querySelectorAll(
      `input[type="radio"][name="${input.name}"]`
    );
    allRadios.forEach(function (otherRadio) {
      if (otherRadio !== input) {
        otherRadio.parentElement.style.backgroundColor = "#ffffff";
        otherRadio.nextElementSibling.style.color = "#000";
      }
    });

    if (input.value == "store") url = "../html/store-result.html";
    else url = "../html/product-result.html";

    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const searchResult = document.getElementById("search_result");
        searchResult.innerHTML = html;

        // 컨텐츠와 관련된 스크립트 로드
        loadContentScript(url);
      })
      .catch((error) => {
        console.error("Error loading content:", error);
      });
  }

  // 선택된 라디오 버튼 또는 체크박스에 스타일 적용
  if (input.checked) {
    input.parentElement.style.backgroundColor = "#50806b";
    input.nextElementSibling.style.color = "#fff";
  } else if (input.type === "checkbox") {
    input.parentElement.style.backgroundColor = "#ffffff";
    input.nextElementSibling.style.color = "#000";
  }
}

function toggleSearchOptions(event) {
  // search_option 요소와 버튼 내의 span 요소를 찾음
  var searchOption = document.querySelector(".search_option");
  var buttonText = document.querySelector(".disapear_button_container .text");
  var buttonImg = document.querySelector(".disapear_button_container img");

  // search_option 요소의 현재 표시 상태에 따라 스타일과 버튼 텍스트 변경
  if (searchOption.style.display === "none") {
    searchOption.style.display = "block";
    buttonImg.src = "../img/remove.svg";

    buttonText.textContent = "숨기기"; // 버튼 텍스트를 '숨기기'로 변경
  } else {
    searchOption.style.display = "none";
    buttonText.textContent = "펼치기"; // 버튼 텍스트를 '펼치기'로 변경
    buttonImg.src = "../img/plus.svg";
  }
}

function redirectToStoreDetailPage() {
  window.location.href = "store-detail-page.html";
}

function redirectToProductDetailPage() {
  window.location.href = "product-detail-page.html";
}

function openNavigationPage() {
  window.open(
    "https://map.kakao.com/link/to/민달팽이주택협동조합 ,37.5622,126.9558",
    "_blank"
  );
}
// 37.5622 126.9558
