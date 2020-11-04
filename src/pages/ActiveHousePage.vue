<template>
  <div class="active-house col-6 offset-3 mt-5 card text-center">
    <img :src="house.imgUrl" class="img-fluid" alt="">
    <h3>{{ house.bedrooms }} {{ house.bathrooms }}</h3>
    <p>{{ house.price }} {{ house.year }}</p>
    <p>{{ house.description }}</p>
    <button class="btn btn-danger mb-3" @click="removeHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { houseService } from '../services/HouseService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveHouse',
  setup() {
    const route = useRoute()
    onMounted(() => {
      houseService.getActiveHouse(route.params.houseId)
    })
    return {
      house: computed(() => AppState.activeHouse),
      removeHouse() {
        houseService.removeHouse(route.params.houseId)
      }
    }
  }
}
</script>

<style scoped>

</style>
