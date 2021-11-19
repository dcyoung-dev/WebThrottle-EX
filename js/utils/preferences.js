// Get a given user preference
export function getPreference(pref) {
  if (window.localStorage.getItem("userpref") != null) {
    const curpref = JSON.parse(window.localStorage.getItem("userpref"));
    return curpref[pref];
  } else {
    return null;
  }
}

// Set a given user preference
export function setPreference(pref, val) {
    let curpref;
  if (window.localStorage.getItem("userpref") != null) {
    curpref = JSON.parse(window.localStorage.getItem("userpref"));
  } else {
    curpref = {};
  }
  curpref[pref] = val;
  setUserPreferences(curpref);
}

// Store user preferences in local storage
export function setUserPreferences(pref) {
  if (typeof (Storage) !== "undefined") {
    window.localStorage.setItem("userpref", JSON.stringify(pref));
  }
}

export function getUserPreferences() {
  if (typeof Storage !== "undefined") {
    return JSON.parse(window.localStorage.getItem("userpref"));
  } else {
    return [];
  }
}

export function importPrefData(data) {
  if (data) {
    window.localStorage.setItem("userpref", JSON.stringify(data));
  }
}
