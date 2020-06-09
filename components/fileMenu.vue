<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="44" />
    </a>
    <b-modal id="fileFolder" okOnly size="xl">
      <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            {{$t('fileFolder')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-1 class="fileHead" variant="light"><img src="~/assets/FilesIcon.svg" width="50" height="50">{{$t('files')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-1" visible accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-row>
                  <b-col cols="12"><h4>{{$t('plan')}}</h4></b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.threeSixty')" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" :lineTag="$t('threeSixtyExample')" :fileSize="this.$i18n.locale == 'en' ? '118' : '124'" />
                    <HTMLJobaidLink :filename="$t('fileName.threeSixtyHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.WorkPlanTemplate')" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" :lineTag="$t('WPExample')" :fileSize="this.$i18n.locale == 'en' ? '15.9' : '17,5'" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.buildWPProcessMap')" size=128 iconColor="planBackground" :title="$t('DownloadProcessMap')" :line1="$t('ProcessMapLn1')" :line2="$t('ProcessMapLn2')" :lineTag="$t('buildWPProcessMapExample')" :fileSize="this.$i18n.locale == 'en' ? '121' : '114'" />
                    <HTMLJobaidLink :filename="$t('fileName.buildWPProcessMapHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.newBudget')" size=128 iconColor="planBackground" :title="$t('DownloadNewBudget')" :line1="$t('newBudgetLn1')" :line2="$t('newBudgetLn2')" :lineTag="$t('newBudgetExample')" :fileSize="this.$i18n.locale == 'en' ? '129' : '131'" />
                    <HTMLJobaidLink :filename="$t('fileName.newBudgetHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.cycle')" size=128 iconColor="Scan360Background" :title="$t('DownloadCycle')" :line1="$t('cycleLn1')" :line2="$t('cycleLn2')" :lineTag="$t('cycleExample')" :fileSize="this.$i18n.locale == 'en' ? '61.6' : '62,6'" />
                    <HTMLJobaidLink :filename="$t('fileName.cycleHTML')" />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12"><h4>{{$t('spend')}}</h4></b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.procurementInstruments')" size=128 iconColor="spendBackground" :title="$t('DownloadProcurementInstruments')" :line1="$t('procurementInstrumentsLn1')" :line2="$t('procurementInstrumentsLn2')" :lineTag="$t('procurementInstrumentsExample')" :fileSize="this.$i18n.locale == 'en' ? '134' : '139'" />
                    <HTMLJobaidLink :filename="$t('fileName.procurementInstrumentsHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.s32s34')" size=128 iconColor="spendBackground" :title="$t('Downloads32s34')" :line1="$t('s32s34Ln1')" :line2="$t('s32s34Ln2')" :lineTag="$t('s32s34Example')" :fileSize="this.$i18n.locale == 'en' ? '149' : '149'" class="review" />
                    <HTMLJobaidLink :filename="$t('fileName.s32s34HTML')" />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12"><h4>{{$t('report')}}</h4></b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.FSRRoadmap')" size=128 iconColor="reportBackground" :title="$t('DownloadFSRRoadmap')" :line1="$t('FSRRoadmapLn1')" :line2="$t('FSRRoadmapLn2')" :lineTag="$t('FSRRoadmapExample')" :fileSize="this.$i18n.locale == 'en' ? '107' : '111'" />
                    <HTMLJobaidLink :filename="$t('fileName.FSRRoadmapHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.prepareFSR')" size=128 iconColor="reportBackground" :title="$t('DownloadPrepareFSR')" :line1="$t('prepareFSRLn1')" :line2="$t('prepareFSRLn2')" :lineTag="$t('prepareFSRExample')" :fileSize="this.$i18n.locale == 'en' ? '108' : '96,5'" />
                    <HTMLJobaidLink :filename="$t('fileName.prepareFSRHTML')" />
                  </b-col>
                  <b-col cols="2" class="text-center">
                    <download :filename="$t('fileName.extReports')" size=128 iconColor="reportBackground" :title="$t('DownloadExtReports')" :line1="$t('extReportsLn1')" :line2="$t('extReportsLn2')" :lineTag="$t('extReportsExample')" :fileSize="this.$i18n.locale == 'en' ? '138' : '124'" />
                    <HTMLJobaidLink :filename="$t('fileName.extReportsHTML')" />
                  </b-col>
                </b-row>
                <!-- <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" /> -->
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-2 variant="light"><img alt="" src="~/assets/LinksIcon.svg" width="50" height="50"> {{$t('links')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-2" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <planLinks />
                <spendLinks />
                <reportLinks />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img alt="" src="~/assets/GlossaryIcon.svg" width="50" height="50"> {{$t('glossary')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <dl>
                    <dt>Coding structure</dt>
                    <dd>It’s a method of classifying transactions that allows an organization to capture financial information. It is the common language that permits accounting and financial data to be identified, aggregated, and reported for planning, resource allocation, management control, and evaluation purposes.</dd>
                  </dl>
                  <dl>
                    <dt>Responsibility centre</dt>
                    <dd>It’s an identifier associated with a manager or unit within an organization, to which budget commitments and expenditures can be recorded. </dd>
                  </dl>
                  <dl>
                    <dt>General ledger</dt>
                    <dd>It’s the lowest level to which expenditures get coded. </dd>
                  </dl>
                  <dl>
                    <dt>Fund</dt>
                    <dd>A budget made available for a particular purpose; for example, salary, operating, and capital.</dd>
                  </dl>
                  <dl>
                    <dt>Internal order</dt>
                    <dd>It’s a self-contained mini-project in which you can track expenditures.</dd>
                  </dl>
                  <dl>
                    <dt>Program inventory</dt>
                    <dd>Identifies the programs that contribute to the department’s Core Responsibilities and Results.</dd>
                  </dl>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <dl>
                    <dt>Structure de codage</dt>
                    <dd>Il s’agit d’une méthode de classification des transactions qui permet à une organisation de saisir l’information financière. C’est le langage commun qui permet de déterminer, d’agréger et de rapporter les données comptables et financières à des fins de planification, d’affectation des ressources, de contrôle de gestion, de reporting et d’évaluation.</dd>
                  </dl>
                  <dl>
                    <dt>Centre de responsabilité</dt>
                    <dd>Il s’agit d’un identificateur associé à un gestionnaire ou à une unité au sein d’une organisation, pour lequel des engagements et des dépenses budgétaires peuvent être enregistrés.</dd>
                  </dl>
                  <dl>
                    <dt>Grand livre général</dt>
                    <dd>C’est le niveau le plus bas auquel les dépenses sont codées. </dd>
                  </dl>
                  <dl>
                    <dt>Fonds</dt>
                    <dd>Un budget mis à disposition à des fins particulières. Par exemple : salaires, fonctionnement, capital.</dd>
                  </dl>
                  <dl>
                    <dt>Ordre interne</dt>
                    <dd>Il s’agit d’un mini projet autonome dans lequel vous pouvez suivre les dépenses.</dd>
                  </dl>
                  <dl>
                    <dt>Inventaire des programmes</dt>
                    <dd>Détermine les programmes qui contribuent aux responsabilités essentielles et aux résultats du ministère.</dd>
                  </dl>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-4 variant="light"><img alt=""  src="~/assets/HelpIcon.svg" width="50" height="50"> {{$t('help')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-4" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <p>This course is organized into three sections: <strong>plan</strong>, <strong>spend</strong> and <strong>report</strong>.</p>
                  <p>You can choose where you want to start the course and how deep you wish to go into the content. Here are a few tips to help orient you.</p>
                  <ul>
                    <li>You can navigate through the sections of the course by using the <strong>menu icon</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">navigation menu icon example</span></span>) in the top left corner of the screen or by using the &ldquo;tiles&rdquo; found on each screen.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/nav-example.PNG" alt="&ldquo;tiles&rdquo; example" />
                  <ul>
                    <li>Select the key messages to review highlights, for a refresher on each topic.</li>
                    <li>If you’re learning the content for the first time, take the time to <strong>go through each section</strong>. Do the <strong>in-depth learning activities</strong> and review the tools and resources. Each section should take you around 15 to 20 minutes to complete. There are visual cues to show your progress as you move through the course.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/progression-example.PNG" alt="visual cues for progression example" />
                  <ul>
                    <li>Select the <strong>video icon</strong> ( <img src="~/assets/VideoIcon.svg" alt="video icon example" style="display: inline; width: 30px; height: 30px;" /> ) to view the videos in each section, and the <strong>pencil icon</strong> ( <img src="~/assets/ActivityIcon.svg" alt="pencil icon example" style="display: inline; width: 30px; height: 30px;" /> ) to complete an activity.</li>
                    <li>You can jump to the <strong>test</strong> for each section at any time or complete the tests for the <strong>plan</strong>, <strong>spend</strong> and <strong>report</strong> sections in order as you finish each lesson. The passing grade is <strong>80% for each section</strong>. You can access course materials during the test and retake the test as many times as you need to. </li>
                    <li>Access the <strong>home</strong> screen at any time by selecting the (<homebutton v-bind:iconWidth="50" iconTitle="home icon example" style="position: relative; top: -12px; left: -6px;" />) icon.</li>
                  </ul>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <p>Ce cours est organisé en 3 sections : <strong>planification</strong>, <strong>dépenses</strong> et <strong>rapports</strong>. </p>
                  <p>Vous pouvez choisir là où commencer le cours, et décider jusqu'à quel point approfondir le contenu. Voici quelques conseils pour vous orienter&nbsp;:</p>
                  <ul>
                    <li>Vous pouvez naviguer dans les sections du cours en utilisant l’icône du <strong>menu</strong> (<span class="hamburger-example">&nbsp;&nbsp;&nbsp;&nbsp; <span class="v-inv">exemple de l'icône du menu de navigation</span></span>) en haut à gauche de l'écran ou en utilisant les «&nbsp;tuiles&nbsp;» sur chaque écran.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/nav-example_fr.PNG" alt="exemple de «&nbsp;tuiles&nbsp;»" />
                  <ul>
                    <li>Choisissez les <strong>messages clés</strong> pour réviser les points saillants, comme rappel sur chaque sujet.</li>
                    <li>Si le contenu est nouveau pour vous, prenez le temps de <strong>parcourir chaque section</strong>. Faites <strong>les activités d'apprentissage en profondeur</strong> et examinez les outils et les ressources. Chaque section devrait vous prendre de 15 à 20 minutes. Des repères visuels s’affichent pour indiquer vos progrès au fur et à mesure que vous avancez dans le cours.</li>
                  </ul>
                  <img class="img-fluid" src="~/assets/progression-example_fr.PNG" alt="visual cues for progression example" />
                  <ul></ul>
                  <li>Choisissez l'<strong>icône de la vidéo</strong> ( <img src="~/assets/VideoIcon.svg" alt="exemple de l'icône de la vidéo" style="display: inline; width: 30px; height: 30px;" /> )  pour visionner les vidéos de chaque section et l'<strong>icône du crayon</strong> ( <img src="~/assets/ActivityIcon.svg" alt="exemple de l'icône du crayon" style="display: inline; width: 30px; height: 30px;" /> ) pour réaliser une activité.</li>
                  <li>Passez au <strong>test</strong> pour chaque section de <strong>planification</strong>, <strong>dépenses</strong> et <strong>rapports</strong> à n'importe quel moment ou faites-les dans l'ordre au fur et à mesure que vous terminez chaque leçon. La note de passage est de <strong>80&nbsp;% pour chacune de ces sections</strong>. Vous pouvez accéder au matériel didactique pendant le test et vous pouvez le reprendre autant de fois que vous le souhaitez.</li>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import fileIcon from '~/components/icons/FileIcon'
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import planLinks from "~/components/plan_links"
import spendLinks from "~/components/spend_links"
import reportLinks from "~/components/report_links"
import homebutton from "~/components/icons/home_icon"
export default {
  components: {
    fileIcon,
    download,
    planLinks,
    spendLinks,
    reportLinks,
    homebutton,
    HTMLJobaidLink
  }
}

</script>
<style type="text/css" scoped>
  
  .card-header a.btn-light {
    text-transform: uppercase;
    color: #4d4d4d;
    font-weight: 500;
    font-size: 28px;
    text-align: left
  }
  
  .hamburger-example {
    top: 0em;
    width: 50px;
    height: 26px;
    border: none;
    position: relative;
    background: linear-gradient(to bottom, #4D4D4D, #4D4D4D);
    background-size: 100% 20%;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-size 0.2s 0.25s ease;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
  }
  .hamburger-example:before,
  .hamburger-example:after {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #4D4D4D;
    content: '';
    transition: transform 0.3s ease;
  }
  .hamburger-example:before {
    top: 0;
    transform-origin: 91% 150%;
  }
  .hamburger-example:after {
    bottom: 0;
    transform-origin: 84% -50%;
  }

</style>