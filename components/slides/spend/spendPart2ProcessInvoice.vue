<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <p v-if="$i18n.locale=='en'">
              <table class="qTable" border="1">
                <tbody>
                  <tr>
                    <th colspan="2">
                      <p>Fund</p>
                    </th>
                    <th colspan="2">
                      <p>Fund Center</p>
                    </th>
                    <th colspan="2">
                      <p>General Ledger</p>
                    </th>
                    <th colspan="2">
                      <p>Program Inventory</p>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <p>N001</p>
                    </td>
                    <td>
                      <p>Salary</p>
                    </td>
                    <td>
                      <p>C4346</p>
                    </td>
                    <td>
                      <p>Fisheries Manager</p>
                    </td>
                    <td>
                      <p>40600</p>
                    </td>
                    <td>
                      <p>Travel</p>
                    </td>
                    <td>
                      <p>P45</p>
                    </td>
                    <td>
                      <p>Commercial Fishing</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p v-if="$i18n.locale=='fr'">
              <table border="1">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <p><strong>Fonds</strong></p>
                    </td>
                    <td colspan="2">
                      <p><strong>Centre financier</strong></p>
                    </td>
                    <td colspan="2">
                      <p><strong>Grand livre général</strong></p>
                    </td>
                    <td colspan="2">
                      <p><strong>Inventaire des programmes</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>N001</p>
                    </td>
                    <td>
                      <p>Salaire</p>
                    </td>
                    <td>
                      <p>C4346</p>
                    </td>
                    <td>
                      <p>Gestionnaire des p&ecirc;ches</p>
                    </td>
                    <td>
                      <p>40600</p>
                    </td>
                    <td>
                      <p>Voyage</p>
                    </td>
                    <td>
                      <p>P45</p>
                    </td>
                    <td>
                      <p>P&ecirc;che commerciale</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <radioQuiz :question="$t('q1')" qId="1" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<style type="text/css" scoped>
  .qTable th{
    text-align: center;
    background-color: #8e7cc3;
    color: #fff;
  }
  .qTable td{
    padding:.5em;
  }
  .qTable td:nth-child(n+3):nth-child(-n+4),
  .qTable td:nth-child(n+7){
    background-color: hsl(255, 37%, 90%);
  }
  .qTable{
    margin-top:1em;
  }
</style>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
  ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz },
  data() {
    return {
      tabIndex: 0

    }
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "Looking at the provided financial coding, would you certify the invoice under section 34?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "The Fund is coded incorrectly to Salary, it should be O&M. The General Ledger is coded incorrectly to Travel, it should be Office Supplies. You should correct the financial coding before certifying under section 34."
  },
  "q2": {
  "text": "Can a manager approve their own $15 parking claim?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "No one has delegated authority to sign off for a reimbursement of their own expenditures."
  }
  },
  "fr": {
  "q1": {
  "text": "En examinant le codage financier fourni, certifieriez-vous la facture en vertu de l&rsquo;article 34 ?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Le fonds est incorrectement codé dans Salaire, il devrait être F&E. Le Grand livre général est incorrectement codé dans Voyages, il devrait s&rsquo;agir de Fournitures de bureau. Vous devez corriger le codage financier avant d&rsquo;attester en vertu de l&rsquo;article 34."
  },
  "q2": {
  "text": "Est-ce qu&rsquo;un gestionnaire peut approuver sa propre réclamation de stationnement de 15 $?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Personne n&rsquo;a le pouvoir délégué d&rsquo;approuver le remboursement de ses propres dépenses."
  }
  }
  }</i18n>
