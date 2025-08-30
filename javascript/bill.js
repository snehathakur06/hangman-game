const bill = {
  id: "B1",
  billNumber: 10,
  openTime: "12/01/2021, 10:43:39",
  customerName: "CodeQuotient",
  billItems: [
    {
      id: "item2",
      quantity: 3,
      discount: {
        rate: 10,
        isInPercent: false,
      },
    },
    {
      id: "item1",
      quantity: 15,
      discount: {
        rate: 10,
        isInPercent: true,
      },
    },
    {
      id: "item4",
      quantity: 2,
      discount: {
        rate: 20,
        isInPercent: false,
      },
    },
    {
      id: "item3",
      quantity: 5,
      discount: {
        rate: 5,
        isInPercent: true,
      },
    },
  ],
};

const menu = [
  {
    id: "item1",
    itemName: "Butter Roti",
    rate: 20,
    taxes: [
      {
        name: "Service Charge",
        rate: 10,
        isInPercent: false,
      },
      {
        name: "GST",
        rate: 5,
        isInPercent: true,
      },
    ],
    category: {
      categoryId: "C2",
    },
  },
  {
    id: "item2",
    itemName: "Paneer Butter Masala",
    rate: 150,
    taxes: [
      {
        name: "GST",
        rate: 5,
        isInPercent: true,
      },
    ],
    category: {
      categoryId: "C1",
    },
  },
  {
    id: "item3",
    itemName: "Cold Drink",
    rate: 50,
    taxes: [
      {
        name: "Cooling Charge",
        rate: 5,
        isInPercent: false,
      },
      {
        name: "GST",
        rate: 12,
        isInPercent: true,
      },
    ],
    category: {
      categoryId: "C3",
    },
  },
  {
    id: "item4",
    itemName: "Gulab Jamun",
    rate: 40,
    taxes: [
      {
        name: "GST",
        rate: 5,
        isInPercent: true,
      },
    ],
    category: {
      categoryId: "C4",
    },
  },
];

var billAmt = 0;
var totalbill=0;
bill.billItems.forEach((billItem)=>{
  const id = billItem.id;
  const menuItem = menu.find((m) => m.id === id);
  var tax=0;
    menuItem.taxes.forEach(function(taxValue){
    if(taxValue.isInPercent){
      tax=tax+(taxValue.rate*(menuItem.rate* billItem.quantity))/100;
    }
    else{
      tax=tax+taxValue.rate;
    }
  });
  var disc=0;
  
    if(billItem.discount.isInPercent){
      disc=disc+(billItem.discount.rate*(menuItem.rate* billItem.quantity))/100;
    }
    else{
      disc=disc+billItem.discount.rate;
    }
  

  billAmt=(billItem.quantity*menuItem.rate)+tax-disc;
  totalbill+=billAmt;
  console.log(menuItem.itemName+"@"+menuItem.rate+"X"+billItem.quantity+"="+billAmt);
})
console.log(totalbill);