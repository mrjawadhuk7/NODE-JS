const http=require('http');

const server= http.createServer((req,res)=>{
//browser kku response send pannum pothu header ellam set panni than anuppunum;
res.setHeader('content-type','text/html'); //first steps ;setHeader;
res.write('<html>')
res.write('<head><title>MrJawadhu</title></head>')
res.write('<body><h1>i am kesavan</h1></body>')
res.write('</html>')
res.end(); // finished inform

//output : i am kesavan, ella url /.. intha response than varuthu

//this is small pieses data provide to internet kku;
});
server.listen(5000);