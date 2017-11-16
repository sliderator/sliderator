//Import dependencies
const toMarkdown = require('../toMarkdown.js'); //returns array
const fs = require('fs');
const childProcess = require('child_process');

//Declare asychronous callbacks
const callMD2SlidesApp = (noArgs) => {
    childProcess.execFile('md2gslides',['markdownSlides/userLyrics.md'],  (err,stdout,stdin) => {
        console.log(err);
        console.log(stdin);
        console.log(stdout);
        console.log('The markdown file has been uploaded to slides!!');
    });
};
const errorNote  = (error) => {
    console.log(`There\'s an error in displaylyrics.js write stream!\n${error}`)
    process.exit(1);
};
const finishNote = (noArgs) => {
    console.log('The song lyrics have been written to local server!');
    callMD2SlidesApp();
};


module.exports = (app,path) => {
    return (req, res) => {

        //console.log(req.ip) //display ip address
        var qLyrics = req.query.lyricPost;

        //parse the lyrics
        var collectedLyrics = app.locals.LP(qLyrics);

        const markdownLyrics = toMarkdown(collectedLyrics); //array
        console.log(markdownLyrics);
        app.locals.lyrics = qLyrics ? qLyrics : "There's currently no lyrics! :(";
        res.send(`Your lyrics are: ${app.locals.lyrics}`);
        //res.redirect('http://google.com');

        collectedLyrics = collectedLyrics.join(' ');

        const streamOpts = {highWaterMark: 100};
        const writeStream = fs.createWriteStream('./markdownSlides/userLyrics.md',streamOpts);
        writeStream.on('error', errorNote);
        writeStream.on('finish', finishNote); //called by end method
        // writeStream.on('finish', (noArgs) => {
        //     //Arguments in this function may be out of order
        //     childProcess.execFile('md2gslides',['./markdownSlides/userLyrics.md'], (err,stdout,stdin) => {
        //         console.log(err);
        //         console.log(stdin);
        //         console.log(stdout);
        //         console.log('The markdown file has been uploaded to slides!!');
        //     });
        // }); //called by end method


        markdownLyrics.map((line) => {
            writeStream.write(line,'UTF8');
        });
        writeStream.end();

    }
}
