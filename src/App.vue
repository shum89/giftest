<template>
  <Header/>
  <main class="main">
    <div class="main__text-container">
      <navigation-link v-if='$route.name !== "Home"'  :to="linkHistory">
      <svg class="main__arrow-icon" viewBox="0 0 16 16" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
  <path
  d="M 138.816 131.976
  L 162.816 131.976 L 162.816 155.976 L 138.816 155.976 Z" fill="none"></path>
  <path d="M 16 7 L 3.83
   7 L 9.42 1.41 L 8 0 L 0
   8 L 8 16 L 9.41 14.59 L 3.83
   9 L 16 9 L 16 7 Z" bx:origin="0 0"></path>
</svg>
</navigation-link>
    <h1 class="main__title">{{$route.name === 'Home' ? 'Главная' : 'История'}}</h1>
    </div>
      <router-view v-slot="{Component}">
    <keep-alive exclude="History">
    <component :is="Component"></component>
    </keep-alive>
  </router-view>
  </main>
</template>
<script>
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import NavigationLink from '@/components/UI/NavigationLink.vue';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const route = useRoute();
    /**
     * arrow link to navigate backwards
     */
    const linkHistory = computed(() => {
      const link = (route.params?.id && Number(route.params.id > 1)) ? `${Number(route.params.id) - 1}` : '/';
      return link;
    });
    return {
      linkHistory,
    };
  },
  components: {
    Header,
    'navigation-link': NavigationLink,
  },
});
</script>
<style>
@import url(../vendor/normalize.css);
@import url('../vendor/fonts/fonts.css');
.main {
  display: flex;
  font-family:'Roboto', Arial, Helvetica, sans-serif;
  text-decoration: none;
  letter-spacing: 0;
  color: #707070;
  border: 1px solid #707070;
  box-sizing: border-box;
  position: relative;
  margin-left: 48px;
  margin-right: 48px;
  flex-direction: column;
}

.main__title {
  font-style: normal;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0;
  margin-top: 0;
  margin-bottom: 0;
}
.main__text-container {
  display: flex;
  margin-top: 67px;
  margin-left: 30px;
  align-items: center;
}

.main__arrow-icon {
  display: block;
  width: 16px;
  height: 16px;
  padding:8px;
  fill: #707070;
  margin-right: 14px;
}

.main__arrow-icon:hover {
  transform: scale(1.2);
}
@media screen and (max-width: 866px) {
  .main__text-container {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 34px;
  margin-bottom: 20px;
}
}

</style>
