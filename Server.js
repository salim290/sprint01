var http =require('http');

function onRequest(request, resonse) {
    resonse.writeHead(200,{'Content-Type': 'text/plain'});
    resonse.write('Wir wollen ein HTW SHARE App entwickeln ');
    resonse.end();
}

http.createServer(onRequest).listen(8000);