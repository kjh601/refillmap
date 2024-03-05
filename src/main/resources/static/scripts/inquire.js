function redirectToMyQuestion() {
  window.location.href = "myquestion.html";
}

function updateCheckedLabel(selectedElement) {
  var labels = document.querySelectorAll(
    "#inquire > .question_type > .type_list > label"
  );

  labels.forEach(function (label) {
    label.classList.remove("checked_question_type");
  });

  selectedElement.classList.add("checked_question_type");
}
