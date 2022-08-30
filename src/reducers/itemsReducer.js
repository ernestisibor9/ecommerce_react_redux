const initialData= {
    items: [
        {
            itemName:"UMIDIGI A13 Pro (6GB,128GB ROM) 5150mAh NFC (48MP+8MP+5MP)+16MP-Sunglow Gold",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/5207801/1.jpg?3545",
            itemPrice: "₦ 97,900"
        },
        {
            itemName:"Realme C25Y, 4GB/128GB Memory - Metal Gray",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/7194331/1.jpg?9567",
            itemPrice: "₦ 82,612"
        },
        {
            itemName:"Mooved 32' HD LED Digital Satellite Color TV + Free Wall Hanger",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/6266311/1.jpg?6461",
            itemPrice: "₦ 51,990"
        },

        {
            itemName:"Syinix 32 Inch LED Digital TV",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/683389/1.jpg?2660",
            itemPrice: "₦ 86,215"
        },
        {
            itemName:"6 In 1 Bundle Official Shirts For Men - Multi",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/842263/1.jpg?6764",
            itemPrice: "₦ 26,365"
        },
        {
            itemName:"Chrysolite Designs Super Numbers Casual Polo Bundle - Wine, Grey, Navyblue, Red.",
            itemImage: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/847454/1.jpg?9932",
            itemPrice: "₦ 12,200 - ₦ 12,400"
        },

    ]
}

const itemsReducer = (state = initialData, action)=>{
    switch(action.type){
        case "ADD_ITEM": return{
            ...state,
            items: [...state.items, action.payload]
        }
        default: {
            return state
        }
    }
}

export default itemsReducer