window.QUIZ_DB.push({
    id: "sante",
    name: "Santé & Vitalité",
    levels: [
        {
            id: "san_l1", name: "Secouriste", difficulty: 1,
            questions: [
                // --- Tes questions existantes ---
                { id: "san101", q: "Numéro urgence unique Europe ?", options: ["18", "15", "112"], a: 2, exp: "Le 112 fonctionne partout en Europe, même sans réseau opérateur." },
                { id: "san102", q: "Massage cardiaque : où appuyer ?", options: ["Côté gauche", "Milieu poitrine", "Ventre"], a: 1, exp: "Au centre du thorax, sur le sternum (entre les deux seins)." },

                // --- Nouvelles questions (Niveau 1) ---
                { id: "san103", q: "Que faire en cas de saignement de nez ?", options: ["Pencher la tête en arrière", "Pencher la tête en avant", "S'allonger"], a: 1, exp: "Toujours en avant ! En arrière, le sang coule dans la gorge et peut faire vomir." },
                { id: "san104", q: "Quelle est la température normale du corps ?", options: ["35°C", "37°C", "39°C"], a: 1, exp: "La température corporelle moyenne est d'environ 37°C." },
                { id: "san105", q: "Combien de temps faut-il se brosser les dents ?", options: ["30 secondes", "1 minute", "2 minutes"], a: 2, exp: "2 minutes, deux fois par jour, est le minimum recommandé par les dentistes." },
                { id: "san106", q: "Que faire sur une brûlure simple ?", options: ["Mettre de la glace", "Mettre du beurre", "Eau tiède (15-20°)"], a: 2, exp: "Il faut refroidir sous l'eau tempérée pendant 15 minutes. La glace brûle la peau." },
                { id: "san107", q: "Si quelqu'un s'étouffe et ne peut plus respirer, que faire ?", options: ["Lui donner à boire", "Taper dans le dos / Manœuvre de Heimlich", "Attendre"], a: 1, exp: "Il faut déloger l'objet avec des claques dans le dos ou des compressions abdominales." },
                { id: "san108", q: "Quel est le principal risque d'une exposition au soleil sans crème ?", options: ["La déshydratation", "Le cancer de la peau", "La fatigue"], a: 1, exp: "Les UV abîment l'ADN des cellules de la peau, augmentant le risque de mélanome." },
                { id: "san109", q: "Pour être en bonne santé, il est recommandé de manger...", options: ["Beaucoup de viande", "5 fruits et légumes par jour", "Uniquement des féculents"], a: 1, exp: "Les fruits et légumes apportent fibres, vitamines et minéraux essentiels." },
                { id: "san110", q: "Que signifie le sigle PLS ?", options: ["Position Latérale de Sécurité", "Premier Lieu de Secours", "Prendre Le Sang"], a: 0, exp: "C'est la position sur le côté pour une personne inconsciente qui respire." },
                { id: "san111", q: "Quel organe pompe le sang ?", options: ["Le cerveau", "Le poumon", "Le cœur"], a: 2, exp: "Le cœur est le moteur qui fait circuler le sang dans tout le corps." },
                { id: "san112", q: "Le tétanos s'attrape souvent par...", options: ["Une piqûre de moustique", "Une plaie souillée (terre, clou rouillé)", "En buvant l'eau du robinet"], a: 1, exp: "La bactérie vit dans la terre. D'où l'importance du vaccin à jour." }
            ]
        },
        {
            id: "san_l3", name: "Infirmier", difficulty: 3,
            questions: [
                // --- Nouvelles questions (Niveau 3) ---
                { id: "san301", q: "Quel est l'os le plus long du corps humain ?", options: ["Le tibia", "Le fémur", "L'humérus"], a: 1, exp: "Le fémur (os de la cuisse) est le plus long et le plus résistant." },
                { id: "san302", q: "Quel groupe sanguin est 'Donneur Universel' ?", options: ["Groupe A", "Groupe AB", "Groupe O négatif"], a: 2, exp: "Le O- peut donner à tout le monde, mais ne recevoir que du O-." },
                { id: "san303", q: "Contre quoi les antibiotiques sont-ils efficaces ?", options: ["Les virus (Grippe)", "Les bactéries", "La fatigue"], a: 1, exp: "Les antibiotiques tuent les bactéries, mais ne font RIEN contre les virus (Rhume, Grippe, Covid)." },
                { id: "san304", q: "Quel organe nettoie le sang et élimine les toxines (alcool...) ?", options: ["Le foie", "L'estomac", "Le pancréas"], a: 0, exp: "Le foie est l'usine de traitement des déchets du corps." },
                { id: "san305", q: "Combien y a-t-il d'os dans le corps adulte ?", options: ["106", "206", "306"], a: 1, exp: "206 os constants chez l'adulte (un bébé en a plus, environ 350, qui se soudent ensuite)." },
                { id: "san306", q: "Quel signe doit alerter pour un AVC (Attaque cérébrale) ?", options: ["Mal au ventre", "Visage paralysé / Difficulté à parler", "Douleur au genou"], a: 1, exp: "VITE : Visage (paralysie), Inertie (bras mou), Trouble parole, Extrême urgence (15)." },
                { id: "san307", q: "Quelle vitamine est fabriquée par la peau au soleil ?", options: ["Vitamine C", "Vitamine D", "Vitamine B12"], a: 1, exp: "La Vitamine D est essentielle pour fixer le calcium sur les os." },
                { id: "san308", q: "Quelle maladie est liée à un problème d'insuline ?", options: ["L'asthme", "Le diabète", "L'hypertension"], a: 1, exp: "Le diabète est une mauvaise régulation du sucre dans le sang par manque d'insuline." },
                { id: "san309", q: "À quoi servent les globules blancs ?", options: ["Transporter l'oxygène", "Défendre le corps (Immunité)", "Coaguler le sang"], a: 1, exp: "Ce sont les soldats du corps qui attaquent les virus et bactéries." },
                { id: "san310", q: "Quel est le rythme cardiaque moyen au repos (adulte) ?", options: ["30-50 bpm", "60-100 bpm", "120-140 bpm"], a: 1, exp: "Entre 60 et 80 battements par minute est la moyenne au repos." }
            ]
        },
        {
            id: "san_l5", name: "Médecin", difficulty: 5,
            questions: [
                // --- Tes questions existantes ---
                { id: "san501", q: "Organe le plus étendu du corps ?", options: ["Intestin", "Peau", "Foie"], a: 1, exp: "La peau est un organe qui pèse lourd et couvre ~2m²." },

                // --- Nouvelles questions (Niveau 5) ---
                { id: "san502", q: "Quel est le plus petit os du corps humain ?", options: ["L'étrier", "La phalange", "Le coccyx"], a: 0, exp: "L'étrier se trouve dans l'oreille moyenne et mesure environ 3 mm." },
                { id: "san503", q: "Comment s'appelle le serment prêté par les médecins ?", options: ["Serment de Socrate", "Serment d'Hippocrate", "Serment de Galien"], a: 1, exp: "Hippocrate est considéré comme le père de la médecine moderne." },
                { id: "san504", q: "Quelle est la différence entre une veine et une artère ?", options: ["La couleur", "Le sens de circulation", "L'épaisseur"], a: 1, exp: "L'artère part du cœur vers les organes (sang oxygéné). La veine ramène le sang vers le cœur." },
                { id: "san505", q: "Où se trouve l'ADN dans la cellule ?", options: ["Dans la membrane", "Dans le noyau", "Dans le cytoplasme"], a: 1, exp: "Le matériel génétique (ADN) est protégé à l'intérieur du noyau de la cellule." },
                { id: "san506", q: "Que signifie le préfixe médical 'Cardio' ?", options: ["Cerveau", "Cœur", "Estomac"], a: 1, exp: "Cardio = Cœur. Neuro = Nerfs/Cerveau. Gastro = Estomac." },
                { id: "san507", q: "Quel muscle permet la respiration en se contractant ?", options: ["Les abdominaux", "Le diaphragme", "Les pectoraux"], a: 1, exp: "Le diaphragme sépare le thorax de l'abdomen et agit comme un piston pour gonfler les poumons." },
                { id: "san508", q: "Combien de litres de sang a un adulte moyen ?", options: ["2 à 3 Litres", "4 à 6 Litres", "8 à 10 Litres"], a: 1, exp: "Environ 5 litres, ce qui représente 7 à 8% du poids du corps." },
                { id: "san509", q: "Quelle partie de l'œil donne sa couleur (bleu, vert...) ?", options: ["La pupille", "La cornée", "L'iris"], a: 2, exp: "L'iris est le muscle coloré qui contrôle la quantité de lumière entrant dans l'œil." },
                { id: "san510", q: "Quelle est la durée de vie moyenne d'un globule rouge ?", options: ["24 heures", "120 jours", "1 an"], a: 1, exp: "Ils vivent environ 4 mois avant d'être recyclés par la rate et le foie." }
            ]
        }
    ]
});