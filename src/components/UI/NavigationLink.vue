<template>
<router-link
class="navigation-link"
active-class="navigation-link_active">
{{name}}
<slot></slot>
</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationLink',
  props: {
    name: String,
  },
});
</script>

<style scoped>
.navigation-link {
  text-decoration: none;
  text-align: left;
  font-family:'Roboto';
  font-style: normal;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 0;
  color: #707070;
  cursor: pointer;
}
.navigation-link_active {
  color: black;
}

</style>
