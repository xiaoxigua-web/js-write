const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class Promise {
    constructor(exctor) {
        this.state = PENDING
        this.value = null
        this.reson = null
        this.resolvedCallbacks = []
        this.rejectedCallbacks = []

        let resolve = (value) => {
            if (this.state === PENDING) {
                this.value = value
                this.state = RESOLVED
                this.resolvedCallbacks.forEach(fn => {
                    fn(this.value)
                })
            }
        }
        let reject = (reson) => {
            if (this.state === PENDING) {
                this.reson = this.reson
                this.state = REJECTED
                this.rejectedCallbacks.forEach(fn => {
                    fn(this.reson)
                })
            }
        }
        exctor(resolve, reject)

    }
    then(resolveFn, rejectedFn) {
        if (this.state === RESOLVED) {
            resolveFn(this.value)
        }
        if (this.state === REJECTED) {
            rejectedFn(this.reson)
        }
        if (this.state === PENDING) {
            console.log(999)
            this.resolvedCallbacks.push((value) => {
                resolveFn(value)
            })
            this.rejectedCallbacks.push((reson) => {
                rejectedFn(reson)
            })
        }
    }
}



export default Promise