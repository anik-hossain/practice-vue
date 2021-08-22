<template>
  <router-link class="post" :to="{name: 'PostDetails', params: {id: post.id}}">
    <div class="post-card">
      <!-- Display Event Data -->
      <h4>{{ post.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-card{
  border: 1px solid #39495c;
  cursor: pointer;
  width: 250px;
  margin: 0 auto 18px auto;
  padding: 20px;
}
.post-card:hover{
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .2);
}

.post{
  color: #2c3e50;
  text-decoration: none;
}

</style>
