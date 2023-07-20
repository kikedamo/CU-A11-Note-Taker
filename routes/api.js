//require dependencies
const router=require("express").Router();
const fs=require("fs");
const uuid=require("../helpers/uuid");

router.get("/notes", (req, res) => {
    let Noted=JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    return res.json(Noted);
});

router.post("/notes",(req,res)=>{
let ReqBody=req.body;
ReqBody.id=uuid();

let Noted=JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
Noted.push(ReqBody);

fs.writeFileSync("../db/db.json", JSON.stringify(Noted));
return res.json(Noted);
});

module.exports=router;