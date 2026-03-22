let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.getElementById("colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container")

const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", 
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", 
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", 
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", 
    "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", 
    "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender"
];

const generateRandomColor = () =>{
    const randomNumber = Math.floor(Math.random()*colors.length)
    return (colors[randomNumber])
};

 let color =  generateRandomColor()
 console.log(color)

const handleRandomBtnClick = () => {
    let color = generateRandomColor();
    changeColor(color)
};

const handleApplyBtn = () =>{
   
    const color =  colorInput.value;
    changeColor(color)
};

const changeColor = (color) => {
    container.style.backgroundColor = color
    currentColorValue.innerHTML = color

}


randomBtn.addEventListener('click', handleRandomBtnClick);
applyBtn.addEventListener('click', handleApplyBtn)

changeColor('tomato')