// wpkyFDCr4xbI6M7W

// module.exports ={
//     MONGOURI: "mongodb+srv://abhishekarav5117:0QIxQORy9amsbesK@cluster0.d8voheq.mongodb.net/?retryWrites=true&w=majority",
//     JWT_SECRET:"nehehfrufhrufhsdjvhkjd"
// }

//mongodb+srv://abhishekarav5117:<password>@cluster0.d8voheq.mongodb.net/?retryWrites=true&w=majority

if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}