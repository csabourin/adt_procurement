<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","4"]' /></b-tab>
          <b-tab title="Question 2">
            <div class="tableScrollLTL" v-if="$i18n.locale=='en'">
            <table border="1" class="qTable">
                <thead>
                  <tr>
                    <th colspan="2" scope="col">
                      <p><strong>Line Item</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Commitments</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>YTD Actuals</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Annual Forecast Expenditures</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Budget Notes</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="12">O&M</th>
                     </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>Software Licence</p>
                    </td>
                    <td colspan="2">
                      <p>3 000$</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>0$</p>
                    </td>
                    <td  colspan="2">
                      <p>1 500 $</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>3 000 $</p>
                    </td>
                    <td colspan="2">
                      <p>annual cost $1,000 per licence × 3 FTEs</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tableScrollLTL" v-if="$i18n.locale=='fr'">
              <table border="1" class="qTable">
                <thead>
                  <tr>
                    <th colspan="2" id="1" scope="col">
                      <p><strong>Poste individuel</strong></p>
                    </th>
                    <th colspan="2" id="2" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th colspan="2" id="3" scope="col">
                      <p><strong>Engagements</strong></p>
                    </th>
                    <th colspan="2" id="4" scope="col">
                      <p><strong>CDA réel</strong></p>
                    </th>
                    <th colspan="2" id="5" scope="col">
                      <p><strong>Dépenses annuelles prévues</strong></p>
                    </th>
                    <th colspan="2" id="6" scope="col">
                      <p><strong>Notes budgétaires</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="12">F et E</th>
                     </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>License de logiciel</p>
                    </td>
                    <td colspan="2">
                      <p>3 000$</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>0$</p>
                    </td>
                    <td  colspan="2">
                      <p>1 500 $</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>3 000 $</p>
                    </td>
                    <td colspan="2">
                      <p>coût annuel 1 000 $ × 3 ETP </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
          <b-tab title="Question 3">
            <div class="tableScrollLTL" v-if="$i18n.locale=='en'">
            <table border="1" class="qTable">
                <thead>
                  <tr>
                    <th colspan="2" scope="col">
                      <p><strong>Line Item</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Commitments</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>YTD Actuals</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Annual Forecast Expenditures</strong></p>
                    </th>
                    <th colspan="2" scope="col">
                      <p><strong>Budget Notes</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="12">O&M</th>
                     </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>Conferences</p>
                    </td>
                    <td colspan="2">
                      <p>$15,000</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>$2,500</p>
                    </td>
                    <td  colspan="2">
                      <p>$8,000</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>$10,500</p>
                    </td>
                    <td colspan="2">
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>Furniture</p>
                    </td>
                    <td colspan="2">
                      <p>$1,000</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>$100</p>
                    </td>
                    <td  colspan="2">
                      <p>$900</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>$1,000</p>
                    </td>
                    <td colspan="2">
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tableScrollLTL" v-if="$i18n.locale=='fr'">
              <table border="1" class="qTable">
                <thead>
                  <tr>
                    <th colspan="2" id="1" scope="col">
                      <p><strong>Poste individuel</strong></p>
                    </th>
                    <th colspan="2" id="2" scope="col">
                      <p><strong>Budget</strong></p>
                    </th>
                    <th colspan="2" id="3" scope="col">
                      <p><strong>Engagements</strong></p>
                    </th>
                    <th colspan="2" id="4" scope="col">
                      <p><strong>CDA réel</strong></p>
                    </th>
                    <th colspan="2" id="5" scope="col">
                      <p><strong>Dépenses annuelles prévues</strong></p>
                    </th>
                    <th colspan="2" id="6" scope="col">
                      <p><strong>Notes budgétaires</strong></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="12">F et E</th>
                     </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>Conférences</p>
                    </td>
                    <td colspan="2">
                      <p>15 000$</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>2 500$</p>
                    </td>
                    <td  colspan="2">
                      <p>8 000 $</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>10 500 $</p>
                    </td>
                    <td colspan="2">
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: hsl(255, 37%, 90%);" colspan="2">
                      <p>Meubles</p>
                    </td>
                    <td colspan="2">
                      <p>1 000$</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>100$</p>
                    </td>
                    <td  colspan="2">
                      <p>900 $</p>
                    </td>
                    <td style="background-color: hsl(255, 37%, 90%);text-align: right;" colspan="2">
                      <p>1 000 $</p>
                    </td>
                    <td colspan="2">
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <radioQuiz :question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6">
            <windowPortal :open="openChart" @close="openChart = false">
      <delegAutorityEn v-if="$i18n.locale=='en'" />
      <delegAutorityFr v-if="$i18n.locale=='fr'" />
    </windowPortal>
    <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
    <b-row>
      <b-col cols="6" md="4" lg="2" class="text-center">
        <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="this.$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
      </b-col>
    </b-row>
            <radioQuiz :question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :question="$t('q7')" qId="7" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=6">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<style type="text/css" scoped>
  .qTable th{
    text-align: center;
    background-color: #7D677D;
    color: #fff;
  }
  .qTable td, .qTable th{
    text-align: center;
    padding:.5em;
  }
  /*.qTable td:nth-child(n+3):nth-child(-n+4),
  .qTable td:nth-child(n+7){
    background-color: hsl(255, 37%, 90%);
  }*/
  .qTable{
    margin-top:1em;
  }
