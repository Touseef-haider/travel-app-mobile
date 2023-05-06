import BaseService from "./baseService";

class ApiService extends BaseService {
  register(data) {
    console.log("registereerererer", data);
    return this.post("/register", data);
  }
  login(data) {
    return this.post("/login", data);
  }
}
export default new ApiService();
