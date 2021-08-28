<template>
  <div>
    <select @change="updateSalutatation">
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
    <input @input="updateName" type="text" :value="name" />
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
    salutationModifiers: {
      default: () => ({}),
    },
    name: {
      type: String,
      default: "",
    },
    nameModifiers: {
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const updateSalutatation = (e) => {
      let value = e.target.value;

      if (props.salutationModifiers.capitalize) {
        value = value.toUpperCase();
      }

      emit("update:salutation", value);
    };
    const updateName = (e) => {
      let value = e.target.value;

      if (props.nameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }

      emit("update:name", value);
    };
    return {
      salutations,
      updateSalutatation,
      updateName,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: none;
}
select,
input {
  margin: 5px;
  padding: 5px;
}
</style>
