<template>
  <div class="component-1">
    <p>Component 1</p>

    <!-- Include Component 2 directly to create a separate CSS chunk. -->
    <component-2 class="edited-component-2" colorHint="rebeccapurple"/>
  </div>
</template>

<script>
import Component2 from '@/components/Component2';

export default {
  components: {
    Component2,
  },
};
</script>

<style lang="scss" scoped>
p {
  color: green;
}

.edited-component-2 /deep/ p {
  color: rebeccapurple;
}
</style>
