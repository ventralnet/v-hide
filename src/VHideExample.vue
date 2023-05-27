<template>
  <div>
    <h1>V-Hide</h1>
    <h2>Example</h2>

    <p>
      Vue.js is a great tool.  Out of the box it provides you with two options
      for conditional rendering: <em>v-if</em> and <em>v-show</em>.
    </p>

    <p>
      These two options are great, if not all you need for conditional rendering
      in your projects.
    </p>

    <p>
      <strong>v-if</strong>: will completely remove the component from the HTML DOM
    </p>

    <p>
      <strong>v-show</strong>: will apply the style <em>display: none;</em> to the
      component's container
    </p>

    <p>
      Both of these options perform as advertised however both will completely remove the DOM
      from rendering.  Sometimes you would like to hide the element but keep its rendered 'space' in
      the DOM for layout purposes.  <strong>v-hide</strong> facilites this.
    </p>

    <section>
      <h2>v-if example:</h2>
      <p>
        Notice when you toggle div-a on and off with <strong><em>v-if</em></strong> the
        space occupied in the DOM layout disappears and div-b shifts left.
      </p>
      <label for="vIfToggle">
        <input
        id="vIfToggle"
        name="vIfToggle"
        type="checkbox"
        v-model="toggles.vIf" >
        v-if = {{ toggles.vIf }}
      </label>
      <br>
      <div class="example-container">
        <div v-if="toggles.vIf" class="example-div example-div-a"><h3>div-a</h3></div>
        <div class="example-div example-div-b"><h3>div-b</h3></div>
      </div>
    </section>

    <section>
      <h2>v-show example:</h2>
      <p>
        Notice when you toggle div-a on and off with <strong><em>v-show</em></strong> the
        space occupied in the DOM layout disappears and div-b shifts left.
      </p>
      <label for="vShowToggle">
        <input
        id="vShowToggle"
        name="vShowToggle"
        type="checkbox"
        v-model="toggles.vShow" >
        v-show = {{ toggles.vShow }}
      </label>
      <br>
      <div class="example-container">
        <div v-show="toggles.vShow" class="example-div example-div-a"><h3>div-a</h3></div>
        <div class="example-div example-div-b"><h3>div-b</h3></div>
      </div>
    </section>

    <section>
      <h2>v-hide example:</h2>
      <p>
        Notice when you toggle div-a on and off with <strong><em>v-hide</em></strong> the
        space occupied in the DOM layout DOES NOT disappears and div-b stays put.
      </p>
      <label for="vHideToggle">
        <input
        id="vHideToggle"
        name="vHideToggle"
        type="checkbox"
        v-model="toggles.vHide" >
        v-hide = {{ toggles.vHide }}
      </label>
      <br>
      <div class="example-container">
        <div v-hide="toggles.vHide" class="example-div example-div-a"><h3>div-a</h3></div>
        <div class="example-div example-div-b"><h3>div-b</h3></div>
      </div>
    </section>
  </div>
</template>

<script>
import vHide from '@/src/lib/vHide';

export default {
  directives: {
    hide: vHide,
  },
  data() {
    return {
      toggles: {
        vShow: true,
        vIf: true,
        vHide: false,
      },
    };
  },
};
</script>

<style scoped>
  h1,h2 {
    text-align: left;
  }

  .example-container {
    border: 1px solid #ccc;
    width: 10rem;
    padding: 2rem;
  }

  .example-div {
    display: inline-block;
    height: 5rem;
    width: 5rem;
  }

  .example-div-a {
    background-color: red;
  }

  .example-div-b {
    background-color: yellow;
  }
</style>
