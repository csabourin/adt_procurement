<template>
  <div>
    <h2 class="pageTitle" v-html="$t('InitiateAuthorizeSpending')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_m4j5425d/flavorId/0_8xw6wgjm/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_ij5axy91/flavorId/0_p3bp621h/name/a.mp4"  chapters chapterFile="SpendPart1.vtt" ccFile="ADT_MODULE4_CAPTION.vtt" posterFile="MOD4.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">

                        <h2>1. Introduction</h2>
                        <p>[Text appears on a purple background with wavy white lines. It reads, “Module 4: Technical and Bid Requirements and Procurement Strategy.” A textbox reads, “1. Introduction.” This is replaced with the headline, “In this section.” The narrator’s words appear in a bullet point list as she speaks. White graphics appear alongside them, including boxes of supplies, a person at a counter, and a bulldozer.]</p>
                        <p>Narrator: In this section you will learn to define your goods, services and construction needs, consider any special requirements, and describe what you need.</p>
                        <p>This section should take you approximately 45 minutes to complete.</p>
                        <p>[Three quarters of a clock fills in above the words “45 minutes.”]</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Define Your Needs</h2>
                        <p>[Text appears in a white box with rounded corners, reading, “2. Define Your Needs.”]</p>
                        <p>To begin the procurement process, you need to figure out what you need; or, in procurement terms, you need to figure out your requirements.</p>
                        <p>[The words “Procurement Cycle” appear. Six circles surround the text, each with an arrow pointing to the next circle.]</p>
                        <p>No one else can do this for you. Your team knows your business. They know what is needed to support it.</p>
                        <p>[An image depicts four people sitting in a meeting.] </p>
                        <p>Here is a list of questions that will help you define your requirements.</p>
                        <p>[A woman ponders. Above her, thought bubbles pop up with key words from the narrator’s following list.] </p>
                        <ul>
                          <li>What is required and why is it needed?</li>
                          <li>Can the work be broken down into tasks, activities or phases?</li>
                          <li>When is each piece or phase required?</li>
                          <li>Can one phase begin before the approval or completion of another? </li>
                          <li>Will the final delivery be in a modern treaty or Comprehensive Land Claims Agreement area? </li>
                          <li>Are there other Indigenous considerations related to procurement? </li>
                          <li>Where will the work be done? </li>
                          <li>What skills are required to do the work? </li>
                          <li>Are you sure about the quantity that is required? </li>
                          <li>Will this be a recurring requirement? </li>
                          <li>What are the security requirements? </li>
                          <li>Who will keep Ownership of any Intellectual Property generated? </li>
                          <li>Has accessibility been considered? </li>
                          <li>Has green procurement been included? </li>
                        </ul>
                        <p>[A checklist fills the screen.]</p>
                        <p>Be clear about what you need. If you have difficulty defining your requirements, why not contact your procurement specialist for a bit of help or to obtain templates?</p>
                        <p>[A hand holds a cellphone.]</p>
                        <p>Or visit the For Government section of the Buyandsell.gc.ca website, a great source of information.</p>
                        <p>[The Buyandsell web page appears with the government of Canada logo on it.]</p>
                        <p>After all, if you request a motor vehicle, you don't want to end up with a Smart car when what you really need is a pickup truck! </p>
                        <p>[A Smart car drives away and is replaced with a truck.]</p>
                        <p>[A Define Your Needs activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Special Needs and Other Considerations</h2>
                        <p>[A text box reads, “3. Special Needs and Other Considerations.” The words “Special requirements and other considerations” appear at the top of the screen.] </p>
                        <p>When defining your procurement needs, think about special requirements and other considerations. For example, instead of buying standard chairs, could you pay a bit more for chairs that are ergonomic and more durable?  </p>
                        <p>[A simple wooden chair sits beside a plush wheeled office chair.] </p>
                        <p>In the long run, more people will be able to use them and they won't need to be replaced as often. That’s good news for your budget and for the environment!  </p>
                        <p>[Coins appear alongside a recycling symbol.] </p>
                        <p>Here are a few questions to get you started: </p>
                        <p>[A clipboard appears, and key words of the narrator’s list pop up on it as she speaks.] </p>
                        <ul>
                          <li>What are the accessibility or ergonomic needs?  </li>
                          <li>Have you considered getting advice from people with disabilities? </li>
                          <li>Is it public facing? Meaning, will the public have access to it? </li>
                          <li>Are there GBA+ considerations? </li>
                          <li>Has it been prepared in both official languages?  </li>
                          <li>Are there applicable trade agreements?  </li>
                          <li>Does it involve a former public servant?  </li>
                          <li>Is there an intellectual property component?  </li>
                          <li>Do modern treaties or Comprehensive Land Claims Agreements apply? </li>
                          <li>Does the department have exceptional delegations (like the Department of National Defence)? </li>
                          <li>Does it consider green procurement?  </li>
                          <li>What level of security is involved? For example, is it Secret?  </li>
                          <li>Are there specialized shipping or packaging requirements?  </li>
                          <li>Is it of interest to the media?  </li>
                          <li>Will it carry over multiple fiscal years? </li>
                        </ul>
                        <p>If you are not sure that you have considered all the special requirements, contact your procurement specialist. They will have most likely seen purchases like yours before and can help you with your requirements. </p>
                        <p>[Two figures speak. One of them has a speech bubble filled with a question mark.]</p>
                        <p>[A Special Needs and Other Considerations activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. Describe What You Need</h2>
                        <p>[A text box reads, “4. Describe What You Need.”] </p>
                        <p>You have figured out what you need and identified your requirements. That's great!</p>
                        <p>[A magnifying glass hovers over a checklist.] </p>
                        <p>Let's move on to how you must document your decisions. First, you need to draft a description. There are five ways that you can do this. Let's look at them one by one.</p>
                        <p>[A list appears with each of the five ways: Design Specification, Performance Specifications, Combination Design and Performance Specifications, Purchase Description Specifications, and Indigenous Economic Measures. Text beside the list reads, “Choose from the five options.”] </p>
                        <p>A <b>design specification</b> is a detailed description of the item to be purchased.  </p>
                        <p>[The words “Design Specification” appear at the top of the screen. Below, images appear as the narrator goes through the aspects, including a cube, a ruler, a beaker, a recycling symbol, an office chair, a wheelchair symbol, a brain inside a person’s head, a wrench and gear, a speedometer, and safety glasses.] </p>
                        <p>It could include drawings and required dimensions, size and dimensions, materials, physical properties, quality test results, environmental, ergonomic and aesthetic considerations, accessibility considerations for people with visible or invisible disabilities, anticipated repair and maintenance needs, level of quality to be achieved, safety standards to be met, etc. </p>
                        <p>[The next title is “Performance Specifications.” A checklist appears below, with three sections. Their labels are Output, Functions, and Operations.] </p>
                        <p><b>Performance specifications</b> set the operational requirements of an item or an installation. In other words, they describe what the final installed product must be able to do. They outline the required output, functions or operations of the item and the equipment.  </p>
                        <p>[Next is “Combination Design and Performance Specifications.” A Venn diagram has the word “Design” in one circle and “Performance” in the other.] </p>
                        <p><b>Combination design and performance specifications</b> incorporate the attributes of both the performance specifications and the design specifications.  </p>
                        <p>[The next text box reads, “Purchase Description Specifications.” Select words appear below it as the narrator speaks, beside images of tools.]</p>
                        <p><b>Purchase description specifications</b> provide a brief but accurate description of the desired production. They list the product by national, international or industrial reference standards, such as a 10 mm wrench, a screwdriver or a two-by-four. </p>
                        <p>[The text box “Indigenous Economic Measures” is paired with a dollar bill and two arrows moving upward.] </p>
                        <p><b>Indigenous economic measures</b> enhance economic opportunities for Indigenous Peoples and businesses through increased opportunity to compete for contracts via the Procurement Strategy for Aboriginal Business, the Treasury Board Directive on Government Contracts, including Real Property Leases, in the Nunavut Settlement Area, and through departmental Indigenous economic measures.</p>
                        <p>[Government of Canada webpages pop up for each of these options. Then, two lines of text on the purple background read, “Statement of Work” and “Statement of Requirement.”] </p>
                        <p> Then, once you have prepared the description, you must present it in either a Statement of Work or a Statement of Requirement. Here is a bit more information on each option. </p>
                        <p>A <b>statement of work</b> describes the work required in clear, concise and meaningful terms. It includes the deliverables or the services or work needed to fulfill the contract.  </p>
                        <p>[Each of the narrator’s main points appear beneath “Statement of Work.” Under “Statement of Requirement,” more key words appear as the narrator says them.] </p>
                        <p>A <b>statement of requirement</b> is a description of the need without specifying the exact method to be used. It includes problem definition information which will provide context for the approving authority, as well as an initial assessment of risk, and basic financial information regarding what will be produced in the next stage. </p>
                        <p>[The header “Job Aids” appears above “Statement of Work” and “Statement of Requirement.” Between the two is an image of a toolbox.] </p>
                        <p>Since you will be the one preparing either the statement of work or the statement of requirement, have a look at the “Statement of Work Example” and the “Statements of Work, Statements of Requirement and Descriptions” job aids provided in the Toolbox for guidance. </p>
                        <p>[A Describe What You Need activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Transparent and Fair Procurement</h2>
                        <p>[On a title screen, a text box reads, “5. Transparent and Fair Procurement.”] </p>
                        <p>Did you know that when carrying out their procurement duties, managers must adhere to the laws, regulations and policies established by the government?  </p>
                        <p>[A woman opens a door. The words “Laws,” “Regulations,” and “Policies” appear under images of a gavel, books, and a document, respectively.] </p>
                        <p>This means carrying out the procurement process in a transparent, fair and open manner for suppliers. And what happens if managers don’t follow those rules? Well, there are different levels of authorities in place that check to make sure that the rules are being followed.  </p>
                        <p>[The word “Authorities” appears under a lit-up alert beacon.] </p>
                        <p>It is also important that the relationship between your organization and a contractor remain on a strictly business level.</p>
                        <p>[Two hands shake. A man and woman stand a few feet away from each other. Both of them hold a folder.] </p>
                        <p>Contractors must not be treated as employees, as this would be contrary to or conflict with the <em>Public Service Employment Act</em> and common law principles dealing with employer-employee relationships.  </p>
                        <p>[An image of a document appears with Canada’s crest, and the words “Public Service Employment Act.”] </p>
                        <p>In addition, managers are responsible for preventing the development of an employer-employee relationship for the duration of the contract. </p>
                        <p>For more information on a transparent, open and fair procurement process, see the job aid on “What Not To Do” as well as the job aid on “Legal Framework”. </p>
                        <p>[A toolbox appears above the words, “Job Aids.”]</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>6. Consult a Procurement Specialist</h2>
                        <p>[On the purple background, a text box reads, “6. Consult a Procurement Specialist.”] </p>
                        <p>I have good news for you! As a manager, you are not expected to be an expert in procurement. Your organization will have procurement specialists to provide guidance and support.  </p>
                        <p>[Two people interact. One has a speech bubble with a question mark in it.] </p>
                        <p>You are, however, responsible for certain things. You must make sure that you have the required funding.  </p>
                        <p>[A man holds money under the words “Required funding.”] </p>
                        <p>You must provide the technical requirements and evaluation criteria.  </p>
                        <p>[Under “Technical requirements and evaluation criteria,” a hand makes a checkmark on a list.] </p>
                        <p>And, once received, you must confirm that the goods and services are acceptable, as per the contract. </p>
                        <p>[Under “Goods and services are acceptable,” a deliveryman shakes hands with a woman. He pushes a dolly stacked with boxes.] </p>
                        <p>So, when exactly do you need the help of a procurement specialist? Here are some of the general recommendations. </p>
                        <p>[Two people clasp hands. Select words appear beside them as the narrator speaks: “Insufficient individual delegation,” “Insufficient departmental delegation,” “Public Services and Procurement Canada or Shared Services Canada,” and “Treasury Board Approval.”] </p>
                        <p>When you do not have the proper transaction or contracting delegation. When your department does not have the delegation to purchase the goods or services itself. When the requirement falls to Public Services and Procurement Canada or Shared Services Canada. And when the procurement requires Treasury Board approval. </p>
                        <p>Don’t forget: even if you are not required to consult your procurement specialist for purchases within your delegated authority, they are always there to guide you, answer your questions and support you.  </p>
                        <p>[A person holding a briefcase flies with a cape billowing behind him.] </p>
                        <p>After all, why spend hours doing research and developing documents from scratch when your procurement specialist has templates waiting for you! </p>
                        <p>[A man stares at a computer, pulling at his hair. Books are piled beside him.]</p>
                        <p>[A Consult a Procurement Specialist activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>7. Consult Stakeholders</h2>
                        <p>[A title screen reads, “7. Consult Stakeholders.”] </p>
                        <p>Depending on what you are procuring, you may need to consult stakeholders in security, information technology, communications and translation, to name but a few.  </p>
                        <p>[Images appear around a woman: a lock, a laptop, two speech bubbles, and a communications tower.] </p>
                        <p>After all, you can’t be an expert in every field and you don’t know what you don’t know! </p>
                        <p>In fact, in certain cases, you must consult stakeholders. For essential commodities such as advertising and public opinion research, you must use Public Services and Procurement Canada.  </p>
                        <p>[Under the title “Consult stakeholders,” arrows point from each case to each stakeholder. “Advertising and public opinion research” has an arrow leading to “Public Services and Procurement Canada.”] </p>
                        <p>For legal services, each department has their own assigned lawyers from the Department of Justice, and contracts for the performance of legal services may be entered into only by or under the authority of the Minister of Justice. </p>
                        <p>[An arrow points from “Legal services” to “Department of Justice” and from “Contracts for legal services” to “Minister of Justice.”] </p>
                        <p>People with a wide range of disabilities may also use the service or item being procured.  </p>
                        <p>[Nine circles appear with various symbols in them, including a person walking with crutches, a pregnant person pushing a carriage, and an ear with a hearing aid.] </p>
                        <p>Be sure to consult your department’s network of employees with disabilities for advice on removing obstacles to accessibility for the end user.   </p>
                        <p>[A Consult Stakeholders activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>8. Choose a Procurement Strategy</h2>
                        <p>[A text box reads, “8. Choose a Procurement Strategy.” Checkmarks appear beside the words “Requirements” and “Who to consult.”] </p>
                        <p>You have now defined your requirements and figured out who you need to consult. What’s next? Well, that depends on the dollar amount and the complexity of what you need to buy.  </p>
                        <p>[A pen signs a page beside a stack of coins.] </p>
                        <p>You either initiate the purchase of low-dollar-value procurements using instruments that you have at your disposal yourself, or you work with your procurement specialist to determine the procurement strategy for more complex, higher-dollar-value procurements. </p>
                        <p>[A woman talks with a man. A question mark in a speech bubble hangs above her head.] </p>
                        <p>Regardless of the procurement strategy that you choose, always consider how much time it will take for you to complete the procurement process.  </p>
                        <p>[Hands on a clock spin. A calendar appears with an X marked in a date.] </p>
                        <p>For example, items on the Buyandsell.gc.ca website must be posted for a minimum of 40 days, as applicable, if subject to our international trade agreements. Or, for complex or big-ticket items such as fleets, the process can take over a year. So, please plan accordingly! </p>
                        <p>[The words “Job Aids” appear under a toolbox.] </p>
                        <p>The following exercise will help you to review your knowledge of procurement strategies and instruments. The Toolbox also contains a “Commonly Used Procurement Instruments” job aid. </p>
                        <p>[A Procurement Strategies and Instruments – Key Terms activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>9. In Real Life</h2>
                        <p>[A textbox reads, “9. In Real Life.” A woman and man speak. A speech bubble with a dollar sign in it leads from his mouth.] </p>
                        <p>Take what you have learned into real life! Your organization will have its own ways of doing things. Take time out from the course to see which procurement strategies you will use most often. Find the templates your department uses and look up examples of previous purchases for guidance. This will be helpful when it comes time for you to choose a procurement strategy.  </p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>10. Quiz</h2>
                        <p>[A text box reads, “10. Quiz.” Three checklists appear.] </p>
                        <p>Now that you have seen how to define your goods, services and construction needs, consider any special requirements, and describe what you need, let’s see what you remember by taking this short quiz. </p>
                        <p>[Text reads, “Take the quiz!” beside an image of a hand writing on a page. The video fades to black.] </p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>11. Section completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>



                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Introduction</h2>
                        <p>[Sur un fond mauve avec des lignes blanches ondulées, le titre « Module 4 : Exigences techniques et de soumission et stratégie d’approvisionnement » s’affiche. Une boîte de texte indique : « 1. Introduction ». Elle est remplacée par les mots « Dans la présente section », dans le haut de l’écran. Une liste à puces s’affiche à mesure que la narratrice en énumère les points. Des dessins faits de lignes blanches apparaissent à sa droite, notamment des boîtes de fournitures, une personne en fauteuil roulant, le symbole de recyclage et une liste de vérification.]</p>
                        <p>Narratrice : Dans la présente section, vous apprendrez </p>
                        <ul>
                          <li>à définir vos besoins en biens, en services et en construction,  </li>
                          <li>à tenir compte des exigences particulières  </li>
                          <li>et à décrire ce dont vous avez besoin. </li>
                        </ul>
                        <p>Il vous faudra environ 45 minutes pour compléter cette section. </p>
                        <p>[Les trois quarts d’une horloge sont remplis au-dessus des mots « 45 minutes ».]</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>2. Définir ses besoins</h2>
                        <p>[Du texte apparaît dans une boîte blanche avec des coins arrondis. « 2. Définir ses besoins ».]</p>
                        <p>Pour commencer le processus d’approvisionnement, vous devez déterminer ce dont vous avez besoin ou, pour utiliser la terminologie de l’approvisionnement, vous devez déterminer vos exigences.</p>
                        <p>[Les mots « Cycle d’approvisionnement » s’affichent. Six cercles entourent le texte, une flèche entre chacun d’entre eux.]</p>
                        <p>Personne ne peut le faire pour vous puisqu’avec votre équipe, vous seules connaissez vos activités et ce dont vous avez besoin pour être bien soutenu.</p>
                        <p>[Quatre personnes sont assises autour d’une table de réunion.]</p>
                        <p>Voici une liste de questions qui vous aideront à définir vos besoins.  </p>
                        <p>[Une femme réfléchit. Au-dessus d’elle, des bulles de pensée apparaissent. Elles contiennent des mots clés tirés des questions ci-dessous, posées par la narratrice.]</p>
                        <ul>
                          <li>Qu’est-ce qui est requis et pourquoi est-ce nécessaire? </li>
                          <li>Le travail peut-il être divisé en tâches, en activités ou en phases? </li>
                          <li>À quel moment chaque partie ou phase est-elle requise? </li>
                          <li>Une phase peut-elle commencer avant l’approbation ou l’achèvement d’une autre? </li>
                          <li>La livraison finale se fera-t-elle dans un endroit faisant l’objet d’un traité moderne ou d’une entente sur des revendications territoriales globales? </li>
                          <li>Y a-t-il d’autres considérations relatives aux Autochtones liées à l’approvisionnement? </li>
                          <li>Où le travail sera-t-il effectué? </li>
                          <li>Quelles compétences sont nécessaires pour faire le travail? </li>
                          <li>Êtes-vous certain de la quantité requise? </li>
                          <li>S’agit-il d’un besoin récurrent? </li>
                          <li>Quelles sont les exigences relatives à la sécurité? </li>
                          <li>Qui conservera les droits sur toute propriété intellectuelle générée? </li>
                          <li>L’accessibilité a-t-elle été prise en compte? </li>
                          <li>A-t-on recours à l’achat écologique? </li>
                        </ul>
                        <p>[Une liste de vérification remplit l’écran.]</p>
                        <p>Soyez clair sur ce dont vous avez besoin. Si vous avez de la difficulté à définir vos besoins, pourquoi ne pas vous adresser à votre spécialiste en approvisionnement pour obtenir un peu d’aide ou des modèles?</p>
                        <p>[Une main tient un téléphone intelligent.]</p>
                        <p>Vous pouvez aussi consulter la section pour le gouvernement du site Web Achatsetventes.gc.ca, une excellente source d’information.</p>
                        <p>[La page Web « Achatsetventes » s’affiche avec le logo du gouvernement du Canada.]</p>
                        <p>Après tout, si vous demandez un véhicule à moteur, vous ne voulez pas vous retrouver avec une sous‑compacte alors que vous avez vraiment besoin d’une camionnette! </p>
                        <p>[Une voiture sous-compacte roule en dehors de l’écran avant d’être remplacée par une camionnette.]</p>
                        <p>[Une boîte de texte de l’activité Définir ses besoins apparaît.]</p>
                        <hr>

                        <h2>3. Besoins particuliers et autres considérations</h2>
                        <p>[Une boîte de texte indique : « 3. Besoins particuliers et autres considérations ».]</p>
                        <p>Lorsque vous définissez vos besoins en matière d’approvisionnement, pensez aux exigences particulières et aux autres considérations. Par exemple, au lieu d’acheter des chaises ordinaires, devriez-vous payer un peu plus cher pour des chaises ergonomiques et plus durables?</p>
                        <p>[Une chaise droite se trouve à côté d’une chaise de bureau à roulettes.]</p>
                        <p>À long terme, plus de personnes pourront les utiliser et elles n’auront pas à être remplacées aussi souvent. C’est une bonne nouvelle pour votre budget et pour l’environnement!  </p>
                        <p>[Des pièces de monnaie apparaissent à côté du symbole de recyclage.]</p>
                        <p>Voici quelques questions pour vous aider à vous lancer : </p>
                        <p>[Des mots clés s’affichent sur une planchette à pince à mesure que la narratrice énumère les éléments ci-dessous.]</p>
                        <ul>
                          <li>Quels sont les besoins en matière d’accessibilité ou d’ergonomie?  </li>
                          <li>Avez-vous envisagé de demander conseil à des personnes handicapées? </li>
                          <li>Est-ce public? C’est-à-dire, est-ce que le public y aura accès? </li>
                          <li>Y a-t-il des questions d’ACS+ à prendre en considération? </li>
                          <li>Le document a-t-il été préparé dans les deux langues officielles? </li>
                          <li>Des accords commerciaux s'appliquent-ils?</li>
                          <li>Un ancien fonctionnaire est-il concerné? </li>
                          <li>Y a-t-il un élément de propriété intellectuelle?  </li>
                          <li>Les traités modernes ou les ententes sur des revendications territoriales globales s’appliquent-ils? </li>
                          <li>Le ministère a-t-il des délégations exceptionnelles (comme le ministère de la Défense nationale)? </li>
                          <li>Tient-on en compte de l’achat écologique?  </li>
                          <li>Quel est le niveau de sécurité requis? Par exemple, est-ce classé Secret?  </li>
                          <li>Existe-t-il des exigences d’expédition ou d’emballage spécialisées?  </li>
                          <li>La question intéresse-t-elle les médias?  </li>
                          <li>Le projet se poursuivra-t-il sur plusieurs exercices financiers? </li>
                        </ul>
                        <p>Si vous n’êtes pas sûr d’avoir pris en compte toutes les exigences particulières, communiquez avec votre spécialiste en approvisionnement. Il a probablement déjà vu des achats comme les vôtres et pourra vous aider à cerner vos besoins. </p>
                        <p>[Deux personnes discutent. Une bulle de dialogue avec un point d’interrogation pointe vers l’une d’entre elles.]</p>
                        <p>[Une boîte de texte de l’activité Besoins particuliers et autres considérations apparaît.]</p>
                        <hr>

                        <h2>4. Décrire ce dont on a besoin</h2>
                        <p>[Du texte apparaît dans une boîte blanche avec des coins arrondis. « 4. Décrire ce dont on a besoin ».]</p>
                        <p>Vous avez maintenant déterminé ce dont vous avez besoin et établi vos exigences. C’est très bien!  </p>
                        <p>[Une loupe se dessine par-dessus une liste de vérification.]</p>
                        <p>Passons maintenant à la manière dont vous devez documenter vos décisions. Tout d’abord, vous devez rédiger une description. Il existe cinq façons de procéder. Étudions-les une à une.  </p>
                        <p>[Une liste s’affiche. Les cinq options y sont inscrites : « Norme de conception », « Spécifications fonctionnelles », « Normes de conception et spécifications fonctionnelles combinées », « Description de l’achat » et « Mesures économiques destinées aux Autochtones ». À côté de la liste, il est écrit : « Choisir parmi les cinq options ».]</p>
                        <p>Une norme de conception est une description détaillée de l’article à acheter. Elle pourrait inclure :  </p>
                        <p>[Les mots « Norme de conception » apparaissent dans le haut de l’écran. En dessous, des images se dessinent à mesure que la narratrice passe en revue les caractéristiques de l’option, notamment : une boîte, une règle, une chaise de bureau et un cerveau dans la tête d’une personne.]</p>
                        <ul>
                          <li>des dessins ainsi que la taille et les dimensions requises;  </li>
                          <li>les matériaux et les propriétés physiques; </li>
                          <li>les résultats obtenus à des tests de qualité; </li>
                          <li>les aspects environnementaux, ergonomiques et esthétiques;  </li>
                          <li>les aspects liés à l’accessibilité pour les personnes ayant un handicap apparent ou invisible; </li>
                          <li>les besoins prévus en réparation et en entretien;  </li>
                          <li>le niveau de qualité à atteindre;  </li>
                          <li>les normes de sécurité à atteindre; etc. </li>

                        </ul>
                        <p>[Le titre suivant est : « Spécifications fonctionnelles ». Une liste de vérification s’affiche en dessous. Elle contient trois sections : production, fonctions et opérations.]</p>
                        <p>Les <strong>spécifications fonctionnelles</strong> définissent les exigences opérationnelles d’un élément ou d’une installation. En d’autres termes, elles décrivent ce que le produit final installé doit être capable de faire. Elles décrivent la production, les fonctions ou les opérations requises de l’article et de l’équipement.  </p>
                        <p>[Le titre d’après est : « Normes de conception et spécifications fonctionnelles combinées ». Un diagramme de Venn est présenté. Dans le cercle de gauche, il est écrit : « Normes de conception » et, dans celui de droite : « Spécifications fonctionnelles ».]</p>
                        <p>Les <strong>normes de conception et les spécifications fonctionnelles combinées</strong> intègrent les attributs des spécifications fonctionnelles et des normes de conception.</p>
                        <p>[Le titre suivant est : « Description de l’achat ». Des mots clés sont énumérés en dessous à mesure que la narratrice les prononce. À leur droite, des outils sont dessinés.]</p>
                        <p>La <strong>description de l’achat</strong> fournit une description brève mais exacte de la production désirée. Elle répertorie le produit selon des normes de référence nationales, internationales ou industrielles, telles qu’une clé de 10 mm, un tournevis ou un deux par quatre. </p>
                        <p>[Le dernier titre est : « Mesures économiques destinées aux Autochtones ». Il est accompagné d’un billet de banque avec deux flèches qui pointent vers le haut.]</p>
                        <p>Les mesures économiques destinées aux Autochtones accroissent les occasions économiques pour les peuples et les entreprises autochtones en augmentant les possibilités d’obtenir des contrats grâce : </p>
                        <ul>
                          <li>à la Stratégie d’approvisionnement auprès des entreprises autochtones, </li> 
                          <li>à la Directive sur les marchés de l’État, incluant les baux immobiliers, dans la région du Nunavut,  </li>
                          <li>et à des mesures économiques ministérielles pour les Autochtones.  </li>

                        </ul>
                        <p>[Pour chacune des trois options, une page du site Web du gouvernement du Canada s’affiche à l’écran. Sur le fond mauve, deux encadrés contiennent les mots : « Énoncé de travail » et « Énoncé des besoins ».]</p>
                        <p>Une fois que vous avez préparé la description, vous devez la présenter dans un énoncé de travail ou un énoncé des besoins. Voici un peu plus de renseignements sur chaque option. </p>
                        <p>Un <strong>énoncé de travail</strong> décrit le travail requis en termes clairs, concis et significatifs. Il comprend les produits livrables, les services ou les travaux nécessaires à l’exécution du contrat.  </p>
                        <p>[Les principaux points prononcés par la narratrice sont écrits en dessous d’« Énoncé de travail ». D’autres mots clés sont écrits en dessous d’« Énoncé des besoins » à mesure que la narratrice les nomme.]</p>
                        <p>Un <strong>énoncé des besoins</strong> est une description de la nécessité sans préciser la méthode exacte à utiliser. Il comprend des informations sur la définition d’un problème qui fourniront le contexte de l’autorité approbatrice, ainsi qu’une évaluation initiale du risque et des informations financières de base concernant ce qui sera produit à la prochaine étape. </p>
                        <p>[Les mots « Boîte à outils » s’affichent au-dessus d’« Énoncé de travail » et d’« Énoncé des besoins ». Une boîte à outils se dessine entre les deux énoncés.]</p>
                        <p>Puisque vous serez la personne qui préparera l’énoncé des travaux ou l’énoncé des besoins, jetez un coup d'œil aux aide-mémoires fournis pour vous aider dans ces étapes dans la boîte à outils à titre indicatif. </p>
                        <p>[Une boîte de texte de l’activité Décrire ce dont on a besoin apparaît.]</p>
                        <hr>

                        <h2>5. Approvisionnement équitable et transparent</h2>
                        <p>[Une boîte de texte indique : « 5. Approvisionnement équitable et transparent ».]</p>
                        <p>Saviez-vous que dans l’exercice de leurs fonctions d’approvisionnement, les gestionnaires doivent se conformer aux lois, aux règlements et aux politiques établis par le gouvernement?</p>
                        <p>[Une femme ouvre une porte. Trois mots et trois images apparaissent à l’écran. Le mot « Lois » en dessous d’un maillet, « Règlements » en dessous de livres et « Politiques » en dessous d’une feuille et d’un crayon.]</p>
                        <p>Cela signifie que le processus d’approvisionnement est transparent, équitable et ouvert pour les fournisseurs. Que se passe-t-il si les gestionnaires ne respectent pas ces règles? En fait, il existe différents niveaux de pouvoir pour s’assurer du respect des règles.</p>
                        <p>[Le mot « Pouvoirs » s’affiche en dessous d’un voyant d’alarme allumé.]</p>
                        <p>Il est également important que la relation entre votre organisation et un entrepreneur demeure strictement professionnelle.</p>
                        <p>[Une poignée de main remplit l’écran. Un homme et une femme se tiennent à quelques mètres l’un de l’autre. Les deux ont un dossier entre les mains.]</p>
                        <p>Les entrepreneurs ne doivent pas être traités comme des employés, car cela serait contraire à la <em>Loi sur l’emploi dans la fonction publique</em> et aux principes de common law relatifs aux relations employeur-employé ou entrerait en conflit avec eux.</p>
                        <p>[La première page de la Loi sur l’emploi dans la fonction publique est dessinée avec le mot « Codification » et les armoiries du Canada en haut. Le côté droit de la page est en français.]</p>
                        <p>De plus, les gestionnaires ont la responsabilité d’empêcher qu’une relation employeur-employé se développe pendant la durée du contrat. </p>
                        <p>[Le dessin d’une boîte à outils apparaît à l’écran.]</p>
                        <p>Pour plus d’informations sur un processus d’approvisionnement transparent, ouvert et équitable, consultez l’aide-mémoire sur « Ce qu’il ne faut pas faire » ainsi que l’aide-mémoire sur le « Cadre juridique ».</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>

                        <h2>6. Consulter un spécialiste en approvisionnement</h2>
                        <p>[Une boîte de texte indique : « 6. Consulter un spécialiste en approvisionnement ».]</p>
                        <p>Bonne nouvelle! On ne s’attend pas à ce que, comme gestionnaire, vous soyez un spécialiste en approvisionnement. Votre organisation disposera de spécialistes en approvisionnement pour vous fournir des conseils et du soutien.  </p>
                        <p>[Deux personnes discutent. Une bulle de dialogue avec un point d’interrogation pointe vers l’une d’entre elles.]</p>
                        <p>Vous êtes cependant responsable de certaines choses. </p>
                        <ul>
                          <li>Vous devez vous assurer que vous disposez des fonds nécessaires.  </li>
                          <p>[Un homme tient de l’argent en dessous des mots « Fonds nécessaires ».]</p>
                          <li>Vous devez fournir les exigences techniques et les critères d’évaluation. </li>
                          <p>[En dessous d’« Exigences techniques et critères d’évaluation », une main fait un crochet sur une liste.]</p>
                          <li>De plus, à la livraison, vous devez confirmer que les biens et les services sont acceptables, conformément au contrat. </li>
                          <p>[En dessous de « Biens et services sont acceptables », un livreur serre la main d’une femme. Il tient un chariot sur lequel sont empilées des boîtes.]</p>
                        </ul>
                        <p>Alors, quand avez-vous besoin de l’aide d’un spécialiste en approvisionnement? Voici quelques-unes des recommandations générales. </p>
                        <p>[Une personne en empoigne une autre par la main. Des mots clés apparaissent à leur gauche pendant que la narratrice parle : « Délégation individuelle insuffisante », « Délégation du ministère insuffisante », « Services publics et Approvisionnement Canada ou à Services partagés Canada » et « Approbation par le Conseil du Trésor ».]</p>
                        <ul>
                          <li>Lorsque vous n’avez pas la bonne délégation relativement aux transactions ou aux contrats.  </li>
                          <li>Lorsque votre ministère ne possède pas la délégation lui permettant de se procurer lui-même les biens ou les services. </li>
                          <li>Lorsque l’exigence revient à Services publics et Approvisionnement Canada ou à Services partagés Canada.  </li>
                          <li>Lorsque l’approvisionnement doit être approuvé par le Conseil du Trésor. </li>
                        </ul>
                        <p>N’oubliez pas : même si vous n’êtes pas obligé de consulter votre spécialiste en approvisionnement relativement aux achats visés par le pouvoir qui vous est délégué, celui-ci est toujours là pour vous guider, répondre à vos questions et vous accompagner.</p>
                        <p>[Un homme vole en tenant une mallette. Derrière lui, sa cape flotte au vent.]</p>
                        <p>Après tout, pourquoi passer des heures à effectuer des recherches et à créer des documents de toutes pièces alors que votre spécialiste en approvisionnement a des modèles pour vous! </p>
                        <p>[Un homme fixe son ordinateur et s’arrache les cheveux. Des livres sont empilés à côté de lui.]</p>
                        <p>[Une boîte de texte de l’activité Consulter un spécialiste en approvisionnement apparaît.]</p>
                        <hr>

                        <h2>7. Consulter les parties prenantes</h2>
                        <p>[Une boîte de texte indique : 7. Identifier les parties prenantes ».]</p>
                        <p>Selon ce que vous achetez, vous aurez peut-être besoin de consulter des parties prenantes dans les domaines de la sécurité, des technologies de l’information, des communications et de la traduction, pour n’en nommer que quelques-uns.</p>
                        <p>[Des images apparaissent autour d’une femme : un cadenas, un ordinateur portable, un symbole de réseau sans fil et deux bulles de dialogue.]</p>
                        <p>Après tout, vous ne pouvez pas être un expert dans tous les domaines et vous ne savez pas ce que vous ne savez pas! </p>
                        <p>En fait, dans certains cas, vous devrez absolument consulter les parties prenantes. Pour les produits essentiels comme la publicité et la recherche sur l’opinion publique, vous devez vous adresser à Services publics et Approvisionnement Canada.</p>
                        <p>[En dessous du titre « Consulter les parties prenantes », les différentes parties prenantes et les services qu’elles offrent sont reliés par une flèche. Un flèche pointe de « Publicité et recherche sur l’opinion publique » vers « Services publics et Approvisionnement Canada ».]</p>
                        <p>Dans le cas des services juridiques, chaque ministère possède ses propres avocats affectés par le ministère de la Justice. Les contrats pour la prestation de services juridiques ne peuvent être conclus que par ou sous l’autorité du ministre de la Justice. </p>
                        <p>[Une flèche pointe de « Services juridiques » vers « Ministère de la Justice » et une autre flèche pointe de « Contrats de services juridiques » vers « Ministre de la Justice ».]</p>
                        <p>Les personnes handicapées devraient également pouvoir utiliser le service ou l’article fourni, quel que soit leur handicap.</p>
                        <p>[Neuf cercles dans lesquels se trouvent divers symboles se dessinent, notamment : une personne avec des béquilles, une femme enceinte avec une poussette, et une oreille avec un appareil auditif.]</p>
                        <p>Consultez le réseau d’employés handicapés de votre ministère pour obtenir des conseils sur la suppression des obstacles à l’accessibilité pour l’utilisateur final.</p>
                        <p>[Une boîte de texte de l’activité Consulter les parties prenantes apparaît.]</p>
                        <hr>

                        <h2>8. Choisir une stratégie d’approvisionnement</h2>
                        <p>[Une boîte de texte indique : « 8. Choisir une stratégie d’approvisionnement ». Des crochets apparaissent à côté des mots « Besoins » et « Qui vous devez consulter ».]</p>
                        <p>Vous avez maintenant défini vos besoins et déterminé qui vous devez consulter. Quelle est la prochaine étape? Eh bien, cela dépend du montant en dollars et de la complexité de ce que vous devez acheter.</p>
                        <p>[Un crayon signe un document à côté d’une pile de pièces de monnaie.]</p>
                        <p>Soit vous lancez vous-même l’achat d’approvisionnements de faible valeur en utilisant les instruments dont vous disposez, soit vous travaillez avec votre spécialiste en approvisionnement pour déterminer la stratégie à adopter dans le cas d’achats plus complexes et de plus grande valeur. </p>
                        <p>[Un homme et une femme discutent. Une bulle de dialogue avec un point d’interrogation pointe vers cette dernière.]</p>
                        <p>Peu importe la stratégie d’approvisionnement que vous choisissez, tenez toujours en compte du temps qu’il vous faudra pour terminer le processus d’approvisionnement.</p>
                        <p>[Les aiguilles d’une horloge tournent. La dernière case d’un calendrier est marquée d’un X.]</p>
                        <p>Par exemple, les publications sur le site Achatsetventes.gc.ca doivent être affichées pendant au moins 40 jours, selon le cas, si elles sont assujetties à nos accords commerciaux internationaux. Ou, pour les articles complexes ou coûteux tels que les flottes, le processus peut prendre plus d’un an. Alors, veillez à planifier en conséquence! </p>
                        <p>[La boîte à outils s’affiche.]</p>
                        <p>L'activité suivante vous aidera à rafraîchir vos connaissances sur les stratégies et les instruments d’approvisionnement. La boîte à outils contient également un aide-mémoire intitulé « Instruments d’approvisionnement couramment utilisés ». </p>
                        <p>[Une boîte de texte de l’activité Stratégies et instruments d’approvisionnement - Termes clés apparaît.]</p>
                        <hr>

                        <h2>9. Dans la vraie vie</h2>
                        <p>[Une boîte de texte indique : « 9. Dans la vraie vie ». Un homme et une femme discutent. Une bulle de dialogue avec un symbole de dollar pointe vers l’homme.]</p>
                        <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie! </p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir quelles sont les stratégies d’approvisionnement que vous utiliserez le plus souvent. Trouvez les modèles utilisés par votre ministère et recherchez des exemples d’achats antérieurs à titre indicatif. Cela vous sera utile lorsque viendra le temps pour vous de choisir une stratégie d’approvisionnement.  </p>
                        <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                        <hr>

                        <h2>10. Quiz</h2>
                        <p>[Une boîte de texte indique : « 10. Quiz ». Trois listes de vérification s’affichent.]</p>
                        <p>Maintenant que vous avez vu comment définir vos besoins en biens, en services et en construction, tenir compte des besoins particuliers et décrire ce dont vous avez besoin, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                        <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une main qui écrit sur une feuille. L’écran devient noir.]</p>
                        <p>[Une boîte de texte de l’activité Répondez au quiz apparaît.]</p>
                        <hr>

                        <h2>11. Section complétée</h2>
                        <p>[Texte à l’écran indiquant l’instruction Section complétée.]</p>
                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
        <b-modal no-stacking id="procureLinks" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">  {{$t('Introduction')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <p>{{$t('toolboxTitle')}}</p>
            <div v-if="$i18n.locale=='fr'">
              <div>
                  <ul class="list-unstyled">
                    <li><externalLink link="https://achatsetventes.gc.ca/">Achatsetventes.ca</externalLink></li>
                    <li><externalLink link="https://achatsetventes.gc.ca/applications/Application-sur-les-offres-a-commande-et-arrangements-en-matiere-d-approvisionnement-appli-OCAMA">Application sur les offres à commandes et arrangements en matière d’approvisionnement (Appli OCAMA)</externalLink>
                    <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Fiches_d%27information_sur_les_approvisionnements_-_DPPA">Fiches d'information sur les approvisionnements – GCpédia</externalLink>
                    <li><externalLink link="https://achatsetventes.gc.ca/politiques-et-lignes-directrices/guide-des-approvisionnements/section/1/55/10">Instruments préconcurrentiels d'achat</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=28230">Ligne directrice sur les ententes contractuelles</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32593">Politique sur la planification et la gestion des investissements</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14494">Politique sur les marchés</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14494#appC">Politique sur les marchés, Appendice C – Directive sur les marchés</externalLink></li>
                    <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/">Règlement sur les marchés de l’État (DORS/87-402)</externalLink></li>
                      <ul>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html">Règlement sur les marchés de l’État (DORS/87-402) Partie 1</externalLink></li>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html#h-894217">Règlement sur les marchés de l’État (DORS/87-402) Partie 2</externalLink></li>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/fra/reglements/DORS-87-402/page-2.html#h-894235">Règlement sur les marchés de l’État (DORS/87-402) Partie 3</externalLink></li>
                      </ul>
                  </ul>
                </div>
              </div>
              <div v-if="$i18n.locale=='en'">
                <div>
                  <ul class="list-unstyled">
                    <li><externalLink link="https://buyandsell.gc.ca/">Buyandsell.gc.ca</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14494">Contracting Policy</externalLink>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14494#appC">Contracting Policy, Appendix C – Contracts Directive</externalLink>
                    <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/">Government Contracts Regulations (SOR/87-402)</externalLink></li>
                      <ul>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-4">Government Contracts Regulations (SOR/87-402) – Part 1</externalLink></li>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-905898">Government Contracts Regulations (SOR/87-402) – Part 2</externalLink></li>
                        <li><externalLink link="https://laws-lois.justice.gc.ca/eng/regulations/SOR-87-402/page-2.html#h-905917">Government Contracts Regulations (SOR/87-402) – Part 3</externalLink></li>
                      </ul>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=28230">Guidelines on Contractual Arrangements</externalLink></li>
                    <li><externalLink link="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32593">Policy on the Planning and Management of Investments</externalLink></li>
                    <li><externalLink link="https://buyandsell.gc.ca/policy-and-guidelines/supply-manual/section/1/55/10">Pre-Competed Procurement Instruments</externalLink></li>
                    <li><externalLink link="https://www.gcpedia.gc.ca/wiki/Procurement_Information_Nuggets_-_APPD">Procurement Information Nuggets – GCpedia</externalLink></li>
                    <li><externalLink link="https://buyandsell.gc.ca/applications/standing-offers-and-supply-arrangements-application-SOSA-App">Standing Offers and Supply Arrangements Application (SOSA App)</externalLink></li>
                  </ul>
                </div>
              </div>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="defineNeeds" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('defineNeedsTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <defineNeeds />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="specialNeeds" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('specialNeedsTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <specialNeeds />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="describeNeed" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('describeNeedTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <describeNeed />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="transparentFairProcurement" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">  {{$t('transparentFairProcurementTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <div v-if="$i18n.locale=='fr'">
              <p>Vous voudrez peut-être consulter les comités de vérification interne et d’examen permanent de votre organisation pour obtenir plus d’information.</p>
              <p>Pour en savoir plus sur les organismes d’approvisionnement, n’hésitez pas à consulter les liens suivants. Ces liens sont également présentés dans la boîte à outils.</p>
              <ul>
                <li><a href="http://opo-boa.gc.ca/index-fra.html" target="_blank" alt="Bureau de l’ombudsman de l’approvisionnement">Bureau de l’ombudsman de l’approvisionnement</a></li>
                <li><a href="https://www.citt-tcce.gc.ca/" target="_blank" alt="Tribunal canadien du commerce extérieur">Tribunal canadien du commerce extérieur</a></li>
                <li><a href="https://www.fct-cf.gc.ca/fr/accueil" target="_blank" alt="Cour fédérale">Cour fédérale</a></li>
              </ul>
            </div>
            <div v-if="$i18n.locale=='en'">
              <p>You may want to consult your organization’s own Internal Audit and Standing Review Committees for further information.</p>
              <p>For more information on procurement entities, feel free to consult the following links. These links are also available in the Toolbox.</p>
              <ul>
                <li><a href="http://opo-boa.gc.ca/index-eng.html" target="_blank" alt="Office of the Procurement Ombudsman">Office of the Procurement Ombudsman</a></li>
                <li><a href="https://www.citt-tcce.gc.ca/" target="_blank" alt="Canadian International Trade Tribunal">Canadian International Trade Tribunal</a></li>
                <li><a href="https://www.fct-cf.gc.ca/en/home" target="_blank" alt="Federal Court">Federal Court</a></li>
              </ul>
            </div>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="consultProcurementSpecialist" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">  {{$t('consultProcurementSpecialistTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            {{$t('consultProcurementSpecialistText')}}
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="consultStakeholders" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('consultStakeholdersTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <consultStakeholders />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="procurementStrategy" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('procurementStrategyTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <procurementStrategy />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> 
                {{$t('InRealLifeTitle')}}
            </h3>
            <button type="button" aria-label="Close" class="close" @click="close()">×</button>
          </template>
          <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeWP.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>{{$t('IRLProcurePart1Text')}}</p>
            </b-col>
          </b-row>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <part1Quiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning youAreHere path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="45" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="30" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="procurePart3" size="140" time="30" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="20" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import externalLink from "~/components/externalLink"
import procureLinks from '~/components/procure_links'
import defineNeeds from '~/components/slides/spend/procurePart1DefineNeeds'
import specialNeeds from '~/components/slides/spend/procurePart1SpecialNeeds'
import describeNeed from '~/components/slides/spend/procurePart1DescribeNeed'
import consultStakeholders from '~/components/slides/spend/procurePart1ConsultStakeholders'
import procurementStrategy from '~/components/slides/spend/procurePart1ProcurementStrategy'
import part1Quiz from '~/components/slides/spend/procurePart1Quiz'
export default {
  data() {
    return {
      modalArray: ["procureLinks", "defineNeeds", "specialNeeds", "describeNeed", "transparentFairProcurement", "consultProcurementSpecialist", "consultStakeholders", "procurementStrategy", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    externalLink,
    procureLinks,
    defineNeeds,
    describeNeed,
    specialNeeds,
    consultStakeholders,
    procurementStrategy,
    part1Quiz
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart1
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart1_player',e)
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start;
  counter-reset: episode;
}
#bar > li {
  list-style-type:none;
}
#bar > li > p {
  display: inline-block;
  height:2.6em;
}
/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 200px;
  height: 171px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #7d677d;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}
.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(episode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  display: inline-block;
  width:58px;
}
.playButton:hover, .activityButton:hover,.playButton:focus, .activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity:0.8;
}
.playButton{
  left: 20px;
}
.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
.spendSection {
  position: relative;
}
.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.spendSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "Introduction": "References: External Links",
  "toolboxTitle": "For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "TakeTheQuiz":"Take the Quiz",
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "specialNeedsTitle":"Activity: Special Needs and Other Considerations",
  "defineNeedsTitle":"Activity: Define Your Needs",
  "describeNeedTitle":"Activity: Describe What You Need",
  "transparentFairProcurementTitle": "References: External Links",
  "consultProcurementSpecialistTitle": "Activity: Consult a Procurement Specialist",
  "consultProcurementSpecialistText": "Find out who your procurement specialists are! Consult your department’s delegation chart. Understand what the procurement limits are.",
  "consultStakeholdersTitle": "Activity: Consult Stakeholders",
  "procurementStrategyTitle": "Activity: Procurement Strategies and Instruments – Key Terms",
  "InRealLifeTitle": "In Real Life",
  "IRLProcurePart1Text": "Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to see which procurement strategies you will use the most often. Find the templates your department uses and look up examples of previous purchases. These will help guide you when it comes time for you to choose a procurement strategy.",
  "QuizTitle": "Take the Quiz",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "PROCURE"
  },
  "fr":{
  "Introduction": "Références : Liens externes",
  "toolboxTitle": "Pour plus d’informations, n’hésitez pas à consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "TakeTheQuiz":"Répondez au quiz",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "specialNeedsTitle":"Activité : Besoins particuliers et autres considérations",
  "defineNeedsTitle":"Activité : Définir ses besoins",
  "tryItTitle":"Activité : Essayons-le!",
  "describeNeedTitle":"Activité : Décrire ce dont on a besoin",
  "transparentFairProcurementTitle": "Références : Liens externes",
  "consultProcurementSpecialistTitle": "Activité : Consulter un spécialiste en approvisionnement",
  "consultProcurementSpecialistText": "Découvrez qui sont vos spécialistes en approvisionnement! Consultez le tableau de délégation des pouvoirs de votre ministère. Prenez connaissance des limites d’approvisionnement.",
  "consultStakeholdersTitle": "Activité : Consulter les parties prenantes",
  "procurementStrategyTitle": "Activité : Stratégies et instruments d’approvisionnement – Termes clés",
  "InRealLifeTitle": "Dans la vraie vie",
  "IRLProcurePart1Text": "Appliquez maintenant ce que vous avez appris - dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir quelles sont les stratégies d’approvisionnement que vous utiliserez le plus souvent. Trouvez les modèles utilisés par votre ministère et recherchez des exemples d’achats antérieurs à titre indicatif. Cela vous sera utile lorsque viendra le temps pour vous de choisir une stratégie d’approvisionnement.",
  "QuizTitle": "Répondez au quiz",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "ACHAT"
  }
  }
</i18n>