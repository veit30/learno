<template lang="html">
  <div class="modal-mask">
    <div class="modal-wrapper"> <!--- @click.stop.self="$emit('close')" -->
      <div class="modal-container">
        <div class="content">
          <input class="input-style" id="name-inpt" type="text" name="" placeholder="Project title" v-model="title">
          <textarea class="input-style" id="desc-txt" name="" rows="4" cols="60" placeholder="This is a new project..." v-model="description">
          </textarea>
          <p :class="{critical: remainingCharacters <= 10}">{{ remainingCharacters }}</p>
          <button class="noselect" type="button" name="button" @click="$emit('new-project', $event, title, description); $emit('close')">
            Create
          </button>
          <button class="noselect" type="button" name="button" @click="$emit('close')">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  data() {
    return {
      description: "",
      remainingCharacters: 150,
      title: ""
    }
  },
  watch: {
    description() {
      this.remainingCharacters = 150 - this.description.length;
      if(this.remainingCharacters <= 0) {
        this.description = this.description.substring(0,150);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  textarea {
    resize: none;
    font-size: 1em;
    padding-bottom: 2px;
    // border-bottom: 1px solid #e0e0e0 !important;
  }

  button {
    flex: 1 0 44%;
    align-self: center;
    outline: none;
    background-color: #e6e6e6;
    border-radius: 10px;
    border: 0px solid;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: #e0e0e0
    }
  }

  p {
    flex: 1 0 100%;
    text-align: right;
    font-size: 0.8em;
    color: #e0e0e0;
    &.critical {
      color: #ffadad;
    }
  }

  .input-container {
    margin-bottom: 10px;
  }

  input[type="text"] {
    font-size: 2em;
  }

  .content {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin: 15px 20px;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: table;
    backdrop-filter: blur(10px);
    animation: blurin 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    // display: table-cell;
    // vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .modal-container {
    width: 400px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .input-style {
    outline: none;
    border: 0px solid;
    background-color: transparent;
    margin-bottom: 5px;
    // padding: 5px 5px;
    &::placeholder {
      color: #e0e0e0;
    }
  }

  @keyframes blurin {
    from {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);
    }
    to {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
    }
  }
</style>
