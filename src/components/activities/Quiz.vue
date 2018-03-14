<template>
    <div v-if="currentSlide(sid)">
        <section class="hero is-info is-small" id="quiz" v-for="(question, index) in quiz[qid].questions" :key="index" v-if="index <= quiz[qid].currentQuestion">
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
                            <a class="button is-dark is-medium animated bounceIn" @click.once="nextStep">Next Section</a>            
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
        },
        sid: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            quiz: [
                {
                    questions: [
                        {
                            question: '1. What is game development?',
                            options: [
                                {option: 'The storyline of a game progressing.', correct: false, selected: false, prefix: 'A.'},
                                {option: 'The combiniation of several elements coming together to form a cohisive package called a game', correct: true, selected: false, prefix: 'B.'},
                                {option: 'None of the above', correct: false, selected: false, prefix: 'C.'},
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
                        {
                            question: 'What is the first step in any game development process?',
                            options: [
                                {option: 'Coming up win an idea', correct: true, selected: false, prefix: 'A.'},
                                {option: 'Coding the core game mechanics.', correct: false, selected: false, prefix: 'B.'},
                                {option: 'Create an immersive open world.', correct: false, selected: false, prefix: 'C.'},
                            ],
                            answers: 1
                        }
                    ],
                    currentQuestion: 0,
                    completed: false
                },
                {
                    questions: [
                        {
                            question: 'What is a game Platform?',
                            options: [
                                {
                                    option:'A place to store games you are working on.',
                                    correct: false,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'The item of technology that you are intending to build your game for e.g. PC, Console, Mobile, tablet etc.',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'A genre of gaming where the player assumes the role of a character to interact within the game’s imaginary world',
                                    correct: false,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Hint: Why not check out the BAFTA YGD game Glossary?',
                            answers: 1
                        },
                        {
                            question: 'What are two of the most important things to consider when starting to build new game?',
                            options: [
                                {
                                    option:'Artwork',
                                    correct: false,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Fast internet connection',
                                    correct: false,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Gameplay (including core mechanics)',
                                    correct: true,
                                    selected:false,
                                    prefix: 'C.'
                                },
                                {
                                    option:'Target Audience',
                                    correct: true,
                                    selected:false,
                                    prefix: 'D.'
                                },
                            ],
                            hint: 'Check out the BAFTA YGD Web Series Episode 1: The Concept http://ygd.bafta.org/games-and-videos/getting-started- in-games- ygd-inspired- ep-1',
                            answers: 2
                        },
                        {
                            question: 'What does an artist consider before beginning to create a character for a new game idea?',
                            options: [
                                {
                                    option:'Colours',
                                    correct: true,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Size of the character in the game',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Level of detail (Whether the character is a main or background character)',
                                    correct: true,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Check out the BAFTA YGD Web Series Episode 2: Discovering Design http://ygd.bafta.org/games-and- videos/game-design- bringing-your- ideas-to- life-ygd- inspired-ep2',
                            answers: 3
                        },
                        {
                            question: 'What do we mean when we talk about the Environment of a game?',
                            options: [
                                {
                                    option:'How the environment design looks visually i.e. where the game is set',
                                    correct: true,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Saving the planet through recycling',
                                    correct: false,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Fast-paced action game that often relies on hand-eye coordination',
                                    correct: false,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Why not check out the BAFTA YGD game Glossary?',
                            answers: 1
                        },
                        {
                            question: 'Which of these could describe a goal in game?',
                            options: [
                                {
                                    option:'Find all items',
                                    correct: true,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Complete the puzzle',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Rescue the animals',
                                    correct: true,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'For some more goal ideas why not play the BAFTA YGD Idea Generator?',
                            answers: 3
                        }
                    ],
                    currentQuestion: 0,
                    completed: false
                },
                {
                    questions: [
                        {
                            question: 'It is important to consider how your game will progress the longer players continue to play because:',
                            options: [
                                {
                                    option:'It helps to keep the player interested',
                                    correct: true,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Players don’t enjoy easy games',
                                    correct: false,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Players never want to feel like they are winning',
                                    correct: false,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Hint: Think about what motivates you to play the games you enjoy.',
                            answers: 1
                        },
                        {
                            question: 'What game elements might change as a game progresses?',
                            options: [
                                {
                                    option:'Environment',
                                    correct: true,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Characters',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Non-Playable Characters (NPCs)',
                                    correct: true,
                                    selected:false,
                                    prefix: 'C.'
                                },
                                {
                                    option:'Rewards',
                                    correct: true,
                                    selected:false,
                                    prefix: 'D.'
                                },
                            ],
                            hint: 'Hint: Think about games you have played, do any of the options fit the bill?',
                            answers: 4
                        },
                        {
                            question: 'You can only work in the games industry if you know how to code.',
                            options: [
                                {
                                    option:'True',
                                    correct: false,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'False',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                            ],
                            hint: 'Hint: Think back to the YGD Web Series Episode 3: Game Systems.',
                            answers: 1
                        },
                        {
                            question: 'What is Motion Capture in games?',
                            options: [
                                {
                                    option:'The use of sports within a game',
                                    correct: false,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Videoing people as they interact with machinery',
                                    correct: false,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'The recording of the movement of people or objects in order to animate them within a 2d or 3d environment',
                                    correct: true,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Hint: Why not watch Web Series Episode 4: Sound in Motion again?',
                            answers: 1
                        },
                        {
                            question: 'The person who creates the sound effects in games and film is known as a:',
                            options: [
                                {
                                    option:'Environment Artist',
                                    correct: false,
                                    selected:false,
                                    prefix: 'A.'
                                },
                                {
                                    option:'Foley Artist',
                                    correct: true,
                                    selected:false,
                                    prefix: 'B.'
                                },
                                {
                                    option:'Doctor',
                                    correct: false,
                                    selected:false,
                                    prefix: 'C.'
                                },
                            ],
                            hint: 'Hint: Why not watch Web Series Episode 4: Sound in Motion again?',
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
