<template>
  <div class="notification-bar" :class="classType">
      <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    beforeDestroy(){
        clearTimeout(this.timeout)
    },
    computed: {
        classType(){
            return `-text-${this.notification.type}`
        }
    },
    data(){
        return{
            timeout: null
        }
    },
    mounted(){
        this.timeout = setTimeout(()=> this.remove(this.notification), 5000)
    },
    methods: mapActions('notification', ['remove']),
    props: {
        notification: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scopped>
.notification-bar{
    margin: 1em 0 1em;
}
</style>