<template>
  <div class="home">
    <SalutationName
      v-model:salutation="form.salutation"
      v-model:name.lazy="form.name"
    />
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
