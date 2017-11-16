const httpMethod = (req,res) => {

    console.log("Someone has entered the home!");

    let resKeys = Object.keys(req.query);
    console.log(resKeys);

    let q = resKeys.reduce( (sum, val) => {
        return sum + `${val} is ${req.query[val]} <br>`;
    }, '');
    console.log(q);
    res.send(q);
}

module.exports = ['/showQuery', httpMethod];
