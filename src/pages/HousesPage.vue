<template>
  <div class="houses-page container-fluid">
    <h1>Homes</h1>
    <!-- Button trigger modal -->
    <button type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#houseModal">
      Post
    </button>
    <hr>
    <!-- Modal -->
    <div class="modal fade" id="houseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Post A Home</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="createHouse">
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Bedrooms"
                    v-model="state.newHouse.bedrooms"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Bathrooms"
                    v-model="state.newHouse.bathrooms"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Description"
                    v-model="state.newHouse.description"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="ImgUrl"
                    v-model="state.newHouse.imgUrl"
              >
              <input type="number"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Year"
                    v-model="state.newHouse.year"
              >
              <input type="number"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Price"
                    v-model="state.newHouse.price"
              >
              <input type="number"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Levels"
                    v-model="state.newHouse.levels"
              >
              <button type="submit" class="btn btn-info btn-block">
                Create House
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-around">
      <house-component v-for="house in houses" :key="house._id" :house-prop="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { houseService } from '../services/HouseService'
import HouseComponent from '../components/HouseComponent'
import { AppState } from '../AppState'

export default {
  name: 'HousesPage',
  setup() {
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      houseService.getHouses()
    })
    return {
      state,
      houses: computed(() => AppState.houses),
      createHouse() {
        houseService.createHouse()
      }
    }
  },
  components: {
    HouseComponent
  }
}
</script>

<style lang="scss" scoped>
  input, button {
    margin-top: .5em;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
