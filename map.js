
// PINTAR UN TILES

let myMap = L.map('myMap').setView ([-34.60,-59.10], 9 )   

var tilesProvider = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'). addTo(myMap)
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png')
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	ext: 'jpg'
});


// ESCALA GRAFICA 

L.control.scale().addTo(myMap);


// MAPAS


var mapa1 = L.geoJSON(cuenca,{style:styleA,popup:popupA})
var mapa2 = L.geoJSON(partidos,{style:styleB,popup:popupB})
var mapa3 = L.geoJSON(divisoria,{style:styleC})
var mapa4 = L.geoJSON(usos_2010,{style:styleD,popup:popupD})
var mapa5 = L.geoJSON(tasa,{style:styleE,popup:popupE})


var pilar = L.circle([-34.4582696, -58.9146566], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 9000
});

pilar.bindPopup("3318 caso");

var chacabuco = L.circle([-34.6432577, -60.4746223], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 2000
});

chacabuco.bindPopup("30 caso");

var carmen =  L.circle([-34.3764562, -59.8233220], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 2000
});
carmen.bindPopup("36 caso");



var exaltacion =  L.circle([-34.2799400, -59.1062300], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 2000
});
exaltacion.bindPopup(" 292 caso");


var escobar =  L.circle([ -34.3477000, -58.7971000], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 9000
});
escobar.bindPopup(" 2827 caso");



var jose =  L.circle([ -34.5093880, -58.7748438], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 9000
});
jose.bindPopup("4104 caso");



var moreno =  L.circle([ -34.6391,-58.7917], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 9000
});
moreno.bindPopup("7246 caso");

var giles =  L.circle([ -34.4417541, -59.4475955 ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 2000
});
giles.bindPopup("48 caso");



var suipacha =  L.circle([ -34.7680613, -59.6868968 ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 2000
});
suipacha.bindPopup("90 caso");


var mercedes =  L.circle([ -34.6546566, -59.4312716 ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 5000
});
mercedes.bindPopup("542 caso");

var lujan =  L.circle([ -34.5673399, -59.1161120 ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 5000
});
lujan.bindPopup(" 1355 caso");


var campana=  L.circle([ -34.1717516, -58.9582586 ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 5000
});
campana.bindPopup("758 caso");




var rodriguez=  L.circle([  -34.5959552, -58.9524114], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 5000
});
rodriguez.bindPopup("1211 caso");

var fernando=  L.circle([-34.4585172, -58.5892594  ], {
    color: 'black',
    fillColor: '#000',
    fillOpacity: 0.5,
    radius: 9000
});
fernando.bindPopup(" 3289 caso");




var casos_covid = L.layerGroup([pilar, chacabuco, carmen,exaltacion,escobar,jose,moreno,giles,suipacha,mercedes,lujan,campana,rodriguez,fernando]);



// ESTILOS DEL MAPA PUNTOS
var legend1 = L.control({position: 'bottomright'});

legend1.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias.png" />';

return div;
};



// ESTILOS DEL MAPA A

function getColorA(d) {
    return d > 7300 ? '#800026' :
           d > 7300 ? '#B00026' :
           d > 2500 ? '#E31A1C' :
           d > 2500?   '#FC4E2A' :
           d > 500 ? '#FD8D3C' :
           d > 500? '#FEB24C' :
           d > 36 ? '#FED976' :
                      '#FFEDA0';
}


function styleA(feature) {
   return {
       fillColor: getColorA(feature.properties.Casos_confi),
       weight: 2,
       opacity: 1,
       color: 'red',
       dashArray: '3',
       fillOpacity: 0.7
   };
}




//  ESTILOS DEL MAPA B



function getColorB(d) {
    return d > 5279 ? '#005a32' :
           d > 5279 ? '#238443' :
           d > 250 ? '#41ab5d' :
           d > 250 ? '#78c679' :
           d > 60 ? '#addd8e' :
           d > 60  ? '#d9f0a3' :
           d > 10  ? '#f7fcb9' :
                      '#ffffe5';
}


function styleB(feature) {
   return {
       fillColor: getColorB(feature.properties.Densidad),
       weight: 2,
       opacity: 1,
       color: 'red',
       dashArray: '3',
       fillOpacity: 0.9
   };
}











// ESTILOS MAPA C 


function getColorC(d) {
    return  d ===1?'#9ecae1':
              '#b07fd6';

}



function styleC(feature) {
    return {
        fillColor: getColorC(feature.properties.id),
        weight: 2,
        opacity: 1,
        color: 'green',
        dashArray: '5',
        fillOpacity: 0.7
    };
}



// ESTILOS MAPA D 



  
function getColorD(d) {
    return  d ==='Urbano disperso'?'#64ee09':
            d ==='Rural' ? '#31a354':
            d ==='Urbano compacto'?'#e6550d':
                  '#31a354'       

}



function styleD(feature) {
    return {
        fillColor: getColorD(feature.properties.Name),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.7
    };
}


