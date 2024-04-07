<template>
  <header>
    <div
      id="header-sticky"
      :class="`${
        isSticky
          ? 'header__area header__transparent header__padding sticky'
          : 'header__area header__transparent header__padding'
      } ${header__white && header__white}`"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-5 col-2">
            <div class="header__left d-flex">
              <div class="logo d-flex">
                <router-link to="/">
                  <img
                    v-if="header__white && !isSticky"
                    src="../../assets/img/logo/logo.svg"
                    style="width: 50%; margin-right: 10px"
                    alt="logo"
                  />
                  <img
                    v-else
                    src="../../assets/img/logo/logo.svg"
                    style="width: 50%; margin-right: 10px"
                    alt="logo"
                  />
                  <h3 v-if="header__white && !isSticky" style="color: #fff">
                    Studigrid
                  </h3>
                  <h3 v-else style="color: #000; margin-top: 5px">Studigrid</h3>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-7 col-10">
            <div
              class="header__right d-flex justify-content-around align-items-center"
            >
              <div :class="`main-menu ${header__white && 'main-menu-3'}`">
                <nav id="mobile-menu" class="d-none d-xl-block">
                  <ul class="d-flex" style="gap: 40px">
                    <li>
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/distance-edu"
                        >UK Distance Education
                      </router-link>
                      <ul class="submenu">
                        <li>
                          <router-link to="/distance-edu">
                            Distance Education
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/why-study-uk">
                            Why Study in the UK
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/admission-req"
                            >Admission Requirements</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/uk-accreditation">
                            UK Accreditation
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/uk-universities">
                            UK Universities
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/about-uk"> About UK </router-link>
                        </li>
                        <li>
                          <router-link to="/useful-links">
                            Useful Links
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/services">Services</router-link>
                      <ul class="submenu">
                        <li class="has-dropdown">
                          <router-link to="/ms-analytics"
                            >Master Programs</router-link
                          >
                          <ul class="submenu">
                            <li>
                              <router-link to="/ms-analytics"
                                >MS Data Analytics
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/ms-data"
                                >MS Data Science
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mba">MBA </router-link>
                            </li>
                          </ul>
                        </li>
                        <li class="has-dropdown">
                          <router-link to="/phd"
                            >Research Programs
                          </router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/phd"
                                >Doctor of Philosophy (Phd)
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mres"
                                >Master by Research (MRes)
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mphil"
                                >Master of Philosophy (MPhil)
                              </router-link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="/short-courses"
                            >Short courses in Data Analytics and AI</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/about">About Us</router-link>
                      <ul class="submenu">
                        <li>
                          <router-link to="/about">Our Company</router-link>
                        </li>
                        <li>
                          <router-link to="/faq">Faq</router-link>
                        </li>
                      </ul>
                    </li>
                    <li><router-link to="/contact">Contact Us</router-link></li>
                  </ul>
                </nav>
              </div>
              <!-- <div class="header__search p-relative ml-50 d-none d-md-block">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button type="submit"><i class="fad fa-search"></i></button>
                </form>
                <div class="header__cart">
                  <a
                    @click="handleMiniCart"
                    href="javascript:void(0);"
                    class="cart-toggle-btn"
                  >
                    <div class="header__cart-icon">
                      <svg viewBox="0 0 24 24">
                        <circle class="st0" cx="9" cy="21" r="1" />
                        <circle class="st0" cx="20" cy="21" r="1" />
                        <path
                          class="st0"
                          d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                        />
                      </svg>
                    </div>
                    <span class="cart-item">2</span>
                  </a>
                </div>
              </div> -->
              <div class="header__btn ml-20 d-none d-sm-block">
                <router-link to="/contact" class="e-btn"
                  >Book a Meeting</router-link
                >
              </div>
              <div class="sidebar__menu d-xl-none">
                <div
                  @click="handleSidebar"
                  class="sidebar-toggle-btn ml-30"
                  id="sidebar-toggle"
                >
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- cart mini area start -->
  <div class="cartmini__area">
    <div
      :class="`${
        showMiniCart ? 'cartmini__wrapper opened' : 'cartmini__wrapper'
      }`"
    >
      <div class="cartmini__title">
        <h4>Shopping cart</h4>
      </div>
      <div @click="handleCartClose" class="cartmini__close">
        <button type="button" class="cartmini__close-btn">
          <i class="fal fa-times"></i>
        </button>
      </div>
      <div class="cartmini__widget">
        <div class="cartmini__inner">
          <ul>
            <li>
              <div class="cartmini__thumb">
                <a href="#">
                  <img src="../../assets/img/course/sm/cart-1.jpg" alt="" />
                </a>
              </div>
              <div class="cartmini__content">
                <h5>
                  <a href="#">Strategy law and organization Foundation </a>
                </h5>
                <div class="product-quantity mt-10 mb-10">
                  <span
                    @click="handleDecreaseValue('valueOne')"
                    class="cart-minus"
                    >-</span
                  >
                  <input class="cart-input" type="text" v-model="value" />
                  <span
                    @click="handleIncreaseValue('valueOne')"
                    class="cart-plus"
                    >+</span
                  >
                </div>
                <div class="product__sm-price-wrapper">
                  <span class="product__sm-price">$46.00</span>
                </div>
              </div>
              <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
            </li>
            <li>
              <div class="cartmini__thumb">
                <a href="#">
                  <img src="../../assets/img/course/sm/cart-2.jpg" alt="" />
                </a>
              </div>
              <div class="cartmini__content">
                <h5><a href="#">Fundamentals of music theory Learn new</a></h5>
                <div class="product-quantity mt-10 mb-10">
                  <span
                    @click="handleDecreaseValue('valueTwo')"
                    class="cart-minus"
                    >-</span
                  >
                  <input class="cart-input" type="text" v-model="valueTwo" />
                  <span
                    @click="handleIncreaseValue('valueTwo')"
                    class="cart-plus"
                    >+</span
                  >
                </div>
                <div class="product__sm-price-wrapper">
                  <span class="product__sm-price">$32.00</span>
                </div>
              </div>
              <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
            </li>
            <li>
              <div class="cartmini__thumb">
                <a href="#">
                  <img src="../../assets/img/course/sm/cart-3.jpg" alt="" />
                </a>
              </div>
              <div class="cartmini__content">
                <h5>
                  <a href="#">Strategy law and organization Foundation </a>
                </h5>
                <div class="product-quantity mt-10 mb-10">
                  <span
                    @click="handleDecreaseValue('valueThree')"
                    class="cart-minus"
                    >-</span
                  >
                  <input class="cart-input" type="text" v-model="valueThree" />
                  <span
                    @click="handleIncreaseValue('valueThree')"
                    class="cart-plus"
                    >+</span
                  >
                </div>
                <div class="product__sm-price-wrapper">
                  <span class="product__sm-price">$62.00</span>
                </div>
              </div>
              <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
            </li>
          </ul>
        </div>
        <div class="cartmini__checkout">
          <div class="cartmini__checkout-title mb-30">
            <h4>Subtotal:</h4>
            <span>$113.00</span>
          </div>
          <div class="cartmini__checkout-btn">
            <router-link to="/cart" class="e-btn e-btn-border mb-10 w-100">
              <span></span> view cart</router-link
            >
            <router-link to="/checkout" class="e-btn w-100">
              <span></span> checkout</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    @click="handleCartClose"
    :class="[showMiniCart ? 'body-overlay opened' : 'body-overlay']"
  ></div>
  <!-- cart mini area end -->

  <!-- sidebar area start -->
  <div
    :class="`${showSidebar ? 'sidebar__area sidebar-opened' : 'sidebar__area'}`"
  >
    <div class="sidebar__wrapper">
      <div @click="handleSidebarClose" class="sidebar__close">
        <button class="sidebar__close-btn" id="sidebar__close-btn">
          <span><i class="fal fa-times"></i></span>
          <span>close</span>
        </button>
      </div>
      <div class="sidebar__content">
        <div class="logo mb-40">
          <router-link to="/">
            <img
              src="../../assets/img/logo/logo.svg"
              style="width: 50px"
              alt="logo"
            />
          </router-link>
        </div>

        <div class="side-info-content sidebar-menu mm-menu">
          <ul>
            <li>
              <router-link to="/" class="border-0">Home</router-link>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.coursesDropdown === true ? 'active' : '']"
            >
              <a
                @click="
                  menuOption.coursesDropdown = !menuOption.coursesDropdown
                "
                >UK Distance Education
              </a>
              <ul
                class="sub-menu"
                :class="[menuOption.coursesDropdown === true ? 'active' : '']"
              >
                <li>
                  <router-link to="/distance-edu">
                    Distance Education
                  </router-link>
                </li>
                <li>
                  <router-link to="/why-study-uk">
                    Why Study in the UK
                  </router-link>
                </li>
                <li>
                  <router-link to="/admission-req"
                    >Admission Requirements</router-link
                  >
                </li>
                <li>
                  <router-link to="/uk-accreditation">
                    UK Accreditation
                  </router-link>
                </li>
                <li>
                  <router-link to="/uk-universities">
                    UK Universities
                  </router-link>
                </li>
                <li>
                  <router-link to="/about-uk"> About UK </router-link>
                </li>
                <li>
                  <router-link to="/useful-links"> Useful Links </router-link>
                </li>
              </ul>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.blogDropdown === true ? 'active' : '']"
            >
              <a v-on:click="menuOption.blogDropdown = !menuOption.blogDropdown"
                >Services</a
              >
              <ul
                class="sub-menu"
                :class="[menuOption.blogDropdown === true ? 'active' : '']"
              >
                <li
                  class="menu-item-has-children"
                  :class="[menuOption.blogDropdown === true ? 'active' : '']"
                >
                  <a
                    v-on:click="
                      menuOption.blogDropdown = !menuOption.blogDropdown
                    "
                    >Master Programs</a
                  >
                  <ul class="submenu">
                    <li>
                      <router-link to="/ms-analytics"
                        >MS Data Analytics
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/ms-data">MS Data Science </router-link>
                    </li>
                    <li>
                      <router-link to="/mba">MBA </router-link>
                    </li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <router-link to="/phd">Research Programs </router-link>
                  <ul class="submenu">
                    <li>
                      <router-link to="/phd"
                        >Doctor of Philosophy (Phd)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/mres"
                        >Master by Research (MRes)
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/mphil"
                        >Master of Philosophy (MPhil)
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/short-courses"
                    >Short courses in Data Analytics and AI</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.pagesDropDown === true ? 'active' : '']"
            >
              <a @click="menuOption.pagesDropDown = !menuOption.pagesDropDown"
                >About Us</a
              >
              <ul
                class="sub-menu"
                :class="[menuOption.pagesDropDown === true ? 'active' : '']"
              >
                <li>
                  <router-link to="/about">Our Company</router-link>
                </li>
                <li>
                  <router-link to="/faq">Faq</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/contact" class="border-0">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    @click="handleSidebarClose"
    :class="[showSidebar ? 'body-overlay opened' : 'body-overlay']"
  ></div>
  <!-- sidebar area end -->
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    header__white: String,
  },
  data() {
    return {
      isSticky: false,
      showMiniCart: false,
      showSidebar: false,
      value: 1,
      valueTwo: 1,
      valueThree: 1,
      menuOption: {
        menuShow: false,
        menuSearch: false,
        homeDropdown: false,
        coursesDropdown: false,
        pagesDropDown: false,
        blogDropdown: false,
        aboutDropdown: false,
      },
    };
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleMiniCart() {
      this.showMiniCart = true;
    },
    handleCartClose() {
      this.showMiniCart = false;
    },
    handleSidebar() {
      this.showSidebar = true;
    },
    handleSidebarClose() {
      this.showSidebar = false;
    },
    handleIncreaseValue(value) {
      if (value === "valueOne") {
        this.value++;
      }
      if (value === "valueTwo") {
        this.valueTwo++;
      }
      if (value === "valueThree") {
        this.valueThree++;
      }
    },
    handleDecreaseValue(value) {
      if (value === "valueOne" && this.value > 0) {
        this.value--;
      }
      if (value === "valueTwo" && this.valueTwo > 0) {
        this.valueTwo--;
      }
      if (value === "valueThree" && this.valueThree > 0) {
        this.valueThree--;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>
