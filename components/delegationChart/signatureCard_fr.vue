<template>
  <table border="0" cellpadding="0" cellspacing="0">
    <colgroup>
      <col>
      <col>
      <col class="xl69">
      <col class="xl69">
      <col class="xl69">
      <col class="xl69">
      <col>
      <col>
      <col>
      <col span="25">
    </colgroup>
    <tbody>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl182" colspan="4" rowspan="3"><span v-html="$t('tableLine[1]')"> Formulaire de délégation<br>Acceptation de pouvoirs financiers délégués par le ministre et la sous-ministre/présidente</span></td>
        </td>
        <td colspan="4" class="xl182" v-html="$t('tableLine[2]')">Niveau</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td colspan="4" class="xl182" v-html="$t('tableLine[3]')">V</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" class="xl182" v-html="$t('tableLine[4]')">Gestionnaire de centre de coût</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td colspan="4" class="xl184" v-html="$t('tableLine[5]')">A - Pouvoir d'engagement des dépenses</td>
        <td class="xl92" v-html="$t('tableLine[6]')">&nbsp;</td>
        <td class="xl89" colspan="2" v-html="$t('tableLine[7]')">C - Pouvoir d'exécuter une opération</td>
        <td class="xl107" v-html="$t('tableLine[8]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[9]')">A1</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[10]')">Ententes intergouvernementales</td>
        <td class="xl95" v-html="$t('tableLine[11]')">&nbsp;</td>
        <td class="xl97" v-html="$t('tableLine[12]')">C10</td>
        <td class="xl94" v-html="$t('tableLine[13]')">Demande de biens et services à TPSGC</td>
        <td class="xl118" v-html="$t('tableLine[14]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[15]')">A2</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[16]')">Parrainage de conférences</td>
        <td class="xl95" v-html="$t('tableLine[17]')">&nbsp;</td>
        <td class="xl97" v-html="$t('tableLine[18]')">C11</td>
        <td class="xl94" v-html="$t('tableLine[19]')">Marchés de services de travail temporaire / AMA</td>
        <td class="xl118" v-html="$t('tableLine[20]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[21]')">A3</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[22]')">Participation à des conférences**</td>
        <td class="xl95" v-html="$t('tableLine[23]')">&nbsp;</td>
        <td class="xl97" v-html="$t('tableLine[24]')">C12</td>
        <td class="xl93" v-html="$t('tableLine[25]')">Marchés exceptionnels</td>
        <td class="xl118" v-html="$t('tableLine[26]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[27]')">A4</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[28]')">Cotisations et droits d'inscription</td>
        <td class="xl95" v-html="$t('tableLine[29]')">&nbsp;</td>
        <td colspan="2" rowspan="2" class="xl98" v-html="$t('tableLine[30]')">D - Autre pouvoirs</td>
        <td rowspan="2" class="xl187" v-html="$t('tableLine[31]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[32]')">A5</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[33]')">Voyages au Canada**</td>
        <td class="xl95" v-html="$t('tableLine[34]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[35]')">A6</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[36]')">Voyages dans la zone continentales des É.U.**</td>
        <td class="xl96" v-html="$t('tableLine[37]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[38]')">D1</td>
        <td class="xl94" v-html="$t('tableLine[39]')">Mise en place de petites caisses et avances permanentes</td>
        <td class="xl118" v-html="$t('tableLine[40]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[41]')">A7</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[42]')">Voyages à l'extérieur du Can.incluant É.U. non continental**</td>
        <td class="xl96" v-html="$t('tableLine[43]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[44]')">D2</td>
        <td class="xl94" v-html="$t('tableLine[45]')">Comptes à fins déterminées</td>
        <td class="xl118" v-html="$t('tableLine[46]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[47]')">A8</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[48]')">Accueil**</td>
        <td class="xl96" v-html="$t('tableLine[49]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[50]')">D3</td>
        <td class="xl94" v-html="$t('tableLine[51]')">Radiation d'éléments d'actifs</td>
        <td class="xl118" v-html="$t('tableLine[52]')">&nbsp;</td>
        <td class="xl100"></td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl85" v-html="$t('tableLine[53]')">A9</td>
        <td colspan="3" class="xl170" v-html="$t('tableLine[54]')">Réinstallation</td>
        <td class="xl96" v-html="$t('tableLine[55]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[56]')">D4</td>
        <td class="xl94" v-html="$t('tableLine[57]')">Pertes d'argent</td>
        <td class="xl118" v-html="$t('tableLine[58]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl86" v-html="$t('tableLine[59]')">A10</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[60]')">Subventions et contributions</td>
        <td class="xl96" v-html="$t('tableLine[61]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[62]')">D5</td>
        <td class="xl93" v-html="$t('tableLine[63]')">Radiation de créances</td>
        <td class="xl118" v-html="$t('tableLine[64]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl87" v-html="$t('tableLine[65]')">A11</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[66]')">Apprentissage et perfectionnement**</td>
        <td class="xl96" v-html="$t('tableLine[67]')">P*</td>
        <td class="xl98" v-html="$t('tableLine[68]')">D6</td>
        <td class="xl93" v-html="$t('tableLine[69]')">Demande de renvoi de chèques</td>
        <td class="xl118" v-html="$t('tableLine[70]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl87" v-html="$t('tableLine[71]')">A12</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[72]')">Prix</td>
        <td class="xl96" v-html="$t('tableLine[73]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[74]')">D7</td>
        <td class="xl93" v-html="$t('tableLine[75]')">Distribution recettes provenant aliénation biens de la Couronne</td>
        <td class="xl118" v-html="$t('tableLine[76]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl87" v-html="$t('tableLine[77]')">A13</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[78]')">Honoraires</td>
        <td class="xl96" v-html="$t('tableLine[79]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[80]')">D8</td>
        <td class="xl93" v-html="$t('tableLine[81]')">Protocole d'entente (PE) - revenu</td>
        <td class="xl118" v-html="$t('tableLine[82]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl87" v-html="$t('tableLine[83]')">A14</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[84]')">Rémunération et avantages sociaux</td>
        <td class="xl95" v-html="$t('tableLine[85]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[86]')">D9</td>
        <td class="xl93" v-html="$t('tableLine[87]')">Facturation pour revenu</td>
        <td class="xl118" v-html="$t('tableLine[88]')">P</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl88" v-html="$t('tableLine[89]')">A15</td>
        <td colspan="3" class="xl188" v-html="$t('tableLine[90]')">Tous les autres biens et services</td>
        <td class="xl95" v-html="$t('tableLine[91]')">P</td>
        <td class="xl98" v-html="$t('tableLine[92]')">D10</td>
        <td class="xl93" v-html="$t('tableLine[93]')">Remboursement des recettes (Note de crédit)</td>
        <td class="xl118" v-html="$t('tableLine[94]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td colspan="4" class="xl195" v-html="$t('tableLine[95]')">B - Pouvoir d'engager des fonds (art. 32 LGFP)</td>
        <td class="xl112" v-html="$t('tableLine[96]')">P</td>
        <td class="xl98" v-html="$t('tableLine[97]')">D11</td>
        <td class="xl93" v-html="$t('tableLine[98]')">Paiements à titre gracieux et réclamat. contre la Couronne</td>
        <td class="xl118" v-html="$t('tableLine[99]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td colspan="4" class="xl89">C - Pouvoir d'exécuter une opération<font class="font22"><sup>1,2</sup></font>
        </td>
        <td class="xl107" v-html="$t('tableLine[100]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[101]')">D12</td>
        <td class="xl93" v-html="$t('tableLine[102]')">Présentations au Conseil du Trésor</td>
        <td class="xl118" v-html="$t('tableLine[103]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[104]')">C1</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[105]')">Acquisitions avec une carte d'achat</td>
        <td class="xl81" v-html="$t('tableLine[106]')">P*</td>
        <td class="xl98" v-html="$t('tableLine[107]')">D13</td>
        <td class="xl106" v-html="$t('tableLine[108]')">Dispense du paiement des frais d'intérêts &amp; administratifs</td>
        <td class="xl118" v-html="$t('tableLine[109]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl91" v-html="$t('tableLine[110]')">C2</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[111]')">Demande de marché d'urgence</td>
        <td class="xl81" v-html="$t('tableLine[112]')">&nbsp;</td>
        <td class="xl98" v-html="$t('tableLine[113]')">D14</td>
        <td class="xl93" v-html="$t('tableLine[114]')">Remise de taxe provinciale percue</td>
        <td class="xl118" v-html="$t('tableLine[115]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[116]')">C3</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[117]')">Biens et services reliés aux biens</td>
        <td class="xl81" v-html="$t('tableLine[118]')">&nbsp;</td>
        <td colspan="2" rowspan="2" class="xl99" v-html="$t('tableLine[119]')">E - Pouvoir d'attestation (art. 34 LGFP)</td>
        <td rowspan="2" class="xl191" v-html="$t('tableLine[120]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[121]')">C4</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[122]')">Concurrence par appel d'offres électronique - Services</td>
        <td class="xl81" v-html="$t('tableLine[123]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[124]')">C5</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[125]')">Concurrence par appel d'offres électronique - Impression</td>
        <td class="xl81" v-html="$t('tableLine[126]')">&nbsp;</td>
        <td class="xl99" v-html="$t('tableLine[127]')">E1</td>
        <td class="xl106" v-html="$t('tableLine[128]')">Rémunération et avantages sociaux</td>
        <td class="xl118" v-html="$t('tableLine[129]')">P</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl91" v-html="$t('tableLine[130]')">C6</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[131]')">Concurrence traditionnelle - Services</td>
        <td class="xl101" v-html="$t('tableLine[132]')">&nbsp;</td>
        <td class="xl99" v-html="$t('tableLine[133]')">E2</td>
        <td class="xl106" v-html="$t('tableLine[134]')">Remboursement de petite caisse</td>
        <td class="xl118" v-html="$t('tableLine[135]')">0.2K</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[136]')">C7</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[137]')">Marché non concurrentiel - Services</td>
        <td class="xl101" v-html="$t('tableLine[138]')">&nbsp;</td>
        <td class="xl99" v-html="$t('tableLine[139]')">E3</td>
        <td class="xl93" v-html="$t('tableLine[140]')">Tous les autres paiements</td>
        <td class="xl118" v-html="$t('tableLine[141]')">P</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[142]')">C8</td>
        <td colspan="3" class="xl192" v-html="$t('tableLine[143]')">Marché non concurrentiel - Impression</td>
        <td class="xl101" v-html="$t('tableLine[144]')">&nbsp;</td>
        <td colspan="2" rowspan="2" class="xl203" style="   border-bottom:.5pt solid black" v-html="$t('tableLine[145]')">F - Pouvoir de payer (art. 33 LGFP)</td>
        <td rowspan="2" class="xl207" style="border-bottom:.5pt solid black;border-top:   none" v-html="$t('tableLine[146]')">&nbsp;</td>
      </tr>
      <tr class="xl68">
        <td class="xl68"></td>
        <td class="xl90" v-html="$t('tableLine[147]')">C9</td>
        <td colspan="3" class="xl200" v-html="$t('tableLine[148]')">Commande subséquente - Biens et services</td>
        <td class="xl101" v-html="$t('tableLine[149]')">&nbsp;</td>
      </tr>
      <tr>
        <td></td>
        <td class="xl104" colspan="3" v-html="$t('tableLine[150]')">Légende:</td>
        <td colspan="4"></td>
        <td></td>
        <td class="xl72"></td>
        <td class="xl72"></td>
        <td colspan="23"></td>
      </tr>
      <tr>
        <td></td>
        <td class="xl161" v-html="$t('tableLine[151]')">P</td>
        <td colspan="4" class="xl105" v-html="$t('tableLine[152]')">Plein pouvoir à l'intérieur des limites budgétaires et assujettie aux autorités ministérielles déléguées.<br> <br> Tous les montants indiqués sont le maximum alloué par transaction, y compris les taxes. Ces montants sont en milliers (k) ou en millions (M) de dollars.</td>
        <td class="xl160" v-html="$t('tableLine[153]')">**<br> <br> <br> 1</td>
        <td colspan="2" class="xl209" v-html="$t('tableLine[154]')">Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers - article 6B (niveaux I &amp; II seulement)<br> <br> Le pouvoir de conclure des marchés avec d'anciens fonctionnaires qui touchent une pension n'a pas été délégué et conséquemment l'approbation ministérielle est requise pour de tels contrats<br> <br> </td>
      </tr>
      <tr>
        <td></td>
        <td class="xl102" v-html="$t('tableLine[155]')">*</td>
        <td colspan="4" class="xl105" v-html="$t('tableLine[156]')">Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers</td>
        <td class="xl160" v-html="$t('tableLine[157]')">2</td>
        <td class="xl159" v-html="$t('tableLine[158]')">Les modifications aux contrats excédant 50% de l'engagement initial requiert la signature du niveau II</td>
        <td class="xl105"></td>
      </tr>
      <tr>
        <td colspan="2" style="height:15.75pt;"></td>
        <td colspan="4" class="xl226"></td>
        <td class="xl102"></td>
        <td class="xl133"></td>
        <td></td>
        <td class="xl72"></td>
        <td class="xl72"></td>
        <td colspan="23"></td>
      </tr>
      <tr>
        <td></td>
        <td colspan="8" class="xl213" v-html="$t('tableLine[159]')">J'accepte d'assumer mes responsabilités et de m'assurer de bien comprendre les limites de mes pouvoirs et de ma responsabilité financière, pour veiller à ce que les ressources financières soient utilisées judicieusement, selon les pouvoirs qui m'ont été délégués, et à ce que les pertes dues au gaspillage, aux abus, à la mauvaise gestion, aux erreurs, à la fraude, aux omissions et à toute forme d’irrégularité soient réduites au minimum.<br> <br> J'accepte de ne pas exercer :<br> 1. le pouvoir de dépenser, d'attester ou de payer pour une dépense dont je peux tirer profit directement ou indirectement;<br> 2. le pouvoir d'attester en vertu de l'article 34 de la Loi sur la gestion des finances publiques&nbsp;(LGFP) et le pouvoir de payer en vertu de l'article&nbsp;33 de la LGFP pour une même transaction.<br> <br> Je reconnais que les articles 76 à 81 (Responsabilité civile et infractions) de la LGFP ainsi que les articles&nbsp;121 (Fraudes envers le gouvernement), 122 (Abus de confiance par un fonctionnaire public), 322 (Vol) et 380 (Fraude) du Code criminel sont susceptibles de s'appliquer.</td>
        <td class="xl72"></td>
        <td class="xl72"></td>
        <td colspan="23"></td>
      </tr>
      <tr>
        <td></td>
        <td colspan="6" class="xl216" v-html="$t('tableLine[160]')">Nom du titulaire:<br> <br> Titre du poste:</td>
        <td colspan="2" class="xl219">Autorisé par<br>
          <font class="font16">(il doit s'agir d'un niveau opéerationnel supérieur au niveau indiqué au debut du formulaire)</font>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="6" class="xl221" v-html="$t('tableLine[161]')">Signature:</td>
        <td colspan="2" class="xl224" v-html="$t('tableLine[162]')">Nom: <br> <br> Titre du poste:</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="6" class="xl221" v-html="$t('tableLine[163]')">Centres financiers:</td>
        <td colspan="2" class="xl230" v-html="$t('tableLine[164]')">Signature:</td>
      </tr>
      <tr>
        <td></td>
        <td align="left" valign="top"> <span>
          </span> <span>
          </span></td>
        <td colspan="5" class="xl232" v-html="$t('tableLine[165]')">Indéterminée Intérimaire ou temporaire</td>
        <td colspan="2" class="xl234" v-html="$t('tableLine[166]')">Date:</td>
        <td colspan="25"></td>
      </tr>
    </tbody>
  </table>
