<template>
  <span>

<div>
  <b-tabs content-class="mt-3">
    
<b-tab title="Question 1">
<p>{{$t('q1.text')}}</p>
    <ol type="1">
      <li><input id="q1o1" type="radio" value="1" v-model="Quest1" name="Question1"> <label for="q1o1">{{$t('q1.o1')}}</label></li>
    </ol>
        </b-tab><b-tab title="Question 2">
<p>{{$t('q2.text')}}</p>
    <ol type="1">
      <li><input id="q2o1" type="checkbox" value="1" v-model="Quest2" name="Question2"> <label for="q2o1">{{$t('q2.o1')}}</label></li>
      <li><input id="q2o2" type="checkbox" value="2" v-model="Quest2" name="Question2"> <label for="q2o2">{{$t('q2.o2')}}</label></li>
      <li><input id="q2o3" type="checkbox" value="3" v-model="Quest2" name="Question2"> <label for="q2o3">{{$t('q2.o3')}}</label></li>
    </ol>
    <span v-if="isAcceptable(Quest2)">
      <p v-if="arraysMatch(Quest2,[2,3])"><span class="v-right" />{{$t('q2.f-right')}}</p>
      <p v-else> <span class="v-wrong" />{{$t('q2.f-wrong')}}</p>
    </span>
  </b-tab>
  <b-tab title="Question 3">
   <p>{{$t('q3.text')}}</p>
    <ol type="1">
      <li><input id="q3o1" type="radio" value="1" v-model="Quest3" name="Question3"> <label for="q3o1">{{$t('q3.o1')}}</label></li>
      <li><input id="q3o2" type="radio" value="2" v-model="Quest3" name="Question3"> <label for="q3o2">{{$t('q3.o2')}}</label></li>
      <li><input id="q3o3" type="radio" value="3" v-model="Quest3" name="Question3"> <label for="q3o3">{{$t('q3.o3')}}</label></li>
    </ol>
    <span v-if="Quest3"><p v-if="Quest3=='3'"><span class="v-right" />{{$t('q3.f-right')}}</p>
      <p v-else> <span class="v-wrong" />{{$t('q3.f-wrong')}}</p></span>
    </b-tab>
    <b-tab title="Question 4">
<p>{{$t('q4.text')}}</p>
    <ol type="1">
      <li><input id="q4o1" type="radio" value="1" v-model="Quest4" name="Question4"> <label for="q4o1">{{$t('q4.o1')}}</label></li>
      <li><input id="q4o2" type="radio" value="2" v-model="Quest4" name="Question4"> <label for="q4o2">{{$t('q4.o2')}}</label></li>
      <li><input id="q4o3" type="radio" value="3" v-model="Quest4" name="Question4"> <label for="q4o3">{{$t('q4.o3')}}</label></li>
      <li><input id="q4o4" type="radio" value="4" v-model="Quest4" name="Question4"> <label for="q4o4">{{$t('q4.o4')}}</label></li>
    </ol>
  </b-tab>
  <b-tab title="Question 5">
<p>{{$t('q5.text')}}</p>
    <ol type="1">
      <li><input id="q5o1" type="radio" value="1" v-model="Quest5" name="Question5"> <label for="q5o1">{{$t('q5.o1')}}</label></li>
      <li><input id="q5o2" type="radio" value="2" v-model="Quest5" name="Question5"> <label for="q5o2">{{$t('q5.o2')}}</label></li>
      <li><input id="q5o3" type="radio" value="3" v-model="Quest5" name="Question5"> <label for="q5o3">{{$t('q5.o3')}}</label></li>
      <li><input id="q5o4" type="radio" value="4" v-model="Quest5" name="Question5"> <label for="q5o4">{{$t('q5.o4')}}</label></li>
    </ol>
  </b-tab>
  <b-tab title="Question 6">
