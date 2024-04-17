
const path = require('path');

exports.e404error = (req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname , '../', 'views' , '404.html'))
}