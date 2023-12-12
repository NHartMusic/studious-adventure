export const getRandomColorFromList = (): string => {
    const colorList = [
      '#C9F0F7',
      '#B8EBF5',
      '#A6E5F2',
      '#94E0F0',
      '#82DBED',
      '#70D6EB',
      '#5ED1E8',
      '#4CCCE6',
      '#3BC7E3',
      '#29C2E0',
      '#1FB8D6',
    ];
  
    // Choose a random index from the colorList
    const randomIndex = Math.floor(Math.random() * colorList.length);
  
    // Get the color at the random index
    const randomColor = colorList[randomIndex];
  
    return randomColor;
  };
  
  // Example usage
  export const randomColor1 = getRandomColorFromList()
  export const randomColor2 = getRandomColorFromList()
  export const randomColor3 = getRandomColorFromList()
  export const randomColor4 = getRandomColorFromList()
  export const randomColor5 = getRandomColorFromList()
  export const randomColor6 = getRandomColorFromList()
