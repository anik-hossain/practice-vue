<template>
  <div class="notification-container">
      <NotificationBar v-for="notification in notifications" :key="notification.id" :notification="notifications"/>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import {mapState} from 'vuex'

export default {
    components: {
        NotificationBar
    },
    computed: mapState('notification', ['notifications'])
}
</script>

<style scopped>
.notification-container{
    padding-right: 40px;
    position: fixed;
    right: 5px;
    bottom: 0px;
}
</style>