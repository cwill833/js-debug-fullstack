// Drum Arrays
let kicks = new Array(16).fill(false)
let snares = new Array(16).fill(false)
let hiHats = new Array(16).fill(false)
let rideCymbals = new Array(16).fill(false)

function toggleDrum(str, idx){
    console.log(str, idx)
    if(arguments.length == 0){
        return
    }
    if(idx >= 0 && idx < 16){
        // console.log('hit')
      if(str === 'kicks'){
        let toggle = kicks[idx] ? false : true
        kicks[idx] = toggle
      }
      else if(str === 'snares'){
        let toggle = snares[idx] ? false : true
        snares[idx] = toggle
      }
      else if(str === 'hiHats'){
        let toggle = hiHats[idx] ? false : true
        hiHats[idx] = toggle
      }
      else if(str === 'rideCymbals'){
        let toggle = rideCymbals[idx] ? false : true
        rideCymbals[idx] = toggle
      }
    }
}

function clear(str){
    if(str === 'kicks'){
        kicks.forEach((i, idx)=>{
            kicks[idx] = false
        })
    }
    else if(str === 'snares'){
        snares.forEach((i, idx)=>{
            snares[idx] = false
        })
    }
    else if(str === 'hiHats'){
        hiHats.forEach((i, idx)=>{
            hiHats[idx] = false
        })
    }
    else if(str === 'rideCymbals'){
        rideCymbals.forEach((i, idx)=>{
            rideCymbals[idx] = false
        })
    }
}

function invert(str){
    if(arguments.length == 0){
        return
    }
    if(str){
        if(str === 'kicks'){
            kicks.forEach((i, idx)=>{
                kicks[idx] = !kicks[idx]
            })
        }
        else if(str === 'snares'){
            snares.forEach((i, idx)=>{
                snares[idx] = !snares[idx]
            })
        }
        else if(str === 'hiHats'){
            hiHats.forEach((i, idx)=>{
                hiHats[idx] = !hiHats[idx]
            })
        }
        else if(str === 'rideCymbals'){
            rideCymbals.forEach((i, idx)=>{
                rideCymbals[idx] = !rideCymbals[idx]
            })
        }
    }
}

// function getNeighborPads(x, y, size){
//     if(x > size || y > size) return []
//     return []
// }