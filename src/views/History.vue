<template>
<div>
    <p class='history__no-gifs' v-if="paginateData.length === 0">You don't have any gifs</p>
    <ul class="history">
      <li v-for="gif in paginateData" :key="gif.id" class="history__list-item">
        <div class="history__gif-container">
        <video-gif
        main="video"
        modificator="video_history"
        :srcMp4="gif.images.original.mp4"
        :srcGif="gif.images.original.webp"
         :imageAlt="gif.title ? gif.title : `User ${gif.username} didn't name this GIF`">

         <button class="history__delete-button" type="button" @click="deleteGif(gif.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path class="history__delete-icon" d="M17 2h-3.5l-1-1h-5l-1
            1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z"/>
          </svg>
        </button>
         <div class="history__gif-overlay"></div>
        </video-gif>
        </div>
        <div class="history__text-container">
        <p class="history__gif-title">
          {{gif.title ? gif.title : `User ${gif.username} didn't name this GIF`}}
        </p>
        <p class="history__gif-date">{{gif.import_datetime}}</p>
        </div>
      </li>
    </ul>
    <nav class="history__navigation">
    <ul class="history__navigation-list">
      <li class="history__navigation-item">
    <NavigationLink class='history__navigation-item' v-for='page in pages'
    :key="page" :to="`/history/${page}`" >{{page}}</NavigationLink>
    </li>
    </ul>
    </nav>
    </div>
</template>
<script lang="ts">
import {
  computed, defineComponent, onMounted, ref,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Video from '@/components/UI/Video.vue';
import NavigationLink from '@/components/UI/NavigationLink.vue';

export default defineComponent({
  setup() {
    const store = useStore();
    const state = ref(0);
    const arrayOfGifs = ref([]);
    const route = useRoute();
    const router = useRouter();
    /**
     * compute number of pages for navigation
     */
    const pages = computed(() => {
      const pagesArray: number[] = [];
      const pagesNumber = Math.ceil(store.getters.getGifData.length / 5);
      for (let i = 1; i <= pagesNumber; i += 1) {
        pagesArray.push(i);
      }
      return pagesArray;
    });
    /**
     * Handles display of 5 items or less
     */
    const paginateData = computed(() => {
      if (route.params.id) {
        state.value = Number(route.params.id) - 1;
      }
      const start = state.value * 5;
      const end = start + 5;
      arrayOfGifs.value = store.getters.getGifData.slice(start, end);
      if (arrayOfGifs.value.length === 0 && Number(route.params.id) > 1 && route.params.id) {
        router.push(`${Number(route.params.id) - 1}`);
      }
      return arrayOfGifs.value;
    });
    /**
     * handles gif delete
     */
    const deleteGif = (id: string) => {
      store.dispatch('deleteGif', id);
    };
    /**
     * dispatch gif array
     */
    onMounted(() => {
      store.dispatch('downloadGif');
    });
    return {
      store,
      deleteGif,
      state,
      pages,
      paginateData,
      arrayOfGifs,
    };
  },
  name: 'History',
  components: {
    'video-gif': Video,
    NavigationLink,
  },
});
</script>
<style scoped>
.history {
  list-style: none;
  padding: 0;
  grid-row: 2;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-12.5px);
  margin-bottom: 72px;
  margin-right: 122px;
  margin-left: auto;
  width: 62%;
}
.history__list-item {
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  width: 100%;
}
.history__list-item:last-of-type {
  margin-bottom: 0;
}
.history__gif-container {
  max-width: 169px;
  width: 100%;
  position: relative;
  margin-right: 27px;
}

.history__delete-button {
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 3;
}

.history__delete-button:hover {
  transform: scale(1.2);
}

.history__delete-icon {
  display: block;
  fill-opacity: 0.54;
  z-index: 2;
}

.history__gif-overlay {
    background-color: rgba(70, 70, 70, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
}
.history__text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 340px;
}

.history__gif-title {
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0;
  margin-top: 0;
  margin-bottom: 5px;
}

.history__gif-date {
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 0;
    margin: 0;
}
.history__delete-icon:hover {
    fill-opacity: 1;
}
.history__delete-button:hover + .history__gif-overlay {
  opacity: 1;
  z-index: 2;
}
.history__navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.history__navigation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history__no-gifs {
  font-size: 64px;
  margin-left: 30px;

}

@media screen and (max-width: 888px) {
  .history{
    transform: translateY(0);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .history__gif-title {
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0;
  margin-top: 0;
  margin-bottom: 5px;
}

.history__gif-date {
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0;
    margin: 0;

}
@media screen and (max-width: 718px) {
  .history__list-item {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
  .history__gif-container {
    margin-right: 0;
    width: 100%;
    max-width: calc(100% - 48px);
    margin-bottom: 15px;
  }
  .history__text-container {
    align-items: flex-start;
    width: 100%;
    max-width: calc(100% - 48px);
    text-align: left;
  }
}

}

</style>
