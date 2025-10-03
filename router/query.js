const express=require("express");

const router =express.Router();


const {getAllQuery}=require("../controller/getQuery")
const {queryController}=require("../controller/query")
console.log(typeof getAllQuery)


router.get("/get/all/Query",getAllQuery)
router.post("/uploadQuery",queryController)

module.exports=router