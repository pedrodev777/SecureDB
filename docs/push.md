## Push Method

This method adds a new element to an array.

```javascript
db.push('data-name', 'data-value');
```

If the stored value is not an array, the value will not be pushed.
* The first parameter can only be a `String`.
* The second parameter cannot be of the function or class type.

### Example

```javascript
const db = require('secure-db');

db.set('users', [ 'Felipe', 'Sabrina' ]);
db.push('users', 'David'); // users = [ 'Felipe', 'Sabrina', 'David ]
```
