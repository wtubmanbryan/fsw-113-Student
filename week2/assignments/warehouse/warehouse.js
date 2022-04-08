const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

var detailsList = document.getElementById("detailsList")
var specialPackaging = document.getElementById("specialPackaging")
var hazardousMaterials = document.getElementById("hazardousMaterials")
var smallItemsOnly = document.getElementById("smallItemsOnly") 
var forkLiftNeeded = document.getElementById("forkLiftNeeded")
var totalItems = document.getElementById("totalItems") 


    // list of each part number and qty for check-off in the "detailsList" element
    var partInfo =""
    parts.forEach(function(part){
        partInfo += `<input type = 'checkbox'>${part.qty}  (${part.partNbr}) - ${part.partDescr}<br/>`
    })

    detailsList.innerHTML = partInfo

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
    const newparts = parts.filter(function(part){
        return part.aisle == 'B3'
    })

    newparts.forEach(function(part){
        specialPackaging.innerHTML += `Item: ${part.partNbr} / Qty: ${part.qty}<br />`
    })
    

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
    const hazardous = parts.find(function(item){
        return item.aisle == "J4"
    })
    if(hazardous){
        hazardousMaterials.innerHTML += "<p>Get Gloves</p>"
    }
    else{
        hazardousMaterials.style.display= "none"
    }
   
// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
    const takeBasket = parts.every(function(item){
            return item.aisle == "H1"
        })
        if(takeBasket){
            smallItemsOnly.innerHTML += "<p>Take a basket and go directly to aisle H1</p>"
        }
        else{
            smallItemsOnly.style.display="none"
        }
    
// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
    const largeItem = parts.some(function(item){
            return item.aisle == "S" || item.aisle == "T" || item.aisle == "U"
        })
        if(largeItem){
            forkLiftNeeded.innerHTML += "<p>Reserve a forklift</p>"
        }
        else{
            forkLiftNeeded.style.display="none"
        }


// sum up the total number of parts and append that number to the text already in "totalItems" element

    const total = parts.reduce(function(runningTotal, parts){
        return parts.qty + runningTotal
    }, 0)
    totalItems.innerHTML += total
