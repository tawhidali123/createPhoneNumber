function createPhoneNumber(numbers){

  let stringy = numbers.map((n) => `${n}`)
  let addParentesis = stringy.splice(0,0, '(')
  let addSecondParenthesis = stringy.splice(4,0, ") ")
  let addDash = stringy.splice(8, 0, "-")

  console.log(stringy.join(""))
  

  
}createPhoneNumber([1,2,3,4,5,6,7,8,9])