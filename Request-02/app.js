
  // const http=require( './http' )inga project 02 kku ulla irukkure idathai point pannum

const http=require('http');
//req- enkirathu requist vangurathukku
//res- enkkirathu response send pannurathukku
function rqListener(req,res){
    console.log(req); 
    //some output varum : windows,ipi,browser name,basic info;  
}
const server=http.createServer(rqListener);
server.listen(4000)  
//server requst no stop ,localhost:4000



 


