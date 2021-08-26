<template>
  <div class="events">
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link :to="{naem: 'Home', query: { page: page - 1 }}" rel="prev">Prev Page</router-link> |
    </template>
    <router-link :to="{naem: 'Home', query: { page: page + 1 }}" rel="next">Next Page</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    EventCard,
  },
  created(){
    this.$store.dispatch('fetchEvents', {
      per_page: 2,
      page: this.page
    })
  },
  computed: {
    page(){
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['event', 'user'])
  }
};
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
