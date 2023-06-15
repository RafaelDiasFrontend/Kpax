<template>
  <div class="">server erro o teu cu</div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.structuredData }],
      title: this.title,
      image: this.image,
      link: [
        {
          rel: "canonical",
          href: "http://agenciakpax.com.br",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title,
        },
      ],
    };
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Recipe",
        // More structured data...
      },
      title: "Agência de Marketing Digital Santos",
      image: "https://kpaxexperience.s3.amazonaws.com/kpax.jpg",
      description:
        "Agência kpax é uma empresa de marketing digital, nossos principais serviços são: Site, Loja Virtual, SEO, Marketing Digital e Podcast, entre e confira os nossos projetos",
      testimonials: [],
      products: [],
      clients: [],
      email: "",
      name: "",
      subject: "",
      message: "",
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brazil",
          addressRegion: "SP",
          streetAddress: "Praça coronel fernando prestes 8",
        },
        description: "Agência de marketing Digital",
        name: "Agência Kpax",
        telephone: "13-98125-1672",
      },
    };
  },

  methods: {
    async addToNewsletter() {
      try {
        let data = {
          email: this.email,
        };
        let newsletters = await this.$axios.$post("/api/newsletters", data);
        this.$swal(
          "Parabens!",
          "Seu email foi adicionado com sucesso!",
          "success"
        );
        this.newsletters.push(data);
      } catch (err) {
        console.log(err);
      }
    },

    async onDeleteProduct(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/products/${id}`);
        if (response.status) {
          this.products.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.home-page {
  background: #f6f7f9;
}
.newsletter {
  padding: 4em 0 6em 0;
  background: #fff;
}
.section-title {
  color: #f6f7f9;
}

.all-products {
  background: #f6f7f9 !important;
  padding: 1em 0 4.5em 0;
}
.product_title {
  font-size: 1.09rem;
}
.product_price {
  font-size: 0.89rem;
  color: #aaaaaa;
}
</style>