<p>{{$t('q6.text')}}</p>
    <ol type="1">
      <li><input id="q6o1" type="radio" value="1" v-model="Quest6" name="Question6"> <label for="q6o1">{{$t('q6.o1')}}</label></li>
      <li><input id="q6o2" type="radio" value="2" v-model="Quest6" name="Question6"> <label for="q6o2">{{$t('q6.o2')}}</label></li>
      <li><input id="q6o3" type="radio" value="3" v-model="Quest6" name="Question6"> <label for="q6o3">{{$t('q6.o3')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 7">
<p>{{$t('q7.text')}}</p>
    <ol type="1">
      <li><input id="q7o1" type="radio" value="1" v-model="Quest7" name="Question7"> <label for="q7o1">{{$t('q7.o1')}}</label></li>
      <li><input id="q7o2" type="radio" value="2" v-model="Quest7" name="Question7"> <label for="q7o2">{{$t('q7.o2')}}</label></li>
      <li><input id="q7o3" type="radio" value="3" v-model="Quest7" name="Question7"> <label for="q7o3">{{$t('q7.o3')}}</label></li>
      <li><input id="q7o4" type="radio" value="4" v-model="Quest7" name="Question7"> <label for="q7o4">{{$t('q7.o4')}}</label></li>
      <li><input id="q7o5" type="radio" value="5" v-model="Quest7" name="Question7"> <label for="q7o5">{{$t('q7.o5')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 8">
<p>{{$t('q8.text')}}</p>
    <ol type="1">
      <li><input id="q8o1" type="radio" value="1" v-model="Quest8" name="Question8"> <label for="q8o1">{{$t('q8.o1')}}</label></li>
      <li><input id="q8o2" type="radio" value="2" v-model="Quest8" name="Question8"> <label for="q8o2">{{$t('q8.o2')}}</label></li>
      <li><input id="q8o3" type="radio" value="3" v-model="Quest8" name="Question8"> <label for="q8o3">{{$t('q8.o3')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 9">
<p>{{$t('q9.text')}}</p>
    <ol type="1">
      <li><input id="q9o1" type="radio" value="1" v-model="Quest9" name="Question9"> <label for="q9o1">{{$t('q9.o1')}}</label></li>
      <li><input id="q9o2" type="radio" value="2" v-model="Quest9" name="Question9"> <label for="q9o2">{{$t('q9.o2')}}</label></li>
      <li><input id="q9o3" type="radio" value="3" v-model="Quest9" name="Question9"> <label for="q9o3">{{$t('q9.o3')}}</label></li>
      <li><input id="q9o4" type="radio" value="4" v-model="Quest9" name="Question9"> <label for="q9o4">{{$t('q9.o4')}}</label></li>
      <li><input id="q9o5" type="radio" value="5" v-model="Quest9" name="Question9"> <label for="q9o5">{{$t('q9.o5')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 10">
<p>{{$t('q10.text')}}</p>
    <ol type="1">
      <li><input id="q10o1" type="radio" value="1" v-model="Quest10" name="Question10"> <label for="q10o1">{{$t('q10.o1')}}</label></li>
      <li><input id="q10o2" type="radio" value="2" v-model="Quest10" name="Question10"> <label for="q10o2">{{$t('q10.o2')}}</label></li>
      <li><input id="q10o3" type="radio" value="3" v-model="Quest10" name="Question10"> <label for="q10o3">{{$t('q10.o3')}}</label></li>
      <li><input id="q10o4" type="radio" value="4" v-model="Quest10" name="Question10"> <label for="q10o4">{{$t('q10.o4')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 11">
<p>{{$t('q11.text')}}</p>
    <ol type="1">
      <li><input id="q11o1" type="radio" value="1" v-model="Quest11" name="Question11"> <label for="q11o1">{{$t('q11.o1')}}</label></li>
      <li><input id="q11o2" type="radio" value="2" v-model="Quest11" name="Question11"> <label for="q11o2">{{$t('q11.o2')}}</label></li>
      <li><input id="q11o3" type="radio" value="3" v-model="Quest11" name="Question11"> <label for="q11o3">{{$t('q11.o3')}}</label></li>
      <li><input id="q11o4" type="radio" value="4" v-model="Quest11" name="Question11"> <label for="q11o4">{{$t('q11.o4')}}</label></li>
      <li><input id="q11o5" type="radio" value="5" v-model="Quest11" name="Question11"> <label for="q11o5">{{$t('q11.o5')}}</label></li>
    </ol>
    </b-tab><b-tab title="Question 12">
<p>{{$t('q12.text')}}</p>
    <ol type="1">
      <li><input id="q12o1" type="radio" value="1" v-model="Quest12" name="Question12"> <label for="q12o1">{{$t('q12.o1')}}</label></li>
      <li><input id="q12o2" type="radio" value="2" v-model="Quest12" name="Question12"> <label for="q12o2">{{$t('q12.o2')}}</label></li>
      <li><input id="q12o3" type="radio" value="3" v-model="Quest12" name="Question12"> <label for="q12o3">{{$t('q12.o3')}}</label></li>
    </ol>
    </b-tab>
    <b-tab title="Question 13">
<p>{{$t('q13.text')}}</p>
    <ol type="1">
      <li><input id="q13o1" type="radio" value="1" v-model="Quest13" name="Question13"> <label for="q13o1">{{$t('q13.o1')}}</label></li>
      <li><input id="q13o2" type="radio" value="2" v-model="Quest13" name="Question13"> <label for="q13o2">{{$t('q13.o2')}}</label></li>
      <li><input id="q13o3" type="radio" value="3" v-model="Quest13" name="Question13"> <label for="q13o3">{{$t('q13.o3')}}</label></li>
      <li><input id="q13o4" type="radio" value="4" v-model="Quest13" name="Question13"> <label for="q13o4">{{$t('q13.o4')}}</label></li>
      <li><input id="q13o5" type="radio" value="5" v-model="Quest13" name="Question13"> <label for="q13o5">{{$t('q13.o5')}}</label></li>
    </ol>
    </b-tab>
    <b-tab title="Question 14">
<p>{{$t('q14.text')}}</p>
    <ol type="1">
      <li><input id="q14o1" type="radio" value="1" v-model="Quest14" name="Question14"> <label for="q14o1">{{$t('q14.o1')}}</label></li>
      <li><input id="q14o2" type="radio" value="2" v-model="Quest14" name="Question14"> <label for="q14o2">{{$t('q14.o2')}}</label></li>
      <li><input id="q14o3" type="radio" value="3" v-model="Quest14" name="Question14"> <label for="q14o3">{{$t('q14.o3')}}</label></li>
      <li><input id="q14o4" type="radio" value="4" v-model="Quest14" name="Question14"> <label for="q14o4">{{$t('q14.o4')}}</label></li>
    </ol>
  </b-tab>
      </b-tabs>
</div>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      truth: false,
      Quest1: '',
      Quest2: [],
      Quest3: '',
      Quest4: '',
      Quest5: '',
      Quest6: '',
      Quest7: '',
      Quest8: '',
      Quest9: '',
      Quest10: '',
      Quest11: '',
      Quest12: '',
      Quest13: '',
      Quest14: ''
    }
  },
  methods: {

    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (Number(arrayOne[i]) !== Number(arr2[i])) return false
      }
      return true
    },
    isAcceptable(arr1) {
      return ((Array.isArray(arr1) && arr1.length))
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "checkAll":"Check all that apply.",
  "selectRight":"Select the correct answer.",
  "q1":{
  "text":"What",
  "o1":"That",
  "f-wrong":"",
  "f-right":""
  },
  "q2":
  {
  "text": "Which elements should you consider when drafting your new work plan? ",
  "o1": "Government priorities, departmental priorities and directorate priorities",
  "o2": "Previous year’s work plan, budget, reports",
  "o3": "Your fellow manager’s work plan from last year",
  "f-right": "That is the best answer! ",
  "f-wrong": "You should consider government priorities, departmental priorities and directorate priorities as well as the previous year’s work plan, budget, reports when drafting your new work plan. Unless the activities of your fellow manager have been transferred to your team, you would not take them into account. "
  },
  "q3":
  {
  "text": "A departmental priority in your work plan originates all the way back to:",
  "o1": "The directorate’s plan",
  "o2": "The Departmental plan",
  "o3": "The Speech from the Throne",
  "f-wrong": "Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
  "f-right": "Yes! It’s a good idea to start your view of the big picture with the Speech from the Throne."},
  "q4":
  {
  "text": "To find your department’s core responsibilities, expected results and indicators, you would look to:",
  "o1": "The directorate’s plan",
  "o2": "The Departmental plan",
  "o3": "The Speech from the Throne",
  "o4": "The sector’s plan",
  "f-wrong": "Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
  "f-right": "This is right! Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan."
  },
  "q5":
  {
  "text": "The Prime Minister sets out his expectations and objectives for your department in: ",
  "o1": "The Speech from the Throne",
  "o2": "The Departmental Results Framework",
  "o3": "The Mandate Letter",
  "o4": "The Departmental Plan",
  "f-wrong": "The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
  "f-right": "You got it! The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department."
  },
  "q6":
  {
  "text": "How often does a manager need to recertify in order to be able to continue to exercise their financial authority?",
  "o1": "Every year",
  "o2": "Every 2 years",
  "o3": "Every 5 years",
  "f-wrong": "Managers need to recertify every 5 years.",
  "f-right": "This is the right answer!"
  },
  "q7":
  {
  "text": "To conduct a 360 scan, you must do the following.",
  "o1": "Get a sense of the current situation by examining what was done in the recent past.",
  "o2": "Look at previous work plans, budgets and reports.",
  "o3": "Identify challenges from the previous years.",
  "o4": "Get a sense of the cultural context in your department/branch/directorate.",
  "o5": "All of the above.",
  "f-right": "This is correct! You must do all these activities to conduct a 360 review.",
  "f-wrong": "You must do all these activities to conduct a 360 review."
  },
  "q8":
  {
  "text": "Choose the priorities to which your work plan activities should link, starting with the top.",
  "o1": "Departmental priorities, directorate priorities, government priorities",
  "o2": "Government priorities, departmental priorities, directorate priorities",
  "o3": "Directorate priorities, government priorities, departmental priorities",
  "f-wrong": "The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities.",
  "f-right": "This is correct!"
  },
  "q9":
  {
  "text": "Which situations would cause you to update your work plan?",
  "o1": "A new director is nominated",
  "o2": "An employee leaves ",
  "o3": "Mandatory training is pushed to next year",
  "o4": "Over 500 licenses have been issued ",
  "o5": "Your software gets an update",
  "f-right": "This is correct!",
  "f-wrong": "The nomination of a new director, the departure of an employee and mandatory training being pushed back to the next year all require an update to the work plan."
  },
  "q10":
  {
  "text": "What is a work plan?.",
  "o1": "A daily to-do list",
  "o2": "The activities to be carried out over a fiscal year",
  "o3": "The amounts of money to be spent ",
  "o4": "A summary of what you have accomplished",
  "f-wrong": "The work plan are activities to be carried out over a fiscal year.",
  "f-right": "This is correct."
  },
  "q11":
  {
  "text": "What are a manager’s responsibilities?",
  "o1": "To establish government wide priorities",
  "o2": "To negotiate government contracts",
  "o3": "To plan their unit’s activities",
  "o4": "To use public funds to carry out their unit’s activities",
  "o5": "To report on the status of their unit’s activities",
  "f-right": "This is correct.",
  "f-wrong": "A manager is responsible for planning their unit’s activities, using public funds to carry out their unit’s activities and reporting on the status of their unit’s activities."
  },
  "q12":
  {
  "text": "What are deliverables?",
  "o1": "The work tasks to be accomplished to support your directorate’s priorities.",
  "o2": "The specific and tangible items you should be able to check off your list when you accomplish them.",
  "o3": "The budget, personnel, consultants, buildings and materials required to carry out the directorate activities.",
  "f1": "Deliverables are more specific and tangible than the activities.",
  "f2": "This is correct! ",
  "f3": "These are the resources. Deliverables are specific and tangible items you should be able to check off your list when you accomplish them."
  },
  "q13":
  {
  "text": "Which activities should you include in your new work plan?",
  "o1": "Ongoing activities, new activities, completed activities",
  "o2": "Ongoing activities, new activities",
  "o3": "New activities, completed activities",
  "o4": "New activities, completed activities, project activities",
  "o5": "Ongoing activities, completed activities, project activities",
  "f-wrong": "Only ongoing activities and new activities should be included.",
  "f-right": "This is correct."
  },
  "q14":
  {
  "text": "Which are considered risks?",
  "o1": "A 15 minute power failure, minor software bugs",
  "o2": "Licensing Fees, fisheries management",
  "o3": "Power failures, well managed fish stocks",
  "o4": "Overfishing, staff turnover",
  "f1": "A 15 minute power failure should not be sufficient to be considered a risk. Overfishing and staff turnover are risks.",
  "f2": "These are not risks. Overfishing and staff turnover are risks.",
  "f3": "Well managed fish stocks are not risks. Overfishing and staff turnover are risks.",
  "f4": "This is correct."
  }
  },
  "fr":{}
  }
</i18n>
