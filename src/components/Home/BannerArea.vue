<template>
  <section class="banner__area pb-0 mt-0">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div
            class="banner__item p-relative mb-40"
            :style="{
              background:
                'url(' +
                require('../../assets/img/banner/banner-bg-1.jpg') +
                ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="banner__content">
              <span>
                {{ $t("New") }}
              </span>
              <h3 class="banner__title">
                <router-link to="/phd">
                  {{ $t("External PhD Degrees") }}
                  <br />

                  {{ $t("UK") }}
                </router-link>
              </h3>
              <router-link to="/phd" class="e-btn e-btn-2">
                {{ $t("Find Out More") }}
              </router-link>
            </div>
            <div class="banner__thumb d-none d-sm-block d-md-none d-lg-block">
              <img src="../../assets/img/banner/banner-img-1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div
            class="banner__item p-relative mb-40"
            :style="{
              background:
                'url(' +
                require('../../assets/img/banner/banner-bg-2.jpg') +
                ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="banner__content">
              <span class="orange"> {{ $t("New") }} </span>
              <h3 class="banner__title">
                <router-link to="/uk-universities">
                  {{ $t("Distance Courses") }}
                  <br />
                  {{ $t("From UK Universities") }}
                </router-link>
              </h3>
              <router-link to="/uk-universities" class="e-btn e-btn-2">
                {{ $t("View Courses") }}
              </router-link>
            </div>
            <div
              class="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block"
            >
              <img src="../../assets/img/banner/banner-img-2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div
            class="banner__item p-relative mb-40"
            :style="{
              background:
                'url(' +
                require('../../assets/img/banner/banner-bg-1.jpg') +
                ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="banner__content">
              <span>
                {{ $t("New") }}
              </span>
              <h3 class="banner__title">
                <router-link to="/ms-analytics">
                  {{ $t("Professional Certificates") }}
                  <br />
                  {{ $t("in Data analytics") }}
                </router-link>
              </h3>
              <router-link to="/ms-analytics" class="e-btn e-btn-2">
                {{ $t("Find Out More") }}
              </router-link>
            </div>
            <div class="banner__thumb d-none d-sm-block d-md-none d-lg-block">
              <img
                src="../../assets/img/Ms_Data_Analytcs/analytcs-2.png"
                width="180px"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div
            class="banner__item p-relative mb-40"
            :style="{
              background:
                'url(' +
                require('../../assets/img/banner/banner-bg-2.jpg') +
                ')',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <div class="banner__content">
              <span class="orange">
                {{ $t("New") }}
              </span>
              <h3 class="banner__title">
                <router-link to="/short-courses">
                  {{ $t("Ai Tools Training") }}
                  <br />
                  {{ $t("and Development") }}
                </router-link>
              </h3>
              <router-link to="/short-courses" class="e-btn e-btn-2">
                {{ $t("Find Out More") }}
              </router-link>
            </div>
            <div
              class="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block"
            >
              <img
                src="../../assets/img/Ms_Data_Science/data-science-1.png"
                width="180px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerArea",
};
</script>
