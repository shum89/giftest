<template>
 <div :class='[main, modificator]'>
      <video
      ref="videoRef"
      :key="srcMp4"
      :class='[main, modificator]'
      loop
      muted
      playsinline
      preload="auto"
      autoplay
      class='video__gif'>
        <source :src='srcMp4' type="video/mp4"><source/>
        <img :src='srcGif'/>
      </video>
      <slot></slot>
    </div>
</template>

<script lang='ts'>
import {
  defineComponent, onActivated, Ref, ref,
} from 'vue';

export default defineComponent({
  setup() {
    const videoRef: Ref = ref();
    /**
    keep-alive freezes video;
     */
    onActivated(() => {
      videoRef.value.load();
    });
    return {
      videoRef,
    };
  },
  name: 'Video',
  props: {
    srcMp4: String,
    srcGif: String,
    modificator: String,
    main: String,
  },
});
</script>

<style>
.video {
  position: relative;
  width: 100%;
  align-self: center;
  margin-bottom: 31px;
}
.video_main::before {
  display: block;
  content: '';
  width: 100%;
  padding-bottom: calc(252 * 100% / 453);
}
.video_history {
  margin: 0;
}
.video_history::before {
  display: block;
  content: '';
  width: 100%;
  padding-bottom: calc(88 * 100% / 169);
}
.video__gif {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: inherit;
  object-position: center;
}

</style>>
