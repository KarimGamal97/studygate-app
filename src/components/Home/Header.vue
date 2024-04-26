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
                      <router-link to="/">{{ $t("Home") }}</router-link>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/distance-edu">
                        {{ $t("UK Distance Education") }}
                      </router-link>
                      <ul class="submenu">
                        <li>
                          <router-link to="/distance-edu">
                            {{ $t("Distance Education") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/why-study-uk">
                            {{ $t("Why Study in the UK") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/admission-req">
                            {{ $t("Admission Requirements") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/uk-accreditation">
                            {{ $t("UK Accreditation") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/uk-universities">
                            {{ $t("UK Universities") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/about-uk">
                            {{ $t("About UK") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/useful-links">
                            {{ $t("Useful Links") }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/services">
                        {{ $t("Services") }}
                      </router-link>
                      <ul class="submenu">
                        <li class="has-dropdown">
                          <router-link to="/ms-analytics">
                            {{ $t("Master Programs") }}
                          </router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/ms-analytics">
                                {{ $t("MS Data Analytics") }}
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/ms-data">
                                {{ $t("MS Data Science") }}
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mba">
                                {{ $t("MBA") }}
                              </router-link>
                            </li>
                          </ul>
                        </li>
                        <li class="has-dropdown">
                          <router-link to="/phd">
                            {{ $t("Research Programs") }}
                          </router-link>
                          <ul class="submenu">
                            <li>
                              <router-link to="/phd">
                                {{ $t("Doctor of Philosophy (Phd)") }}
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mres">
                                {{ $t("Master by Research (MRes)") }}
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/mphil">
                                {{ $t("Master of Philosophy (MPhil)") }}
                              </router-link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <router-link to="/short-courses">
                            {{
                              $t("Short courses in Data Analytics and AI")
                            }}</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="has-dropdown">
                      <router-link to="/about">
                        {{ $t("About Us") }}
                      </router-link>
                      <ul class="submenu">
                        <li>
                          <router-link to="/about">
                            {{ $t("Our Company") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/book-meeting">
                            {{ $t("Book a meeting") }}
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/faq">
                            {{ $t("FAQ") }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/contact">
                        {{ $t("Contact Us") }}
                      </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="ml-10 d-none d-md-block">
                <div class="locale-change" style="padding: 4px">
                  <select v-model="$i18n.locale">
                    <option
                      v-for="locale in $i18n.availableLocales"
                      :key="`locale-${locale}`"
                      :value="locale"
                    >
                      {{ locale }}
                    </option>
                  </select>
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="../../assets/img/home/en-lang-.svg"
                    alt="UK Flag"
                    width="25"
                  />
                  <img
                    v-else-if="$i18n.locale === 'ar'"
                    src="../../assets/img/home/ar-lang-.svg"
                    alt="Jordan Flag"
                    width="25"
                  />
                </div>
              </div>
              <div class="header__btn ml-20 d-none d-sm-block">
                <router-link to="/apply-course" class="e-btn">
                  <span style="text-transform: capitalize; font-size: 14px">
                    {{ $t("Apply for A Course") }}
                  </span></router-link
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
              <router-link to="/" class="border-0">{{
                $t("Home")
              }}</router-link>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.coursesDropdown === true ? 'active' : '']"
            >
              <a
                @click="
                  menuOption.coursesDropdown = !menuOption.coursesDropdown
                "
                >{{ $t("UK Distance Education") }}
              </a>
              <ul
                class="sub-menu"
                :class="[menuOption.coursesDropdown === true ? 'active' : '']"
              >
                <li>
                  <router-link to="/distance-edu">
                    {{ $t("Distance Education") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/why-study-uk">
                    {{ $t("Why Study in the UK") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/admission-req">{{
                    $t("Admission Requirements")
                  }}</router-link>
                </li>
                <li>
                  <router-link to="/uk-accreditation">
                    {{ $t("UK Accreditation") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/uk-universities">
                    {{ $t("UK Universities") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/about-uk">
                    {{ $t("About UK") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/useful-links">
                    {{ $t("Useful Links") }}</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.blogDropdown === true ? 'active' : '']"
            >
              <a
                v-on:click="menuOption.blogDropdown = !menuOption.blogDropdown"
                >{{ $t("Services") }}</a
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
                    >{{ $t("Master Programs") }}</a
                  >
                  <ul class="submenu">
                    <li>
                      <router-link to="/ms-analytics"
                        >{{ $t("MS Data Analytics") }}
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/ms-data"
                        >{{ $t("MS Data Science") }}
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/mba">{{ $t("MBA") }} </router-link>
                    </li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <router-link to="/phd"
                    >{{ $t("Research Programs") }}
                  </router-link>
                  <ul class="submenu">
                    <li>
                      <router-link to="/phd"
                        >{{ $t("Doctor of Philosophy (Phd)") }}
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/mres"
                        >{{ $t("Master by Research (MRes)") }}
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/mphil"
                        >{{ $t("Master of Philosophy (MPhil)") }}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/short-courses">{{
                    $t("Short courses in Data Analytics and AI")
                  }}</router-link>
                </li>
              </ul>
            </li>
            <li
              class="menu-item-has-children has-droupdown"
              :class="[menuOption.pagesDropDown === true ? 'active' : '']"
            >
              <a
                @click="menuOption.pagesDropDown = !menuOption.pagesDropDown"
                >{{ $t("About Us") }}</a
              >
              <ul
                class="sub-menu"
                :class="[menuOption.pagesDropDown === true ? 'active' : '']"
              >
                <li>
                  <router-link to="/about">{{ $t("Our Company") }}</router-link>
                </li>
                <li>
                  <router-link to="/book-meeting">{{
                    $t("Book a meeting")
                  }}</router-link>
                </li>
                <li>
                  <router-link to="/faq">{{ $t("FAQ") }}</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/contact" class="border-0">{{
                $t("Contact Us")
              }}</router-link>
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
<style scoped>
#header-sticky
  > div
  > div
  > div.col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-7.col-10
  > div
  > div.ml-10.d-none.d-md-block
  > div {
  border: 1px solid #333;
  border-radius: 6px;
}
#header-sticky
  > div
  > div
  > div.col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-7.col-10
  > div
  > div.ml-10.d-none.d-md-block
  > div
  > select {
  border: none;
  background: transparent;
}
#header-sticky
  > div
  > div
  > div.col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-7.col-10
  > div
  > div.ml-10.d-none.d-md-block
  > div
  > select:focus {
  outline: none;
  border: none;
}
</style>
