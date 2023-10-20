 //Ô tô
 // Lấy thông tin biển số xe từ localStorage
 let licensePlates = JSON.parse(localStorage.getItem('licensePlates')) || {};
 let isPlateAdded = false;

 function searchLicensePlate() {
     let plateNumber = document.getElementById('searchBar').value;

     // Kiểm tra xem thanh tìm kiếm có trống không
     if (!plateNumber) {
         alert("Vui lòng nhập biển số xe.");
         return;
     }

     // Kiểm tra định dạng của biển số xe
     let regex = /^[0-9]{2}[A-Z]-[0-9]{3}\.[0-9]{2}$/;
     if (!regex.test(plateNumber)) {
         alert("Biển số xe không hợp lệ. Vui lòng nhập theo định dạng: 34A-123.45");
         return;
     }

     let plateInfo = licensePlates[plateNumber];

     if (plateInfo) {
         // Hiển thị thông tin nếu có sẵn
         document.getElementById('plateInfo').innerHTML = "Biển số: " + plateNumber + "<br><img src='" + plateInfo.image + "' alt='Hình ảnh biển số'><br>Ghi chú: " + plateInfo.note;
     } else {
         // Hiển thị thông báo nếu không tìm thấy thông tin
         document.getElementById('plateInfo').innerHTML = "Không tìm thấy thông tin cho biển số xe: " + plateNumber;
     }
 }

 function addLicensePlate() {
     if (isPlateAdded) {
         alert("Bạn đã thêm một biển số xe. Hãy xóa nó trước khi thêm mới.");
         return;
     }

     let plateNumber = document.getElementById('searchBar').value;

     // Kiểm tra xem thanh tìm kiếm có trống không
     if (!plateNumber) {
         alert("Vui lòng nhập biển số xe.");
         return;
     }

     // Kiểm tra định dạng của biển số xe
     let regex = /^[0-9]{2}[A-Z]-[0-9]{3}\.[0-9]{2}$/;
     if (!regex.test(plateNumber)) {
         alert("Biển số xe không hợp lệ. Vui lòng nhập theo định dạng: 34A-123.45");
         return;
     }

     let image = prompt("Nhập URL hình ảnh:");
     let note = prompt("Nhập ghi chú:");

     licensePlates[plateNumber] = {
         image: image,
         note: note
     };

     // Lưu thông tin biển số xe vào localStorage
     localStorage.setItem('licensePlates', JSON.stringify(licensePlates));

     isPlateAdded = true;

     alert("Đã thêm mới thông tin cho biển số xe: " + plateNumber);
 }

 function deleteLicensePlate() {
     let plateNumber = document.getElementById('searchBar').value;

     if (licensePlates[plateNumber]) {
         delete licensePlates[plateNumber];

         // Cập nhật thông tin biển số xe trong localStorage
         localStorage.setItem('licensePlates', JSON.stringify(licensePlates));

         isPlateAdded = false;

         alert("Đã xóa thông tin cho biển số xe: " + plateNumber);
     } else {
         alert("Không tìm thấy thông tin cho biển số xe: " + plateNumber);
     }
 }
/////////////////////////////////////////////////////////////////////
document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt tải lại trang
    // Thực hiện xử lý tìm kiếm ở đây
    searchLicensePlate();
  });
document.getElementById('addButton').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt tải lại trang
    // Thực hiện xử lý tìm kiếm ở đây
    searchLicensePlate();
  });  
document.getElementById('deleteButton').addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt tải lại trang
    // Thực hiện xử lý tìm kiếm ở đây
    searchLicensePlate();
  }); 
  
  
/////////////////////////////////////////////////////////////////////
//XE MÁY
//////////////////////////////////////////////////////////
let motorcycleLicensePlates = JSON.parse(localStorage.getItem('motorcycleLicensePlates')) || {};
let isMotorcyclePlateAdded = false;

function searchMotorcycleLicensePlate() {
    let plateNumber = document.getElementById('searchBarMotorcycle').value;

    if (!plateNumber) {
        alert("Vui lòng nhập biển số xe máy.");
        return;
    }

    let regex = /^[0-9]{2}[A-Z]{2}-[0-9]{3}\.[0-9]{2}$/;
    if (!regex.test(plateNumber)) {
        alert("Biển số xe máy không hợp lệ. Vui lòng nhập theo định dạng: 34AB-123.45");
        return;
    }

    let plateInfo = motorcycleLicensePlates[plateNumber];

    if (plateInfo) {
        document.getElementById('motorcyclePlateInfo').innerHTML = "Biển số: " + plateNumber + "<br><img src='" + plateInfo.image + "' alt='Hình ảnh biển số xe máy'><br>Ghi chú: " + plateInfo.note;
    } else {
        document.getElementById('motorcyclePlateInfo').innerHTML = "Không tìm thấy thông tin cho biển số xe máy: " + plateNumber;
    }
}

function addMotorcycleLicensePlate() {
    if (isMotorcyclePlateAdded) {
        alert("Bạn đã thêm một biển số xe máy. Hãy xóa nó trước khi thêm mới.");
        return;
    }

    let plateNumber = document.getElementById('searchBarMotorcycle').value;

    if (!plateNumber) {
        alert("Vui lòng nhập biển số xe máy.");
        return;
    }

    let regex = /^[0-9]{2}[A-Z]{2}-[0-9]{3}\.[0-9]{2}$/;
    if (!regex.test(plateNumber)) {
        alert("Biển số xe máy không hợp lệ. Vui lòng nhập theo định dạng: 34A-123.45");
        return;
    }

    let image = prompt("Nhập URL hình ảnh xe máy:");
    let note = prompt("Nhập ghi chú:");

    motorcycleLicensePlates[plateNumber] = {
        image: image,
        note: note
    };

    localStorage.setItem('motorcycleLicensePlates', JSON.stringify(motorcycleLicensePlates));

    isMotorcyclePlateAdded = true;

    alert("Đã thêm mới thông tin cho biển số xe máy: " + plateNumber);
}

function deleteMotorcycleLicensePlate() {
    let plateNumber = document.getElementById('searchBarMotorcycle').value;

    if (motorcycleLicensePlates[plateNumber]) {
        delete motorcycleLicensePlates[plateNumber];
        localStorage.setItem('motorcycleLicensePlates', JSON.stringify(motorcycleLicensePlates));
        isMotorcyclePlateAdded = false;
        alert("Đã xóa thông tin cho biển số xe máy: " + plateNumber);
    } else {
        alert("Không tìm thấy thông tin cho biển số xe máy: " + plateNumber);
    }
}

document.getElementById('searchButtonMotorcycle').addEventListener('click', function (event) {
    event.preventDefault();
    searchMotorcycleLicensePlate();
});

document.getElementById('addButtonMotorcycle').addEventListener('click', function (event) {
    event.preventDefault();
    searchMotorcycleLicensePlate();
});

document.getElementById('deleteButtonMotorcycle').addEventListener('click', function (event) {
    event.preventDefault();
    searchMotorcycleLicensePlate();
});