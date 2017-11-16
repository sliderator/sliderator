module.exports = (content) => {

    const maxColumn = 30;
    const maxRow = 100;
    var pages = [...Array(maxRow)].map(ray => {return []});
    var pageNum = 0;

    content = content.split(' ');

    //console.log(content);
    content.map(word => {

        var size = 0
        pages[pageNum].map(page => {
            size += page.length;
        });

        size < maxColumn ? pages[pageNum].push(word) : pages[pageNum+++1].push(word);
    })

    pages = pages.filter(ray => {
        var newRay = ray.filter(word => {
            var notBlank = (word.trim !== '');
            //console.log(word +' is a word: '+ notBlank);
            return notBlank;
        })
        .join('');
        //console.log(newRay +' is an array?: '+ Array.isArray(ray));
        return newRay.length > 0;
    })
    // console.log('Blank is ' + (pages[0][4] === ''));
    // console.log('Blank is ' + pages[0])

    //convert 'array of arrays' to 'array of strings'
    pages = pages.map(pg => {
        return pg.join(' ');
    })

    return pages
}
