// Drum Arrays
let kicks = new Array(16).fill(false)
let snares = new Array(16).fill(false)
let hiHats = new Array(16).fill(false)
let rideCymbals = new Array(16).fill(false)

function toggleDrum(str, idx){
    // console.log(str, idx)
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

function getNeighborPads(x, y, size){
    if(x >= 1 && x <= (size - 2) && y >= 1 && y <= (size - 2)) return [[x -1, y], [x+1, y], [x, y+1], [x, y-1]]
    
    else if(x === 0 && y === 0) return [[x+1, y], [x, y+1]]
    
    else if(x === size - 1 && y === 0) return [[x-1, y], [x, y+1]]
    
    else if(x=== size -1 && y === size -1) return [[x-1, y], [x, y-1]]
    
    else if(x === 0 && y === size -1) return [[x+1, y], [x, y-1]]

    else if(x >= 1 && x <= (size - 2) && y === 0) return [[x -1, y],[x, y+1],[x+1, y]]

    else if(x === size -1 && y >= 1 && y <= (size - 2)) return [[x -1, y],[x, y+1],[x, y -1]]

    else if(x >= 1 && x <= (size - 2) && y === size -1) return [[x -1, y],[x, y-1],[x+1, y]]

    else if(x === 0 && y >= 1 && y <= (size - 2)) return [[x + 1, y],[x, y+1],[x, y -1]]

    else return []
}