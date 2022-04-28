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
                //if((!dados.cpf && !dados.cnpj) ||(dados.cpf && dados.cnpj)){
                //    return res.status(400).json({ message: "CPF ou CNPJ devem ser preenchidos" });
                //}
                // adicionamos o campo cnpj pra diferenciar quem era pessoa fisica ou juridica, por isso fiz essa validação para evitar a pessoa digitar cpf e cnpj. acaba que essa validação é meio 'inutil' pois o que estavamos pensando era no front, na hora de preencher o formulario ele (atraves de um ternario no campo) só pegar e preencher um dos dois campos, deixando o outro null. nao sei se deu pra entender, depois te explico qlqr coisa. 
                const { error } = await conn
                    .from("users")
                    .insert([dados])


                if (error)
                    return res.status(400).json({ message: "erro ao cadastrar" });

                const { password, ...dataToSend } = dados;
                return res.status(201).json({ message: "usuario adicionado", dataToSend });

            }
            catch ({ message }) {
                return res.status(400).json({ message });
            }
        default:
            return res.status(404).json({ message: "method is invalid" });
    }



}