const {formatting}=require('./formatting')
const {showHelp}=require('./messaging')
const {capitalizeInitial}=require('./messaging')


const helpArray=process.argv.filter(item=>item=='--help')
const str=process.argv.slice(2).filter(item=>item!='--help').join(' ')
if (helpArray.length!=0){
  console.log(showHelp(formatting(str)))
}
else{
  console.log(capitalizeInitial(formatting(str)))
}