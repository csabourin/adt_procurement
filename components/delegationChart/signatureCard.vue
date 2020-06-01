<template>
  <div>
    <!--<table border="0" cellpadding="0" cellspacing="0">
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
          <td class="xl182" colspan="4" rowspan="3"><span v-html="$t('tableLine[1]')"></span></td>
          </td>
          <td colspan="4" class="xl182" v-html="$t('tableLine[2]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td colspan="4" class="xl182" v-html="$t('tableLine[3]')"></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="4" class="xl182" v-html="$t('tableLine[4]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td colspan="4" class="xl184" v-html="$t('tableLine[5]')"></td>
          <td class="xl92" v-html="$t('tableLine[6]')"></td>
          <td class="xl89" colspan="2" v-html="$t('tableLine[7]')"></td>
          <td class="xl107" v-html="$t('tableLine[8]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[9]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[10]')"></td>
          <td class="xl95" v-html="$t('tableLine[11]')"></td>
          <td class="xl97" v-html="$t('tableLine[12]')"></td>
          <td class="xl94" v-html="$t('tableLine[13]')"></td>
          <td class="xl118" v-html="$t('tableLine[14]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[15]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[16]')"></td>
          <td class="xl95" v-html="$t('tableLine[17]')"></td>
          <td class="xl97" v-html="$t('tableLine[18]')"></td>
          <td class="xl94" v-html="$t('tableLine[19]')"></td>
          <td class="xl118" v-html="$t('tableLine[20]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[21]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[22]')"></td>
          <td class="xl95" v-html="$t('tableLine[23]')"></td>
          <td class="xl97" v-html="$t('tableLine[24]')"></td>
          <td class="xl93" v-html="$t('tableLine[25]')"></td>
          <td class="xl118" v-html="$t('tableLine[26]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[27]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[28]')"></td>
          <td class="xl95" v-html="$t('tableLine[29]')"></td>
          <td colspan="2" rowspan="2" class="xl98" v-html="$t('tableLine[30]')"></td>
          <td rowspan="2" class="xl187" v-html="$t('tableLine[31]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[32]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[33]')"></td>
          <td class="xl95" v-html="$t('tableLine[34]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[35]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[36]')"></td>
          <td class="xl96" v-html="$t('tableLine[37]')"></td>
          <td class="xl98" v-html="$t('tableLine[38]')"></td>
          <td class="xl94" v-html="$t('tableLine[39]')"></td>
          <td class="xl118" v-html="$t('tableLine[40]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[41]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[42]')"></td>
          <td class="xl96" v-html="$t('tableLine[43]')"></td>
          <td class="xl98" v-html="$t('tableLine[44]')"></td>
          <td class="xl94" v-html="$t('tableLine[45]')"></td>
          <td class="xl118" v-html="$t('tableLine[46]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[47]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[48]')"></td>
          <td class="xl96" v-html="$t('tableLine[49]')"></td>
          <td class="xl98" v-html="$t('tableLine[50]')"></td>
          <td class="xl94" v-html="$t('tableLine[51]')"></td>
          <td class="xl118" v-html="$t('tableLine[52]')"></td>
          <td class="xl100"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl85" v-html="$t('tableLine[53]')"></td>
          <td colspan="3" class="xl170" v-html="$t('tableLine[54]')"></td>
          <td class="xl96" v-html="$t('tableLine[55]')"></td>
          <td class="xl98" v-html="$t('tableLine[56]')"></td>
          <td class="xl94" v-html="$t('tableLine[57]')"></td>
          <td class="xl118" v-html="$t('tableLine[58]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl86" v-html="$t('tableLine[59]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[60]')"></td>
          <td class="xl96" v-html="$t('tableLine[61]')"></td>
          <td class="xl98" v-html="$t('tableLine[62]')"></td>
          <td class="xl93" v-html="$t('tableLine[63]')"></td>
          <td class="xl118" v-html="$t('tableLine[64]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl87" v-html="$t('tableLine[65]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[66]')"></td>
          <td class="xl96" v-html="$t('tableLine[67]')"></td>
          <td class="xl98" v-html="$t('tableLine[68]')"></td>
          <td class="xl93" v-html="$t('tableLine[69]')"></td>
          <td class="xl118" v-html="$t('tableLine[70]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl87" v-html="$t('tableLine[71]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[72]')"></td>
          <td class="xl96" v-html="$t('tableLine[73]')"></td>
          <td class="xl98" v-html="$t('tableLine[74]')"></td>
          <td class="xl93" v-html="$t('tableLine[75]')"></td>
          <td class="xl118" v-html="$t('tableLine[76]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl87" v-html="$t('tableLine[77]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[78]')"></td>
          <td class="xl96" v-html="$t('tableLine[79]')"></td>
          <td class="xl98" v-html="$t('tableLine[80]')"></td>
          <td class="xl93" v-html="$t('tableLine[81]')"></td>
          <td class="xl118" v-html="$t('tableLine[82]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl87" v-html="$t('tableLine[83]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[84]')"></td>
          <td class="xl95" v-html="$t('tableLine[85]')"></td>
          <td class="xl98" v-html="$t('tableLine[86]')"></td>
          <td class="xl93" v-html="$t('tableLine[87]')"></td>
          <td class="xl118" v-html="$t('tableLine[88]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl88" v-html="$t('tableLine[89]')"></td>
          <td colspan="3" class="xl188" v-html="$t('tableLine[90]')"></td>
          <td class="xl95" v-html="$t('tableLine[91]')"></td>
          <td class="xl98" v-html="$t('tableLine[92]')"></td>
          <td class="xl93" v-html="$t('tableLine[93]')"></td>
          <td class="xl118" v-html="$t('tableLine[94]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td colspan="4" class="xl195" v-html="$t('tableLine[95]')"></td>
          <td class="xl112" v-html="$t('tableLine[96]')"></td>
          <td class="xl98" v-html="$t('tableLine[97]')"></td>
          <td class="xl93" v-html="$t('tableLine[98]')"></td>
          <td class="xl118" v-html="$t('tableLine[99]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td colspan="4" class="xl89" v-html="$t('tableLine[100]')"></td>
          <td class="xl107" v-html="$t('tableLine[101]')"></td>
          <td class="xl98" v-html="$t('tableLine[102]')"></td>
          <td class="xl93" v-html="$t('tableLine[103]')"></td>
          <td class="xl118" v-html="$t('tableLine[104]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[105]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[106]')"></td>
          <td class="xl81" v-html="$t('tableLine[107]')"></td>
          <td class="xl98" v-html="$t('tableLine[108]')"></td>
          <td class="xl106" v-html="$t('tableLine[109]')"></td>
          <td class="xl118" v-html="$t('tableLine[110]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl91" v-html="$t('tableLine[111]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[112]')"></td>
          <td class="xl81" v-html="$t('tableLine[113]')"></td>
          <td class="xl98" v-html="$t('tableLine[114]')"></td>
          <td class="xl93" v-html="$t('tableLine[115]')"></td>
          <td class="xl118" v-html="$t('tableLine[116]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[117]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[118]')"></td>
          <td class="xl81" v-html="$t('tableLine[119]')"></td>
          <td colspan="2" rowspan="2" class="xl99" v-html="$t('tableLine[120]')"></td>
          <td rowspan="2" class="xl191" v-html="$t('tableLine[121]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[122]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[123]')"></td>
          <td class="xl81" v-html="$t('tableLine[124]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[125]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[126]')"></td>
          <td class="xl81" v-html="$t('tableLine[127]')"></td>
          <td class="xl99" v-html="$t('tableLine[128]')"></td>
          <td class="xl106" v-html="$t('tableLine[129]')"></td>
          <td class="xl118" v-html="$t('tableLine[130]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl91" v-html="$t('tableLine[131]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[132]')"></td>
          <td class="xl101" v-html="$t('tableLine[133]')"></td>
          <td class="xl99" v-html="$t('tableLine[134]')"></td>
          <td class="xl106" v-html="$t('tableLine[135]')"></td>
          <td class="xl118" v-html="$t('tableLine[136]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[137]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[138]')"></td>
          <td class="xl101" v-html="$t('tableLine[139]')"></td>
          <td class="xl99" v-html="$t('tableLine[140]')"></td>
          <td class="xl93" v-html="$t('tableLine[141]')"></td>
          <td class="xl118" v-html="$t('tableLine[142]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[143]')"></td>
          <td colspan="3" class="xl192" v-html="$t('tableLine[144]')"></td>
          <td class="xl101" v-html="$t('tableLine[145]')"></td>
          <td colspan="2" rowspan="2" class="xl203" style=" border-bottom:.5pt solid black" v-html="$t('tableLine[146]')"></td>
          <td rowspan="2" class="xl207" style="border-bottom:.5pt solid black;border-top: none" v-html="$t('tableLine[147]')"></td>
        </tr>
        <tr class="xl68">
          <td class="xl68"></td>
          <td class="xl90" v-html="$t('tableLine[148]')"></td>
          <td colspan="3" class="xl200" v-html="$t('tableLine[149]')"></td>
          <td class="xl101" v-html="$t('tableLine[150]')"></td>
        </tr>
        <tr>
          <td></td>
          <td class="xl104" colspan="3" v-html="$t('tableLine[151]')"></td>
          <td colspan="4"></td>
          <td></td>
          <td class="xl72"></td>
          <td class="xl72"></td>
          <td colspan="23"></td>
        </tr>
        <tr>
          <td></td>
          <td class="xl161" v-html="$t('tableLine[152]')"></td>
          <td colspan="4" class="xl105" v-html="$t('tableLine[153]')"></td>
          <td class="xl160" v-html="$t('tableLine[154]')"></td>
          <td colspan="2" class="xl209" v-html="$t('tableLine[155]')"></td>
        </tr>
        <tr>
          <td></td>
          <td class="xl102" v-html="$t('tableLine[156]')"></td>
          <td colspan="4" class="xl105" v-html="$t('tableLine[157]')"></td>
          <td class="xl160" v-html="$t('tableLine[158]')"></td>
          <td class="xl159" v-html="$t('tableLine[159]')"></td>
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
          <td ></td>
          <td colspan="8" class="xl213" v-html="$t('tableLine[160]')"></td>
          <td class="xl72"></td>
          <td class="xl72"></td>
          <td colspan="23"></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="6" class="xl216" v-html="$t('tableLine[161]')"></td>
          <td colspan="2" class="xl219" v-html="$t('tableLine[162]')"></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="6" class="xl221" v-html="$t('tableLine[163]')"></td>
          <td colspan="2" class="xl224" v-html="$t('tableLine[164]')"></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="6" class="xl221" v-html="$t('tableLine[165]')"></td>
          <td colspan="2" class="xl230" v-html="$t('tableLine[166]')"></td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top"> <span> </span> <span> </span></td>
          <td colspan="5" class="xl232" v-html="$t('tableLine[167]')"></td>
          <td colspan="2" class="xl234" v-html="$t('tableLine[168]')"></td>
          <td colspan="25"></td>
        </tr>
      </tbody>
    </table>-->

    <table class="signatureCard" style="margin-top: 30px;">
      <tbody>
        <tr>
          <td v-html="$t('tableLine[1]')" rowspan="3" colspan="3" style="width: 50%;" class="grey text-center bold"></td>
          <td v-html="$t('tableLine[2]')" colspan="3" style="width: 50%;" class="grey text-center bold"></td>
        </tr>
        <tr>
          <td v-html="$t('tableLine[3]')" colspan="3" style="width: 50%;" class="grey text-center bold"></td>
        </tr> 
        <tr>
          <td v-html="$t('tableLine[4]')" colspan="3" style="width: 50%;" class="grey text-center bold"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[5]')" scope="col" class="yellow" colspan="2" id="5"></th>
          <td v-html="$t('tableLine[6]')" class="yellow small" id="5"></td>
          <th v-html="$t('tableLine[7]')" scope="col" class="orange" colspan="2" id="7"></th>
          <td v-html="$t('tableLine[8]')" class="orange small" id="7"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[9]')" scope="row" class="yellow small" id="9" headers="5"></th>
          <td v-html="$t('tableLine[10]')" headers="5 9"></td>
          <td v-html="$t('tableLine[11]')" class="small" headers="5 9"></td>
          <th v-html="$t('tableLine[12]')" scope="row" class="orange small" id="12" headers="7"></th>
          <td v-html="$t('tableLine[13]')" headers="7 12"></td>
          <td v-html="$t('tableLine[14]')" class="small" headers="7 12"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[15]')" scope="row" class="yellow small" id="15" headers="5"></th>
          <td v-html="$t('tableLine[16]')" headers="5 15"></td>
          <td v-html="$t('tableLine[17]')" class="small" headers="5 15"></td>
          <th v-html="$t('tableLine[18]')" scope="row" class="orange small" id="18" headers="7"></th>
          <td v-html="$t('tableLine[19]')" headers="7 18"></td>
          <td v-html="$t('tableLine[20]')" class="small" headers="7 18"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[21]')" scope="row" class="yellow small" id="21" headers="5"></th>
          <td v-html="$t('tableLine[22]')" headers="5 21"></td>
          <td v-html="$t('tableLine[23]')" class="small" headers="5 21"></td>
          <th v-html="$t('tableLine[24]')" scope="row" class="orange small" id="24" headers="7"></th>
          <td v-html="$t('tableLine[25]')" headers="7 24"></td>
          <td v-html="$t('tableLine[26]')" class="small" headers="7 24"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[27]')" scope="row" class="yellow small" id="27" headers="5"></th>
          <td v-html="$t('tableLine[28]')" headers="5 27"></td>
          <td v-html="$t('tableLine[29]')" class="small" headers="5 27"></td>
          <th v-html="$t('tableLine[30]')" scope="col" class="beige small" colspan="2" rowspan="2" id="30" headers="7"></th>
          <td v-html="$t('tableLine[31]')" class="beige small" rowspan="2"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[32]')" scope="row" class="yellow small" id="32" headers="5"></th>
          <td v-html="$t('tableLine[33]')" headers="5 32"></td>
          <td v-html="$t('tableLine[34]')" class="small" headers="5 32"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[35]')" scope="row" class="yellow small" id="35" headers="5"></th>
          <td v-html="$t('tableLine[36]')" headers="5 35"></td>
          <td v-html="$t('tableLine[37]')" class="small" headers="5 35"></td>
          <th v-html="$t('tableLine[38]')" scope="row" class="beige small" id="38" headers="30"></th>
          <td v-html="$t('tableLine[39]')" headers="30 38"></td>
          <td v-html="$t('tableLine[40]')" class="small" headers="30 38"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[41]')" scope="row" class="yellow small" id="41" headers="5"></th>
          <td v-html="$t('tableLine[42]')" headers="5 41"></td>
          <td v-html="$t('tableLine[43]')" class="small" headers="5 41"></td>
          <th v-html="$t('tableLine[44]')" scope="row" class="beige small" id="44" headers="30"></th>
          <td v-html="$t('tableLine[45]')" headers="30 44"></td>
          <td v-html="$t('tableLine[46]')" class="small" headers="30 44"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[47]')" scope="row" class="yellow small" id="47" headers="5"></th>
          <td v-html="$t('tableLine[48]')" headers="5 47"></td>
          <td v-html="$t('tableLine[49]')" class="small" headers="5 47"></td>
          <th v-html="$t('tableLine[50]')" scope="row" class="beige small" id="50" headers="30"></th>
          <td v-html="$t('tableLine[51]')" headers="30 50"></td>
          <td v-html="$t('tableLine[52]')" class="small" headers="30 50"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[53]')" scope="row" class="yellow small" id="53" headers="5"></th>
          <td v-html="$t('tableLine[54]')" headers="5 53"></td>
          <td v-html="$t('tableLine[55]')" class="small" headers="5 53"></td>
          <th v-html="$t('tableLine[56]')" scope="row" class="beige small" id="56" headers="30"></th>
          <td v-html="$t('tableLine[57]')" headers="30 56"></td>
          <td v-html="$t('tableLine[58]')" class="small" headers="30 56"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[59]')" scope="row" class="yellow small" id="59" headers="5"></th>
          <td v-html="$t('tableLine[60]')" headers="5 59"></td>
          <td v-html="$t('tableLine[61]')" class="small" headers="5 59"></td>
          <th v-html="$t('tableLine[62]')" scope="row" class="beige small" id="62" headers="30"></th>
          <td v-html="$t('tableLine[63]')" headers="30 62"></td>
          <td v-html="$t('tableLine[64]')" class="small" headers="30 62"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[65]')" scope="row" class="yellow small" id="65" headers="5"></th>
          <td v-html="$t('tableLine[66]')" headers="5 65"></td>
          <td v-html="$t('tableLine[67]')" class="small" headers="5 65"></td>
          <th v-html="$t('tableLine[68]')" scope="row" class="beige small" id="68" headers="30"></th>
          <td v-html="$t('tableLine[69]')" headers="30 68"></td>
          <td v-html="$t('tableLine[70]')" class="small" headers="30 68"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[71]')" scope="row" class="yellow small" id="71" headers="5"></th>
          <td v-html="$t('tableLine[72]')" headers="5 71"></td>
          <td v-html="$t('tableLine[73]')" class="small" headers="5 71"></td>
          <th v-html="$t('tableLine[74]')" scope="row" class="beige small" id="74" headers="30"></th>
          <td v-html="$t('tableLine[75]')" headers="30 74"></td>
          <td v-html="$t('tableLine[76]')" class="small" headers="30 74"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[77]')" scope="row" class="yellow small" id="77" headers="5"></th>
          <td v-html="$t('tableLine[78]')" headers="5 77"></td>
          <td v-html="$t('tableLine[79]')" class="small" headers="5 77"></td>
          <th v-html="$t('tableLine[80]')" scope="row" class="beige small" id="80" headers="30"></th>
          <td v-html="$t('tableLine[81]')" headers="30 80"></td>
          <td v-html="$t('tableLine[82]')" class="small" headers="30 80"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[83]')" scope="row" class="yellow small" id="83" headers="5"></th>
          <td v-html="$t('tableLine[84]')" headers="5 83"></td>
          <td v-html="$t('tableLine[85]')" class="small" headers="5 83"></td>
          <th v-html="$t('tableLine[86]')" scope="row" class="beige small" id="86" headers="30"></th>
          <td v-html="$t('tableLine[87]')" headers="30 86"></td>
          <td v-html="$t('tableLine[88]')" class="small" headers="30 86"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[89]')" scope="row" class="yellow small" id="89" headers="5"></th>
          <td v-html="$t('tableLine[90]')" headers="5 89"></td>
          <td v-html="$t('tableLine[91]')" class="small" headers="5 89"></td>
          <th v-html="$t('tableLine[92]')" scope="row" class="beige small" id="92" headers="30"></th>
          <td v-html="$t('tableLine[93]')" headers="30 92"></td>
          <td v-html="$t('tableLine[94]')" class="small" headers="30 92"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[95]')" scope="col" class="purple small" colspan="2" id="95" headers="7"></th>
          <td v-html="$t('tableLine[96]')" class="purple small"></td>
          <th v-html="$t('tableLine[97]')" scope="row" class="beige small" id="97" headers="5"></th>
          <td v-html="$t('tableLine[98]')" headers="5 97"></td>
          <td v-html="$t('tableLine[99]')" class="small" headers="5 97"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[100]')" scope="col" class="orange small" colspan="2" id="100" headers="7"></th>
          <td v-html="$t('tableLine[101]')" class="orange small"></td>
          <th v-html="$t('tableLine[102]')" scope="row" class="beige small" id="102" headers="5"></th>
          <td v-html="$t('tableLine[103]')" headers="5 102"></td>
          <td v-html="$t('tableLine[104]')" class="small" headers="5 102"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[105]')" scope="row" class="orange small" id="105" headers="100"></th>
          <td v-html="$t('tableLine[106]')" headers="100 105"></td>
          <td v-html="$t('tableLine[107]')" class="small" headers="100 105"></td>
          <th v-html="$t('tableLine[108]')" scope="row" class="beige small" id="108" headers="30"></th>
          <td v-html="$t('tableLine[109]')" headers="30 108"></td>
          <td v-html="$t('tableLine[110]')" class="small" headers="30 108"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[111]')" scope="row" class="orange small" id="111" headers="100"></th>
          <td v-html="$t('tableLine[112]')" headers="100 111"></td>
          <td v-html="$t('tableLine[113]')" class="small" headers="100 111"></td>
          <th v-html="$t('tableLine[114]')" scope="row" class="beige small" id="114" headers="30"></th>
          <td v-html="$t('tableLine[115]')" headers="30 114"></td>
          <td v-html="$t('tableLine[116]')" class="small" headers="30 114"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[117]')" scope="row" class="orange small" id="117" headers="5"></th>
          <td v-html="$t('tableLine[118]')" headers="5 117"></td>
          <td v-html="$t('tableLine[119]')" class="small" headers="5 117"></td>
          <th v-html="$t('tableLine[120]')" scope="col" class="blue small" colspan="2" rowspan="2" id="120" headers="7"></th>
          <td v-html="$t('tableLine[121]')" class="blue small" rowspan="2"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[122]')" scope="row" class="orange small" id="122" headers="5"></th>
          <td v-html="$t('tableLine[123]')" headers="5 122"></td>
          <td v-html="$t('tableLine[124]')" class="small" headers="5 122"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[125]')" scope="row" class="orange small" id="125" headers="100"></th>
          <td v-html="$t('tableLine[126]')" headers="100 125"></td>
          <td v-html="$t('tableLine[127]')" class="small" headers="100 125"></td>
          <th v-html="$t('tableLine[128]')" scope="row" class="blue small" id="128" headers="120"></th>
          <td v-html="$t('tableLine[129]')" headers="120 128"></td>
          <td v-html="$t('tableLine[130]')" class="small" headers="120 128"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[131]')" scope="row" class="orange small" id="131" headers="100"></th>
          <td v-html="$t('tableLine[132]')" headers="100 131"></td>
          <td v-html="$t('tableLine[133]')" class="small" headers="100 131"></td>
          <th v-html="$t('tableLine[134]')" scope="row" class="blue small" id="134" headers="120"></th>
          <td v-html="$t('tableLine[135]')" headers="120 134"></td>
          <td v-html="$t('tableLine[136]')" class="small" headers="120 134"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[137]')" scope="row" class="orange small" id="137" headers="100"></th>
          <td v-html="$t('tableLine[138]')" headers="100 137"></td>
          <td v-html="$t('tableLine[139]')" class="small" headers="100 137"></td>
          <th v-html="$t('tableLine[140]')" scope="row" class="blue small" id="140" headers="120"></th>
          <td v-html="$t('tableLine[141]')" headers="120 140"></td>
          <td v-html="$t('tableLine[142]')" class="small" headers="120 140"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[143]')" scope="row" class="orange small" id="143" headers="5"></th>
          <td v-html="$t('tableLine[144]')" headers="5 143"></td>
          <td v-html="$t('tableLine[145]')" class="small" headers="5 143"></td>
          <th v-html="$t('tableLine[146]')" scope="col" class="green small" colspan="2" rowspan="2" id="146" headers="7"></th>
          <td v-html="$t('tableLine[147]')" class="green small" rowspan="2"></td>
        </tr>
        <tr>
          <th v-html="$t('tableLine[148]')" scope="row" class="orange small" id="148" headers="5"></th>
          <td v-html="$t('tableLine[149]')" headers="5 148"></td>
          <td v-html="$t('tableLine[150]')" class="small" headers="5 148"></td>
        </tr>
      </tbody>
    </table>
    <b-row>
      <b-col>
        <h2 v-html="$t('tableLine[151]')" style="font-size: 13pt; margin-top: 20px;"></h2>
      </b-col>
    </b-row>
    <b-row style="font-size: 11pt;">
      <b-col cols="1">
        <p v-html="$t('legend[0]')"></p>
      </b-col>
      <b-col>
        <p v-html="$t('legend[1]')"></p>
      </b-col>
      <b-col cols="1">
        <p v-html="$t('legend[4]')"></p>
      </b-col>
      <b-col>
        <p v-html="$t('legend[5]')"></p>
      </b-col>
    </b-row>
    <b-row style="font-size: 11pt;">
      <b-col cols="1">
        <p v-html="$t('legend[2]')"></p>
      </b-col>
      <b-col>
        <p v-html="$t('legend[3]')"></p>
      </b-col>
      <b-col cols="1">
        <p v-html="$t('legend[6]')"></p>
      </b-col>
      <b-col>
        <p v-html="$t('legend[7]')"></p>
      </b-col>
    </b-row>
    <b-row style="font-size: 11pt;">
      <b-col cols="1" offset-md="6">
        <p v-html="$t('legend[8]')"></p>
      </b-col>
      <b-col>
        <p v-html="$t('legend[9]')"></p>
      </b-col>
    </b-row>
    <b-row style="font-size: 11pt;">
      <b-col>
        <p v-html="$t('tableLine[160]')"></p>
      </b-col>
    </b-row>
    <div style="border: 1px solid black">
      <b-row style="font-weight: 700;">
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[161]')"></p>
        </b-col>
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[162]')" class="text-center"></p>
        </b-col>
      </b-row>
      <b-row style="font-weight: 700;">
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[163]')"></p>
        </b-col>
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[164]')"></p>
        </b-col>
      </b-row>
      <b-row style="font-weight: 700;">
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[165]')"></p>
        </b-col>
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[166]')"></p>
        </b-col>
      </b-row>
      <b-row style="font-weight: 700;">
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[167]')"></p>
        </b-col>
        <b-col style="border: 1px solid black;">
          <p v-html="$t('tableLine[168]')"></p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<i18n>{
  "en": {
    "tableLine": [
      "",
      "Delegation Form<br>Acceptance Of Financial Authorities Delegated By The Minister And The Deputy Minister/president",
      "Level",
      "V",
      "Cost Centre Manager",
      "A - EXPENDITURE INITIATION ",
      "&nbsp;",
      "C - TRANSACTION AUTHORITY (Sect 41 FAA)",
      "&nbsp;",
      "A1",
      "Intergovernmental Agreements",
      "&nbsp;",
      "C10",
      "Requisition to PWGSC - Goods and Services",
      "&nbsp;",
      "A2",
      "Conference - Sponsorships",
      "&nbsp;",
      "C11",
      "Temporary Help Service Contracts / SA",
      "&nbsp;",
      "A3",
      "Conference - Attendance**",
      "&nbsp;",
      "C12",
      "Exceptional Contracts",
      "&nbsp;",
      "A4",
      "Membership and Registration Fees",
      "&nbsp;",
      "D - OTHER AUTHORITIES",
      "&nbsp;",
      "A5",
      "Travel within Canada**",
      "&nbsp;",
      "A6",
      "Travel within Continental USA**",
      "&nbsp;",
      "D1",
      "Petty Cash and Standing Advances Establishment",
      "&nbsp;",
      "A7",
      "Travel Abroad including Non-Continental USA**",
      "&nbsp;",
      "D2",
      "Specified Purpose Accounts",
      "&nbsp;",
      "A8",
      "Hospitality**",
      "&nbsp;",
      "D3",
      "Write-off of Assets",
      "&nbsp;",
      "A9",
      "Relocation",
      "&nbsp;",
      "D4",
      "Losses of Money",
      "&nbsp;",
      "A10",
      "Grants and Contributions",
      "&nbsp;",
      "D5",
      "Debt Write-off",
      "&nbsp;",
      "A11",
      "Learning and Development**",
      "F*",
      "D6",
      "Request for return of Cheques",
      "&nbsp;",
      "A12",
      "Awards ",
      "&nbsp;",
      "D7",
      "Distribution Of Crown Assets Disposal Receipts",
      "&nbsp;",
      "A13",
      "Honorarium",
      "&nbsp;",
      "D8",
      "Memorandum of Understanding (MOU) - Revenue",
      "&nbsp;",
      "A14",
      "Salaries and Social Benefits",
      "&nbsp;",
      "D9",
      "Revenue Invoicing",
      "F",
      "A15",
      "All other Goods and Services",
      "F",
      "D10",
      "Refund of Revenue (Credit Note)",
      "&nbsp;",
      "B - COMMITMENT AUTHORITY (Sect 32 FAA)",
      "F",
      "D11",
      "Ex Gratia Payments &amp; Claims Against the Crown",
      "&nbsp;",
      "C - TRANSACTION AUTHORITY (Sect 41 FAA)<sup>1,2</sup>",
      "&nbsp;",
      "D12",
      "Treasury Board Submissions",
      "&nbsp;",
      "C1",
      "Acquisition Card Purchases",
      "F*",
      "D13",
      "Waiving Payment of Interest and Administrative Charges",
      "&nbsp;",
      "C2",
      "Emergency Contract Request",
      "&nbsp;",
      "D14",
      "Provincial Sales Tax Remittance",
      "&nbsp;",
      "C3",
      "Goods and Associated Services",
      "&nbsp;",
      "E - CERTIFICATION AUTHORITY (Sect 34 FAA)",
      "&nbsp;",
      "C4",
      "Electronic Tendering Competition - Services",
      "&nbsp;",
      "C5",
      "Electronic Tendering Competition - Printing",
      "&nbsp;",
      "E1",
      "Salaries and Social Benefits",
      "F",
      "C6",
      "Traditional Competition - Services",
      "&nbsp;",
      "E2",
      "Petty Cash Reimbursement",
      "0.2K",
      "C7",
      "Non-Competitive Contracts - Services",
      "&nbsp;",
      "E3",
      "All Other payments",
      "F",
      "C8",
      "Non-Competitive Contracts - Printing",
      "&nbsp;",
      "F - PAYMENT AUTHORITY (Sect 33 FAA)",
      "&nbsp;",
      "C9",
      "Call-up - Goods and Services",
      "&nbsp;",
      "Legend:",
      "F",
      "Full authority within the budget and subject to authorities delegated to the department.<br> All amounts indicated are the maximum allowed per transaction, including taxes. These amounts are in thousands (K) or millions (M) of dollars.",
      "**<br> <br> <br> 1",
      "Refer to the Delegation Manual for specific delegated authorities - section B (levels II &amp; II only).<br> <br> Authority to enter into contracts with former public servants in receipt of a pension is not delegated and therefore ministerial approval is required for such contracts.",
      "*",
      "Refer to the Delegation Manual for specific delegated authorities",
      "2",
      "Amendments to the contract exceeding 50% of initial commitment requires signatures from Level II.",
      "I accept to assume my responsibilities and understand the limits of my authorities and my financial responsibility to ensure that financial resources are used appropriately, based on my delegated authority, and loses due to waste, abuse, mismanagement, errors, frauds, omissions and other irregularities are minimized.<br> <br> I agree not to exercise either:<br> 1. Spending, certification or payment authority for an expenditure from which I can directly or indirectly benefit.<br> 2. Certification authority under section 34 of the Financial Administration Act (FAA) and payment authority under section 33 of the FAA on the same payment.<br> <br> I acknowledge that sections 76 to 81 (Civil Liabilities and Offences) of the Financial Administration Act as well as sections 121 (Frauds against the Government), 122 (Breach of Trust), 322 (Theft) and 380 (Fraud) of the Criminal Code may apply.",
      "Name of Incumbent:<br><br>Position Title:",
      "Authorized by <br> <span class='font22'>(Must be an Operational Level higher than the Level indicated at the top of this form)</span>",
      "Signature:",
      "Name:<br><br>Position Title:",
      "Fund Centers / Cost Centre:",
      "Signature:",
      "Indeterminate Acting or Temporary basis*",
      "Date:"
    ],
    "legend": [
      "F",
      "Full authority within the budget and subject to authorities delegated to the department.<br> All amounts indicated are the maximum allowed per transaction, including taxes. These amounts are in thousands (K) or millions (M) of dollars.",
      "**",
      "Refer to the Delegation Manual for specific delegated authorities - section B (levels II &amp; II only).",
      "*",
      "Refer to the Delegation Manual for specific delegated authorities",
      "1",
      "Authority to enter into contracts with former public servants in receipt of a pension is not delegated and therefore ministerial approval is required for such contracts.",
      "2",
      "Amendments to the contract exceeding 50% of initial commitment requires signatures from Level II."
    ]
  },
  "fr": {
    "tableLine": [
      "",
      "Formulaire de délégation<br>Acceptation de pouvoirs financiers délégués par le ministre et la sous-ministre/présidente",
      "Niveau",
      "V",
      "Gestionnaire de centre de coût",
      "A - Pouvoir d’engagement des dépenses",
      "&nbsp;",
      "C - Pouvoir d’exécuter une opération",
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
      "Cotisations et droits d’inscription",
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
      "Voyages à l’extérieur du Can.incluant É.U. non continental**",
      "&nbsp;",
      "D2",
      "Comptes à fins déterminées",
      "&nbsp;",
      "A8",
      "Accueil**",
      "&nbsp;",
      "D3",
      "Radiation d’éléments d’actifs",
      "&nbsp;",
      "A9",
      "Réinstallation",
      "&nbsp;",
      "D4",
      "Pertes d’argent",
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
      "Protocole d’entente (PE) - revenu",
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
      "B - Pouvoir d’engager des fonds (art. 32 LGFP)",
      "P",
      "D11",
      "Paiements à titre gracieux et réclamat. contre la Couronne",
      "&nbsp;",
      "C - Pouvoir d’exécuter une opération<font class='font22'><sup>1,2</sup></font>",
      "&nbsp;",
      "D12",
      "Présentations au Conseil du Trésor",
      "&nbsp;",
      "C1",
      "Acquisitions avec une carte d’achat",
      "P*",
      "D13",
      "Dispense du paiement des frais d’intérêts &amp; administratifs",
      "&nbsp;",
      "C2",
      "Demande de marché d’urgence",
      "&nbsp;",
      "D14",
      "Remise de taxe provinciale percue",
      "&nbsp;",
      "C3",
      "Biens et services reliés aux biens",
      "&nbsp;",
      "E - Pouvoir d’attestation (art. 34 LGFP)",
      "&nbsp;",
      "C4",
      "Concurrence par appel d’offres électronique - Services",
      "&nbsp;",
      "C5",
      "Concurrence par appel d’offres électronique - Impression",
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
      "Plein pouvoir à l’intérieur des limites budgétaires et assujettie aux autorités ministérielles déléguées.<br> <br> Tous les montants indiqués sont le maximum alloué par transaction, y compris les taxes. Ces montants sont en milliers (k) ou en millions (M) de dollars.",
      "**<br> <br> <br> 1",
      "Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers - article 6B (niveaux I &amp; II seulement)<br> <br> Le pouvoir de conclure des marchés avec d’anciens fonctionnaires qui touchent une pension n’a pas été délégué et conséquemment l’approbation ministérielle est requise pour de tels contrats<br> <br>",
      "*",
      "Consulter le manuel sur la délégation des pouvoirs de signer des documents financiers",
      "2",
      "Les modifications aux contrats excédant 50% de l’engagement initial requiert la signature du niveau II",
      "J’accepte d’assumer mes responsabilités et de m’assurer de bien comprendre les limites de mes pouvoirs et de ma responsabilité financière, pour veiller à ce que les ressources financières soient utilisées judicieusement, selon les pouvoirs qui m’ont été délégués, et à ce que les pertes dues au gaspillage, aux abus, à la mauvaise gestion, aux erreurs, à la fraude, aux omissions et à toute forme d’irrégularité soient réduites au minimum.<br> <br> J’accepte de ne pas exercer :<br> 1. le pouvoir de dépenser, d’attester ou de payer pour une dépense dont je peux tirer profit directement ou indirectement;<br> 2. le pouvoir d’attester en vertu de l’article 34 de la Loi sur la gestion des finances publiques&nbsp;(LGFP) et le pouvoir de payer en vertu de l’article&nbsp;33 de la LGFP pour une même transaction.<br> <br> Je reconnais que les articles 76 à 81 (Responsabilité civile et infractions) de la LGFP ainsi que les articles&nbsp;121 (Fraudes envers le gouvernement), 122 (Abus de confiance par un fonctionnaire public), 322 (Vol) et 380 (Fraude) du Code criminel sont susceptibles de s’appliquer.",
      "Nom du titulaire:<br> <br> Titre du poste:",
      "Autorisé par<br><font class='font16'>(il doit s’agir d’un niveau opéerationnel supérieur au niveau indiqué au debut du formulaire)</font>",
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
  
  .signatureCard{
    font-family: "Roboto";
  }
  
  .signatureCard, .signatureCard td, .signatureCard th{
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 12pt!important;
  }
  
  .signatureCard td, .signatureCard th{
    padding: 0.2em;
    color: black;
  }
  
  .signatureCard th{
    font-weight: 700;
  }
  
  .signatureCard .small{
    width: 5%;
  }
  
  .signatureCard .bold{
    font-weight: 700;
  }
  
  .signatureCard .grey{
    background-color: rgb(242, 242, 242);
  }
  
  .signatureCard .yellow{
    background-color: rgb(255, 255, 153);
  }
  
  .signatureCard .orange{
    background-color: rgb(255, 153, 0);
  }
  
  .signatureCard .beige{
    background-color: rgb(250, 191, 143);
  }
  
  .signatureCard .purple{
    background-color: rgb(204, 153, 255);
  }
  
  .signatureCard .blue{
    background-color: rgb(153, 204, 255);
  }
  
  .signatureCard .green{
    background-color: rgb(196, 215, 155);
  }
  
  
  
  
  
  
.font15 {
  color: #010101;
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif
}

.font16 {
  color: #010101;
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
  color: #010101;
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif
}

td {
  padding: .1em;
  color: #010101;
  font-size: 10pt;
  font-family: Roboto;
  vertical-align: bottom;
}

.xl66 {
  font-size: 18pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: none;
  border-left: none
}

.xl67 {
  font-size: 18pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: .5pt solid #010101;
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
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl76 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: right;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl81 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101
}

.xl85 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: .5pt hairline #010101;
  border-left: .5pt solid #010101;
  background: #ff9
}

.xl86 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt hairline #010101;
  border-right: none;
  border-bottom: .5pt hairline #010101;
  border-left: .5pt solid #010101;
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
  border-left: .5pt solid #010101;
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
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
  background: #ff9
}

.xl89 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #010101;
  background: #f90
}

.xl90 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: none;
  border-right: .5pt solid #010101;
  border-bottom: .5pt hairline #010101;
  border-left: .5pt solid #010101;
  background: #f90
}

