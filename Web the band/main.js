let buys = document.getElementsByClassName("buy_ticket")
let box = document.getElementsByClassName("model_buy_ticket")
let close1 = document.getElementsByClassName("box-close")
let close2 = document.getElementsByClassName("close")

for (let buy of buys) {
    buy.onclick = () => {
        box[0].style.display = "flex"

    }
}

close1[0].onclick = () => {
    box[0].style.display = "none"
}

close2[0].onclick = () => {
    box[0].style.display = "none"
}