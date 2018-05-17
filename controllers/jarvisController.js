var express = require("express");
var router = express.Router();
var db = require("../models");
var path = require("path");

    //html routes

    router.get("/", function(req, res) {
        console.log("hu");
        res.sendFile(path.join(__dirname, "../test.html"));
      });
      
      router.get("/api/:location/", function(req, res) {
        db.hospital.findAll({
          where: {
            surgery: "knee joint",
          //   cost: {
          //     [Op.lt]: 9000
          // }
        }
        }).then(function(dbHospital) {
          res.json(dbHospital);
        });
       
      });

    module.exports = router;
