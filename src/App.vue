<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css"
    />
    <div class="container">
      <div class="left">
        <pre v-highlightjs><code class="html">&lt;v-scroll-check
  containerClass="my-container"
  scrollAreaClass="list"
  :threshold="100"
  @onBottomReach="onBottomReach"
  @onBottomLeave="onBottomLeave"
  @onTopReach="onTopReach"
  @onTopLeave="onTopLeave"
  @onMiddleEnter="onMiddleEnter"
  @onMiddleLeave="onMiddleLeave"
>
  &lt;div class="item" v-for="i in 50" :key="i">Item <span>&#x0007B;</span>&#x0007B; i &#x0007D;&#x0007D;&lt;/div>
&lt;/v-scroll-check>

&lt;script>
import VScrollCheck from 'vue-scroll-check'

export default {
  name: 'App',
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
&lt;/script>

&lt;style>
.list {
  width: 300px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
  /* Don't forget that! The scrollAreaClass must be scrollable. */
  height: 500px;
  overflow: auto;
}

.item {
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
&lt;/style></code></pre>
      </div>
      <div class="right">
        <pre
          class="demo-pre"
        ><code><span style="color:#8a31b9">&lt;div</span> <span style="color:#da103f">class</span>=<span style="color:#1d8991">"my-container {{ atTop }}{{ atBottom }}{{ inMiddle }}"</span><span style="color:#8a31b9">></span>
  <span style="color:#8a31b9">&lt;div</span> <span style="color:#da103f">class</span>=<span style="color:#1d8991">"list"</span><span style="color:#8a31b9">></span>...<span style="color:#8a31b9">&lt;/div></span>
<span style="color:#8a31b9">&lt;/div></span></code></pre>
        <v-scroll-check
          containerClass="my-container"
          scrollAreaClass="list"
          :threshold="100"
          @onBottomReach="onBottomReach"
          @onBottomLeave="onBottomLeave"
          @onTopReach="onTopReach"
          @onTopLeave="onTopLeave"
          @onMiddleEnter="onMiddleEnter"
          @onMiddleLeave="onMiddleLeave"
        >
          <div class="item" v-for="i in 50" :key="i">Item {{ i }}</div>
        </v-scroll-check>
      </div>
    </div>
  </div>
</template>

<script>
import VScrollCheck from './components/ScrollCheck.vue'

export default {
  name: 'App',
  components: {
    VScrollCheck
  },
  data() {
    return {
      atTop: 'atTop',
      atBottom: '',
      inMiddle: ''
    }
  },
  methods: {
    onBottomReach() {
      console.log('onBottomReach')
      this.atBottom = 'atBottom'
    },
    onBottomLeave() {
      console.log('onBottomLeave')
      this.atBottom = ''
    },
    onTopReach() {
      console.log('onTopReach')
      this.atTop = 'atTop'
    },
    onTopLeave() {
      console.log('onTopLeave')
      this.atTop = ''
    },
    onMiddleEnter() {
      console.log('onMiddleEnter')
      this.inMiddle = 'inMiddle'
    },
    onMiddleLeave() {
      console.log('onMiddleLeave')
      this.inMiddle = ''
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  box-sizing: border-box;
}
body {
  background: #d0d6df;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.left {
  height: 100vh;
  flex: 1;
  overflow: auto;
  background: #000;

  pre {
    margin: 0;
  }
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex: 1;
}
.list {
  width: 300px;
  height: 500px;
  overflow: auto;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  border-radius: 10px;
  background: #fff;
  padding: 8px;
}

.item {
  padding: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-pre {
  margin-bottom: 20px;
  padding: 10px;
  background: #f9f9f9;
  width: 300px;
}

.demo-pre code {
  line-height: 1.5;
  font-size: 16px;
}

.hljs {
  font-size: 14px;
  font-family: 'Fira Code', monospace;
  padding: 20px !important;

  & *::selection {
    background: rgba(#fff, 0.1);
  }
}
</style>
