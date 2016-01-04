var express = require('express');
var dropbox = require("dropbox_rest");
var fs = require('fs');
var utils = require('utils');

module.exports = function(app) {
	/* POST photo */


	app.post('/api/upload', upload_photo);
};

/**
 * @api {post} /api/upload Upload photo
 * @apiName upload
 * @apiGroup OVO-Photo-Meter-API
 *
 * @apiParam {Image} image 
 *
 * @apiSuccess {String} result Result of operation
 * @apiError (400) {String} error Bad request
 * @apiError (500) {String} error Server error
 */

var upload_photo = function (req, res) {

	if (typeof req.files.image == 'undefined') {
		console.log('No image data');
		res.json(400, {"error":"No image data"});
		return;
	}

    console.log('Start uploading: %j', req.files.image.path);
    var image = req.files.image.path;
 
    var filename = 'meter_photo_'+utils.datetimestamp()+'-upload.jpg';
    // utils.copyFileSync(image, __dirname + '/../uploads/'+filename);
    
    dropbox.uploadFileToDropbox(image,filename,function(error, stats) {
    	if (error == null) {
        	res.json(200, {"result":"Uploaded"});
		} else {
			res.json(400, {"error": error});
		}
        fs.unlink(image, function (err) {});
    });
}