setnext
=======

Install
-------

`npm install --save setnext`

Example
-------

```javascript
var setNext = require('setnext');

var someValue = 'A string';
setNext(someValue).then(function(someValue){
    console.log(someValue);
});
```

API
---

### setNext(value) -> Promise

The `value` argument is optional.
