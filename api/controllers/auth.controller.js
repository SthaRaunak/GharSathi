import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

const saltRounds = 10;

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    //Decrypting the password
    const hashedPassword = bcryptjs.hashSync(password, saltRounds)

    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }

}