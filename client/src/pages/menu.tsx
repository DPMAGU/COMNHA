import { useState, useMemo } from 'react';
import { menuItems, categories, MenuItem } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  const renderPrices = (item: MenuItem) => {
    if (item.prices.regular) {
      return (
        <div className="flex justify-between items-center text-sm">
          <span className="text-cream/60">Thường</span>
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
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-wood-dark/95 backdrop-blur-sm border-b border-golden/20">
        <div className="container mx-auto px-3 md:px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <i className="fas fa-bowl-rice text-golden text-2xl"></i>
              <h1 className="text-golden text-2xl font-bold">CƠM NHÀ</h1>
            </div>
            <a 
              href="https://zalo.me/0702866767" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-accent hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <i className="fab fa-facebook-messenger mr-2"></i>
              Đặt hàng qua Zalo
            </a>
          </div>
          
          {/* Search Bar */}
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
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-golden text-wood-dark'
                    : 'bg-wood-light border border-golden/30 text-golden hover:bg-golden hover:text-wood-dark'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-40 pb-8">
        <div className="container mx-auto px-3 md:px-4">
          
          {/* Restaurant Intro */}
          <section className="mb-12 text-center">
            {/* Restaurant ảnh chính */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-6 mt-10">
              <img 
                src="/anh.jpg" 
                alt="Traditional Vietnamese restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wood-dark/40 flex items-center justify-center">
                <div className="text-center">
                  {/* <h2 className="text-4xl font-bold text-golden mb-2">Cơm Nhà Miền Tây</h2>
                  <p className="text-xl text-cream">Hương vị quê nhà, ấm cúng bên gia đình</p>*/} 
                </div>
              </div>
            </div>
            {/*
              <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
                Thưởng thức những món ăn đậm đà hương vị miền Tây, được chế biến từ những nguyên liệu tươi ngon nhất từ vùng đất Cửu Long.  
                Không gian ấm cúng, phục vụ tận tình như ở nhà.
              </p>
            */}

          </section>

          {/* Menu Grid */}
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-golden mb-6 text-center">MENU</h3>
            
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-cream/60 text-lg">Không tìm thấy món ăn phù hợp</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-wood-light/60 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-golden/20 hover:border-golden/40 transition-all"
                  >
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-square object-cover rounded-lg mb-2 md:mb-4"
                    />
                    <h4 className="text-sm md:text-lg font-semibold text-golden mb-1 md:mb-2 leading-tight">{item.name}</h4>
                    <p className="text-cream/70 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">{item.description}</p>
                    <div className="text-xs md:text-sm">
                      {renderPrices(item)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Restaurant Info */}
          <section className="mb-12">
            <div className="bg-wood-light/40 backdrop-blur-sm rounded-xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-6 text-center">THÔNG TIN QUÁN</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    Địa chỉ
                  </h4>
                  <p className="text-cream/80 mb-4">Số 7 Nguyễn Sơn 4, Lý Thái Tổ Mỹ Đại, P. Long Xuyên, TP. An Giang</p>
                  
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    Giờ mở cửa
                  </h4>
                  <p className="text-cream/80">Thứ 2 - Chủ nhật: 6:00 - 22:00</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-phone mr-2"></i>
                    Liên hệ
                  </h4>
                  <p className="text-cream/80 mb-4">
                    <a href="tel:0708866767" className="hover:text-golden transition-colors">070 286 6767</a>
                  </p>
                  
                  <h4 className="text-lg font-semibold text-golden mb-4 flex items-center">
                    <i className="fas fa-utensils mr-2"></i>
                    Đặc sản
                  </h4>
                  <p className="text-cream/80">Món ăn miền Tây, hương vị truyền thống, tươi ngon mỗi ngày</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="text-center mb-12">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img 
                src="https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400" 
                alt="Mekong Delta landscape with boats" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wood-dark/60 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-golden mb-2">Hẹn Gặp Lại Quý Khách!</h3>
                  <p className="text-cream">Cảm ơn quý khách đã tin tưởng và ủng hộ Cơm Nhà</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Với tâm huyết mang đến những món ăn ngon nhất từ miền Tây, chúng tôi luôn chào đón quý khách như người thân trong gia đình.
              Hãy ghé thăm và trải nghiệm hương vị quê nhà tại Cơm Nhà!
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-wood-dark/80 border-t border-golden/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <i className="fas fa-utensils text-golden text-3xl mr-3"></i>
            <h2 className="text-2xl font-bold text-golden">CƠM NHÀ</h2>
          </div>
          <p className="text-cream/60 mb-4">Hương vị miền Tây - Ấm cúng như nhà</p>
          <div className="flex justify-center space-x-6 text-cream/60">
            <a href="tel:0708866767" className="hover:text-golden transition-colors">
              <i className="fas fa-phone mr-2"></i>070 286 6767
            </a>
            <a href="https://zalo.me/0702866767" target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors">
              <i className="fab fa-facebook-messenger mr-2"></i>Zalo
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-golden/20 text-cream/40 text-sm">
            © 2025 Cơm Nhà. Phát triển bởi TH24.
          </div>
        </div>
      </footer>
    </div>
  );
}
