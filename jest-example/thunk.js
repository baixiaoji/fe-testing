/**
 * 
 * @param {*} array 
 * @param {*} size 
 */
export default function chunk(array,size=1){
    const time = Math.ceil(array.length / size)
    const newArray = []
    for(let i = 0; i < time; i++){
        newArray.push(array.splice(0,size))
    }
    return newArray
}