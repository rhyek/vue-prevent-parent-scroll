## Description

A Vue directive that prevents vertical scrolling outside the current element when top or bottom are reached.

## Installation

`npm install --save vue-prevent-parent-scroll`

## Example

```js
import Vue from 'vue'

Vue.use(require('vue-prevent-parent-scroll'))
```

```html
<div id="parent">
  <div id="scrollable-child" v-prevent-parent-scroll>
  </div>
</div>
```