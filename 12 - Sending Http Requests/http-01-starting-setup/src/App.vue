<template>
  <learning-survey
    :error="saveError"
    @survey-submit="storeSurvey"></learning-survey>
  <user-experiences
    :isLoading="isLoading"
    :error="getError"
    :results="savedSurveyResults"
    @load-experiences="loadExperiences"></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      isLoading: false,
      savedSurveyResults: [],
      getError: null,
      saveError: null
    };
  },
  methods: {
    storeSurvey(surveyData) {
      this.saveError = null;
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
      };
      fetch('https://vue-http-demo-cf074-default-rtdb.firebaseio.com/surveys.json', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(surveyResult)
      })
      .then(res => {
        if (res.ok) {
          return this.loadExperiences()
        }
        throw new Error('Clould not save data')
      })
      .catch(ex => {
        console.error(ex);
        this.saveError = `Fail save data - please try again`
      })
    },
    loadExperiences() {
      this.isLoading = true;
      this.getError = null
      fetch('https://vue-http-demo-cf074-default-rtdb.firebaseio.com/surveys.json', {
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res;
      })
      .then(data => {
        if (data) {
          this.savedSurveyResults = Object.entries(data).map(([id, value]) => ({
            id,
            name: value.name,
            rating: value.rating
          }))
        } else {
          this.savedSurveyResults = []
        }
      })
      .catch(ex => {
        this.getError = 'Fail to fetch data - please try again!'
        console.error(ex)
      })
      .finally(() => {
        this.isLoading = false;
      })
    }
  },
  mounted() {
    this.loadExperiences()
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>