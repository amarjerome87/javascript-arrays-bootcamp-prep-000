var chocolateBars = new Array()
chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element){
  return [element,...array]
}
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array 
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  array = array.slice(0 , -1 )
  return array
}
