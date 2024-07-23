function chCarImg(){
   let value = document.getElementById('change-car-name').value
   console.log(value)

   document.getElementById('cars').src = `images/${value}`
}

function start(){
    document.getElementById('demo1').style.backgroundImage = "url('https://i.pinimg.com/736x/ad/79/f9/ad79f96a8cb44db2e9289a2223a1f064.jpg')"
}

function end(){
    document.getElementById('demo1').style.background = "lightblue"
}