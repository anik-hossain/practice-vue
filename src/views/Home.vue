<template>
  <div class="events">
    <h1>User Posts</h1>
    <PostCard v-for='post in posts' :key='post.id' :post='post' />
  </div>
</template>

<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue';
import PostService from '@/services/PostService';

export default {
  name: 'Home',
  components: {
    PostCard,
  },
  data(){
    return{
      posts: null
    }
  },
  created(){
    if(!this.posts){
      PostService.getPosts()
      .then(response =>{
        this.posts = response.data
      })
      .catch(err =>{
        console.log(err);
      })
    }
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
