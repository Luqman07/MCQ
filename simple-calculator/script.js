let first = ''
let second = ''
let operate = ''
let iClick = 0
let iClk = 0
let ans = ''
let numBtn = document.querySelectorAll('.btn')
let signBtn = document.querySelectorAll('.sign')
let equal = document.getElementById('equ')
let cancel = document.getElementById('del')
let decimal = document.getElementById('dot')
let negSign = document.getElementById('neg')


let insert = (e) => {
    numVal = e.target.value
    if (iClick == 1) {
        return
    } else if (operate != '') {
        second += numVal
        input.value = first + sign + second
    } else if (iClk == 0) {
        first += numVal
        input.value = first
    }
}

let operator = (e) => {

    sign = e.target.value
    if (iClick == 1) {
        first = ans
        operate = sign
        input.value = first + sign
        iClick = 0
    } else if (operate !== '' && ans !== '') {
        return
    }
    else if (operate == '') {
        input.value += sign
        operate = sign
    } else {
        return
    }
    iClk = 0
}

let eq = () => {
    console.log(first, second, operate);
    if (first == '' || second == '') {
        console.log(first, second, operate);

        console.log('enter')
        return
    }
    else if (operate == '+' && first !== '' && second !== '') {
        ans = Number(first) + Number(second)
    }
    else if (operate == '-' && first !== '' && second !== '') {
        ans = Number(first) - Number(second)
    }
    else if (operate == '/' && first !== '' && second !== '') {
        ans = Number(first) / Number(second)
    }
    else if (operate == '*' && first !== '' && second !== '') {
        ans = Number(first) * Number(second)
    } else {
        alert('Invalid')
    }
    result.innerHTML = ans

    first = ''
    second = ''
    newS = ''
    iClick = 1
    iClk = 1

}
let del = () => {
    screen = input.value
    if (iClk == 1) {
        return
    }
    else if (screen !== '' && operate == '') {
        input.value = screen.slice(0, input.value.length - 1)
        first = input.value
        console.log(first);
    }
    else if (operate !== '') {
        console.log('secdel');
        input.value = screen.slice(0, input.value.length - 1)
        a = screen.indexOf(operate) + 1
        second = input.value.substr(a)
        console.log(second);
        // iClick = 1

    }
}
let period = () => {
    if (operate !== '') {
        second += '.'
        input.value += second.charAt(second.length - 1)
        console.log(second)
    } else {
        first += '.'
        input.value += first.charAt(first.length - 1)
    }
}
let neg = () => {
    if (operate !== '') {
        if (second == '') {
            return
        }
        else if (second.indexOf('-') == -1) {
            second = '-' + second
            input.value = first + sign + second
            console.log(second);

        } else {
            second = second.replace('-', '')
            input.value = first + sign + second
            console.log(second);

        }
    } else {
        if (first == '') {
            return
        }
        if (first.indexOf('-') == -1) {
            first = '-' + first
            input.value = first
            console.log(first);

        } else {
            first = first.replace('-', '')
            input.value = first
            console.log(first);

        }
    }
}


cancel.addEventListener('click', del)
equal.addEventListener('click', eq)
numBtn.forEach(ele => {
    ele.addEventListener('click', insert)
});
signBtn.forEach(ele => {
    ele.addEventListener('click', operator)
});
decimal.addEventListener('click', period)
negSign.addEventListener('click', neg)





// function insert(e) {
//     numVal = e.target.value
//     if (prvSign !== '') {
//         second += numVal
//         newS = second.charAt(second.length - 1)
//         iClick = 0

//     } else {
//         first += numVal
//         input.value = first
//     }
//     input.value += newS
// }
// function operator(e) {
//     opValue = e.target.value
//     if (input.value == '' ) {
//         return
//     }else if (input.value != '' && iClick == 0) {
//         prvSign = opValue
//         iClick = 1
//     }else if(prvSign !== '' && iClick == 1){
//         return
//     }else if(prvSign !== '') {
//         newSign = opValue
//         if (prvSign == '+') {
//             first = Number(first) + Number(second)
//         } else if (prvSign == '-') {
//             first = Number(first) - Number(second)
//         } else if (prvSign == '*') {
//             first = Number(first) * Number(second)
//         } else if (prvSign == '/') {
//             first = Number(first) / Number(second)
//         }
//         // prvSign = newSign
//         second = ''
//         input.value += second
//     }

//     input.value += opValue

// }
// function eq() {

//     if (prvSign == '+') {
//         console.log(first, second, prvSign);

//         ans = Number(first) + Number(second)
//     }
//     else if (prvSign == '-') {
//         ans = Number(first) - Number(second)
//     }
//     else if (prvSign == '/') {
//         ans = Number(first) / Number(second)
//     }
//     else if (prvSign == '*') {
//         ans = Number(first) * Number(second)
//     } else {
//         alert('Invalid')
//     }
//     result.innerHTML = ans
// }
// function del() {
//     input.value = input.value.slice(0, input.value.length - 1)

// }