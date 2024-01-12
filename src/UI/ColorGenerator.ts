
import { tealList } from './Colors/Blues'

export const getRandomColorFromList = (): string => {
  // Choose a random index from the colorList
  const randomIndex = Math.floor(Math.random() * Object.keys(tealList).length)

  // Get the color at the random index
  const randomColor = tealList[randomIndex]

  return randomColor
}

// Example usage
export const randomColor1 = getRandomColorFromList()
export const randomColor2 = getRandomColorFromList()
export const randomColor3 = getRandomColorFromList()
export const randomColor4 = getRandomColorFromList()
export const randomColor5 = getRandomColorFromList()
export const randomColor6 = getRandomColorFromList()
