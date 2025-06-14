const http=require('http');

const server= http.createServer((req,res)=>{
//browser kku response send pannum pothu header ellam set panni than anuppunum;
let url=res.url;
if(url==="/"){
    
    res.setHeader('content-type','text/html'); //first steps ;setHeader;
    res.write('<html>')
    res.write('<head><title>enter form title</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit>send</form></body>')
    res.write('</html>')
   return res.end(); // finished inform
     
    //output : i am kesavan, ella url /.. intha response than varuthu

    //this is small pieses data provide to internet kku;
}    
res.setHeader('content-type','text/html'); //first steps ;setHeader;
res.write('<html>')
res.write('<head><title>enter form title</title></head>')
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
res.write('</html>')
return res.end(); // finished inform
 
//output : i am kesavan, ella url /.. intha response than varuthu

//this is small pieses data provide to internet kku;
});
server.listen(6000);