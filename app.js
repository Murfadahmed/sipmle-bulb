let Button = document.querySelector('.Btn')
let image = document.querySelector('.onbulb')

Button.addEventListener('click',()=> {
    if(Button.textContent.includes('On')){
        image.src = "./bulb/onrbg.png"
        Button.textContent = "Turn Off"
    }
    else{
        image.src = "./bulb/offrbg.png"
        Button.textContent = "Turn On"
        
    }
});