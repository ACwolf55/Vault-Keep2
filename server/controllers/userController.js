require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");


const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = {
    register: (req, res) => {
        let {username, password} = req.body;
        console.log(req.body)


        sequelize
            .query(`Select * FROM users WHERE username = '${username}';`)
            .then((dbRes) => {
                console.log(dbRes[0][0])
                if (dbRes[0][0]){
                    return res.send('username already exists')
                }
                sequelize
                    .query(
                        `INSERT INTO users (username, password) VALUES ('${username}', '${password}') returning username;`
                    )
                    .then((dbRes) => res.status(200).send(dbRes[0][0]))
                    .catch((err) => console.log(err));
            })
    },

    login: (req, res) => {
        let { username, password } = req.body;
        sequelize.query(`SELECT * FROM users WHERE username = '${username}';`)
        .then((user) => {
            user = user[0][0];
            if (!user){
                return res.status(401).send('User not found')
            };
            if(!password) {
                return res.status(401).send("Incorrect password");
            }
            return res.status(200).send({ username: user.username, id: user.id});
        });
    },
};