import connection  from '../../Database/conection'

// to acess the endpoint you must go thorugh route localhost:3000/api/register
// all logic will be acessed

export default async function registerRoute(req, res) {
    const {name, cpf, password, email} = req.body

    try{

        // acess connection methods to manipulate database
        // data is the number of rows retrieved

        //const data = await connection.from("users").select('*')
        //console.log(data)
        //res.status(200).json(data)

        await connection.from("users").insert([{
            name: name,
            cpf: cpf,
            password: password,
            email: email
        }])

        const data = await connection.from("users").select('*')
        res.status(200).json(data)
    }
    catch (error){
        console.log(error)
        return res.status(400).json(error)
    }
}