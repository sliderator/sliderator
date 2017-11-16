
module.exports = (app,path) => {
    return (req, res) => {
        const indexRoute = path.join(__dirname,'..','public','index.html');
        //console.log(req.query);
        res.sendfile(indexRoute);
        //console.log(app.locals.lyrics);
    }
}
