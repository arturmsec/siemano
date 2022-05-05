<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", {
      getUserProfile: "getUserProfile",
    }),
  }
};
</script>

<template>
  <div>
    <h4>Welcome to homePage!</h4>
  </div>
</template>
