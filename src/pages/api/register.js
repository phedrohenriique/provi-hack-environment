import { connection } from '../../Database/conection'

// to acess the endpoint you must go thorugh route localhost:3000/api/register
// all logic will be acessed

export default async function registerRoute(req, res) {
    const {name, cpf, password , email} = req.body

    try{
        //const rows = await connection.from("users").select()
        //console.log(rows)
        res.status(200).json({message: 'route working'})
    }
    catch{
        console.log('couldnt get rows')
    }
}