// carrusel

function showImages(id) {
  let current = document.getElementById("imagenSlider");
  current.src = id.src;

  var itemThumbnail = document.getElementsByClassName("list_thumbnail");
  for (var i = 0; i < itemThumbnail.length; i++) {
    itemThumbnail[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active_thumbnail");
      current[0].className = current[0].className.replace(
        "active_thumbnail",
        ""
      );
      this.className += " active_thumbnail";
    });
  }
}

// menuList
var itemList = document.getElementsByClassName("list_item");
for (var i = 0; i < itemList.length; i++) {
  itemList[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

const openModalCart = () => {
  document.getElementById("carrito_items").style.height = "200px";
  document.getElementById("carrito_items").style.boxShadow = "0px 4px 26px 2px rgba(0, 0, 0, 0.253)";
};

const closeCartModal = () => {
  document.getElementById("carrito_items").style.height = "0px";
  document.getElementById("carrito_items").style.boxShadow = "none";
  document.getElementById("carrito_items").style.border = "none";
};

// show Menu Reponsive

const showMenuResponsive = () => {
  const menuresponsive = document.getElementById("menu__responsive");
  menuresponsive.style.left = 0;
};
const hideMenuResponsive = () => {
  const menuresponsive = document.getElementById("menu__responsive");
  menuresponsive.style.left = "-1000px";
};
