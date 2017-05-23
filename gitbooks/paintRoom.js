const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000
  

  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const foundItem = warehouse.find((obj) => obj.item === item);

      if (foundItem) {
        resolve(foundItem);
      }

    }, deliveryTime )
  });
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
let brush = orderSupplies('brush');
orderSupplies('paint').then((item) => {
    printItem(item);
    return brush;
  })
  .then((item) => {
    printItem(item);
  });

// let paint = false;
// const garage = {};

// orderSupplies('paint', (item) => {
//   printItem(item);
//   paint = true;
//   if(garage.brush) {
//     printItem(garage.brush);
//   }
// });

// orderSupplies('brush', (item) => {
//   if(paint) {
//     printItem(item);
//   } else {
//     console.log("in the garage");
//     garage.brush = item;
//   }
// });


// Promise States: 
// - Rejected
// - Resolved
// - Pending
// const gotPaint = new Promise((resolve, reject) => {
//   orderSupplies('paint', (item) => {
//     resolve(item);
//     reject();
//   });
// });

// const gotBrush = new Promise((resolve, reject) => {
//   orderSupplies('brush', (item) => {
//     resolve(item);
//     reject();
//   });
// });

// gotPaint
//   .then((item) => {
//     printItem(item);
//     return gotBrush;
//   })
//   .then((item) => {
//     printItem(item);
//   });

// gotPaint.catch(() => {console.log("Paint Error")});
// gotBrush.catch(() => {console.log("Brush Error")});
