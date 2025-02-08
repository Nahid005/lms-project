import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

import User from "database/models/user";

import { confirmEmailAddress } from "email-templates/account-confirmation";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await userSignup(req, res);
            break;
        default:
            res.status(405).json({
                message: `Method ${req.method} not allowed`,
            });
    }
}

const userSignup = async (req, res) => {
    const confirmToken = uuidv4();
    let { name, email, photo, uid } = req.body;
    let space = name.indexOf(" ")
    try {
        // Check if user with that email if already exists
        const user = await User.findOne({
            where: { email: email },
        });

        if (user) {
            const nptl_users_token = jwt.sign(
                {
                    userId: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    role: user.role,
                    profile_photo: user.profile_photo,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d",
                }
            );

            res.status(200).json({
                message: "Login Successful!",
                nptl_users_token,
            });
        } else {
            // Encrypt password with bcrypt
            const passwordHash = await bcrypt.hash(uid, 10);

            const newUser = await User.create({
                first_name: name.substring(0, space),
                last_name: name.substring(space + 1),
                email,
                profile_photo: photo,
                password: passwordHash,
                reset_password_token: confirmToken,
                reset_password_send_at: Date.now(),
            });

            confirmEmailAddress(newUser);

            const nptl_users_token = jwt.sign(
                {
                    userId: newUser.id,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    email: newUser.email,
                    role: newUser.role,
                    profile_photo: newUser.profile_photo,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d",
                }
            );

            res.status(200).json({
                message: "Registration Successful!",
                nptl_users_token,
            });
        }
    } catch (e) {
        res.status(400).json({
            error_code: "create_user",
            message: e.message,
        });
    }
};
