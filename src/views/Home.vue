<template>
  <div class="home">
    <SalutationName
      v-model:salutation.capitalize="form.salutation"
      v-model:name.capitalize="form.name"
    />
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import SalutationName from "@/components/SalutationName.vue";
import { reactive } from "vue";

export default {
  name: "Home",
  components: {
    SalutationName,
  },
  setup() {
    const form = reactive({
      salutation: "",
      name: "",
    });

    return {
      form,
    };
  },
};
</script>