</template>
<i18n>{
  "en": {},
  "fr": {
    "tableLine": [
    "",
      "Formulaire de délégation<br>Acceptation de pouvoirs financiers délégués par le ministre et la sous-ministre/présidente",
      "Niveau",
      "V",
      "Gestionnaire de centre de coût",
      "A - Pouvoir d'engagement des dépenses",
      "&nbsp;",
      "C - Pouvoir d'exécuter une opération",
      "&nbsp;",
      "A1",
      "Ententes intergouvernementales",
      "&nbsp;",
      "C10",
      "Demande de biens et services à TPSGC",
      "&nbsp;",
      "A2",
      "Parrainage de conférences",
      "&nbsp;",
      "C11",
      "Marchés de services de travail temporaire / AMA",
      "&nbsp;",
      "A3",
      "Participation à des conférences**",
      "&nbsp;",
      "C12",
      "Marchés exceptionnels",
      "&nbsp;",
      "A4",
      "Cotisations et droits d'inscription",
      "&nbsp;",
      "D - Autre pouvoirs",
      "&nbsp;",
      "A5",
      "Voyages au Canada**",
      "&nbsp;",
      "A6",
      "Voyages dans la zone continentales des É.U.**",
      "&nbsp;",
      "D1",
      "Mise en place de petites caisses et avances permanentes",
      "&nbsp;",
      "A7",
      "Voyages à l'extérieur du Can.incluant É.U. non continental**",
      "&nbsp;",
      "D2",
      "Comptes à fins déterminées",
      "&nbsp;",
      "A8",
      "Accueil**",
      "&nbsp;",
      "D3",
      "Radiation d'éléments d'actifs",
      "&nbsp;",
      "A9",
      "Réinstallation",
      "&nbsp;",
      "D4",
      "Pertes d'argent",
      "&nbsp;",
      "A10",
      "Subventions et contributions",
      "&nbsp;",
      "D5",
      "Radiation de créances",
      "&nbsp;",
      "A11",
      "Apprentissage et perfectionnement**",
      "P*",
      "D6",
      "Demande de renvoi de chèques",
      "&nbsp;",
      "A12",
      "Prix",
      "&nbsp;",
      "D7",
      "Distribution recettes provenant aliénation biens de la Couronne",
      "&nbsp;",
      "A13",
      "Honoraires",
      "&nbsp;",
      "D8",
      "Protocole d'entente (PE) - revenu",
      "&nbsp;",
      "A14",
      "Rémunération et avantages sociaux",
      "&nbsp;",
      "D9",
      "Facturation pour revenu",
      "P",
      "A15",
      "Tous les autres biens et services",
      "P",
      "D10",
      "Remboursement des recettes (Note de crédit)",
      "&nbsp;",
      "B - Pouvoir d'engager des fonds (art. 32 LGFP)",
      "P",
      "D11",
      "Paiements à titre gracieux et réclamat. contre la Couronne",
      "&nbsp;",
      "&nbsp;",
      "D12",
      "Présentations au Conseil du Trésor",
      "&nbsp;",
      "C1",
      "Acquisitions avec une carte d'achat",
      "P*",
      "D13",
      "Dispense du paiement des frais d'intérêts &amp; administratifs",
      "&nbsp;",
      "C2",
      "Demande de marché d'urgence",
      "&nbsp;",
      "D14",
      "Remise de taxe provinciale percue",
      "&nbsp;",
      "C3",
      "Biens et services reliés aux biens",
      "&nbsp;",
      "E - Pouvoir d'attestation (art. 34 LGFP)",
      "&nbsp;",
      "C4",
      "Concurrence par appel d'offres électronique - Services",
      "&nbsp;",
      "C5",
      "Concurrence par appel d'offres électronique - Impression",
      "&nbsp;",
      "E1",
      "Rémunération et avantages sociaux",
      "P",
      "C6",
      "Concurrence traditionnelle - Services",
      "&nbsp;",
      "E2",
      "Remboursement de petite caisse",
      "0.2K",
      "C7",
      "Marché non concurrentiel - Services",
      "&nbsp;",
      "E3",
      "Tous les autres paiements",
      "P",
      "C8",
      "Marché non concurrentiel - Impression",
      "&nbsp;",
      "F - Pouvoir de payer (art. 33 LGFP)",
      "&nbsp;",
      "C9",
      "Commande subséquente - Biens et services",
      "&nbsp;",
      "Légende:",
      "P",
      "Plein pouvoir à l'intérieur des limites budgétaires et assujettie aux autorités ministérielles déléguées.<br> <br> Tous les montants indiqués sont le maximum alloué par transaction, y compris les taxes. Ces montants sont en milliers (k) ou en millions (M) de dollars.",
      "**<br> <br> <br> 1",
      "Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers - article 6B (niveaux I &amp; II seulement)<br> <br> Le pouvoir de conclure des marchés avec d'anciens fonctionnaires qui touchent une pension n'a pas été délégué et conséquemment l'approbation ministérielle est requise pour de tels contrats<br> <br>",
      "*",
      "Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers",
      "2",
      "Les modifications aux contrats excédant 50% de l'engagement initial requiert la signature du niveau II",
      "J'accepte d'assumer mes responsabilités et de m'assurer de bien comprendre les limites de mes pouvoirs et de ma responsabilité financière, pour veiller à ce que les ressources financières soient utilisées judicieusement, selon les pouvoirs qui m'ont été délégués, et à ce que les pertes dues au gaspillage, aux abus, à la mauvaise gestion, aux erreurs, à la fraude, aux omissions et à toute forme d’irrégularité soient réduites au minimum.<br> <br> J'accepte de ne pas exercer :<br> 1. le pouvoir de dépenser, d'attester ou de payer pour une dépense dont je peux tirer profit directement ou indirectement;<br> 2. le pouvoir d'attester en vertu de l'article 34 de la Loi sur la gestion des finances publiques&nbsp;(LGFP) et le pouvoir de payer en vertu de l'article&nbsp;33 de la LGFP pour une même transaction.<br> <br> Je reconnais que les articles 76 à 81 (Responsabilité civile et infractions) de la LGFP ainsi que les articles&nbsp;121 (Fraudes envers le gouvernement), 122 (Abus de confiance par un fonctionnaire public), 322 (Vol) et 380 (Fraude) du Code criminel sont susceptibles de s'appliquer.",
      "Nom du titulaire:<br> <br> Titre du poste:",
      "Signature:",
      "Nom: <br> <br> Titre du poste:",
      "Centres financiers:",
      "Signature:",
      "Indéterminée Intérimaire ou temporaire",
      "Date:"
    ]
  }
}</i18n>
<style scoped>
.font15 {
  color: #4d4d4d;
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif
}

