/**
* @param {string}  element - A collection of chars to remove from string input
* @param {array} blackList -   collection of items that will be sanitized
* @returns {string}
*/
const santizeInput = (element, blackList, substitute = '') => {
    blackList.forEach(item => {
        //delete element until it's gone
        while(element.includes(item)){
           element = element.replace(item,substitute);
       }
    });
    return element;
}


/**
*
* @param data - {array}
*/
module.exports = (data) => {
    let ray =[];
    var replacement = ' ';

    //abstract invisble items to replace
    var newLine = '\n';
    var carriageReturn = '\r';
    var doubleSpaceString = '  ';
    var tripleSpaceString = '   ';
    var blackList = [newLine,carriageReturn,doubleSpaceString,tripleSpaceString];
    //for every line in lyric data append a "---" string to beggining of array
    data.map((line, index) => {

        line = santizeInput(line, blackList, replacement);
        //line = line.replace('\n\r', ' ');
        var elm = "#" + line
        if (index > 0) {
            ray.push("\n---\n");
        }
        //ray.push("\n\r")
        ray.push(elm);
    });

    return ray;
}
