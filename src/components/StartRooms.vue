<template>
    <div class="wrapper">
        <div class="content">

            <section class="content__horisontal">
                <draggable tag="div" :list="listRooms" class="rooms" group="people" @start="drag=true" @end="drag=false" :sort="true">  
                        <info-comp  class="room" v-for="(item, index) in listRooms" :item="item" :key="index" :data-id="index" :index="index"/><!--render horizontal rooms block-->
                </draggable>
            </section>

            <section class="content__vertical">
                <header>
                    <h1>Rooms</h1><hr>
                    <div class="search">
                        <input type="search" id="site-search" name="q" aria-label="Search room" 
                        v-model="searchQuery"
                        v-on:keypress.enter="search"
                        placeholder="Search">
                    </div>
                </header>
                
                <div class="rooms">
                    <info-comp  class="room" v-for="(item, index) in listRooms.slice(0, 3)" :item="item" :key="index" :vertical="vertical" :index="index"/><!--render vertical rooms block-->
                </div>
                <div class="rooms__all">
                    <router-link tag="a" :to="{name: 'AllRooms', params: {listrooms:listRooms}}">All rooms</router-link>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import itemRoom from '../services/generator';
import InfoComp from './common/InfoComp';
export default {
    components:{
        InfoComp,
        draggable
    },
    data(){
        return {
            listRooms: [new itemRoom, new itemRoom, new itemRoom, new itemRoom],
            vertical: true,
            searchQuery: '',
        }
    },
    methods: {
        search() {
            this.$router.push({
                path: '/search',
                query: {
                    str: this.searchQuery
                }
            });
        }
    },
}
</script>

<style lang="scss">

</style>