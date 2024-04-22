<template>
  <section class="events__area pt-60 pb-120 p-relative">
    <div class="events__shape">
      <img
        class="events-1-shape"
        src="../../assets/img/events/events-shape.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-4 offset-xxl-4">
          <div class="section__title-wrapper mb-60 text-center">
            <h2 class="section__title">
              {{ $t("Current Events") }}
              <!-- <span class="yellow-bg yellow-bg-big">
                {{ $t("Events")
                }}<img src="../../assets/img/shape/yellow-bg.png" alt=""
              /></span> -->
            </h2>
            <p>
              {{ $t("We found 4 events available for you.") }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="event in EventData"
          :key="event.id"
          class="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1"
        >
          <div class="events__item mb-10 hover__active">
            <div
              class="events__item-inner d-sm-flex align-items-center justify-content-between white-bg"
            >
              <div class="events__content">
                <div class="events__meta">
                  <span>{{ event.date }}</span>
                  <span>{{ event.time }}</span>
                  <span>{{ event.city }}</span>
                </div>
                <h3 class="events__title">
                  <a :href="event.path" target="_blank">{{ event.title }} </a>
                </h3>
              </div>
              <div class="events__more">
                <a :href="event.path" target="_blank" class="link-btn">
                  {{ $t("View More") }}
                  <i class="far fa-arrow-right"></i>
                  <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventArea",
  data() {
    return {
      EventData: [
        {
          id: 1,
          title: "IEEE on Data Mining",
          date: "Jun 14, 2022",
          time: "12:00 am - 2:30 pm",
          city: "New York",
          path: "https://icdm2024.org/",
        },
        {
          id: 2,
          title: "ICEDL - Distance Learning Conference",
          date: "April 10, 2022",
          time: "9:00 am - 5:00 pm",
          city: "Mindahan",
          path: "https://www.icedl.org/",
        },
        {
          id: 3,
          title: "Open Ai Conference",
          date: "July 16, 2022",
          time: "10:30 am - 1:30 pm",
          city: "Weedpatch",
          path: "https://openai.com/blog/announcing-openai-devday",
        },
        {
          id: 4,
          title: "EDUCAUSE",
          date: "March 24, 2022",
          time: "10:30 am - 12:00 pm",
          city: "Lnland",
          path: "https://events.educause.edu/annual-conference",
        },
      ],
    };
  },
};
</script>
