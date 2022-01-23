const jwt = require('jsonwebtoken');
// const sendmail = require('sendmail')();

const User = require('../models/usersModel');

const userController = {};

// S A V E   N E W   U S E R 
userController.register = async (req, res, next) => {
    const {body: {firstName, lastName, email, password, typeAccount, gendre, phone, address}} = req;
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        typeAccount,
        gendre,
        phone,
        address,
    });

    try {
        const user = await newUser.save();
        // const secret = process.env.JWT_SECRET;
        // const expire = process.env.JWT_EXPIRATION;

        // jwt.sign({ _id: user._id }, secret, { expiresIn: expire }, (err, emailToken) => {
        //     const url = `http://localhost:3000/confirmation/${emailToken}`;
        //     res.sendMail({
        //         to: args.email,
        //         subject: 'Confirm Email',
        //         html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
        //     });
        // });
        // sendmail({
        //     from: 'souadiyassine96@gmail.com',
        //     to: 'souadiyassine96@gmail.com',
        //     subject: 'test sendmail',
        //     html: 'Mail of test sendmail ',
        //   }, function(err, reply) {
        //     console.log(err && err.stack);
        //     console.dir(reply);
        // });
        return res.send(({
            message: 'New User Successfully',
            user
        }));
    } catch(e) {
        if(e.code === 11000 && e.name === 'MongoError') {
            const error = new Error(`This email ${newUsers.email} is already taken`);
            next(error);
        } else {
            next(e);
        }
    }
}

// G E T   A L L   U S E R S
userController.getAll = async (req, res, next) => {
   try {
    // const result = await User.find().sort({dateCreationAccount: -1});
    const {query:{offset, limit}} = req;
    const options = {
        page: parseInt(offset, 10),
        limit: parseInt(limit, 10),
        sort: {dateCreationAccount: -1}
    };
    const result = await User.paginate({}, options) ;
    const {docs, total} = result;
    return res.send({
        total,
        result: docs,
    });
   } catch(e) {
       next(e);
   }
}

// F I L T E R   P A R   E M A I L
userController.getEmail = async(req, res, next) => {
    const {params: {email}} = req;
    try {
        const result = await User.findOne({email});
        if(!result) {
            const error = new Error(`This email : ${email} not exsite`);
            error.status = 404;
            next(error);
        }
        res.send({
            result
        });
    } catch(e) {
        next(e);
    }
}

// L O G I N   U S E R S   A N D   C R E A T E   T O K E N
userController.login = async (req, res, next) => {
    const {body: {email, password}} = req;
    try {
        const user = await User.findOne({email});

        if(!user) {
            const error = new Error(`this mail : ${email} not found`);
            error.status = 404;
            next(error);
        }

        user.comparePassword(password, user.password, (err, succes) => {
            if(succes) {
                const secret = process.env.JWT_SECRET;
                const expire = process.env.JWT_EXPIRATION;

                const token = jwt.sign({ _id: user._id }, secret, { expiresIn: expire });
                return res.send({
                    user,
                    tokenData: {
                        token,
                        type: 'Bearer',
                        expire
                    },
                    message: 'Connected Successfully'
                });
            }
            return res.status(401).send({
                message: 'Invalid email/password combination'
            })
        });

    } catch(e) {
        next(e);
    }
}


// U S E R   D E L E T E
userController.delete = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const result = await User.findOneAndDelete({_id: id});
        if(!result) {
            const error = new Error('This user is not exsite');
            error.status = 404;
            next(error);
        }
        res.send({
            message: 'Delete Successfully'
        });
    } catch(e) {
        next(e);
    }
}

// U S E R   U P D A T E 
userController.update = async (req, res, next) => {
    const { params:{id}, body: {firstName, lastName, email, typeAccount, gendre, phone, address} } = req;
    try {
        const result = await User.findOneAndUpdate({_id: id}, {firstName, lastName, email, typeAccount, gendre, phone, address});
        if(!result) {
            const error = new Error("This User Not Found");
            error.status = 404;
            next(error);
        }
        return res.send({
            message: 'Update Successfully',
        });
    } catch(e) {
        next(e);
    }
}

module.exports = userController;