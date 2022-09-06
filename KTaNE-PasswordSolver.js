  const gameWords = ['about', 'after', 'again', 'below', 'could', 'every',
                 'first', 'found', 'great', 'house', 'large', 'learn',
                 'never', 'other', 'place', 'plant', 'point', 'right',
                 'small', 'sound', 'spell', 'still', 'study', 'their',
                 'there', 'these', 'thing', 'think', 'three', 'water',
                 'where', 'which', 'world', 'would', 'write'];

function PasswordSolver(dataFull) {
    
  let dataLower = dataFull.toLowerCase()
    
  let dataA = dataLower.slice(0,6);
  let dataB = dataLower.slice(6,12);
  let dataC = dataLower.slice(12,18);
  let dataD = dataLower.slice(18,24);
  let dataE = dataLower.slice(24,30);

  let builtStr = '';

  for (let a = 0; a < 6; a++) {
      for (let b = 0; b < 6; b++) {  
        for (let c = 0; c < 6; c++) {
            for (let d = 0; d < 6; d++) {
                for (let e = 0; d < 6; d++) {
                    
                    builtStr = dataA[a] + dataB[b] + dataC[c] + dataD[d] + dataE[e];
                    
                    if (gameWords.includes(builtStr)) {
                        console.log(builtStr)
                    }
                }
            }
        }
    }
  }
}

//PasswordSolver('ABBBBBBCCCCCOAAAAAUAAAAATAAAAA')

