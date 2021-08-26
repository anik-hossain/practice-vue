<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="creteEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your events</h3>
      <div class="field">
        <label>Title</label>
        <input type="text" placeholder="Add an event title" v-model="event.title">
      </div>
      <div class="field">
        <label>Description</label>
        <input type="text" placeholder="Add a description" v-model="event.description">
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Locataion</label>
        <input type="text" placeholder="Add a location" v-model="event.location">
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit">
    </form>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker'

export default {
  components: {
    DatePicker
  },
  data(){
    const times = [];
    for(let i = 0; i<=24; i++){
      times.push(i + ':00')
    }
    return{
      categories: this.$store.state.categories,
      event: this.createEventObject(),
      times
    }
  },
  methods: {
    creteEvent(){
      this.$store.dispatch('createEvent', this.event).then(()=>{
        this.$router.push({
          name: 'event-show',
          params: {id: this.event.id}
        })
        this.event = this.createEventObject
      }).catch(err=>{})
    },
    createEventObject(){
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000)

      return{
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
form{
  width: 300px;
  margin: 0 auto;
}
.field{
  margin-bottom: 24px;
}

label{
  color: #a8a4a4;
  font-weight: 300;
  display: block;
  text-align: left;
  margin-left: 25px;
  margin-bottom: 5px;
}

input,
select{
  width: 240px;
  height: 35px;
  padding: 5px;
  box-sizing: border-box;
}
select{
  text-transform: capitalize;
}
input:focus,
select:focus{
  outline: none;
}
</style>