import * as request from "request-promise-native";
import { URL } from "url";

export class Request {
    client = request;
    options: request.OptionsWithUri;

    constructor(absoluteURL: string) {
        this.options = {
            uri: absoluteURL,
            method: "GET"
        };
        this.client = request.defaults({
            json: true, 
            time: true,
            resolveWithFullResponse: true,
            followAllRedirects: true
        });
    }

    public method(method: "GET" | "POST" | "PUT" | "DELETE"): Request {
        this.options.method = method;
        return this;
    }

    public queryParameters(queryParameters: Object): Request {
        this.options.qs = queryParameters;
        return this;
    }

    public body(body){
        this.options.body = body;
        return this;
    }

    public headers(headers: Object) {
        this.options.headers = headers;
        return this;
    }

    public async send(): Promise<request.FullResponse> {
        let response = this.client(this.options);
        this.logResponse(response);
        return response;
    }

    private async logResponse(responsePromise: request.RequestPromise<any>) {
        try {
            let response = await responsePromise;
            console.log(
                `REQUEST STRING:\n ${this.options.method}:${response.statusCode}: ${
                    this.options.uri
                } took: ${response.timingPhases.total.toFixed()} ms`
            );
            console.log(
                `RESPONSE BODY:\n ${JSON.stringify(response.body, null, 2)}`
            );
        } catch (error) {
            if (error.response) {
                console.warn(
                    `${this.options.method}:${error.response.statusCode}: ${
                        this.options.uri
                    } took: ${error.response.timingPhases.total} ms`
                );
            } else {
                console.warn(error.message || error);
            }
        }
    }
}
