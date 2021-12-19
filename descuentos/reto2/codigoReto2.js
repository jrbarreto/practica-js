//Solución #1:
// const coupons = [
//     "ALFIL",
//     "CABALLO",
//     "TORRE"
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
//     return precioConDescuento;
// }

// function PriceWithDiscount(){
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     switch(couponValue){
//         case coupons[0]:
//             descuento = 15;
//         break;
//         case coupons[1]:
//             descuento = 30;
//         break;
//         case coupons[2]:
//             descuento = 25;
//         break;
//     }

//     const precioTotal = calcularPrecioConDescuento(priceValue, descuento);

//     const resultPrice = document.getElementById("resultPrice");
//     resultPrice.innerText = "El precio con descuento es: $" + precioTotal;
// }

//------------------------------------------------------------------------------
//Solución #2:
// const coupons = [
//     "ALFIL",
//     "CABALLO",
//     "TORRE"
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
//     return precioConDescuento;
// }

// function PriceWithDiscount(){
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     if(!coupons.includes(couponValue)){
//         alert("El cupon " + couponValue + "no es valido.");
//     } else if(couponValue === "ALFIL"){
//         descuento = 15;
//     } else if(couponValue === "CABALLO"){
//         descuento = 30;
//     } else if(couponValue === "TORRE"){
//         descuento = 25;
//     }

//     const precioTotal = calcularPrecioConDescuento(priceValue, descuento);

//     const resultPrice = document.getElementById("resultPrice");
//     resultPrice.innerText = "El precio con descuento es: $" + precioTotal;
// }

//------------------------------------------------------------------------------
//Solución #3:
const coupons = [
  {
    name: "ALFIL",
    discount: 15,
  },
  {
    name: "CABALLO",
    discount: 30,
  },
  {
    name: "TORRE",
    discount: 25,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function PriceWithDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupon " + couponValue + " no es válido.");
  } else {
    const descuento = userCoupon.discount;
    const precioTotal = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerHTML = "El precio con descuento es: $" + precioTotal;
  }
}
