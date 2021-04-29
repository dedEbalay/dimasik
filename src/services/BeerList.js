export default class BeerList {

    _apiBase = 'https://api.punkapi.com/v2/beers';
    
    async getBeer() {
        const res = await fetch(this._apiBase);

        if (!res.ok) {
            console.error(`Ошибка ${res.status}`)
        }

        return await res.json()
    };
}