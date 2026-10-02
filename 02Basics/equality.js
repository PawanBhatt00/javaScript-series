// == is a equality check (type conversion )
// === strict equality check ( data type + value both should be same )

console.log(9 == '9')//true  (first it converts the string into the number then compare it )
console.log(9 === '9')//false



console.log("5"== true)

console.log(null == undefined)


// | Comparison          | Conversion                                  |
// | ------------------- | ------------------------------------------- |
// | `5 == "5"`          | String → Number                             |
// | `true == 1`         | Boolean → Number                            |
// | `false == 0`        | Boolean → Number                            |
// | `"5" == true`       | Boolean → Number → String/Number comparison |
// | `null == undefined` | Special rule                                |
// | `[] == 0`           | `[]` → primitive → Number                   |
