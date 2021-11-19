// Returns the AppData of ExWebThrottle
export function getLocoList() {
  if (typeof Storage !== "undefined") {
    return JSON.parse(window.localStorage.getItem("cabList"));
  } else {
    return [];
  }
}
