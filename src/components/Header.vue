<template>
<header class="header">
  <nav class="header__navigation">
    <ul class="header__navigation-list">
      <li class="header__navigation-item">
        <NavigationLink to="/" name="Главная"/>
      </li>
      <li>
        <NavigationLink :class="activeClassHistory" to="/history" name="История"/>
      </li>
    </ul>
  </nav>
</header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import NavigationLink from '@/components/UI/NavigationLink.vue';

export default defineComponent({
  setup() {
    const route = useRoute();
    /**
     * active class for History link
     */
    const activeClassHistory = computed(() => {
      const activeClass = (route.path.includes('history')) ? 'header__navigation_active' : '';
      return activeClass;
    });
    return {
      activeClassHistory,
    };
  },
  name: 'Header',
  components: {
    NavigationLink,
  },
});
</script>

<style scoped>
.header {
  display: flex;
  flex: 1;
  margin: 29px 48px 40px 48px;
  min-height: 64px;
  align-items: center;
  border: 1px solid #707070;
  font-family:'Roboto', Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: left;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0;
  color: #707070;
}
.header__navigation-list {
  display: flex;
  flex: 1;
  list-style: none;
  margin-left: 30px;
  margin-right: auto;
  padding:0;
}
.header__navigation-item {
  margin-right: 30px;
}

.header__navigation-item:last-of-type {
  margin-right: 0;
}
.header__navigation_active {
  color: black;
}

</style>
