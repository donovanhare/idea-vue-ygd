<template>
    <div>
        <section class="hero is-info is-small" id="step1-2" v-for="(question, index) in quiz[qid].questions" :key="index" v-if="index <= quiz[qid].currentQuestion">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    {{question.question}}
                </h1>
                <h2 class="subtitle">Select the correct answer.</h2>
                <br>
                </div>
                <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-parent" v-for="(option, ind) in question.options" :key="ind">
                        <article @click="checkAnswer(option, quiz[qid])" class="tile is-child notification is-dark" v-bind:class="{ 'is-success animated pulse': option.selected && option.correct,  'is-danger animated shake': option.selected && option.correct == false, 'pointer': !option.selected}">
                        <p class="title">{{option.prefix}}</p>
                        <p class="subtitle">{{option.option}}</p>
                        </article>
                    </div>
                </div>
                </div>
            </div>
            <div class="hero-foot" v-if="countIncorrect(question.options) && !isComplete(question.options, question.answers)">
                <div class="notification is-warning animated fadeInUp" v-text="question.hint || 'Are you sure that is the correct answer?'"></div>
            </div>
        </section>
        <section class="hero is-success is-small animated fadeInDown" v-if="quiz[qid].completed">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-four-fifths">
                            <h1 class="title">
                                Awesome!
                            </h1>
                            <h2 class="subtitle">Quiz completed successfully!</h2>
                        </div>
                        <div class="column">
                            <a class="button is-dark is-medium animated bounceIn" @click="nextStep(onComplete)">Next Section</a>            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        qid: {
            type: Number,
            default: 0
        },
        onComplete: {
            type: String,
            default: '/'
        }
    },
    data() {
        return {
            quiz: [
                {
                    questions: [
                        {
                            question: '1. What time is it?',
                            options: [
                                {option: '12am', correct: false, selected: false, prefix: 'A.'},
                                {option: '1pm', correct: false, selected: false, prefix: 'B.'},
                                {option: 'None of the above', correct: true, selected: false, prefix: 'C.'},
                            ],
                            answers: 1
                        },
                        {
                            question: '2. What is a unique idea?',
                            options: [
                                {option: 'An idea that has been done many times in the past.', correct: false, selected: false, prefix: 'A.'},
                                {option: 'An idea that has not been done in the past', correct: true, selected: false, prefix: 'B.'},
                            ],
                            hint: 'Can we actually tell what time it is from the question?',
                            answers: 1
                        },
                    ],
                    currentQuestion: 0,
                    completed: false
                }
            ]
        }
    },
  methods: {
      checkAnswer(option, quiz) {
          if (option.selected == 1) {
            // alert('already selected');
            return;
          }
          
          option.selected = true;
          this.scrollToEnd();
          if (option.correct == 1) {
              //and if meets iscompleted
            // alert('correct');
            quiz.currentQuestion += 1;
            if(quiz.currentQuestion + 1 > quiz.questions.length) {
                quiz.completed = true;
            }
            //next question
            return;
          }

        //   alert('incorrect')
      },

      scrollToEnd() {    
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      },

      isComplete(options, answers) {
        var correct = 0;
        options.forEach(option => {
            correct += option.selected && option.correct == true
        });

        return correct >= answers;
      },

      countIncorrect(options) {
          var incorrect = 0;
          options.forEach(option => {
              incorrect += option.selected && option.correct == false
          });
          return incorrect;
      },

      isQuizIdCompleted(qid) {
          return this.quiz.completed;
      },

    nextStep(page) {
        console.log(page);
        this.$router.push(page)
    }
  },
}
</script>

<style>
.pointer {cursor: pointer;}
</style>
