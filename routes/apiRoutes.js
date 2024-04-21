const router=require("express").Router()
const uuid=require("../helpers/uuid")
const {readFromFile, readAndAppend}=require("../helpers/fsUtils")
router.get("/notes",(req,res) => {
    readFromFile("./db/db.json").then(data=>res.json(JSON.parse(data)))
})

router.post("/notes",(req,res)=>{
    const{title, text}=req.body
    if(title&&text){
        const newNote={title:title, text:text, id:uuid()}
        readAndAppend(newNote,"./db/db.json")
        res.json(newNote)
    }
        else{res.json("error posting note")}

})

    module.exports=router
    