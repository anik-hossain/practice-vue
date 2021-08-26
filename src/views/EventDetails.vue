<template>
    <div class="event" v-if="event">
        <div class="event-header">
            <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
            <h1>{{ event.title }}</h1>
            <h5>Organized by {{event.orgainzer}}</h5>
            <h5>Category: {{ event.category }}</h5>
            <address>{{ event.location }}</address>
            <h2>Event Details</h2>
            <p>{{event.description}}</p>

            <h2>Attendees</h2>
            <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>

            <ul class="list-group">
                <li v-for="(attendee, index) in event.attendees" :key="index">
                    <b>{{ attendee.name }}</b>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    created(){
        this.$store.dispatch('fetchEvent', this.id)
    },
    computed: mapState({
        event: state => state.event.event
    }),
    props: ['id']
}
</script>

<style scoped>
ul,
li{
    list-style: none;
}
.event{
    margin: 0 auto;
    text-align: center;
    width: 70vw;
}
</style>