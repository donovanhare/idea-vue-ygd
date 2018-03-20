<template>
    <div v-if="currentSlide(sid)">
        <section class="hero is-info is-small" id="quiz" v-for="(question, index) in quiz[qid].questions" :key="index" v-if="index <= quiz[qid].currentQuestion">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    {{question.question}}
                </h1>
                <h2 class="subtitle">Select the correct answer(s).</h2>
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
                            <a class="button is-dark is-medium animated bounceIn" @click.once="nextStep">Next Section</a>            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import conceptQuiz from './quiz/concept.json'
import mechanicsQuiz from './quiz/mechanics.json'
import soundMotionQuiz from './quiz/sound-motion.json'
import marketingQuiz from './quiz/marketing.json'
export default {
    props: {
        qid: {
            type: Number,
            default: 0
        },
        onComplete: {
            type: String,
            default: '/'
        },
        sid: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            quiz: [
                conceptQuiz,
                mechanicsQuiz,
                soundMotionQuiz,
                marketingQuiz
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
           //check that it is the last answer in the question
          if (option.correct == 1) {
              //and if meets iscompleted
            // alert('correct');
            if(this.isComplete(quiz.questions[quiz.currentQuestion].options,quiz.questions[quiz.currentQuestion].answers)) {
                quiz.currentQuestion += 1;
                if(quiz.currentQuestion + 1 > quiz.questions.length) {
                    quiz.completed = true;
                }
                this.scrollToEnd();
                return;
            }
           
            //next question
            return;
          } else {
              this.scrollToEnd();
              return
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

  },
}
</script>

<style>
.pointer {cursor: pointer;}
</style>
