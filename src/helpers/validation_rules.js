export const validateNIP = (NIP) => {
  let result = 0;
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  weights.forEach((element,index) => {
    result += element * NIP[index];
  });
  if (NIP.length === 10 && parseInt(NIP, 10) > 0 && result%11 === parseInt(NIP[9])) return true;
  else return false;
  }
  
export const validateREGON = (REGON) => {
    if (REGON.length === 9) {
      let result = 0;
      const weights = [8, 9, 2, 3, 4, 5, 6, 7];
      weights.forEach((element,index) => {
        result += element * REGON[index];
      });
      if(result%11 === parseInt(REGON[8])) return true;
      else return false;
    } else if (REGON.length === 14) {
      let result = 0;
      const weights = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
      weights.forEach((element,index) => {
        result += element * REGON[index];
      });
      if((result%11 === parseInt(REGON[13])) || (result%11 === 10 && parseInt(REGON[13]) === 0)) return true;
      else return false;
    } else {
      return false;
    }
}