let seats = [];
let seatLeft = document.getElementById("seatLeft");
let total = document.getElementById("totalPrice");
let grandTotal = document.getElementById("grandTotal");
const discountArea = document.getElementById("discountArea");
let couponButton = document.getElementById("couponButton");
let confirmButton = document.getElementById("confirmTicket");

window.onload = confirmButton.disabled = true;
window.onload = couponButton.disabled = true;

function sortSeat(elementId) {
  const element = document.getElementById(elementId);
  const isActive = element.classList.contains("bg-[#1DD100]");
  if (isActive) {
    leftSeatBg(element);
    removeSeat(element, seats);
    hideDiscountArea();
    couponButtonToggle(seats);
    couponSection.classList.remove("hidden");
  } else {
    if (seats.length + 1 <= 4) {
      bookedSeatBg(element);
      seats.push(element);
      addSeat(element, seats);
      couponButtonToggle(seats);
    } else {
      maxSeatModal.showModal();
    }
  }
  ticketReady();
  seatLeft.innerText = 40 - seats.length;
  total.innerText = seats.length * 550;
  grandTotal.innerText = seats.length * 550;
}

function applyCoupon() {
  const coupon = document.getElementById("couponCode").value;
  const coupon15 = document.getElementById("coupon15").innerText;
  const coupon20 = document.getElementById("coupon20").innerText;
  const discountPrice = document.getElementById("discountPrice");

  if (coupon == coupon15 && total.innerText >= 2000) {
    showDiscountPrice(15);
  } else if (coupon == coupon20 && total.innerText >= 2000) {
    showDiscountPrice(20);
  } else {
    grandTotal.innerText = seats.length * 550;
    discountPrice.innerText = "00";
    wrongCouponModal.showModal();
  }
}

function ticketReady() {
  if (checkTicketValidity(seats)) {
    confirmButton.disabled = false;
    return true;
  } else {
    confirmButton.disabled = true;
    return false;
  }
}

function ticketDone() {
  if (ticketReady()) {
    successModal.showModal();
  }
}
