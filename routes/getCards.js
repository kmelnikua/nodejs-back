var express = require('express');


var router = express.Router();
router.get("/", function(req, res, next) {
    res.statusCode = 200;

    res.setHeader("Content-Type", "image/jpeg");

    require("fs").readFile("./images/image-1.jpg", (err, image) => {
        res.send(image);
    });

});
module.exports = router;