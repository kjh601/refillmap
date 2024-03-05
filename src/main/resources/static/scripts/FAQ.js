function updateCheckedLabel(selectedElement) {
  var labels = document.querySelectorAll(
    "#FAQ > .content > .question_type > label"
  );

  labels.forEach(function (label) {
    label.classList.remove("checked_question_type");
  });

  selectedElement.classList.add("checked_question_type");
}

function toggleQuestionContent(clickedElement) {
  var contentToShow = clickedElement.parentElement.nextElementSibling;

  var allContents = document.querySelectorAll(".question_content");
  var allArrows = document.querySelectorAll(".question_title img");

  allContents.forEach(function (content, index) {
    if (content === contentToShow) {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
      clickedElement.style.transform =
        content.style.display === "block" ? "rotate(90deg)" : "rotate(0deg)";
    } else {
      content.style.display = "none";
      allArrows[index].style.transform = "rotate(0deg)";
    }
  });
}

function redirectToInquire() {
  window.location.href = "inquire.html";
}
