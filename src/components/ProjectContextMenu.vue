<template lang="html">
  <div class="overlay" @click.stop.self="$emit('close')">
    <div class="option-wrapper" :style="actualPosition" ref="wrapper">
      <div class="option noselect" v-for="option in options" @click.prevent.stop="$emit('option-clicked', $event, option)">{{option}}</div> <!-- eslint-disable-line vue/require-v-for-key -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectContextMenu',
  props: ['options','position'],
  data() {
    return {
      actualPosition: {
        top: 0,
        left: 0
      }
    }
  },
  methods: {
    example() {
      console.log("hey");
    }
  },
  created() {
  },
  mounted() {
    let contextMenuWidth = this.$el.querySelector('.option-wrapper').clientWidth + 4
    let left = parseInt(this.position.left)
    let space = window.innerWidth - left;
    if(space < contextMenuWidth) {
      this.actualPosition = {
        top: this.position.top,
        right: space + "px"
      }
    } else {
      this.actualPosition = this.position;
    }
    console.log(this.$el);
  }
}
</script>

<style lang="scss" scoped>

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: #ffddc1;
  }

  .option-wrapper {
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }

  .option {
    padding: 10px;
    font-size: 1em;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
    &:first-child {
      border-radius: 10px 10px 0 0;
    }
    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }
</style>
