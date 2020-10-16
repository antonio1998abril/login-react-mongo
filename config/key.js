
//utilizar esta parte del projjecto cuando estemos en produciion on desarrollo
if(process.env.NODE_ENV === 'production'){
    module.exports=require('./pro');
}else{
    module.exports=require('./dev');
}