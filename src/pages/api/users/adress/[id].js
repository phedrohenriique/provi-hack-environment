import conn from "../../../../Database/conection"

export default async function AdressId(req, res) {

  const { id } = req.query;
  const { usuario } = req;

  if (id !== usuario.id) {
    return res.status(403).json({ message: "Você não tem a permissão necessaria para acesso." });

  }
  const { data } = await conn.from("users").select("*").eq("id", id);
  if (!data) {
    return res.status(400).json({ message: "O usuario não encontrado ou não cadastrado." });
  }
  if (req.method === 'PUT') {

    const { cep, number } = req.body;
    try {
      const { error } = await conn.from("adress").update({
        cep,
        number
      }).eq("user_id", id);
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(203).json({ message: "Endereço atualizado com sucesso." });
    } catch (error) {
      return res.status(400).json({ ...error });
    }

  } else if (req.method === 'GET') {

    const { data } = await conn.from("adress").select("*").eq("user_id", id);
    if (!data) {
      return res.status(400).json({ message: "Endereço não foi encontrado ou não informado" });
    }
    return res.status(200).json(data);

  } else if (req.method === 'DELETE') {

    try {
      const { error } = await conn.from("adress").delete().eq("user_id", id);
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(200).json({ message: "Endereço deletado com sucesso" });
    } catch (error) {
      return res.status(403).json({ ...error });
    }
  }

}