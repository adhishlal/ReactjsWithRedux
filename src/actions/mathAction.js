export function incNumber(number){
  return{
      type: "ADD",
      payload: number
  };
}

export function decNumber(number){
  return{
      type: "SUB",
      payload: number
  };
}

export function resetNumber(number){
  return{
      type: "RESET",
      payload: number
  };
}
