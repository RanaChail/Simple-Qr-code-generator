const qrimg = document.getElementById('qr-img');
const qrinput = document.querySelector('.url-input');
const qrbutton = document.querySelector('.generate-qr');

qrbutton.addEventListener('click', () => {
    const inputValue = qrinput.value;
    
    if(!inputValue){
        alert("Please enter a valid url.")
        return;
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrcode.alt = `Qr code for ${inputValue}`;
    }
})