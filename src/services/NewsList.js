export default class NewsList {

    _apiBase = 'http://localhost:5000/api/news';
    
    async getAllNews() {

        try {

            const res = await fetch(this._apiBase)
                
            return res.json()

        } catch (e) {

            console.error(`Ошибка ${e}`);

        }

    };

    async getOneNews(id) {
        
        const res = await fetch(`${this._apiBase}/${id}`);

        if (!res.ok) {
            console.error(`Ошибка ${res.status}`);
        }

        return res
    }

}