// Load all maps to select box
import {getMapData} from "./getMapData.js";

export function loadmaps() {
  $("#select-map").empty();
  $("#select-map").append($("<option />").val("default").text("Default"));
  $.each(getMapData(), function () {
    $("#select-map").append($("<option />").val(this.mname).text(this.mname));
  });
}
