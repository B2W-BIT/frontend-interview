export const APIRoot = 'http://localhost:3000'

export const formatCount = (count) => {
  const M = 1000000
  const TenK = 10000
  const K = 1000
  if (count > M) {
    return Math.floor(count/M) + 'M'
  } else if (count > TenK) {
    return Math.floor(count/K) + 'K'
  } else {
    return count
  }
}