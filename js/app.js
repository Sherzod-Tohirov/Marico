document.addEventListener("DOMContentLoaded", resizeByScreen);
window.addEventListener("resize", resizeByScreen);

const elHeaderNav = document.querySelector(".js-header-nav");
const elHeaderWrapper = document.querySelector(".js-header-wrapper");
const elAuthWrapper = document.querySelector(".js-auth-wrapper");
const elBarMenu = document.querySelector(".js-bar-menu");
let wrapper = "";
let closeBtn = "";

elBarMenu.addEventListener("click", (evt) => {
  if (wrapper) {
    displayHeader([elHeaderNav, elAuthWrapper, wrapper]);
  }
});

function resizeByScreen() {
  const screenSize = window.matchMedia("(max-width: 768px");
  const elements = [elHeaderNav, elAuthWrapper];
  if (screenSize.matches) {
    removeHeader(elements);
    addWrapperHeader(elements, elHeaderWrapper);
    showBar(elBarMenu);
  } else {
    displayHeader([elHeaderNav, elAuthWrapper], elHeaderWrapper);
    removeWrapperHeader(elHeaderWrapper);
    hideBar(elBarMenu);
  }

  if (btn) {
    const elCloseBtn = document.querySelector(".close-btn");
    elCloseBtn.addEventListener("click", (evt) => {
      if (wrapper) {
        removeHeader([elHeaderNav, elAuthWrapper, wrapper]);
      }
    });
  }
}

function isDisplay(element, confirm) {
  if (confirm) {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
}

function displayHeader(elements) {
  elements.forEach((el) => {
    isDisplay(el, true);
  });
}

function removeHeader(elements) {
  elements.forEach((el) => {
    isDisplay(el, false);
  });
}

function showBar(elBar) {
  elBar.style.display = "flex";
}

function hideBar(elBar) {
  elBar.style.display = "none";
}

function addWrapperHeader(elements, parentElement) {
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.classList.add("site-header__inner");
    elements.forEach((el) => {
      wrapper.appendChild(el);
    });
    createCloseBtn(wrapper);
    parentElement.appendChild(wrapper);
  }
}

function removeWrapperHeader(parentELement) {
  if (wrapper) {
    removeCloseBtn();
    const elements = Array.from(wrapper.children);
    elements.forEach((el) => {
      parentELement.appendChild(el);
    });
    wrapper.remove();
    wrapper = "";
  }
}

function createCloseBtn(parentElement) {
  btn = document.createElement("button");
  btn.classList.add("close-btn");
  parentElement.appendChild(btn);
}

function removeCloseBtn() {
  btn.remove();
  btn = "";
}
