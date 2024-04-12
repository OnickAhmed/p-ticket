let seats = [];
let seatLeft = document.getElementById("seatLeft");
let total = document.getElementById("totalPrice");
let grandTotal = document.getElementById("grandTotal");
function sortSeat(elementId) {
  const element = document.getElementById(elementId);
  const isActive = element.classList.contains("bg-[#1DD100]");

  console.log(seats.length);
  if (seats.length <= 3) {
    if (isActive) {
      element.classList.add("bg-[#F7F8F8]");
      element.classList.remove("bg-[#1DD100]");
      removeSeat(element, seats);
    } else {
      element.classList.remove("bg-[#F7F8F8]");
      element.classList.add("bg-[#1DD100]");
      seats.push(element);
      addSeat(element, seats);
    }
  }
  else{
    errorModal.showModal();
  }
  seatLeft.innerText = 40 - seats.length;
  total.innerText = seats.length * 500;
  grandTotal.innerText = seats.length * 500;
}

function applyCoupon() {
  const coupon = document.getElementById("couponCode").value;
  const coupon15 = document.getElementById("coupon15").innerText;
  const coupon20 = document.getElementById("coupon20").innerText;
  const grandTotal = document.getElementById("grandTotal");

  if (coupon == coupon15 && total.innerText >= 2000) {
    grandTotal.innerText = total.innerText - (total.innerText * 15) / 100;
  } else if (coupon == coupon20 && total.innerText >= 2000) {
    grandTotal.innerText = total.innerText - (total.innerText * 20) / 100;
  } else {
    grandTotal.innerText = seats.length * 500;
  }
}

function ticketDone() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const successModal = document.getElementById("successModal");

  if (name.length > 0 && phone.length > 0 && seats.length > 0) {
    successModal.showModal();
  } else {
    errorModal.showModal();
  }
}


// bg-[url('/assets/images/banner.png')] bg-no-repeat bg-cover