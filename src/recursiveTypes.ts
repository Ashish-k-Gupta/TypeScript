//* Recursive type

type NestedNumber = number | NestedNumber[]

const val: NestedNumber =  [1,2,3,4,5,[6,7,8,[9, [10]]],11]
const val2: NestedNumber =  3


if(typeof val != "number"){
    val.push(41)
    val.push([3,2, 2000])
    val.push([[]])
    val.push("this will not work")
}