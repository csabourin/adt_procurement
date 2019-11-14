<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p v-html="$t('q1.text')" />
            <span>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p><span v-html="$t('pwpGovtPri')" /><br>
            <select v-model="options1">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select>
          </p>
          <p v-if="govtPri"> <span v-html="$t('a1-'+govtPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p><span v-html="$t('pwpDeptPri')" /><br><select v-model="options2">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select>
          </p>
          <p v-if="deptPri"> <span v-html="$t('a2-'+deptPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p><span v-html="$t('pwpDirPri')" /><br><select v-model="options3">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select>
          </p>
          <p v-if="dirPri"><span v-html="$t('a3-'+dirPri)" /></p>
        </td>
      </tr>
    </table>
    <div class="scrollMe">      
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr>
          <th class='planAct thNumbered'><span >{{$t('titleActivities')}}</span><br><select v-model="options4">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planSubAct thNumbered'><span >{{$t('titleSubActivities')}}</span><br><select v-model="options5">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planDelivs thNumbered'><span >{{$t('titleDeliverables')}}</span><br><select v-model="options6">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planRisk thNumbered'><span >{{$t('titleRisk')}}</span><br><select v-model="options7">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planLikely thNumbered'><span >{{$t('titleLikelihood')}}</span><br><select v-model="options8">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planImpact thNumbered'><span >{{$t('titleImpact')}}</span><br><select v-model="options9">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planMitigat thNumbered'><span >{{$t('titleMitigation')}}</span><br><select v-model="options10">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
          <th class='planRes thNumbered'><span >{{$t('titleResources')}}</span><br><select v-model="options11">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(statement,index) in answers1" :value="index" :key="index">{{$t(statement)}}</option>
            </select></th>
        </tr>
      </table>
    </div>
  </span>

            
          </b-tab>
          <b-tab title="Question 2">
            <p v-html="$t('q2.text')" />
            <ol type="1">
              <li><input id="q2o1" @click="q2Submitted=false" type="checkbox" value="1" v-model="Quest2" name="Question2"> <label for="q2o1" v-html="$t('q2.o1')"></label></li>
              <li><input id="q2o2" @click="q2Submitted=false" type="checkbox" value="2" v-model="Quest2" name="Question2"> <label for="q2o2" v-html="$t('q2.o2')"></label></li>
              <li><input id="q2o3" @click="q2Submitted=false" type="checkbox" value="3" v-model="Quest2" name="Question2"> <label for="q2o3" v-html="$t('q2.o3')"></label></li>
            </ol>
            <span v-if="isAcceptable(Quest2) && q2Submitted">
              <p v-if="arraysMatch(Quest2,[2,3])"><span class="v-right" /> {{$t('q2.f-right')}}</p>
              <p v-else> <span class="v-wrong" /> {{$t('q2.f-wrong')}}</p>
            </span>
            <b-button @click="q2Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 3">
            <p v-html="$t('q3.text')" />
            <ol type="1">
              <li><input id="q3o1" @click="q3Submitted=false" type="radio" value="1" v-model="Quest3" name="Question3"> <label for="q3o1" v-html="$t('q3.o1')"></label></li>
              <li><input id="q3o2" @click="q3Submitted=false" type="radio" value="2" v-model="Quest3" name="Question3"> <label for="q3o2" v-html="$t('q3.o2')"></label></li>
              <li><input id="q3o3" @click="q3Submitted=false" type="radio" value="3" v-model="Quest3" name="Question3"> <label for="q3o3" v-html="$t('q3.o3')"></label></li>
            </ol>
            <span v-if="Quest3 && q3Submitted">
              <p v-if="Quest3=='3'"><span class="v-right" />{{$t('q3.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q3.f-wrong')}}</p>
            </span>
            <b-button @click="q3Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 4">
            <p v-html="$t('q4.text')" />
            <ol type="1">
              <li><input id="q4o1" @click="q4Submitted=false" type="radio" value="1" v-model="Quest4" name="Question4"> <label for="q4o1" v-html="$t('q4.o1')"></label></li>
              <li><input id="q4o2" @click="q4Submitted=false" type="radio" value="2" v-model="Quest4" name="Question4"> <label for="q4o2" v-html="$t('q4.o2')"></label></li>
              <li><input id="q4o3" @click="q4Submitted=false" type="radio" value="3" v-model="Quest4" name="Question4"> <label for="q4o3" v-html="$t('q4.o3')"></label></li>
              <li><input id="q4o4" @click="q4Submitted=false" type="radio" value="4" v-model="Quest4" name="Question4"> <label for="q4o4" v-html="$t('q4.o4')"></label></li>
            </ol>
            <span v-if="Quest4 && q4Submitted">
              <p v-if="Quest4=='3'"><span class="v-right" />{{$t('q4.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q4.f-wrong')}}</p>
            </span>
            <b-button @click="q4Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 5">
            <p v-html="$t('q5.text')" />
            <ol type="1">
              <li><input id="q5o1" @click="q5Submitted=false" type="radio" value="1" v-model="Quest5" name="Question5"> <label for="q5o1" v-html="$t('q5.o1')"></label></li>
              <li><input id="q5o2" @click="q5Submitted=false" type="radio" value="2" v-model="Quest5" name="Question5"> <label for="q5o2" v-html="$t('q5.o2')"></label></li>
              <li><input id="q5o3" @click="q5Submitted=false" type="radio" value="3" v-model="Quest5" name="Question5"> <label for="q5o3" v-html="$t('q5.o3')"></label></li>
              <li><input id="q5o4" @click="q5Submitted=false" type="radio" value="4" v-model="Quest5" name="Question5"> <label for="q5o4" v-html="$t('q5.o4')"></label></li>
            </ol>
            <span v-if="Quest5 && q5Submitted">
              <p v-if="Quest5=='3'"><span class="v-right" />{{$t('q5.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q5.f-wrong')}}</p>
            </span>
            <b-button @click="q5Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 6">
            <p v-html="$t('q6.text')" />
            <ol type="1">
              <li><input id="q6o1" @click="q6Submitted=false" type="radio" value="1" v-model="Quest6" name="Question6"> <label for="q6o1" v-html="$t('q6.o1')"></label></li>
              <li><input id="q6o2" @click="q6Submitted=false" type="radio" value="2" v-model="Quest6" name="Question6"> <label for="q6o2" v-html="$t('q6.o2')"></label></li>
              <li><input id="q6o3" @click="q6Submitted=false" type="radio" value="3" v-model="Quest6" name="Question6"> <label for="q6o3" v-html="$t('q6.o3')"></label></li>
            </ol>
            <span v-if="Quest6 && q6Submitted">
              <p v-if="Quest6=='3'"><span class="v-right" />{{$t('q6.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q6.f-wrong')}}</p>
            </span>
            <b-button @click="q6Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 7">
            <p v-html="$t('q7.text')" />
            <ol type="1">
              <li><input id="q7o1" @click="q7Submitted=false" type="radio" value="1" v-model="Quest7" name="Question7"> <label for="q7o1" v-html="$t('q7.o1')"></label></li>
              <li><input id="q7o2" @click="q7Submitted=false" type="radio" value="2" v-model="Quest7" name="Question7"> <label for="q7o2" v-html="$t('q7.o2')"></label></li>
              <li><input id="q7o3" @click="q7Submitted=false" type="radio" value="3" v-model="Quest7" name="Question7"> <label for="q7o3" v-html="$t('q7.o3')"></label></li>
              <li><input id="q7o4" @click="q7Submitted=false" type="radio" value="4" v-model="Quest7" name="Question7"> <label for="q7o4" v-html="$t('q7.o4')"></label></li>
              <li><input id="q7o5" @click="q7Submitted=false" type="radio" value="5" v-model="Quest7" name="Question7"> <label for="q7o5" v-html="$t('q7.o5')"></label></li>
            </ol>
            <span v-if="Quest7 && q7Submitted">
              <p v-if="Quest7=='3'"><span class="v-right" />{{$t('q7.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q7.f-wrong')}}</p>
            </span>
            <b-button @click="q7Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 8">
            <p v-html="$t('q8.text')" />
            <ol type="1">
              <li><input id="q8o1" @click="q8Submitted=false" type="radio" value="1" v-model="Quest8" name="Question8"> <label for="q8o1" v-html="$t('q8.o1')"></label></li>
              <li><input id="q8o2" @click="q8Submitted=false" type="radio" value="2" v-model="Quest8" name="Question8"> <label for="q8o2" v-html="$t('q8.o2')"></label></li>
              <li><input id="q8o3" @click="q8Submitted=false" type="radio" value="3" v-model="Quest8" name="Question8"> <label for="q8o3" v-html="$t('q8.o3')"></label></li>
            </ol>
            <span v-if="Quest8 && q8Submitted">
              <p v-if="Quest8=='3'"><span class="v-right" />{{$t('q8.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q8.f-wrong')}}</p>
            </span>
            <b-button @click="q8Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 9">
            <p v-html="$t('q9.text')" />
            <ol type="1">
              <li><input id="q9o1" @click="q9Submitted=false" type="radio" value="1" v-model="Quest9" name="Question9"> <label for="q9o1" v-html="$t('q9.o1')"></label></li>
              <li><input id="q9o2" @click="q9Submitted=false" type="radio" value="2" v-model="Quest9" name="Question9"> <label for="q9o2" v-html="$t('q9.o2')"></label></li>
              <li><input id="q9o3" @click="q9Submitted=false" type="radio" value="3" v-model="Quest9" name="Question9"> <label for="q9o3" v-html="$t('q9.o3')"></label></li>
              <li><input id="q9o4" @click="q9Submitted=false" type="radio" value="4" v-model="Quest9" name="Question9"> <label for="q9o4" v-html="$t('q9.o4')"></label></li>
              <li><input id="q9o5" @click="q9Submitted=false" type="radio" value="5" v-model="Quest9" name="Question9"> <label for="q9o5" v-html="$t('q9.o5')"></label></li>
            </ol>
            <span v-if="Quest9 && q9Submitted">
              <p v-if="Quest9=='3'"><span class="v-right" /> {{$t('q9.f-right')}}</p>
              <p v-else> <span class="v-wrong" /> {{$t('q9.f-wrong')}}</p>
            </span>
            <b-button @click="q9Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 10">
            <p>{{$t('q10.text')}}</p>
            <ol type="1">
              <li><input id="q10o1" @click="q10Submitted=false" type="radio" value="1" v-model="Quest10" name="Question10"> <label for="q10o1" v-html="$t('q10.o1')"></label></li>
              <li><input id="q10o2" @click="q10Submitted=false" type="radio" value="2" v-model="Quest10" name="Question10"> <label for="q10o2" v-html="$t('q10.o2')"></label></li>
              <li><input id="q10o3" @click="q10Submitted=false" type="radio" value="3" v-model="Quest10" name="Question10"> <label for="q10o3" v-html="$t('q10.o3')"></label></li>
              <li><input id="q10o4" @click="q10Submitted=false" type="radio" value="4" v-model="Quest10" name="Question10"> <label for="q10o4" v-html="$t('q10.o4')"></label></li>
            </ol>
            <span v-if="Quest10 && q10Submitted">
              <p v-if="Quest10=='3'"><span class="v-right" />{{$t('q10.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q10.f-wrong')}}</p>
            </span>
            <b-button @click="q10Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 11">
            <p>{{$t('q11.text')}}</p>
            <ol type="1">
              <li><input id="q11o1" @click="q11Submitted=false" type="checkbox" value="1" v-model="Quest11" name="Question11"> <label for="q11o1" v-html="$t('q11.o1')"></label></li>
              <li><input id="q11o2" @click="q11Submitted=false" type="checkbox" value="2" v-model="Quest11" name="Question11"> <label for="q11o2" v-html="$t('q11.o2')"></label></li>
              <li><input id="q11o3" @click="q11Submitted=false" type="checkbox" value="3" v-model="Quest11" name="Question11"> <label for="q11o3" v-html="$t('q11.o3')"></label></li>
              <li><input id="q11o4" @click="q11Submitted=false" type="checkbox" value="4" v-model="Quest11" name="Question11"> <label for="q11o4" v-html="$t('q11.o4')"></label></li>
              <li><input id="q11o5" @click="q11Submitted=false" type="checkbox" value="5" v-model="Quest11" name="Question11"> <label for="q11o5" v-html="$t('q11.o5')"></label></li>
            </ol>
            <p v-if="!isAcceptable(Quest11) && q11Submitted">Please answer the question!</p>
            <span v-if="isAcceptable(Quest11) && q11Submitted">
              <p v-if="arraysMatch(Quest11,[3,4,5])"><span class="v-right" /> {{$t('q11.f-right')}}</p>
              <p v-else> <span class="v-wrong" /> {{$t('q11.f-wrong')}}</p>
            </span>
            <b-button @click="q11Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 12">
            <p>{{$t('q12.text')}}</p>
            <ol type="1">
              <li><input id="q12o1" @click="q12Submitted=false" type="radio" value="1" v-model="Quest12" name="Question12"> <label for="q12o1" v-html="$t('q12.o1')"></label></li>
              <li><input id="q12o2" @click="q12Submitted=false" type="radio" value="2" v-model="Quest12" name="Question12"> <label for="q12o2" v-html="$t('q12.o2')"></label></li>
              <li><input id="q12o3" @click="q12Submitted=false" type="radio" value="3" v-model="Quest12" name="Question12"> <label for="q12o3" v-html="$t('q12.o3')"></label></li>
            </ol>
            <span v-if="Quest12 && q12Submitted">
              <p v-if="Quest12=='3'"><span class="v-right" />{{$t('q12.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q12.f-wrong')}}</p>
            </span>
            <b-button @click="q12Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 13">
            <p>{{$t('q13.text')}}</p>
            <ol type="1">
              <li><input id="q13o1" @click="q13Submitted=false" type="radio" value="1" v-model="Quest13" name="Question13"> <label for="q13o1" v-html="$t('q13.o1')"></label></li>
              <li><input id="q13o2" @click="q13Submitted=false" type="radio" value="2" v-model="Quest13" name="Question13"> <label for="q13o2" v-html="$t('q13.o2')"></label></li>
              <li><input id="q13o3" @click="q13Submitted=false" type="radio" value="3" v-model="Quest13" name="Question13"> <label for="q13o3" v-html="$t('q13.o3')"></label></li>
              <li><input id="q13o4" @click="q13Submitted=false" type="radio" value="4" v-model="Quest13" name="Question13"> <label for="q13o4" v-html="$t('q13.o4')"></label></li>
              <li><input id="q13o5" @click="q13Submitted=false" type="radio" value="5" v-model="Quest13" name="Question13"> <label for="q13o5" v-html="$t('q13.o5')"></label></li>
            </ol>
            <span v-if="Quest13 && q13Submitted">
              <p v-if="Quest13=='3'"><span class="v-right" />{{$t('q13.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q13.f-wrong')}}</p>
            </span>
            <b-button @click="q13Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
          <b-tab title="Question 14">
            <p>{{$t('q14.text')}}</p>
            <ol type="1">
              <li><input id="q14o1" @click="q14Submitted=false" type="radio" value="1" v-model="Quest14" name="Question14"> <label for="q14o1" v-html="$t('q14.o1')"></label></li>
              <li><input id="q14o2" @click="q14Submitted=false" type="radio" value="2" v-model="Quest14" name="Question14"> <label for="q14o2" v-html="$t('q14.o2')"></label></li>
              <li><input id="q14o3" @click="q14Submitted=false" type="radio" value="3" v-model="Quest14" name="Question14"> <label for="q14o3" v-html="$t('q14.o3')"></label></li>
              <li><input id="q14o4" @click="q14Submitted=false" type="radio" value="4" v-model="Quest14" name="Question14"> <label for="q14o4" v-html="$t('q14.o4')"></label></li>
            </ol>
            <span v-if="Quest14 && q14Submitted">
              <p v-if="Quest14=='3'"><span class="v-right" />{{$t('q14.f-right')}}</p>
              <p v-else> <span class="v-wrong" />{{$t('q14.f-wrong')}}</p>
            </span>
            <b-button @click="q14Submitted=true">{{$t('submit')}}</b-button>
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      tabIndex: 0,
      q1Submitted: false,
      q2Submitted: false,
      q3Submitted: false,
      q4Submitted: false,
      q5Submitted: false,
      q6Submitted: false,
      q7Submitted: false,
      q8Submitted: false,
      q9Submitted: false,
      q10Submitted: false,
      q11Submitted: false,
      q12Submitted: false,
      q13Submitted: false,
      q14Submitted: false,
      Quest1: '',
      answers1: ['q1.a1', 'q1.a2', 'q1.a3', 'q1.a4', 'q1.a5', 'q1.a6', 'q1.a7', 'q1.a8', 'q1.a9', 'q1.a10', 'q1.a11'],
      options1: '',
      options2: '',
      options3: '',
      options4: '',
      options5: '',
      options6: '',
      options7: '',
      options8: '',
      options9: '',
      options10: '',
      options11: '',
      Quest2: [],
      Quest3: '',
      Quest4: '',
      Quest5: '',
      Quest6: '',
      Quest7: '',
      Quest8: '',
      Quest9: '',
      Quest10: '',
      Quest11: [],
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
  "en":
  {
  "qDisabled": "Choose",
  "checkAll": "Check all that apply.",
  "selectRight": "Select the correct answer.",
    "pwpGovtPri":"<strong>Government priorities</strong>",
  "pwpDeptPri":"<strong>Departmental priorities</strong>",
  "pwpDirPri":"<strong>Directorate priorities</strong>",
  "titleActivities":"Activities",
  "pwpPlanAct":"<strong>Activities</strong>",
  "titleSubActivities":"Sub-activities",
  "titleDeliverables":"Deliverables",
  "titleRisk":"Risk",
  "titleLikelihood":"Likelihood",
  "titleImpact":"Impact",
  "titleMitigation":"Mitigation",
  "titleResources":"Resources",
  "q1":
  {
  "text": "Match the following statements to the appropriate sections of the work plan. Each section can only be populated with one statement.",
  "a1": "High",
  "a2": "Work with Canadians in all areas of the economy and all parts of the country to improve conditions for investment",
  "a3": "Tablets",
  "a4": "Keep original computers until tablets are up and running for 3 months",
  "a5": "Give employees new digital tools to promote mobility",
  "a6": "Modernize and renew the public service to better serve Canadians and foster a healthy, productive workforce",
  "a7": "Buy tablets ",
  "a8": "Technology is not compatible with existing network ",
  "a9": "Low",
  "a10": "Workplace Modernization",
  "a11": "Give employees tablets"
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
  "f-right": "Yes! It’s a good idea to start your view of the big picture with the Speech from the Throne."
  },
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
  "fr":
  {
  "qDisabled": "Choisissez",
  "pwpGovtPri":"<strong>Priorités du gouvernement</strong>",
  "pwpDeptPri":"<strong>Priorités ministérielles</strong>",
  "pwpDirPri":"<strong>Priorités de la direction</strong>",
  "titleActivities":"Activités",
  "titleSubActivities":"Sous-activités",
  "titleDeliverables":"Livrables",
  "titleRisk":"Risque",
  "titleLikelihood":"Probabilité",
  "titleImpact":"Impact",
  "titleMitigation":"Atténuation",
  "titleResources":"Resources",
  "q1":
  {
  "text": "Faites correspondre les &eacute;nonc&eacute;s suivants aux sections appropri&eacute;es du plan de travail. Chaque section ne peut contenir qu'un seul &eacute;nonc&eacute;.",
  "a1": "Élevé ",
  "a2": "Travailler avec les Canadiens dans tous les secteurs de l'économie et dans toutes les régions du pays pour améliorer les conditions d'investissement.",
  "a3": "Tablettes",
  "a4": "Conservez les ordinateurs d'origine jusqu'à ce que les tablettes soient prêtes et à l'emploi pendant 3 mois. ",
  "a5": "Donner aux salariés de nouveaux outils numériques pour favoriser la mobilité ",
  "a6": "Moderniser et renouveler la fonction publique afin de mieux servir les Canadiens et de favoriser une main-d'œuvre saine et productive.",
  "a7": "Acheter des tablettes",
  "a8": "La technologie n'est pas compatible avec le réseau existant ",
  "a9": "Faible",
  "a10": "Modernisation du milieu de travail ",
  "a11": "Donner des tablettes aux employés"
  },
  "q2":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "f-right": "",
  "f-wrong": ""
  },
  "q3":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q4":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q5":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q6":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q7":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "o5": "",
  "f-right": "",
  "f-wrong": ""
  },
  "q8":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q9":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "o5": "",
  "f-right": "",
  "f-wrong": ""
  },
  "q10":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q11":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "o5": "",
  "f-right": "",
  "f-wrong": ""
  },
  "q12":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "f1": "",
  "f2": "",
  "f3": ""
  },
  "q13":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "o5": "",
  "f-wrong": "",
  "f-right": ""
  },
  "q14":
  {
  "text": "",
  "o1": "",
  "o2": "",
  "o3": "",
  "o4": "",
  "f1": "",
  "f2": "",
  "f3": "",
  "f4": ""
  }
  }
  }
</i18n>
<style type="text/css" scoped>
select{width:100%;}
.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}
.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}
.tableColoured td {
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select{
  max-width: 100%;
}
.vertical{
  transform: rotate(90deg);
}
.deptPri:before {
  background-color: #167777;
}
.deptPri {
  border-top: 2px solid #167777;
  background-color: #c7e0e0
}
.govtPri {
  border-top: 2px solid #6C076C;
  background-color: #e1c8e1
}
.govtPri:before {
  background-color: #6C076C;
}
.dirPri {
  border-top: 2px solid #6F1E0D;
  background-color: #e2ceca
}
.dirPri:before {
  background-color: #6F1E0D;
}
.planAct {
  border-top: 2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-top: 2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-top: 2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-top: 2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-top: 2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-top: 2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-top: 2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-top: 2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}
.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}
.thNumbered:before {
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}

</style>