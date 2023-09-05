import axios from 'axios';

export class Service{
    static async getAll(limit, page){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
    static async getCurrentPost(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response.data;
    }
}
