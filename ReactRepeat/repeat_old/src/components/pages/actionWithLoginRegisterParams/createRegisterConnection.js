import axios from 'axios'

export async function createConectionRegister(params){
    const data = new FormData();
    data.append('username', params.username);
    data.append('email', params.email);
    data.append('password', params.password);
    data.append('reEnter', params.reEnter);
    data.append('operation', 'registration')

    const url = 'http://localhost/db_create_connection/index.php'

    return await axios.post(url, data)

    .then(response => {
        console.log(response);
        if(response.data === 'User data inserted successfully!'){
            return 'All went good!';
        }
        else if(response.data === 'Uncaught mysqli_sql_exception: Duplicate entry'){
            return 'Error, duplicate params!!!';
        }
        else if(response.data === 'Password is uncorrect or not indentical !!!'){
            return 'Password is uncorrect or not indentical!!!';
        }
    })
} 