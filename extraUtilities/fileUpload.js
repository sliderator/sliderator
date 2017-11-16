const hContent = [];

//First element is always the header
hContent.push([200, {'content-type': 'text/html'}]);
hContent.push('<form action="fileupload" method="post" enctype="multipart/form-data">');
hContent.push('<input type="file" name="filetoupload"><br>');
hContent.push('<input type="submit">');
hContent.push('</form');

module.exports = hContent;