.xl91 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt hairline #010101;
  border-right: .5pt solid #010101;
  border-bottom: .5pt hairline #010101;
  border-left: .5pt solid #010101;
  background: #f90
}

.xl92 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #ff9
}

.xl93 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #010101
}

.xl94 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border: .5pt solid #010101
}

.xl95 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101
}

.xl96 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101
}

.xl97 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #f90
}

.xl98 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #fabf8f
}

.xl99 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border: .5pt solid #010101;
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
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101
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
  border: .5pt solid #010101
}

.xl107 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #f90
}

.xl112 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #c9f
}

.xl118 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
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
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101
}

.xl173 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #010101;
  background: #f2f2f2;
}

.xl182 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
  background: #f2f2f2
}

.xl184 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #010101;
  background: #ff9
}

.xl187 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #fabf8f
}

.xl188 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
  background: #fff
}

.xl191 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border: .5pt solid #010101;
  background: #9cf
}

.xl192 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101
}

.xl195 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
  background: #c9f
}

.xl200 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl203 {
  font-size: 12pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #010101;
  background: #c4d79b
}

.xl207 {
  font-size: 12pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: .5pt solid #010101;
  border-bottom: none;
  border-left: .5pt solid #010101;
  background: #c4d79b
}

.xl209 {
  font-family: Roboto, sans-serif;
}

.xl210 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: none;
}

.xl213 {
  font-family: Roboto, sans-serif;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl216 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl219 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: center;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl221 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101
}

.xl224 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: .5pt solid #010101;
}

.xl226 {
  color: #00f;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif;
  text-align: left;
  border-top: none;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: none;
}

.xl227 {
  color: #00f;
  font-size: 11pt;
  text-decoration: underline;
  text-underline-style: single;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: none;
}

.xl230 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

.xl232 {
  font-size: 11pt;
  font-family: Roboto, sans-serif;
  text-align: left;
  vertical-align: middle;
  border-top: .5pt solid #010101;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: none;
}

.xl234 {
  font-size: 11pt;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  vertical-align: middle;
  border-top: none;
  border-right: none;
  border-bottom: .5pt solid #010101;
  border-left: .5pt solid #010101;
}

</style>
