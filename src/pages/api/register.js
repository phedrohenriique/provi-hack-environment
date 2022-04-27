import Bcrypt from "bcrypt"
import conn from "../../Database/conection"


export default async function handler(req, res) {

    switch (req.method) {
        case "POST":
            const dados = req.body;
            try {
                const { data, error: errSearchUser } = await conn.from("users").select("*").eq("email", dados.email);

                const [usuario] = data; // first element

                console.log();
                
                if (!!usuario)
                    return res.status(400).json({ message: "Email ja cadastrado" });


                const passwordEncryted = await Bcrypt.hash(dados.password, 10);
                dados.password = passwordEncryted;
                const {error} = await conn
                                        .from("users")
                                        .insert([dados])

                
                if (error)
                    return res.status(400).json({ message: "erro ao cadastrar" });

                const {password, ...dataToSend} = dados;
                return res.status(201).json({ message: "usuario adicionado", dataToSend });

            }
            catch ({ message }) {
                return res.status(400).json({ message });
            }
        default:
            return res.status(404).json({ message: "method is invalid" });
    }



}