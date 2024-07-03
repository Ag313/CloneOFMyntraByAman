let itemContainerElements = document.querySelector(".items-container")

let bagItem
onLoad();

// FUNCTIONALITY OF STARTING LOAD DONE HERE...

function onLoad() {
    let bagItemstr = localStorage.getItem('bagItem')
    bagItem = bagItemstr ? JSON.parse(bagItemstr) : [];

    displayItemsHomePage();
    displayBagIcon();
}

// FUNCTIONALITY FOR ADD TO BAG SECTION DONE HERE...
function addToBag(itemId) {
    bagItem.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItem))
    displayBagIcon();
}


// FUNCTIONALITY FOR DISPLAYING BAG ICON DONE HERE...
function displayBagIcon() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if (bagItem.length > 0) {
        bagItemCountElement.style.visibility = "visible";
        bagItemCountElement.innerText = bagItem.length;
    } else {
        bagItemCountElement.style.visibility = "hidden";

    }
}
// FUNCTIONALITY FOR DISPLAY HOME PAGE WHERE ALL ITEMS AVAILABLE DONE HERE...
function displayItemsHomePage() {
    let itemsContainerElement = document.querySelector(".items-container");
    if (!itemsContainerElement) {     //THIS IS CINDITION IF PAGE NOT GET THEN MAKE FALSE TRUE
        return;
    }
    let innerHTML = "";
    items.forEach(item => {
        innerHTML += `<div class="sub-item-container">
                    <img src="${item.image}" class="item-image" alt="item image"/>
                    <div class="rating">
                        ${item.rating.stars}⭐ | ${item.rating.count}
                    </div>
                    <div>
                        <div class="company-name">${item.company}</div>
                        <div class="item-name">${item.item_name}</div>
                    </div>
                    <div class="price">
                        <span class="current-price">₹ ${item.current_price}</span>
                        <span class="original-price">₹${item.original_price}</span>
                        <span class="discount">${item.discount_percentage}% OFF</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
                </div> `;
    });


    itemContainerElements.innerHTML = innerHTML;
}

