(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // @@@@ コンテンツのセクションを見てグローバルナビに項目を生成
    const globalNav = document.getElementById("nav-list");
    const sections = document.querySelectorAll("section");
    const navEntries = [];

    function createGlobalNav() {
      if (!globalNav) {
        return;
      }

      const navList = document.createElement("ul");
      const usedIds = new Set();

      sections.forEach((section) => {
        const sectionTitle = (section.getAttribute("data-title") || "").trim();
        const sectionId = section.id.trim();
        const sectionUniqueClass = section.getAttribute("data-class");
        const sectionIsAccordion = section.getAttribute("data-accordion");
        const dropLists = section.querySelectorAll(".tab-wrapp [data-index]");

        if (!sectionTitle || !sectionId || usedIds.has(sectionId)) {
          return;
        }
        usedIds.add(sectionId);

        const navItem = document.createElement("li");
        navItem.classList.add("nav-default");
        if (sectionUniqueClass && sectionUniqueClass !== "nav-default") {
          navItem.classList.add(sectionUniqueClass);
        }

        const hasAccordion =
          sectionIsAccordion === "nav-drop" && dropLists.length > 0;
        if (hasAccordion) {
          navItem.classList.add("nav-drop");
        }

        const link = document.createElement("a");
        link.href = `#${sectionId}`;
        link.textContent = sectionTitle;

        if (hasAccordion) {
          const dropDiv = document.createElement("div");
          dropDiv.classList.add("nav-drop-main");
          dropDiv.appendChild(link);

          const dropdownImg = document.createElement("div");
          const dropdownIcon = document.createElement("img");
          dropdownIcon.src =
            "./assets/template/images/ico/no-farames/ico-dropdown.svg";
          dropdownIcon.alt = "";
          dropdownImg.appendChild(dropdownIcon);

          const ul = document.createElement("ul");

          dropLists.forEach((dropList, index) => {
            const acoItem = document.createElement("li");
            const acoHref = document.createElement("a");
            acoHref.href = `#${sectionId}`;
            acoHref.textContent =
              dropList.getAttribute("data-index") || `項目${index + 1}`;
            acoItem.setAttribute("data-slide", index);
            acoItem.appendChild(acoHref);
            ul.appendChild(acoItem);
          });

          navItem.appendChild(dropDiv);
          dropDiv.appendChild(dropdownImg);
          navItem.appendChild(ul);
        } else {
          navItem.appendChild(link);
        }

        navList.appendChild(navItem);
        navEntries.push({ section, navItem });
      });

      globalNav.appendChild(navList);
    }

    createGlobalNav();

    // バーガーメニュー
    const trigger = document.getElementById("burger");
    const nav = document.getElementById("g-nav");
    const navInner = document.querySelector(".nav-inner");
    const lay = document.querySelector(".overlay");
    const body = document.body;
    const windowSm = 768;
    const menuReady = Boolean(trigger && nav && navInner && lay);
    let isOpen = false;

    if (menuReady) {
      trigger.addEventListener("click", toggleMenu, false);
      lay.addEventListener("click", closeMenu, false);
    }

    function toggleMenu() {
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    function openMenu() {
      if (!menuReady || window.innerWidth > windowSm) {
        return;
      }

      isOpen = true;
      body.style.overflow = "hidden";
      body.classList.add("nav-open");
      nav.style.display = "block";
      trigger.setAttribute("aria-expanded", "true");
      trigger.setAttribute("aria-label", "メニューを閉じる");

      window.requestAnimationFrame(() => {
        lay.style.opacity = "1";
        navInner.style.transform = "translate3d(0, 0, 0)";
      });
    }

    function closeMenu() {
      if (!menuReady) {
        return;
      }

      isOpen = false;
      body.style.overflow = "";
      body.classList.remove("nav-open");
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-label", "メニューを開く");
      lay.style.opacity = "0";
      navInner.style.transform = "translate3d(100%, 0, 0)";

      if (window.innerWidth <= windowSm) {
        window.setTimeout(() => {
          if (!isOpen) {
            nav.style.display = "none";
          }
        }, 550);
      }
    }

    function syncMenuToViewport() {
      if (!menuReady || window.innerWidth <= windowSm) {
        return;
      }

      isOpen = false;
      body.style.overflow = "";
      body.classList.remove("nav-open");
      nav.style.display = "";
      navInner.style.transform = "";
      lay.style.opacity = "";
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-label", "メニューを開く");
    }

    // @@@@ ナビゲーションをセクションのスクロールと連動させてカレントを付け替える
    // 基準点の準備
    var elemTop = [];

    // 現在地を取得するための設定を関数でまとめる
    function PositionCheck() {
      // headerの高さを取得
      var header = document.getElementById("header");
      var headerH = header ? header.offsetHeight : 0;

      elemTop = navEntries.map(function (entry) {
        var rect = entry.section.getBoundingClientRect();
        return Math.round(rect.top + window.scrollY - headerH);
      });
    }

    // ナビゲーションに現在地のクラスをつけるための設定
    function ScrollAnime() {
      // スクロール値を取得
      var scroll = Math.round(window.scrollY);

      // 全てのナビゲーションの現在地クラスを除去
      navEntries.forEach(function (entry) {
        entry.navItem.classList.remove("current");
        const entryLink = entry.navItem.querySelector("a");
        if (entryLink) {
          entryLink.removeAttribute("aria-current");
        }
      });

      if (elemTop.length === 0) {
        return;
      }

      var currentIndex = -1;
      for (var i = 0; i < elemTop.length; i++) {
        if (scroll >= elemTop[i]) {
          currentIndex = i;
        } else {
          break;
        }
      }

      var viewportBottom = window.scrollY + window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var isAtBottom = viewportBottom >= documentHeight - 2;

      if (isAtBottom && navEntries.length > 0) {
        currentIndex = navEntries.length - 1;
      }

      if (currentIndex >= 0 && navEntries[currentIndex]) {
        navEntries[currentIndex].navItem.classList.add("current");
        const currentLink = navEntries[currentIndex].navItem.querySelector("a");
        if (currentLink) {
          currentLink.setAttribute("aria-current", "location");
        }
      }
    }

    // ナビゲーションをクリックした際のスムーススクロール
    var navLinks = document.querySelectorAll("#g-nav a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var elmHash = this.getAttribute("href");
        if (!elmHash || !elmHash.startsWith("#") || elmHash.length === 1) {
          return;
        }

        var target = document.getElementById(elmHash.slice(1));
        if (!target) {
          return;
        }

        event.preventDefault();
        if (isOpen && window.innerWidth <= windowSm) {
          closeMenu();
        }

        var header = document.getElementById("header");
        var headerH = header ? header.offsetHeight : 0;
        var pos = Math.round(
          target.getBoundingClientRect().top + window.scrollY - headerH
        );

        window.scrollTo({
          top: pos,
          behavior: "smooth",
        });
      });
    });

    window.addEventListener("scroll", function () {
      ScrollAnime();
    });
    setTimeout(() => {
      PositionCheck();
    }, 400);

    ScrollAnime();

    window.addEventListener("resize", function () {
      syncMenuToViewport();
      PositionCheck();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    });

    // @@@@@ アコーディオン
    const accordionButtons = document.querySelectorAll(".nav-drop-main");

    accordionButtons.forEach((accordionBtn, index) => {
      accordionBtn.addEventListener("click", (e) => {
        const parentLi = e.target.closest("li");
        const content = parentLi ? parentLi.querySelector("ul") : null;
        if (!parentLi || !content) {
          return;
        }

        const isOpen = parentLi.classList.toggle("is-active");
        if (isOpen) {
          content.style.height = "auto";
          const h = content.offsetHeight;
          content.style.height = "0";
          content.style.transition = "height 300ms";
          content.offsetHeight;
          content.style.height = h + "px";
        } else {
          content.style.height = "0";
        }
        accordionButtons.forEach((btn, i) => {
          if (i !== index) {
            const otherParent = btn.closest("li");
            const otherContent = btn.nextElementSibling;
            if (otherParent) {
              otherParent.classList.remove("is-active");
            }
            if (otherContent) {
              otherContent.style.height = "0";
            }
          }
        });
        const container = parentLi.closest(".scroll-control");
        if (container !== null) {
          container.classList.toggle("is-active", isOpen);
        }
      });
    });

    // @@@@ タブスライド
    const tabSwiperElement = document.querySelector(".mySwiper");
    const contentSwiperElement = document.querySelector(".mySwiper2");
    const tabLength = tabSwiperElement
      ? tabSwiperElement.querySelectorAll(".swiper-slide").length
      : 0;
    const contentSlideLength = contentSwiperElement
      ? contentSwiperElement.querySelectorAll(".swiper-slide").length
      : 0;
    let swiper2 = null;

    if (
      typeof Swiper === "function" &&
      tabSwiperElement &&
      contentSwiperElement &&
      tabLength > 0 &&
      contentSlideLength > 0
    ) {
      const swiper = new Swiper(tabSwiperElement, {
        slidesPerView: tabLength > 4 ? 4.5 : tabLength,
        watchSlidesProgress: true,
        navigation: {
          nextEl: tabSwiperElement.querySelector(".swiper-button-next"),
          prevEl: tabSwiperElement.querySelector(".swiper-button-prev"),
        },
      });

      swiper2 = new Swiper(contentSwiperElement, {
        spaceBetween: 10,
        autoHeight: true,
        simulateTouch: false,
        thumbs: {
          swiper: swiper,
        },
      });

      const slideNavItems = document.querySelectorAll(
        ".nav-drop ul li[data-slide]"
      );
      slideNavItems.forEach((slideNavItem) => {
        slideNavItem.addEventListener("click", () => {
          const slideNumber = Number(slideNavItem.getAttribute("data-slide"));
          if (
            Number.isInteger(slideNumber) &&
            slideNumber >= 0 &&
            slideNumber < contentSlideLength
          ) {
            swiper2.slideTo(slideNumber);
          }
        });
      });
    }

    const num = 6;
    const swiperWrap = document.querySelectorAll(".mySwiper2 .swiper-slide");

    swiperWrap.forEach((slide) => {
      const swiperItemLists = slide.querySelectorAll("ul li");
      for (var i = num; i < swiperItemLists.length; i++) {
        swiperItemLists[i].classList.add("is-hidden");
        swiperItemLists[i].setAttribute("aria-hidden", "true");
      }
    });

    const swiperBtns = document.querySelectorAll(".load-more");
    swiperBtns.forEach((swiperBtn) => {
      const wrap = swiperBtn.parentElement
        ? swiperBtn.parentElement.querySelector("ul")
        : null;
      if (!wrap) {
        hideButton(swiperBtn, true);
        return;
      }

      const liCount = wrap.querySelectorAll("li").length;
      hideButton(swiperBtn, liCount <= num);

      swiperBtn.addEventListener("click", () => {
        const hiddenItems = wrap.querySelectorAll("li.is-hidden");
        for (var i = 0; i < num && i < hiddenItems.length; i++) {
          hiddenItems[i].classList.remove("is-hidden");
          hiddenItems[i].classList.add("is-visible");
          hiddenItems[i].removeAttribute("aria-hidden");
        }
        if (wrap.querySelectorAll("li.is-hidden").length === 0) {
          hideButton(swiperBtn, true);
        }
      });
    });

    if (swiper2) {
      setTimeout(() => {
        swiper2.update();
      }, 450);
    }

    // @@@@ もっと見るボタン
    function hideButton(button, shouldHide) {
      button.classList.toggle("is-hidden", shouldHide);
      button.hidden = shouldHide;
    }

    function setupMoreButton(sectionSelector, itemSelector, moreNum) {
      var section = document.querySelector(sectionSelector);
      if (!section) {
        return;
      }

      var listItems = section.querySelectorAll(itemSelector);
      var listBtn = section.querySelector(".more-btn");
      if (!listBtn) {
        return;
      }

      for (var i = moreNum; i < listItems.length; i++) {
        listItems[i].classList.add("is-hidden");
        listItems[i].setAttribute("aria-hidden", "true");
      }

      hideButton(listBtn, listItems.length <= moreNum);

      listBtn.addEventListener("click", function () {
        var hiddenItems = section.querySelectorAll(
          `${itemSelector}.is-hidden`
        );

        for (var i = 0; i < moreNum && i < hiddenItems.length; i++) {
          hiddenItems[i].classList.remove("is-hidden");
          hiddenItems[i].classList.add("is-visible");
          hiddenItems[i].removeAttribute("aria-hidden");
        }

        if (section.querySelectorAll(`${itemSelector}.is-hidden`).length === 0) {
          hideButton(listBtn, true);
        }
      });
    }

    setupMoreButton("#news", ".news-li-wrapp > [data-more]", 3);
    setupMoreButton("#member", ".member-wrapp > [data-more]", 2);

    // @@@@@ メールのコピー
    const copyButton = document.getElementById("contact-btn");
    const tagText = document.getElementById("tagText");
    const message = document.getElementById("message");

    if (copyButton && tagText) {
      copyButton.addEventListener("click", () => {
        const tagValue =
          "value" in tagText ? tagText.value : tagText.textContent || "";
        copyToClipboard(tagValue);
      });
    }

    async function copyToClipboard(tagValue) {
      let copied = false;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(tagValue);
          copied = true;
        } catch (error) {
          copied = false;
        }
      }

      if (!copied) {
        copied = copyWithFallback(tagValue);
      }

      if (copied) {
        messageActive();
      } else {
        console.error("クリップボードへのコピーに失敗しました。");
      }
    }

    function copyWithFallback(tagValue) {
      if (typeof document.execCommand !== "function") {
        return false;
      }

      const textArea = document.createElement("textarea");
      textArea.value = tagValue;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      document.body.appendChild(textArea);
      textArea.focus({ preventScroll: true });
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);

      let copied = false;
      try {
        copied = document.execCommand("copy");
      } finally {
        textArea.remove();
      }
      return copied;
    }

    function messageActive() {
      if (!message) {
        return;
      }

      message.classList.add("is-active");
      setTimeout(() => {
        message.classList.remove("is-active");
      }, 1600);
    }
  });
})();
