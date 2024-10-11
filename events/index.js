// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

const eventing = {};
class Events {
    // Register an event handler
    on(eventName, callback) {
        if ( !eventing[`${eventName}`] ) {
            eventing[`${eventName}`] = [];
        }

        eventing[`${eventName}`].push(callback);
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (eventing[`${eventName}`]) {
            eventing[`${eventName}`].forEach(callback => callback());
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete eventing[`${eventName}`];
    }
}

module.exports = Events;
