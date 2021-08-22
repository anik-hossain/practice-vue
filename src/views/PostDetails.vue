<template>
    <div class="post" v-if="post">
          <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>

<script>

import PostService from '@/services/PostService'

export default {
    data(){
        return{
            post: null,
        }
    },
    created(){
        PostService.getPost(this.id)
        .then(response => this.post = response.data)
        .catch(err =>{console.log(err);})
    },
    props: ['id']
}
</script>

<style scoped>
.post{
    width: 70vw;
    margin: 0 auto;
}
</style>