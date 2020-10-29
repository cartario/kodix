export const MIN_SALARY = 12000;
const PENI = 0.13;
const MAX_CASHBACK = 260000;

export const getPays = (value) => {

  let res = [];

  if(value >= MIN_SALARY){ 
     
    const cashbackPerYear = Math.floor(Number(value) * 12 * PENI);

    if(cashbackPerYear>=MAX_CASHBACK){
      res.push(MAX_CASHBACK)
      return res;
    }
    const length = Math.floor(MAX_CASHBACK / cashbackPerYear);
    res = Array(length).fill(cashbackPerYear);
    res.push(MAX_CASHBACK % (length * cashbackPerYear));    
  } 
  return res; 
};
