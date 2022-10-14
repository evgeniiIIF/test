"use strict";

(function () {
  const cart = [];

  const catalog = document.querySelector(".js-catalog");
  const sidebarCart = document.querySelector(".js-sidebar-cart");

  catalog.addEventListener("click", addProductToCart);
  sidebarCart.addEventListener("click", removeProductFromCart);

  function cartRender(cart) {
    const sidebarCartList = document.querySelector(".js-sidebar-cart__list");
    const sidebarCartCount = document.querySelector(".js-sidebar-cart__count");

    let allProductsString = ``;

    cart.forEach((item, index) => {
      let templateProduct = `
				<li class="sidebar-cart__item">
					<div class="sidebar-cart__product sidebar-product" data-id='${index}'>
						<h4 class="sidebar-product__title">${item.title}</h4>
						<div class="sidebar-product__close-btn"></div>
					</div>
				</li>
			`;
      allProductsString += templateProduct;
    });

    sidebarCartList.innerHTML = allProductsString;
    sidebarCartCount.innerHTML = cart.length;
  }

  function addProductToCart(e) {
    let product = {};

    const cardButton = e.target.closest(".card__button");
    if (cardButton) {
      const card = cardButton.closest(".card");
      product.title = card.querySelector(".card__link").textContent;
      cart.push(product);
      cartRender(cart);
    }
  }

  function removeProductFromCart(e) {
    const sidebarCloseButton = e.target.closest(".sidebar-product__close-btn");
    if (sidebarCloseButton) {
      const product = sidebarCloseButton.closest(".sidebar-product");
      cart.forEach((item, index, arr) => {
        if (product.dataset.id == index) {
          arr.splice(index, 1);
          cartRender(cart);
        }
      });
    }
  }
})();
