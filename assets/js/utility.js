let seatCount = document.getElementById("seatCount");

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

  // Add data to c1 and c2
  c1.innerText = selectedSeat.id;
  c2.innerText = "Economy";
  c3.innerText = "500";

  seatCount.innerText = numberOfSeat;
}

function removeSeat(selectedSeat, seatArray) {
  let total = document.getElementById("totalPrice");
  // removing from the selected seat table
  let row = document.getElementById("seat" + selectedSeat.id);
  row.parentNode.removeChild(row);

  //   removing from the array
  seatArray.splice(
    seatArray.findIndex((a) => a.id === selectedSeat.id),
    1
  );
  let numberOfSeat = seatArray.length;
  seatCount.innerText = numberOfSeat;
}
