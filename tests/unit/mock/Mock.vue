<template>
  <div v-hide="isHide" class="sample-div"></div>
</template>

<script>
  import '@/src/lib/vHide';

  export default {
    props: {
      isHide: Boolean,
    },
  };
</script>
