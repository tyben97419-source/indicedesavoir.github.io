window.QUIZ_DB.push({
    id: "cuisine",
    name: "Cuisine & Nutrition",
    levels: [
        {
            id: "cui_l1", name: "Commis", difficulty: 1,
            questions: [
                // --- Tes questions existantes ---
                { id: "cui101", q: "Quel fruit contient le plus de Vitamine C ?", options: ["Orange", "Kiwi", "Citron"], a: 1, exp: "Le Kiwi (et le poivron !) en contiennent plus que l'orange." },
                { id: "cui102", q: "L'eau des pâtes doit être...", options: ["Tiède", "Bouillante", "Froide"], a: 1, exp: "Toujours bouillante pour saisir l'amidon et éviter que ça colle." },

                // --- Nouvelles questions (Niveau 1) ---
                { id: "cui103", q: "Botaniquement, la tomate est...", options: ["Un légume", "Un fruit", "Une racine"], a: 1, exp: "C'est un fruit car elle est issue d'une fleur et contient des graines (comme la courgette !)." },
                { id: "cui104", q: "Quel est l'ingrédient principal du guacamole ?", options: ["La courgette", "L'avocat", "Le concombre"], a: 1, exp: "C'est une purée d'avocat, originaire du Mexique." },
                { id: "cui105", q: "Que faut-il pour faire une meringue ?", options: ["Jaunes d'œufs + Sucre", "Blancs d'œufs + Sucre", "Farine + Lait"], a: 1, exp: "Des blancs montés en neige serrés avec du sucre." },
                { id: "cui106", q: "Quelle cuisson signifie 'cuit mais ferme sous la dent' ?", options: ["Bien cuit", "Bleu", "Al dente"], a: 2, exp: "Al dente (à la dent) est la cuisson idéale pour les pâtes italiennes." },
                { id: "cui107", q: "Le calcium (bon pour les os) se trouve surtout dans...", options: ["La viande rouge", "Les produits laitiers", "Le riz"], a: 1, exp: "Le lait, le fromage et les yaourts sont les principales sources de calcium." },
                { id: "cui108", q: "Quel ingrédient fait lever la pâte à pain ?", options: ["Le sel", "La levure de boulanger", "L'huile"], a: 1, exp: "La levure est un organisme vivant qui produit du gaz et fait gonfler la pâte." },
                { id: "cui109", q: "Quelle vitamine trouve-t-on principalement dans la carotte ?", options: ["Vitamine A (Bêta-carotène)", "Vitamine D", "Vitamine B12"], a: 0, exp: "Le bêta-carotène est excellent pour la peau et la vision." },
                { id: "cui110", q: "Comment conserver des pommes de terre ?", options: ["Au frigo", "À la lumière", "Dans le noir et au sec"], a: 2, exp: "La lumière les fait verdir et germer. Le frigo transforme leur amidon en sucre." },
                { id: "cui111", q: "Quel est l'aliment de base du Risotto ?", options: ["Les pâtes", "Le riz rond", "La semoule"], a: 1, exp: "On utilise un riz rond spécial (Arborio ou Carnaroli) riche en amidon pour le crémeux." },
                { id: "cui112", q: "Lequel de ces aliments est une protéine animale ?", options: ["Lentilles", "Poulet", "Noix"], a: 1, exp: "Le poulet est une viande. Les lentilles et noix sont des protéines végétales." },
                { id: "cui113", q: "Quel outil utilise-t-on pour enlever la peau des légumes ?", options: ["Un économe", "Une louche", "Un fouet"], a: 0, exp: "L'économe permet d'éplucher finement pour ne pas gâcher la chair." }
            ]
        },
        {
            id: "cui_l3", name: "Sous-Chef", difficulty: 3,
            questions: [
                // --- Nouvelles questions (Niveau 3) ---
                { id: "cui301", q: "Qu'est-ce qu'un 'Bain-marie' ?", options: ["Laver les légumes", "Cuire doucement dans un récipient posé sur l'eau bouillante", "Une soupe froide"], a: 1, exp: "Idéal pour fondre du chocolat ou cuire des sauces fragiles sans les brûler." },
                { id: "cui302", q: "Que signifie 'réserver' dans une recette ?", options: ["Mettre de côté pour plus tard", "Commander au restaurant", "Jeter à la poubelle"], a: 0, exp: "On met la préparation de côté (dans un bol) en attendant de l'utiliser." },
                { id: "cui303", q: "Quelle est la particularité du Gluten ?", options: ["C'est un sucre", "C'est une protéine qui donne l'élasticité", "C'est une graisse"], a: 1, exp: "Le gluten (dans le blé) crée le réseau élastique qui permet au pain de monter." },
                { id: "cui304", q: "La mayonnaise est une émulsion entre...", options: ["L'huile et le vinaigre", "L'huile et le jaune d'œuf", "Le lait et le beurre"], a: 1, exp: "Le jaune d'œuf contient de la lécithine qui permet de mélanger le gras (huile) et l'eau." },
                { id: "cui305", q: "Quel légume est la base de la Ratatouille ?", options: ["Le chou", "La pomme de terre", "L'aubergine et la courgette"], a: 2, exp: "C'est un ragoût provençal avec tomates, oignons, courgettes, aubergines et poivrons." },
                { id: "cui306", q: "Vrai ou Faux : Les épinards sont la meilleure source de fer.", options: ["Vrai, comme Popeye", "Faux, c'est une légende"], a: 1, exp: "Faux ! C'est une erreur de décimale ancienne. Le boudin noir, les lentilles ou la viande rouge en ont bien plus." },
                { id: "cui307", q: "Qu'est-ce qu'une cuisson 'à l'unilatérale' ?", options: ["Cuire sur une seule face", "Cuire très vite", "Cuire au four"], a: 0, exp: "Souvent utilisé pour le poisson (côté peau) ou les viandes fines." },
                { id: "cui308", q: "Quelle épice est la plus chère du monde ?", options: ["La vanille", "Le safran", "La cannelle"], a: 1, exp: "Le safran (pistil de crocus) demande un travail manuel titanesque pour la récolte." },
                { id: "cui309", q: "Que signifie 'Clarifier' un beurre ?", options: ["Le saler", "Le faire bouillir", "Retirer le petit-lait (caséine)"], a: 2, exp: "On retire les impuretés blanches pour qu'il supporte une plus haute température sans brûler." },
                { id: "cui310", q: "Quel est le rôle du vinaigre dans l'eau des œufs pochés ?", options: ["Donner du goût", "Aider le blanc à coaguler", "Saler l'eau"], a: 1, exp: "L'acidité aide le blanc d'œuf à se solidifier rapidement autour du jaune." },
                { id: "cui311", q: "Comment appelle-t-on une coupe de légumes en fins bâtonnets ?", options: ["Brunoise", "Julienne", "Mirepoix"], a: 1, exp: "La Julienne (bâtonnets). La Brunoise, c'est en tout petits dés." }
            ]
        },
        {
            id: "cui_l5", name: "Grand Chef", difficulty: 5,
            questions: [
                // --- Tes questions existantes ---
                { id: "cui401", q: "Qu'est-ce que la réaction de Maillard ?", options: ["Fermentation", "Brunissement à la cuisson", "Congélation"], a: 1, exp: "C'est la réaction chimique entre sucres et protéines à la chaleur (croûte du pain, viande grillée)." },

                // --- Nouvelles questions (Niveau 5) ---
                { id: "cui501", q: "Qu'est-ce que l'Agar-agar ?", options: ["Un sucre japonais", "Un gélifiant végétal (algue)", "Une épice pimentée"], a: 1, exp: "C'est une alternative végétale à la gélatine (animale), très puissante, issue d'une algue rouge." },
                { id: "cui502", q: "Que mesure l'échelle de Scoville ?", options: ["L'acidité du citron", "La force des piments", "La teneur en sucre"], a: 1, exp: "Elle mesure la capsaïcine, c'est-à-dire le piquant. Le poivron est à 0, le Carolina Reaper à 2 millions." },
                { id: "cui503", q: "Quelle est la base d'une ganache ?", options: ["Chocolat + Beurre", "Chocolat + Crème liquide chaude", "Cacao + Eau"], a: 1, exp: "Une émulsion entre le chocolat et la crème chaude. C'est la base des truffes." },
                { id: "cui504", q: "Qu'est-ce que le 'culottage' d'une poêle ?", options: ["La nettoyer au savon", "Créer une couche antiadhésive naturelle", "La rayer"], a: 1, exp: "Sur l'acier ou la fonte, on brûle de l'huile pour créer une patine noire qui empêche d'accrocher." },
                { id: "cui505", q: "Quel est le 'cinquième goût' découvert par les Japonais ?", options: ["Piquant", "Amer", "Umami"], a: 2, exp: "L'Umami ('savoureux') est le goût des protéines, du soja, du parmesan ou des tomates mûres." },
                { id: "cui506", q: "À quelle température le sucre commence-t-il à caraméliser ?", options: ["100°C", "environ 160°C", "250°C"], a: 1, exp: "L'eau s'évapore à 100°C, puis le sirop cuit. Le caramel blond apparaît vers 160°C." },
                { id: "cui507", q: "Que signifie 'Déglacer' une poêle ?", options: ["La mettre au frigo", "Verser un liquide froid dans la poêle chaude", "Enlever le gras"], a: 1, exp: "Le choc thermique décolle les sucs de cuisson (le goût !) pour créer une sauce." },
                { id: "cui508", q: "Lequel de ces fromages est une AOP française ?", options: ["Le Cheddar", "Le Roquefort", "Le Gouda"], a: 1, exp: "Le Roquefort est la première AOP de France (1925), produit uniquement avec du lait de brebis." },
                { id: "cui509", q: "En pâtisserie, qu'est-ce que le 'tant pour tant' ?", options: ["Mélange 50% poudre d'amande / 50% sucre glace", "Cuire autant de temps que refroidir", "Mettre autant de sel que de poivre"], a: 0, exp: "C'est la base des macarons : autant de poudre d'amande que de sucre glace." },
                { id: "cui510", q: "Quel poisson est toxique s'il est mal préparé (Fugu) ?", options: ["Le Saumon", "Le Poisson-globe", "La Truite"], a: 1, exp: "Le Fugu contient de la tétrodotoxine mortelle. Seuls des chefs certifiés au Japon peuvent le préparer." }
            ]
        }
    ]
});