<template>
  <div :class="{ atTop: isAtTop, atBottom: isAtBottom, inMiddle: isInMiddle }">
    <div :class="scrollAreaClass" @scroll="handleScroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollCheck',
  props: {
    scrollAreaClass: {
      type: String,
      default: ''
    },
    threshold: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hasScrolledToBottom: false,
      isAtTop: true,
      isAtBottom: false,
      isInMiddle: false,
      isInitialTop: true
    }
  },
  methods: {
    handleScroll: function(el) {
      if (
        el.srcElement.offsetHeight + el.srcElement.scrollTop + this.threshold >=
        el.srcElement.scrollHeight
      ) {
        this.hasScrolledToBottom = true
        this.isAtBottom = true
      } else {
        this.isAtBottom = false
      }

      if (el.srcElement.scrollTop <= this.threshold) {
        this.isAtTop = true
      } else {
        this.isAtTop = false
      }

      if (
        el.srcElement.scrollTop >= this.threshold &&
        el.srcElement.offsetHeight + el.srcElement.scrollTop + this.threshold <
          el.srcElement.scrollHeight
      ) {
        this.isInMiddle = true
      } else {
        this.isInMiddle = false
      }
    }
  },
  watch: {
    isAtTop(newVal) {
      if (newVal) {
        if (!this.isInitialTop) {
          this.$emit('onTopReach')
        }
      } else {
        this.$emit('onTopLeave')
      }
    },
    isAtBottom(newVal) {
      this.isInitialTop = false
      newVal ? this.$emit('onBottomReach') : this.$emit('onBottomLeave')
    },
    isInMiddle(newVal) {
      this.isInitialTop = false
      newVal ? this.$emit('onMiddleEnter') : this.$emit('onMiddleLeave')
    }
  }
}
</script>
