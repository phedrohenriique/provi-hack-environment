import conn from "../../Database/conection"
import { secret } from "../../SECRET/secret";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export default async function loginRoute(req, res) {

    const { email, senha } = JSON.parse( req.body );
    
    if (!email || !senha) {
        return res.status(404).json({message: 'É obrigatório email e senha'});
    }
    
    switch(req.method){
        case "POST": // rota POST api/login
            try {
                const {data}  = await conn.from("users").select("*").eq("email", email);
                
               const [usuario] = data;
               
                if (!usuario) {
                    return res.status(400).json({message: "O usuario não foi encontrado"});
                }
        //==============================        senha no banco tem que ser encriptada antes de salvarem ==========================
                const senhaCorreta = await bcrypt.compare(senha, usuario.password); 
        
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
                return res.status(403).json( {...error});
            }
        default:// caso em que o acesso tenha um method diferente de POST
            return res.status(404).json( {message: "method invalid"} );
    }
    
}
