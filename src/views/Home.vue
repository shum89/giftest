<template>

  <div class="home">
    <div class="home__gif-wrap">
      <video-gif  main="video"
      modificator="video_main"
      :srcGif="gifUrl" :srcMp4="gifMp4"/>
  <Button @click='handleUpload()'/>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted,
} from 'vue';
import Button from '@/components/UI/Button.vue';
import Video from '@/components/UI/Video.vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    /**
     * get gif with different format
     */
    const gifUrl = computed(() => store.getters.getGif);
    const gifMp4 = computed(() => store.getters.getGifMp4);
    /**
     * fetch gif
     */
    onMounted(() => {
      store.dispatch('fetchGif');
    });
    /**
     * handle  gif upload
     */
    const handleUpload = () => {
      const historyData = JSON.parse(localStorage.getItem('data') || '[]');
      /**
       * prevent duplicate gifs
       */
      if (historyData.some((i: { id: string }) => i.id === store.getters.getData.id)) {
        store.dispatch('fetchGif');
        return;
      }
      historyData.push(store.getters.getData);
      localStorage.setItem('data', JSON.stringify(historyData));
      store.dispatch('downloadGif');
      store.dispatch('fetchGif');
    };
    return {
      store,
      handleUpload,
      gifUrl,
      gifMp4,
    };
  },
  name: 'Home',
  components: {
    Button,
    'video-gif': Video,
  },
});
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  transform: translateY(-12.5px);
}
.home__gif-wrap {
  width: calc(453/866 * 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 866px) {
  .home {
    transform: translateY(0);
  }

}

</style>
