//1.Create an Array of 10 Numbers and print all using a loop and forEach().
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//  console.log(arr[i])
// }
// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function(item){
//     console.log(item)
// })




//2.Find the Maximum and Minimum in an Array using loops.
// let arr=[1,2,3,4,5,6,7,8,9,10]                           
// let max=arr[0]                                              
// let min=arr[0]                                              
// arr.forEach(function(item){
//     if(item>max){
//         max=item
//     }
//     if(item<min){
//         min=item
//     }
// })
// console.log(max,min)


//3.Reverse an Array manually.
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let start=0
// let=end=arr.length-1
// while(start<end){
//     let temp=arr[start]
//     arr[start]=arr[end]
//     arr[end]=temp
//     start++
//     end--
// }
// console.log(arr)



//4.Create a function to receive array and sort order as argument and Sort an Array in Ascending and Descending Order.
// let arr=[4,1,6,9,2,5,8]
// function sorting(arr,order){
//     if (order==0){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j+1]<arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// }
//     if (order==1){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j+1]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// } 
// console.log(arr)
// }
// sorting(arr,1)
// sorting(arr,0)




//5.Remove Duplicates from an Array.
// let arr=[4,1,6,9,2,5,8,9,4]







// function calculateBill(bill) {
//     const billItemsDetails = [];
//     let totalAmount = 0;
//     for (const billItem of bill.billItems) 
//         {
//         const menuItem = menu.find(item => item.id === billItem.id);
//         if (!menuItem) continue;
//         const quantity = billItem.quantity;
//         const basePrice = menuItem.rate;
//         // Apply discount
//         let discountedPrice = basePrice;
//         const discount = billItem.discount;
//         if (discount.isInPercent) {
//             discountedPrice -= (discount.rate / 100) * basePrice;
//         } else {
//             discountedPrice -= discount.rate;
//         }
//        // Apply taxes on discounted price
//         let finalPrice = discountedPrice;
//         for (const tax of menuItem.taxes) {
//             if (tax.isInPercent) {
//                 finalPrice += (tax.rate / 100) * discountedPrice;
//             } else {
//                 finalPrice += tax.rate;
//             }
//         }
//         // Round to 2 decimal places
//         finalPrice = parseFloat(finalPrice.toFixed(2));
//         // Calculate total for this item
//         const totalForItem = parseFloat((finalPrice * quantity).toFixed(2));
//         totalAmount += totalForItem;
//         const itemString = ${menuItem.itemName}@${basePrice} x ${quantity} = ${totalForItem};
//         billItemsDetails.push(itemString);
//     }
//    // Round totalAmount
//     totalAmount = parseFloat(totalAmount.toFixed(2));
//     return [totalAmount, billItemsDetails];
// }