.font16 {
  color: #4d4d4d;
  font-size: 11pt;
  font-family: Roboto, sans-serif
}

.font20 {
  color: #00f;
  font-size: 11pt;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif
}

.font22 {
  color: #4d4d4d;
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif
}

td {
  padding: .1em;
  color: #4d4d4d;
  font-size: 10pt;
  font-family: Roboto;
  vertical-align: bottom;
}

.xl66 {
  font-size: 18pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: none;
  border-left: none
}

.xl67 {
  font-size: 18pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: .5pt solid #4d4d4d;
  border-bottom: none;
  border-left: none
}

.xl68 {
  vertical-align: middle
}

.xl69 {
  text-align: left
}

.xl72 {
  font-size: 9pt;
  font-family: Roboto, sans-serif;
  text-align: left;
}

.xl73 {
  font-size: 14pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
}

.xl74 {
  font-size: 14pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
}

.xl75 {
  font-size: 9pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl76 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: right;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl81 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d
}

.xl85 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: .5pt hairline #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #ff9
}

.xl86 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt hairline #4d4d4d;
  border-right: none;
  border-bottom: .5pt hairline #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #ff9
}

.xl87 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #ff9
}

.xl88 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #ff9
}

.xl89 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #f90
}

.xl90 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: .5pt solid #4d4d4d;
  border-bottom: .5pt hairline #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #f90
}