// ESTILOS MAPA E



function getColorE(d) {
    return d > 20 ? '#08306b' :
           d > 15 ? '#08306b' :
           d > 13 ? '#2171b5' :
           d > 10 ? '#6baed6' :
           d > 5  ? '#deebf7' :
           d > 1  ? '#f7fbff' :
                    '#f7fbff';
}




function styleE(feature) {
    return {
        fillColor: getColorE(feature.properties.Tasa),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}



// REFERENCIAS A


var legendA = L.control({position: 'bottomright'});

legendA.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias2.png" />';

return div;
};



// REFERENCIAS B



var legendB = L.control({position: 'bottomright'});

legendB.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias3.png" />';

return div;
};



// REFERENCIAS MAPA C 

var legendC= L.control({position: 'bottomright'});

legendC.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias6.png" />';

return div;
};



// REFERENCIAS D

var legendD = L.control({position: 'bottomright'});

legendD.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias5.png"/>';

return div;
};



// REFERENCIAS E


var legendE = L.control({position: 'bottomright'});

legendE.onAdd = function (map) {
   var div = L.DomUtil.create('div', 'info legend1');
   
div.innerHTML +=
'<img src="img/Referencias4.png"/>';

return div;
};



//POPUP  DEL MAPA A



function popupA (feature,layer){
    layer.bindPopup(
  '<img src="'+ feature.properties.IMAGENES +'" style="width:800px;height:500px;">'+
  "</p>NOMBRE: "+feature.properties.NOMBRE+ 
  "</p>CASOS CONFIRMADOS:"+feature.properties.Casos_confi+ "</p>"
  );
}

mapa1 = L.geoJson(cuenca, { 
    style:styleA, onEachFeature: popupA
}).addTo(myMap)


//POPUP DEL MAPA B

function popupB (feature,layer){
    layer.bindPopup(
  "</p>NOMBRE: "+feature.properties.NOMBRE+ 
  "</p>DENSIDAD DE POBLACIÓN:"+feature.properties.Densidad+ "</p>"
);
}

mapa2 = L.geoJson(partidos, { 
    style:styleB, onEachFeature: popupB
})


// POPUP DEL MAPA D


function popupD (feature,layer){
    layer.bindPopup(
 "</p>USO DEL SUELO: "+feature.properties.Name+ "</p>"
 );
}

mapa4 = L.geoJson(usos_2010, { 
    style:styleD, onEachFeature: popupD
})


//POPUP DEL MAPA E

function popupE (feature,layer){
    layer.bindPopup(
 "</p>NOMBRE: "+feature.properties.NOMBRE+ 
 "</p>TASA DE CONTAGIOS :"+feature.properties.Tasa+ "</p>"
 );
}

mapa5 = L.geoJson(tasa, { 
    style:styleE, onEachFeature: popupE
})





// SELECTOR DE MAPAS 



var capas = {
   "Casos activos": mapa1,
   "capa de puntos: casos confirmados": casos_covid,
   "Densidad de Población": mapa2,
   "Tasa  de contagios por cada 1000 hab.": mapa5,
   "Cuenca del Río Luján": mapa3,
   "Usos del Suelo año 2010": mapa4
};


var Base = {
"Satélite":Esri_WorldImagery,
"OSM": tilesProvider,
"Darck":CartoDB_DarkMatter,
"Acuarela": Stamen_Watercolor
};





L.control.layers( Base, capas,  {
  collapsed: false,
  position: 'topleft' 
}).addTo(myMap)






// FUNCION PARA SINCRONIZAR REFERENCIAS 




currentLegend = legendA;
        
       myMap.on('overlayadd', function (eventLayer) {
            if (eventLayer.name === "Casos activos") {
                myMap.removeControl(currentLegend);
                currentLegend = legendA;
                legendA.addTo(myMap);
            }
          else if  (eventLayer.name === 'capa de puntos: casos confirmados') {
                myMap.removeControl(currentLegend );
                currentLegend = legend1;
                legend1.addTo(myMap);}
            
}) 



currentLegend = legendC;
        
       myMap.on('overlayadd', function (eventLayer) {
            if (eventLayer.name ==='Cuenca del Río Luján' ) {
                myMap.removeControl(currentLegend);
                currentLegend = legendC;
                legendC.addTo(myMap);
            }
          else if (eventLayer.name === "Usos del Suelo año 2010") {
                myMap.removeControl(currentLegend );
                currentLegend = legendD;
                legendD.addTo(myMap);}


          



})
            

currentLegend = legendB
        
       myMap.on('overlayadd', function (eventLayer) {
            if (eventLayer.name === "Densidad de Población") {
                myMap.removeControl(currentLegend);
                currentLegend = legendB;
                legendB.addTo(myMap);
            }
          else if  (eventLayer.name === 'Tasa  de contagios por cada 1000 hab.') {
                myMap.removeControl(currentLegend );
                currentLegend = legendE;
                legendE.addTo(myMap);}


}) 
