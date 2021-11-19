// Returns the Map data of ExWebThrottle
export function getMapData() {
  if (typeof Storage !== "undefined") {
    return JSON.parse(window.localStorage.getItem("mapData"));
  } else {
    return [];
  }
}
