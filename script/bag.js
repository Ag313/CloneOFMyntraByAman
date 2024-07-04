const CONVINENCE_FEE=99;

let bagItemObjects;
onLoad();



function onLoad() {
    loadBagItemObject();
    displayBagItems();
    displayBagSummery();
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

function removeFromBag(itemId){
bagItem= bagItem.filter(bagItemId => bagItemId != itemId);
localStorage.setItem('bagItem',JSON.stringify(bagItem));
loadBagItemObject();
displayBagIcon();
displayBagItems();
displayBagSummery();
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

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>`
    }

}


//FUNCTIONALITY FOR BAGSUMMARY MEAN HOW TO ADD ITEM MONEY ETC...
function displayBagSummery(){
  let bagSummeryElement= document.querySelector('.bag-summary');
let totalItem=bagItemObjects.length;
let totalMRP=0;
let totalDiscount=0;


bagItemObjects.forEach(bagItem=>{
  totalMRP += bagItem.original_price;
  totalDiscount+= bagItem.original_price-bagItem.current_price;
  
})
let finalPayment=totalMRP-totalDiscount + CONVINENCE_FEE;


//FUNCTIONALITY FOR BAGSUMMARY MEAN HOW TO ADD ITEM MONEY ETC...
  bagSummeryElement.innerHTML=`
          <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹ ${CONVINENCE_FEE}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
`
}