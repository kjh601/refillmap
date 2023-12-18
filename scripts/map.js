var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(35.1546, 128.0985),
  level: 3,
};

var map = new kakao.maps.Map(container, options); // 지도를 생성합니다

// 지도에 마커를 표시합니다

// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다
var content =
  '<div class="overlay">' +
  '  <div class="wrap">' +
  '    <div class="info">' +
  '      <div class="header">' +
  '        <span class="title">매장명</span>' +
  '        <button onclick="closeOverlay()"><img src="/img/close.svg" /></button>' +
  "      </div>" +
  '      <img src="/img/overay_store.jpg" />' +
  '      <div class="store_status">' +
  '        <div class="open">영업 중</div>' +
  '        <div class="carbon_point">탄소포인트 참여</div>' +
  '        <div class="personal_bottle">개인용기 가능</div>' +
  "      </div>" +
  '      <div class="store_address">주소명 경남 진주시 가좌길74번길 12</div>' +
  '      <div class="bottom_button">' +
  '        <button class="route_button" value="direction" onclick="openNavigationPage()">' +
  "          길찾기" +
  "        </button>" +
  '        <button class="detail_button" value="store_detail" onclick="redirectToStoreDetailPage()">' +
  "          상세 보기" +
  "        </button>" +
  "      </div>" +
  "    </div>" +
  "  </div>" +
  '  <img class="pointer" src="/img/Polygon.svg" />' +
  "</div>";

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
var overlay = new kakao.maps.CustomOverlay({
  content: content,
  map: map,
  position: new kakao.maps.LatLng(35.1567, 128.1014),
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
function openOverlay() {
  overlay.setMap(map);
  map.panTo(new kakao.maps.LatLng(35.1567, 128.1014));
}

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
function closeOverlay() {
  overlay.setMap(null);
}
