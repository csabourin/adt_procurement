<template>
  <div>
    <h1 class="pageTitle" v-html="$t('ExerciseFinancialAuthority')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_6wqp7wux/flavorId/0_sbhdujqr/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_eototcwd/flavorId/0_oz3uhiiq/name/a.mp4" chapters chapterFile="SpendPart2.vtt" ccFile="ADT_Module 5_CAPTION.vtt" posterFile="MOD5.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart2" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalParts') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">

                        <h2>1. Introduction</h2>
                        <p>[On a purple background with wavy white lines, a title card reads, “Module 5: Solicit, Evaluate, Approve and Award Competitive Contracts.” A text box reads, “1. Introduction.”] </p>
                        <p>Narrator: In this section you will learn to initiate the solicitation process, evaluate bids and negotiate, and approve and award competitive contracts. </p>
                        <p>[The concepts appear on screen as the narrator speaks, alongside white-outline drawings of a hand holding a magnifying glass, two people in a meeting, and a handshake.] </p>
                        <p>This section should take you approximately 30 minutes to complete. </p>
                        <hr>
                        <h2>2. Prepare Bid Solicitation Documents</h2>
                        <p>[Half of a clock gets filled in above the words, “30 minutes.” A text box reads, “2. Prepare Bid Solicitation Documents.”] </p>
                        <p>Now that you have drafted your requirements and prepared either your statement of work or your statement of requirements and chosen your procurement strategy, what’s next? </p>
                        <p>[The two types of statements appear, each followed by three bubbles. Under Statement of Work, the bubbles are “Deliverables,” “Services,” and “Work.” Under Statement of Requirement, the bubbles are “Problem definition information,” “Initial assessment of risk,” and “Basic financial information.”] </p>
                        <p>The procurement specialist will develop the acquisition strategies needed to satisfy the requirements you provided.  </p>
                        <p>[Arrows of varying sizes point to a bullseye target. Beside a figure of a woman, key words appear on screen as the narrator lists them.] </p>
                        <p>This may include: </p>
                        <ul>
                          <li>preparing the bid solicitation documents, </li>
                          <li>managing the bid evaluation process,</li>
                          <li>evaluating the financial proposals,</li>
                          <li>selecting the suppliers,</li>
                          <li>negotiating the procurement agreements, and </li>
                          <li>formalizing the procurement agreements. </li>
                        </ul>
                        <p>[Text reads, “Examples of solicitation documents.”]</p>
                        <p>But before we jump to the activity... Are you curious to see examples of solicitation documents? Why not visit the buyandsell.gc.ca website!</p>
                        <p>[A hand holds a smartphone. An internet browser displays the Buyandsell webpage.] </p>
                        <p>You will find many examples from various organizations. And don’t forget! You will have a role to play in answering technical questions from potential suppliers during the solicitation process. </p>
                        

                        <hr>

                        <h2>3. Evaluate and Negotiate</h2>
                        <p>[A text box reads, “3. Evaluate and Negotiate.” A document slips into an envelope, which flies away.] </p>
                        <p>The solicitation document has been prepared and distributed. That’s great! Now it’s time for more work!</p>
                        <p>[Above the image of four people in a meeting, text reads, “Technical bids vs. technical evaluation criteria.”] </p>
                        <p>Once the bidding closes, the manager, along with their chosen bid evaluation team, evaluates the technical bids against the established technical evaluation criteria.</p>
                        <p>[A headline reads, “Review criteria.” Key words appear below it as the narrator speaks.] </p>
                        <p>Some examples of this could involve reviewing proposals to determine if bidders meet criteria such as qualifications and years of experience in the field of work or how the proposed bids meet the accessibility requirements and the design specifications.   </p>
                        <p>[The figure of the woman appears, with more key words popping up beside her as the narrator lists them.] </p>
                        <p>The procurement specialist then: </p>
                        <ul>
                          <li>verifies that the bids are complete, </li>
                          <li>sends the technical portion to the manager and the technical team for review,  </li>
                          <li>performs the financial evaluation once the technical evaluation is done, and </li>
                          <li>conducts any negotiations necessary on the manager’s behalf and  </li>
                          <li>applies the selection methodology. </li>
                        </ul>
                        <p>[A document is titled “Modern Treaties.”] </p>
                        <p>For processes that fall within modern treaties, Comprehensive Land Claims Agreements, or the Treasury Board Directive on Government Contracts, including Real Property Leases, in the Nunavut Settlement Area, the evaluation of Indigenous benefits criteria may be considered as part of the bids. </p>
                        <p>[A question mark pops up inside a lightbulb.] </p>
                        <p>Did you know that communicating with a supplier during a competitive process, other than through bidders’ conferences and requests for information, could be seen as favouritism or creating an unfair advantage? So, avoid communication with suppliers during a competitive process. Send them to your contract authority instead!</p>
                        <p>[On a smartphone screen, the word “Supplier” is crossed out. An arrow points to the words “Contract Authority.”] </p>
                        <p>The following exercise will help you confirm your knowledge of the evaluation and negotiation phase. </p>
                        <p>[A toolbox is labelled “Job Aids.”] </p>
                        <p> For more information on the bid evaluation team, see the job aid in the Toolbox. </p>
                        <hr>
                        <h4>4. Contract Approval</h4>
                        <p>[A textbox reads, “4. Contract Approval.”] </p>
                        <p>Once a bidder has been selected based on their ability to satisfy the requirement, procurement specialists will seek to have the contract approved.  </p>
                        <p>[Five figures stand in a line. A giant hand picks up one of them, whose arms wave in triumph. A list appears beside the image as the narrator recites the bullet points.] </p>
                        <p>This involves, when appropriate,  </p>
                        <ul>
                          <li>having the contract reviewed by peers or legal services,  </li>
                          <li>a cost-analysis review, </li>
                          <li>a risk review if the requirement changed, </li>
                          <li>a quality assurance review,  </li>
                          <li>and possibly an approval by a contract review and approval committee, or Treasury Board.  </li>
                        </ul>
                        <p>[The words “Contract signatures” hang above two pens signing documents.] </p>
                        <p>Once this process is completed, the procurement specialist sends out the contract documents for signature by the delegated transaction authority or contracting authority in your organization and then the supplier.  </p>
                        <p>[“Delegated transaction authority/contracting authority” appears below the first signed document, and “Supplier” under the second.] </p>
                        <p>In many cases, the procurement officer is the delegated transaction authority or contracting authority who signs the contract. </p>
                        <p>[A man’s speech bubble is filled with a question mark.] </p>
                        <p>Are you wondering who will approve the contract? The following activity will help you identify the individuals with the signing authority. </p>
                        <hr>
                        <h2>5. Contract Award</h2>
                        <p>[A text box reads, “5. Contract Award.” Three people shake hands with a man. An award ribbon hangs above them.] </p>
                        <p>Following contract approval, the procurement specialist will award the contract. Depending on the contract’s value, the specialist may send regret letters to unsuccessful bidders and post a contract award notice on PSPC’s Buyandsell.gc.ca/tenders site to inform the public of the successful bidder.  </p>
                        <p>[The Buyandsell webpage reappears with the headline “Contract award notice” above it. Four people sit around a conference table.] </p>
                        <p>Debriefings are provided to unsuccessful bidders on request and should normally include an outline of the factors and criteria used in the evaluation. They are typically led by the procurement specialist, while you play the supporting role of answering technical evaluation questions. </p>
                        <p>[A figure of a woman appears. Beside her are the words “Bid evaluation” and “Bid score” with checkmarks beside them.] </p>
                        <p>The only information provided to the bidder is the evaluation of its bid and the score its bid received. Proposal information on any other bidder must not be divulged. </p>
                        
                        <hr>
                        <h2>6. In Real Life</h2>
                        <p>[The words “Other bidder proposal information” pops up below the other text. This line has an X beside it. On the purple background, a text box reads, “6. In Real Life.”] </p>
                        <p>Take what you have learned into real life! </p>
                        <p>[A man and woman talk. A speech bubble leading from his mouth has a dollar sign in it.] </p>
                        <p>Your organization will have its own ways of doing things. Take some time out from the course to see how the solicitation process works in your department. Maybe your organization has an intranet page on procurement? Or maybe your procurement specialists have the templates that you need? Looking at previously prepared solicitation documents can sometimes help. And don’t forget to check the Toolbox for a Job Aid on the procurement process! </p>
                        <hr>
                        <h2>7. Quiz</h2>
                        <p>[A text box reads, “7. Quiz.” Three images appear side by side: a hand holding a magnifying glass; two people in a meeting, and a handshake.] </p>
                        <p>Now that you have seen how to initiate the solicitation process, evaluate bids and negotiate, and approve and award competitive contracts, let’s see what you remember by taking this short quiz. </p>
                        <p>[The words “Take the quiz!” appear beside a hand writing on a page. The video fades to black.] </p>
                        <hr>
                        <h2>5. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Introduction</h2>
                        <p>[Sur un fond mauve avec des lignes blanches ondulées, le titre « Module 5 : Solliciter, évaluer, approuver et accorder des contrats concurrentiels » s’affiche. Une boîte de texte indique : « 1. Introduction ».]</p>
                        <p>Narratrice : Dans la présente section, vous apprendrez </p>
                        <ul>
                          <li>à lancer le processus de demande de soumissions, </li>
                          <li>à évaluer les offres et à négocier  </li>
                          <li>ainsi qu’à approuver et à accorder des contrats concurrentiels. </li>
                        </ul>
                        <p>[Les énoncés prononcés par la narratrice s’affichent à l’écran pendant qu’elle parle. À leur droite, des dessins faits de lignes blanches apparaissent l’un après l’autre : une main tenant une loupe, deux personnes en réunion et une poignée de main.]</p>
                        <p>Il vous faudra environ 30 minutes pour effectuer cette section.</p>
                        <p>[La moitié d’une horloge est remplie au-dessus des mots « 30 minutes ». Une boîte de texte indique : « 2. Préparer les documents de demande de soumissions ».]</p>
                        
                        <hr>

                        <h2>2. Préparer les documents de demande de soumissions</h2>
                        <p>Maintenant que vous avez déterminé vos besoins, préparé votre énoncé de travail ou votre énoncé des besoins et choisi votre stratégie d’approvisionnement, quelle est la prochaine étape? </p>
                        <p>[Les deux types d’énoncés s’affichent au-dessus de trois bulles chacun. En dessous d’« Énoncé de travail », les bulles contiennent les mots « Livrables », « Services » et « Travaux ». En dessous d’« Énoncé des besoins », les bulles contiennent les mots « Définition d’un problème », « Évaluation initiale du risque » et « Informations financières de base ».]</p>
                        <p>Le spécialiste en approvisionnement élaborera les stratégies d’acquisition nécessaires pour satisfaire aux exigences que vous avez fournies.</p>
                        <p>[Des flèches de différentes tailles pointent vers une cible. À côté de la silhouette d’une femme, des mots clés apparaissent à l’écran à mesure que la narratrice les prononce.]</p>
                        <p>Les réponses peuvent inclure : </p>
                        <ul>
                          <li>préparer les documents de demande de soumissions; </li>
                          <li>gérer le processus d’évaluation des soumissions;</li>
                          <li>évaluer les propositions financières; </li>
                          <li>sélectionner les fournisseurs; </li>
                          <li>négocier les ententes d’approvisionnement; </li>
                          <li>officialiser les ententes d’approvisionnement. </li>
                        </ul>
                        <p>[Un encadré contient le texte suivant : « Exemples de documents de demande de soumissions ».]</p>
                        <p>Mais avant de passer à l’activité… Êtes-vous curieux de voir des exemples de documents de demande de soumissions? Pourquoi ne pas visiter le site Web Achatsetventes.gc.ca!</p>
                        <p>[Une main tient un téléphone intelligent. Une image d’un navigateur Internet montre la page Web « Achatsetventes ».]</p>
                        <p>Vous y trouverez de nombreux exemples provenant de diverses organisations. Et n’oubliez pas: vous aurez un rôle à jouer pour répondre aux questions techniques des fournisseurs potentiels pendant le processus de demande.</p>
                        <p>[Une boîte de texte indique : « 3. Évaluer et négocier ». Un document glisse dans une enveloppe qui s’envole ensuite.]</p>
                        
                        <hr>

                        <h2>3. Évaluer et négocier</h2>
                        <p>Le document d’invitation à soumissionner a été préparé et distribué. C’est très bien! Passons maintenant à d’autres tâches. </p>
                        <p>[Au-dessus d’une image représentant quatre personnes en réunion, il est écrit : « Soumissions techniques par rapport aux critères d’évaluation techniques ».]</p>
                        <p>Une fois les soumissions déposées, le gestionnaire, avec l’équipe d’évaluation des offres choisie, évalue les soumissions techniques par rapport aux critères d’évaluation techniques établis.</p>
                        <p>[L’image glisse vers le haut de l’écran et les mots « Critères d’évaluation » s’affichent en dessous. Des mots clés apparaissent pendant que la narratrice parle.]</p>
                        <p>Par exemple, on pourrait examiner des propositions pour déterminer si les soumissionnaires satisfont à des critères tels que les qualifications et les années d’expérience dans le domaine de travail ou comment les offres proposées satisfont aux exigences d’accessibilité et aux normes de conception.</p>
                        <p>[La silhouette de la femme revient et d’autres mots clés s’affichent à côté d’elle à mesure que la narratrice les énumère.]</p>
                        <p>Ensuite, le spécialiste en approvisionnement </p>
                        <ul>
                          <li>vérifie que les soumissions sont complètes, </li>
                          <li>envoie la partie technique au gestionnaire et à l’équipe technique pour examen, </li>
                          <li>effectue l’évaluation financière une fois l’évaluation technique terminée, </li>
                          <li>mène les négociations nécessaires au nom du gestionnaire </li>
                          <li>et applique la méthode de sélection. </li>
                        </ul>
                        <p>[Un document intitulé « Traités modernes » se dessine.]</p>
                        <p>Pour les processus qui relèvent des traités modernes, comme les ententes sur des revendications territoriales globales, ou de la Directive sur les marchés de l’État, incluant les baux immobiliers, dans la région du Nunavut, l’évaluation des critères des avantages pour les Autochtones peut être considérée comme faisant partie des soumissions. </p>
                        <p>[Une ampoule contenant un point d’interrogation apparaît.]</p>
                        <p>Saviez-vous que communiquer avec un fournisseur pendant un processus concurrentiel, autrement que par des réunions de soumissionnaires et des appels d’intérêt, pourrait être considéré comme du favoritisme ou comme une action créant un avantage indu? Évitez donc de communiquer avec les fournisseurs lors d’un processus concurrentiel. Renvoyez-les plutôt à l’autorité chargée du contrat!  </p>
                        <p>[Sur l’écran d’un téléphone intelligent, le mot « Fournisseur » est marqué d’un X. En dessous, une flèche pointe vers les mots « Autorité chargée du contrat ».]</p>
                        <p>L’exercice qui suit vous aidera à évaluer vos connaissances de la phase d’évaluation et de négociation. </p>
                        <p>[Un dessin d’une boîte à outils s’affiche.]</p>
                        <p>Pour obtenir plus d’informations sur l’équipe d’évaluation des soumissions, consultez l’aide‑mémoire dans la boîte à outils. </p>
                        <p>[Une boîte de texte indique : « 4. Approbation de contrat ».]</p>
                        <hr>
                        
                        <h2>4. Approbation de contrat</h2>
                        <p>Une fois qu’un soumissionnaire aura été choisi en fonction de sa capacité à satisfaire à l’exigence, le spécialiste en approvisionnement demandera l’approbation du contrat. Cela comprend, au besoin   </p>
                        <p>[Cinq silhouettes se tiennent côte à côte. Une main géante soulève l’une d’entre elles, laquelle lève les bras en signe de triomphe. À côté de l’image, une liste apparaît à mesure que la narratrice en énumère les points.]</p>
                        <ul>
                          <li>l’examen du contrat par des pairs ou des services juridiques,  </li>
                          <li>une revue de l’analyse des coûts, </li>
                          <li>un examen des risques si le besoin a changé, </li>
                          <li>un examen de l’assurance qualité </li>
                          <li>et, le cas échéant, l’approbation par un comité d’examen et d’approbation des contrats, ou par le Conseil du Trésor.  </li>
                        </ul>
                        <p>[Les mots « Signatures de contrat » s’affichent au-dessus de deux documents signés.]</p>
                        <p>Une fois ce processus terminé, le spécialiste en approvisionnement envoie les documents du contrat à l’autorité responsable ayant le pouvoir d’exécuter une opération ou l’autorité contractante de votre organisation, puis au fournisseur.</p>
                        <p>[Les mots « Autorité responsable ayant le pouvoir d’exécuter/autorité contractante » apparaissent en dessous du premier document signé et le mot « Fournisseur » apparaît en dessous du second.]</p>
                        <p>Dans bien des cas, l’agent d’approvisionnement détient le pouvoir délégué en matière de transactions ou est l’autorité contractante et signe le contrat. </p>
                        <p>[La bulle de dialogue d’un homme contient un point d’interrogation.]</p>
                        <p>Vous vous demandez qui approuvera le contrat? L’activité suivante vous aidera à reconnaître les personnes ayant le pouvoir de signer. </p>
                        <p>[Une boîte de texte indique : « 5. Attribution du contrat ». Trois personnes serrent la main d’un homme. Un ruban de récompense se tient au-dessus d’eux.]</p>
                        
                        <hr>

                        <h2>5. Attribution du contrat</h2>
                        <p>Après l’approbation du contrat, le spécialiste en approvisionnement accordera le contrat. Selon la valeur de ce dernier, le spécialiste peut envoyer des lettres de refus aux soumissionnaires non retenus et afficher un avis d'attribution de contrat sur le site Achatsetventes.gc.ca/appels-d-offres de SPAC pour informer le public du soumissionnaire retenu.  </p>
                        <p>[La page Web « Achatsetventes » s’affiche de nouveau sous les mots « Avis d’attribution de contrat ». Quatre personnes sont assises autour d’une table de réunion.]</p>
                        <p>Des séances d’information sont offertes sur demande aux soumissionnaires non retenus et devraient normalement comprendre un aperçu des facteurs et des critères utilisés dans l’évaluation. Elles sont généralement dirigées par le spécialiste en approvisionnement, tandis que vous jouez un rôle de soutien en répondant aux questions d’évaluation technique. </p>
                        <p>[La silhouette de la femme réapparaît. À sa droite, les mots « Évaluation de son offre » et « Note à l’offre » sont accompagnés d’un crochet.]</p>
                        <p>La seule information fournie au soumissionnaire est l’évaluation de son offre et la note accordée à celle-ci. Les renseignements sur les autres soumissionnaires ne doivent pas être divulgués. </p>
                        <p>[Les mots « Renseignements sur les autres soumissionnaires » suivis d’un X s’affichent en dessous des deux autres énoncés. Une boîte de texte indique : « 6. Dans la vraie vie ».]</p>
                        
                        <hr>

                        <h2>6. Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris dans la vraie vie! </p>
                        <p>[Un homme et une femme discutent. Une bulle de dialogue contenant un symbole de dollar pointe vers l’homme.]</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment le processus de demande de soumissions fonctionne dans votre ministère. Votre organisation possède peut-être une page intranet concernant l’approvisionnement? Ou vos spécialistes en approvisionnement ont peut-être les modèles dont vous avez besoin? L’examen des documents de demande de soumissions préparés par le passé peut parfois aider. Et n’oubliez pas de consulter la boîte à outils où vous trouverez un aide-mémoire sur le processus d’approvisionnement! </p>
                        <p>[Une boîte de texte indique : « 7. Quiz ». Trois images apparaissent côte à côte : une main tenant une loupe, deux personnes en réunion et une poignée de main.]</p>
                        <hr>

                        <h2>7. Quiz </h2>
                        <p>Maintenant que vous avez vu comment lancer le processus de demande de soumissions, évaluer les offres et négocier, ainsi qu’approuver et accorder des contrats concurrentiels, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                        <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une main qui écrit sur une feuille. L’écran devient noir.]</p>
                        <hr>

                        <h2>8. Section complétée</h2>


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
                    <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('Introduction')}}
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
        <b-modal no-stacking id="SolicitationDocs" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CertAuthorityTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <SolicitationDocs />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="EvaluateNegotiate" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AccuracyInvoiceTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <EvaluateNegotiate />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="ContractApproval" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('ProcessInvoiceTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <ContractApproval />
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="ContractAward" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('ContractAwardTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <ContractAward />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
          <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> 
                {{$t('InRealLife')}}
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
              <p>{{$t('IRLProcureText')}}</p>
            </b-col>
          </b-row>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="ProcurePart2Quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <ProcurePart2Quiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning youAreHere path="procurePart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="procurePart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
  import videoPlayer from '~/components/interface/videoPlayer'
  import microlearning from '~/components/microlearning'
  import externalLink from "~/components/externalLink"
  import procureLinks from '~/components/procure_links'
  import SolicitationDocs from '~/components/slides/spend/procurePart2SolicitationDocs'
  import EvaluateNegotiate from '~/components/slides/spend/procurePart2EvaluateNegotiate'
  import ContractApproval from '~/components/slides/spend/procurePart2ContractApproval'
  import ContractAward from '~/components/slides/spend/procurePart2ContractAward'
  import ProcurePart2Quiz from '~/components/slides/spend/procurePart2Quiz'
export default {
  data() {
    return {
      modalArray: ["procureLinks", "SolicitationDocs", "EvaluateNegotiate", "ContractApproval", "ContractAward", "reallife", "ProcurePart2Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    externalLink,
    procureLinks,
    EvaluateNegotiate,
    SolicitationDocs,
    ContractApproval,
    ContractAward,
    ProcurePart2Quiz
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart2
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
      this.$store.commit('currentPlaying/setSpendPart2_player',e)
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
  "CertAuthorityTitle":"Activity: Solicitation Documents – Key Terms",
  "AccuracyInvoiceTitle":"Activity: Evaluate and Negotiate",
  "ProcessInvoiceTitle":"Activity: Contract Approval",
  "ContractAwardTitle":"Activity: Contract Award",
  "InRealLifeTitle":"In Real Life",
  "InRealLife":"In Real Life",
  "IRLProcureText":"Take what you have learned into real life! Your organization will have their own ways of doing things. Take some time out from the course to see how the solicitation process works in your department.",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"Your organization will have their own ways of doing things. Take some time out from the course to see how the solicitation process works in your department.",
  "spendSectionBar": "PROCURE"
  },
  "fr":{
  "Introduction": "Références : Liens externes",
  "TakeTheQuiz":"Répondez au quiz",
  "toolboxTitle": "Pour plus d’informations, n’hésitez pas à consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "CertAuthorityTitle":"Activité : Documents d’invitation à soumissionner – Termes clés",
  "AccuracyInvoiceTitle":"Activité : Évaluer et négocier",
  "ProcessInvoiceTitle":"Activité : Approbation du contrat",
  "ContractAwardTitle":"Activité : Attribution du contrat",
  "InRealLifeTitle":"Dans la vraie vie",
  "InRealLife":"Dans la vraie vie",
  "IRLProcureText":"Appliquez ce que vous avez appris dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment le processus de demande de soumissions fonctionne dans votre ministère.",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "ACHAT"
  }
  }
</i18n>