</style>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import delegAutorityEn from "~/components/delegationChart/delegchart_en"
import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
import windowPortal from "~/components/newWindow"
export default {
  components: { 
    radioQuiz, 
    checkboxQuiz,
    delegAutorityFr,
    delegAutorityEn,
    windowPortal
     },
  data() {
    return {
      tabIndex: 0,
      openChart: false
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").focus();
      }, 300);
    }
  }
}
</script>
<i18n>{
  "en": {
    "openChartButton": "Open the delegation of spending and financial signing authorities chart",
    "q1": {
      "text": "If you don’t have enough funds, what can you do to secure other sources of money?",
      "options": {
        "1": "Transfer funds within your own budgets",
        "2": "Get extra money from other managers ",
        "3": "Change the number in your budget ",
        "4": "Use an untapped surplus your director might have "
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> To secure other sources of money, you can transfer funds within your own budgets, get extra money from other managers and use an untapped surplus your director might have. You cannot simply change the number in your budget.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> To secure other sources of money, you can transfer funds within your own budgets, get extra money from other managers and use an untapped surplus your director might have. You cannot simply change the number in your budget."
      }
    },
    "q2": {
      "text": "Looking at the Software Licence line item in the budget provided, do you have enough funds to cover a fourth software licence for a new employee?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong> Vous avez seulement assez d'argent pour couvrir le coût des licences de logiciel pour 3 employés.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Vous avez seulement assez d'argent pour couvrir le coût des licences de logiciel pour 3 employés."
      }
    },
    "q3": {
      "text": "Your employee needs specialized software to process client requests. What would you do?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct.</strong> Vous avez suffisamment de fonds. Comme vous ne prévoyez de dépenser que 10 500 $ des 15 000 $ réservés aux conférences, vous pouvez transférer le solde de 4 500 $ du poste Conférence au poste Meubles.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous avez suffisamment de fonds. Comme vous ne prévoyez de dépenser que 10 500 $ des 15 000 $ réservés aux conférences, vous pouvez transférer le solde de 4 500 $ du poste Conférence au poste Meubles."
      }
    },
    "q4": {
      "text": "Which are the two authority streams created by Parliament? ",
      "options": {
        "1": "Financial and procurement authorities ",
        "2": "Goods and services authorities ",
        "3": "Procurement and purchasing authorities ",
        "4": "Financial and purchasing authorities"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. "
      }
    },
    "q5": {
      "text": "Which section of the Financial Administration Act covers payment authority?",
      "options": {
        "1": "Section 32",
        "2": "Section 33",
        "3": "Section 34",
        "4": "Section 41"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "2": "<span class='v-right' /> <strong>Correct!</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement"
      }
    },
    "q6": {
      "text": "Using the delegation of financial signing authority chart provided, can a manager purchase a $5,550 item on their acquisition card? ",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Selon le tableau de délégation des pouvoirs de signature en matière financière, un gestionnaire peut seulement acheter jusqu’à 5 000 $ sur sa carte d’achat. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Selon le tableau de délégation des pouvoirs de signature en matière financière, un gestionnaire peut seulement acheter jusqu’à 5 000 $ sur sa carte d’achat."
      }
    },
    "q7": {
      "text": "Using the delegation of financial signing authority chart provided, who can approve a $300K Competitive Services transaction?",
      "options": {
        "1": "Manager ",
        "2": "Director ",
        "3": "Assistant Deputy Minister ",
        "4": "Deputy Head "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "2": "<span class='v-wrong' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "3": "<span class='v-wrong' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "4": "<span class='v-right' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $"
      }
    }
  },
  "fr": {
    "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
    "q1": {
      "text": "Si vous n’avez pas assez de fonds, que pouvez-vous faire pour trouver d’autres sources d’argent?",
      "options": {
        "1": "Transférer des fonds dans vos propres budgets ",
        "2": "Obtenir de l’argent supplémentaire d’autres gestionnaires ",
        "3": "Changer le chiffre dans votre budget  ",
        "4": "Utiliser un surplus inexploité que votre directeur pourrait avoir"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Pour trouver d’autres sources de fonds, vous pouvez transférer des fonds dans votre propre budget, obtenir de l’argent supplémentaire d’autres gestionnaires et utiliser un surplus inexploité que votre directeur pourrait avoir. Vous ne pouvez pas tout simplement changer le chiffre dans votre budget.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Pour trouver d’autres sources de fonds, vous pouvez transférer des fonds dans votre propre budget, obtenir de l’argent supplémentaire d’autres gestionnaires et utiliser un surplus inexploité que votre directeur pourrait avoir. Vous ne pouvez pas tout simplement changer le chiffre dans votre budget."
      }
    },
    "q2": {
      "text": "En regardant le poste Licence de logiciel du budget fourni, avez-vous suffisamment de fonds pour couvrir une quatrième licence de logiciel pour un nouvel employé?",
      "options": {
        "1": "Oui ",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong> Vous avez seulement assez d'argent pour couvrir le coût des licences de logiciel pour 3 employés.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Vous avez seulement assez d'argent pour couvrir le coût des licences de logiciel pour 3 employés."
      }
    },
    "q3": {
      "text": "En regardant le budget fourni, avez-vous suffisamment de fonds pour acheter une chaise de 2 500 $ pour un nouvel employé? ",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct.</strong> Vous avez suffisamment de fonds. Comme vous ne prévoyez de dépenser que 10 500 $ des 15 000 $ réservés aux conférences, vous pouvez transférer le solde de 4 500 $ du poste Conférence au poste Meubles.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous avez suffisamment de fonds. Comme vous ne prévoyez de dépenser que 10 500 $ des 15 000 $ réservés aux conférences, vous pouvez transférer le solde de 4 500 $ du poste Conférence au poste Meubles."
      }
    },
    "q4": {
      "text": "Quelles sont les deux catégories de pouvoirs créées par le Parlement?",
      "options": {
        "1": "Pouvoirs financiers et pouvoirs en matière d’approvisionnement",
        "2": "Pouvoirs en matière de biens et de services ",
        "3": "Pouvoirs en matière d’approvisionnement et pouvoirs d’achat ",
        "4": "Pouvoirs financiers et pouvoirs d’achat "
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Le Parlement a créé deux catégories de pouvoir. Une pour les pouvoirs financiers et l’autre pour les pouvoirs en matière d’approvisionnement. "
      }
    },
    "q5": {
      "text": "Quel article de la Loi sur la gestion des finances publiques couvre les demandes de paiement?",
      "options": {
        "1": "Article 32",
        "2": "Article 33",
        "3": "Article 34",
        "4": "Article 41"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "2": "<span class='v-right' /> <strong>Correct!</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  L’article 33 de la Loi sur la gestion des finances publiques couvre les demandes de paiement"
      }
    },
    "q6": {
      "text": "En utilisant le tableau de délégation des pouvoirs de signature en matière financière fourni, un gestionnaire peut-il acheter un article de 5 500 $ avec sa carte d’achat?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Selon le tableau de délégation des pouvoirs de signature en matière financière, un gestionnaire peut seulement acheter jusqu’à 5 000 $ sur sa carte d’achat. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Selon le tableau de délégation des pouvoirs de signature en matière financière, un gestionnaire peut seulement acheter jusqu’à 5 000 $ sur sa carte d’achat."
      }
    },
    "q7": {
      "text": "À l’aide du tableau de délégation des pouvoirs de signature en matière financière fourni, qui peut approuver une transaction de 300 000 $ pour une transaction Concurrentiels - Services?",
      "options": {
        "1": "Gestionnaire",
        "2": "Directeur",
        "3": "Sous-ministre adjoint",
        "4": "Administrateur général"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "2": "<span class='v-wrong' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "3": "<span class='v-wrong' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $",
        "4": "<span class='v-right' /> <strong>Correct!</strong> Un administrateur général est celui qui peut approuver une transaction Concurrentiels - Services de 300 000 $"
      }
    }
    
  }
}</i18n>
<style type="text/css" scoped>
select {
  width: 100%;
}

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

.tableColoured td:before, .tableColoured div:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
  font-weight:bold;
}

.tableColoured td, .tableColoured div{
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select {
  max-width: 100%;
}

.vertical {
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
  font-weight:bold;
}

/* Wokring ... in */
div.tableColoured div {
  height:40px;
}
div.tableColoured p {
  margin:0;
}

.microTablePart2 div.thNumbered {
  float:left;
  height:40px;
  /* display:inline-block; */
  padding:0;
  margin:0;
  width:12.5%;
}
.microTablePart2 {
  /* position:relative; */
  width:100%;
}

/* Wokring ... out */

</style>