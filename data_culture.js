window.QUIZ_DB.push({
    id: "culture",
    name: "Culture & Monde",
    levels: [
        {
            id: "cult_l1", name: "Bases", difficulty: 1,
            questions: [
                { id: "cult101", q: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Canberra", "Melbourne"], a: 1, exp: "Canberra est la capitale fédérale." },
                { id: "cult102", q: "Combien y a-t-il de continents ?", options: ["5", "6", "7"], a: 1, exp: "Afrique, Amérique, Antarctique, Asie, Europe, Océanie." },
                { id: "cult103", q: "Dans quel pays se trouvent les Pyramides de Gizeh ?", options: ["Égypte", "Mexique", "Pérou"], a: 0, exp: "Elles se trouvent en Égypte, près du Caire." },
                { id: "cult104", q: "Qui a été le premier homme à marcher sur la Lune ?", options: ["Yuri Gagarine", "Neil Armstrong", "Buzz Aldrin"], a: 1, exp: "Neil Armstrong, lors de la mission Apollo 11 en 1969." },
                { id: "cult105", q: "Quelle est la monnaie utilisée au Royaume-Uni ?", options: ["L'Euro", "Le Dollar", "La Livre Sterling"], a: 2, exp: "Le Royaume-Uni utilise la Livre Sterling (£), pas l'Euro." },
                { id: "cult106", q: "Quel est le plus grand océan du monde ?", options: ["Atlantique", "Pacifique", "Indien"], a: 1, exp: "L'Océan Pacifique est le plus vaste, couvrant un tiers de la surface terrestre." },
                { id: "cult107", q: "De quel pays Tokyo est-elle la capitale ?", options: ["Chine", "Corée du Sud", "Japon"], a: 2, exp: "Tokyo est la capitale du Japon." },
                { id: "cult108", q: "Qui était Napoléon Bonaparte ?", options: ["Un roi d'Angleterre", "Un empereur français", "Un président américain"], a: 1, exp: "Il a été Empereur des Français au début du XIXe siècle." },
                { id: "cult109", q: "Quelle langue parle-t-on principalement au Brésil ?", options: ["Espagnol", "Portugais", "Brésilien"], a: 1, exp: "Le Brésil a été colonisé par le Portugal, c'est le seul pays lusophone d'Amérique du Sud." },
                { id: "cult110", q: "Où se trouve la Tour Eiffel ?", options: ["Londres", "Rome", "Paris"], a: 2, exp: "Elle a été construite à Paris pour l'Exposition universelle de 1889." },
                { id: "cult111", q: "Combien y a-t-il d'états aux États-Unis ?", options: ["48", "50", "52"], a: 1, exp: "Il y a 50 étoiles sur le drapeau américain, représentant les 50 états." },
                { id: "cult112", q: "Quel peintre a coupé son oreille ?", options: ["Picasso", "Van Gogh", "Monet"], a: 1, exp: "Vincent Van Gogh, dans un moment de folie." },
            ]
        },
        {
            id: "cult_l3", name: "Intermédiaire", difficulty: 3,
            questions: [
                { id: "cult301", q: "En quelle année le mur de Berlin est-il tombé ?", options: ["1989", "1991", "1975"], a: 0, exp: "Le 9 novembre 1989." },
                { id: "cult302", q: "Quelle est la capitale du Canada ?", options: ["Toronto", "Ottawa", "Montréal"], a: 1, exp: "C'est Ottawa, choisie par la Reine Victoria pour sa position stratégique." },
                { id: "cult303", q: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?", options: ["1492", "1515", "1789"], a: 0, exp: "Il a atteint les Antilles le 12 octobre 1492." },
                { id: "cult304", q: "Quel roi français était surnommé le 'Roi-Soleil' ?", options: ["Louis XIV", "Louis XVI", "Henri IV"], a: 0, exp: "Louis XIV, qui a fait construire le château de Versailles." },
                { id: "cult305", q: "Quel est le fleuve le plus long d'Europe ?", options: ["Le Danube", "La Volga", "Le Rhin"], a: 1, exp: "La Volga (Russie) est le plus long fleuve d'Europe." },
                { id: "cult306", q: "Qui a peint 'La Joconde' ?", options: ["Michel-Ange", "Raphaël", "Léonard de Vinci"], a: 2, exp: "Léonard de Vinci, au début du XVIe siècle." },
                { id: "cult307", q: "Quelle guerre s'est terminée en 1945 ?", options: ["La 1ère Guerre mondiale", "La 2nde Guerre mondiale", "La Guerre du Vietnam"], a: 1, exp: "La Seconde Guerre mondiale (1939-1945)." },
                { id: "cult308", q: "Quel pays a la forme d'une botte ?", options: ["Grèce", "Espagne", "Italie"], a: 2, exp: "La péninsule italienne ressemble géographiquement à une botte." },
                { id: "cult309", q: "Qui a écrit 'Roméo et Juliette' ?", options: ["Molière", "Shakespeare", "Victor Hugo"], a: 1, exp: "William Shakespeare, le célèbre dramaturge anglais." },
                { id: "cult310", q: "Quelle est la capitale de l'Inde ?", options: ["Mumbai", "Calcutta", "New Delhi"], a: 2, exp: "New Delhi est la capitale administrative." },
                { id: "cult311", q: "Quel événement marque le début de la Révolution française ?", options: ["La prise de la Bastille", "La mort du Roi", "Le serment du Jeu de Paume"], a: 0, exp: "Le 14 juillet 1789 avec la prise de la Bastille." },
            ]
        },
        {
            id: "cult_l5", name: "Expert", difficulty: 5,
            questions: [
                { id: "cult501", q: "Quel pays possède le plus de fuseaux horaires ?", options: ["Russie", "France", "USA"], a: 1, exp: "La France (avec l'Outre-mer) en a 12 (ou 13 selon les zones)." },
                        { id: "cult502", q: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Le Vatican", "Saint-Marin"], a: 1, exp: "Le Vatican fait environ 0,44 km²." },
                        { id: "cult503", q: "Comment s'appelait Tokyo avant 1868 ?", options: ["Kyoto", "Edo", "Osaka"], a: 1, exp: "Elle s'appelait Edo avant de devenir la capitale impériale." },
                        { id: "cult504", q: "Qui a déchiffré le code Enigma durant la 2nde Guerre mondiale ?", options: ["Alan Turing", "Albert Einstein", "Oppenheimer"], a: 0, exp: "Le mathématicien Alan Turing, père de l'informatique moderne." },
                        { id: "cult505", q: "Quelle est la capitale du Kazakhstan ?", options: ["Almaty", "Astana", "Tachkent"], a: 1, exp: "Astana (renommée un temps Noursoultan) est la capitale actuelle." },
                        { id: "cult506", q: "En quelle année l'URSS a-t-elle été dissoute ?", options: ["1989", "1991", "1993"], a: 1, exp: "Le 26 décembre 1991, marquant la fin de l'Union Soviétique." },
                        { id: "cult507", q: "Quel détroit sépare l'Espagne du Maroc ?", options: ["Gibraltar", "Bosphore", "Béring"], a: 0, exp: "Le détroit de Gibraltar, large de seulement 14 km." },
                        { id: "cult508", q: "Qui a peint le plafond de la Chapelle Sixtine ?", options: ["Léonard de Vinci", "Michel-Ange", "Botticelli"], a: 1, exp: "Michel-Ange a passé 4 ans à peindre cette fresque monumentale." },
                        { id: "cult509", q: "Quel est le point le plus profond des océans ?", options: ["Fosse des Mariannes", "Fosse de Porto Rico", "Fosse des Kouriles"], a: 0, exp: "La fosse des Mariannes atteint environ 11 000 mètres de profondeur." },
                        { id: "cult510", q: "Quelle ville a été fondée par Romulus et Rémus selon la légende ?", options: ["Athènes", "Rome", "Carthage"], a: 1, exp: "Rome, fondée selon la légende en 753 av. J.-C." },
                        { id: "cult511", q: "Quel est le métal dont le symbole chimique est 'Au' ?", options: ["Argent", "Aluminium", "Or"], a: 2, exp: "Du latin 'Aurum'." },
            ]
        }
    ]
});