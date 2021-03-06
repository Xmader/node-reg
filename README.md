# node-reg

A very simple, and incomplete registry editor for Node.js

## Installation
```sh
$ npm install --save Xmader/node-reg
```

### api
Include node-reg in your project
```javascript
var regedit = require('node-reg');
```
Currently node-reg only has two methods:
* addKey
* getKey

Both take a single object parameter. The expected format for both is:
```javascript
{
	target: 'Location-in-registry',
	name: 'Name of key',
	value: 'Value for key',
	type: 'The data type'
}
```
All attributes are necessary in addKey, however only target is necessary for getKey. Name and type are optional for getKey, and value is unused.

### Example
```javascript
var regedit = require('node-reg');

regedit.addKey({
	target: 'HKCU\\Software\\TestDemo',
	name: 'MyApp',
	value: 'heyLookAValue',
	type: 'REG_SZ'
}).then(function(result) {
	console.log(result)
});

regedit.getKey({
	target: 'HKCU\\Software\\TestDemo'
}).then(funciton(result) {
	console.log(result);
});
```

### Notes
* If a name isn't specified, getKey will return a list of all keys in the target location.  If one is specified, it will return the single value (or a message indicating none is available).

### TODO
* Better code documentation
* Testing
* Error handling

### Version
0.3.0
