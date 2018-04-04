/**
 * 
 * @param {*} array 
 * @param {*} size 
 */
export default function chunk(array,size=1){
    
    if(!(array instanceof Array)){
        throw new Error('You need pass an array')
    }

    const time = Math.ceil(array.length / size)
    if(time === 1){
        return array
    }
    const newArray = []
    for(let i = 0; i < time; i++){
        newArray.push(array.splice(0,size))
    }
    return newArray
}


