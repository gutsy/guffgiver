
function insult(response) {
	
	var finishedInsult = "You're a smelly butthole";

	var body = '<html>' +
	'<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<p>' + finishedInsult + '<p>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

exports.insult = insult;