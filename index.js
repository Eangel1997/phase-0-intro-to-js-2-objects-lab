// Write your solution in this file!
const employee = {
    name: 'Jazmine',
    streetAddress: '803 Division St',
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    delete{
        ...employee[key],
    }
    return {
           employee
}
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }