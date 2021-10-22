import http from "../plugins/http";
import CurrencyListDTO from '../dtos/CurrencyListDTO';

const currencyService ={
    async getAllCurrencies(){
        const resp = await http.get<CurrencyListDTO>('/all');
        return resp.data; 
    },
    
    getListenCurrencies(codes:string[]){
        return http.get(`/all/${codes.join()}`);
    }
};

export default currencyService;