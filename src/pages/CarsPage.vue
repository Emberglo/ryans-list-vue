<template>
  <div class="cars-page container-fluid">
    <h1>Cars</h1>
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
            <h5 class="modal-title" id="exampleModalLabel">Post A Car</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="createCar">
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Make"
                    v-model="state.newCar.make"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Model"
                    v-model="state.newCar.model"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Description"
                    v-model="state.newCar.description"
              >
              <input type="text"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="ImgUrl"
                    v-model="state.newCar.imgUrl"
              >
              <input type="number"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Year"
                    v-model="state.newCar.year"
              >
              <input type="number"
                    class="form-control"
                    aria-describedby="helpId"
                    placeholder="Price"
                    v-model="state.newCar.price"
              >
              <button type="submit" class="btn btn-info btn-block">
                Create Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-around">
      <car-component v-for="car in cars" :key="car._id" :car-prop="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import CarComponent from '../components/CarComponent'
import { AppState } from '../AppState'
export default {
  name: 'CarsPage',
  components: { CarComponent },
  setup() {
    const state = reactive({
      newCar: {}
    })
    onMounted(() => {
      carsService.getAllCars()
    })
    return {
      state,
      cars: computed(() => AppState.cars),
      createCar() {
        carsService.createCar(state.newCar)
      }
    }
  }
}
</script>

<style scoped>
  input, button {
    margin-top: .5em;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
