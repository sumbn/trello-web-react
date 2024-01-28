//sorts

export const mapOrder = (originArray, orderArray, keyOrder) => {
  if (!originArray || !orderArray || !keyOrder) return []
  return [...originArray].sort((a, b) => ( orderArray.indexOf(a[keyOrder]) - orderArray.indexOf(b[keyOrder])))
}