.xl91 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt hairline #4d4d4d;
  border-right: .5pt solid #4d4d4d;
  border-bottom: .5pt hairline #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #f90
}

.xl92 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #ff9
}

.xl93 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #4d4d4d
}

.xl94 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border: .5pt solid #4d4d4d
}

.xl95 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d
}

.xl96 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d
}

.xl97 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #f90
}

.xl98 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #fabf8f
}

.xl99 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #9cf
}

.xl100 {
  text-align: center;
  vertical-align: middle
}

.xl101 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d
}

.xl102 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
}

.xl104 {
  font-size: 12pt;
  font-weight: 700;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif;
  vertical-align: middle
}

.xl105 {
  font-family: Roboto, sans-serif;
  text-align: left;
}

.xl106 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #4d4d4d
}

.xl107 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #f90
}

.xl112 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #c9f
}

.xl118 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
}

.xl133 {
  vertical-align: top
}

.xl159 {
  font-family: Roboto, sans-serif;
  text-align: left;
}

.xl160 {
  font-family: Roboto, sans-serif;
  text-align: center;
}

.xl161 {
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: top
}

.xl170 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d
}

.xl173 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #f2f2f2;
}

.xl182 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #f2f2f2
}

.xl184 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #ff9
}

.xl187 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #fabf8f
}

.xl188 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #fff
}

.xl191 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #4d4d4d;
  background: #9cf
}

.xl192 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d
}

.xl195 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
  background: #c9f
}

.xl200 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl203 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #c4d79b
}

.xl207 {
  font-size: 12pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: .5pt solid #4d4d4d;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
  background: #c4d79b
}

.xl209 {
  font-family: Roboto, sans-serif;
}

.xl210 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: none;
}

.xl213 {
  font-family: Roboto, sans-serif;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl216 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl219 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl221 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d
}

.xl224 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #4d4d4d;
}

.xl226 {
  color: #00f;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: none;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: none;
}

.xl227 {
  color: #00f;
  font-size: 11pt;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: none;
}

.xl230 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

.xl232 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #4d4d4d;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: none;
}

.xl234 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: .5pt solid #4d4d4d;
  border-left: .5pt solid #4d4d4d;
}

</style>
