<template>
  <div class="wrapper">
      <div class="content">
          <section class="content__vertical page-wrap">
              <header class="page">
                <h1>All rooms</h1><hr>
                <p>
                  <router-link :to="{ name: 'StartRooms'}">Home</router-link>
                </p>
              </header>
              <div class="rooms">
                <info-comp  class="room" v-for="(item, index) in this.listrooms" :item="item" :key="index" :vertical="vertical" />
              </div>
          </section>
      </div>
    </div>
</template>

<script>
import InfoComp from './common/InfoComp';
export default {
  components: {
    InfoComp
  },
  name: 'AllRooms',
  props: ['listrooms'],
  data() {
    return {
      vertical:true
    }
  }

}
</script>