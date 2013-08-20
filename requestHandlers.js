
function insult(response) {
	
	var part1 = ["Your face", "Your butt", "Your stupid fingers", "Your mamma", "Your brain", "Everything about you", "Even your stupid right foot", "Your ugly earlobe", "Your breath", "Your left knee"];

	var part2 = ["looks like", "smells like", "resembles", "feels like", "is uglier than", "is more stupid than", "is worse than", "looks scarier than", "is akin to", "is about equal to"];

	var part3 = ["a warm", "a dead", "a bubbly", "a rotten", "a smelly", "a wet", "an angry", "an exploding", "a dying", "a bleeding, dying, smelly, horrible"];

	var part4 = ["rat", "monkey", "butthole", "cadaver", "antelope carcass", "Kardashian sister", "Yeti rectum", "pile of oranges", "herd of goats", "apple"];

	var index1 = Math.floor((Math.random()*10)+1);
	var index2 = Math.floor((Math.random()*10)+1);
	var index3 = Math.floor((Math.random()*10)+1);
	var index4 = Math.floor((Math.random()*10)+1);

	var finishedInsult = part1[index1 - 1] + " " + part2[index2 -1] + " " + part3[index3 - 1] + " " + part4[index4 - 1] + "!";

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