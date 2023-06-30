# v-hide

## Overview
v-hide is a Vue.js 2 and 3 directive that allows for conditional rendering maintaining rendered layout space in the DOM.
Simply put... v-hide will add `visibility: hidden;` or `visibility: visible` styles based on a boolean vue expression

Live Demo [V-Hide Demo](https://polite-bonbon-abd119.netlify.app/)

## Purpose
Vue.js provides you with two conditional rendering options; v-if and v-show.  v-if will competely remove an item from
the DOM.  v-show will set `display: none` style which hides your item and removes it from the rendering of the DOM.

The key feature v-hide provides is to allow conditional rendering but also include the items dimensions if it is hidden.  More specifically v-hide will set the style `visibility: hidden;` or `visibility: visible`.  This may help with some layouts.  See the Live Demo [V-Hide Demo](https://polite-bonbon-abd119.netlify.app/) to show the conditional rendering options.

# Important!

For vue2 use the npm ^1.0.0 version

For vue3 use the npm ^3.0.0 version

## Installation

### Vue2
```Bash
npm install @ventralnet/v-hide@^1.0.0 --save
```

### Vue3
```Bash
npm install @ventralnet/v-hide@^3.0.0 --save
```

```javascript
/* 
  In vue2 (v-hide v^1.0.0) you don't need to add v-hide as a directive, just import the 
  dependency
*/
import '@ventralnet/v-hide' // in your main vue entrypont

/*
 In Vue 3 you need to import the directive definition and add it to your vue app
*/
import vHide from '@ventralnet/v-hide';

...

const myApp = createApp({...});

...

myApp.directive('hide', vHide);


...

<div v-hide="isThisHidden"></div>
```

## Sample Use

```javascript

<template>
   <div v-hide="isHidden">Hi!</div>
</template>

<script>
import '@ventralnet/v-hide'  // Import vHide in your main entry point after importing Vue
                            // vHide will automatically add itself as a directive to the global Vue object
export default {
  data() {
    return {
      isHidden: false,
    };
  }
};
</script>
```

## Building
```Bash
npm install
npm run test:unit
npm run serve # Serves the sample demo
npm run build # builds the library module to dist/
npm run build-example # builds the example site to dist/example
```
