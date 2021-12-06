export function makeCommandString(instruction) {
  return `<${instruction}>`
}


export function parseAddress(address) {
  let linearAddress, primaryAddress, subAddress;

  if (typeof (address) === "number") {
    linearAddress = address
  } else {
    primaryAddress = address.primaryAddress
    subAddress = address.subAddress
  }
  return {linearAddress, primaryAddress, subAddress};
}
