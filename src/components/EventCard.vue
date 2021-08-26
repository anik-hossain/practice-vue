<template>
  <router-link class="event" :to="{name: 'EventDetails', params: {id: event.id}}">
      <!-- Display Event Data -->
    <div class="event-card -shadow">
      <sapn class="eyebrow">@{{ event.time }} on {{ event.date }}</sapn>
      <h4>{{ event.title }}</h4>
      <h5>{{ event.attendees.length }}</h5>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event{
  color: #2c3e50;
  margin: 0 auto;
  text-decoration: none;
}

.event-card{
  border: 1px solid #39495c;
  cursor: pointer;
  width: 250px;
  margin: 0 auto 18px auto;
  padding: 20px;
}
.event-card:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .2);
}


</style>
