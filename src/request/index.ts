import Config from "../config"

type RequestResponse = {
    data: Object | null
    error: Object | null
}

interface IRequest {
    baseURL: string
    Get(path: string): Promise<RequestResponse>
}

class $Request implements IRequest {
    baseURL: string = ""

    constructor() {
    }

    Get = async (path: string): Promise<RequestResponse> => {
        try {
            const url = this.baseURL + path;
            const response = await fetch(url);
            const data = await response.json()
            return { data, error: null };
        } catch (err) {
            return { data: null, error: err as Object };
        }
    }

    OGInfo = async(url:string): Promise<RequestResponse> => {
        return this.Get(`/api/v1/og?q=${url}`);
    }
}

const APIRequest: $Request = new $Request();
APIRequest.baseURL = Config.API;
export default APIRequest;