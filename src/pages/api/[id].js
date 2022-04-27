/* import { userRouter } from "next/dist/client/router";
import React from "react"; */
import conn from "../../Database/conection"

export default async function UsersId(req, res) {
  /* const router = userRouter;
  const { id } = router.query; */
  const { id } = req.query;
  const { usuario } = req;


  const { data } = await conn.from("users").select("*").eq("id", id);
  if (!data.usuario) {
    return res.status(400).json({ message: "O usuario não foi encontrado" });
  }

  if (req.method === 'PUT') {
    const { nome, email, password } = req.body;
    try {
      if (usuario.id !== id) {
        return res.status(403).json({ message: "Você não tem permissão para alterar esse usuário" });
      }

      const { data } = await conn.from('users').update({
        nome,
        cpf,
        email,
        password
      }).eq("id", id);
      return res.status(200).json({ message: "Usuario atualizado com sucesso." })
    } catch (error) {
      return res.status(403).json({ ...error });

    }

  } else if (req.method === 'DELETE') {
    try {
      if (usuario.id !== id) {
        return res.status(403).json({ message: "Você não tem permissão para deletar esse usuário" });
      }
      const { data } = await conn.from("users").delete().eq("id", id);
      return res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      return res.status(403).json({ ...error });
    }
  }

}