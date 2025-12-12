window.QUIZ_DB.push({
    id: "droit",
    name: "Vie Adulte & Droit",
    levels: [
        {
            id: "dro_l2", name: "Citoyen", difficulty: 2,
            questions: [
                // --- Tes questions existantes ---
                { id: "dro201", q: "Que signifie CDD ?", options: ["Contrat Durée Déterminée", "Contrat De Droit"], a: 0, exp: "C'est un contrat de travail avec une date de fin précise, contrairement au CDI." },
                { id: "dro202", q: "Le salaire Net est...", options: ["Ce que l'entreprise paie", "Ce que je reçois sur mon compte"], a: 1, exp: "Le Net est ce qu'il reste dans ta poche après prélèvement des charges sociales sur le Brut." },

                // --- Nouvelles questions (Niveau 2 - Bases) ---
                { id: "dro203", q: "Quel est l'âge légal pour voter en France ?", options: ["16 ans", "18 ans", "21 ans"], a: 1, exp: "La majorité civile et électorale est fixée à 18 ans." },
                { id: "dro204", q: "Que signifie le sigle SMIC ?", options: ["Salaire Minimum Interprofessionnel de Croissance", "Salaire Moyen d'Intérêt Commun", "Service Minimum"], a: 0, exp: "C'est le salaire horaire minimum légal en dessous duquel il est interdit de payer un salarié." },
                { id: "dro205", q: "Qu'est-ce que la TVA ?", options: ["Une taxe sur les vieux", "Taxe sur la Valeur Ajoutée", "Taxe Volontaire Annuelle"], a: 1, exp: "C'est un impôt indirect payé par les consommateurs sur presque tous les produits et services (souvent 20%)." },
                { id: "dro206", q: "À quoi sert une Carte Vitale ?", options: ["À payer ses impôts", "À être remboursé de ses soins médicaux", "À voyager"], a: 1, exp: "Elle transmet électroniquement les feuilles de soins à la Sécurité Sociale." },
                { id: "dro207", q: "Combien de points possède un permis de conduire complet ?", options: ["6 points", "10 points", "12 points"], a: 2, exp: "Un permis confirmé a 12 points. Le permis probatoire (jeune conducteur) commence à 6." },
                { id: "dro208", q: "Qu'est-ce qu'un 'Bail' en immobilier ?", options: ["Un contrat de location", "Une caution", "Une facture"], a: 0, exp: "Le bail est le contrat officiel qui lie le propriétaire et le locataire." },
                { id: "dro209", q: "Qui est le chef de l'administration d'une commune ?", options: ["Le Préfet", "Le Maire", "Le Député"], a: 1, exp: "Le Maire, élu par le conseil municipal, gère le budget et les services de la ville." },
                { id: "dro210", q: "Quel document est obligatoire pour voyager hors de l'UE ?", options: ["Carte d'identité", "Passeport", "Permis de conduire"], a: 1, exp: "La carte d'identité suffit souvent en Europe, mais le passeport est indispensable pour le reste du monde." },
                { id: "dro211", q: "À quoi sert le '17' au téléphone ?", options: ["Les Pompiers", "Le SAMU", "Police Secours"], a: 2, exp: "17 = Police/Gendarmerie. 18 = Pompiers. 15 = SAMU. 112 = Urgence Européenne." },
                { id: "dro212", q: "Le vote est-il obligatoire en France ?", options: ["Oui, sous peine d'amende", "Non, c'est un droit et un devoir moral", "Seulement pour les Présidentielles"], a: 1, exp: "L'abstention n'est pas sanctionnée pénalement en France (contrairement à la Belgique par exemple)." }
            ]
        },
        {
            id: "dro_l3", name: "Contribuable", difficulty: 3,
            questions: [
                // --- Nouvelles questions (Niveau 3 - Intermédiaire) ---
                { id: "dro301", q: "Qu'est-ce que le 'Prélèvement à la source' ?", options: ["L'impôt est pris directement sur le salaire", "On paie l'impôt un an plus tard", "Une taxe sur l'eau"], a: 0, exp: "L'impôt sur le revenu est désormais déduit automatiquement de votre fiche de paie chaque mois." },
                { id: "dro302", q: "Quelle est la différence entre un locataire et un propriétaire ?", options: ["Aucune", "Le propriétaire possède le logement, le locataire paie pour l'habiter", "Le locataire paie la taxe foncière"], a: 1, exp: "Seul le propriétaire paie la taxe foncière et les gros travaux. Le locataire paie le loyer et la taxe d'habitation (selon les cas)." },
                { id: "dro303", q: "Que signifie 'PACS' ?", options: ["Pacte Civil de Solidarité", "Plan d'Action Contre le Stress", "Participation Commune Sociale"], a: 0, exp: "C'est une union civile entre deux personnes (surtout pour les impôts et la vie commune), plus souple que le mariage." },
                { id: "dro304", q: "Quelle est la durée de validité d'un chèque bancaire ?", options: ["1 mois", "6 mois", "1 an et 8 jours"], a: 2, exp: "Passé ce délai, la banque peut refuser de l'encaisser." },
                { id: "dro305", q: "En cas d'accident de voiture, combien de temps as-tu pour envoyer le constat ?", options: ["24 heures", "5 jours ouvrés", "1 mois"], a: 1, exp: "Il faut le transmettre à son assureur dans les 5 jours ouvrés après l'accident." },
                { id: "dro306", q: "Qu'est-ce qu'un RIB ?", options: ["Relevé d'Identité Bancaire", "Reste Idéal Brut", "Registre International Bancaire"], a: 0, exp: "Il contient l'IBAN et le BIC, nécessaires pour faire ou recevoir des virements." },
                { id: "dro307", q: "Lors d'une démission, qu'est-ce que le 'préavis' ?", options: ["Une lettre d'excuse", "La période à travailler avant de partir", "Une indemnité"], a: 1, exp: "C'est le délai obligatoire (souvent 1 à 3 mois) entre l'annonce du départ et la fin effective du contrat." },
                { id: "dro308", q: "Quelle assurance est OBLIGATOIRE pour une voiture ?", options: ["Tous risques", "Responsabilité Civile (Tiers)", "Vol et Incendie"], a: 1, exp: "Le minimum légal est le 'Tiers' (Responsabilité Civile) pour payer les dégâts causés aux AUTRES." },
                { id: "dro309", q: "Qu'est-ce qu'un 'Garant' pour une location ?", options: ["Quelqu'un qui s'engage à payer si tu ne le fais pas", "Le propriétaire", "L'agent immobilier"], a: 0, exp: "Le garant (souvent un parent) signe le bail et doit payer le loyer si le locataire fait défaut." },
                { id: "dro310", q: "Quel tribunal gère les conflits entre patron et salarié ?", options: ["Le Tribunal de Commerce", "Les Prud'hommes", "La Cour d'Assises"], a: 1, exp: "Le Conseil de Prud'hommes est spécialisé dans les litiges du droit du travail." }
            ]
        },
        {
            id: "dro_l5", name: "Juriste", difficulty: 5,
            questions: [
                // --- Tes questions existantes ---
                { id: "dro401", q: "Délai de rétractation achat en ligne (UE) ?", options: ["7 jours", "14 jours", "30 jours"], a: 1, exp: "14 jours minimum légal en Europe pour changer d'avis sans justification pour un achat à distance." },

                // --- Nouvelles questions (Niveau 5 - Expert) ---
                { id: "dro501", q: "Qu'est-ce que l'Usufruit d'un bien ?", options: ["Le droit de le vendre", "Le droit de l'utiliser et d'en percevoir les loyers", "La pleine propriété"], a: 1, exp: "La propriété est divisée : l'Usufruitier habite/loue, le Nu-propriétaire possède les murs mais ne décide pas." },
                { id: "dro502", q: "Quelle est la différence entre un Délit et un Crime ?", options: ["La gravité et le tribunal", "C'est pareil", "Le délit est jugé par le Maire"], a: 0, exp: "Le Délit (vol, violence légère) est jugé au Tribunal Correctionnel. Le Crime (meurtre, viol) est jugé aux Assises." },
                { id: "dro503", q: "Que signifie l'acronyme RGPD ?", options: ["Règlement Général sur la Protection des Données", "Registre Global des Poursuites Diverses"], a: 0, exp: "C'est la loi européenne qui protège ta vie privée numérique et tes données personnelles." },
                { id: "dro504", q: "Qu'est-ce qu'une LRAR ?", options: ["Lettre Recommandée avec Accusé de Réception", "Loi Relative Aux Risques"], a: 0, exp: "C'est la seule preuve juridique qu'un courrier a bien été reçu à une date précise." },
                { id: "dro505", q: "Qu'appelle-t-on 'Vice caché' lors d'un achat ?", options: ["Un défaut esthétique visible", "Un défaut grave invisible au moment de l'achat", "Une remise secrète"], a: 1, exp: "Un défaut qui rend l'objet inutilisable et qu'on ne pouvait pas voir. On peut annuler la vente." },
                { id: "dro506", q: "En France, qui a le pouvoir 'Législatif' (faire les lois) ?", options: ["Le Président", "Le Gouvernement", "Le Parlement (Députés/Sénateurs)"], a: 2, exp: "Le Parlement vote les lois. Le Gouvernement (Exécutif) les applique." },
                { id: "dro507", q: "Quel est le montant maximum d'un paiement en espèces entre particuliers ?", options: ["1000 €", "Non limité", "3000 €"], a: 1, exp: "Entre particuliers, ce n'est pas limité (mais un écrit est obligatoire au-dessus de 1500€). Chez un pro, c'est 1000€ max." },
                { id: "dro508", q: "Qu'est-ce qu'une 'Mise en demeure' ?", options: ["Une invitation à dîner", "Un ordre officiel d'exécuter une obligation", "Un constat d'huissier"], a: 1, exp: "C'est la dernière étape officielle (courrier) pour réclamer un paiement ou une action avant d'aller au tribunal." },
                { id: "dro509", q: "Qu'est-ce que le 'K-bis' d'une entreprise ?", options: ["Son bilan comptable", "Sa carte d'identité officielle", "Son logo"], a: 1, exp: "C'est l'extrait du registre du commerce prouvant que l'entreprise existe légalement." },
                { id: "dro510", q: "En cas de divorce, que signifie 'Prestation compensatoire' ?", options: ["Pension pour les enfants", "Somme versée à l'ex-époux pour compenser la baisse de niveau de vie", "Frais d'avocat"], a: 1, exp: "Elle est destinée à l'ex-conjoint (pas aux enfants) pour équilibrer les niveaux de vie après la rupture." }
            ]
        }
    ]
});