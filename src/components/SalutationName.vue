<template>
  <div>
    <select @change="$emit('update:salutation', $event.target.value)">
      <option value="">-</option>
      <option
        v-for="item of salutations"
        :key="item"
        :value="item"
        :selected="salutation === item"
      >
        {{ item }}
      </option>
    </select>
    <input
      @input="$emit('update:name', $event.target.value)"
      type="text"
      :value="name"
    />
  </div>
</template>

<script>
const salutations = ["Ms.", "Mrs.", "Miss", "Mx.", "Dr"];

export default {
  props: {
    salutation: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {
      salutations,
    };
  },
};
</script>

<style></style>
