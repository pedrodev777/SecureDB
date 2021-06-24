
class BaseClass {
   constructor() {}
   
   addProperty(property, value = null, options = {}) {
      options = Object.assign({value:value}, options);
      
      Object.defineProperty(this, property, options);
   }
}

module.exports = BaseClass;
