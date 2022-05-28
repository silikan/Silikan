<template>
  <div class="mt-8">

    <div class="mt-10 mx-5 mb-20">
      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <Stats />
    </div>

    <!-- Activity list (smallest breakpoint only) -->
    <div class="shadow">
      <!--



         -->
      <Gig />
      <Request />
      <User />
    </div>
  </div>
</template>

<script>
import Request from ".././Tables/Requests.com.ponent.vue";
import Gig from ".././Tables/Gigs.component.vue";
import User from ".././Tables/Users.component.vue";
import Stats from "../StatsData.component.vue";
export default {
  components: {
    Request,
    Gig,
    User,
    Stats,
  },
};
</script>

<style>
</style>
