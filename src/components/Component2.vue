<template>
  <div class="component-2">
    <p>Component 2 <strong>Should be <em>{{colorHint}}</em></strong></p>
  </div>
</template>

<script>
export default {
  props: {
    colorHint: {
      type: String,
      default: 'orange',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.component-2 p {
  color: orange;
}
</style>
