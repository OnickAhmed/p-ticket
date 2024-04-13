let seatCount = document.getElementById("seatCount");
const discountPrice = document.getElementById("discountPrice");

function addSeat(selectedSeat, totalSeat) {
  // Get the table element in which you want to add row
  let table = document.getElementById("priceTable");

  let numberOfSeat = totalSeat.length;

  // Create a row using the insertRow() method and
  // specify the index where you want to add the row
  let row = table.insertRow(-1); // We are adding at the end

  row.id = "seat" + selectedSeat.id;

  // Create table cells
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);

  c1.innerText = selectedSeat.id;
  c2.innerText = "Economy";
  c3.innerText = "500";

  seatCount.innerText = numberOfSeat;
}

function removeSeat(selectedSeat, seatArray) {
  let row = document.getElementById("seat" + selectedSeat.id);
  row.parentNode.removeChild(row);
  seatArray.splice(
    seatArray.findIndex((a) => a.id === selectedSeat.id),
    1
  );
  let numberOfSeat = seatArray.length;
  seatCount.innerText = numberOfSeat;
}

function checkTicketValidity() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  if (name.length >= 2 && phone.length > 0 && seats.length > 0) {
    return true;
  } else {
    return false;
  }
}

function couponButtonToggle(seats) {
  if (seats.length == 4) {
    couponButton.disabled = false;
  } else {
    couponButton.disabled = true;
  }
}

function showDiscountArea() {
  discountArea.classList.remove("hidden");
  discountArea.classList.add("flex");
}

function showDiscountPrice(percentage) {
  const couponSection = document.getElementById("couponSection");
  grandTotal.innerText = total.innerText - (total.innerText * percentage) / 100;
  discountPrice.innerText = (total.innerText * percentage) / 100;
  couponSection.classList.add("hidden");
  showDiscountArea();
}

function hideDiscountArea() {
  discountArea.classList.remove("flex");
  discountArea.classList.add("hidden");
}

function leftSeatBg(element) {
  console.log("left");
  element.classList.add("bg-[#F7F8F8]");
  element.classList.remove("bg-[#1DD100]");
}

function bookedSeatBg(element) {
  console.log("booked");
  element.classList.remove("bg-[#F7F8F8]");
  element.classList.add("bg-[#1DD100]");
}
