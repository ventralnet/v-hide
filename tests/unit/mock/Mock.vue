<template>
  <div v-hide="isHide" class="sample-div"></div>
</template>

<script>
  import '@/vHide';

  export default {
    props: {
      isHide: Boolean,
    },
  };
</script>
