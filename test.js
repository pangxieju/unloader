const { Struct, type } = require('@axetroy/struct');

const data = {
  name: 'axetroy',
  age: 18,
  address: {
    city: 'DC',
    code: 100
  },
  message: [
    { from: 'marry', msg: 'How are you?', timestamp: 1513155028 },
    { from: 'henry', msg: "How's going one?", timestamp: 1513135028 }
  ]
};

const User = new Struct({
  name: type.string,
  age: type.int.gte(18), // age is int && and age >= 18
  address: {
    city: type.string,
    code: type.int.gte(100)
  },
  message: [
    {
      from: type.string,
      msg: type.string,
      timestamp: type.int
    }
  ]
});

const err = User.validate(data);

console.log(err); // undefined, because the data pass the validator