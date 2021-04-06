function subscribe(fn) {
	this.subscribers.push(fn)
}

function unsubscribe(fn) {
	this.subscribers = this.subscribers.filter(function (f) {
		return f !== fn
	})
}

function setState(getState) {
	this.state = typeof getState === 'function' ? getState(this.state) : getState
	return this.subscribers.reduce(
		(prev, sub) => prev.then(() => sub(this.state)),
		Promise.resolve()
	)
}

function createState(initialState) {
	return {
		state: initialState,
		subscribers: [],
		setState,
		subscribe,
		unsubscribe,
	}
}

module.exports = createState
