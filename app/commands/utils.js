/**
 * @param {string} instruction
 * @returns {string}
 */
export function makeCommandString(instruction) {
  return `<${instruction}>`
}


/**
 * @param {number|{primaryAddress: number, subAddress: number}} address
 * @returns {{subAddress: number | null, linearAddress: number | null, primaryAddress: number | null}}
 */
export function parseAddress(address) {
  let linearAddress = null
  let primaryAddress = null
  let subAddress = null

  if (typeof (address) === "number") {
    linearAddress = address
  } else {
    primaryAddress = address.primaryAddress
    subAddress = address.subAddress
  }
  return {linearAddress, primaryAddress, subAddress};
}
