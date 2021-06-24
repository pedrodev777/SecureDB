
class Base {
   constructor() {
      throw new Error(`The class ${this.constructor.name} may not be invoked.`);
   }
}

module.exports = BaseClass;
