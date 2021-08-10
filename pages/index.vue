<template>
  <div>
    <Indrod />
    <Why />
    <Companies />
    <ContactWay />
  </div>
</template>

<script>
import Publishers from '~/components/templates/home/Publishers.vue'
import ContactWay from '~/components/templates/home/ContactWay.vue'
import Indrod from '~/components/templates/home/Indrod.vue'
import Why from '~/components/templates/home/Why.vue'
import Companies from '~/components/templates/home/Companies.vue'

export default {
  components: { Publishers, ContactWay, Indrod, Why, Companies }
}
</script>