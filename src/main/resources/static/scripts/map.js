var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(35.1546, 128.0985),
  level: 3,
};

var map = new kakao.maps.Map(container, options);

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

var overlay = new kakao.maps.CustomOverlay({
  content: content,
  xAnchor: 0.5,
  yAnchor: 1,
  position: new kakao.maps.LatLng(35.1567, 128.1014),
});

function openOverlay() {
  overlay.setMap(map);
  map.panTo(new kakao.maps.LatLng(35.1567, 128.1014));
}

function closeOverlay() {
  overlay.setMap(null);
}
