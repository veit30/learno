<template>
  <div class="quiz-card card-shadow">
    <div class="question">
      {{item.text}}
    </div>
    <div class="answer-wrapper">
      <div class="answer" v-for="answer in item.answers" :key="answer.id">
        <input type="radio" :name="'ag-'+item.id" :id="'ag-'+item.id+'-a-'+answer.id" :value="answer.text">
        <label :for="'ag-'+item.id+'-a-'+answer.id">{{answer.text}}</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'QuizCard',
  components: {

  },
  props: ["item"],
}
</script>

<style lang="scss" scoped>

  .quiz-card {
    background-color: #fff;
    border-radius: 30px;
    width: 40%;
    padding: 20px;
    margin: 10px;
    // flex: 1 0 1%;
    // flex-flow: column wrap;
  }

  .card-shadow {
    -webkit-box-shadow: 0 10px 10px -10px #ffe7e0;
       -moz-box-shadow: 0 10px 10px -10px #ffe7e0;
            box-shadow: 0 10px 10px -10px #ffe7e0;
  }

  .answer-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .answer {
    flex: 1 0 45%;
  }

  .question {
    margin: 20px;
  }

  label {
    margin-left: 10px;
  }

</style>
