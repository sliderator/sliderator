
const toMarkdown = require('./toMarkdown.js');
module.exports = (app,path) => {
    return (req, res) => {

        //console.log(req)

        //pull information from request
        var qLyrics = req.query.lyricPost;

        //process lyrics from request
        var collectedLyrics = app.locals.LP(qLyrics)
        app.locals.lyrics = qLyrics ? qLyrics : "There's currently no lyrics! :(";
        //console.log(collectedLyrics)

        //res.send(`Your lyrics are: ${app.locals.lyrics}`);
        //res.redirect('http://google.com');
    }
}
