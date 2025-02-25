let success = "<img src='check.png'> Successfully submit";
let error = "<img src='cross.png'> Please fix the error";
let invalid = "<img src='exclamation.png'> Invalid input, check again";
let toastbox = document.getElementById('toastbox');

function show(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);
    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }
    setTimeout(() => {
        toast.remove();
    }, 5000);
}