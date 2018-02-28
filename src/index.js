// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propertyName => {
    return propertyName;
};

const createNotEnumerableProperty = () => Symbol();

const createProtoMagicObject = () => {
    const magicObject = function() {};

    magicObject.prototype = magicObject.__proto__;

    return magicObject;
};

const incrementor = () => {
    ++incrementor.value;

    return incrementor;
};

incrementor.value = 0;

incrementor.valueOf = function() {
    return incrementor.value;
};

//IMPORTANT!
//I used Promise and setTimeout ONLY to demonstrate asynchronous incrementor
//But in this case i could just copy code from usual incrementor
const asyncIncrementor = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(++asyncIncrementor.value);
        }, 100);
    });
};

asyncIncrementor.value = 0;

const createIncrementer = () => {
    return {
        number: 0,

        [Symbol.iterator]: function() {
            return this;
        },

        next: function() {
            return { value: ++this.number, done: false };
        }
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = argument => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(argument);
        }, 1150);
    });
};

const getDeepPropertiesCount = someObject => {
    return Object.keys(someObject).reduce((amount, propertyName) => {
        return (
            (typeof someObject[propertyName] === "object"
                ? amount + getDeepPropertiesCount(someObject[propertyName])
                : amount) + 1
        );
    }, 0);
};

const createSerializedObject = () => {
    return {
        toJSON: function() {
            return this.toString();
        }
    };
};

const toBuffer = () => {};

const sortByProto = arrayOfObjects => {
    let referencesA;
    let referencesB;

    return arrayOfObjects.sort((objectA, objectB) => {
        referencesA = 0;
        referencesB = 0;

        while (objectA.__proto__) {
            objectA = objectA.__proto__;
            ++referencesA;
        }

        while (objectB.__proto__) {
            objectB = objectB.__proto__;
            ++referencesB;
        }

        return referencesB - referencesA;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
