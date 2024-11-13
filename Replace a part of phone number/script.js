
/*Replace a part of phone number */

const phoneNumber = '09104019661';
const slicedNumber = phoneNumber.slice(4,9);
const signs = 'XXXX'
const finalPhoneNumber = phoneNumber.replace(slicedNumber,signs);
console.log(finalPhoneNumber)
