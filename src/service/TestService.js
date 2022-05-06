import api from "./api";

export default class TestService{
    static getFront( url ) {
        return api.get( url );
    }
}