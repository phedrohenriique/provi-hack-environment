import { connection } from '../../Database/conection'

export default async function registerRoute(req, res) {
    const {name, cpf, password , email} = JSON.parse(req.body)
}