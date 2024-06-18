const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');


const data = {
  image: [
    {
      id: 1,
      image:"img/anh1.webp",
      name:"ĐC471" ,
      price: "4.900.000 đ",
    },
    {
      id: 2,
      image:"img/anh3.webp",
      name:"ĐC470" ,
      price: "3.900.000 đ",
    },
    {
      id: 3,
      image:"img/anh5.webp",
      name:"ĐC472" ,
      price: "3.900.000 đ",
    },
    {
      id: 4,
      image:"img/anh7.webp",
      name:"ĐC474" ,
      price: "1.200.000 đ",
    },
    {
      id: 5,
      image:"img/anh9.webp",
      name:"ĐC469" ,
      price: "4.190.000 đ",
    },
    {
      id: 6,
      image:"img/anh11.webp",
      name:"ĐC466" ,
      price: "4.200.000 đ",
    },
    {
      id: 7,
      image:"img/anh13.webp",
      name:"ĐC467" ,
      price: "3.800.000 đ",
    },
    {
      id: 8,
      image:"img/anh16.webp",
      name:"ĐC480" ,
      price: "3.200.000 đ",
    },
    {
      id: 9,
      image:"img/anh19.webp",
      name:"ĐC468" ,
      price: "4.300.000 đ",
    },
    {
      id: 10,
      image:"img/anh21.webp",
      name:"ĐC476" ,
      price: "2.990.000 đ",
    },
  ]
}

// Lắng nghe sự kiện nhập vào ô tìm kiếm
searchInput.addEventListener('input', function() {
// Lấy giá trị tìm kiếm hiện tại
const searchTerm = searchInput.value.toLowerCase();
// Lọc dữ liệu và hiển thị kết quả
const filteredData = filterData(searchTerm);
displayResults(filteredData);
});
 // Hàm lọc dữ liệu theo từ khóa tìm kiếm
 function filterData(searchTerm) {
  // Dữ liệu giả để demo (thay thế bằng dữ liệu thực tế của bạn)
  const data = ['ĐC471', 'ĐC470', 'ĐC472', 'ĐC474', 'ĐC469','ĐC466', 'ĐC467', 'ĐC480','ĐC468', 'ĐC476'];

  // Lọc dữ liệu
  const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));

  return filteredData;
}

// Hàm hiển thị kết quả tìm kiếm
function displayResults(data) {
  // Xóa nội dung cũ trong danh sách kết quả
  dropdown.innerHTML = '';

  // Thêm kết quả tìm kiếm vào danh sách
  if (data.length > 0) {
    for (const item of data) {
      const dropdownItem = document.createElement('div');
      dropdownItem.classList.add('dropdown-item');
      dropdownItem.textContent = item;

      dropdownItem.addEventListener('click', function() {
        // Xử lý khi người dùng chọn một kết quả
        searchInput.value = item;
        dropdown.style.display = 'none';
      });

      dropdown.appendChild(dropdownItem);
    }

    // Hiển thị danh sách kết quả
    dropdown.style.display = 'block';
  } else {
    // Hiển thị thông báo không tìm thấy kết quả
    const dropdownItem = document.createElement('div');
    dropdownItem.classList.add('dropdown-item');
    dropdownItem.textContent = 'Không tìm thấy kết quả';
    dropdown.appendChild(dropdownItem);
  }
}