/* 
Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone 
*/
  
const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
];

// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2 Coloriamo le icone per tipo
let filteredByType = [];
const coloredIcons = icons.map(icon =>{
  const {name, prefix, family, type} = icon;
  // color
  let color = "darkgreen";
  if(icon.type == "user"){
    color = "red";
  } else if(icon.type == "animal"){
    color = "orange";
  }
  
  return{
    name, prefix, family, type, color
  }
  
});

//console.log(coloredIcons);
filter();


// functions
function filter(){
  
  let selVal = document.getElementById("select-type").value;
  const getIconsContainer = document.getElementById("icons");

  if(selVal == "all" || selVal == ""){
    filteredByType = coloredIcons;
    showIcons();
    
  } else {
    

    coloredIcons.forEach((icon) =>{
      // console.log(icon);
      
      if (selVal == "veg" && icon.type == "vegetable"){
        filteredByType.push(icon);
      }
      else if(selVal == "an" && icon.type == "animal"){
        filteredByType.push(icon);
      }
      else if(selVal == "us" && icon.type == "user"){
        filteredByType.push(icon);
      }
      document.getElementById("icons").innerHTML = " ";
      return filteredByType;
    });
     
    showIcons();
  }
}

function showIcons(){
  // document.getElementById("icons").innerHTML = " ";
  filteredByType.forEach((icon, i) => {

    // creo div contenitore per ogni icon
    const iconDiv = document.createElement("div");

    let classTypeName = icon.type;

    iconDiv.classList.add("icon", classTypeName);
    
    document.getElementById("icons").appendChild(iconDiv);
    // inserisco icona
    document.getElementsByClassName("icon")[i].innerHTML = `
    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}" style="color:${icon.color}"></i>
    <h5>${icon.name}</h5>
    `
   
  });
}


