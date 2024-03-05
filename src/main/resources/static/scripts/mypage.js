function redirectToLogin() {
  window.location.href = "login.html";
}

function redirectToEditProfile() {
  window.location.href = "edit_profile.html";
}

function showModal() {
  document.getElementById("deleteConfirmModal").style.display = "block";
}

function closeModal() {
  document.getElementById("deleteConfirmModal").style.display = "none";
}

function confirmDelete() {
  alert("탈퇴 처리되었습니다.");
  redirectToLogin();
}
