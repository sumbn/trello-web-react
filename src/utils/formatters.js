// function capitalizeFirstLetter(str) {
//   if (str === null || str === undefined) {
//     return str
//   }
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }
export const capitalizeFirstLetter = (str) => {
  if (!str) return ''
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}