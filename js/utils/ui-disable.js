// Enables and disables ui elements

export function uiDisable (status) {
  /*document.getElementById('ex-locoid').disabled = status
  document.getElementById('power-switch').disabled = status
  document.getElementById('button-sendCmd').disabled = status
  document.getElementById('dir-f').disabled = status
  document.getElementById('dir-S').disabled = status*/
  //document.getElementById('dir-b').disabled = status
  $("#ex-locoid").prop('disabled', status)
  $("#power-switch").prop('disabled', status)
  $("#button-sendCmd").prop('disabled', status)
  $("#dir-f").prop('disabled', status)
  $("#dir-S").prop('disabled', status)
  $("#dir-b").prop('disabled', status)
  if (status){
    //$("#throttle").roundSlider("disable");
    //toggleThrottleState(false)
    $("#button-getloco").trigger("click");
  } else {
    //$("#throttle").roundSlider("enable");
    //toggleThrottleState(true)
    //$("#button-getloco").trigger("click");
  }
}
