class Request {
    constructor(method, uri, version, message, response, fulfilled) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myRequest = new Request('GET', 'htpp://google.com','HTPP/1.1','');
console.log(myRequest);