// code your solution here
const saturdayFun = (a="roller-skate") => {
  return `This Saturday, I want to ${ a }!`;
}  

const mondayWork = (event='go to the office') => {
  return `This Monday, I will ${event}.`
}

const wrapAdjective = (init="*")  => {
  return function wrapper (a="a hard worker"){
    return `You are ${init}${a}${init}!`
  }
}