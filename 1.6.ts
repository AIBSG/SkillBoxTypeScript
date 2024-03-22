function GetNumberSum(num:number):number{
    let result:number = 0

    while (num > 0) {
        result += num % 10
        num = Math.floor(num / 10)
    }
    return result
}
function GetDigitalRoot(num:number):number{
    while(Math.floor(num / 10) != 0){
        num = GetNumberSum(num)
    }
    return num 
}
console.log(GetDigitalRoot(123567))//?
