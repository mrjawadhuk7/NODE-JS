  // const http=require( './http' )inga project 02 kku ulla irukkure idathai point pannum

const http=require('http');
//req- enkirathu requist vangurathukku
//res- enkkirathu response send pannurathukku


const server=http.createServer((req,res)=>{
    //req many of information irukku
    // console.log(req); //some output varum : windows,ipi,browser name,basic info;  
    // console.log(req.url); //output : / so: /test;
    // console.log(req.method); //output : GET; //browser info vangurathukku GET
    console.log(req.headers);
    
    
    // process.exit() //request stoped line
 });
server.listen(4000)  
//server requst no stop ,localhost:4000 

