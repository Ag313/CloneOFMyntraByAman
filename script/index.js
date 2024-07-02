let itemContainerElements=document.querySelector(".items-container")

let item={
    item_image:"images/1.jpg",
    rating:{
        rating_value:"4.5",
        view:"1400"
    },
    company_name:"carlton London",
    item_name:"Single Plated Kurti",
    current_price:"606",
    original_price:"1045",
    discount:"42",
}

itemContainerElements.innerHTML=`
 <div class="sub-item-container">
                <img src="${item.item_image}" class="item-image" alt="item image"/>
                <div class="rating">
                    ${item.rating.rating_value}⭐ | ${item.rating.view}
                </div>
                <div>
                    <div class="company-name">${item.company_name}</div>
                    <div class="item-name">${item.item_name}</div>
                </div>
                <div class="price">
                    <span class="current-price">₹ ${item.current_price}</span>
                    <span class="original-price">₹${item.original_price}</span>
                    <span class="discount">${item.discount}% OFF</span>
                </div>
                <button class="btn-add-bag">Add To Bag</button>
            </div> `;