
const User =require('../model/UserModel').User;
const cors =require("cors");

process.env.SECRET_KEY='secret'

module.exports={
     messageget:(req,res)=>{
        res.json("Buenas TARDES")
    },
    /*
    registerpost:('/register', async (req, res) => {
        const newuser= new User({
          email: req.body.email,
          password: req.body.password,
          name:req.body.name
        }) 
        const  user=await newuser.save();
        if(user){
          res.send({
            _id: user.id,
            name: user.name,
            email: user.email,
            password:user.password,

          });
        } else {
          res.status(401).send({ message: 'Invalid Data.' });
        }
      }),
      singinpost:('/signin', async (req, res) => {
        const signinUser = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        if (signinUser) {
          res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser),
          });
        } else {
          res.status(401).send({ message: 'Invalid Email or Password.' });
        }
      }) */
      

}


  



