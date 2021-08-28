<template>
  <div class="home">
    <SalutationName
      v-model:salutation.capitalize="form.salutation"
      v-model:name.capitalize="form.name"
    />
    <BaseInput
      v-model="email"
      @blur="email = 'blur@its.cold'"
      label="Email"
      type="email"
      class="test"
    />
    <pre>{{ email }}</pre>
    <br />
    <pre>{{ form }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import SalutationName from "@/components/SalutationName.vue";
import BaseInput from "@/components/BaseInput.vue";
import { reactive, ref } from "vue";

export default {
  name: "Home",
  components: {
    BaseInput,
    SalutationName,
  },
  setup() {
    const email = ref("");

    const form = reactive({
      salutation: "",
      name: "",
    });

    return {
      email,
      form,
    };
  },
};
</script>
