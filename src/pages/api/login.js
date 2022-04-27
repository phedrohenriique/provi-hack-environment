import conn from "../../Database/conection"
import { secret } from "../../SECRET/secret";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export default async function loginRoute(req, res) {
    const { email, senha } = JSON.parse( req.body );

    if (!email || !senha) {
        return res.status(404).json({message: 'É obrigatório email e senha'});
    }
    
    try {
        const usuario  = await conn("users").select().first().where("email", email);
        
       

        if (!usuario) {
            return res.status(400).json({message: "O usuario não foi encontrado"});
        }

        const newPass = await bcrypt.hash(usuario.password,10); // senha no banco nao criptografada

        const senhaCorreta = await bcrypt.compare(senha, newPass);

        if (!senhaCorreta) {
            return res.status(400).json({message:"Email e senha não confere"});
        }

     
        const token = jwt.sign({ id: usuario.id }, secret, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
