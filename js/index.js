const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');


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