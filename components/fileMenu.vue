<template functionnal>
  <span>
    <a href="javascript:" v-b-modal.fileFolder>
      <fileIcon :title="$t('fileFolder')" width="44" />
    </a>
    <b-modal id="fileFolder" :title="$t('fileFolder')" okOnly size="xl">
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-2 class="fileHead" variant="light"><img src="~/assets/FilesIcon.svg" width="50" height="50">{{$t('files')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-2" visible accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
                <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-1 variant="light"><img alt="" src="~/assets/LinksIcon.svg" width="50" height="50"> {{$t('links')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-1" accordion="my-toolbox" role="tabpanel">
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
                    <dt>Coding Structure</dt>
                    <dd>It&rsquo;s a method of classifying transactions that allows an organization to capture financial information. It is the common language that permits accounting and financial data to be identified, aggregated, and reported for planning, resource allocation, management control, reporting, and evaluation purposes.</dd>
                  </dl>
                  <dl>
                    <dt>Responsibility Center</dt>
                    <dd>It&rsquo;s an identifier associated with a manager or unit within an organization to which budget commitments and expenditures can be recorded. </dd>
                  </dl>
                  <dl>
                    <dt>General Ledger</dt>
                    <dd>It&rsquo;s the lowest level to which expenditures get coded to. </dd>
                  </dl>
                  <dl>
                    <dt>Fund</dt>
                    <dd>A budget made available for a particular purpose. For example: salary, operating, capital.</dd>
                  </dl>
                  <dl>
                    <dt>Internal Order</dt>
                    <dd>It&rsquo;s a self-contained mini project in which you can track expenditures.</dd>
                  </dl>
                  <dl>
                    <dt>Program Inventory</dt>
                    <dd>Identifies the programs that contribute to the department&rsquo;s Core Responsibilities and Results.</dd>
                  </dl>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <dl>
                    <dt>Structure de codage</dt>
                    <dd>Il s&rsquo;agit d&rsquo;une méthode de classification des transactions qui permet à une organisation de saisir l&rsquo;information financière. C&rsquo;est le langage commun qui permet d&rsquo;identifier, d&rsquo;agréger et de rapporter les données comptables et financières à des fins de planification, d&rsquo;affectation des ressources, de contrôle de gestion, de reporting et d&rsquo;évaluation.</dd>
                  </dl>
                  <dl>
                    <dt>Centre de responsabilité</dt>
                    <dd>Il s&rsquo;agit d&rsquo;un identificateur associé à un gestionnaire ou à une unité au sein d&rsquo;une organisation pour lequel des engagements et des dépenses budgétaires peuvent être enregistrés.</dd>
                  </dl>
                  <dl>
                    <dt>Grand livre général</dt>
                    <dd>C&rsquo;est le niveau le plus bas auquel les dépenses sont codées. </dd>
                  </dl>
                  <dl>
                    <dt>Fonds</dt>
                    <dd>Un budget mis à disposition à des fins particulières. Par exemple : salaire, fonctionnement, capital.</dd>
                  </dl>
                  <dl>
                    <dt>Ordre interne</dt>
                    <dd>Il s&rsquo;agit d&rsquo;un mini projet autonome dans lequel vous pouvez suivre les dépenses.</dd>
                  </dl>
                  <dl>
                    <dt>Inventaire des programmes</dt>
                    <dd>Détermine les programmes qui contribuent aux responsabilités essentielles et aux résultats du Ministère.</dd>
                  </dl>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.toolbox-3 variant="light"><img alt=""  src="~/assets/HelpIcon.svg" width="50" height="50"> {{$t('help')}}</b-button>
          </b-card-header>
          <b-collapse id="toolbox-3" accordion="my-toolbox" role="tabpanel">
            <b-card-body>
              <b-card-text></b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import fileIcon from '~/components/icons/FileIcon'
import download from "~/components/fileDownload"
import planLinks from "~/components/plan_links"
import spendLinks from "~/components/spend_links"
import reportLinks from "~/components/report_links"
export default {
  components: {
    fileIcon,
    download,
    planLinks,
    spendLinks,
    reportLinks
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

</style>
