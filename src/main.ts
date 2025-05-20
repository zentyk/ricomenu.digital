import './style.css';

let btn1 = document.getElementById('contactBtn1') as HTMLButtonElement;
let btn2 = document.getElementById('contactBtn2') as HTMLButtonElement;

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button 1 clicked');
    window.open('https://wa.me/+525538903746', '_blank');
});
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button 2 clicked');
    let name = document.getElementById('name') as HTMLInputElement;
    let phone = document.getElementById('phone') as HTMLInputElement;
    let msg = document.getElementById('message') as HTMLInputElement;

    let concatenatedMessage = `Hola, mi nombre es ${name.value} y ${msg.value} respecto a RikoMenu`
    window.open(`https://wa.me/+525538903746?text=${concatenatedMessage}`, '_blank');

});
