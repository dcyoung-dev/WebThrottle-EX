// Load button layout of selected Map
export function loadButtons(data) {
  $("#fn-wrapper").empty();
  $.each(data.fnData, function (key, value) {
    const isPressed = value[0] != 0 ? true : false;
    const btnType = value[1] != 0 ? "press" : "toggle";
    if (value[3] == 1) {
      $("#fn-wrapper").append(
        "<div class='fn-button form-group field-button-fn'> <button class='btn-default btn fn-btn " + btnType + "' data-type='" +
        btnType + "' aria-pressed='" + isPressed + "' name='" + key + "'  id='" + key + "'>" +
        value[2] + "</button>"
        + "</div>");
    }
  });
}
