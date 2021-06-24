class EventEmitter {
   constructor(data) {
      this._events = data || [];
   }

   on(event, callback) {
      this._events.push([event, callback]);
   }

   emit(event) {
     let args = Object.entries(arguments).slice(
     1)

      this._events.filter(evento =>
      evento instanceof Array && evento[0] === event)
      .forEach(evento =>
      {
         Reflect.apply(evento[1], this, args);
      })
   }
}

module.exports = EventEmitter;
