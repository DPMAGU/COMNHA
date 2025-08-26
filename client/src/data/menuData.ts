export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  prices: {
    small?: number;
    medium?: number;
    large?: number;
    regular?: number;
  };
}

export const menuItems: MenuItem[] = [
  // Món Kho Category
  {
    id: "ba-roi-heo-kho-tieu",
    name: "Ba Rọi Heo Kho Tiêu",
    description: "Thịt ba rọi kho cùng tiêu xanh, béo mềm, cay nồng, đưa cơm.",
    category: "kho",
    image: "/MONKHO/ba-roi-kho-tieu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ca-hu-kho-tieu",
    name: "Cá Hú Kho Tiêu",
    description: "Cá hú kho liu riu với tiêu cay thơm lừng, ăn với cơm nêu rất ngon",
    category: "kho",
    image: "/MONKHO/ca-hu-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ca-loc-kho-tieu",
    name: "Cá Lóc Kho Tiêu",
    description: "Cá lóc kho liu riu với tiêu cay thơm lừng",
    category: "kho",
    image: "/MONKHO/ca-loc-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ca-ro-kho-tieu",
    name: "Cá Rô Kho Tiêu",
    description: "Cá rô kho liu riu với tiêu cay thơm lừng",
    category: "kho",
    image: "/MONKHO/ca-ro-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "vit-kho-rung",
    name: "Vịt Kho Rừng",
    description: "Thịt vịt kho mềm, thơm vị gừng, đậm đà đưa cơm",
    category: "kho",
    image: "/MONKHO/vit-kho-rung.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ga-xao-sa-ot",
    name: "Gà Xào Sả Ớt",
    description: "Thịt gà xào săn, thơm sả ớt, hấp dẫn khó cưỡng.",
    category: "kho",
    image: "/MONKHO/ga-xao-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "mam-chung",
    name: "Mắm Chưng",
    description: "Mắm chưng là một món ăn đặc trưng của miền Tây, kết hợp với thịt heo xay, trứng, gia vị",
    category: "kho",
    image: "/MONKHO/mam-chung.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ca-he-kho-reu",
    name: "Cá He Kho Rệu",
    description: "Cá he kho rệu dân dã, béo mềm, vị mặn mà đưa cơm",
    category: "kho",
    image: "/MONKHO/ca-he-kho-reu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ca-bien-kho-ca",
    name: "Cá Biển Kho Cà",
    description: "Cá biển kho với cà chua, vị mặn mà xen chút chua nhẹ, ăn kèm cơm nóng ngon hết sẩy",
    category: "kho",
    image: "/MONKHO/ca-bien-kho-ca.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "thit-kho-hot-vit",
    name: "Thịt Kho Hột Vịt",
    description: "Thịt ba rọi kho hột vịt, béo thơm, nước màu óng ánh, chan cơm nóng ăn no mà nhớ hoài vị quê",
    category: "kho",
    image: "/MONKHO/thit-kho-hot-vit.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "tom-kho-to",
    name: "Tôm Kho Tộ",
    description: "Tôm kho tộ, thịt chắc ngọt, rim mặn mà",
    category: "kho",
    image: "/MONKHO/tom-kho-to.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "luon-kho-sa-ot",
    name: "Lươn Kho Sả Ớt",
    description: "Thịt lươn béo mềm, quyện vị cay nồng của sả ớt, mặn ngọt hài hòa",
    category: "kho",
    image: "/MONKHO/luon-kho-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "tep-ram-man",
    name: "Tép Ram Mặn",
    description: "Tép đồng ram mặn, rim săn chắc, mằn mặn đậm đà",
    category: "kho",
    image: "/MONKHO/tep-ram-man.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "ech-xao-sa-ot",
    name: "Ếch Xào Sả ",
    description: "Thịt ếch săn chắc, xào sả ớt cay nồng thơm lừng, ngon cơm hết ý",
    category: "kho",
    image: "/MONKHO/ech-xao-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  {
    id: "suon-heo-ram-man",
    name: "Sườn Heo Ram Mặn",
    description: "Sườn heo rim mặn ngọt, đậm đà",
    category: "kho",
    image: "/MONKHO/suon-heo-ram-man.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 115000,
      large: 160000
    }
  },
  // Món Xào Category
  {
    id: "rau-luoc",
    name: "Rau Luộc",
    description: "Đĩa rau luộc thanh đạm, xanh mướt, giữ nguyên vị ngọt tự nhiên của rau",
    category: "xao",
    image:  "/MONXAO/rau-luoc-2.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 40000,
      medium: 60000,
      large: 90000
    }
  },
  {
    id: "cai-thia-xao-toi",
    name: "Cải Thìa Xào Tỏi",
    description: "Cải thìa tươi xanh, xào cùng tỏi phi thơm lừng, giữ vị ngọt giòn tự nhiên của rau",
    category: "xao",
    image: "/MONXAO/cai-thia-xao-toi.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 40000,
      medium: 60000,
      large: 90000
    }
  },
  {
    id: "kho-qua-xao-trung",
    name: "Khổ Qua Xào Trứng",
    description: "Khổ qua tươi xanh, xào cùng trứng vàng ươm, hấp dẫn thơm ngon",
    category: "xao",
    image: "/MONXAO/kho-qua-xao-trung.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 40000,
      medium: 60000,
      large: 90000
    }
  },
  {
    id: "bong-cai-xao-bo",
    name: "Bông Cải Xào Bò",
    description: "Thịt bò mềm ngọt, xào cùng bông cải xanh giòn tươi, thấm vị đậm đà",
    category: "xao",
    image: "/MONXAO/bong-cai-xao-bo.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 80000,
      medium: 120000,
      large: 160000
    }
    
  },
  {
    id: "bong-dien-dien-xao-tep",
    name: "Bông Điên Điển Xào Tép",
    description: "Bông điên điển vàng ươm, giòn nhẹ, xào cùng tép tươi ngọt, đậm chất miền Tây",
    category: "xao",
    image: "/MONXAO/bong-dien-dien-xao-tep.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 80000,
      large: 120000
    }
  },
  {
    id: "ca-tim-xao-toi",
    name: "Cà Tím Xào Tỏi",
    description: "Cà tím mềm ngọt, thấm đẫm hương vị tỏi phi thơm lừng",
    category: "xao",
    image: "/MONXAO/ca-tim-xao-toi.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 40000,
      medium: 60000,
      large: 90000
    }
  },
  {
    id: "muc-xao-chua-ngot",
    name: "Mực Xào Chua Ngọt",
    description: "Mực tươi giòn ngọt, xào cùng rau củ tươi và sốt chua ngọt đậm đà",
    category: "xao",
    image: "/MONXAO/muc-xao-chua-ngot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 120000,
      large: 160000
    }
  },
  {
    id: "bong-thien-ly-xao-thit-bo",
    name: "Bông Thiên Lý Xào Thịt Bò",
    description: "Bông thiên lý xanh non, giòn ngọt, xào cùng thịt bò mềm thơm",
    category: "xao",
    image: "/MONXAO/thit-bo-xao-bong-thien-ly.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 120000,
      large: 160000
    }
  },
  
  // Lẩu Mắm Category
  {
    id: "lau-mam",
    name: "Lẩu Mắm Đặc Biệt",
    description: "Hương vị lẩu đậm đà, ăn kèm thịt, tôm, cá và rau",
    category: "laumam",
    image: "/MONKHO/lau-mam.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 220000,
      medium: 269000,
      large: 350000
    }
  },

  // Món Canh Category
  {
    id: "kho-qua-don-thit",
    name: "Khổ Qua Dồn Thịt",
    description: "Khổ qua dồn thịt được hầm mềm, đậm đà, bổ dưỡng",
    category: "canh",
    image: "/MONCANH/kho-qua-don-thit.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-ca-loc-nau-bau",
    name: "Canh Cá Lóc Nấu ",
    description: "Cá lóc tươi ngọt, nấu cùng bầu non mềm, thơm ngon",
    category: "canh",
    image: "/MONCANH/canh-ca-loc-nau-bau.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-chua-ca-bop",
    name: "Canh Chua Cá Bóp",
    description: "Cá bóp tươi dai,canh chua đậm vị thơm ngon",
    category: "canh",
    image: "/MONCANH/canh-chua-ca-bop.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 150000,
      large: 220000
    }
  },
  {
    id: "canh-chua-ca-tam",
    name: "Canh Chua Cá Tầm",
    description: "Cá tầm tươi ngon, kết hợp nước dùng chua ngọt",
    category: "canh",
    image: "/MONCANH/canh-chua-ca-tam.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 150000,
      large: 220000
    }
  },
 
  {
    id: "canh-chua-ca-bong-lao",
    name: "Canh Chua Cá Bông Lao ( Đặc biệt)",
    description: "Cá bông lao tươi ngon, kết hợp nước dùng chua ngọt",
    category: "canh",
    image: "/MONCANH/kho-qua-don-thit.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 90000,
      medium: 150000,
      large: 200000
    }
  },
  {
    id: "canh-cai-xoang-nau-thit-bam",
    name: "Canh Cải Xoang Thịt Bầm",
    description: "Canh thanh mát từ cải xoong tươi kết hợp thịt bằm mềm",
    category: "canh",
    image: "/MONCANH/canh-xa-lach-xoong-thit-bam.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-chua-ca-loc",
    name: "Canh Chua Cá Lóc",
    description: "Cá lóc tươi ngon, kết hợp nước dùng chua ngọt, đậm đà",
    category: "canh",
    image: "/MONCANH/canh-chua-ca-loc.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-khoai-mo",
    name: "Canh Khoai Mỡ ",
    description: "khoai mỡ ngọt bùi hòa quyện cùng thịt bầm thơm ngon",
    category: "canh",
    image: "/MONCANH/canh-khoai-mo.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-chua-ca-hu-ca-ba-sa",
    name: "Canh Chua Cá Hú - Cá Ba Sa",
    description: "Cá hú tươi, kết hợp nước dùng chua ngọt, đậm đà",
    category: "canh",
    image: "/MONCANH/canh-chua-ca-hu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "cha-ca-thac-lac-nau-kho-qua",
    name: "Chả Cá Thác Lác Nấu Khổ Qua ",
    description: "Vị đắng nhẹ của khổ qua hòa quyện cùng vị ngọt dai của chả cá thác lác",
    category: "canh",
    image: "/MONCANH/cha-ca-that-lat.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  {
    id: "canh-chua-ca-chim",
    name: "Canh Chua Cá Chim",
    description: "Thịt cá chim béo ngọt,kết hợpcanh chua đậm đà",
    category: "canh",
    image: "/MONCANH/canh-chua-ca-chim.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
      medium: 110000,
      large: 150000
    }
  },
  

  // Món Chiên Category
  {
    id: "suon-heo-chien-sa",
    name: "Sườn Heo Chiên Sả",
    description: "Sườn chiên mềm ngon đậm vị, cực đưa cơm",
    category: "chien",
    image: "MONCHIEN/suon-heo-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  
  {
    id: "ca-ba-sa-chien-sa",
    name: "Cá Ba Sa Chiên Sả",
    description: "Cá ba sa mềm , thơm mùi sả đặc trưng",
    category: "chien",
    image: "/MONCHIEN/ca-ba-sa-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "ca-dieu-hong-chien-sot-ca",
    name: "Cá Điêu Hồng Chiên Sốt Cà",
    description: "Cá chiên giòn, sốt cà chua đậm đà, chua ngọt hài hòa",
    category: "chien",
    image: "MONCHIEN/ca-dieu-hong-chien-sot-ca.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "cha-ca-thac-lac-chien",
    name: "Chả Cá Thác Lác Chiên",
    description: "Miếng chả cá dai, nóng hổi và thơm phức",
    category: "chien",
    image: "MONCHIEN/cha-ca-thac-lac-chien.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "ba-roi-chien-sa",
    name: "Ba Rọi Chiên Sả",
    description: "Thịt bên ngoài giòn, bên trong mềm ngọt thơm ngon",
    category: "chien",
    image: "MONCHIEN/ba-roi-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "kho-ca-loc-chien",
    name: "Khô Cá Lóc Chiên",
    description: "Khô chiên vàng ươm, ăn cùng cơm rất ngon",
    category: "chien",
    image: "MONCHIEN/kho-ca-loc-chien.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "kho-ca-sac-chien",
    name: "Khô Cá Sặc Chiên",
    description: "Khô chiên vàng ươm, ăn cùng cơm rất ngon",
    category: "chien",
    image: "MONCHIEN/kho-ca-sac-chien.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "ca-bien-chien-sa",
    name: "Cá Biển Chiên Sả",
    description: "Cá chiên vàng ươm, ăn cùng cơm rất ngon",
    category: "chien",
    image: "MONCHIEN/ca-huong-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      small: 60000,
        medium: 110000,
        large: 140000
    }
  },
  {
    id: "trung-chien-ca",
    name: "Trứng Chiên Cà",
    description: "Trứng chiên với cà chua, thơm ngon",
    category: "chien",
    image: "/MONCHIEN/trung-chien-ca.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      medium: 40000,
      large: 90000
    }
  },
  // Giải Khát Category
  {
    id: "tra-da",
    name: "Trà Đá",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/tra-da.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 2000
    }
  },
  {
    id: "nuoc-suoi",
    name: "Nước Suối",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/nuoc-suoi.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 10000
    }
  },
  {
    id: "nuoc-mat",
    name: "Nước Mát",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/nuoc-mat.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 10000
    }
  },
  {
    id: "nuoc-ngot",
    name: "Nước Ngọt",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/nuoc-ngot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 15000
    }
  },
  {
    id: "nuoc-ep-cam",
    name: "Nước Ép Cam",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/ep-cam.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 20000
    }
  },
  {
    id: "nuoc-ep-dua-hau",
    name: "Nước Ép Dưa Hấu",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/dua-hau.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 20000
    }
  },
  {
    id: "bia-corona",
    name: "Bia Corona 250ml",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/bia-corona.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 36000
    }
  },
  {
    id: "bia-heineken",
    name: "Bia Heineken 250ml",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/bia-haineken.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 22000
    }
  },
  {
    id: "bia-blanc",
    name: "Bia BlanC 1664",
    description: "",
    category: "giaikhat",
    image: "/GIAIKHAT/bia-blanc.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 22000
    }
  },
  // CƠM DĨA Category
  {
    id: "ba-roi-heo-kho-tieu-phan",
    name: "Ba Rọi Heo Kho Tiêu",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ba-roi-kho-tieu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ca-hu-kho-tieu-phan",
    name: "Cá Hú Kho Tiêu",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ca-hu-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ca-loc-kho-tieu-phan",
    name: "Cá Lóc Kho Tiêu",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ca-loc-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ca-ro-kho-tieu-phan",
    name: "Cá Rô Kho Tiêu",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ca-ro-kho.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "vit-kho-rung-phan",
    name: "Vịt Kho Rừng",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/vit-kho-rung.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ga-xao-sa-ot-phan",
    name: "Gà Xào Sả Ớt",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ga-xao-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "mam-chung-phan",
    name: "Mắm Chưng",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/mam-chung.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ca-he-kho-reu-phan",
    name: "Cá He Kho Rệu",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ca-he-kho-reu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 40000
    }
  },
  {
    id: "ca-bien-kho-ca-phan",
    name: "Cá Biển Kho Cà",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ca-bien-kho-ca.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "thit-kho-hot-vit-phan",
    name: "Thịt Kho Hột Vịt",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/thit-kho-hot-vit.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "tom-kho-to-phan",
    name: "Tôm Kho Tộ",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/tom-kho-to.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 50000
    }
  },
  {
    id: "luon-kho-sa-ot-phan",
    name: "Lươn Kho Sả Ớt",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/luon-kho-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "tep-ram-man-phan",
    name: "Tép Ram Mặn",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/tep-ram-man.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ech-xao-sa-ot-phan",
    name: "Ếch Xào Sả ",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/ech-xao-sa-ot.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "suon-heo-ram-man-phan",
    name: "Sườn Heo Ram Mặn",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONKHO/suon-heo-ram-man.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 50000
    }
  },
  {
    id: "suon-heo-chien-sa-phan",
    name: "Sườn Heo Chiên Sả",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/suon-heo-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 50000
    }
  },

  {
    id: "ca-ba-sa-chien-sa-phan",
    name: "Cá Ba Sa Chiên Sả",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONCHIEN/ca-ba-sa-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ca-dieu-hong-chien-sot-ca-phan",
    name: "Cá Điêu Hồng Sốt Cà",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/ca-dieu-hong-chien-sot-ca.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "cha-ca-thac-lac-chien-phan",
    name: "Chả Cá Thác Lác Chiên",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/cha-ca-thac-lac-chien.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  {
    id: "ba-roi-chien-sa-phan",
    name: "Ba Rọi Chiên Sả",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/ba-roi-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 40000
    }
  },
  {
    id: "kho-ca-loc-chien-phan",
    name: "Khô Cá Lóc Chiên",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/kho-ca-loc-chien.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 40000
    }
  },
  {
    id: "kho-ca-sac-chien-phan",
    name: "Khô Cá Sặc Chiên",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/kho-ca-sac-chien.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 45000
    }
  },
  {
    id: "ca-bien-chien-sa-phan",
    name: "Cá Biển Chiên Sả",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "MONCHIEN/ca-huong-chien-sa.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
       regular: 40000
    }
  },
  {
    id: "trung-chien-ca-phan",
    name: "Trứng Chiên Cà",
    description: "1 Phần bao gồm : Cơm + Món mặn + Súp",
    category: "comdia",
    image: "/MONCHIEN/trung-chien-ca.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 40000
    }
  },
  // Món Thêm Category
  {
    id: "com-trang",
    name: "Cơm Trắng Tô",
    description: "Dùng chung với món mặn và canh",
    category: "monthem",
    image: "/MONTHEM/com-trang.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 20000
    }
  },
  {
    id: "com-nieu",
    name: "Cơm Niêu ",
    description: "Dùng chung với món mặn và canh",
    category: "monthem",
    image: "/MONTHEM/com-nieu.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    prices: {
      regular: 18000
    }
  },
];

export const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'kho', name: 'Món Kho' },
  { id: 'xao', name: 'Món Xào' },
  { id: 'laumam', name: 'Lẩu Mắm' },
  { id: 'canh', name: 'Món Canh' },
  { id: 'chien', name: 'Món Chiên' },
  { id: 'comdia', name: 'Cơm Dĩa' },
  { id: 'monthem', name: 'Món Thêm' },
   { id: 'giaikhat', name: 'Giải Khát' }
];
