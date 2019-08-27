<template>
  <div class="wrapper">
        <div class="content">
            <section class="content__vertical page-wrap">
                <header class="page">
                    <h1>Search</h1><hr>
                    <p>
                      <router-link :to="{ name: 'StartRooms'}">Home</router-link>
                    </p>
                </header>

                <div class="search">
                  <div class="search__title">
                    <h2>Search result: {{searchWord}}</h2>
                  </div>
                </div>

                <div v-if="loading" id="cook"><!--spinner-->
                  <img src="../assets/7.gif">

                </div>

                <div v-else><!--no-spinner-->
                  <div class="rooms">
                    <div class="room" v-for="(item, index) in jpList" :key="index">
                      <div class="room__img"><img src="http://hai-nyzhnyk.in.ua/test/room.png" alt="Room"></div>
                      <div class="room__info">
                          <div class="room__info--block">
                              <div class="room__title">Room {{item.postId}}</div>
                              <div class="room__description">description {{item.body}}</div>
                              <div class="room__area"><strong> {{item.name}}</strong></div>
                              <div class="room__floor" ><strong>by:</strong> {{item.email}}</div>
                          </div>
                          <div slot="link" class="room__link">
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      vertical:true,
      searchWord: this.$route.query.str,
      jpList:[],
      loading:true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(json => {
      this.jpList=json;
      this.loading=false;
    })
  }

}
</script>