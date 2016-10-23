var express = require('express');
var router = express.Router();
var request = require('request');

router.get("/status", function(req, res) {
	request({
    url: 'https://api.arte.tv/api/opa/status',
    headers: {
    	Authorization: "Bearer MmY2NTIyNzJiNGFhODMwM2VkMmIyMmI2MjhmZDI1ZmIxZDgxNjY4YzE1ZjFiYjA3ZmU5N2Q0ZThiNDM0NWU3ZQ"
    }
  }).pipe(res);
});

router.get("/videos", function(req, res) {
	request({
    url: 'https://api.arte.tv/api/opa/v3/search/videos?platform=CREATIVE&limit=10&language=fr',
    headers: {
    	Authorization: "Bearer MmY2NTIyNzJiNGFhODMwM2VkMmIyMmI2MjhmZDI1ZmIxZDgxNjY4YzE1ZjFiYjA3ZmU5N2Q0ZThiNDM0NWU3ZQ"
    }
  }).pipe(res);
});

router.get("/videos/:id", function(req, res) {
	request({
    url: 'https://api.arte.tv/api/player/v1/config/fr/'+req.params.id,
    headers: {
    	Authorization: "Bearer MmY2NTIyNzJiNGFhODMwM2VkMmIyMmI2MjhmZDI1ZmIxZDgxNjY4YzE1ZjFiYjA3ZmU5N2Q0ZThiNDM0NWU3ZQ"
    }
  }).pipe(res);
});

module.exports = router;