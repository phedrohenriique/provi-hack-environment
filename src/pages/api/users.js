import connection  from '../../Database/conection'

export default async function getUsers(req, res){

    try{
        const data = await connection.from("users").select('*')
        res.status(200).json(data)
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}