require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const { hash, auth } = require('./controllers/authController');
const userController = require('./controllers/userController');
const methodOverride = require('method-override');
const parser = require('body-parser');
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: false
});

db.on('open', () => {
    console.log('Mongo is Connected');
});
db.once('error', (error) => console.error(error));
/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}
app.use(methodOverride('_method'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json())
app.use(cors());

/* Controller Goes Here Remove the tes*/
app.get('/test', (req, res)=>{
	res.status(200).json({
		website: 'My Website',
		info: 'Not that much'
	})
})
/* Controller Ends here */
//LISTENER
app.use('/api/', require('./controllers/posts'));
app.use('/api/teams', require('./controllers/teams'))
app.use('/api/comments', require('./controllers/comments'));
app.use('/api/users', userController);

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});



/* Vanilla Node Server
const http = require('http'); // The node http module allow you to create servers
const fs = require('fs'); // The node file system module allows you to create files and interact with file system
const path = require('path'); // path allows you to get the path of a folder etc.
const PORT = process.env.PORT || 8080;

const public = __dirname + '/public'

http.createServer(function (req, res) {
	let filePath = public + req.url;
	if (filePath == public + '/') {
	  filePath = public + '/index.html';
	}
  filePath = filePath.split('?')[0]

	let extName = String(path.extname(filePath)).toLowerCase();
	const mimeTypes = {
	'.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
	};

	let contentType = mimeTypes[extName] || 'application/octet-stream';
	fs.readFile(filePath, function(error, content) {
	if (error) {
	  if(error.code == 'ENOENT') {
	    fs.readFile(public + '/404.html', function(error, content) {
	      res.writeHead(404, {'Content-Type': 'text/html'});
	      res.end(content, 'utf-8');
	    });
	  }
	  else {
	    res.writeHead(500);
	    res.end('Sorry, you got an error bro here it is'+error.code+' ..\n');
	  }
	}
	else {
	   res.writeHead(200, { 'Content-Type': contentType });
	   res.end(content, 'utf-8');
	  }
	});
}).listen(PORT);

console.log(`Server started! Listening on port: ${PORT}`);
// basic node server without express serving
*/
