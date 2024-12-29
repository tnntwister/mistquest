"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function RencontresPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Fael", href: "/fael" },
    { label: "Les Trois Rencontres" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="prose dark:prose-invert max-w-none text-sm">
        <h1 className="text-4xl font-cinzel mb-8">Les Trois Rencontres</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Première Rencontre - 5001</h2>
            <div>
              <p className="mb-2">Vous commencez par marcher en silence, le temps que le groupe s&apos;étire, Theafana al-Malik ouvrant la marche avec la femme aux implants cybernétiques.</p>
              <p className="mb-2">Après quelques dizaines de pas, elle s&apos;adresse à toi.</p>
              <p className="italic mb-2">Alors c&apos;est vous dont m&apos;ont parlé Justine et Hisham… Dans quelques années, je serais curieuse d&apos;échanger quelques passes d&apos;arme avec vous, jeune seigneur. Je ne devrais peut-être pas vous le dire, mais vous avez réussi l&apos;exploit d&apos;impressionner voter maître d&apos;armes et ce n&apos;est pas donné à tout le monde, croyez-moi.</p>
              <p className="mb-2">Puis elle s&apos;absorbe dans un mutisme dont rien ne la fera sortir jusqu&apos;à votre arrivée dans la salle aux dimensions titanesques où trône la statue qui ressemble aux figures sculptées sur les portails de saut, dont les yeux s&apos;illuminent d&apos;un bleu électrique.</p>
              <p className="italic mb-2">Tu seras celui par qui arrivera la disgrâce. Tu seras celui qui apportera la réconciliation. Tu sèmeras la mort dans les rangs des croyants et des hérétiques. Tu guideras les justes vers les tombeaux des secrets, car ta double hélice est ainsi faite. Mais dans ces tombeaux tu marcheras en aveugle. Tu es la torche et la clé, mais ni les yeux ni la main. Tu es l&apos;ouvreur des chemins.</p>
              <p className="mb-2">La voix se tait. Quand tu tournes la tête, ton regard croise celui de Theafana al-Malik. Jamais tu n&apos;avais vu de regard aussi intense et bien des années s&apos;écouleront avant que tu croises un tel regard à nouveau. Du haut de tes douze ans, tu ne comprends pas ce qui passe par ce regard, mais tu as l&apos;intuition que c&apos;est d&apos;une importance capitale. Puis elle te sourit et incline la tête dans un mouvement gracieux.</p>
              <p className="mb-2">Un geste de sa main et toute la troupe se remet en ordre de marche pour remonter vers le salon privé de Sa Seigneurie la marquise Yasmina Hallaschid al-Malik.</p>
            </div>
          </section>

          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-cinzel">Première rencontre pour Fael</h2>
            <div>
            <p className="mb-2">Vous aviez six ans et vous aviez embarqué avec votre maître d'armes (Justine Hawkwood), votre maître de rhétorique (Izaïa ibn-Rahiman al-Malik), ainsi que votre maître de stratégie (Hisham Abbasah al-Malik) et d'autres passagers à bord du <i>AISN Pèlerin</i> (un vaisseau de modèle Void Wren) pour voyager depuis Tethys vers Byzantium Secundus. Vous aviez profité d'une discussion animée entre vos précepteurs pour échapper à leur surveillance, poussé par la curiosité d'explorer ce modèle de vaisseau spatial. Au gré de vos pérégrinations, vous vous étiez retrouvé avec d'autres enfants de votre âge dans la soute ; l'idée de signaler leur présence illégale vous avait traversé l'esprit alors qu'ils tentaient de forcer l'entrée dans la salle des machines, mais une alarme s'était mise à hurler, toutes les lumières s'étaient éteintes et l'éclairage avait viré au rouge.</p>
            <p className="mb-2">À cet instant, vous aviez ressenti quelque chose dont vous n'aviez pas l'habitude, une profonde paix intérieure. L'instant d'après, vous vous teniez, adultes, dans des ruines chichement éclairées par un rai de lumière tombant d'un haut plafond fissuré. Les figures que vous deviniez dans l'obscurité ressemblaient à s'y méprendre à celles qui ornent les portails de sauts que les vaisseaux empruntent pour se rendre d'un système à un autre. L'atmosphère était humide et des gouttes tombaient dans des flaques emplissant le vaste espace d'une mélodie cristalline.</p>
            <p className="mb-2">Vous aviez aussitôt pris la tête de votre petit groupe et, après quelques hésitations sur le chemin à emprunter, vous les aviez guidés vers ce qui vous semblait la sortie. Vous aviez parcouru quelques dizaines de pas, avant de la voir : une femme aux cheveux blonds, nimbée d'un halo bleuté, enchaînée à un monolithe. Deux cadavres décapités gisaient au pied du rocher. À leur vue, une fille de votre groupe s'était mise à hurler de terreur, attirant l'attention de prédateurs qui semblaient se dissimuler dans les ombres.</p>
            <p className="mb-2">Aussitôt, les créatures informes avaient rampé dans votre direction. Vous vous étiez reculé vers les autres instinctivement pour les protéger de votre corps et ils vous avaient attrapé la main pour se rassurer. Alors que les créatures étaient à quelques pas de vous, une flamme intense était descendue du plafond, les poussant à battre en retraite précipitamment.</p>
            <p className="mb-2">Les adultes vous avaient retrouvés tous les trois, en cercle, serrant la main des deux autres, les yeux fermés et la tête rentrée dans les épaules. On vous avait réprimandés, plus pour la forme, tant le soulagement était intense de vous avoir retrouvés sains et saufs, alors que le vaisseau avait connu une avarie pendant le saut.</p>
            <p className="mb-2">Ainsi c'était déroulée votre première rencontre avec ceux qui deviendraient plus tard vos compagnons de route. Fait marquant, Izaïa ibn-Rahiman al-Malik n'a plus fait partie de vos précepteurs après ce voyage et pendant des mois, vous vous étiez demandé si ce n'était pas elle que vous aviez vue enchaînée sur le rocher.</p>
            </div>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Deuxième Rencontre - 5007</h2>
            <div>
              <p className="mb-2">Vos familles au même titre que beaucoup d'autres sont invitées sur le domaine de Sa Seigneurie la Marquise Yasmina Hallaschid al-Malik sur Shaprut pour une semaine de festivités en l'honneur du Baronnet Ahmid Sinna al-Malik, son filleul, qui fête sa majorité et qui, de ce fait, succède à son oncle à la tête du fief familial sur Byzantium Secundus, planète où siège le trône impérial (le trône du Phœnix).</p>
              <p className="mb-2">Vous avez toutes et tous été soigneusement briefés par vos parents, tuteurs et autres précepteurs sur la conduite à tenir dans une cour al-Malik. La culture et l'éloquence y sont reines et chacun, peu importe son statut social, y est invité à exprimer son opinion, quelle qu'elle soit, tant que cela est fait avec élégance, éloquence et quand ladite opinion a été sollicitée par les maîtres de lieux.</p>
              <p className="mb-2">Bien entendu, en tant que jeunes gens d'une douzaine d'années, vous êtes bombardés de recommandations et de mises en garde diverses sur le respect dû aux aînés, la modestie, la discrétion, la politesse, la tenue vestimentaire, la tenue générale, l'obéissance… le mieux étant, bien évidemment, que vous restiez à proximité des adultes responsables qui sauront toujours comment réagir, quelle que soit la situation.</p>
              <p className="mb-2">Néanmoins, au milieu de l'après-midi du troisième jour, alors que les festivités battent leur plein et que les premières rumeurs sur la magnificence d'un feu d'artifice nocturne commencent à circuler, des serviteurs se présentent à vous respectueusement et vous signifient que sa Seigneurie Yasmina Hallaschid al-Malik souhaite que vous la rejoigniez dans un petit salon privé (où ils sont chargés de vous conduire).</p>
              <p className="mb-2">Vous êtes introduits dans un salon d'une quarantaine de mètres carrés aux fenêtres parées de voilages que soulève une brise légère. Des meubles en bois précieux s'alignent le long des murs, des coussins colorés entourent des tables basses constituées de larges plateaux métalliques finement ouvragés posés sur des meubles bas en bois précieux. Des luminaires pendent d'un plafond voûté qui culmine à six mètres.</p>
              <p className="mb-2">La marquise vous accueille d'un hochement de tête courtois et vous invite à vous asseoir d'un geste de la main. Aussitôt que vous avez pris place, des serfs surgissent de vous-ne-savez-pas-où et vous apportent fruits, gâteaux au miel, thés et boissons pétillantes. Ils disparaissent aussi vite et silencieusement qu'ils sont apparus, vous laissant seuls dans la pièce avec votre hôte et quatre hommes et femmes en armure à l'allure martiale. Le silence qui règne en ces lieux n'est rompu que par le frottement léger des voilages dans le vent.</p>
              <p className="mb-2">Puis un pan de mur s'escamote et une femme entre dans la pièce entourée d'une dizaine de personnes. Vous la reconnaissez : elle le sujet d'un grand nombre de ragots et de commérages que même à votre âge vous avez entendu. Il s'agit de Theafana al-Malik, une des deux maîtresses les plus proches de l'Empereur Alexius et aussi les plus célèbres (l'autre étant Salandra Decados). Sa suite est composée de cinq gardes, d'un homme d'église, d'une femme qui porte de la technologie directement greffée à son corps, d'une femme à la vêture commune qui semble introvertie, d'un homme maigre au cheveux blancs à l'œil droit voilé par un cataracte et à l'œil gauche d'un bleu éclatant et un ou une — vous ne parvenez pas déterminer son genre avec certitude — Ukar.</p>
              <p className="mb-2">Elle s&apos;approche de vous avec un sourire bienveillant et s&apos;assied à votre table. Vous baissez aussitôt les yeux.</p>
              <q className="mb-2">Regardez-moi, les enfants, vous dit-elle. Ou suis-je si laide à regarder que mon image vous répugne ? (Vous relevez les yeux ne soufflez mot. Outre son rang, c&apos;est une femme d&apos;une très grande beauté.) J&apos;ai appris que vous avez vécu une aventure singulière, il y a quelques années et que vous êtes toujours vivants pour en parler. Suivez-moi, je vous rendrai à vos proches et à vos tuteurs dans une petite heure, mais avant, j&apos;ai quelque chose que je souhaite vous montrer.</q>
              <p className="mb-2">Elle se lève et vous fait signe de la suivre.</p>
              <p className="mb-2">Vous vous mêlez aux gens de la suite de Theafana al-Malik et de la marquise qui vous accompagne. Vous empruntez le couloir dissimulé dans les murs du palais par lequel votre interlocutrice est arrivée. Plus qu'un couloir, vous découvrez un véritable dédale où vous risqueriez de vous perdre si l'on ne vous guidait pas. Vous descendez vers ce que vous pensez être les fondations de l'aile du palais où vous vous trouvez.</p>
              <p className="mb-2">Les couloirs s'élargissent soudain et deviennent plus haut de plafond. C'est sans doute un effet d'optique, mais vous avez l'impression que les murs émettent désormais une lueur diffuse qui vous permet de circuler sans encombre, loin de la lumière du jour. Puis vous débouchez dans une salle aux proportions titanesques au centre de laquelle trône une tête… qui ressemble à celles que l'on trouve sur les portails de saut dans l'espace.</p>
              <p className="mb-2">Soudain, les yeux de la statue s'illuminent de bleu et vous sentez peser sur vous le regard minéral. Vous vous sentez observés autant par la statue que par Theafana al-Malik et Yasmina Hallaschid. Malgré la fraîcheur relative de la salle souterraine vous sentez la transpiration ruisseler le long de votre colonne vertébrale. Puis les yeux se ternissent et redeviennent inertes. Vous remontez vers le salon privé. Des rafraichissements vous y attendent. Et alors que vous vous apprêtez à rejoindre les festivités dans les jardins, Theafana vous adresse un dernier regard et dit : « Soyez certains que nous veillerons sur vos destinées avec un grand intérêt. » C'est sur ces mots que vous vous séparez.</p>
            </div>
          </section>
          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-cinzel">Deuxième rencontre pour Fael</h2>
              <div>
                <p className="mb-2">Quand vous vous mêlez à la suite de Theafana al-Malik et de la Marquise Yasmina Hallaschid al-Malik, vous vous trouvez séparés les uns des autres. Et alors que vous empruntez le couloir secret qui part du salon de réception privé, tu te retrouves à côté de la cheffe de la garde de Theafana al-Malik, une militaire — capitaine de corvette, si tu dois en croire l'insigne sur son uniforme.</p>
                <p className="mb-2">Vous commencez par marcher en silence, le temps que le groupe s'étire, Theafana al-Malik ouvrant la marche avec la femme aux implants cybernétiques.</p>
                <p className="mb-2">Après quelques dizaines de pas, elle s'adresse à toi.</p>
                <q className="mb-2">Alors c'est vous dont m'ont parlé Justine et Hisham… Dans quelques années, je serais curieuse d'échanger quelques passes d'arme avec vous, jeune seigneur. Je ne devrais peut-être pas vous le dire, mais vous avez réussi l'exploit d'impressionner voter maître d'armes et ce n'est pas donné à tout le monde, croyez-moi.</q>
                <p className="mb-2">Puis elle s'absorbe dans un mutisme dont rien ne la fera sortir jusqu'à votre arrivée dans la salle aux dimensions titanesques où trône la statue qui ressemble aux figures sculptées sur les portails de saut, dont les yeux s'illuminent d'un bleu électrique.</p>
                <q className="mb-2">Tu seras celui par qui arrivera la disgrâce. Tu seras celui qui apportera la réconciliation. Tu sèmeras la mort dans les rangs des croyants et des hérétiques. Tu guideras les justes vers les tombeaux des secrets, car ta double hélice est ainsi faite. Mais dans ces tombeaux tu marcheras en aveugle. Tu es la torche et la clé, mais ni les yeux ni la main. Tu es l'ouvreur des chemins.</q>
                <p className="mb-2">La voix se tait. Quand tu tournes la tête, ton regard croise celui de Theafana al-Malik. Jamais tu n'avais vu de regard aussi intense et bien des années s'écouleront avant que tu croises un tel regard à nouveau. Du haut de tes douze ans, tu ne comprends pas ce qui passe par ce regard, mais tu as l'intuition que c'est d'une importance capitale. Puis elle te sourit et incline la tête dans un mouvement gracieux.</p>
                <p className="mb-2">Un geste de sa main et toute la troupe se remet en ordre de marche pour remonter vers le salon privé de Sa Seigneurie la marquise Yasmina Hallaschid al-Malik.</p>
            </div>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Troisième Rencontre - 5017</h2>
            <div>
              <p className="mb-2">Un appareil volant se pose silencieusement dans une clairière de la forêt de Stigmata et redevenant visible.</p>
              <p className="mb-2">Un Aurige et une Ecclésiastique en sortent, suivis d&apos;un Ingénieur qui leur crie quelque chose d&apos;inintelligible.</p>
              <p className="mb-2">Huit hommes en tenue militaire entourent leur officier qui lutte contre la mort.</p>
              <p className="mb-2">L&apos;ecclésiastique s&apos;agenouille à côté de l&apos;officier et adresse une prière au Pancréateur.</p>
              <p className="mb-2">L&apos;Aurige et l&apos;Ingénieur donnent des ordres. L&apos;officier est transporté délicatement par ses hommes à bord de l&apos;engin volant.</p>
              <p className="mb-2">La clairière rétrécit à vue d&apos;œil.</p>
              <p className="mb-2">L&apos;engin décolle, percute un arbre, se redresse et disparait comme par enchantement.</p>
              <p className="mb-2">La clairière n&apos;existe plus.</p>

              <p className="mb-2">Deux jours plus tard.</p>
              <p className="mb-2">Vous êtes dans un bureau que certains d&apos;entre vous connaissent et qu&apos;un autre découvre pour la première fois. La femme qui se tient devant vous est bardée de technologie et porte les couleurs de la Fraternité d&apos;Armes. Vous l&apos;aviez vue en compagnie de Dame Theafana al-Malik en 5007 sur Shaprut. Maîtresse Halatine Kwon Chua de la Fraternité des Armes, Commandeur de la garnison de Stigmata fulmine.</p>
              <q className="italic mb-2">La puérilité des Maisons Royales m&apos;étonnera toujours ! L&apos;homme à la solde de Danilo Czerny vient d&apos;être déféré devant la Cour Martiale sur De Moley ! Mais à quoi pensent-ils, bon sang ? Et laisser cinq tenues de camouflage de la Seconde République à nos ennemis ? Quand les foudres du Pancréateur s&apos;abattront sur ces imbéciles…</q>
              <p className="mb-2">On frappe à la porte. Et le buste d&apos;un Ingénieur apparaît dans l&apos;encadrure.</p>
              <q className="italic mb-2">Eh bien, notre Guilde s&apos;est acquittée des donations promises, Commandeur. Je dois reconduire l&apos;appareil sur Bannockburn, donc mes compagnons et moi allons nous mettre en route. C&apos;est un plaisir que de…</q>
              <p className="mb-2">Maîtresse Halatine l&apos;interrompt.</p>
              <q className="italic mb-2">Un instant, vous. Comment avez-vous intercepté ma communication avec les Auriges ?</q>
              <p className="mb-2">L&apos;Ingénieur répond.</p>
              <q className="italic mb-2">Plaît-il ?</q>
              <p className="mb-2">Maîtresse Halatine insiste.</p>
              <q className="italic mb-2">Vous m&apos;avez bien entendu.</q>
              <p className="mb-2">L&apos;Ingénieur tente de se justifier.</p>
              <q className="italic mb-2">Je ne vois pas… vos insinuations sont inacceptables… je vais en référer… nous sommes…</q>
              <p className="mb-2">Maîtresse Halatine le coupe.</p>
              <q className="italic mb-2">Vous êtes sur le terrain de ma garnison. Celle qui protège les Mondes Connus d&apos;une menace que vos petits jouets ont été incapables d&apos;endiguer ! Je me sens une folle envie de les tester dans les conditions réelles ! C&apos;est bien les termes consacrés, n&apos;est-ce pas ? Alors, vous allez fermer la porte, poser votre petit cul sur cette chaise et m&apos;expliquer comment vous avez piraté mes communications !</q>
              <p className="mb-2">L&apos;ingénieur obtempère, l&apos;air contrit.</p>
              <q className="italic mb-2">Ce ne sont pas vos communications, Commandeur…</q>
              <p className="mb-2">Maîtresse Halatine l&apos;interrompt.</p>
              <q className="italic mb-2">Pardon ? Vous allez me dire que vous détenez les brevets…</q>
              <p className="mb-2">L&apos;Ingénieur continue.</p>
              <q className="italic mb-2">Non, non, non, Commandeur, ne vous méprenez pas… Nous avons été mandatés par les Auriges pour une maintenance de leur réseau de communication sur Bannockburn. Et pendant la durée de la maintenance… eh bien… l&apos;ensemble de leurs communications transitait par nos serveurs et… nous…</q>
              <p className="mb-2">La Commandeur s&apos;esclaffe soudain et rit à gorge déployée pendant quelques dizaines de secondes.</p>
              <p className="italic mb-2">Vous ferez pénitence, pour cet acte peu charitable.</p>
              <p className="mb-2">L&apos;Ingénieur proteste.</p>
              <q className="italic mb-2">Mais, je…</q>
              <p className="mb-2">Maîtresse Halatine le menace.</p>
              <q className="italic mb-2">Préférez-vous que je confie le choix de votre pénitence à la sœur Avestite de notre garnison ?</q>
              <p className="mb-2">L&apos;Ingénieur se soumet.</p>
              <p className="italic mb-2">Votre choix relèvera de la sagesse du Pancréateur, Commandeur.</p>
              <p className="mb-2">Maîtresse Halatine se calme.</p>
              <p className="italic mb-2">Le Pancréateur soit loué, vous voilà plus raisonnable. Nous discuterons de votre pénitence plus tard. En attendant, mettez-vous à l&apos;aise, vous et vos hommes, vous êtes nos invités pour les deux semaines à venir.</p>
              <p className="mb-2">L&apos;ingénieur se lève et quitte le bureau en traînant les pieds.</p>
              <p className="mb-2">Maîtresse Halatine semble rassérénée après avoir passé sa colère et sa frustration sur l&apos;Ingénieur. Elle vous regarde longuement sans briser le silence qui s&apos;est installé dans le bureau.</p>
              <p className="italic mb-2">Suivez-moi.</p>
              <p className="mb-2">Un landspeeder vous attend devant le bâtiment. Elle s'installe au volant. Vous quittez l'enceinte de la garnison et longez l'ancienne ligne de front en direction de l'ouest. Le terrain est dégagé et l'environnement porte les traces d'un long conflit. Après une demi-heure de trajet, vous apercevez un tumulus à l'ouest-sud-ouest de votre position. Vous avez la sensation que c'est la destination de votre voyage.</p>
              <p className="mb-2">Le landspeeder s'arrête au pied du monticule qui culmine à une quinzaine de mètres. Une fois à proximité, vous vous rendez compte qu'une partie seulement de la structure a été bâtie de main d'homme. À l'origine, une colline devait se dresser à cet endroit. Pour celle ou ceux qui le perçoivent, l'endroit déborde d'énergie mystique.</p>
              <q className="italic mb-2">C'est ici que se réunissait le cercle de Frère Berthold et de Dame Damiana. Tous deux vivaient dans une maison, non loin, dont il ne reste plus rien aujourd'hui, dit Maîtresse Halatine.</q>
              <p className="mb-2">Elle vous invite à la suivre dans le tumulus par une entrée qui se découpe devant vous. Vous allumez vos torches électriques et lui emboîtez le pas. Dès l'instant où vous pénétrez à l'intérieur du long couloir qui mène à la chambre centrale, vous vous sentez oppressés, sauf l'ecclésiastique qui est galvanisée par l'atmosphère qui règne en ces lieux. Le temps pour atteindre la chambre centrale vous semble disproportionnellement long par rapport aux dimensions extérieures du tumulus.</p>
              <p className="mb-2">L'espace est occupé par une rangée de chaises disposée en cercle autour d'un artefact Anunnaki. C'est une sculpture plus modeste en taille que la gargouille de Shaprut, mais celle-ci semble active en permanence. Une lueur bleue s'en écoule en entrelacs vaporeux qui viennent vous lécher les chevilles et s'enrouler autour de vos jambes.</p>
              <q className="mb-2 italic">Dame Theafana souhaitait que je vous conduise ici, si elle ne revenait pas de mission. Faites ce que vous avez à faire, je vous attends dehors.</q>
              <p className="mb-2">Vous vous regardez tous les trois sans savoir ce qui est attendu de vous. Puis vous ressentez l'appel de l'artéfact. Plus vous vous en approchez, plus l'attraction s'intensifie. C'est comme si les volutes de lumière vous attiraient vers la sculpture. Quand vous n'êtes plus qu'à quelques centimètres du bloc de pierre, une constellation que vous n'avez jamais vue se dessine au-dessus de vous. La constellation vous hypnotise et se grave dans vos mémoires.</p>
              <p className="mb-2">Quand vous ressortez du tumulus, il fait nuit noire. Maîtresse Halatine prie devant un feu de camp. Une odeur de viande et de légumes grillés vient vous chatouiller les narines et vous vous rendez compte que vous êtes affamés. Elle se relève en entendant vos pas.</p>
              <q className="mb-2  italic">Eh bien, ça a été plutôt rapide, lâche-t-elle, en vous détaillant de pied en cap. Oh… pensez à faire soigner votre main à l'infirmerie. Un peu de désinfectant et un bandage feront l'affaire. Pas besoin d'une imposition des mains.</q>
              <p className="mb-2">À cet instant, chacun de vous remarque que sa main gauche a été perforée de part en part avec une précision chirurgicale, pour éviter tout dommage interne. Néanmoins un fin filet de sang s'en échappe.</p>
              <p className="mb-2">Une fois de retour à la garnison, vos vies reprennent leur cours normal, jusqu'au printemps 5020 où vos chemins se croisent de nouveau.</p>
            </div>
          </section>
          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-cinzel">Troisième rencontre pour Fael</h2>
            <div>
            <div>
              <p className="mb-2">Été 5017, Aragon. Demeure de ton grand-père.</p>
              <p className="mb-2">Ton grand-père est assis dans un salon de réception spartiate et surchargé à la fois. Un paradoxe qu&apos;il semble aimer cultiver. Les serfs vont et viennent, apportant des rafraîchissements alors que depuis deux semaines le domaine se liquéfie sous une chaleur accablante. Il t&apos;a convoqué, comme d&apos;ordinaire, par un ordre laconique. Une brève missive dénuée d&apos;affect. Et, comme d&apos;ordinaire, tu as obtempéré. Vous êtes seuls dans la grande pièce, entourés d&apos;une armée de serfs. Mais ce sont des objets. Ils ne comptent pas.</p>
              <q className="mb-2">Ton père me dit qu&apos;il te soupçonne d&apos;avoir encore écrit à tes anciens précepteurs. Entre lui et toi, me voilà bien loti : l&apos;un incapable d&apos;asseoir son autorité et l&apos;autre qui se comporte comme un bébé.</q>
              <p className="mb-2">Il s&apos;apprête à poursuivre, mais à cet instant une porte s&apos;ouvre sur un ancien sous-officier qui a servi sous les ordres de ton grand-père et qui est devenu son majordome quand celui-ci a pris sa retraite.</p>
              <q className="mb-2">Votre hôte, mon Colonel.</q>
              <p className="mb-2">Entre un homme entre deux âges, aux traits émaciés et au regard fuyant.</p>
              <q className="mb-2">Commandant.</q>
              <p className="mb-2">Ton grand-père ne souffle mot, incline la tête et lui indique un fauteuil à sa gauche. L&apos;homme s&apos;assoit.</p>
              <q className="mb-2">Anton Malevik vous prie d&apos;accepter ses excuses, car il ne pourra se joindre à nous, malheureusement. Néanmoins, j&apos;ai toute latitude pour discuter de l&apos;affaire avec vous et votre…— Subalterne, lâche ton grand-père.— Eh bien… lieutenant, je suis enchanté de faire votre connaissance, te dit l&apos;homme. Permettez-moi de résumer la situation. L&apos;activité des Symbiotes sur le front de Stigmata a cessé à la suite de l&apos;opération menée par Dame Theafana al-Malik, louée soit sa bravoure. Ils sont toujours présents sur la planète, bien sûr, mais de source sûre, il y a une DMZ entre leurs forces et les nôtres. Dans ladite DMZ, se trouve un artefact Ur dont la possession permettrait à nos maisons respectives de briller aux yeux de l&apos;Empereur…— Et vous comptez sur nous pour nous salir les mains.— Nous fournissons l&apos;information et chacun sait ce que vaut une information fiable et exclusive. En outre, j&apos;accompagnerai personnellement l&apos;expédition pour laquelle nous fournissons le vaisseau et les clés de saut jusqu&apos;à l&apos;objectif. Sans oublier que nous avons quelqu&apos;un sur place qui effacera toute trace de notre passage.— Le lieutenant commandera quant à lui un détachement de dix hommes.— Merveilleux.</q>
              <p className="mb-2">15 jours plus tard, sur Stigmata.</p>
              <p className="mb-2">Le vaisseau qui vous a transportés depuis Aragon vous a largués dans une navette depuis l&apos;orbite de Stigmata. Vous étiez 14 à bord : le pilote, le technicien, Danilo Czerny (l&apos;homme qu&apos;avait accueilli ton grand-père), tes dix hommes et toi. Un appareil similaire viendrait vous récupérer 72 heures plus tard à la fin de la mission.</p>
              <p className="mb-2">Vous vous êtes posés dans une clairière d&apos;une forêt dense, le seul point dégagé à des kilomètres à la ronde. Au moment du briefing, Danilo t&apos;avait fait savoir qu&apos;il vous faudrait marcher une petite vingtaine d&apos;heures pour arriver sur site depuis le point d&apos;atterrissage. Le pilote et le technicien ont déclaré rester dans la navette puisque leur contrat ne stipulait en aucun cas une « randonnée en territoire Symbiote ». Tu as alors décidé de laisser deux de tes hommes à toutes fins utiles. Malgré les réticences de Danilo et les vives protestations du pilote et du technicien, tu as imposé ton point de vue.</p>
              <p className="mb-2">Puis vous vous êtes enfoncés dans la dense forêt de Stigmata. Après une quinzaine d&apos;heures de marche harassante, vous avez deviné une clairière non loin devant vous. Tu t&apos;es éloigné un peu du chemin afin de te soulager, pour découvrir les deux hommes que tu avais laissés pour garder la navette égorgés. À en juger par la quantité d&apos;insectes, leur mort remontait à quelques heures.</p>
              <p className="mb-2">Des cris en provenance de la clairière t&apos;ont tiré de tes réflexions. Quand tu es arrivé sur place, tu as découvert une scène déconcertante. Le pilote et le technicien gisaient à la lisière de la forêt, et de leurs corps sans vie sortaient des plantes grimpantes qui maintenaient au sol cinq cadavres vêtus de tenues de camouflage high tech qui devaient remonter à la Seconde République. L&apos;un d&apos;entre eux serrait encore dans la main un couteau de combat ensanglanté. La suite est confuse dans ton esprit. Tu as l&apos;image de Danilo Czerny qui avance vers toi les mains levées. Toi qui te saisis de ton arme et la braques sur lui. Lui, le sourire mielleux qui est à quelques pas de toi. Ton doigt presse la détente. Sa tête explose. Le tout dans le plus paisible des silences.</p>
            </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/fael">
            <Button variant="outline" size="lg">
              Retour à la page de Fael
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 