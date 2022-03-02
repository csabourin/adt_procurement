<template>
  <div>
    <h1 class="pageTitle" v-html="$t('MonitorControlFinances')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_a52nugp3/flavorId/0_p8ncwavu/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_izld0cfg/flavorId/0_yjhcynkc/name/a.mp4"  chapters chapterFile="SpendPart3.vtt" ccFile="ADT_Module 6_CAPTION.vtt" posterFile="MOD6.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
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
                        <p>[On a purple background with wavy white lines, a title card reads, “Module 6: Administer, Pay and Close Out Contract.” A text box reads, “1. Introduction.”] </p>
                        <p>In this section you will learn to administer, pay and close out the contract. </p>
                        <p>[The words “administer,” “pay,” and “close out the contract” appear beside white-outlined drawings of a wrench, coins, and a document.] </p>
                        <p>This section should take you approximately 30 minutes to complete.</p>
                        <hr>
                        <h2>2. Administer the Contract</h2>
                        <p>[Half of a clock is shaded in. A textbox reads, “2. Administer the Contract.”] </p>
                        <p>The contract has been awarded. You might think that your work is done, right? Not so fast! There is still more to do!</p>
                        <p>[A ribbon hangs above an image of a man shaking hands with three people.]</p>
                        <p>With the help of your procurement specialist, you must now administer the contract that you have just awarded. Let’s take a minute to see who does what.</p>
                        <p>[The headline “Administer the contract” hangs above a man and woman, who look over a document.]</p>
                        <p>As the manager, your responsibilities include: </p>
                        <p>[Thought bubbles pop up around a woman. They each fill with one of the key responsibilities as the narrator recites them.] </p>
                        <ul>
                          <li>monitoring the timelines, deliverables, costs, and quality of the work against an agreed-upon work plan and statement of work,</li>
                          <li>ensuring delivery dates are met, </li>
                          <li>ensuring contractors are not treated as employees, </li>
                          <li>attending progress meetings as required,  </li>
                          <li>managing the contract’s expenditures or burn rate,  </li>
                          <li>responding to Access to Information requests and ministerial enquiries, and </li>
                          <li>issuing task authorizations, as required. </li>
                        </ul>
                        <p>As for the procurement specialist, their responsibilities include: </p>
                        <p>[As the narrator speaks, thought bubbles with key phrases pop up around a man.] </p>
                        <ul>
                          <li>supporting the manager in monitoring contract progress and financing, </li>
                          <li>attending progress meetings, as required </li>
                          <li>resolving any disputes, </li>
                          <li>amending the contract as needed, </li>
                          <li>performing contract audits, </li>
                          <li>issuing task authorizations, as needed </li>
                          <li>supporting the manager in monitoring that delivery dates are met, </li>
                          <li>assisting the manager in responding to Access to Information requests and ministerial enquiries, and  </li>
                          <li>overseeing contract termination. </li>
                        </ul>
                        <p>Accessibility should be a consideration throughout the procurement process, not only for employees, but also for contractors. As a manager, you may need to engage with contractors about government-created barriers that they are facing when doing the work.  </p>
                        <p>[The words “Accessibility considerations” are above nine circles with various symbols in them, including a person walking with crutches, a pregnant person pushing a carriage, and an ear with a hearing aid.] </p>
                        <p>Here is a quick exercise to help you determine your responsibilities.</p>
                        <hr>
                        <h2>3. Ensure Records Are Maintained</h2>
                        <p>[A textbox reads, “3. Ensure Records Are Maintained.”] </p>
                        <p>Now that you know who is responsible for what, it’s paperwork time! </p>
                        <p>[The words “Record maintenance” appear above a filing cabinet.] </p>
                        <p>Throughout the contract, you must ensure that records are maintained. You will need to keep information such as quality, quantity and timelines for the goods received or the work to be performed.  </p>
                        <p>Any discrepancies in the work of a contractor to whom a contract has been awarded must also be documented. </p>
                        <p>[The words “quality,” “quantity,” “timelines,” and “discrepancies” pop up beside the filing cabinet.] </p>
                        <p>It is important to maintain records so that you can show that what has been purchased has been delivered or that the work has been completed, and you must verify that the goods or services are in accordance with the contract.</p>
                        <p>[Under the words “Record maintenance,” a hand checks items off a list. Then, two boxes appear on the left side of the screen. A signed contract is on the other side. An equal sign is between the two images.] </p>
                        <p>If you discover inadequate or deficient work, you must advise the procurement specialist immediately so that they can notify the contractor in writing of these deficiencies.  </p>
                        <p>[The words “Advise the procurement specialist immediately” appear beside the boxes and contract.] </p>
                        <p>The written notification from the procurement specialist will remind the contractor of their obligations under the contract and make them aware of the consequences of failing to correct the deficiency within a specific time period. </p>
                        <p>[Under the words “Record maintenance,” a document is sealed in an envelope, which zooms away.] </p>
                        <p>Good contract monitoring and record keeping leads to good contract management, which helps avoid additional costs and delays, difficulties for contractors and additional work. </p>
                        <p>[ Text reads, “Good contract monitoring and record keeping.” An arrow points from these words to text reading “Good contract management,” which has an arrow pointing to “Avoid additional costs, delays and difficulties.”] </p>
                        <p>After all, an ounce of prevention is worth a pound of cure! </p>

                        <hr>
                        <h2>4. Accept Deliverables</h2>
                        <p>[A text box reads, “4. Accept Deliverables.”] </p>
                        <p>Before you pay the contract, there are a few things to do.  </p>
                        <p>[A signed document and a pile of coins appear under the words “Before you pay.” As the narrator speaks, her key points appear in a list.] </p>
                        <p>You must first ensure that the terms and conditions of the contract are met.  </p>
                        <p>You must: </p>
                        <ul>
                          <li>check that the goods, services or construction are of the proper quality and in the right quantity, </li>
                          <li>confirm that the goods were received as ordered,  </li>
                          <li>confirm that the work was performed, and the services or construction were rendered as per contract, and </li>
                          <li>if the deliverable is a report or other product, ensure that it is complete and free of errors. </li>
                        </ul>
                        <p>Then, once you are satisfied with the deliverable, you must ensure that the payment terms are met. Only once this is done can you proceed to paying the contract. </p>
                        <hr>
                        <h2>5. Exercise Certification and Payment Authorities</h2>
                        <p>[A text box reads, “5. Exercise Certification and Payment Authorities.” A page appears with Canada’s coat of arms. The page reads, “Consolidation. Financial Administration Act” in English and French.] </p>
                        <p>As the certification authority under section 34 of the Financial Administration Act, your responsibility is to ensure that: </p>
                        <p> [An itemized list pops up as the narrator speaks.] </p>
                        <ul>
                          <li>the work has been performed,  </li>
                          <li>that the goods supplied or the service or construction rendered are acceptable,  </li>
                          <li>that the deliverables and the invoice are in accordance with the contract.  </li>
                        </ul>
                        <p>With some types of contracts, this responsibility could be a shared with the procurement specialist. </p>
                        <p>You will verify the accuracy of the invoice or claim by checking the following elements: </p>
                        <p>[A list appears on a clipboard as the narrator gives the key points.] </p>
                        <ul>
                          <li>The invoice issued is on or after the date the goods or services or construction have been rendered.</li>
                          <li>The line items claimed on the invoice and amount for each item are accurate: they match the order and are within the contract unit price or per diem, and travel limits. </li>
                          <li>The currency, GST and HST, and all applicable taxes and fees are accurate. </li>
                          <li>The supplier or payee information is accurate, and they are eligible for payment. </li>
                          <li>The amount has not previously been paid. </li>
                        </ul>
                        <p>Then you will determine how the invoice will be paid. </p>
                        <p>[Two arrows point upward on a dollar bill.] </p>
                        <p>Finally, after reviewing the payment request, the financial officer pays the invoice pursuant to section 33 of the Financial Administration Act. </p>
                        <hr>
                        <h2>6. Close Out the Contract</h2>
                        <p>[The Financial Administration Act page reappears. A text box reads, “6. Close Out the Contract.”] </p>
                        <p>Once a contract has been completed, the procurement specialist responsible for the file will close the file. Before closing the file, a review will be conducted to ensure the following: </p>
                        <p>[A contract and a few coins are on a checklist, with a checkmark above them. A magnifying glass hovers over the checklist, and bullet points appear under the words “Closing out review” as the narrator speaks.] </p>
                        <ul>
                          <li>All contractual requirements have been met and the manager has received and accepted all deliverables under the contract. </li>
                          <li>All payments to the contractor and settlement of claims have been made. </li>
                          <li>No outstanding action is required. </li>
                          <li>All reporting requirements have been met. </li>
                          <li>All required documentation is on file. </li>
                          <li>Amendments to finalization of cost, as required, are complete. </li>
                        </ul>
                        <p>Also, if the intellectual property was retained by the Government of Canada, then the appropriate steps need to be taken. </p>
                        <p>[An arrow points from the words “IF intellectual property retained by the Government of Canada” to “appropriate steps need to be taken.” More arrows connect the narrator’s following statements.] </p>
                        <p>If a product has a warranty, the file will remain open for the warranty period. If the file is in audit, it will remain open until the final audit report is filed and accepted. If there is a litigation involving the file, it cannot be closed. </p>
                        <p>A review of any lessons learned, including any audit findings, is also done to improve future procurement activities. </p>
                        <hr>
                        <h2>7. In Real Life</h2>
                        <p>[A text box reads, “7. In Real Life.”] </p>
                        <p>Take what you have learned into real life! </p>
                        <p>[A man and woman talk. A speech bubble comes from his mouth. It is filled with a dollar sign.] </p>
                        <p>Your organization will have their own ways of doing things. Take time out from the course to see how contracts are administered, paid out and closed in your department. And don’t forget to check the Toolbox for a job aid on the procurement process! </p>
                        <hr>
                        <h2>8. Quiz</h2>
                        <p>[A toolbox is labelled “Job Aids.” A text box reads, “8. Quiz.” Three images appear side by side: a wrench, a pile of coins, and a completed checklist.] </p>
                        <p>Now that you have seen how to administer, pay out and close a contract, let’s see what you remember by taking this short quiz. </p>
                        <p>[The words “Take the quiz!” appear beside a hand writing on a page. The video fades to black.] </p>
                        <hr>
                        <h2>9. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Introduction</h2>
                        <p>[Sur un fond mauve avec des lignes blanches ondulées, le titre « Module 6 : Administration, paiement et clôture du contrat » s’affiche. Une boîte de texte indique : « 1. Introduction ».]</p>
                        <p>Narratrice : Dans la présente section, vous apprendrez à administrer, à payer et à clôturer le contrat.  </p>
                        <p>[Les mots « Administrer », « Payer » et « Clôturer le contrat » s’affichent à côté de trois dessins faits de lignes blanches. Ils représentent une clé à fourches, des pièces de monnaie et un document.]</p>
                        <p>Il vous faudra environ 30 minutes pour effectuer cette section. </p>
                        <p>[La moitié d’une horloge est remplie. Une boîte de texte indique : « 2. Administrer le contrat ».]</p>
                        
                        <hr>
                        
                        <h2>2. Administrer le contrat</h2>
                        <p>Le contrat a été accordé. Votre travail est terminé, non? Pas si vite! Vous avez encore du pain sur la planche!</p>
                        <p>[Un ruban de récompense se tient au-dessus d’un homme serrant la main à trois personnes.]</p>
                        <p>Avec l’aide de votre spécialiste en approvisionnement, vous devez maintenant administrer le contrat que vous venez d'accorder. Prenons une minute pour voir qui fait quoi.   </p>
                        <p>[Dans le haut de l’écran, il est écrit : « Administrer le contrat ». En dessous, un homme et une femme examinent un document.]</p>
                        <p>En tant que gestionnaire, vos responsabilités comprennent les suivantes :  </p>
                        <p>[Des bulles de pensée apparaissent autour d’une femme. Chacune d’entre elles contient une des responsabilités nommées par la narratrice.]</p>
                        <ul>
                          <li>surveiller les échéanciers, les produits livrables, les coûts et la qualité des travaux par rapport au plan de travail et à l’énoncé des travaux établis;   </li>
                          <li>veiller à ce que les dates de livraison soient respectées;  </li>
                          <li>veiller à ce que les entrepreneurs ne soient pas traités comme des employés;  </li>
                          <li>assister aux réunions d’étape au besoin;   </li>
                          <li>gérer les dépenses ou le taux d’épuisement des fonds du contrat;   </li>
                          <li>répondre aux demandes d’accès à l’information et aux demandes de renseignements ministériels  </li>
                          <li>et délivrer des autorisations de tâches, au besoin.  </li>
                        </ul>
                        <p>Quant au spécialiste en approvisionnement, ses responsabilités comprennent les suivantes :  </p>
                        <p>[Pendant que la narratrice parle, des bulles de pensée contenant des mots clés apparaissent autour d’un homme.]</p>
                        <ul>
                          <li>appuyer le gestionnaire dans le suivi de l’avancement des contrats et du financement;  </li>
                          <li>assister aux réunions d’étape au besoin;  </li>
                          <li>résoudre les différends;  </li>
                          <li>résoudre les différends;  </li>
                          <li>réaliser des vérifications contractuelles;  </li>
                          <li>délivrer des autorisations de tâches, au besoin;  </li>
                          <li>appuyer le gestionnaire dans le contrôle du respect des dates de livraison;  </li>
                          <li>aider le gestionnaire à répondre aux demandes d’accès à l’information et aux demandes de renseignements ministériels   </li>
                          <li>et superviser la résiliation du contrat.  </li>
                        </ul>
                        <p>L’accessibilité devrait être prise en considération tout au long du processus d’approvisionnement, non seulement pour les employés, mais aussi pour les entrepreneurs. En tant que gestionnaire, vous devrez peut-être discuter avec les entrepreneurs des obstacles créés par le gouvernement auxquels ils se heurtent lorsqu’ils accomplissent le travail.   </p>
                        <p>[Les mots « Considérations d’accessibilité » figurent au-dessus de neuf cercles dans lesquels se trouvent divers symboles, notamment : une personne avec des béquilles, une femme enceinte avec une poussette et une oreille avec un appareil auditif.]</p>
                        <p>Voici une petite activité pour vous aider à déterminer vos responsabilités. </p>
                        <p>[Une boîte de texte indique : « 3. Tenir des dossiers ».]</p>
                        
                        <hr>

                        <h2>3. Tenir des dossiers </h2>
                        <p>Maintenant que vous savez qui fait quoi, passons à la paperasse!</p>
                        <p>[Un classeur se dessine en dessous des mots « Tenue des dossiers ».]</p>
                        <p>Tout au long du contrat, vous devez tenir des dossiers. Vous devez conserver des informations comme la qualité, la quantité et les délais relativement aux biens reçus ou aux travaux à effectuer. Tout écart dans les travaux d’un entrepreneur à qui un contrat a été accordé doit également être consigné.  </p>
                        <p>[Les mots « Qualité », « Quantité », « Délais » et « Écarts » s’affichent à gauche du classeur.]</p>
                        <p>Il est important de tenir des dossiers afin de montrer que ce qui a été acheté a été livré ou que le travail a été terminé, et vous devez vérifier que les biens ou les services sont conformes au contrat.    </p>
                        <p>[Toujours en dessous des mots « Tenue des dossiers », une main coche les éléments d’une liste. Deux boîtes apparaissent ensuite à la gauche de l’écran. Un contrat signé est à droite. Un signe égal se trouve entre les deux dessins.]</p>
                        <p>Si vous découvrez que le travail est inadéquat ou insuffisant, vous devez immédiatement en aviser le spécialiste en approvisionnement afin qu’il puisse en aviser l’entrepreneur par écrit.</p>
                        <p>[Les mots « Immédiatement en aviser le spécialiste en approvisionnement » s’affichent à la gauche des boîtes et du contrat.]</p>
                        <p>L’avis écrit du spécialiste en approvisionnement rappellera à l’entrepreneur ses obligations en vertu du contrat et l’informera des conséquences de ne pas corriger l’écart dans un délai précis.</p>
                        <p>[En dessous des mots « Tenue des dossiers », un document est scellé dans une enveloppe, qui glisse ensuite en dehors de l’écran.]</p>
                        <p>Un bon suivi des contrats et une bonne tenue des dossiers entraînent à une bonne gestion des contrats, ce qui permet d’éviter des coûts et des retards supplémentaires, des difficultés pour les entrepreneurs et davantage de travail.  </p>
                        <p>[À l’écran, il est écrit : « Bon suivi des contrats et bonne tenue des dossiers ». De ces mots pointe une flèche vers un autre énoncé : « Bonne gestion des contrats ». Une autre flèche pointe de ce dernier vers « Éviter des coûts supplémentaires, des retards et des difficultés ».]</p>
                        <p>Après tout, mieux vaut prévenir que guérir! </p>
                        <p>[Une boîte de texte indique : « 4. Accepter les livrables ».]</p>
                        
                        <hr>

                        <h2>4. Accepter les livrables </h2>
                        <p>Avant d’effectuer le paiement du contrat, vous devez accomplir quelques tâches. En premier lieu, il faut vous assurer que les modalités du contrat ont été respectées. Vous devez :</p>
                        <p>[Un document signé et une pile de pièces de monnaie se dessinent en dessous des mots « Avant d’effectuer le paiement ». Les points que la narratrice énumère apparaissent à l’écran pendant qu’elle parle.]</p>
                        <ul>
                          <li>vérifier que la qualité et la quantité des biens, des services ou de la construction sont adéquates;  </li>
                          <li>confirmer que les biens reçus correspondent à ceux qui ont été commandés;   </li>
                          <li>confirmer que la construction ou les travaux ont été exécutés ou que les services ont été fournis conformément au contrat;  </li>
                          <li>si le produit livrable est un rapport ou un autre produit, vous assurer qu’il est complet et exempt d’erreurs.  </li>
                        </ul>
                        <p>Une fois que vous êtes satisfait du produit livrable, vous devez vous assurer du respect des modalités de paiement. Ce n’est qu’une fois cette tâche effectuée que vous pourrez procéder au paiement du contrat. </p>
                        <p>[Une boîte de texte indique : « 5. Exercice des pouvoirs d’attestation et de payer ».]</p>
                        
                        <hr>
                        <h2>5. Exercice des pouvoirs d’attestation et de payer</h2>
                        <p>[Une page avec les armoiries du Canada apparaît. Il y est écrit, en français et en anglais : « Codification. Loi sur la gestion des finances publiques ».]</p>
                        <p>En tant que détenteur du pouvoir d’attestation en vertu de l’article 34 de la Loi sur la gestion des finances publiques, vous avez la responsabilité de vous assurer</p>
                        <p>[Une liste à puces s’affiche pendant que la narratrice parle.]</p>
                        <ul>
                          <li>que les travaux ont été exécutés,   </li>
                          <li>que les biens fournis, que la construction effectuée ou que les services rendus sont acceptables   </li>
                          <li>et que les produits livrables et la facture sont conformes au contrat.   </li>
                        </ul>
                        <p>Pour certains types de contrats, cette responsabilité pourrait être partagée avec le spécialiste en approvisionnement.  </p>
                        <p>Vous devrez vérifier l’exactitude de la facture ou de la demande de paiement en confirmant les points suivants. </p>
                        <p>[Une liste s’affiche sur une planchette à pince pendant que la narratrice énumère les principaux points.]</p>
                        <ul>
                          <li>La date de la facture est la date à laquelle les biens ont été livrés, les services rendus ou la construction réalisée, ou est une date ultérieure.   </li>
                          <li>Les postes réclamés sur la facture et le montant de chaque article sont exacts : ils correspondent à la commande et sont compris dans le prix unitaire ou le tarif journalier et les limites de déplacement.  </li>
                          <li>La devise, la TPS et la TVH, ainsi que toutes les taxes et tous les frais applicables sont exacts.  </li>
                          <li>Les informations sur le fournisseur ou le créancier sont exactes, et celui-ci est admissible au paiement.   </li>
                          <li>Le montant n’a pas été versé auparavant.  </li>
                        </ul>
                        <p>Vous déterminerez ensuite comment la facture sera payée.  </p>
                        <p>[Deux flèches pointent vers le haut sur un billet de banque.]</p>
                        <p>Enfin, après examen de la demande de paiement, l’agent financier paie la facture conformément à l’article 33 de la Loi sur la gestion des finances publiques. </p>
                        <p>[La page de la Loi sur la gestion des finances publiques s’affiche de nouveau. Une boîte de texte indique : « 6. Clôture du contrat ».]</p>
                        
                        <hr>

                        <h2>6. Clôture du contrat </h2>
                        <p>Une fois le contrat terminé, le spécialiste en approvisionnement responsable du dossier le ferme. Avant la fermeture du dossier, un examen est effectué afin de s'assurer de ce qui suit.  </p>
                        <p>[Un contrat et quelques pièces de monnaie figurent sur une liste de vérification et un crochet est placé au-dessus d’eux. Une loupe se dessine par-dessus la liste de vérification, qui disparaît pour laisser place à des puces sous les mots « Examen de fermeture ». Pendant ce temps, la narratrice parle.]</p>
                        <ul>
                          <li>Toutes les exigences contractuelles ont été respectées et le gestionnaire a reçu et accepté toutes les prestations prévues au contrat.  </li>
                          <li>Tous les paiements à l’entrepreneur et le règlement des demandes de paiement ont été effectués.  </li>
                          <li>Aucune mesure en suspens n’est requise.  </li>
                          <li>Toutes les exigences en matière de rapports ont été respectées.  </li>
                          <li>Toute la documentation requise figure au dossier.  </li>
                          <li>Les modifications apportées pour établir le coût final, le cas échéant, sont terminées.  </li>
                        </ul>
                        <p>De plus :  </p>
                        <p>Si la propriété intellectuelle a été conservée par le gouvernement du Canada, les mesures appropriées doivent être prises.  </p>
                        <p>[Une flèche pointe des mots « Si la propriété intellectuelle a été conservée par le gouvernement du Canada » vers « les mesures appropriées doivent être prises ». D’autres flèches relient les énoncés prononcés par la narratrice.]</p>
                        <ul>
                          <li>Si un produit est assorti d’une garantie, le dossier demeure ouvert pendant la période de garantie.  </li>
                          <li>Si le dossier est en vérification, il demeurera ouvert jusqu’à ce que le rapport de vérification final soit déposé et accepté.  </li>
                          <li>S’il y a un litige concernant le dossier, celui-ci ne peut être clôturé.  </li>
                        </ul>
                        <p>Un examen de toutes les leçons apprises, y compris les conclusions de la vérification, est également effectué pour améliorer les futures activités d’approvisionnement. </p>
                        <p>[Une boîte de texte indique : « 7. Dans la vraie vie ».]</p>
                        
                        <hr>
                        <h2>7. Dans la vraie vie</h2>
                        <p>Appliquez ce que vous avez appris dans la vraie vie!  </p>
                        <p>[Un homme et une femme discutent. Une bulle de dialogue contenant un symbole de dollar pointe vers l’homme.]</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment les contrats sont administrés, payés et clôturés au sein de votre ministère. Et n’oubliez pas de consulter la boîte à outils où vous trouverez un aide-mémoire sur le processus d’approvisionnement! </p>
                        <p>[Un dessin d’une boîte à outils s’affiche. Une boîte de texte indique : « 8. Quiz ».]</p>
                        <hr>
                        <h2>8. Quiz </h2>
                        <p>[Trois images apparaissent côte à côte : une clé à fourches, une pile de pièces de monnaie et une liste de vérification remplie.]</p>
                        <p>Maintenant que vous avez vu comment administrer, payer et clôturer un contrat, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                        <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une main qui écrit sur une feuille. L’écran devient noir.]</p>
                        <h2>9. Section complétée</h2>
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
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('Introduction')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <p>{{$t('part3IntroductionText')}}</p>
        <hr>
        <windowPortal :open="openChart" @close="openChart = false">
          <delegAutorityEn v-if="$i18n.locale=='en'" />
          <delegAutorityFr v-if="$i18n.locale=='fr'" />
        </windowPortal>
        <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="AdministerContract" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AdministerContractTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <AdministerContract />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="RecordsMaintained" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('RecordsMaintainedTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <RecordsMaintained />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="AcceptDeliverables" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AcceptDeliverablesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <AcceptDeliverables />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="CertificationPaymentAuthorities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CertificationPaymentAuthoritiesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <CertificationPaymentAuthorities />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="CloseOutContract" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CloseOutContractTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <CloseOutContract />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('IRLtext')}}
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
              <p>{{$t('IRLProcurePart3Text')}}</p>
            </b-col>
          </b-row>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="procurePart3Quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <procurePart3Quiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning youAreHere path="procurePart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import delegAutorityEn from "~/components/delegationChart/delegchart_en"
import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
import windowPortal from "~/components/newWindow"
import AdministerContract from '~/components/slides/spend/procurePart3AdministerContract'
import RecordsMaintained from '~/components/slides/spend/procurePart3RecordsMaintained'
import AcceptDeliverables from '~/components/slides/spend/procurePart3AcceptDeliverables'
import CertificationPaymentAuthorities from '~/components/slides/spend/procurePart3ECPA'
import CloseOutContract from '~/components/slides/spend/procurePart3CloseOutContract'
import procurePart3Quiz from '~/components/slides/spend/procurePart3Quiz'
import Language_icon from '../components/icons/language_icon.vue'
export default {
  data() {
    return {
      openChart: false,
      modalArray: ["Introduction", "AdministerContract", "RecordsMaintained", "AcceptDeliverables", "CertificationPaymentAuthorities", "CloseOutContract", "InRealLife", "procurePart3Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    delegAutorityEn,
    delegAutorityFr,
    windowPortal,
    AdministerContract,
    RecordsMaintained,
    AcceptDeliverables,
    CertificationPaymentAuthorities,
    CloseOutContract,
    procurePart3Quiz,
    Language_icon
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
      this.$store.commit('currentPlaying/setSpendPart3_player',e)
    }
  }
}

</script>
<style scoped>
.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "Introduction": "References: External Links",
  "part3IntroductionText": "For more information, feel free to consult the following document. This document is also available in the Toolbox.",
  "documentText": "Document",
  "openChartButton": "Open the delegation of spending and financial signing authorities chart",
  "TakeTheQuiz":"Take the Quiz",
  "RecordsMaintainedTitle":"Activity: Ensure Records Are Maintained",
  "AdministerContractTitle":"Activity: Administer the Contract",
  "AcceptDeliverablesTitle":"Activity: Accept Deliverables",
  "CertificationPaymentAuthoritiesTitle": "Activity: Exercise Payment Authority",
  "CloseOutContractTitle": "Activity: Close Out the Contract",
  "IRLtext": "In Real Life",
  "IRLProcurePart3Text": "Take what you have learned into real life! Your organization will have their own ways of doing things. Take time out from the course to see how contracts are administered, paid out and closed in your department. And don’t forget to check the Toolbox for a job aid on the procurement process!",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "PROCURE"
  },
  "fr":{
  "Introduction": "Référence : Liens externes",
  "part3IntroductionText": "Pour plus d’informations, n’hésitez pas à consulter le document suivant. Il est également disponible dans la boîte à outils.",
  "documentText": "Document",
  "openChartButton": "Ouvrir le tableau de délégation des pouvoirs de dépenser et de signer des documents financiers",
  "TakeTheQuiz":"Répondez au quiz",
  "RecordsMaintainedTitle":"Activité : Assurer la tenue des dossiers",
  "AdministerContractTitle":"Activité : Administrer le contrat",
  "AcceptDeliverablesTitle":"Activité : Accepter les livrables",
  "YearEndProceduresTitle":"Activité : Accepter les produits livrables",
  "CertificationPaymentAuthoritiesTitle": "Activité :  Exercice du pouvoir de paiement",
  "CloseOutContractTitle": "Activité : Clôture de contrat",
  "IRLtext": "Dans la vraie vie",
  "IRLProcurePart3Text": "Appliquez ce que vous avez appris dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment les contrats sont administrés, payés et clôturés au sein de votre ministère. Et n’oubliez pas de consulter la boîte à outils pour obtenir un aide-mémoire sur le processus d’approvisionnement!",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "ACHAT"
  }
  }
</i18n>
