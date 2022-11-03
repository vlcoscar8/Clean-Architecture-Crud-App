export class Ploc {
    private internalState
    private listeners = []

    protected constructor(initialState) {
        this.internalState = initialState
    }

    public get state() {
        return this.internalState
    }


    public updateState(newState) {
        this.internalState = newState

        if (this.listeners.length > 0) {
            this.listeners.forEach((listener) => listener(this.state))
        }

    }

    public subscribe(listener) {
        this.listeners.push(listener)
    }

    public unsubscribe(listener) {
        const index = this.listeners.indexOf(listener)
        if (index > -1) {
            this.listeners.splice(index, 1)
        }
    }

}