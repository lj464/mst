// 模拟字符串indexof方法
let T = 'asdasdsssssssdasds'
let D = 'ss'
// 1
// function addInclude (){
//     String.prototype.lJindexof = function(T){
//         let len = T.length
//         let res = -1
//         for(let i = 0 ; i<this.length - len +1 ; i++){
//             let target = this.substr(i,len)
//             if(target === T){
//                 res = i
//                 break
//             }
//         }
//         return res
//     }
// }
// addInclude()
// console.log('T.lJindexof(D)',T.lJindexof(D));
// 2
function addInclude() {
    String.prototype.lJindexof = function (T) {
        let reg = new RegExp(T)
        let res = -1
        if (reg.exec(this)) {
            res = reg.exec(this).index
        }
        return res
    }
}
addInclude()
console.log('T.lJindexof(D)', T.lJindexof(D));