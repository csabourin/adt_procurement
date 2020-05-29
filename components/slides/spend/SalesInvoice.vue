<template >
<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700">
 <g>
  <title>{{$t('Invoice')}}</title>
  <path d="m-1,-1l614,0l0,794l-614,0l0,-794z" fill="none"/>
  <g>
   <path d="m12.5,1.3c0,0 523.5,0 523.5,0c0,0 0,684.7 0,684.7c0,0 -523.5,0 -523.5,0c0,0 0,-684.7 0,-684.7" fill="#fff"/>
   <path d="m495.7,321.6c0,0 0,278.2 0,278.2m-80.9,-0.4c0,0 81.3,0 81.3,0m-81.3,-18.6c0,0 81.3,0 81.3,0m-81.3,-18.5c0,0 81.3,0 81.3,0m-81.3,-18.6c0,0 81.3,0 81.3,0m-81.3,-18.5c0,0 81.3,0 81.3,0m-484.3,-18.5c0,0 484.3,0 484.3,0m-484.3,-166.9c0,0 484.3,0 484.3,0m-0.4,-79.6c0,0 0,37.1 0,37.1m-483.9,-0.3c0,0 484.3,0 484.3,0m-484.3,-18.6c0,0 484.3,0 484.3,0m-80.9,43.2c0,0 0,278.2 0,278.2m0,-339.6c0,0 0,37.1 0,37.1m-80.6,24.3c0,0 0,185.4 0,185.4m0,-246.8c0,0 0,37.1 0,37.1m-80.6,-37.1c0,0 0,37.1 0,37.1m-80.6,-37.1c0,0 0,37.1 0,37.1m-80.6,24.3c0,0 0,185.4 0,185.4m0,-246.8c0,0 0,37.1 0,37.1m-80.6,24.3c0,0 0,185.4 0,185.4m0,-246.8c0,0 0,37.1 0,37.1" stroke-width="0.7" stroke-miterlimit="10" stroke="#3c3c3c" fill="none"/>
   <path d="m11.8,320.9c0,0 484.3,0 484.3,0m-484.3,-61.4c0,0 484.3,0 484.3,0" stroke-width="1.4" stroke-miterlimit="10" stroke="#3c3c3c" fill="none"/>
   <text x="15" y="38" font-size="16.7" font-family="Arial" font-weight="700">{{$t('ABC')}}</text>
   <text x="371" y="33" font-size="26" font-family="Arial" font-weight="900" fill="gray">{{$t('Invoice')}}</text>
   <text x="15" y="51" font-size="9.3" font-family="Arial" font-weight="700" font-style="italic">{{$t('tagline')}}</text>
   <text x="337" y="64" font-size="9.3" font-family="Arial" font-weight="700">{{$t('date')}}</text>
   <text x="418" y="64" font-size="9.3" font-family="Arial" font-weight="500">{{$t('18-10-19')}}</text>
   <text x="15" y="75" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('address1')}}</text>
   <text x="337" y="76" font-size="9.3" font-family="Arial" font-weight="700">{{$t('Invoice')}} #</text>
   <text x="418" y="76" font-size="9.3" font-family="Arial" font-weight="500">{{$t('invoice#')}}</text>
   <text x="15" y="87" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('city1')}}</text>
   <text x="15" y="100" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('phone1')}}</text>
   <text x="15" y="136" font-size="9.3" font-family="Arial" font-weight="700">{{$t('billTo')}}</text>
   <text x="256" y="136" font-size="9.3" font-family="Arial" font-weight="700">{{$t('shipTo')}}</text>
   <text x="15" y="148" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('boss1')}}</text>
   <text x="256" y="148" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('boss1')}}</text>
   <text x="15" y="160" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('impDep')}}</text>
   <text x="256" y="160" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('impDep')}}</text>
   <text x="15" y="172" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('parlHill')}}</text>
   <text x="256" y="172" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('parlHill')}}</text>
   <text x="15" y="184" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('ottawa')}}</text>
   <text x="256" y="184" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('ottawa')}}</text>
   <text x="15" y="197" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('phone2')}}</text>
   <text x="256" y="197" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('phone2')}}</text>
   <text x="15" y="233" font-size="9.3" font-family="Arial" font-weight="700">{{$t('comments')}}</text>
   <text x="220" y="233" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('none')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 17 : 28" y="272" font-size="9.3" font-family="Arial" font-weight="700">{{$t('salesperson')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 102 : 96" y="272" :font-size="this.$i18n.locale == 'en' ? 9.3 : 7.7" font-family="Arial" font-weight="700">{{$t('poNumber')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 189 : 175" y="272" :font-size="this.$i18n.locale == 'en' ? 9.3 : 7.7" font-family="Arial" font-weight="700">{{$t('shipDate')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 274 : 255" y="272" :font-size="this.$i18n.locale == 'en' ? 9.3 : 7.5" font-family="Arial" font-weight="700">{{$t('shipVia')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 346 : 341" y="272" font-size="9.3" font-family="Arial" font-weight="700">{{$t('fobPoint')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 439 : 436" y="272" font-size="9.3" font-family="Arial" font-weight="700">{{$t('terms')}}</text>
   <text x="31" y="291" font-size="9.3" font-family="Arial" font-weight="500">Bob Sales</text>
   <text x="112" y="291" font-size="9.3" font-family="Arial" font-weight="500">10203040</text>
   <text :x="this.$i18n.locale == 'en' ? 190 : 187" y="291" font-size="9.3" font-family="Arial" font-weight="500">{{$t('10-10-19')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 274 : 257.5" y="291" font-size="9.3" font-family="Arial" font-weight="500">{{$t('snail')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 425 : 417" y="291" :font-size="this.$i18n.locale == 'en' ? 9.3 : 7.8" font-family="Arial" font-weight="500">{{$t('due')}}</text>
   <text x="28" y="334" font-size="9.3" font-family="Arial" font-weight="700">{{$t('quantity')}}</text>
   <text x="182" y="334" font-size="9.3" font-family="Arial" font-weight="700">{{$t('desc')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 348 : 336.5" y="334" font-size="9.3" font-family="Arial" font-weight="700">{{$t('unitPrice')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 435 : 432" y="334" font-size="9.3" font-family="Arial" font-weight="700">{{$t('amount')}}</text>
   <text x="50" y="352" font-size="9.3" font-family="Arial" font-weight="500">5</text>
   <text x="95" y="352" font-size="9.3" font-family="Arial" font-weight="500">{{$t('highlighters')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 387 : 385" y="352" font-size="9.3" font-family="Arial" font-weight="500">{{$t('2')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 462 : 460" y="352" font-size="9.3" font-family="Arial" font-weight="500">{{$t('10')}}</text>
   <text x="47" y="371" font-size="9.3" font-family="Arial" font-weight="500">20</text>
   <text x="95" y="371" font-size="9.3" font-family="Arial" font-weight="500">{{$t('glasses')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 381 : 379" y="371" font-size="9.3" font-family="Arial" font-weight="500">{{$t('25')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 457 : 455" y="371" font-size="9.3" font-family="Arial" font-weight="500">{{$t('500')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 359 : 350" y="519" font-size="9.3" font-family="Arial" font-weight="500">{{$t('subtotal')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 458 : 454" y="519" font-size="9.3" font-family="Arial" font-weight="500">{{$t('510')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 362 : 319" y="538" font-size="9.3" font-family="Arial" font-weight="500">{{$t('taxRate')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 460 : 456" y="538" font-size="9.3" font-family="Arial" font-weight="500">{{$t('13')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 357 : 333" y="556" font-size="9.3" font-family="Arial" font-weight="500">{{$t('tax')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 463 : 459" y="556" font-size="9.3" font-family="Arial" font-weight="500">{{$t('66')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 304 : 209" y="575" font-size="9.3" font-family="Arial" font-weight="500">{{$t('shipping')}}</text>
   <text x="477" y="575" font-size="9.3" font-family="Arial" font-weight="500">-</text>
   <text x="380" y="593" font-size="9.3" font-family="Arial" font-weight="700">{{$t('total')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 458 : 454" y="593" font-size="9.3" font-family="Arial" font-weight="500">{{$t('576')}}</text>
   <text x="15" y="622" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('checks')}}</text>
   <text :x="this.$i18n.locale == 'en' ? 122 : 156" y="622" font-size="9.3" font-family="Arial" font-weight="700">{{$t('ABC')}}</text>
   <text x="15" y="635" font-size="9.3" font-family="Calibri" font-weight="500">{{$t('questions')}}</text>
  </g>
 </g>
</svg>
</template>
<i18n>
  {
    "en":{
      "Invoice": "INVOICE",
      "ABC": "ABC Enterprise",
      "tagline": "We have everything from A to C",
      "date": "DATE:",
      "18-10-19": "18/10/2019",
      "address1": "3rd Rock from the Sun Avenue",
      "invoice#": "`007",
      "city1": "You-Are-Here, Ontario",
      "phone1": "Phone 555.456.7890 Fax 555.456.7891",
      "billTo": "Bill To:",
      "shipTo": "Ship To:",
      "boss1": "Boss Number 1",
      "impDep": "Important Department",
      "parlHill": "Parliament Hill",
      "ottawa": "Ottawa, ON",
      "phone2": "Phone 555-456-7890",
      "comments": "Comments or Special Instructions:",
      "none": "None",
      "salesperson": "SALESPERSON",
      "poNumber": "P.O. NUMBER",
      "shipDate": "SHIP DATE",
      "shipVia": "SHIP VIA",
      "fobPoint": "F.O.B. POINT",
      "terms": "TERMS",
      "10-10-19": "10/10/2019",
      "snail": "Snail Mail",
      "due": "Due on receipt",
      "quantity": "QUANTITY",
      "desc": "DESCRIPTION",
      "unitPrice": "UNIT PRICE",
      "amount": "AMOUNT",
      "highlighters": "Polk-a-dot highlighters",
      "2": "$2.00",
      "10": "$10.00",
      "glasses": "Pairs of rose colored glasses",
      "25": "$25.00",
      "500": "$500.00",
      "subtotal": "SUBTOTAL",
      "510": "$510.00",
      "taxRate": "TAX RATE",
      "13": "13.00%",
      "tax": "SALES TAX",
      "66": "$66.30",
      "shipping": "SHIPPING & HANDLING",
      "total": "TOTAL",
      "576": "$576.30",
      "checks": "Make all checks payable to",
      "questions": "If you have any questions concerning this invoice, contact Bob at 555-456-7890 or Bob@ABCEnterprises.ca"
    },
    "fr":{
      "Invoice":"FACTURE",
      "ABC": "Entreprise ABC",
      "tagline": "Tous pour vous de A à C",
      "date": "DATE :",
      "18-10-19": "18 oct. 2019",
      "address1": "Avenue du soleil",
      "invoice#": "`007",
      "city1": "Vous-êtes-ici, Ontario",
      "phone1": "Téléphone 123.456.7890   Fax 123.456.7891",
      "billTo": "Facturer à :",
      "shipTo": "Expédier à :",
      "boss1": "Patron numéro 1",
      "impDep": "Ministère important",
      "parlHill": "Colline du Parlement",
      "ottawa": "Ottawa, ON",
      "phone2": "Téléphone 123-456-7890",
      "comments": "Commentaires ou instructions spéciales",
      "none": "Aucun",
      "salesperson": "VENDEUR",
      "poNumber": "NO DE COMMANDE",
      "shipDate": "DATE D'EXPÉDITION",
      "shipVia": "MODE D'EXPÉDITION",
      "fobPoint": "POINT DE FAB",
      "terms": "TERMES",
      "10-10-19": "10 oct. 2019",
      "snail": "Courrier ordinaire",
      "due": "Payable sur réception",
      "quantity": "QUANTITÉ",
      "desc": "DESCRIPTION",
      "unitPrice": "PRIX PAR UNITÉ",
      "amount": "MONTANT",
      "highlighters": "Surligneurs",
      "2": "2,00 $",
      "10": "10,00 $",
      "glasses": "Paires de lunettes roses",
      "25": "25,00 $",
      "500": "500,00 $",
      "subtotal": "SOUS-TOTAL",
      "510": "510,00 $",
      "taxRate": "TAUX DE TAXATION",
      "13": "13,00 %",
      "tax": "TAXE DE VENTE",
      "66": "66,30 $",
      "shipping": "FRAIS D'EXPÉDITION ET DE MANUTENTION",
      "total": "TOTAL",
      "576": "576,30 $",
      "checks": "Libellez tous les chèques à l'ordre d'",
      "questions": "Si vous avez des questions concernant cette facture, communiquez avec Bob au 123-456-7890 ou à Bob@ABCEnterprises.ca"
    }
  }
</i18n>

<style>

  /* Arial Bold */
  @font-face{
    font-family: "Arial";
    font-weight: 700;
    font-style: normal;
    src: url("~assets/arialbd.ttf");
  }
  
  /* Arial Bold Italic */
  @font-face{
    font-family: "Arial";
    font-weight: 700;
    font-style: italic;
    src: url("~assets/arialbi.ttf");
  }
  
  /* Arial Black */
  @font-face{
    font-family: "Arial";
    font-weight: 900;
    font-style: normal;
    src: url("~assets/ariblk.ttf");
  }
  
  /* Arial Regular */
  @font-face{
    font-family: "Arial";
    font-weight: 500;
    font-style: normal;
    src: url("~assets/arial.ttf");
  }
  
  /* Calibri Regular */
  @font-face{
    font-family: "Calibri";
    font-weight: 500;
    font-style: normal;
    src: url("~assets/calibri.ttf");
  }

</style>