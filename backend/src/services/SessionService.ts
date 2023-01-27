import { prisma } from "../database/prismaClient";
import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import * as yup from 'yup';

class SessionService {
    async create (email: string, password: string) {
        const schema = yup.object().shape({
            email: yup.string().email("Email não é válido").required("Preencha o campo email"),
            password: yup.string().required("Preencha o campo senha"),
        });

        await schema.validate({email, password});

        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                username: true,
                image_url: true,
                instagram_url: true,
                linkedin_url: true,
                facebook_url: true,
                password: true, 
            }
        });
        
        if (!user || !compareSync(password, user.password)) {
            throw new Error("Email ou senha estão incorretas");
        }

        if (process.env.TOKEN_SECRET) {
            const token = jwt.sign({
                username: user.username,
                email, image_url: user.image_url,
                instagram_url: user.instagram_url,
                linkedin_url: user.linkedin_url,
                facebook_url: user.facebook_url
            }, process.env.TOKEN_SECRET, {expiresIn: 60 * 60 * 24 * 7}); // 1 Week
            
            return token;
        } else {
            throw new Error("Variáveis de ambiente não estão definidas");
        }
    }
}

export { SessionService } 