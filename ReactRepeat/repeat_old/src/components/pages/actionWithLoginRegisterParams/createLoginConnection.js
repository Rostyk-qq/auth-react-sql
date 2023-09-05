import axios from 'axios'
export async function createConectionLogin(params){
    const data = new FormData();
    data.append('username', params.username);
    data.append('email', params.email);
    data.append('operation', 'login')

    const url = 'http://localhost/db_create_connection/index.php'

    return await axios.post(url, data)

    .then(response => {
        if(response.data === 'No user found.'){
            return 'No user found.';
        }
        else if (response.data === 'All went awesome!!!'){
            return 'All good!'
        }
    })
} 