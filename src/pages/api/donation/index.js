import conn from "../../../Database/conection";

export default async function Donation(req, res) {
  const { categories_id, load, description } = req.body;
  const { usario } = req;

  if (req.method === 'POST') { //cadastrar uma nova doação	
    try {
      const data = await conn.from('donation').insert([{
        id_user: usario.id,
        check_donation: false,
        check_reception: false
      }]); //criando a solicitação de recolha da doação.
      if (data.error) {
        return res.status(400).json(data.error);
      }
      const donationId = data.id;
      const { error } = await conn.from('items').insert([{ //inserindo um item de doação dentro da requisicao que foi criada acima. 
        donation_id: donationId,
        categories_id,
        load,
        description //na duvida se vai precisar/ter
      }]);
      if (error) {
        return res.status(400).json(error);
      }
    } catch (error) {
      return res.status(403).json({ ...error });
    }
  }
}