console.log('Hi!');
const a=[];
const joy = require('joi');
const passwordSchema = joi.string().min(3).max(10).alphanum();
console.log(passwordSchema.validate('q'));
