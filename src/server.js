var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function(){ console.log("Server now listening on port", port)});