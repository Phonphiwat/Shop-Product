status_all = false;
//function เลือกสินค้า
function addproduct() {
  const product = document.getElementById("product");

  var addpro;
  let price;
  let total;
  //เงื่่อนไขเช็ค ค่า value เวลาเลืออกสินค้า
  if (product.value == 1) {
    addpro = " RTX 2060 ";
    price = 15000;
    total = price;
  } else if (product.value == 2) {
    addpro = " RTX 2070 ";
    price = 20000;
    total = price;
  } else if (product.value == 3) {
    addpro = " RTX 2080 ";
    price = 37900;
    total = price;
  }else if (product.value == 4) {
    addpro = " RTX 3060 ";
    price = 42900;
    total = price;
  } else if (product.value == 5) {
    addpro = " RTX 3090 ";
    price = 63900;
    total = price;
  } 
 

  var table = document.getElementById("del");
//เมื่อ status_all == true ให้ลบแถวสุดท้ายออก
  if (status_all == true){
    status_all = false;
    del.deleteRow(table.rows.length-1);
  }
  // เพิ่มตาราง row และ cell
  var row = table.insertRow(parseInt(table.rows.length));
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);


  cell1.innerHTML = addpro;
  cell2.innerHTML = price;
  cell4.innerHTML = total;
  cell3.innerHTML = `
    <select  onChange="onselects(this.selectedIndex, this)">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </select>
  `;
  
  cell5.innerHTML = `
  <button class="btn2" onclick="Delete(this)">Del</button>
  `;

 
}
//function  ลบ row 
function Delete(element) {
  var del = document.getElementById("del");
  var row = element.parentNode.parentNode.rowIndex;
  del.deleteRow(row);
}
//function เลือกจำนวนสินค้า
function onselects(index, element){
  //ดึงค่าจากช่อง cell2และcell3  แต่ละrow
  var row = element.parentNode.parentNode.rowIndex;
  const price = document.getElementById("del").rows[row].cells[1].textContent; 

  //นำค่าที่ได้ price*ค่าที่cell3 เก็บที่ newprice และโชว์ค่าที่ cell[3]
 if (price != null){
    var newprice = parseInt(price) * parseInt(index+1)
    document.getElementById("del").rows[row].cells[3].innerHTML = newprice;
  }
  console.log(price);
  console.log(row);
  console.log(newprice);
}

function allMoney(){
  //เมื่อ status_all == true ให้ลบแถวสุดท้ายออก
  var table = document.getElementById("del");
  if (status_all == true){
    status_all = false;
    del.deleteRow(table.rows.length-1);
    
  }
  count = 0;
  //คึงค่าจาก cell[3] มาเก็บไว้ที่ count
  for(let i=1;i<table.rows.length;i++){
    count = count + parseInt(document.getElementById("del").rows[i].cells[3].textContent);

  }
//เพิ่มตาราง แสดงงค่า count ที่ cell [3]
  var row = table.insertRow(parseInt(table.rows.length));
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell4.innerHTML= count;
  //คืนค่า status_all = true;
  status_all = true;
}
document.write("<---กดเพื่อรวมราคา");
