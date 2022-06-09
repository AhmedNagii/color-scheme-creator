







document.getElementById('get-scheme').addEventListener('click', () => {
    const selectedColor = document.getElementById('color-selector').value.substring(1);
    let schemeArray = []
    selectedColor
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=analogic&count=5`)
    .then(res => res.json())
    .then(data => {
        for(let i =0; i < 5; i++){
        let color = data.colors[i].hex.value
        schemeArray.push(color)
}
console.log(schemeArray)} )
    
})

