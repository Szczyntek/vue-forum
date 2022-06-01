<template>
  <div class="col-mid text-center">
    <h1>Page Not Found</h1>
    <router-link :to="{name: 'Home'}"><h1>Read some cool posts</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>