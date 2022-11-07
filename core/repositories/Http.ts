export class Http {
    private createHeaders(method, body) {
        const postRequest = {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const deleteRequest = {
            method,
        }

        return method === 'POST' ? postRequest : deleteRequest
    }

    public async executed(url:string, method: string, body: object = {}) {
        const requestBody = method !== 'GET' ? this.createHeaders(method, body) : {}
        const response = await fetch(url, requestBody)
        return await response.json()
    }
}