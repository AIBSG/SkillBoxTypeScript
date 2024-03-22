function concatenateSquare(num:number):number{
    if (num<0) return num
    let stringNum:string = num.toString()
    let concatedStringNum:string = stringNum.split('').map(x => (parseInt(x)**2).toString()).join('')
    return parseInt(concatedStringNum)
}
console.log(concatenateSquare(121345))