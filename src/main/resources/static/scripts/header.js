const sidebar = document.querySelector(".contract a");

sidebar.addEventListener("click", toggle_sidebar);

function toggle_sidebar(event) {
  event.preventDefault(); // 페이지가 다시 로드되는 것을 방지
  let header = document.querySelector("#header");
  let disapperTextArr = document.querySelectorAll(
    "#header span, .logo_container h1"
  ); // 로고 제목도 숨깁니다.

  // 헤더 너비 변경
  header.style.width = header.style.width === "64px" ? "226px" : "64px";

  // 텍스트 요소 숨기기 / 보이기
  for (let element of disapperTextArr) {
    element.style.display = element.style.display === "none" ? "" : "none";
  }

  // 아이콘 방향 변경
  let icon = sidebar.querySelector("img");
  icon.src = icon.src.includes("nav-arrow-left.svg")
    ? "../img/nav-arrow-right.svg"
    : "../img/nav-arrow-left.svg";

  // 클래스명 변경
  sidebar.parentElement.className =
    sidebar.parentElement.className === "expand" ? "contract" : "expand";
}

document.querySelectorAll(".menu_list li").forEach((item) => {
  // "contract" 클래스를 가진 항목은 이벤트 리스너 추가를 제외
  if (!item.classList.contains("contract")) {
    item.addEventListener("click", function () {
      // 모든 항목에서 active 클래스 제거
      document.querySelectorAll(".menu_list li").forEach((li) => {
        if (!li.classList.contains("contract")) {
          li.classList.remove("active");
        }
      });

      // 클릭된 항목에 active 클래스 추가
      this.classList.add("active");
    });
  }
});

function is_sidebar_expand() {
  let firstChild = document.querySelector(".top .menu_list").firstElementChild;
  return firstChild.className == "expand";
}

function loadContent(url) {
  currentLocation = window.location.pathname.split("/").pop();
  if (currentLocation == "index.html" || currentLocation == "") {
    loadContentNow(url);
  } else {
    // 현재 페이지가 'index.html'이 아닌 경우, localStorage에 정보 저장
    localStorage.setItem("loadAfterRedirect", true);
    localStorage.setItem("redirectUrl", url);
    window.location.href = "index.html";
  }
}

function loadContentNow(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const contentsContainer = document.getElementById("contents_container");
      contentsContainer.innerHTML = html;
      loadContentScript(url);
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}

function loadContentScript(url) {
  // URL에 따라 로드할 스크립트 결정
  let scriptPath;
  switch (url) {
    case "/html/search.html":
      scriptPath = "/scripts/search.js";
      break;
    case "/html/notification.html":
      scriptPath = "/scripts/notification.js";
      break;
    case "/html/favorites.html":
      scriptPath = "/scripts/search.js";
      break;
    // 기타 컨텐츠에 대한 스크립트 경로를 추가할 수 있습니다.
    default:
      scriptPath = null;
  }

  // 스크립트 로드
  if (scriptPath) {
    const script = document.createElement("script");
    script.src = scriptPath;
    document.body.appendChild(script);
  }
}

// 검색 버튼에 이벤트 추가
document.querySelector(".search").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작을 방지합니다
  loadContent("/html/search.html");
});

// 홈 버튼에 이벤트 추가
document.querySelector(".homepage").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작을 방지합니다
  loadContent("/html/no-content.html");
});

// 알림 버튼에 이벤트 추가
document
  .querySelector(".notification")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작을 방지합니다
    loadContent("/html/notification.html");
  });

// 즐겨찾기 버튼에 이벤트 추가
document
  .querySelector(".favorites")
  .addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작을 방지합니다
    loadContent("/html/favorites.html");
  });

// 마이페이지 버튼에 이벤트 추가
document.querySelector(".mypage").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작을 방지합니다
  window.location.href = "mypage.html";
});

// 지원센터 버튼에 이벤트 추가
document.querySelector(".support").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작을 방지합니다
  window.location.href = "faq.html";
});

// 로그아웃 버튼에 이벤트 추가
document.querySelector(".logout").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 동작을 방지합니다
  window.location.href = "login.html";
});

function toggleContentsContainer() {
  var container = document.getElementById("contents_container");
  container.classList.toggle("hidden_container");

  var image = document.querySelector(".contentsToggleButton>img");
  if (image.src.endsWith("/img/nav-arrow-right.svg")) {
    image.src = "/img/nav-arrow-left.svg";
  } else {
    image.src = "/img/nav-arrow-right.svg";
  }
}
