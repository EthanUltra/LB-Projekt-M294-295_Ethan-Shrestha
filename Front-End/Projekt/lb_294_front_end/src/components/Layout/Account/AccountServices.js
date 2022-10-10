import axios from 'axios'
const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/accounts";

class AccountServices {
    getAccounts() {
        return axios.get(ACCOUNT_API_BASE_URL);
    }
}

export default new AccountServices();