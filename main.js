const output = document.querySelector(".output")

const buttons = document.querySelectorAll("button")

let isFinished = false
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(isFinished === true) {
            output.textContent = '';
            isFinished = false
        }
        switch(e.target.textContent){
            case 'DEL':
                output.textContent = output.textContent.slice(0, -1)
                break
            case 'RESET':
                output.textContent = ''
                break
            case '=':
                try {
                    output.textContent = output.textContent.replace(/x/g, '*')
                    output.textContent = eval(output.textContent)
                } catch(error) {
                    output.textContent = "TRY AGAIN"
                    isFinished = true
                }
                break
            default:
                output.textContent += e.target.textContent
        }
    })
})