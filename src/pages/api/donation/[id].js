//para as rotas de get, update e delete, eu preciso verificar se o usuario que esta tentando acessar a rota é o mesmo que esta logado, se nao for, ele nao pode acessar a rota.
import conn from "../../../Database/conection";

export default async function DonationId(req, res) {
  const { id } = req.query;
  const { usuario } = req;

  if (id !== usuario.id) {
    return res.status(403).json({ message: "Você não tem a permissão necessaria para acesso." });
  }
  const { data } = await conn.from('donation').select("*").eq("id", id);
  if (!data) {
    return res.status(400).json({ message: "Solicitação(?) não foi encontrada ou não informada" });
  }
  if (req.method === 'GET') {
    const { error } = await conn.from('donation').select(`
   user_id, 
    user(name),
    items (donation_id)
  `).eq("id", id);
  } else if (req.method === 'PUT') {
    const { check_donation, check_reception, user_cnpj, user_cpf } = req.body;
    try {
      const { error } = await conn.from('donation').update([{
        check_donation,
        check_reception,
        user_cnpj,
        user_cpf
      }]).eq("id", id);
      if (error) {
        return res.status(400).json(error);
      }
    } catch (error) {
      return res.status(400).json({ ...error });
    }
  } else if (req.method === 'DELETE') {
    const { error } = await conn.from('donation').delete().eq("id", id);
  } else if (req.method === 'PUT') {
    //LEMBRA AQUI DE IMPLEMENTAR QUE QUANDO OS CHECKS forem true deve aumentar o exp_bar no users.
  }
}