// Drum Arrays
let kicks = new Array(16).fill(false)
let snares = new Array(16).fill(false)
let hiHats = new Array(16).fill(false)
let rideCymbals = new Array(16).fill(false)

function toggleDrum(str, idx){
    if(arguments.length == 0){
        return
    }
    if(str[idx]){
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

function clear(){

}