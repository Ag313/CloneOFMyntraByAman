let bagItemObjects;
onLoad();



function onLoad() {
    loadBagItemObject();
    displayBagItems();
}
// FUNCTIONALITY OF APPLYING LOOP FOR FETCHING ONE BY ONE  OBJECT/ITEM DETAILS BY ITS ID NO. DONE HERE...
function loadBagItemObject() {
    bagItemObjects = bagItem.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }

    })
    // console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');


    //  HERE... I'VE DONE THE PROCESS MEAN=> JO JO ITEM "GENERATEITEMHTML KI HELP SE AEGA USPE FOREACH LAGA DEGA JISSE ALAG ALAG DATA AJAE"
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += genrateItemHtml(bagItem);
    });

    containerElement.innerHTML = innerHTML;

    // FUNCTIONALITY FOR GENRATING ONE BY ONE OBJECT/ITEM DONE HERE...

    function genrateItemHtml(item) {
        return ` <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>
          </div>`
    }

}