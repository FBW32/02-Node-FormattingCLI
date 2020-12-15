function formatting(str){
return (str.split(' ').filter(word=>word!='').join(' '));
}

module.exports={formatting}