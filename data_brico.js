window.QUIZ_DB.push({
    id: "brico",
    name: "Maison & Bricolage",
    levels: [
        {
            id: "bri_l1", name: "Débutant", difficulty: 1,
            questions: [
                // --- Tes questions existantes ---
                { id: "bri101", q: "Dans quel sens dévisse-t-on ?", options: ["Sens horaire", "Sens anti-horaire"], a: 1, exp: "On dévisse vers la gauche (anti-horaire)." },
                { id: "bri102", q: "Que faire avant de changer une ampoule ?", options: ["Mettre des gants", "Couper le courant"], a: 1, exp: "Sécurité d'abord : couper l'interrupteur ou le disjoncteur." },
                
                // --- Nouvelles questions (Niveau 1) ---
                { id: "bri103", q: "À quoi sert un niveau à bulle ?", options: ["Vérifier l'horizontalité", "Mesurer une distance", "Visser droit"], a: 0, exp: "Il sert à vérifier si une surface est parfaitement horizontale ou verticale." },
                { id: "bri104", q: "Quelle clé a une forme de 'L' hexagonal ?", options: ["Clé Plate", "Clé Allen (BTR)", "Clé à Molette"], a: 1, exp: "La clé Allen (ou BTR) est très utilisée pour les meubles en kit." },
                { id: "bri105", q: "Que fait-on pour purger un radiateur ?", options: ["On le démonte", "On évacue l'air", "On le remplit d'huile"], a: 1, exp: "Purger permet de chasser l'air qui empêche l'eau chaude de circuler dans tout le radiateur." },
                { id: "bri106", q: "Le WD-40 est principalement connu pour être un...", options: ["Dégrippant/Lubrifiant", "Colle forte", "Nettoyant vitre"], a: 0, exp: "C'est le produit miracle pour dégripper les serrures, les charnières et protéger de la rouille." },
                { id: "bri107", q: "Si mon évier est bouché, je dévisse d'abord...", options: ["Le robinet", "Le siphon", "L'arrivée d'eau"], a: 1, exp: "Le siphon (le coude sous l'évier) retient souvent les déchets. Placez une bassine dessous avant d'ouvrir !" },
                { id: "bri108", q: "Pour peindre un plafond sans traces, on commence par...", options: ["Le centre", "Les bords (réchampir)", "La porte"], a: 1, exp: "On dégage toujours les angles et les bords (réchampir) avant de peindre le centre au rouleau." },
                { id: "bri109", q: "Quelle vis a une empreinte en forme de croix ?", options: ["Vis Plate", "Vis Cruciforme", "Vis Torx"], a: 1, exp: "Cruciforme = Croix. Torx = Étoile. Plate = Fente unique." },
                { id: "bri110", q: "Quel outil utilise-t-on pour arracher des clous ?", options: ["Un tournevis", "Une tenaille", "Une lime"], a: 1, exp: "La tenaille (ou le marteau arrache-clou) est faite pour saisir et extraire les clous." },
                { id: "bri111", q: "À quoi sert du ruban de masquage ?", options: ["Réparer une fuite", "Protéger les zones à ne pas peindre", "Coller du bois"], a: 1, exp: "C'est un scotch papier qui s'enlève facilement, utilisé pour protéger les plinthes ou les vitres." },
                { id: "bri112", q: "Que signifie 'IKEA' en bricolage ?", options: ["Ils Cassent Et Abîment", "Ingénierie Kamoulox", "Rien, c'est une marque"], a: 2, exp: "C'est juste une marque suédoise, mais savoir monter un meuble est une compétence de base !" }
            ]
        },
        {
            id: "bri_l3", name: "Bricoleur", difficulty: 3,
            questions: [
                // --- Tes questions existantes ---
                { id: "bri301", q: "A quoi sert une cheville Molly ?", options: ["Mur en béton", "Mur en placo (creux)", "Bois"], a: 1, exp: "Elle s'écarte derrière la plaque de plâtre pour supporter du poids." },

                // --- Nouvelles questions (Niveau 3) ---
                { id: "bri302", q: "En électricité, quelle est la couleur du fil Neutre ?", options: ["Rouge", "Bleu", "Jaune/Vert"], a: 1, exp: "Bleu = Neutre. Rouge/Marron = Phase (Danger). Jaune/Vert = Terre." },
                { id: "bri303", q: "Quel grain de papier de verre est le plus fin ?", options: ["40", "80", "240"], a: 2, exp: "Plus le chiffre est élevé, plus le grain est fin (pour la finition). 40 est très gros (pour décaper)." },
                { id: "bri304", q: "Pour percer du carrelage, il ne faut SURTOUT pas mettre...", options: ["De l'eau", "La percussion", "De mèche diamant"], a: 1, exp: "La percussion va casser le carreau immédiatement. Il faut percer doucement avec une mèche spéciale." },
                { id: "bri305", q: "À quoi sert le ruban Téflon en plomberie ?", options: ["Isoler les fils", "Étanchéifier un raccord", "Coller des tuyaux"], a: 1, exp: "On l'enroule sur le filetage (dans le sens du vissage) pour empêcher l'eau de passer." },
                { id: "bri306", q: "Quel est le rôle d'une sous-couche (primaire) ?", options: ["Faire briller", "Uniformiser le support et l'accroche", "Protéger de l'eau"], a: 1, exp: "La sous-couche bloque le fond (placo, plâtre) pour éviter qu'il ne boive toute la peinture de finition." },
                { id: "bri307", q: "Quelle scie utiliser pour des découpes courbes ?", options: ["Scie égoïne", "Scie circulaire", "Scie sauteuse"], a: 2, exp: "La lame fine de la scie sauteuse permet de tourner et faire des arrondis." },
                { id: "bri308", q: "Dans quel matériau utilise-t-on une cheville à frapper ?", options: ["Le placo", "Le béton/pierre", "Le bois"], a: 1, exp: "Idéale pour fixer des rails ou des tasseaux rapidement dans des matériaux pleins." },
                { id: "bri309", q: "Que vérifie-t-on avec un multimètre en mode 'Continuité' ?", options: ["La tension", "Si le courant passe d'un point A à B", "La puissance"], a: 1, exp: "Si ça bipe, le fil n'est pas coupé. C'est essentiel pour tester un fusible ou une ampoule." },
                { id: "bri310", q: "Comment reboucher un petit trou dans un mur blanc ?", options: ["Silicone", "Enduit de rebouchage", "Ciment"], a: 1, exp: "L'enduit de rebouchage (pâte blanche) est fait pour ça. Le silicone ne se peint pas !" }
            ]
        },
        {
            id: "bri_l5", name: "Expert", difficulty: 5,
            questions: [
                // --- Nouvelles questions (Niveau 5) ---
                { id: "bri501", q: "En électricité, quel appareil protège les PERSONNES ?", options: ["Le disjoncteur divisionnaire", "Le disjoncteur différentiel", "Le compteur Linky"], a: 1, exp: "Le différentiel (30mA) coupe s'il détecte une fuite de courant vers la terre (électrisation). Le divisionnaire protège le matériel (court-circuit)." },
                { id: "bri502", q: "Comment reconnaît-on un mur porteur au son ?", options: ["Il sonne creux", "Il sonne plein et mat", "Il vibre"], a: 1, exp: "Un son plein et sourd indique du béton ou de la pierre massive. Un son creux indique une cloison." },
                { id: "bri503", q: "Quel est l'avantage du tube PER en plomberie ?", options: ["Il est rigide", "Il se pose sans soudure", "Il supporte 200°C"], a: 1, exp: "Le PER (plastique rouge/bleu) se sertit ou se visse, c'est beaucoup plus simple que de souder du cuivre." },
                { id: "bri504", q: "Quelle est la hauteur standard d'une poignée de porte ?", options: ["90 cm", "105 cm", "120 cm"], a: 1, exp: "La norme standard est à 1,05 mètre du sol fini." },
                { id: "bri505", q: "Pour isoler des combles, que signifie le 'R' sur l'isolant ?", options: ["Résistance Thermique", "Rapidité de pose", "Rigidité"], a: 0, exp: "Plus le R est élevé, plus le matériau isole. Pour un toit, on vise souvent R=6 ou 7." },
                { id: "bri506", q: "Quel mélange compose le béton ?", options: ["Ciment + Eau", "Ciment + Sable + Eau", "Ciment + Sable + Gravier + Eau"], a: 2, exp: "Sans gravier, c'est du mortier. Avec gravier, c'est du béton (plus solide pour les fondations)." },
                { id: "bri507", q: "Quelle est la section de fil pour une prise de courant 16A ?", options: ["1.5 mm²", "2.5 mm²", "6 mm²"], a: 1, exp: "Norme NF C 15-100 : 1.5mm² pour l'éclairage, 2.5mm² pour les prises, 6mm² pour les plaques de cuisson." },
                { id: "bri508", q: "Comment appelle-t-on la partie verticale d'une marche d'escalier ?", options: ["Le giron", "La contremarche", "Le limon"], a: 1, exp: "La partie où on pose le pied est la marche (ou giron pour la profondeur), la partie verticale est la contremarche." },
                { id: "bri509", q: "Pourquoi croise-t-on les joints quand on pose du carrelage ou des briques ?", options: ["Pour faire joli", "Pour la solidité de l'ouvrage", "Pour économiser la colle"], a: 1, exp: "Aligner les joints crée une ligne de rupture fragile. Les croiser répartit les forces." },
                { id: "bri510", q: "Qu'est-ce qu'un pont thermique ?", options: ["Un chauffage au sol", "Une zone de perte de chaleur", "Un outil de mesure"], a: 1, exp: "C'est une zone où l'isolation est rompue (jonction mur/toit, fenêtre mal posée), laissant le froid entrer." }
            ]
        }
    ]
});