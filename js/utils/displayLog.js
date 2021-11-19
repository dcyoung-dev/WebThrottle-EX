// Display log of events
export function displayLog(data) {
  data = data.replace("<", " ");
  data = data.replace(">", " ");
  $("#log-box").append("<br>" + data.toString() + "<br>");
  $("#log-box").scrollTop($("#log-box").prop("scrollHeight"));
}
