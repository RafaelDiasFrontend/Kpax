<template>
  <section id="testimonials">
    <div class="carousel-wrapper">
      <h2 class="text-center h2">O que dizem nossos <b>clientes</b></h2>
      <client-only>
        <slick :options="slickOptions">
          <div
            v-for="profissional in profissionais"
            :key="profissional.id"
            class="img-wrapper mt-slick default-width"
          >
            <v-card class="ma-2">
              <v-container class="testimonials-card-grid">
                <div class="testimonials-card-header">
                  <v-icon size="32" color="grey" class="quotation-marks"
                    >format_quote</v-icon
                  >
                </div>
                <div class="testimonials-card-body">
                  <p class="quote-title regular-1 gray pl-1">
                    {{ profissional.quote }}
                  </p>
                </div>
                <div
                  class="testimonials-card-footer d-flex justify-space-between align-center mb-1"
                >
                  <span class="h4 gray font-weight-bold">{{
                    profissional.name
                  }}</span>
                  <v-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                </div>
              </v-container>
            </v-card>
          </div>
        </slick>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        arows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        slidesToShow: 4,
        touchThreshold: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
      profissionais: [
        {
          name: "Ana",
          quote:
            "Site Clean, fácil de usar, rápido e funcional. Ansiosa para iniciar novos projetos. Parabéns!!",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Jorge",
          quote:
            "Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Jorge",
          quote:
            "Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Jorge",
          quote:
            "Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Jorge",
          quote:
            "Fiquei surpreso com o resultado da Integrace. Em uma semana praticamente, fiz de serviços o que meu escritório fazia em um MÊS.",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Rafael Dias",
          quote: "Integrace foi um prazer fechar negócio com vocês!",
          especialidade: "Engenharia Mecanica",
        },
        {
          name: "Osvaldo",
          quote: "Site muito rápido e clean parabens!",
          especialidade: "Engenharia Mecanica",
        },
      ],
    };
  },
};
</script>

<style>

.carousel-wrapper {
  padding: 3.5em 0 2em 0;
  max-width: 1335px;
  margin: 0 auto;
}

.img-wrapper img {
  margin: auto;
  width: 40px;
  height: auto;
  background-color: red;
}

.mt-slick {
  margin-top: 3.2em;
}

.quotation-marks {
  transform: rotateY(3.142rad);
}

.quote-title {
  font-size: 0.94rem;
  line-height: 1.4;
}

.testimonials-card-grid {
  display: grid;
  grid-template-rows: 30px 120px 30px;
  padding: 1em;
  grid-row-gap: 5px;
  margin-left: 0.4em;
}

.testimonials-card-header {
  display: flex;
  align-items: center;
}

.testimonials-card-body {
  display: flex;
  align-items: center !important;
}

.testimonials-card-footer {
  align-items: center !important;
}
</style>
