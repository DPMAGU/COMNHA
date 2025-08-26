import React, { useState, useMemo, useRef } from 'react';
import { menuItems, categories, MenuItem } from '../data/menuData';

export default function Menu() {
  // State lưu category đang chọn, mặc định là 'all' (tất cả)
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // State lưu từ khóa tìm kiếm
  const [searchTerm, setSearchTerm] = useState<string>('');
  // State lưu số lượng món ăn hiển thị (mặc định 12)
  const [visibleCount, setVisibleCount] = useState(12);

  // Dữ liệu ảnh cho slider
  const images = [
    
    {
      src: '/anh.jpg',
      caption: (
        <div>
          
          <div className="flex justify-center space-x-4 text-cream/80 text-base mb-2">
            <p>Món ngon đa dạng - Giá cả bình dân</p>
          </div>
          <div className="flex justify-center space-x-6 text-cream/60">
            <a href="tel:0708866767" className="hover:text-white transition-colors">
              <i className="fas fa-phone mr-2"></i>070 286 6767
            </a>
            <a
              href="https://zalo.me/0702866767"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-messenger mr-2"></i>Zalo
            </a>
          </div>
          <div className="text-center mt-2 text-cream/70 text-sm italic">Giờ hoạt động: 9h - 20h</div>
        </div>
      ),
    },
    { src: 'ANH-QUAN/anh-ngoai-san.jpg',  caption: (
      <div>

        <div className="flex justify-center space-x-4 text-cream/80 text-base mb-2">
          <p>Chỗ để xe rộng rãi - xe khách đậu thoải mái</p>
        </div>
        <div className="flex justify-center space-x-6 text-cream/60">
          <a href="tel:0708866767" className="hover:text-white transition-colors">
            <i className="fas fa-phone mr-2"></i>070 286 6767
          </a>
          <a
            href="https://zalo.me/0702866767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-facebook-messenger mr-2"></i>Zalo
          </a>
        </div>
        <div className="text-center mt-2 text-cream/70 text-sm italic">Giờ hoạt động: 9h - 20h</div>
      </div>
    ),
    },
    { src: 'ANH-QUAN/khong-gian-ben-trong.jpg', caption: (
      <div>

        <div className="flex justify-center space-x-4 text-cream/80 text-base mb-2">
          <p>Không gian mở - ấm cúng thoải mái</p>
        </div>
        <div className="flex justify-center space-x-6 text-cream/60">
          <a href="tel:0708866767" className="hover:text-white transition-colors">
            <i className="fas fa-phone mr-2"></i>070 286 6767
          </a>
          <a
            href="https://zalo.me/0702866767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-facebook-messenger mr-2"></i>Zalo
          </a>
        </div>
        <div className="text-center mt-2 text-cream/70 text-sm italic">Giờ hoạt động: 9h - 20h</div>
      </div>
    ),
    },
    { src: 'ANH-QUAN/phong-lanh.jpg', caption: (
      <div>

        <div className="flex justify-center space-x-4 text-cream/80 text-base mb-2">
          <p>Phòng lạnh hiện đại, rộng rãi,không gian riêng tư và thoải mái cho các đoàn khách</p>
        </div>
        <div className="flex justify-center space-x-6 text-cream/60">
          <a href="tel:0708866767" className="hover:text-white transition-colors">
            <i className="fas fa-phone mr-2"></i>070 286 6767
          </a>
          <a
            href="https://zalo.me/0702866767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-facebook-messenger mr-2"></i>Zalo
          </a>
        </div>
        <div className="text-center mt-2 text-cream/70 text-sm italic">Giờ hoạt động: 9h - 20h</div>
      </div>
    ),
    },
  ];

  // State lưu index của ảnh đang hiển thị trên slider
  const [currentIndex, setCurrentIndex] = useState(0);
  // Ref tới container slider để điều khiển scroll
  const sliderRef = useRef<HTMLDivElement>(null);

  // Hàm cuộn slider đến ảnh ở vị trí index
  const scrollToIndex = (index: number) => {
    const container = sliderRef.current;
    if (container) {
      const width = container.clientWidth; // chiều rộng container = chiều rộng 1 ảnh
      container.scrollTo({
        left: width * index,
        behavior: 'smooth',
      });
    }
  };

  // Hàm xử lý click nút trái, chuyển ảnh trước đó
  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Hàm xử lý click nút phải, chuyển ảnh kế tiếp
  const scrollRight = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Lọc món ăn theo category và từ khóa tìm kiếm
  const filteredItems = useMemo(() => {
    let filtered = menuItems;
    if (activeCategory !== 'all') {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [activeCategory, searchTerm]);

  // Lấy số lượng món ăn hiển thị giới hạn
  const visibleItems = filteredItems.slice(0, visibleCount);

  // Format tiền VNĐ
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  // Hiển thị giá món ăn (có thể nhiều size)
  const renderPrices = (item: MenuItem) => {
    if (item.prices.regular) {
      return (
        <div className="flex justify-between items-center text-sm">
          <span className="text-cream/60">Giá</span>
          <span className="text-orange-accent font-semibold">{formatPrice(item.prices.regular)}</span>
        </div>
      );
    }
    return (
      <>
        {item.prices.small && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-cream/60">Nhỏ</span>
            <span className="text-orange-accent font-semibold">{formatPrice(item.prices.small)}</span>
          </div>
        )}
        {item.prices.medium && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-cream/60">Vừa</span>
            <span className="text-orange-accent font-semibold">{formatPrice(item.prices.medium)}</span>
          </div>
        )}
        {item.prices.large && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-cream/60">Lớn</span>
            <span className="text-orange-accent font-semibold">{formatPrice(item.prices.large)}</span>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="bg-wood-dark text-cream font-inter min-h-screen">
      {/* Header cố định trên đầu trang */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-wood-dark/95 backdrop-blur-sm border-b border-golden/20">
        <div className="container mx-auto px-3 md:px-4 py-3">
          {/* Logo và nút đặt món qua Zalo */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <img src="/LOGO-COM.jpg" alt="Logo cơm" className="w-10 h-10 object-contain rounded-full" />
              <h1 className="text-golden text-xl font-bold ">CƠM NHÀ</h1>
            </div>
            <a
              href="https://zalo.me/0702866767"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <i className="fab fa-facebook-messenger mr-2"></i>
              Đặt món qua Zalo
            </a>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Bạn đang cần tìm..."
              className="w-full bg-wood-light border border-golden/30 rounded-lg px-4 py-2 pl-10 text-cream placeholder-cream/60 focus:outline-none focus:border-golden"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-golden/60"></i>
          </div>

          {/* Nút chọn category */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-golden text-[#8B4513]'
                    : 'bg-wood-light border border-golden/30 text-golden hover:bg-golden hover:text-[#8B4513]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Nội dung chính */}
      <main className="pt-60 pb-8">
        <div className="container mx-auto px-3 md:px-4">
          {/* Slider ảnh */}
          <section className="mb-12 relative -mx-3 md:-mx-4">
            <div className="relative w-full overflow-hidden">
              {/* Nút điều khiển sang trái */}
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-wood-dark/40 text-yellow-400 text-4xl p-2 rounded-full hover:scale-125 transition"
                aria-label="Scroll left"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              {/* Container chứa ảnh slider */}
              <div
                ref={sliderRef}
                className="flex transition-all duration-500 ease-in-out overflow-hidden w-full"
                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
              >
                {images.map(({ src, caption }, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-64 md:h-[400px] object-cover"
                    />
                    {/* Chú thích ảnh */}
                    <div className="text-center text-golden italic mt-2">{caption}</div>
                  </div>
                ))}
              </div>

              {/* Nút điều khiển sang phải */}
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-wood-dark/40 text-yellow-400 text-4xl p-2 rounded-full hover:scale-125 transition"
                aria-label="Scroll right"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
             {/* Indicator dots - chấm nhỏ dưới ảnh, căn giữa */}
              <div className="flex justify-center space-x-3 mt-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      scrollToIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-red-500' : 'bg-yellow-400'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            



          </section>

          {/* Phần hiển thị menu món ăn */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-golden mb-6 text-center">MENU</h3>
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-cream/60 text-lg">Không tìm thấy món ăn phù hợp</p>
              </div>
            ) : (
              <>
                {/* Grid hiển thị các món ăn */}
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {visibleItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-wood-light/60 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-golden/20 hover:border-golden/40 transition-all"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-square object-cover rounded-lg mb-2 md:mb-4 transform transition duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
                      />
                      <h4 className="text-sm md:text-lg font-semibold text-golden mb-1 md:mb-2 leading-tight">{item.name}</h4>
                      <p className="text-cream/70 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">{item.description}</p>
                      <div className="text-xs md:text-sm">{renderPrices(item)}</div>
                    </div>
                  ))}
                </div>

                {/* Nút Xem thêm */}
                {visibleCount < filteredItems.length && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setVisibleCount(visibleCount + 10)}
                      className="px-6 py-2 bg-golden text-[#5A3E1B] font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      Xem thêm
                    </button>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Thông tin quán */}
          <section className="mb-12">
            <div className="bg-wood-light/40 backdrop-blur-sm rounded-xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-6 text-center">THÔNG TIN QUÁN</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>Địa chỉ
                  </h4>
                  <p className="text-cream/80 mb-4">
                    Số 10 Nhánh Số 4, Lý Thái Tổ nối dài, P. Long Xuyên, TP. An Giang
                  </p>

                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-clock mr-2"></i>Giờ mở cửa
                  </h4>
                  <p className="text-cream/80">Thứ 2 - Chủ nhật: 08:00 - 20:00</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-phone mr-2"></i>Liên hệ
                  </h4>
                  <p className="text-cream/80 mb-4">
                    <a href="tel:0708866767" className="hover:text-golden transition-colors">
                      070 286 6767
                    </a>
                  </p>

                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-utensils mr-2"></i>Đặc sản
                  </h4>
                  <p className="text-cream/80">
                    Món ăn miền Tây, hương vị truyền thống, tươi ngon mỗi ngày
                  </p>
                </div>
              </div>
            </div>
          </section>

{/* Lời chào kết */}
<section className="text-center mb-12">
  <div className="relative h-48 rounded-xl overflow-hidden mb-6">
    <img
      src="/ANH-QUAN/anh-ngoai-san.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400"
      alt="Mekong Delta landscape with boats"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-wood-dark/60 flex items-center justify-center">
      <div className="text-center">
        {/* Có thể thêm nội dung chào ở đây */}
      </div>
    </div>
  </div>

  <h3 className="text-2xl font-bold text-golden mb-2">Hẹn Gặp Lại Quý Khách!</h3>
  <div className="text-lg text-cream/80 max-w-2xl mx-auto">
    <p className="text-cream italic">
      Giữa muôn vàn lựa chọn cảm ơn quý khách đã tin tưởng và ủng hộ Cơm Nhà!
    </p>
  </div>
</section>

</div>
</main>

{/* Footer */}
<footer className="bg-wood-dark/80 border-t border-golden/20 py-8">
  <div className="container mx-auto px-4 text-center">
    <div className="flex justify-center items-center mb-4">
       
      <h2 className="text-2xl font-bold text-golden">CƠM NHÀ</h2>
    </div>
    <p className="text-cream/60 mb-4">Hương vị miền Tây - Ấm cúng như nhà</p>

    {/* Liên kết liên hệ */}
    <div className="flex justify-center space-x-6 text-cream/60">
      <a href="tel:0708866767" className="hover:text-golden transition-colors">
        <i className="fas fa-phone mr-2"></i>070 286 6767
      </a>
      <a href="https://zalo.me/0702866767" target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors">
        <i className="fab fa-facebook-messenger mr-2"></i>Zalo
      </a>
    </div>

    <p className="text-cream/40 mt-6 text-sm">&copy; 2025 Cơm Nhà - Bản quyền thuộc về Cơm Nhà</p>
  </div>
</footer>
</div>
);
}
