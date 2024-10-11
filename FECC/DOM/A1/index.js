let Go_Btn = document.querySelector(".btn_go");
Go_Btn.addEventListener('click', (() => calculateLength()));

function calculateLength() {
    let str = document.querySelector('.inputText').value;
    str = str.trim().split(" ").join("");
    let Length = str.length;
    display_Result(Length)
}

function display_Result(num) {
    let displayLength = document.createElement('p');
    displayLength.innerText = num;
    let box = document.querySelector('#outer_container');
    box.className="DisplayLength"
    box.append(displayLength)
}
