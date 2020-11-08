# vue-scroll-check

A simple component based on Vue.js. Detects if an element has scrolled to bottom, top or middle in itself.

## Demo

[Live Demo](https://vue-scroll-check.vercel.app/) | [Codesandbox](https://codesandbox.io/s/vue-scroll-check-6b3x0)

### Install

[![NPM](https://nodei.co/npm/vue-scroll-check.png?downloads=true&downloadRank=true)](https://nodei.co/npm/vue-scroll-check/)

```bash
npm i vue-scroll-check
```

## Props

| Props           | Description                                          |  Type  | Default |
| :-------------- | :--------------------------------------------------- | :----: | :-----: |
| containerClass  | Classes of the component's root element.             | String |         |
| scrollAreaClass | Classes of the component's scrollable child element. | String |         |
| :threshold      | Threshold value of event change.                     | Number |    0    |

## Events

| Events        |
| :------------ |
| onBottomReach |
| onBottomLeave |
| onTopReach    |
| onTopLeave    |
| onMiddleEnter |
| onMiddleLeave |

## Usage

```html
<v-scroll-check
  scrollAreaClass="list"
  :threshold="100"
  @onBottomReach="onBottomReach"
  @onBottomLeave="onBottomLeave"
  @onTopReach="onTopReach"
  @onTopLeave="onTopLeave"
  @onMiddleEnter="onMiddleEnter"
  @onMiddleLeave="onMiddleLeave"
>
  <!-- Send your contents as slot -->
  <div class="item" v-for="i in 50" :key="i">Item {{ i }}</div>
</v-scroll-check>

<script>
  import VScrollCheck from 'vue-scroll-check'

  export default {
    components: {
      VScrollCheck
    },
    methods: {
      onBottomReach() {
        console.log('onBottomReach')
      },
      onBottomLeave() {
        console.log('onBottomLeave')
      },
      onTopReach() {
        console.log('onTopReach')
      },
      onTopLeave() {
        console.log('onTopLeave')
      },
      onMiddleEnter() {
        console.log('onMiddleEnter')
      },
      onMiddleLeave() {
        console.log('onMiddleLeave')
      }
    }
  }
</script>

<style>
  /* Don't forget that! The scrollAreaClass must be scrollable. */
  .list {
    height: 500px;
    overflow: auto;
  }
</style>
```
