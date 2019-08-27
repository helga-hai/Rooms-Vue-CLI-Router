<template>
    <div>
        <div class="room__img"><img :src="item.src" alt="Room"></div><!--отримуємо фото з сервісу unsplash.com-->
        <div class="room__info">
            <div  slot="footer"  v-if="vertical" class="room__info--block"><!--якщо секція вертикальна-->
                <div class="room__title">Room {{item.number}}</div>
                <div class="room__description">{{item.description}}</div>
                <div class="room__area"><strong>area:</strong> {{item.area}} m<sup>2</sup></div>
                <div class="room__levels" v-if="item.levels"><strong>levels:</strong> {{item.levels}}</div>
                <div class="room__floor" v-if="item.roomFloor!=='none'"><strong>floor:</strong> {{item.roomFloor}}</div>
                <div class="room__type"> <strong>type:</strong> {{item.type}}</div>
                <div class="room__type" v-if="item.repair"><strong>status:</strong> repair</div>
            </div>
            
            <div v-else class="room__info--block"><!--якщо секція горизонтальна-->
                <div class="room__title">Room {{item.number}}</div>
                <div class="room__description">{{item.description}}</div>
                <div class="room__area"><strong>area:</strong> {{item.area}} m<sup>2</sup></div>
                <div class="room__levels" v-if="item.levels"><strong>levels:</strong> {{item.levels}}</div>
                <div class="room__floor" v-if="item.roomFloor!=='none'"><strong>floor:</strong> {{item.roomFloor}}</div>
                <div class="room__status" v-if="item.repair" :class="'repair-class'">repair</div>
                <div class="room__type" :class="(item.type == 'office') ? 'office-class' : ''">{{item.type}}</div>
            </div>
            <div v-if="vertical"><!--якщо секція вертикальна - додаємо посилання на детальну сторінку-->
                <div slot="link" class="room__link">
                    <router-link :to="{ name: 'details', params: { roomId: item.number, listrooms: [item]}}">read more</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'InfoComp',
    props: {
        listRooms: Array,
        vertical: Boolean,
        item: Object,
        index: Number
    }
}
</script>