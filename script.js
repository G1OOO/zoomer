let navigation = document.querySelector('.cat-btn');
let zoomer = document.querySelector('.brand');
let up = document.querySelector('.up');
let discounts = document.querySelector('.sale-btn');
let search = document.querySelector(".search-input");
let cards = document.querySelectorAll(".p-card");
let banners = document.querySelectorAll(".banner-row");
let carBtns = document.querySelectorAll(".car-btn");
let sections = document.querySelectorAll(".section");

if (up) {
  up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (zoomer) {
  zoomer.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

if (navigation) {
  navigation.addEventListener('click', () => {
    window.location.href = 'nav.html';
  });
}

if (discounts) {
  discounts.addEventListener('click', () => {
    window.location.href = 'discounts.html';
  });
}

if (search) {
  search.addEventListener("input", () => {
    let searched = search.value;
    let searching = searched !== "";

    banners.forEach(banner => {
      banner.style.display = searching ? "none" : "";
    });

    carBtns.forEach(btn => {
      btn.style.display = searching ? "none" : "";
    });

    sections.forEach(section => {
      let cards = section.querySelectorAll(".p-card");
      let hasMatch = false;

      cards.forEach(card => {
        let nameEl = card.querySelector(".p-name");
        let name = nameEl ? nameEl.textContent.toLowerCase() : "";
        let match = name.includes(searched.toLowerCase());

        card.style.display = (!searching || match) ? "" : "none";
        if (match) hasMatch = true;
      });

      section.style.display = (!searching || hasMatch) ? "" : "none";
    });
  });
}

const megaMenuData = {
  mobile: {
    columns: [
      {
        title: 'მობილურის ბრენდები',
        items: ['Apple', 'Samsung', 'Xiaomi', 'Poco', 'Google', 'Nothing', 'OnePlus', 'Realme', 'Oppo', 'Nokia', 'Motorola', 'ყველას ნახვა']
      },
      {
        title: 'ყურსასმენები Buds',
        items: ['Apple Airpods', 'Galaxy Buds', 'Xiaomi Buds', 'Sony Buds', 'Nothing Buds', 'Realme Buds', 'JBL Buds', 'OnePlus Buds', 'Marshall Buds', 'Motorola Buds', 'Buds-ის აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: 'Power banks',
        items: ['Anker', 'Ugreen', 'Xiaomi', 'ყველას ნახვა'],
        sections: [{
          title: 'მანქანის აქსესუარები',
          items: ['მანქანის დამტენი', 'მობილურის საკაზბერ', 'მანქანის საჭე', 'მანქანის კონს', 'ხონხანინები', 'ყველას ნახვა']
        }]
      },
      {
        title: 'მობილურის აქსესუარები',
        items: ['ეკრანის დამცავები', 'მობილურის საგაერთიანებელი/ფარეპერები', 'კონექტორები', 'კარდიდა', 'სათაშო ღილაკები', 'შეხსრების ბარათი', 'GPS ტრეკერები', 'კარტის დამცავები', 'სხველი ქონები', 'OTG ფლეშ მეხსიერებები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'უსადენო დამტენები',
        items: ['Apple', 'Samsung', 'Xiaomi', 'Ugreen', 'Belkin', 'Havit', 'Hoco', 'Anker', 'ყველას ნახვა']
      },
      {
        title: 'დამტენი ადაპტერი',
        items: ['Apple Adapter', 'Samsung Adapter', 'Anker Adapter', 'Spigen Adapter', 'Belkin Adapter', 'Ugreen Adapter', 'Xiaomi adapter', 'Baseus Adapter', 'ყველას ნახვა']
      },
      {
        title: 'მობილურის ჩასადგები',
        items: ['For Google', 'For Realme', 'For Apple', 'For Samsung', 'For Honor', 'For Xiaomi', 'For Oppo', 'For Motorola', 'For Nothing', 'For Oneplus', 'ყველას ნახვა']
      },
      {
        title: 'სმარტ საათები',
        items: ['Apple Watch', 'Galaxy Watch', 'Xiaomi Watch']
      }
    ]
  },
  tablet: {
    columns: [
      {
        title: 'ტაბები',
        items: ['Apple', 'Samsung', 'Xiaomi', 'Honor', 'Lenovo', 'OnePlus', 'Realme', 'ყველას ნახვა']
      },
      {
        title: 'სმარტ კლავიატურა | კალამი',
        items: ['Apple კლავიატურა', 'Apple კალამი', 'Baseus კლავიატურა', 'Baseus კალამი', 'ყველას ნახვა']
      },
      {
        title: 'ყურსასმენები',
        items: ['Headphones', 'Buds', 'Earphones', 'ყველას ნახვა']
      },
      {
        title: 'დამტენი ადაპტერი',
        items: ['Apple Adapter', 'Samsung Adapter', 'Anker Adapter', 'Spigen Adapter', 'Belkin Adapter', 'Ugreen Adapter', 'Xiaomi adapter', 'Baseus Adapter', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'HUB გადამყვანები',
        items: ['Anker', 'Xiaomi', 'Baseus', 'Apple', 'Havit', 'TP-Link', 'Belkin', 'Ugreen', 'HP', 'ყველას ნახვა']
      },
      {
        title: 'გრაფიკული ტაბები',
        items: ['XP-Pen', 'Xiaomi', 'ყველას ნახვა']
      },
      {
        title: 'Power Banks',
        items: ['Anker', 'Ugreen', 'Xiaomi', 'ყველას ნახვა']
      },
      {
        title: 'კაბელი აქსესუარები',
        items: ['ტაბის ქეისები', 'ეკრანის დამცავი', 'კონექტორები', 'OTG ფლეშ მეხსიერება', 'შემსრებების ბარათი', 'ყველას ნახვა']
      }
    ]
  },
  laptop: {
    columns: [
      {
        title: 'ბრენდები',
        items: ['Apple', 'HP', 'Asus', 'Acer', 'Lenovo', 'Honor', 'Dell', 'MSI', 'ყველას ნახვა']
      },
      {
        title: 'Wi-Fi როუტერები',
        items: ['Tp-link', 'Xiaomi', 'Ubiquiti', 'WiFi Range Extender', 'Wi-Fi & Bluetooth ადაპტერები', 'ყველას ნახვა']
      },
      {
        title: 'ყურსასმენები',
        items: ['Headphones', 'Buds', 'Earphones', 'ყველას ნახვა']
      },
      {
        title: 'ლეპტოპის აქსესუარები',
        items: ['ჩაუსმი', 'ზაკსახუნი', 'კლავიატურები', 'HUB გადამყვანები', 'განძელელით სიმებით', 'ლეპტოპის დამცევი', 'მონიტორის საჩრდილები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'Gaming ლეპტოპები',
        items: ['HP Victus | OMEN', 'ACER Nitro | Predator', 'Dell Inspiron | Alienware', 'Lenovo LEGION | LOQ', 'ASUS ROG | TUF', 'MSI Katana | Crosshair', 'ყველას ნახვა']
      },
      {
        title: 'სოფლიზე შემოთხოვნა',
        items: ['მონიტორები', 'პროექტორები', 'პრინტერები', 'All in One', 'Web კამერები', 'მაგნიტები', 'ყველას ნახვა']
      },
      {
        title: 'მეხსიერების ბარათები',
        items: ['შიდამოქმედ SSD', 'შიდამოქმედ HDD', 'მობა SSD', 'დღეგე მეხსიერებები', 'შემსრებების ბარათები', 'ყველას ნახვა']
      },
      {
        title: 'ლეპტოპის ჩანთები',
        items: ['BackPack', 'Briefcase', 'Sleeve', 'Shoulder Strap', 'ყველას ნახვა']
      },
      {
        title: 'კაბელები',
        items: ['Lightning', 'Micro USB', 'Type-C', 'HDMI კაბელები', 'LAN კაბელები', 'AUX კაბელები', 'ყველას ნახვა']
      }
    ]
  },
  audio: {
    columns: [
      {
        title: 'ბრენდები',
        items: ['Apple', 'Samsung', 'Xiaomi', 'JBL', 'Sony', 'Bose', 'Beats', 'Realme', 'Marshall', 'ყველას ნახვა']
      },
      {
        title: 'ყურსასმენები',
        items: ['Headphones', 'Buds', 'Earphones', 'Gaming', 'სპორტული', 'საბავშვო', 'ყველას ნახვა']
      },
      {
        title: 'მიკროფონები',
        items: ['სტრიმინგ მიკროფონები', 'ვიდეოენ მიკროფონები', 'ლავალეინ მიკროფონები', 'უსაფენო მიკროფონები', 'ფოტოკამერის მიკროფონები', 'ყველას ნახვა']
      },
      {
        title: 'დამტენი ადაპტერი',
        items: ['Apple Adapter', 'Samsung Adapter', 'Anker Adapter', 'Spigen Adapter', 'Belkin Adapter', 'Ugreen Adapter', 'Xiaomi adapter', 'Baseus Adapter', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'აუდიო ტექნიკა',
        items: ['პორტატული დინამიკები', 'სახლის დინამიკები', 'ფონოგრაფები', 'სმარტ აკსისტენტები', 'Soundbar', 'ყველას ნახვა']
      },
      {
        title: '',
        items: []
      },
      {
        title: 'აქსესუარები',
        items: ['Power Banks', 'დამტენი დამნებებლებელი', 'კაბელები', 'უსაფენო დამტენები', 'ყველას ნახვა']
      },
      {
        title: '',
        items: []
      }
    ]
  },
  gaming: {
    columns: [
      {
        title: 'PlayStation',
        items: ['კონსოლი', 'თამაშები', 'კონტროლერები', 'აქსესუარები', 'PlayStation VR', 'ყველას ნახვა']
      },
      {
        title: 'Gaming ლეპტოპები',
        items: ['HP Pavilion | Victus | OMEN', 'ACER Nitro | Predator', 'Dell Inspiron | Alienware', 'Lenovo LEGION | LOQ', 'ASUS ROG | TUF', 'MSI Katana | Crosshair', 'ყველას ნახვა']
      },
      {
        title: 'Gaming მონიტორები',
        items: ['Acer', 'BenQ', 'AOC', 'MSI', 'Dell', 'HP', 'Xiaomi', 'ყველას ნახვა']
      },
      {
        title: 'ვიმაინენ აქსესუარები',
        items: ['ყურსასმენები', 'მაუსები', 'კლავიატურები', 'საგამერო', 'სათამაშო სკამები', 'განსალელთელი პელების', 'დინამიკები', 'სტრიმინგ მიკროფონები', 'ვებ კამერები', 'HDMI & LAN კაბელები', 'რიგებერები', 'თრივერები', 'RGB განათება', 'მაგერები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'XBOX',
        items: ['კონსოლი', 'თამაშები', 'კონტროლერები', 'აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: 'პორტატული & VR',
        items: ['Lenovo Legion Go S', 'Steam Deck', 'Asus Rog Ally', 'Backbone', 'Meta Quest', 'ყველას ნახვა']
      },
      {
        title: 'Nintendo',
        items: ['კონსოლები', 'თამაშები', 'კონტროლერები', 'აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: '',
        items: []
      }
    ]
  },
  tv: {
    columns: [
      {
        title: 'ტელევიზორები',
        items: ['Samsung', 'Xiaomi', 'ტელევიზორის საყრდები', 'TV Soundbar', 'ყველას ნახვა']
      },
      {
        title: 'TV Stick',
        items: ['Xiaomi TV', 'Apple TV', 'Amazon Fire TV Stick', 'ყველას ნახვა']
      },
      {
        title: 'მონიტორები',
        items: ['Acer', 'DELL', 'BenQ', 'Lenovo', 'AOC', 'HP', 'MSI', 'Philips', 'Xiaomi', 'ყველას ნახვა']
      },
      {
        title: 'საქნირ აქსესუარები',
        items: ['Wi-Fi როუტერები', 'ელავმცნები', 'დმენის დამაბრელელი', 'LAN კაბელები', 'HDMI კაბელები', 'მონიტორის განათება', 'RGB განათება', 'მონიტორის საჩრდილები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'პროექტორები',
        items: ['Samsung', 'Xiaomi', 'Wanbo', 'Anker', 'Acer', 'BenQ', 'ყველას ნახვა']
      },
      {
        title: 'პროექტორის აქსესუარები',
        items: ['პროექტორის დასადგმი', 'პროექტორის Tripod', 'პროექტორები', 'პროექტორის ჩანთა', 'ყველას ნახვა']
      },
      {
        title: '',
        items: []
      },
      {
        title: '',
        items: []
      }
    ]
  },
  photo: {
    columns: [
      {
        title: 'ფოტოაპარატები',
        items: ['Canon', 'Nikon', 'Sony', 'ყველას ნახვა']
      },
      {
        title: 'სმარტ საათების',
        items: ['Ray-Ban Meta']
      },
      {
        title: 'Power banks',
        items: ['Anker', 'Ugreen', 'Xiaomi', 'ყველას ნახვა']
      },
      {
        title: 'ფოტო | ვიდეო აქსესუარები',
        items: ['ობიექტივები | ლინზა', 'Gimbal სტაბილიზატორები', 'Speedlite განათებები', 'მხუმარები', 'უსაფენო მიკროფონები', 'ფოტოაპარატის ჩანთები', 'შემსრებების ბარათები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'ექშვნ კამერები',
        items: ['GoPro', 'DJI Osmo', 'Insta360', 'აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: 'დროუნ პრინტერები',
        items: ['Canon', 'Xiaomi', 'Polaroid', 'Fujifilm', 'აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: 'Smartphone ფოტოგრაფია',
        items: ['სტაბილატორები', 'ლავალეინ მიკროფონები', 'Tripod | სელფის კორი', 'ყველას ნახვა']
      },
      {
        title: 'დრონები',
        items: ['DJI დრონები', 'ყველას ნახვა']
      }
    ]
  },
  smart: {
    columns: [
      {
        title: 'საზარურელი',
        items: ['ჩაილატი', 'ნვემსაცური', 'იზნელეები დალეუ', 'თემბრი', 'ბლუზოები', 'ყველას პარბი', 'ავირდული', 'თოსდეთი', 'ყველას ნახვა']
      },
      {
        title: 'კლიმატის მართვა',
        items: ['ჰაერის განმწმენდი', 'ჰაერის დამატბენისაკოდელი', 'საქროს აქსესუარები', 'ყველას ნახვა']
      },
      {
        title: 'სმარტ გადარები',
        items: ['ტვმავირი წანთეები', 'დღამვარბს იქსპეკები', 'საქროს კაბელი', 'RGB განათება', 'ყველას ნახვა']
      },
      {
        title: 'მონიტორინგა',
        items: ['IP კამერა', 'Doorbell', 'კარის ჭკვიანი საკეთები', 'ყველას ნახვა']
      }
    ],
    bottom: [
      {
        title: 'სმარტ განათება',
        items: ['სმარტის ნათურები', 'ნველის ნაბოსები', 'შენათური ღაბალური მოვლა', 'ყველას ნახვა']
      },
      {
        title: 'სმარტ გადაადლელა',
        items: ['სვეთები', 'სვეთებუწ სანაკი', 'დანაბრი', 'RGB განათება', 'ყველას ნახვა']
      },
      {
        title: '',
        items: []
      },
      {
        title: '',
        items: []
      }
    ]
  }
};

function generateMegaMenuHTML(data) {
  const createList = (items) => items.map(item => `<li><a href="#">${item}</a></li>`).join('');



  const columns = data.columns.map(col => `
    <div class="mega-menu-column">
      <h3>${col.title}</h3>
      <ul>${createList(col.items)}</ul>
      ${col.sections ? col.sections.map(sec => `
        <h3 class="mt-section">${sec.title}</h3>
        <ul>${createList(sec.items)}</ul>
      `).join('') : ''}
    </div>
  `).join('');


// sheqmnis html qvevita seqciistvis. tu iqneba bottom data, loopi iqneba yovelive seqciistvis da qmnis html's. da tu araa qvevita seqcia, cariel strings daabrunebs

  const bottom = data.bottom ?` 
    <div class="mega-menu-bottom">
      ${data.bottom.map(sec => `
        <div class="mega-menu-bottom-section">
          ${sec.title ? `<h3>${sec.title}</h3>` : ''}
          ${sec.items.length ? `<ul>${createList(sec.items)}</ul>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  // gaaertianebs zevita columns qvevita columntan

  return `<div class="mega-menu-content">${columns}</div>${bottom}`;
}

const menuContainer = document.getElementById('mega-menu-container');
const sideItems = document.querySelectorAll('.side-item[data-menu]');
const isHoveringOverSideItem = () => Array.from(sideItems).some(item => item.matches(':hover'));

sideItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const data = megaMenuData[item.getAttribute('data-menu')];
    if (data) {
      menuContainer.innerHTML = generateMegaMenuHTML(data);
      menuContainer.classList.add('active');
    }
  });
  
  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!menuContainer.matches(':hover') && !isHoveringOverSideItem()) {
        menuContainer.classList.remove('active');
      }
    }, 100);
  });
});

if (menuContainer) {
  menuContainer.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!isHoveringOverSideItem()) {
        menuContainer.classList.remove('active');
      }
    }, 100);
  });
}

const cart = document.querySelector(".cart");
const cartButton = document.querySelector(".cart-button");
const totalPriceValue = document.querySelector(".total-price-value");
const openCartBtn = document.querySelector(".open-cart");

let cleart;

if (cartButton) {
  cartButton.addEventListener("mouseenter", () => {
    clearTimeout(cleart);
    if (cart) cart.style.display = "block";
  });

  cartButton.addEventListener("mouseleave", () => {
    cleart = setTimeout(() => {
      if (cart) cart.style.display = "none";
    }, 150);
  });
}

if (cart) {
  cart.addEventListener("mouseenter", () => {
    clearTimeout(cleart);
    cart.style.display = "block";
  });

  cart.addEventListener("mouseleave", () => {
    cleart = setTimeout(() => {
      cart.style.display = "none";
    }, 150);
  });
}

const buybtns = document.querySelectorAll(".p-add");
const main = document.querySelector(".main");

buybtns.forEach((buybtn) => {
  buybtn.addEventListener("click", (e) => {
    const item = e.target.closest('.p-card');
    const productname = item.querySelector(".p-name").textContent;
    const productprice = item.querySelector(".p-price").textContent.split(' ')[0] + ' ₾';
    const productimg = item.querySelector(".p-img img").getAttribute("src");



    function shortenText(text) {
  const words = text.split(" ");

  if (words.length <= 4) return text;

  return words.slice(0, 4).join(" ") + "\n" + words.slice(4, 6).join(" ") + " ...";
}


    function addnew() {
      const newdiv = document.createElement("div");
      main.appendChild(newdiv);
      newdiv.classList.add("cartdiv");
      const cartimgg = main.querySelector(".cartimg");
      cartimgg.style.display = "none";



      const cartimg = document.createElement("img")
      newdiv.appendChild(cartimg)
      cartimg.classList.add("cartimg")
      cartimg.src = productimg


      const cartrow = document.createElement("div");
      newdiv.appendChild(cartrow);
      cartrow.classList.add("cartrow");


      const cartname = document.createElement("p");
      cartrow.appendChild(cartname);
      cartname.classList.add("cartname");
      cartname.textContent = productname;
      cartname.textContent = shortenText(cartname.textContent);


      const cartprice = document.createElement("p")
      cartrow.appendChild(cartprice)
      cartprice.classList.add("cartprice")
      cartprice.textContent = productprice

      const cartrow2 = document.createElement("div");
      newdiv.appendChild(cartrow2);
      cartrow2.classList.add("cartrow2");

      const dlt = document.createElement("i");
      cartrow2.appendChild(dlt)
      dlt.classList.add("dlt", "fa-regular", "fa-trash-can")
      dlt.addEventListener("click", () => {
        newdiv.remove()
        updatetotal()
      })


      const adder = document.createElement("div");
      cartrow2.appendChild(adder)
      adder.classList.add("adder")



      const minus = document.createElement("p");
      adder.appendChild(minus)
      minus.classList.add("minus")
      minus.textContent = "-"
      minus.addEventListener("click", () => {
        let currentNum = parseInt(qtyNumber.textContent);
        if (currentNum > 1) {
          qtyNumber.textContent = currentNum - 1;
          updatetotal()
        }
      });
      

      const qtyNumber = document.createElement("p");
      adder.appendChild(qtyNumber)
      qtyNumber.classList.add("qty-number")
      qtyNumber.textContent = "1"

      const plus = document.createElement("p");
      adder.appendChild(plus)
      plus.classList.add("plus")
      plus.textContent = "+"
      plus.addEventListener("click", () => {
        let currentNum = parseInt(qtyNumber.textContent);
        qtyNumber.textContent = currentNum + 1;
        updatetotal()
      });
    }

function updatetotal() {
  const cartItems = document.querySelectorAll(".cartdiv");
  let total = 0;

  cartItems.forEach((item) => {
    const priceText = item.querySelector(".cartprice").textContent.replace(" ₾", "").trim();
    const price = parseFloat(priceText);
    const quantity = parseInt(item.querySelector(".qty-number").textContent);
    total += price * quantity; 
  });

  if (totalPriceValue) {
    totalPriceValue.textContent = total.toFixed(0) + " ₾";
  }
  
  const cartimgg = main.querySelector(".cartimg");
  if (cartItems.length > 0) {
    if (cartimgg) cartimgg.style.display = "none";
  } else {
    if (cartimgg) cartimgg.style.display = "block";
  }
}

    addnew();
    updatetotal();
  });
});