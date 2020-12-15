function showHelp(str){
  const output=str.split(' ').map(item=>capitalizeInitial(item)).join(' ')

  return("How to use this program:\n   1. When you input a new string with more than 1 space the program will sanitize it.\n   2. If you typed the name of a city without capitalization the program will capitalize it.\n   3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.\n"+`${output}`)
}
function capitalizeInitial(str){
  const arr=str.toLowerCase().split(' ')
  return arr.map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
}


module.exports={showHelp,capitalizeInitial}