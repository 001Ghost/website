/* ============================================================
   DATA.JS — Baijiu Aroma Types, Producers, Wine Regions
   ============================================================
   IMAGES : chaque producer a son propre champ `image` et
   chaque flagship a son propre `image`.
   Remplace les chemins ci-dessous par tes vraies URLs ou
   chemins locaux (ex: '/images/producers/moutai.jpg').
   ============================================================ */

/* ─── IMAGE POOLS (fallbacks si pas d'image dédiée) ─── */
// Tu peux garder ces pools comme fallback ou les supprimer
// une fois que chaque producer a sa propre image.
import { POOL_B, POOL_W } from './config.js';

/* ============================================================
   11 AROMA TYPES
   ============================================================ */
export const FLAVORS = [

  /* ──────────────────────────────────────────────────────────
     1. SAUCE AROMA — 酱香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "sauce-aroma",
    name: { en: "Sauce Aroma", fr: "Arôme de sauce", zh: "酱香型" },
    nameZh: "酱香型",
    regions: ["Guizhou"],
    color: "#8B4513",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/sauce-aroma.jpg' */
    image: POOL_B.a,

    description: {
      en: `Sauce Aroma (酱香型, jiàng xiāng xíng) is universally regarded as the most prestigious, complex and collectible of all baijiu styles. Its spiritual and geographic heartland is Maotai Town (茅台镇) in Renhuai County, Guizhou Province — a narrow valley carved by the Chishui River at roughly 400m altitude, where a unique convergence of climate, geology and microbiology makes the style essentially irreproducible elsewhere.<br><br>The Chishui River microclimate is characterised by high humidity (annual average ~78%), elevated temperatures, low wind, and a specific population of wild airborne yeasts and bacteria that colonise the grain during outdoor sun-drying — a step that cannot be replicated in a controlled factory environment.<br><br>This terroir has been legally protected since 2001 as a geographically designated production zone.<br><br>The production cycle is the longest and most labour-intensive of any commercial spirit in the world. It begins in late September with the Double Ninth Festival (重阳节) — traditionally considered the optimal moment for microbial inoculation — when locally grown Renhuai red glutinous sorghum (本地红缨子糯高粱) is moistened, steamed and mixed with crushed high-temperature Daqu (大曲).<br><br>This sorghum variety is uniquely suited to the process: its small, tough grain endures the repeated cookings without disintegrating. The grain-and-qu mix is piled outdoors, covered and left to ferment for weeks, generating intense heat. It is then distilled in traditional wooden still-head (甑桶) copper pot stills.<br><br>What follows is extraordinary: this single grain batch will undergo nine separate rounds of distillation (九次蒸馏) and eight rounds of fermentation (八次发酵) over the course of exactly one year, with the Daqu replenished at each cycle.<br><br>The seven distillates collected across these rounds vary dramatically in character — the early rounds are harsh and grain-forward, the middle rounds carry the signature sauce complexity, and the late rounds are softer but more alcoholic.<br><br>After the final distillation, all seven components are blended, poured into ceramic-lined earthen vessels (陶坛), sealed, and aged for a minimum of three years before the master blender assembles the final product using reserves that may span 5–30+ years.<br><br>The resulting spirit is deep amber, ranging from 43% to 53% ABV. Aromatically it is extraordinarily rich: soy-sauce umami, miso, dried tropical fruit (guava, dried mango), stone fruit (dried plum, apricot), roasted grain, leather, tobacco, mushroom, and a deep, complex mineral quality unlike any Western spirit category.<br><br>The finish is famously long — routinely cited at 60+ seconds — and described as satin-smooth. Over 1,000 aromatic compounds have been identified.`,

      fr: `L'Arôme de Sauce (酱香型, jiàng xiāng xíng) est universellement reconnu comme le style de baijiu le plus prestigieux, le plus complexe et le plus collectionnable.<br><br>Son cœur spirituel et géographique est Maotai Town (茅台镇) dans le comté de Renhuai, province du Guizhou — une étroite vallée creusée par la rivière Chishui à environ 400m d'altitude, où une convergence unique de climat, géologie et microbiologie rend le style pratiquement irreproductible ailleurs.<br><br>Le cycle de production est le plus long et le plus exigeant en main-d'œuvre de tous les spiritueux commerciaux au monde. Il débute fin septembre au moment du Festival Double Neuvième (重阳节) — traditionnellement considéré comme le moment optimal pour l'inoculation microbienne.<br><br>Le sorgho glutineux rouge local (本地红缨子糯高粱) est humidifié, cuit à la vapeur puis mélangé avec du Daqu haute température (大曲) concassé.<br><br>Ce qui suit est remarquable : ce seul lot de grain subira neuf rondes de distillation séparées (九次蒸馏) et huit rondes de fermentation (八次发酵) sur exactement un an.<br><br>Les sept distillats récoltés varient dramatiquement en caractère. Après la distillation finale, tous les composants sont mélangés, versés dans des cuves en céramique, scellés et vieillis un minimum de trois ans avant l'assemblage final utilisant des réserves pouvant couvrir 5 à 30+ années.<br><br>Le spiritueux résultant est d'un ambré profond (43–53% vol). Aromatiquement, il est extraordinairement riche : umami de sauce soja, miso, fruits tropicaux séchés, fruits à noyau, grain torréfié, cuir, tabac, champignon, et une minéralité complexe. La finale est célèbre pour durer 60+ secondes.`,

      zh: `酱香型被普遍认为是所有白酒风格中最具威望、最为复杂的收藏级风格。其精神和地理核心是贵州省仁怀县茅台镇——赤水河畔一处约400米海拔的狭窄河谷，独特的气候、地质和微生物学条件使这一风格在其他地方几乎无法复制。<br><br>赤水河小气候年均湿度约78%，气温偏高，风速较低，独特的野生空气酵母和细菌种群在粮食户外晾晒（摊晾）期间定植——这一步骤在受控工厂环境中无法复制。这一风土条件自2001年起作为地理标志产品保护区受法律保护。<br><br>生产周期是世界所有商业烈酒中最长、劳动强度最高的。始于重阳节（农历九月初九）——传统上被认为是微生物接种的最佳时机——当地种植的仁怀红缨子糯高粱经润粮、蒸制后与粉碎的高温大曲混合。这一高粱品种因其小而坚韧的颗粒能耐受反复蒸煮而不崩解，极为适合该工艺。<br><br>随后发生的事情非凡：这批粮食将在整整一年内经历九次独立蒸馏和八次发酵，每个循环补加大曲。收集的七轮蒸馏液特点迥异——早期轮次粗粝、粮食味突出，中间轮次携带标志性的酱香复杂性，后期轮次更柔和但酒精度更高。最终蒸馏后，七个组分勾调后倒入陶制容器封存，最少陈酿三年，再由勾调大师调配，所用基酒年份可跨越5-30年以上。`
    },

    science: {
      en: `Sauce Aroma baijiu contains more identified aromatic compounds than any other spirit category in the world — over 1,000 distinct molecules have been isolated and characterised.<br><br>The three primary classes are: esters (乙酯类, dominated by ethyl lactate and ethyl acetate in roughly equal proportions, unlike other styles); higher alcohols (高级醇); and pyrazines (吡嗪类) — the nitrogen-containing heterocyclic compounds responsible for roasted, nutty and savoury notes, formed through Maillard reactions during high-temperature Daqu production (60–65°C).<br><br>The Daqu itself — a compressed brick of moistened mixed grains (wheat-heavy, with some sorghum and barley) inoculated with ambient microflora and incubated at extremely high temperatures — is a concentrated microbial starter unlike anything used in Western distilling.<br><br>The peak temperature reached during Daqu preparation (60–65°C) selects for thermophilic bacteria and heat-tolerant molds including Bacillus subtilis, Aspergillus niger, and specific Rhizopus species, creating a microbial community absent in all other baijiu styles. These organisms produce the precursors that ultimately drive the sauce-soy aromatic character.<br><br>Fermentation occurs in stone pits (石窖) lined with local Maotai clay. The clay itself harbours a permanent community of anaerobic bacteria — notably Clostridium and Lactobacillus species — that develop over decades and contribute irreplaceable flavour precursors to the fermenting mash.<br><br>Scientific analysis confirms that Maotai Town's unique geology (red sandstone, dolomite and clay strata) results in soil and water chemistry that cannot be replicated elsewhere — including elevated levels of trace minerals (zinc, manganese, selenium) that directly affect microbial metabolism.<br><br>The Chishui River water used in production is soft and slightly alkaline (pH ~7.2–7.8), exceptionally low in heavy metals and high in calcium and magnesium — properties that favour esterification during fermentation.<br><br>Legal protection of the Maotai geographic designation (茅台镇地理标志) prohibits the labelling of any baijiu produced outside this defined zone as authentic Maotai-style sauce aroma.`,

      fr: `Le Baijiu Arôme de Sauce contient plus de composés aromatiques identifiés que toute autre catégorie de spiritueux — plus de 1 000 molécules distinctes ont été isolées.<br><br>Les trois classes principales sont : les esters (dominés par le lactate d'éthyle et l'acétate d'éthyle en proportions approximativement égales) ; les alcools supérieurs ; et les pyrazines — responsables des notes grillées et savoureuses, formées par des réactions de Maillard lors de la production du Daqu haute température (60–65°C).<br><br>La fermentation se déroule dans des fosses en pierre tapissées d'argile locale de Maotai. Cette argile abrite une communauté permanente de bactéries anaérobies — notamment des espèces Clostridium et Lactobacillus — qui se développent sur des décennies.<br><br>L'eau de la rivière Chishui utilisée est douce et légèrement alcaline (pH ~7,2–7,8), exceptionnellement pauvre en métaux lourds.`,

      zh: `酱香型白酒含有比世界上任何其他烈酒品类更多的已识别芳香化合物——已分离和表征的不同分子超过1000种。三大主要类别为：酯类（由乳酸乙酯和乙酸乙酯以大致相等的比例主导，与其他风格不同）；高级醇；以及吡嗪类——含氮杂环化合物，负责烘烤、坚果和鲜味香气，通过高温大曲生产（60-65°C）中的美拉德反应形成。

发酵在用茅台当地黏土衬砌的石窖中进行。黏土本身harbors永久性厌氧菌群落——特别是梭状芽胞杆菌和乳酸菌——这些菌群经过数十年的发展，为发酵醪提供不可替代的风味前体物质。科学分析证实，茅台镇独特的地质条件（红砂岩、白云岩和黏土地层）产生了无法在其他地方复制的土壤和水质化学特性。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "kweichow-moutai",
        name: "Kweichow Moutai",
        founded: "1951",
        region: "Maotai Town (茅台镇), Renhuai, Guizhou",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/kweichow-moutai.jpg' */
        image: "https://www.barnews.ch/wp-content/uploads/Kweichow-Moutai.jpg",

        description: {
          en: `Kweichow Moutai (贵州茅台酒股份有限公司) is not merely a spirits brand — it is a Chinese cultural institution, a geopolitical instrument, and the world's most valuable spirits company by market capitalisation (peak valuation exceeding $400 billion USD, consistently surpassing LVMH in the luxury goods sector). Its story is inseparable from the history of the People's Republic of China.<br><br>The roots of Moutai production in Maotai Town trace to the Qing Dynasty (1644–1912), when at least a dozen private distilleries operated along the Chishui River.<br><br>The three most prominent — Chengyi (成义烧坊), Ronghe (荣和烧坊) and Hengxing (恒兴烧坊) — were nationalised by the Communist government and merged by decree in 1951 to form the Kweichow Moutai Distillery (贵州茅台酒厂). The founding date of 1951 thus represents the merger, not the origin of production, which significantly predates it.<br><br>Moutai's rise to national and international prestige came through its role in Chinese state diplomacy. It was served at the founding banquet of the PRC in October 1949, at Zhou Enlai's diplomatic negotiations during the Korean War (1950–53), and most famously at President Nixon's historic visit to China in February 1972, where both Nixon and Premier Zhou reportedly drank Moutai throughout the state dinner — an event that introduced the spirit to Western consciousness.<br><br>For decades, Moutai served as China's de facto diplomatic gift, distributed through state channels to foreign heads of state and dignitaries. It is still mandatory at formal PRC state banquets.<br><br>The distillery currently employs approximately 40,000 workers, produces over 56,000 tonnes of spirit annually, and maintains a complex of production facilities, museums, hotels and cultural heritage sites across a 15.03 km² protected production zone.<br><br>Moutai's listed shares (SH:600519) are among the highest-priced and most closely watched on the Shanghai Stock Exchange, often used as a barometer for Chinese luxury consumer sentiment.`,

          fr: `Kweichow Moutai est une institution culturelle chinoise, un instrument géopolitique et la société de spiritueux la plus valorisée au monde (capitalisation boursière dépassant 400 milliards USD). Son histoire est indissociable de celle de la République populaire de Chine.<br><br>Les racines de la production de Moutai à Maotai Town remontent à la Dynastie Qing (1644-1912), quand au moins une douzaine de distilleries privées opéraient le long de la rivière Chishui.<br><br>Les trois plus prominentes — Chengyi, Ronghe et Hengxing — furent nationalisées et fusionnées par décret en 1951. La montée en prestige de Moutai est passée par son rôle dans la diplomatie d'État chinoise : servi lors du banquet fondateur de la RPC en octobre 1949, lors des négociations de la Guerre de Corée, et lors de la visite historique du Président Nixon en février 1972. La distillerie emploie aujourd'hui environ 40 000 travailleurs et produit plus de 56 000 tonnes annuellement.`,

          zh: `贵州茅台酒股份有限公司不仅仅是一个烈酒品牌——它是中国的文化机构、地缘政治工具，也是按市值计算世界上最有价值的烈酒公司（峰值估值超过4000亿美元，在奢侈品行业持续超越LVMH）。其历史与中华人民共和国的历史密不可分。<br><br>茅台镇白酒生产的根源可追溯至清朝（1644-1912年），当时至少有十几家私营酒坊在赤水河畔经营。最著名的三家——成义烧坊、荣和烧坊和恒兴烧坊——于1951年被共产党政府国有化合并，成立贵州茅台酒厂。<br><br>茅台的国内外声誉通过其在中国国家外交中的角色确立：1949年10月中华人民共和国开国宴上饮用，朝鲜战争（1950-53年）外交谈判期间饮用，最著名的是1972年2月尼克松总统历史性访华，据报道尼克松和总理周恩来在国宴全程饮用茅台——这一事件让西方世界认识了这款烈酒。酒厂目前雇用约4万名员工，年产量超过5.6万吨。`
        },

        flagship: {
          name: "Moutai Feitian (Flying Fairy)",
          nameZh: "飞天茅台",
          abv: "53%",
          price: "~300–500€ (official retail ~235€; secondary market significantly higher)",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/moutai-feitian.jpg' */
          image: "https://www.barnews.ch/wp-content/uploads/Kweichow-Moutai.jpg",

          notes: {
            en: `The Feitian (飞天, "Flying Fairy") label — depicting the flying apsaras from the Dunhuang cave murals — has been Moutai's international flagship since 1958, when it was specifically created for export markets.<br><br>The bottle is immediately recognisable: an ivory ceramic bottle sealed with a distinctive red wax cap and tied with red ribbon, with cream-coloured labels in both Chinese and English.<br><br>In the glass, Feitian is deep amber to pale gold, with notable viscosity — legs run slowly down the glass. The nose opens with an initially assertive but not aggressive soy-sauce character, which unfolds over 3–5 minutes of air contact into an extraordinary complexity: fermented soybean paste (doubanjiang), dried shiitake mushroom, dark chocolate, ripe guava, dried apricot, roasted sorghum, aged cedar, tobacco leaf, dried tangerine peel, and a deep mineral undertone reminiscent of warm slate.<br><br>There is no harshness — the 53% ABV is absorbed into the aromatic structure with remarkable integration.<br><br>On the palate, the entry is warming and silky. The mid-palate develops the umami character further — it is simultaneously savoury and sweet, with a richness that resembles aged soy-glazed duck more than conventional Western spirit categories.<br><br>The finish is the hallmark: typically 60–90 seconds of complex, evolving warmth that transitions through savoury mineral, dried fruit, then fades to a clean, slightly floral note. <br><br>Minimum pre-release aging: 5 years. Most commercially available bottles contain a blend of spirits from multiple vintages, with some components aged 7–15+ years. Cellaring a bottle for 3–10 years post-purchase is practiced by Chinese collectors and produces measurable quality improvement.`,

            fr: `Le label Feitian (飞天, "Fée Volante") — représentant les apsaras volantes des fresques de Dunhuang — est le fleuron international de Moutai depuis 1958. Dans le verre, la couleur est d'un ambré profond à or pâle, avec une viscosité notable. Le nez s'ouvre sur un caractère de sauce soja affirmé mais non agressif, qui se déploie sur 3–5 minutes de contact avec l'air en une complexité extraordinaire : pâte de soja fermentée, shiitake séché, chocolat noir, goyave mûre, abricot sec, cèdre vieilli, tabac, écorce de mandarine séchée. En bouche, l'entrée est chaude et soyeuse, le milieu de bouche développe l'umami de manière complexe. La finale dure typiquement 60–90 secondes.`,

            zh: `飞天标签（描绘敦煌石窟壁画中的飞天仙女）自1958年起成为茅台的国际旗舰产品，专为出口市场而创。瓶子辨识度极高：象牙色陶瓷瓶，独特的红色蜡封瓶口，红色丝带，中英文奶白色标签。<br><br>在杯中，飞天呈深琥珀色至淡金色，粘度显著——挂杯缓慢流淌。鼻腔先是坚定但不侵略性的酱油特征，在3-5分钟醒酒后展开为非凡的复杂性：豆瓣酱、干香菇、黑巧克力、熟透番石榴、杏干、烘烤高粱、陈年雪松、烟叶、陈皮，以及类似温暖板岩的深层矿物质底味。53%的酒精度被融入香气结构中，整合度非凡。<br><br>口感入口温热如绸。中段进一步发展鲜味特征——同时兼具咸鲜和甜感，其丰富度更接近酱汁红烧鸭而非西方传统烈酒品类。余味是其标志：通常60-90秒的复杂渐进式温热感，从咸鲜矿物质过渡到干果，最终消散于干净、略带花香的尾韵。上市前最少陈酿5年。`
          }
        },

        products: [
          {
            slug: "feitian-53",
            name: "Moutai Feitian 53%",
            nameZh: "飞天茅台",
            abv: "53%",
            price: "~300–500€",
            image: "https://moutai.com.au/cdn/shop/files/Moutai_Feitian_500mL_Front.jpg?v=1750723051",
            aromas: { en: "Soy sauce, dried mushroom, dark chocolate, ripe guava, tobacco", fr: "Sauce soja, champignon séché, chocolat noir, goyave mûre, tabac", zh: "酱香、干香菇、黑巧克力、熟番石榴、烟草" },
            temperature: "15–20°C",
            grains: { en: "Local Renhuai red glutinous sorghum", fr: "Sorgho glutineux rouge de Renhuai", zh: "本地红缨子糯高粱" },
            aging: { en: "Min. 5 years in sealed earthen vessels", fr: "Min. 5 ans en cuves en céramique scellées", zh: "陶坛封存最少5年" },
            notes: { en: "The defining expression of Sauce Aroma baijiu. Deep amber, extraordinary aromatic complexity. Finish lasts 60–90 seconds.", fr: "L'expression définitive de l'arôme sauce. Ambré profond, complexité aromatique extraordinaire. Finale de 60–90 secondes.", zh: "酱香型白酒的定义性表达。深琥珀色，香气复杂非凡，余味长达60-90秒。" }
          },
          {
            slug: "moutai-1935",
            name: "Moutai 1935",
            nameZh: "茅台1935",
            abv: "53%",
            price: "~150–250€",
            image: "https://moutai.com.au/cdn/shop/files/Moutai1935500mLBottleFront.jpg?v=1728515574",
            aromas: { en: "Aged soy, dried apricot, roasted grain, cedar, mineral", fr: "Soja vieilli, abricot sec, grain torréfié, cèdre, minéral", zh: "陈年酱香、杏干、烘烤谷物、雪松、矿物质" },
            temperature: "15–20°C",
            grains: { en: "Local Renhuai red glutinous sorghum", fr: "Sorgho glutineux rouge de Renhuai", zh: "本地红缨子糯高粱" },
            aging: { en: "Multi-vintage blend, components aged 7–15 years", fr: "Assemblage multi-millésimes, composants vieillis 7–15 ans", zh: "多年份勾调，组分陈酿7-15年" },
            notes: { en: "Created to commemorate the historic Long March. Rich, round and exceptionally smooth with a long mineral finish.", fr: "Créé pour commémorer la Longue Marche historique. Riche, rond et exceptionnellement soyeux avec une longue finale minérale.", zh: "为纪念历史性长征而创制。口感丰富圆润，异常顺滑，矿物质余味悠长。" }
          },
          {
            slug: "moutai-prince",
            name: "Moutai Prince (王子酒)",
            nameZh: "茅台王子酒",
            abv: "53%",
            price: "~40–70€",
            image: "https://www.lxfrance.fr/12997-large_default/moutai-prince-53-500ml.jpg",
            aromas: { en: "Lighter sauce aroma, floral, honey, fresh grain", fr: "Arôme sauce plus léger, floral, miel, grain frais", zh: "较淡酱香、花香、蜂蜜、新鲜谷物" },
            temperature: "15–18°C",
            grains: { en: "Local Renhuai red glutinous sorghum", fr: "Sorgho glutineux rouge de Renhuai", zh: "本地红缨子糯高粱" },
            aging: { en: "Min. 3 years, accessible entry-level expression", fr: "Min. 3 ans, expression d'entrée de gamme accessible", zh: "最少陈酿3年，亲民入门款" },
            notes: { en: "The accessible entry point into the Moutai range. Lighter sauce character, floral and approachable, ideal for those new to the category.", fr: "L'entrée de gamme accessible de Moutai. Caractère sauce plus léger, floral et abordable, idéal pour les néophytes.", zh: "茅台系列的亲民入门款。酱香特征较淡，花香宜人，是白酒新手的理想选择。" }
          }
        ]
      },

      {
        slug: "langjiu",
        name: "Langjiu (郎酒)",
        founded: "1898",
        region: "Erlang Town (二郎镇), Gulin County, Sichuan (Chishui River)",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/langjiu.jpg' */
        image: "https://english.ckgsb.edu.cn/knowledge/wp-content/uploads/2025/01/Case-study_Spirited-Competition-How-alcohol-company-Langjiu-builds-brand-potential.jpg",

        description: {
          en: `Langjiu (郎酒, "Lang Spirit") occupies a uniquely paradoxical position in Chinese baijiu: it is a Sichuan-registered company producing a Guizhou-style spirit. Its distillery sits in Erlang Town (二郎镇) on the east bank of the Chishui River — just 40km south of Maotai Town along the same waterway — in the dramatically scenic Erlang Mountain valley.<br><br>This geographic proximity means Langjiu shares the same unique microclimate, wild yeast populations, and water source as Moutai, yet legally cannot use the "Maotai Town" designation.<br><br>The history of spirit production in Erlang Town is ancient — local records document rice wine (醪糟) production dating to the Han Dynasty (~135 BCE), when the area was part of the western Sichuan trading network.<br><br>The modern Langjiu enterprise traces to 1898 with the establishment of the Huichang distillery (惠川烧坊), later renamed successively as the state-owned enterprise took its current corporate form following nationalisation in 1952. The brand name "Langjiu" was officially adopted in 1984.<br><br>What makes Langjiu distinctive relative to Moutai is not merely geography but philosophy. The company has invested enormously in terroir communication — constructing the Langjiu Cultural Park (郎酒庄园), a sprawling, multi-zone destination spanning caves, cellars, production areas and luxury accommodation, opened progressively from 2016. The cave storage system is particularly notable: Langjiu stores baijiu in a natural cave complex (天宝洞 and 地宝洞, "Heaven Treasure Cave" and "Earth Treasure Cave") carved by geological processes over hundreds of thousands of years, maintaining constant temperature (18–21°C) and humidity (80–85%) year-round — conditions ideal for extended aging.<br><br>Langjiu produces two distinct product lines reflecting its dual geographic position: Sauce Aroma (酱香郎酒) and Strong Aroma (浓香郎酒), making it one of very few companies to produce premium expressions in multiple aroma categories from a single facility.`,

          fr: `Langjiu (郎酒) occupe une position paradoxale unique : entreprise enregistrée au Sichuan produisant un spiritueux de style Guizhou. Sa distillerie est à Erlang Town, sur la rive est de la rivière Chishui — à seulement 40km au sud de Maotai Town.<br><br>Cette proximité géographique signifie que Langjiu partage le même microclimat, les mêmes populations de levures sauvages et la même source d'eau que Moutai.<br><br>La distillerie moderne remonte à 1898 avec l'établissement de la distillerie Huichang. Ce qui distingue Langjiu est notamment son système de stockage en cave naturelle (天宝洞 et 地宝洞), maintenant une température constante (18–21°C) et une humidité (80–85%) idéales pour le vieillissement prolongé.`,

          zh: `郎酒在中国白酒中占据独特的矛盾地位：一家注册于四川的企业，生产贵州风格的烈酒。其酒厂坐落于赤水河东岸的二郎镇——距茅台镇沿同一水道南行仅40公里——位于风景壮丽的二郎山河谷。这一地理邻近意味着郎酒与茅台共享相同的独特小气候、野生酵母种群和水源，却在法律上不能使用"茅台镇"标志。

在区分于茅台的产品特色方面，郎酒独特地投资于风土传播——建设郎酒庄园。天宝洞和地宝洞天然溶洞储酒体系尤为值得关注：全年保持恒定的温度（18-21°C）和湿度（80-85%），是长期陈酿的理想条件。郎酒生产酱香和浓香两条产品线，是极少数能在同一设施从多个香型生产高端产品的企业之一。`
        },

        flagship: {
          name: "Qinghualan (青花郎) — Blue Flower Lang",
          nameZh: "青花郎",
          abv: "53%",
          price: "~80–150€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/langjiu-qinghualan.jpg' */
          image: POOL_B.b,

          notes: {
            en: `Qinghualan (青花郎, "Blue Flower Lang") is Langjiu's prestige tier — the expression positioned directly as a rival to Feitian Moutai in the premium sauce aroma segment. Its packaging is striking: a blue-and-white porcelain aesthetic referencing the iconic chinoiserie tradition, with an elongated bottle designed to evoke traditional ceramic vessels.<br><br>The liquid itself tells a story of cave-matured complexity. The nose is initially more approachable than Moutai — less aggressive soy-sauce character, more generous dried fruit (prune, candied ginger, dried persimmon) and a distinctive floral lift from the cave terroir.<br><br>The cave storage imparts a characteristic cool minerality absent in pit-stored Moutai. With extended air contact, the profile deepens: miso soup, pickled plum, aged cedar, incense wood (sandalwood notes), and a subtle smoky quality from the high-temperature Daqu.<br><br>The palate entry is immediately impressive — full-bodied, warming but not burning, with excellent integration of the 53% ABV. The mid-palate demonstrates genuine complexity: layers of savoury umami, sweet dried fruit and grain texture arrive sequentially rather than simultaneously.<br><br>The finish extends 45–70 seconds, slightly shorter than top Moutai expressions but with comparable aromatic depth. Aged minimum 5 years in cave storage prior to release.`,

            fr: `Qinghualan (青花郎) est le niveau de prestige de Langjiu, positionné directement en rival de Feitian Moutai. Son packaging est saisissant : une esthétique porcelaine bleue et blanche. Le nez est initialement plus accessible que Moutai — moins de caractère sauce soja agressif, plus de fruits secs généreux (pruneau, gingembre confit, kaki séché) et un soulèvement floral distinctif du terroir de cave. La cave confère une minéralité fraîche caractéristique absente dans le Moutai stocké en fosse. La finale s'étend 45–70 secondes, avec une profondeur aromatique comparable.`,

            zh: `青花郎是郎酒的高端系列——定位为在高端酱香市场直接与飞天茅台竞争的产品。其包装引人注目：青花瓷美学，参考标志性的中国瓷器传统，细长瓶身设计唤起传统陶瓷器皿的意象。

酒液本身讲述了一个洞藏复杂性的故事。鼻腔初始比茅台更易接近——酱油特征不那么强烈，更多慷慨的干果（梅子干、糖渍生姜、柿饼）以及洞藏风土带来的独特花香。洞藏赋予一种茅台窖藏中没有的特征性清凉矿物感。充分醒酒后，风格加深：味噌汤、话梅、陈年雪松、香木（檀香笔记）以及来自高温大曲的微妙烟熏感。余味延续45-70秒。`
          }
        }
      },

      {
        slug: "guotai",
        name: "Guotai Jiu (国台酒)",
        founded: "1879",
        region: "Renhuai, Guizhou (Maotai Production Zone)",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/guotai.jpg' */
        image: "https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/469997853_122172519128144932_3979301574122020189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=LfvA76TPwHkQ7kNvwFBWXts&_nc_oc=AdpqYxxBCgs_ek2qW4HYsQ4sq7VhvRNAhCwqgL6LyNyRRwazrbRoYRSxwggY7auteCAGzrI8KsSE_J_yfyP409uk&_nc_zt=23&_nc_ht=scontent-cdg4-3.xx&_nc_gid=i5I3_qZGDC07hvtOdiV9Rw&_nc_ss=7b2a8&oh=00_Af_cycTGNJrgxdu-YFAxeZLnR74iq3wpOWYmJkz-tBk91w&oe=6A21FB58",

        description: {
          en: `Guotai (国台, "National Platform") is one of the most compelling value-quality propositions in premium sauce aroma baijiu — a distillery operating within the same protected Maotai Town geographic designation as Kweichow Moutai, following identical production protocols, but at a fraction of the prestige premium.<br><br>Founded in 1879 as one of the private Renhuai distilleries predating the 1951 Moutai nationalisation, Guotai survived the collectivisation era as a state-owned enterprise and was subsequently restructured as a joint-stock company in the 1990s.<br><br>The modern Guotai distillery is notably technology-forward by baijiu standards: it has partnered with digital technology companies including Tencent to implement IoT-based fermentation monitoring, and uses AI-assisted blending tools that cross-reference historical tasting records — while insisting that the final blending decision remains with human masters.<br><br>Guotai follows the same nine-distillation, eight-fermentation, one-year-cycle protocol as Moutai, using the same Renhuai red sorghum, the same Chishui River water, and high-temperature Daqu.<br><br>Its fermentation pits are operated within the legally protected zone, meaning its wild yeast and bacterial terroir is substantively identical to Moutai's. The meaningful difference is not production but age: Moutai's oldest reserve stocks span 30+ years; Guotai's reserves, being a younger premium enterprise in its current form, are comparatively shallower, limiting the ceiling of its ultra-aged expressions.`,

          fr: `Guotai (国台) est une distillerie opérant dans la même désignation géographique protégée de Maotai Town que Kweichow Moutai, suivant des protocoles de production identiques, mais à une fraction de la prime de prestige. Fondée en 1879, elle a survécu à l'ère de la collectivisation en tant qu'entreprise d'État. Guotai est notable pour son approche technologique : elle a collaboré avec Tencent pour mettre en œuvre une surveillance de fermentation basée sur l'IoT, tout en maintenant la décision finale de l'assemblage avec des maîtres humains.`,

          zh: `国台是高端酱香白酒中最具价值-质量说服力的选择之一——一家在与贵州茅台相同的茅台镇地理标志保护区内运营的酒厂，遵循相同的生产规程，但价格远低于品牌溢价。

1879年创建，作为1951年茅台国有化之前的仁怀私营酒坊之一，国台在集体化时代作为国有企业幸存下来。现代国台酒厂在白酒行业标准上显著技术前沿：与腾讯等数字技术公司合作实施基于物联网的发酵监控，并使用AI辅助调配工具交叉参考历史品鉴记录——同时坚持最终调配决策由人类大师做出。`
        },

        flagship: {
          name: "Guotai 15 Year (国台15年)",
          nameZh: "国台15年",
          abv: "53%",
          price: "~150–220€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/guotai-15year.jpg' */
          image: POOL_B.c,

          notes: {
            en: `The 15-year expression is Guotai's statement piece — a demonstration that extended aging within the Maotai geographic zone produces genuinely different spirits from younger releases, not merely a marketing premium. <br><br>The increased age manifests in colour first: deeper amber with more pronounced reddish-brown undertones than the 5-year expression. The nose shows the characteristic oxidative development of extended ceramic-vessel aging: the fresh soy-sauce sharpness of youth has given way to a mellower, richer profile dominated by dried black mushroom (porcini register), dark fruit preserve (fig, date, prune), aged leather, and a deep, complex mineral quality.<br><br>There is less brightness but considerably more depth.<br><br>The palate delivers on the nose's promise: full-bodied, almost oil-textured, with exceptional length. The savoury-sweet balance tips further toward savoury at this age — umami-rich, with a texture that coats the mouth.<br><br>The finish extends well past 60 seconds with evolving mineral, spice and woody notes. A genuine expression of what extended Maotai-zone aging can achieve at a significantly lower price than equivalent-aged Moutai.`,

            fr: `L'expression 15 ans est la pièce maîtresse de Guotai — une démonstration que le vieillissement prolongé dans la zone géographique de Maotai produit des spiritueux véritablement différents. La couleur est plus profonde, le nez montre le développement oxydatif caractéristique : champignon noir séché, fruits sombres confits, cuir vieilli. La finale dépasse largement 60 secondes avec des notes minérales et boisées évolutives.`,

            zh: `15年表达是国台的代表作——证明茅台地理区域内的延长陈酿能产生与年轻酒款真正不同的产品，而不仅仅是营销溢价。

颜色更深，呈更明显的红棕色调。鼻腔展现陶瓷容器长期陈酿特有的氧化发展：年轻时清新的酱油锋锐已让位于更柔和、更丰富的风格，以干香菇（牛肝菌风格）、深色水果蜜饯（无花果、枣、梅干）、陈年皮革和深层复杂矿物质为主。余味轻松超过60秒，带有渐进的矿物质、香料和木质香气。`
          }
        }
      },

      {
        slug: "xijiu",
        name: "Xijiu (习酒)",
        founded: "1952",
        region: "Xishui County, Zunyi, Guizhou (Chishui River Valley)",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/xijiu.jpg' */
        image: "https://design.museaward.com/upload/entry/files/ME232626/small/31601770363512.jpg",

        description: {
          en: `Xijiu (习酒, "Xishui Spirit") represents a fascinating chapter in Chinese baijiu corporate governance. Founded in 1952 as a state-owned enterprise in Xishui County, it was acquired by Kweichow Moutai Group in 1998, becoming a wholly owned subsidiary.<br><br>For two decades, Xijiu operated essentially as Moutai's "accessible" brand — same production zone, same sauce aroma protocols, lower price point. In 2021, Xijiu was spun off as an independent corporate entity (习酒股份有限公司) with its own management, strategy and distribution — an unusual and closely watched separation in the Chinese spirits industry.<br><br>The Xishui production zone sits along the Chishui River approximately 80km south of Maotai Town. While sharing the same river water source and broadly similar climate conditions, the specific microclimate and geology of Xishui County differs from the core Renhuai/Maotai zone — producing a sauce aroma baijiu that is genuine and high-quality but slightly differentiated in character: generally described as slightly cleaner and more floral, with less of the deep savoury complexity of core Moutai zone production.<br><br>Xijiu now positions itself as a full competitor to Langjiu in the 100–300 RMB premium tier, with its Junpin series at the entry premium and the higher-end Junjing series targeting the 300–500 RMB segment. The brand's expansion ambitions are backed by inherited Moutai production infrastructure and expertise, making it one of the fastest-growing premium sauce aroma producers.`,

          fr: `Xijiu (习酒) représente un chapitre fascinant de gouvernance d'entreprise. Fondée en 1952, elle a été acquise par le groupe Kweichow Moutai en 1998. En 2021, Xijiu a été scindée en entité corporative indépendante — une séparation inhabituelle dans le secteur chinois des spiritueux. La zone de production Xishui longe la rivière Chishui à environ 80km au sud de Maotai Town, produisant un arôme sauce légèrement plus propre et floral que le cœur de la zone Maotai.`,

          zh: `习酒在中国白酒企业治理中代表着一个迷人的章节。1952年创建为国有企业，1998年被贵州茅台集团收购成为全资子公司。2021年，习酒被拆分为独立公司实体（习酒股份有限公司）——中国烈酒行业中不寻常且备受关注的分离。

习水产区沿赤水河位于茅台镇以南约80公里处。虽共享相同的河水水源和大致相似的气候条件，但习水县的特定小气候和地质与仁怀/茅台核心区有所不同——生产的酱香型白酒真实、高品质，但特征略有差异：通常被描述为稍显干净、花香更多，深层鲜味复杂性略低于茅台核心区产品。`
        },

        flagship: {
          name: "Xijiu Junpin (习酒·君品)",
          nameZh: "习酒·君品",
          abv: "53%",
          price: "~60–100€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/xijiu-junpin.jpg' */
          image: POOL_B.d,

          notes: {
            en: `Junpin (君品, "Sovereign Quality") is the entry point into Xijiu's premium tier and an excellent argument for the Chishui River sauce aroma terroir at an accessible price. The production protocol is genuine — authentic twelve-stage sauce aroma methods, Chishui River water, Renhuai sorghum, high-temperature Daqu — and the quality shows.<br><br>The nose presents a somewhat lighter, more immediately approachable sauce aroma profile compared to Moutai or Qinghualan: the soy-sauce character is present but more restrained, with more prominent fresh floral notes (osmanthus, dried chrysanthemum), clean grain, and light stone fruit (fresh plum, apricot).<br><br>At this price point the complexity ceiling is lower than the ultra-premium tier, but the balance and cleanness are notably high.<br><br>The palate is warm, medium-bodied, with a clean dry grain character dominating. The finish extends 25–40 seconds — shorter than premium Moutai expressions but with pleasant mineral and light floral echo.<br><br>An excellent introduction to authentic sauce aroma for those reluctant to invest in the Moutai price premium, and a serious daily drinking choice for established sauce aroma enthusiasts.`,

            fr: `Junpin (君品) est le point d'entrée du niveau premium de Xijiu. Le profil de nez présente un arôme sauce plus léger et plus accessible que Moutai ou Qinghualan : le caractère sauce soja est présent mais plus retenu, avec des notes florales plus proéminentes (osmanthus, chrysanthème séché). La finale s'étend 25–40 secondes. Excellente introduction à l'arôme sauce authentique pour ceux qui hésitent à investir dans la prime Moutai.`,

            zh: `君品是习酒高端系列的入门产品，是在亲民价格下体验赤水河酱香风土的绝佳理由。生产工艺真实——十二步酱香工艺、赤水河水、仁怀高粱、高温大曲——品质有目共睹。

鼻腔呈现比茅台或青花郎略轻、更即时易接近的酱香风格：酱油特征存在但更克制，花香更突出（桂花、干菊花）、干净谷物和轻盈核果（新鲜李子、杏子）。余味延续25-40秒。对于不愿投入茅台价格溢价的人来说，这是进入真实酱香的绝佳入门，也是酱香爱好者认真的日常饮用选择。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     2. STRONG AROMA — 浓香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "strong-aroma",
    name: { en: "Strong Aroma", fr: "Arôme fort", zh: "浓香型" },
    nameZh: "浓香型",
    regions: ["Sichuan", "Jiangsu", "Anhui"],
    color: "#C5692A",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/strong-aroma.jpg' */
    image: POOL_B.b,

    description: {
      en: `Strong Aroma (浓香型, nóng xiāng xíng) is the democratic heart of Chinese baijiu — accounting for approximately 70% of total national baijiu sales by volume and over 60% by value, making it by far the most commercially dominant style.<br><br>It is the spirit most Chinese people think of when they think of baijiu: rich, fruity, accessible, the lubricant of business dinners, family celebrations, and village festivals across most of the country.<br><br>The style's geographic origin is Sichuan Province — specifically Luzhou (泸州), where archaeological evidence and historical records trace continuous fermented grain production to the Qin Dynasty (221–206 BCE).<br><br>The definitive founding event for the strong aroma style was the construction of Luzhou Laojiao's fermentation pits in 1573 (Ming Dynasty), which are still in operation today and considered the world's oldest continuously operating commercial fermentation vessels.<br><br>This 450+ year continuity is not historical romanticism — the ancient pits contain an irreplaceable microbial community accumulated over centuries that contributes flavour characteristics impossible to replicate in new pits. New strong aroma pits require approximately 30–50 years of operation before developing a comparable microbial ecosystem.<br><br>The style is also extensively produced in Jiangsu Province (Yanghe, Shuanggou) and Anhui Province (Gujinggong, Kouzijiao), with regional variations. Sichuan expressions tend toward more pronounced earthy-mineral notes from the Sichuan Basin geology; Jiangsu expressions are generally softer, more delicate and floral; Anhui expressions occupy an intermediate position.<br><br>The defining production feature of strong aroma is fermentation in mud pits (泥窖, ní jiào) — excavated earth vessels typically 1.5–3m deep, lined with the local yellow clay that develops its characteristic microbial community over decades.<br><br>Fermentation lasts 60–90 days (vastly longer than Sauce Aroma's fermentation periods of 30 days per round, but without the multiple-round structure). A medium-high temperature Daqu (55–62°C) provides the microbial starter.`,

      fr: `L'Arôme Fort (浓香型) est le cœur démocratique du baijiu chinois — représentant environ 70% des ventes nationales totales en volume. C'est le spiritueux auquel la plupart des Chinois pensent quand ils pensent au baijiu. L'origine géographique est le Sichuan, spécifiquement Luzhou, où des preuves archéologiques remontant à la Dynastie Qin (221–206 AV. J.-C.) documentent une production continue. Le style est aussi produit au Jiangsu et en Anhui avec des variations régionales. La caractéristique de production déterminante est la fermentation dans des fosses de boue (泥窖) tapissées d'argile locale qui développe une communauté microbienne caractéristique sur des décennies.`,

      zh: `浓香型是中国白酒的大众核心——约占全国白酒总销量70%，价值超过60%，是迄今最具商业主导地位的风格。大多数中国人想到白酒时，脑海中浮现的就是浓香型：丰富、果香、易亲近，是全国大多数地区商务宴席、家庭庆典和乡村节庆的润滑剂。<br><br>浓香型的地理起源是四川省——尤其是泸州，考古证据和历史记录将连续发酵粮食生产追溯至秦朝（公元前221-206年）。浓香型风格的决定性创始事件是1573年（明朝）泸州老窖发酵窖池的建造，这些窖池至今仍在运营，被视为世界上运营最久的商业发酵容器。<br><br>这450年以上的连续性不是历史浪漫主义——古窖中含有数百年积累而成的不可替代的微生物群落，能提供新窖无法复制的风味特征。新的浓香窖池需要约30-50年运营才能形成可比的微生物生态系统。`
    },

    science: {
      en: `The defining aromatic compound of Strong Aroma baijiu is ethyl caproate (己酸乙酯, hexanoic acid ethyl ester) — the molecule responsible for the characteristic pineapple, tropical fruit and slightly overripe banana note that makes Strong Aroma immediately identifiable.<br><br>This single compound distinguishes it chemically from all other aroma types: Sauce Aroma is dominated by ethyl lactate/ethyl acetate; Light Aroma by ethyl acetate; Rice Aroma by β-phenylethanol; Strong Aroma by ethyl caproate.<br><br>Ethyl caproate is produced by the metabolism of hexanoic acid by yeasts in the anaerobic fermentation pit environment. Critically, hexanoic acid is itself produced by specific mud-pit bacteria — particularly Clostridium kluyveri and related species — that colonise the pit wall clay over years and decades.<br><br>This is why the age of the fermentation pit directly correlates with the aromatic quality and intensity of ethyl caproate in the resulting spirit: older pits = more hexanoic acid producing bacteria = more ethyl caproate = more pronounced fruit character.<br><br>Luzhou Laojiao's 450-year pits have the most developed pit microbiome in the world and thus produce Strong Aroma with the highest baseline complexity.<br><br>The pit also accumulates a secondary community of bacteria producing butyric acid (丁酸) and its derivative ethyl butyrate — contributing apple, pear and cream notes — and acetic acid producing ethyl acetate, which provides the top-note brightness.<br><br>The combination of these three ester families (caproate-dominated, butyrate-secondary, acetate-tertiary) in specific ratios defines the Strong Aroma aromatic profile.`,

      fr: `Le composé aromatique définissant est le caproate d'éthyle (己酸乙酯) — la molécule responsable de la note d'ananas, de fruits tropicaux et de banane légèrement trop mûre caractéristique. Ce composé est produit par la métabolisation de l'acide caproïque par des bactéries spécifiques de la fosse — notamment Clostridium kluyveri — qui colonisent l'argile des parois sur des années et des décennies. C'est pourquoi l'âge de la fosse de fermentation est directement corrélé à la qualité et à l'intensité du caproate d'éthyle. Les fosses de 450 ans de Luzhou Laojiao ont le microbiome le plus développé.`,

      zh: `浓香型白酒的决定性芳香化合物是己酸乙酯——负责特征性菠萝、热带水果和略微过熟香蕉香气的分子，使浓香型立即可辨识。

己酸乙酯由酵母在厌氧发酵窖环境中代谢己酸产生。关键是，己酸本身由特定的窖泥细菌产生——特别是克鲁弗梭状芽胞杆菌和相关物种——这些细菌在多年乃至数十年间定植于窖壁黏土。这就是为什么发酵窖的年龄与产生的烈酒中己酸乙酯的香气质量和强度直接相关：窖龄越老=己酸产生菌越多=己酸乙酯越多=果香特征越突出。泸州老窖450年窖池拥有世界上最成熟的窖泥微生物群，因此生产出基础复杂度最高的浓香型白酒。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "wuliangye",
        name: "Wuliangye (五粮液)",
        founded: "1959",
        region: "Yibin, Sichuan",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/wuliangye.jpg' */
        image: "https://thumbs.dreamstime.com/b/singapour-le-mars-une-bouteille-de-liqour-baijiu-wuliangye-wuliangyei-est-un-chinois-c%C3%A9l%C3%A8bre-yibin-sichuan-chine-149851500.jpg",

        description: {
          en: `Wuliangye (五粮液, "Five Grain Liquid") is China's second most prestigious baijiu brand after Moutai, the world's third most valuable spirits company, and the benchmark against which all other strong aroma baijiu is ultimately measured.<br><br>In terms of Chinese cultural presence, Wuliangye is ubiquitous: it is the baijiu of every major corporate banquet, the gift choice for business partners, and — in a reflection of China's economic rise — its secondary market price has historically tracked the performance of Chinese large-cap equities.<br><br>The five grains that define Wuliangye are sorghum (高粱, 36%), rice (大米, 22%), glutinous rice (糯米, 18%), wheat (小麦, 16%), and corn (玉米, 8%). This multi-grain recipe dates to the Ming Dynasty, when local Yibin brewer Chen Sanao is historically credited with developing the precursor formula around 1368–1368 CE. The Ming Dynasty formula used the ancient Yibin water source (岷江 Minjiang River) and locally cultivated grains — the same water source and broad grain family in use today, though ratios have been refined over centuries.<br><br>The modern enterprise was established in Yibin, Sichuan, in 1959 from the consolidation of several historic Yibin distilleries. Yibin's position at the confluence of the Min and Jinsha Rivers at the northern edge of the Sichuan Basin gives it a distinctive terroir: high humidity, warm temperatures, abundant rainfall, and a specific alluvial soil chemistry that produces both the characteristic pit microbiome and the ideal growing conditions for the five grains used.<br><br>Wuliangye's production scale is immense: the company operates 12 production districts covering 40,000 mu (approximately 26.7 km²), employs over 30,000 people, and produces in excess of 70,000 tonnes annually. The brand commands the second-highest official retail price in the Chinese baijiu market after Feitian Moutai.`,

          fr: `Wuliangye (五粮液) est la deuxième marque de baijiu la plus prestigieuse de Chine, troisième société de spiritueux mondiale par capitalisation, et le benchmark contre lequel tout autre arôme fort est mesuré. Les cinq céréales définissant Wuliangye — sorgho (36%), riz (22%), riz gluant (18%), blé (16%), maïs (8%) — remontent à la Dynastie Ming, quand le brasseur local Chen Sanao est crédité d'avoir développé la formule précurseure. L'entreprise moderne a été établie à Yibin en 1959. La position de Yibin à la confluence des rivières Min et Jinsha lui confère un terroir distinctif.`,

          zh: `五粮液是中国第二大白酒品牌，世界第三大烈酒公司，是衡量所有其他浓香型白酒的终极标杆。

定义五粮液的五种粮食为高粱（36%）、大米（22%）、糯米（18%）、小麦（16%）和玉米（8%）。这一多粮配方可追溯至明代，宜宾本地酿酒师陈三醋在约1368年开发了前身配方。现代企业1959年在四川宜宾由多家历史悠久的宜宾酒厂合并建立。宜宾位于岷江和金沙江汇流处，赋予其独特的风土：高湿度、温暖气温、充沛降雨和特定的冲积土壤化学性质。`
        },

        flagship: {
          name: "Wuliangye Pujin (五粮液普金)",
          nameZh: "五粮液普金",
          abv: "52%",
          price: "~120–200€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/wuliangye-pujin.jpg' */
          image: POOL_B.b,

          notes: {
            en: `The Pujin (普金, "Universal Gold") is the core standard Wuliangye expression — the accessible tier of the flagship brand that remains far above most other strong aroma offerings in quality and complexity.<br><br>The nose demonstrates the five-grain complexity immediately: the classic strong aroma pineapple/tropical fruit note is present from ethyl caproate, but with Wuliangye's characteristic additional layers.<br><br>The rice and glutinous rice contributions bring a floral, sweet-rice note not found in single-sorghum strong aromatic styles. The wheat adds a slightly bready, yeasty depth. The corn contributes a creamy, light vanilla-adjacent sweetness. The overall impression is of a spirit with more aromatic dimensions than single-grain competitors.<br><br>On the palate, the entry is notably smooth for a 52% spirit — a testament to the quality of the raw materials and production. Medium-full bodied, with lychee, white peach, and jasmine on the mid-palate, backed by the characteristic earthy note from the ancient pit microbiome.<br><br>The five-grain structure creates a textural complexity that lingers: different grain contributions reveal themselves sequentially as the spirit warms on the palate. The finish is medium-long (30–45 seconds), moderately dry with a pleasant light sweetness.`,

            fr: `Le Pujin (普金) est l'expression standard de base Wuliangye. Le nez démontre immédiatement la complexité des cinq céréales : l'ananas classique de l'arôme fort est présent, mais avec les couches supplémentaires caractéristiques de Wuliangye. Le riz et le riz gluant apportent une note florale absente dans les styles mono-sorgho. En bouche, l'entrée est remarquablement lisse pour un 52%, avec litchi, pêche blanche et jasmin au milieu de bouche, soutenu par la note terreuse caractéristique. La finale est moyenne-longue (30–45 secondes).`,

            zh: `普金是五粮液的核心标准表达——旗舰品牌中在质量和复杂性上仍远超大多数其他浓香型产品的亲民系列。

鼻腔立即展现五粮复杂性：来自己酸乙酯的经典浓香菠萝/热带水果香气存在，但带有五粮液特有的额外层次。大米和糯米的贡献带来单高粱浓香风格中没有的花香、甜米香。小麦增添略微面包、酵母的深度。玉米贡献奶油般的轻淡香草甜感。余味中等偏长（30-45秒），适度干爽带有宜人的轻淡甜感。`
          }
        }
      },

      {
        slug: "luzhou-laojiao",
        name: "Luzhou Laojiao (泸州老窖)",
        founded: "1573",
        region: "Luzhou, Sichuan",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/luzhou-laojiao.jpg' */
        image: "https://scontent-cdg6-1.xx.fbcdn.net/v/t39.30808-6/476349858_1145151633980430_221299675632601046_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3cpNqTe70BYQ7kNvwHHVYxk&_nc_oc=AdrMB6Bq4yqaA9Gn6AqTc-w1NshkqOnsx8UrJRYtpfYjdWeAeqSMKcL_Xz18KYMsN5TVoyGPlwVA3_ivYisWfNIO&_nc_zt=23&_nc_ht=scontent-cdg6-1.xx&_nc_gid=VGJN6PgOMscQ42Lu8CMfTg&_nc_ss=7b2a8&oh=00_Af_BFVCDTXlxFeRdMTFtI9ZI55_UAr1usBpXOFzl6i6Ewg&oe=6A221A40",

        description: {
          en: `Luzhou Laojiao (泸州老窖, "Luzhou Old Cellar") holds a position in baijiu history that is without parallel: it is the originator of the Strong Aroma style, the world's oldest continuously operating commercial distillery with verifiable documentary evidence, and the custodian of fermentation infrastructure that predates almost every major Western spirits tradition.<br><br>The founding date of 1573 refers to the year that Shu Shen Shou (舒承宗) expanded his family's distillery in Luzhou, Sichuan, and excavated the original mud fermentation pits that remain in production today.<br><br>These original pits — 14 survive from the Ming Dynasty, with over 1,619 pits across four production districts in continuous operation — have never been emptied, cleaned, or relined.<br><br>The pit walls have accumulated 450+ years of microbial community development, making them scientifically classified as a unique biological heritage asset. In 2006, Luzhou Laojiao's traditional brewing technique was designated a National Intangible Cultural Heritage (国家非物质文化遗产) by the State Council, and in 2019 the pits were proposed for UNESCO World Cultural Heritage listing.<br><br>The name "strong aroma" (浓香型) was actually originally called "Luzhou aroma" (泸香型) in recognition of Luzhou Laojiao's role as the style's originator — the name was only standardised to the geographically neutral "strong aroma" in the late 20th century as the style spread beyond Luzhou.<br><br>The company continues to produce from the original 1573 pits, using the output in its premium Guojiao 1573 line.<br><br>Luzhou Laojiao employs over 20,000 people and operates a visitor centre and heritage museum that receives millions of visitors annually. Its institutional importance to Luzhou city (the local government is a major shareholder) makes it as much a civic institution as a commercial enterprise.`,

          fr: `Luzhou Laojiao (泸州老窖) est l'originatrice du style Arôme Fort, la plus ancienne distillerie commerciale au monde en activité continue avec des preuves documentaires vérifiables. La date de fondation 1573 réfère à l'année où Shu Shen Shou a élargi sa distillerie familiale et creusé les fosses de fermentation originales encore en production aujourd'hui. Ces fosses n'ont jamais été vidées, nettoyées ou retapissées. En 2006, la technique brassicole traditionnelle de Luzhou Laojiao a été désignée Patrimoine Culturel Immatériel National. L'entreprise emploie plus de 20 000 personnes.`,

          zh: `泸州老窖在白酒历史中的地位无与伦比：它是浓香型风格的鼻祖，是有可验证文献证据的世界上运营最久的商业酒厂，也是几乎早于所有西方烈酒传统的发酵基础设施的守护者。

1573年这一创建年份指的是舒承宗在四川泸州扩建家族酒厂、开凿至今仍在生产的原始泥质发酵窖池的年份。这些原始窖池——14口明代窖池幸存，四个生产基地共有超过1619口窖池持续运营——从未被清空、清洁或重新填泥。2006年，泸州老窖传统酿造技术被国务院列为国家非物质文化遗产。

"浓香型"这一名称实际上最初被称为"泸香型"，以认可泸州老窖作为风格鼻祖的地位——直到20世纪末随着风格在泸州以外传播，才将名称标准化为地理中性的"浓香型"。`
        },

        flagship: {
          name: "Guojiao 1573 (国窖1573)",
          nameZh: "国窖1573",
          abv: "52%",
          price: "~100–160€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/guojiao-1573.jpg' */
          image: POOL_B.c,

          notes: {
            en: `Guojiao 1573 (国窖, "National Cellar") is named after the year the original fermentation pits were dug — a direct invocation of heritage that is entirely justified by the liquid's quality.<br><br>This is the premium expression produced using output from the original 1573 Ming Dynasty pits, distinguished from Luzhou Laojiao's other expressions by the singular richness that only the oldest pit microbiome can produce.<br><br>The nose opens with remarkable elegance for a strong aroma baijiu — less aggressive than many Sichuan expressions, with a more measured, complex fruit character.<br><br>The ethyl caproate is pronounced but integrated: stone fruit (fresh peach, apricot), lychee and a distinct dried fig note that speaks to the pit's age. A characteristic earthy-mineral undertone — not unpleasant but distinctively ancient-cellar in quality — threads through the entire aromatic profile, becoming more apparent with extended air contact.<br><br>Light cedar and floral notes (osmanthus) provide lift.<br><br>The palate is immediately impressive: full-bodied, with excellent weight and texture. The mid-palate delivers the pit microbiome's unique signature — a complex earthiness that is simultaneously dry and slightly sweet, with the fruit character continuing to develop.<br><br>For a 52% spirit, the integration is exceptional — no sharp edges, no alcohol burn. The finish extends 40–55 seconds, with the earthy-mineral note persisting longest and a clean, dry grain character at the very end. Consistent with its production in 450-year pits, this is a demonstrably more complex and historically grounded expression than any new-pit strong aroma.`,

            fr: `Guojiao 1573 (国窖) est nommé d'après l'année où les fosses de fermentation originales ont été creusées. C'est l'expression premium produite utilisant l'output des fosses Ming originales de 1573. Le nez s'ouvre avec une élégance remarquable : fruits à noyau (pêche fraîche, abricot), litchi et une note de figue séchée distinctive qui parle de l'âge de la fosse. Une note terreuse-minérale caractéristique — qualité ancienne cave — traversant tout le profil aromatique. La finale s'étend 40–55 secondes avec la note minérale persistant le plus longtemps.`,

            zh: `国窖1573以原始窖池开凿年份命名——对完全由液体质量所证明的传统的直接援引。这是使用1573年明代原始窖池产物生产的高端产品。

鼻腔以浓香型白酒少有的优雅开场——比许多川派表达不那么强势，果香特征更有分寸、更复杂。己酸乙酯突出但整合良好：核果（新鲜蜜桃、杏子）、荔枝和一股独特的无花果干香气。一种特征性的泥土矿物底味——不令人不快，但具有独特的古窖品质——贯穿整个香气特征，充分醒酒后更加明显。余味延续40-55秒，泥土矿物香气持续最久，最后是干净、干爽的粮食特征。`
          }
        }
      },

      {
        slug: "yanghe",
        name: "Yanghe Distillery (洋河酒厂)",
        founded: "1949",
        region: "Suqian, Jiangsu",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/yanghe.jpg' */
        image: "https://images.squarespace-cdn.com/content/v1/58a63d5a37c581e4a6fbbee1/1487313848148-2NXR9YMOUR3PIK2QV6OZ/image-asset.jpeg",

        description: {
          en: `Yanghe (洋河大曲) is a genuinely anomalous success story in Chinese baijiu: a Jiangsu-based strong aroma producer that, through a combination of product innovation, aggressive marketing and extraordinary distribution network building, became not only China's largest baijiu producer by volume but the third most valuable spirits brand globally — all while producing in a region (Jiangsu) traditionally considered secondary to Sichuan in the strong aroma hierarchy.<br><br>The distillery site in Suqian has over 400 years of documented production history (first mentioned in Ming Dynasty commercial records), but the modern Yanghe Distillery was formally established in 1949. The breakthrough to national prominence came with the introduction of the "Blue Classic" series in 2003 — the Blue Sea (海之蓝), Sky Blue (天之蓝) and Dream Blue (梦之蓝) sub-lines — which introduced accessible, design-led luxury positioning to a market previously dominated by opaque heritage brands.<br><br>The blue bottle aesthetic, the Western-style gift box packaging, and the deliberate separation of quality tiers by price point democratised premium baijiu marketing.<br><br>Yanghe's Jiangsu terroir distinguishes its strong aroma character from Sichuan producers. The Suqian area draws production water from the Yanghe River (洋河), known for its softness and low mineral content — producing a more delicate, floral strong aroma character compared to the earthier Sichuan Basin expressions.<br><br>The local Daqu uses Yanghe grasses (洋河草) specific to the area. The company operates four production bases covering a total area of over 10 km² and employs over 18,000 people.`,

          fr: `Yanghe (洋河酒厂) est une réussite authentiquement anormale dans le baijiu chinois : un producteur arôme fort du Jiangsu qui, grâce à l'innovation produit et à la construction d'un réseau de distribution extraordinaire, est devenu le plus grand producteur de baijiu en volume et la troisième marque de spiritueux mondiale. La percée vers la notoriété nationale est venue avec la série "Blue Classic" en 2003 — dont les lignes Blue Sea, Sky Blue et Dream Blue. L'eau de production de la rivière Yanghe est connue pour sa douceur, produisant un arôme fort plus délicat et floral que les expressions du bassin du Sichuan.`,

          zh: `洋河在中国白酒中是一个真正的异数成功故事：一家江苏浓香型生产商，通过产品创新、积极营销和非凡的分销网络建设，不仅成为中国最大白酒生产商（按产量），还成为全球第三大烈酒品牌——同时在一个传统上被视为浓香型次于四川的地区（江苏）生产。

现代洋河酒厂于1949年正式成立。突破性的全国知名度来自2003年推出的"蓝色经典"系列——海之蓝、天之蓝和梦之蓝子系列——将亲民的设计驱动奢华定位引入一个此前由不透明传统品牌主导的市场。洋河的江苏风土使其浓香特征与四川生产商有所区别：苏北产区的洋河水以柔和、低矿物质著称，产生比川渝盆地表达更精致、花香更多的浓香特征。`
        },

        flagship: {
          name: "Dream Blue M9 (梦之蓝M9)",
          nameZh: "梦之蓝M9",
          abv: "52%",
          price: "~200–320€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/yanghe-dream-blue-m9.jpg' */
          image: POOL_B.d,

          notes: {
            en: `Dream Blue M9 (梦之蓝M9) is the apex of the Yanghe premium hierarchy and one of the most internationally accessible strong aroma baijiu expressions — frequently cited by Western spirits writers as an ideal introduction to the style for those accustomed to European luxury spirits.<br><br>The packaging is striking: a deep translucent blue bottle of unusual shape, with gold calligraphy and premium gift presentation that positions it unambiguously in the luxury gift market. The design decision to prioritise aesthetic elegance over traditional ceramic bottle heritage is a deliberate Yanghe brand philosophy.<br><br>In the glass, M9 presents the Yanghe Jiangsu style at its most refined. The nose is notably cleaner and more delicate than Sichuan counterparts: soft lychee, white peach, jasmine and a distinctive dried osmanthus note that is entirely absent from the Sichuan strong aroma profile.<br><br>The ethyl caproate fruit character is present but understated — Yanghe's house style tends toward restraint and elegance rather than the full-blown tropical fruit expressiveness of Wuliangye. A subtle floral sweetness and clean grain foundation complete the nose.<br><br>The palate is silky and well-integrated, with the 52% ABV showing remarkable restraint. The fruit character (lychee, white flower, soft peach) expresses well through the mid-palate, followed by a clean, dry grain finish with minimal pit-earthiness — reflecting the softer Jiangsu terroir.<br><br>Finish: 30–45 seconds, clean and pleasantly floral. An excellent baijiu for those wanting to explore beyond Sauce Aroma without the challenge of Sichuan earthiness.`,

            fr: `Dream Blue M9 (梦之蓝M9) est l'apex de la hiérarchie premium Yanghe et l'une des expressions d'arôme fort les plus accessibles internationalement. Le packaging est saisissant : une bouteille bleue translucide profonde avec calligraphie dorée. Le nez est notablement plus propre et plus délicat que les homologues sichuanais : litchi doux, pêche blanche, jasmin et une note d'osmanthus séché. La palette est soyeuse et bien intégrée, le 52% ABV montrant une retenue remarquable. Finale de 30–45 secondes, propre et agréablement florale.`,

            zh: `梦之蓝M9是洋河高端层级的顶峰，是最具国际亲和力的浓香型白酒产品之一——常被西方烈酒作家引用为习惯欧洲奢侈烈酒的人进入该风格的理想入门。

在杯中，M9以最精致的形式呈现洋河江苏风格。鼻腔明显比四川同行更干净、更精致：柔和荔枝、水蜜桃、茉莉花以及四川浓香完全没有的独特干桂花香。己酸乙酯果香存在但内敛——洋河的招牌风格倾向克制和优雅，而非五粮液那种全开的热带果香表达。口感如绸缎，52%的酒精度展现非凡克制。余味30-45秒，干净，令人愉悦的花香。`
          }
        }
      },

      {
        slug: "gujinggongjiu",
        name: "Gujinggong Jiu (古井贡酒)",
        founded: "1955",
        region: "Bozhou, Anhui",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/gujinggong.jpg' */
        image: "https://gbaike-image.cdn.bcebos.com/8601a18b87d6277f9e2f4b5f996f0830e924b8995606/8601a18b87d6277f9e2f4b5f996f0830e924b8995606_url?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXJtYXJrL3dhdGVybWFyaw,t_60,g_7,xp_5,yp_2,P_20",

        description: {
          en: `Gujinggong (古井贡酒, "Ancient Well Tribute Spirit") is one of China's most storied baijiu brands, with a documented history linking it directly to China's political and intellectual elite across two millennia.<br><br>The brand name's reference to the "ancient well" is literal: the production facility draws water from a well that has been in continuous use for approximately 1,000 years, and whose water chemistry — unusual mineral balance, specific pH, trace element profile — is considered by the distillery's chemists to be a principal factor in the spirit's distinctive character.<br><br>The historical record begins in earnest in 196 AD, during the twilight of the Han Dynasty, when Cao Cao (曹操) — the warlord, poet and future Chancellor of the Eastern Han — submitted a memorial to Emperor Xian petitioning for official recognition of the spirits produced in his hometown of Bozhou (then called Qiao County).<br><br>This "nine wine method" (九酝酒法) memorial, preserved in historical annals, is one of the earliest technical documents about Chinese grain spirit production and effectively constitutes the founding document of Gujinggong's historical lineage.<br><br>The modern enterprise was established in 1955 in Bozhou, Anhui. One of China's original "Eight Famous Baijiu" (八大名酒) as evaluated at the 1984 national appraisal conference, Gujinggong experienced a major commercial renaissance beginning in the early 2010s under new management that repositioned it from a declining national brand to a premium regional powerhouse.<br><br>The brand is now the dominant baijiu brand in Anhui Province and a top-tier national player.`,

          fr: `Gujinggong (古井贡酒) est l'une des marques de baijiu les plus légendaires de Chine, avec une histoire documentée la reliant directement à l'élite politique et intellectuelle sur deux millénaires. Le puits de production est en utilisation continue depuis environ 1 000 ans. La documentation historique commence en 196 après J.-C. quand Cao Cao a soumis un mémorial à l'Empereur Xian pour la reconnaissance des spiritueux produits à Bozhou. Ce mémorial est l'un des plus anciens documents techniques sur la production de spiritueux de céréales chinois. L'entreprise moderne a été établie en 1955, un des 'Huit Baijiu Célèbres' originaux de 1984.`,

          zh: `古井贡酒是中国最富传奇色彩的白酒品牌之一，有文献记录将其直接与跨越两千年的中国政治和知识精英联系起来。品牌名称中对"古井"的提及是字面意义：生产设施从一口已连续使用约1000年的古井中取水。

历史记录在公元196年正式开始，东汉末年，曹操——军阀、诗人、未来的东汉丞相——向献帝呈递奏折，请求官方认可其故乡亳州（当时称谯县）出产的烈酒。这份"九酝酒法"奏折是中国粮食烈酒生产最早的技术文献之一，实际上构成了古井贡酒历史渊源的创立文献。

现代企业1955年在安徽亳州成立，是1984年全国评酒会评定的中国原"八大名酒"之一。`
        },

        flagship: {
          name: "Gujinggong 20 Year (古井贡酒20年)",
          nameZh: "古井贡酒20年",
          abv: "50%",
          price: "~80–130€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/gujing-20year.jpg' */
          image: POOL_B.a,

          notes: {
            en: `The 20-year expression is Gujinggong's prestige tier — the expression that most clearly demonstrates what the Bozhou terroir and ancient well water can achieve with extended aging. At 50% ABV (slightly below standard strong aroma), the spirit has been crafted for elegance over power.<br><br>The ancient well water's distinctive mineral profile — higher in calcium and magnesium carbonates than average Chinese production waters, slightly alkaline at pH ~7.5-8.0 — manifests in a characteristic mineral sweetness that underpins the entire aromatic profile.<br><br>The nose opens with well-integrated tropical fruit (lychee, fresh mango, pineapple) softened by 20 years of maturation into a rounder, more cohesive presentation. Dried fig, prune, and dark honey notes develop over 5–10 minutes of air contact.<br><br>The palate delivers the ancient well water's characteristic quality most clearly: a round, slightly mineral sweetness that cushions the alcohol entry. The mid-palate develops dried fruit, gentle spice (white pepper, cinnamon) and a subtle earthiness from the Anhui pit microbiome — different in character from Sichuan expressions, somewhat lighter and less assertively earthy.<br><br>The finish extends 35–50 seconds, with the mineral-sweet quality persisting longest alongside dried fruit and a clean grain echo.`,

            fr: `L'expression 20 ans est le niveau de prestige de Gujinggong. À 50% vol, le spiritueux a été élaboré pour l'élégance. L'eau du puits ancien avec son profil minéral distinctif se manifeste dans une douceur minérale caractéristique qui sous-tend tout le profil aromatique. Le nez s'ouvre avec des fruits tropicaux bien intégrés adoucis par 20 ans de maturation. La finale s'étend 35–50 secondes avec la qualité minérale-sucrée persistant le plus longtemps.`,

            zh: `20年表达是古井贡酒的高端系列——最清楚地展现亳州风土和古井水在长期陈酿后所能达到的高度。在50%酒精度（略低于浓香标准），这款酒为优雅而非力量而精心打造。

古井水独特的矿物质特征——碳酸钙和碳酸镁含量高于中国普通生产用水，pH略呈碱性（约7.5-8.0）——体现为一种特征性的矿物甜感，贯穿整个香气特征作为底色。口感中段发展出干果、轻淡香料（白胡椒、肉桂）和来自安徽窖泥微生物的微妙泥土感——与四川产品不同，较轻盈，土地感不那么强烈。余味延续35-50秒。`
          }
        }
      },

      {
        slug: "jiannanchun",
        name: "Jiannanchun (剑南春)",
        founded: "1951",
        region: "Mianzhu, Sichuan",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/jiannanchun.jpg' */
        image: "https://uat.virtualassist.sg/chinabaijiu/wp-content/uploads/2025/12/WhatsApp-Image-2025-11-26-at-3.04.35-PM-1.jpeg",

        description: {
          en: `Jiannanchun (剑南春, "Spring of Jiannan") is one of China's original "Eight Famous Baijiu" and occupies a historically important position as one of the expressions served to US President Nixon during his 1972 China visit — alongside Moutai — making it part of the foundational narrative of Chinese luxury spirits on the world stage.<br><br>The name "Jiannan" (剑南) is the historical designation for the region encompassing modern Sichuan Province and parts of Yunnan, used during the Tang Dynasty (618–907 AD).<br><br>Archaeological excavations in Mianzhu have uncovered liquor vessels and production tools dating to the Qin and Han Dynasties. The Tang Dynasty poet Du Fu (杜甫), who spent years in Sichuan during his wanderings, referenced the "Mianzhu Spring" in his poetry.<br><br>More significantly, Tang Dynasty historical records document Jiannanchun-style spirit being presented as tribute to the imperial court — giving it genuine Tang Dynasty imperial pedigree.<br><br>The modern enterprise was established in 1951 in Mianzhu, Sichuan, from the consolidation of local distilleries. Mianzhu's geographic position in the Sichuan Basin — at the foot of the Longmen Mountains, with abundant clean mountain water from the Mianyuan River — creates growing conditions ideal for the local sorghum cultivar used.<br><br>The Mianzhu pit microbiome, while younger than Luzhou Laojiao's in average pit age, has a distinctive local character derived from Mianzhu's specific geology (purple-red mudstone and shale).`,

          fr: `Jiannanchun (剑南春) est l'un des 'Huit Baijiu Célèbres' originaux de Chine et un des spiritueux servis au Président Nixon lors de sa visite en Chine en 1972. Le nom 'Jiannan' est la désignation historique Tang de la région englobant le Sichuan moderne. Des fouilles archéologiques à Mianzhu ont découvert des vases à alcool remontant aux Dynasties Qin et Han. L'entreprise moderne a été établie en 1951 à Mianzhu, dont la position géographique au pied des montagnes Longmen crée des conditions idéales.`,

          zh: `剑南春是中国原"八大名酒"之一，历史上具有重要地位，是1972年中美建交期间招待尼克松总统的两款白酒之一（另一款为茅台）——使其成为中国高端烈酒走向世界舞台的奠基叙事的一部分。

"剑南"是唐代（618-907年）对包含现代四川省和云南部分地区的历史地名称呼。绵竹的考古发掘出土了可追溯至秦汉时期的酒器和生产工具。唐代诗人杜甫在其漫游蜀地期间的诗作中提及"绵竹春"。现代企业1951年在四川绵竹由当地酒厂合并建立。`
        },

        flagship: {
          name: "Jiannanchun Special Reserve (剑南春特酿)",
          nameZh: "剑南春特酿",
          abv: "52%",
          price: "~40–75€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/jiannanchun-special.jpg' */
          image: POOL_B.b,

          notes: {
            en: `The Special Reserve (特酿) is Jiannanchun's standard premium expression and provides an excellent study in the Mianzhu sub-regional character within Sichuan strong aroma — contrasting instructively with the older-pit earthiness of Luzhou Laojiao and the five-grain complexity of Wuliangye.<br><br>The nose presents the core Sichuan strong aroma signature cleanly: ripe pineapple, caramel apple and a distinctly lychee note, supported by light floral notes and a characteristic soft earthiness that speaks to the Mianzhu purple-red mudstone geology.<br><br>The grain character is more forward than Wuliangye — single sorghum clarity rather than five-grain complexity — giving a cleaner, more direct aromatic presentation.<br><br>On the palate, the entry is warm, medium-bodied and well-structured. Ripe stone fruit (peach, plum) develops through the mid-palate, with a characteristic Mianzhu earthy mineral note providing depth without the ancient-pit intensity of Luzhou Laojiao.<br><br>The 52% ABV is reasonably well-integrated. Finish: 25–35 seconds, dry and grain-forward with a pleasant fruit echo. An honest, high-quality representation of Sichuan strong aroma at an accessible price point — the spirit that put Chinese baijiu on the world map in 1972.`,

            fr: `Le Special Reserve (特酿) présente la signature Sichuan arôme fort clairement : ananas mûr, pomme caramélisée et litchi, soutenu par des notes florales et une terreur douce caractéristique de la géologie grès-rouge de Mianzhu. Le profil de grain est plus direct que Wuliangye — clarté de sorgho unique plutôt que complexité cinq-céréales. La finale est de 25–35 secondes, sèche et orientée grain.`,

            zh: `特酿是剑南春的标准高端产品，是研究四川浓香型绵竹子区域特征的绝佳样本——与泸州老窖的古窖泥土感和五粮液的五粮复杂性形成有益对比。

鼻腔干净呈现四川浓香型核心特征：熟透菠萝、焦糖苹果和明显的荔枝香，辅以轻淡花香和来自绵竹紫红色泥质砂岩地质的特征性柔和泥土感。余味25-35秒，干爽以粮食香为主，带有宜人的果香回响。是中国白酒1972年走向世界的代表作。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     3. LIGHT AROMA — 清香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "light-aroma",
    name: { en: "Light Aroma", fr: "Arôme léger", zh: "清香型" },
    nameZh: "清香型",
    regions: ["Shanxi", "Beijing", "Hebei"],
    color: "#4A7A8A",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/light-aroma.jpg' */
    image: POOL_B.c,

    description: {
      en: `Light Aroma (清香型, qīng xiāng xíng) is the oldest formally recognised baijiu style, the purist's choice, and arguably the style with the greatest historical and cultural resonance in Chinese civilisation.<br><br>Its geographic centre is Xinghuacun (杏花村, "Apricot Blossom Village") in Fenyang County, Shanxi Province — a village immortalised in Tang Dynasty poetry and documented in historical records as a centre of exceptional spirit production as early as 550 AD.<br><br>The defining characteristic of Light Aroma is crystalline purity — an absence of the earthiness, pit microbiome complexity and heavily esterified fruit character that defines Strong Aroma, and of the fermented-protein savoury complexity of Sauce Aroma.<br><br>Where those styles celebrate accumulated complexity over time and depth, Light Aroma celebrates what remains when all impurities are removed: clean grain, fresh floral notes, a cool mineral quality, and perfect aromatic transparency.<br><br>It is the style most analogous to premium vodka in Western terms — but more aromatic, more grain-characterful, and infinitely more technically demanding to produce well.<br><br>The production uses ceramic underground vats (地缸, dì gāng) rather than mud pits or stone containers — vessels that have no accumulated microbiome and thus do not contribute pit-flavour to the ferment.<br><br>This is the structural difference from Strong Aroma: the terroir is deliberately excluded from the fermentation process to allow grain character to express without interference. A medium-temperature Daqu (55–60°C) provides controlled microbial activity. Fermentation duration is typically 28–30 days — shorter than other styles.<br><br>Light Aroma baijiu is typically bottled at 45–65% ABV. The highest-expression versions (Fenjiu Qinghua series) are bottled at 53% — high enough to carry aromatic intensity while maintaining the characteristic clean, non-burning quality of well-made Light Aroma.`,

      fr: `L'Arôme Léger (清香型) est le style de baijiu le plus anciennement reconnu formellement, le choix du puriste, et sans doute le style à la plus grande résonance historique et culturelle. Son centre géographique est Xinghuacun (杏花村) dans le comté de Fenyang, Shanxi, immortalisé dans la poésie Tang et documenté comme centre de production remarquable dès 550 après J.-C. La caractéristique définissante est la pureté cristalline — une absence d'aromatiques terreux et fortement estérifiés. Des cuves céramiques souterraines (地缸) sans microbiome accumulé permettent au caractère de grain de s'exprimer sans interférence.`,

      zh: `清香型是最古老的正式公认白酒风格、纯粹主义者的选择，也可能是在中国文明中具有最大历史和文化共鸣的风格。其地理中心是山西省汾阳县杏花村——被唐代诗歌永载史册，历史记录显示早在公元550年就是卓越烈酒生产中心的村庄。

清香型的决定性特征是晶莹纯净——没有浓香型的泥土感、窖泥微生物复杂性和高酯化果香，也没有酱香型的发酵蛋白鲜味复杂性。生产使用陶制地缸而非泥窖或石质容器——这些容器没有积累的微生物群，因此不会向发酵过程贡献窖味。这是与浓香型的结构性差异：风土被刻意排除在发酵过程之外，使粮食特征无干扰地表达。`
    },

    science: {
      en: `The dominant aromatic compound in Light Aroma baijiu is ethyl acetate (乙酸乙酯), which constitutes 50–60% of the total ester content and provides the characteristic clean, light solvent-adjacent freshness.<br><br>Unlike the pit-bacteria-derived ethyl caproate of Strong Aroma, ethyl acetate is produced by yeast metabolism of acetic acid — a universal fermentation compound — making it the "base note" of all baijiu styles, but uniquely dominant in Light Aroma where competing ester families are absent.<br><br>The secondary compound of importance is ethyl lactate (乳酸乙酯), produced by lactic acid bacteria metabolism. The ratio of ethyl acetate to ethyl lactate in Light Aroma baijiu is typically 1:0.3 to 1:0.5 — a strongly acetate-dominant profile.<br><br>In Strong Aroma, this ratio would be inverted with caproate dominant; in Sauce Aroma, lactate and acetate are roughly equal with a rich supporting cast.<br><br>The use of ceramic dì gāng containers is not merely a technical choice but a philosophical one: by eliminating the pit-clay interface that drives complex microbial fermentation in Strong and Sauce Aroma, Light Aroma producers make a deliberate choice to celebrate the grain, the water and the Daqu rather than accumulated terroir complexity.<br><br>This creates a paradox: the most analytically "simple" style requires the greatest technical precision, as there is nothing to hide imperfections behind.<br><br>Historical records from the Silk Road trading networks suggest that Shanxi merchants carried Fenjiu production techniques westward along Central Asian trading routes as early as the Song Dynasty (960–1279 AD), influencing distillation practices in Central Asia and possibly contributing to early vodka production methodology — though this remains a subject of academic debate.`,

      fr: `Le composé aromatique dominant est l'acétate d'éthyle (乙酸乙酯), constituant 50–60% de la teneur totale en esters. Contrairement au caproate d'éthyle dérivé de bactéries de fosse de l'Arôme Fort, l'acétate d'éthyle est produit par le métabolisme de l'acide acétique par les levures. Le ratio acétate d'éthyle/lactate d'éthyle est typiquement 1:0,3 à 1:0,5 — un profil fortement dominé par l'acétate. Des records historiques suggèrent que les marchands du Shanxi ont porté les techniques de production de Fenjiu westward le long des routes commerciales d'Asie centrale, influençant potentiellement la production de vodka.`,

      zh: `清香型白酒的主要芳香化合物是乙酸乙酯，占酯类总量的50-60%，提供特征性的干净、轻盈的溶剂邻近清新感。乙酸乙酯由酵母代谢乙酸产生——一种普遍的发酵化合物——使其成为所有白酒风格的"基调"，但在没有竞争酯族的清香型中独特地主导。

地缸容器的使用不仅仅是技术选择，更是哲学选择：通过消除驱动浓香和酱香复杂微生物发酵的窖泥界面，清香型生产商刻意选择颂扬粮食、水和大曲，而非积累的风土复杂性。这造成了一个悖论：分析上最"简单"的风格需要最高的技术精度，因为没有任何东西可以掩盖瑕疵。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "fenjiu",
        name: "Fenjiu / Xinghuacun (汾酒·杏花村)",
        founded: "1949",
        region: "Xinghuacun, Fenyang, Shanxi",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/fenjiu.jpg' */
        image: "https://luxuriate.life/wp-content/uploads/2024/09/PHOTO-2024-08-30-03-24-38-e1727177412784.jpg",

        description: {
          en: `Fenjiu (汾酒, "Fen Spirit") holds an arguable claim as the most historically significant baijiu in existence — not in terms of current market value (Moutai holds that title), but in terms of the documented antiquity of its production, its role in shaping Chinese drinking culture, its literary immortalisation, and its commercial and technical influence on the development of baijiu as a category.<br><br>The documented history begins with a state-level endorsement. In 550 AD, the Northern Qi Dynasty Emperor Gao Yang (齐高洋) specifically requested the spirit from Xinghuacun as a "national tribute" — making it one of the earliest recorded quality endorsements in the history of global spirits.<br><br>This event is documented in the official dynastic history (北齐史) and is displayed prominently in Fenjiu's heritage museum.<br><br>The cultural immortalisation came in the Tang Dynasty through the poet Du Mu (杜牧, 803–852 AD), whose poem "Qingming" (清明) — one of the most memorised Chinese poems in history, still mandatory in Chinese primary school curricula — includes the famous lines directing a weary traveller to Xinghua Village (杏花村) for refreshment.<br><br>While Du Mu's poem does not name the spirit explicitly, Xinghuacun's identity as the location has been accepted for over 1,200 years.<br><br>The distillery's role in Chinese spirits history extends to the international stage: Fenjiu was awarded a gold medal at the 1915 Panama Pacific International Exposition in San Francisco — one of the first Chinese products to achieve international quality recognition on this scale.<br><br>This was 37 years before the founding of Kweichow Moutai as a consolidated enterprise. The modern Xinghuacun Fenjiu Group (杏花村汾酒集团) was formed in 1949 from the consolidation of three Xinghuacun distilleries, and remains under Shanxi state ownership.`,

          fr: `Fenjiu (汾酒) a une prétention plausible à être le baijiu historiquement le plus significatif — pas en valeur de marché actuelle, mais en termes d'antiquité documentée de production, de rôle dans la culture de consommation chinoise et d'immortalisation littéraire. La documentation commence en 550 après J.-C. quand l'Empereur des Qi du Nord a spécifiquement demandé le spiritueux de Xinghuacun comme 'tribut national'. Le poète Tang Du Mu (803-852 ap. J.-C.) a immortalisé le village dans le poème 'Qingming', toujours appris dans les écoles primaires chinoises. Fenjiu a obtenu une médaille d'or à l'Exposition internationale de Panama en 1915.`,

          zh: `汾酒可以合理地声称是现存历史意义最重要的白酒——不是在当前市值方面（茅台拥有这一头衔），而是在生产的记录古老性、在塑造中国饮酒文化方面的作用、文学上的永载史册以及对白酒品类发展的商业和技术影响方面。<br><br>文献历史始于国家级背书。公元550年，北齐高洋皇帝特别指定杏花村的烈酒作为"国酒"——使其成为全球烈酒史上最早有记录的品质认可之一。这一事件记载于官方史书（北齐史）。<br><br>文化上的永载史册来自唐代诗人杜牧（803-852年），其诗作《清明》——中国历史上背诵最广泛的诗歌之一，至今仍是中国小学必学课目——其中著名的诗句指引疲惫旅人前往杏花村解渴。1915年，汾酒在旧金山巴拿马太平洋国际博览会上荣获金奖——这是最早在这一规模上获得国际品质认可的中国产品之一。这比贵州茅台作为合并企业的创建早了37年。`
        },

        flagship: {
          name: "Fenjiu Qinghua 30 (汾酒青花30)",
          nameZh: "汾酒青花30",
          abv: "53%",
          price: "~120–200€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/fenjiu-qinghua30.jpg' */
          image: POOL_B.c,

          notes: {
            en: `Qinghua 30 (青花30, "Blue Flower 30") is the prestige tier of Fenjiu's celebrated Qinghua range, packaged in a striking blue-and-white porcelain bottle that deliberately references the Tang Dynasty aesthetic of Xinghuacun.<br><br>The "30" designation indicates that the base blend incorporates spirit aged a minimum of 30 years — the longest publicly specified aging commitment in the Fenjiu lineup.<br><br>This is Light Aroma baijiu at its finest. In the glass, the liquid is exceptionally clear — crystal transparent with perhaps the faintest golden tinge from extended ceramic-vessel aging.<br><br>The nose is immediately distinctive: a purity of grain expression that confirms the dì gāng ceramic fermentation approach. Fresh barley and sorghum character leads, with a characteristic cool note — often described as "mint-adjacent" or "mountain spring" freshness — that is entirely unique to aged high-quality Light Aroma.<br><br>Over 5–10 minutes, delicate white peach, white flower (orchid, jasmine), and a subtle honey note develop.<br><br>The extended 30-year aging manifests as depth without complexity — paradoxically, longer aging in Light Aroma doesn't add heaviness but rather intensifies the purity.<br><br>The base grain character becomes more concentrated and more precisely expressed. On the palate, the entry is characteristically smooth despite the 53% ABV — no burn, a clean alcohol warmth.<br><br>The mid-palate delivers the grain character clearly: clean sorghum, light dried flower, and a characteristic fresh mint-cool note on the finish that extends 35–55 seconds. One of the most technically accomplished expressions in all of baijiu.`,

            fr: `Qinghua 30 est le niveau de prestige de la gamme Qinghua de Fenjiu, dans une bouteille en porcelaine bleue et blanche référençant l'esthétique Tang de Xinghuacun. Le '30' indique que le mélange de base incorpore un spiritueux vieilli au minimum 30 ans. Dans le verre, le liquide est exceptionnellement clair — cristalline transparence. Le nez est immédiatement distinctif : une pureté du caractère de grain unique à l'Arôme Léger vieilli, avec une fraîcheur 'adjacente à la menthe'. La finale s'étend 35–55 secondes avec une fraîcheur menthée caractéristique.`,

            zh: `青花30是汾酒备受赞誉的青花系列的高端层级，装在刻意参照杏花村唐代美学的蓝白瓷瓶中。"30"标志表示基础勾调中包含最少陈酿30年的基酒——汾酒系列中公开明确的最长陈酿承诺。

这是清香型白酒的最高境界。入杯酒液异常清澈——水晶般透明，可能带有最轻微的金色调。鼻腔立即与众不同：粮食表达的纯净感，证实了地缸陶瓷发酵工艺。新鲜大麦和高粱特征为主导，带有特征性的清凉感——常被描述为"薄荷邻近"或"山泉"清新——这是优质陈年清香型所独有的。30年陈酿体现为深度而非复杂性——悖论地，清香型的更长陈酿不添加厚重感，而是使纯净感更加集中。余味延续35-55秒，带有特征性的新鲜薄荷凉爽感。`
          }
        }
      },

      {
        slug: "red-star-erguotou",
        name: "Red Star Erguotou (红星二锅头)",
        founded: "1949",
        region: "Beijing (Shijingshan District)",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/red-star-erguotou.jpg' */
        image: "https://koryogroup.com/ckeditor_assets/pictures/3002/content_Red_Star_Erguotou_Museum_%282%29.jpg",

        description: {
          en: `Red Star Erguotou (红星二锅头) holds a historical distinction that is entirely unique in the global spirits industry: it was the first business formally registered in the People's Republic of China, on November 12, 1949 — less than two months after the founding of the PRC on October 1, 1949. This founding circumstance gives Red Star a symbolic significance that transcends its commercial role and makes it, in a very real sense, a brand that embodies the Chinese communist project's relationship with everyday material culture.<br><br>The production method referenced in the name "Erguotou" (二锅头, "second pot head") refers to a specific distillation technique: in traditional Beijing-style distillation, the column of a pot still is divided into cooling zones, and only the distillate collected from the second cooling zone — neither the harsh high-ABV foreshots of the first zone nor the weaker, lower-ABV tails of the third zone — is collected for bottling.<br><br>This selective cut produces a notably cleaner, more balanced spirit than collecting the full distillation run, and dates to a technique developed in Beijing's Shawo Distillery (烧锅) tradition during the Qing Dynasty.<br><br>Red Star Erguotou is, by volume, the single most consumed baijiu brand in China — a position achieved not through luxury positioning but through extraordinary democratic accessibility.<br><br>The standard Blue Bottle (蓝瓶) at 56% ABV retails for under 10 RMB (approximately 1.30 EUR) — making it the everyday spirit of millions of working-class Beijingers and Chinese nationwide.<br><br>This accessibility is, paradoxically, a form of quality guarantee: at this price point, every batch must be both genuine and consistent to maintain the loyalty of an enormous, discerning everyday consumer base.`,

          fr: `Red Star Erguotou (红星二锅头) détient une distinction historique entièrement unique dans l'industrie mondiale des spiritueux : ce fut la première entreprise formellement enregistrée dans la République populaire de Chine, le 12 novembre 1949. La méthode de production 'Erguotou' (二锅头, 'deuxième tête de pot') réfère à une technique de distillation spécifique : seul le distillat de la deuxième zone de refroidissement est collecté. Red Star est, en volume, la marque de baijiu la plus consommée en Chine, grâce à une accessibilité démocratique extraordinaire — la bouteille bleue standard à 56% ABV se vend moins de 10 RMB.`,

          zh: `红星二锅头在全球烈酒行业中拥有完全独特的历史地位：它是1949年11月12日——中华人民共和国成立不到两个月后——在中华人民共和国正式注册的第一家企业。这一创建背景赋予红星超越其商业角色的象征意义，使其成为中国共产主义项目与日常物质文化关系的真实体现。<br><br>名称"二锅头"中的生产方法指的是一种特定的蒸馏技术：在传统北京式蒸馏中，只收集来自第二个冷凝区的蒸馏液——既非第一区高度酒精头酒，也非第三区较弱尾酒。这一选择性截取产生的酒比全程蒸馏收集更干净、更均衡，可追溯至清代北京烧锅传统。<br><br>按产量计，红星二锅头是中国消费量最大的单一白酒品牌。标准蓝瓶56%酒精度零售价不到10元人民币（约1.3欧元）——是数百万北京工薪阶层和全国民众的日常烈酒。`
        },

        flagship: {
          name: "Red Star Erguotou Blue (红星二锅头蓝瓶)",
          nameZh: "红星二锅头蓝瓶",
          abv: "56%",
          price: "~5–12€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/red-star-blue.jpg' */
          image: POOL_B.d,

          notes: {
            en: `The Blue Bottle (蓝瓶) is the quintessential everyday Beijing spirit — a category definition that has less to do with luxury and more to do with honest functionality.<br><br>At 56% ABV and under 10 RMB, it is precisely what it claims to be: a clean, grain-forward, unadorned expression of the Light Aroma style that provides its intended function — social lubrication, warmth, conviviality — with no pretensions.<br><br>The nose is direct and honest: clean grain (sorghum-forward), a light alcohol warmth, and a characteristic slight dried-grass note specific to Beijing Erguotou style.<br><br>No fruit complexity, no barrel influence, no attempt at elevation — just the transparent expression of the Erguotou production method. At room temperature, the 56% is assertive but not harsh; with a small cube of ice (common Beijing serving practice), the dilution reveals a clean, slightly sweet grain note.<br><br>The palate is the honest heart of Beijing drinking culture: warm, direct, medium-bodied, with a clean alcohol heat that energises rather than burns. The grain character expresses clearly through the mid-palate — no ester sweetness, no pit earthiness, just clean sorghum with light mineral water character from the Beijing water source.<br><br>The finish is short (15–20 seconds) and dry, with a characteristic clean warmth that demands a toast partner and a plate of roast duck. <br><br>Red Star Blue is not a spirit for contemplative solo sipping — it is a spirit for Chinese table culture, for the first cup of an evening where honesty matters more than elegance.`,

            fr: `La Bouteille Bleue est le spiritueux quotidien de Pékin par excellence. À 56% vol et moins de 10 RMB, c'est précisément ce qu'elle revendique : une expression propre, orientée grain, sans prétention de l'Arôme Léger. Le nez est direct et honnête : grain propre (sorgho dominant), chaleur alcoolisée légère, note d'herbe séchée caractéristique du style Erguotou de Pékin. La finale est courte (15–20 secondes) et sèche. Un spiritueux pour la culture de table chinoise, pas pour la dégustation solitaire.`,

            zh: `蓝瓶是北京日常烈酒的代名词——一个与奢华无关，与诚实功能性有关的品类定义。在56%酒精度和不到10元人民币的价格，它正是它所声称的：清香型风格的干净、粮食主导、不加修饰的表达，无附庸风雅地提供其预期功能——社交润滑、温暖、欢宴。

鼻腔直接坦诚：干净的粮食（高粱为主），轻淡的酒精暖感，以及北京二锅头风格特有的淡淡干草香。余味短促（15-20秒），干爽，带有特征性的干净暖感，需要一个敬酒对象和一盘烤鸭。红星蓝瓶不是用于沉思独酌的烈酒——它是中国桌饮文化的烈酒，是一个诚意比优雅更重要的夜晚的第一杯。`
          }
        }
      },

      {
        slug: "niulanshan",
        name: "Niulanshan (牛栏山)",
        founded: "1952",
        region: "Shunyi District, Beijing",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/niulanshan.jpg' */
        image: "https://thedieline.com/wp-content/uploads/2025/12/169aeb232101381.68956ca32c0eb.jpg-scaled.webp",

        description: {
          en: `Niulanshan (牛栏山, "Bull Pen Mountain") is the second major Beijing-based Light Aroma producer and — in terms of production volume — one of the top-five largest baijiu producers in China, though its low price point means it is rarely discussed in the international premium spirits context.<br><br>Founded in 1952 in the Shunyi District (now the location of Beijing Capital International Airport's expansion zones), the distillery draws its production water from the Chaobai River system, known for its mineral clarity.<br><br>The brand occupies an interesting strategic position: while Red Star Erguotou is the iconic mass-market Beijing spirit with deep cultural symbolism, Niulanshan has targeted the "accessible quality" tier — seeking to offer demonstrably better production quality and more careful distillation at a price point still accessible to the everyday market.<br><br>Its premium lines (珍品二锅头, Zhenpin Erguotou) are specifically marketed as a step above Red Star while sharing the same foundational Light Aroma character.<br><br>Niulanshan produces a full range from 38% ABV (for consumers wanting a lower-alcohol option, particularly female consumers and those new to baijiu) to 56% ABV (traditional Beijing strength). The 38% expression is widely credited as one of the most accessible baijiu products for international consumers unfamiliar with the style.`,

          fr: `Niulanshan (牛栏山) est le deuxième grand producteur d'Arôme Léger basé à Pékin et l'un des cinq plus grands producteurs de baijiu en Chine en volume. Fondé en 1952 dans le district de Shunyi, il tire son eau de production du système Chaobai River. La marque occupe une position stratégique intéressante : cibler le segment 'qualité accessible', offrant une qualité de production démontrablement meilleure que Red Star à un prix toujours accessible. Niulanshan produit une gamme complète de 38% à 56% ABV.`,

          zh: `牛栏山是北京第二大清香型生产商，按产量计也是中国五大白酒生产商之一。1952年创建于顺义区，从潮白河水系取水生产，以矿物质清澈著称。

品牌占据有趣的战略位置：红星二锅头是具有深厚文化象征的标志性大众市场北京烈酒，而牛栏山则以"亲民品质"层级为目标——寻求在仍然亲民的价格区间提供可见的更好生产品质和更精心的蒸馏。牛栏山生产从38%（适合消费量偏低者，尤其是女性消费者和白酒新手）到56%（传统北京度数）的全系列产品。`
        },

        flagship: {
          name: "Niulanshan Premium (牛栏山珍品二锅头)",
          nameZh: "牛栏山珍品二锅头",
          abv: "52%",
          price: "~15–30€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/niulanshan-premium.jpg' */
          image: POOL_B.a,

          notes: {
            en: `The Zhenpin (珍品, "Precious Article") is Niulanshan's expression of what the Erguotou tradition can achieve with more careful attention to raw material selection and distillation control. At 52% ABV (4 degrees lower than the standard Blue Bottle tier), the spirit has been crafted for a more contemplative style of appreciation.<br><br>The nose immediately shows the quality differential from the mass-market tier: cleaner, more precise, with the grain character more clearly articulated. Fresh sorghum, clean rice note, light floral (white blossom, a hint of acacia), and the characteristic Beijing mineral water quality from the Chaobai River source.<br><br>None of the rough edges present in cheaper Erguotou expressions — the distillation cut has been made more carefully, removing more of the congener-heavy foreshots and tails.<br><br>The palate entry is smooth and clean, with the 52% ABV well-integrated. The grain character expresses clearly through the mid-palate — this is Light Aroma as a study in transparency rather than complexity.<br><br>A light sweetness (characteristic of the rice component in the Beijing grain bill) provides balance. The finish extends 20–30 seconds — longer than the standard Blue Bottle, cleaner, with a pleasant floral echo. An honest step above everyday Erguotou: accessible enough for daily use, refined enough for hosting.`,

            fr: `Le Zhenpin (珍品) est l'expression de Niulanshan de ce que la tradition Erguotou peut atteindre avec une attention plus soigneuse à la sélection des matières premières. À 52% vol, le nez montre immédiatement le différentiel de qualité : plus propre, plus précis, avec le caractère de grain plus clairement articulé. Grain frais, note de riz propre, floral léger, qualité minérale de l'eau de Pékin. La finale s'étend 20–30 secondes avec un écho floral agréable.`,

            zh: `珍品是牛栏山通过更精心的原材料选择和蒸馏控制展现二锅头传统能达到高度的产品。在52%酒精度（比标准蓝瓶低4度），鼻腔立即显示出与大众市场层级的品质差异：更干净、更精确，粮食特征表达更清晰。新鲜高粱、干净米香、轻淡花香（白花、淡淡槐花味），以及来自潮白河水源的特征性北京矿物质水质。余味延续20-30秒——比标准蓝瓶更长、更干净，带有宜人的花香余韵。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     4. RICE AROMA — 米香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "rice-aroma",
    name: { en: "Rice Aroma", fr: "Arôme de riz", zh: "米香型" },
    nameZh: "米香型",
    regions: ["Guangxi"],
    color: "#6B8E5A",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/rice-aroma.jpg' */
    image: POOL_B.d,

    description: {
      en: `Rice Aroma (米香型, mǐ xiāng xíng) is the definitive spirit of Guangxi Province in southern China, and represents the most accessible, approachable and internationally comprehensible of all baijiu styles.<br><br>It is also, in many respects, the oldest: historical records document rice fermentation in Guangxi dating to the Neolithic period, and the style's use of rice rather than sorghum as the primary grain connects it to a pre-distillation fermented rice culture that predates baijiu as a category.<br><br>The structural differences from other baijiu styles are fundamental. Rice (大米, long-grain Indica-type preferred) replaces sorghum as the primary grain — a choice that immediately changes the aromatic profile, as rice produces different ester families than sorghum under fermentation.<br><br>More significantly, Rice Aroma uses small-ball qu (小曲, xiǎo qū) rather than the large Daqu bricks used in other styles. Small-ball qu contains far fewer microbial species — primarily Saccharomyces cerevisiae yeasts and controlled Rhizopus mold species — creating a cleaner, more focused fermentation environment.<br><br>Fermentation duration is only 7–10 days, compared to 30–90 days for other styles.<br><br>The resulting spirit is lighter in body, lower in most ester compounds, and higher in β-phenylethanol than all other styles. Typically bottled at 30–52% ABV, with many expressions at 38–45% — lower than the 50–55% norms of other premium baijiu styles, reflecting the style's philosophy of accessibility.<br><br>The flavour profile (honey, lychee, rose, jasmine) is closer to what Western consumers associate with aromatic liqueurs than with "Chinese baijiu," making it an exceptional introduction to the category.`,

      fr: `L'Arôme de Riz (米香型) est le spiritueux définitif du Guangxi et représente le plus accessible de tous les styles de baijiu. Il est aussi, à bien des égards, le plus ancien : des archives historiques documentent la fermentation du riz au Guangxi depuis le Néolithique. Les différences structurelles par rapport aux autres styles sont fondamentales : le riz (variété Indica longue) remplace le sorgho, et de petites boules de qu (小曲) sont utilisées plutôt que les grandes briques Daqu, créant un environnement de fermentation plus propre. La fermentation ne dure que 7–10 jours.`,

      zh: `米香型是广西省的代表性烈酒，也是所有白酒风格中最易亲近、最易接受的。从结构上看，与其他风格的差异是根本性的：以大米（长粒籼稻）取代高粱作为主粮，使用小曲而非大曲块，发酵时间仅7-10天，通常装瓶于30-52%酒精度（低于其他高端白酒风格50-55%的规范）。其风味特征（蜂蜜、荔枝、玫瑰、茉莉）比"中国白酒"更接近西方消费者联想到的芳香利口酒，是进入该品类的绝佳入门。`
    },

    science: {
      en: `Rice Aroma is the only major baijiu style in which the primary aromatic compound is β-phenylethanol (β-苯乙醇) — a compound produced by the Saccharomyces cerevisiae yeasts in small-ball qu metabolising phenylalanine. β-phenylethanol is responsible for the rose, honey and rosy-floral character that makes Rice Aroma immediately distinctive: it is the same compound responsible for the floral character in Champagne rosé and certain Bulgarian rose spirits.<br><br>Its predominance in Rice Aroma and relative absence in other baijiu styles means that Rice Aroma is the only baijiu style that shares aromatic language with European aromatic liqueurs.<br><br>The secondary compounds include ethyl acetate (providing freshness), isoamyl acetate (pear/banana note, typically minor), and various lactate esters. The total aromatic compound count in Rice Aroma is significantly lower than other styles — typically 200–400 identified compounds versus 800–1000+ for Sauce Aroma — reflecting the simpler, cleaner fermentation environment of small-ball qu.<br><br>This analytical "simplicity" is the style's quality challenge: with fewer aromatic compounds to work with, producing a balanced, complex-yet-clean Rice Aroma spirit requires exceptional control of raw material quality and fermentation conditions.<br><br>The Guilin water source (Li River, 漓江) used by benchmark producers is notably soft, pure and slightly acidic — ideal for rice fermentation, where the absence of calcium and magnesium excess allows the delicate β-phenylethanol character to express without mineral interference.`,

      fr: `L'Arôme de Riz est le seul grand style de baijiu où le composé aromatique primaire est le β-phénéthanol (β-苯乙醇) — produit par les levures Saccharomyces cerevisiae du petit qu lors du métabolisme de la phénylalanine. Le β-phénéthanol est le même composé responsable du caractère floral dans le Champagne rosé et certains spiritueux de rose bulgares. Le total de composés aromatiques identifiés (200–400) est nettement inférieur aux autres styles (800–1000+ pour le Sauce Aroma), reflétant l'environnement de fermentation plus simple.`,

      zh: `米香型是唯一主要芳香化合物为β-苯乙醇的白酒风格——由小曲中的酿酒酵母代谢苯丙氨酸产生。β-苯乙醇负责玫瑰、蜂蜜和玫瑰花香特征，使米香型立即与众不同：它与香槟桃红葡萄酒和某些保加利亚玫瑰烈酒中的花香特征是同一化合物。桂林漓江水源质地柔软、纯净，略呈酸性——是大米发酵的理想选择，钙镁含量低使精致的β-苯乙醇特征能够不受矿物质干扰地表达。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "guilin-sanhua",
        name: "Guilin Sanhua (桂林三花酒)",
        founded: "1952",
        region: "Guilin, Guangxi",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/guilin-sanhua.jpg' */
        image: "https://www.thechinajourney.com/wp-content/uploads/2025/05/Four-classic-Guilin-Sanhua-baijiu-bottles-with-red-caps-on-a-black-countertop-e1748429800614.webp",

        description: {
          en: `Guilin Sanhua (桂林三花酒, "Guilin Three Flower Spirit") is the undisputed international benchmark for Rice Aroma baijiu — the expression that defines the category for domestic and international audiences alike.<br><br>Its production since 1952 on the banks of the Li River in Guilin, one of China's most scenic cities, gives it both a unique terroir and an unparalleled tourist and cultural visibility.<br><br>The name "Sanhua" (三花, "Three Flowers") refers to a traditional quality verification method specific to this style: when the baijiu is vigorously shaken in a clear vessel, a well-made Guilin Sanhua produces three visible layers of fine bubbles — interpreted historically as an indicator that the fermentation, distillation and dilution water balance are all correctly achieved.<br><br>This three-flower test is still performed as part of quality control.<br><br>The Li River water (漓江水) used in production is famous throughout China for its exceptional purity — soft, slightly acidic, with very low total dissolved solids.<br><br>This water quality has been protected by Guilin's status as a Scenic Spot under China's highest landscape protection category. The rice used is local Guangxi short-to-medium grain polished rice, chosen for its starch composition that favours the β-phenylethanol fermentation pathway.<br><br>Guilin Sanhua ages its spirit in ceramic jars stored in limestone caves in the surrounding karst mountains — the same geological formation that gives the Guilin landscape its famous conical peaks.<br><br>The cave environment maintains constant humidity and temperature year-round, providing gentle aging conditions without the oxidative exposure of barrel aging. Some premium expressions are cave-aged up to 10 years.`,

          fr: `Guilin Sanhua (桂林三花酒) est le benchmark international incontesté de l'Arôme de Riz. Le nom 'Sanhua' (三花) réfère à une méthode de vérification de qualité traditionnelle : une agitation vigoureuse produit trois couches visibles de fines bulles. L'eau de la rivière Li (漓江) utilisée est célèbre pour sa pureté exceptionnelle. Guilin Sanhua vieillit son spiritueux dans des jarres en céramique stockées dans des grottes calcaires des montagnes karstiques environnantes.`,

          zh: `桂林三花酒是米香型白酒无可争议的国际标杆。"三花"之名源于传统品质验证方法：用力摇晃透明容器时，品质上乘的桂林三花会产生三层清晰可见的细腻气泡。

生产所用漓江水在全国以其卓越纯净度著称——柔软、略呈酸性，总溶解固体含量极低。桂林三花将酒液陈酿于储存在周边喀斯特山区石灰岩溶洞中的陶瓷坛内——与赋予桂林山水著名圆锥峰的相同地质构造。溶洞环境全年保持恒定湿度和温度。部分高端产品在溶洞中陈酿长达10年。`
        },

        flagship: {
          name: "Guilin Sanhua Aged (桂林三花陈酿)",
          nameZh: "桂林三花陈酿",
          abv: "52%",
          price: "~20–40€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/guilin-sanhua-aged.jpg' */
          image: POOL_B.d,

          notes: {
            en: `The Aged expression (陈酿) is Guilin Sanhua's premium offering and the finest widely available expression of the Rice Aroma category. Cave-aged in ceramic vessels, it demonstrates what extended maturation can achieve within the β-phenylethanol-driven flavour matrix of Rice Aroma.<br><br>The nose opens with remarkable delicacy: fresh lychee, a clean rose note (distinctly β-phenylethanol), light jasmine, and a characteristic clean honey sweetness.<br><br>The cave aging adds subtle depth: dried osmanthus, a whisper of aged cedar, and a faint mineral note from the limestone cave environment. The aromatic profile is light, clean and elegant — the antithesis of Sauce Aroma's complexity, but not simple: the β-phenylethanol character shows genuine depth.<br><br>The palate is gentle and medium-sweet — the 52% ABV is unusually well-hidden, presenting closer to the impression of a 40–43% spirit. The rice grain character expresses cleanly through the mid-palate: sweet rice, light lychee, a floral-honey note.<br><br>No pit earthiness, no heavy ester complexity, no barrel tannin — just the transparent expression of rice, small-ball qu and Li River water. The finish extends 20–30 seconds, clean and floral, with a pleasant lingering sweetness. The definitive Rice Aroma reference.`,

            fr: `L'expression Âgée est l'offre premium de Guilin Sanhua et la plus fine expression disponible de l'Arôme de Riz. Le nez s'ouvre avec une délicatesse remarquable : litchi frais, note de rose propre (distinctement β-phénéthanol), jasmin léger, miel doux caractéristique. Le vieillissement en grotte ajoute une profondeur subtile : osmanthus séché, cèdre vieilli discret. La finale s'étend 20–30 secondes, propre et florale.`,

            zh: `陈酿是桂林三花的高端产品，也是米香型品类中最优质的广泛可获得表达。在陶瓷容器中溶洞陈酿，展现了长期成熟在米香型β-苯乙醇驱动风味矩阵中能实现的高度。

鼻腔以非凡细腻开场：新鲜荔枝、干净的玫瑰香（明显的β-苯乙醇特征）、轻淡茉莉、特征性干净的蜂蜜甜感。溶洞陈酿增添微妙深度：干桂花、陈年雪松的低语、石灰岩洞环境带来的淡淡矿物感。余味延续20-30秒，干净而充满花香，带有令人愉悦的持久甜感。米香型的权威参考。`
          }
        }
      },

      {
        slug: "quanzhou-baiyun",
        name: "Quanzhou Baiyun (泉州白云)",
        founded: "1956",
        region: "Quanzhou, Guangxi",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/quanzhou-baiyun.jpg' */
        image: POOL_B.a,

        description: {
          en: `Quanzhou Baiyun (泉州白云, "Quanzhou White Cloud") is a significant regional Rice Aroma producer from Guangxi Province, established in 1956 in Quanzhou County. Less internationally prominent than Guilin Sanhua but respected within southern China for consistent quality and accessible pricing, Baiyun represents the everyday rice aroma tradition rather than the prestige-tier expression.<br><br>The Quanzhou County production zone draws water from local mountain springs in the Yuechengling Mountain Range (越城岭) — slightly more mineralised than the Li River water used by Guilin Sanhua, giving Baiyun expressions a marginally more mineral-forward character.<br><br>The brand occupies the sub-premium tier in Guangxi's rice aroma market, making it the accessible entry point for consumers exploring the style before investing in Guilin Sanhua's premium expressions.`,

          fr: `Quanzhou Baiyun (泉州白云) est un important producteur d'Arôme de Riz régional du Guangxi, établi en 1956. Moins connu internationalement que Guilin Sanhua mais respecté dans le sud de la Chine pour sa qualité constante et ses prix accessibles. L'eau des sources montagneuses de la chaîne Yuechengling est légèrement plus minéralisée que l'eau de la rivière Li, donnant aux expressions Baiyun un caractère minéral légèrement plus prononcé.`,

          zh: `泉州白云是广西省重要的区域米香型生产商，1956年在全州县建立。在国内不如桂林三花知名，但在华南地区以稳定的品质和亲民的价格受到认可。全州产区从越城岭山脉的山泉取水——比桂林三花使用的漓江水矿化度略高，赋予白云产品稍微更突出的矿物质特征。`
        },

        flagship: {
          name: "Baiyun Classic (白云经典)",
          nameZh: "白云经典",
          abv: "38%",
          price: "~10–22€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/baiyun-classic.jpg' */
          image: POOL_B.a,

          notes: {
            en: `The Classic expression at 38% ABV is one of the most accessible baijiu products for consumers exploring the category for the first time, particularly those from wine or spirits backgrounds unfamiliar with high-ABV grain spirits. The lower alcohol content (12% lower than standard baijiu tier) makes it approach a generous eau de vie in character.<br><br>The nose is gentle and inviting: sweet jasmine rice, light lychee, a delicate honey note, and a subtle mineral freshness from the mountain spring water. The β-phenylethanol rose character is present but understated at this dilution — more honey than rose, more fresh grain than β-phenylethanol. Clean and unintimidating.<br><br>The palate is soft, medium-sweet, and light-bodied — the 38% ABV presenting almost as a fortified wine in terms of alcohol impact. Rice grain sweetness dominates the mid-palate, supported by light floral and gentle honey notes.<br><br>The finish is short (15–20 seconds) and clean, with a pleasantly sweet rice echo. Not a complex spirit — complexity is not the point. Baiyun Classic is the perfect "first baijiu" for the curious newcomer.`,

            fr: `L'expression Classic à 38% vol est l'un des produits de baijiu les plus accessibles pour les consommateurs explorant la catégorie pour la première fois. Le nez est doux et invitant : riz au jasmin sucré, litchi léger, miel délicat, fraîcheur minérale. La bouche est douce, moyennement sucrée et légère — le 38% vol se présentant presque comme un vin fortifié. La finale est courte (15–20 secondes) et propre.`,

            zh: `38%酒精度的经典产品是首次探索该品类的消费者——尤其是来自葡萄酒或烈酒背景、不熟悉高度粮食烈酒的人——最易接近的白酒产品之一。

鼻腔温和诱人：甜糯米饭香、轻淡荔枝、精致蜂蜜香和来自山泉水的微妙矿物清新感。余味短促（15-20秒），干净，带有令人愉悦的甜米回味。不是复杂的烈酒——复杂性不是重点。白云经典是好奇新手的完美"第一款白酒"。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     5. PHOENIX AROMA — 凤香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "phoenix-aroma",
    name: { en: "Phoenix Aroma", fr: "Arôme du phénix", zh: "凤香型" },
    nameZh: "凤香型",
    regions: ["Shaanxi"],
    color: "#B8860B",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/phoenix-aroma.jpg' */
    image: POOL_B.e,

    description: {
      en: `Phoenix Aroma (凤香型, fèng xiāng xíng) is one of the most historically significant and technically unique of all baijiu styles — and also one of the least understood outside of China.<br><br>It is embodied exclusively by a single distillery in a single town (Xifengjiu in Liulin Town, Fengxiang County, Shaanxi Province) and was formally recognised as one of China's original "Four Famous Baijiu" (四大名酒) at the first National Spirits Appraisal Conference in 1952 — placing it alongside Moutai, Fenjiu and Luzhou Laojiao in the founding canon of recognised Chinese spirits quality.<br><br>The name "Xi Feng" (西凤, "West Phoenix") references local Fengxiang County legend: the area was traditionally called "Fengxiang" (凤翔, "Phoenix's Flight") because phoenixes were said to take flight from its mountains when the land was at peace.<br><br>The county also contains the oldest documented Qin State city site in China, and the area's spirit production is referenced in Zhou Dynasty texts (~1100 BCE) — giving Phoenix Aroma potentially the oldest documented production history of any aroma style, predating even Fenjiu's 550 AD records.<br><br>What makes Phoenix Aroma technically unique among all baijiu styles is its combination of two otherwise incompatible production features. First: its fermentation pits are excavated in local loess (黄土) soil, like Strong Aroma pits, but are re-lined with fresh loess mud every single year — eliminating the ancient microbial accumulation that defines Strong Aroma's flavour signature, while retaining the base mineral contribution of the pit.<br><br>Second: post-distillation aging occurs exclusively in 酒海 (jiǔ hǎi, "seas of alcohol") — giant rattan-woven baskets lined with blood (pig's blood), vegetable oil (tung oil and hemp oil), lime, and multiple layers of cloth, sealed with beeswax. This method exists nowhere else in the world.`,

      fr: `L'Arôme du Phénix (凤香型) est l'un des styles de baijiu les plus historiquement significatifs et techniquement uniques. Il est incarné exclusivement par une seule distillerie (Xifengjiu à Liulin Town, Shaanxi) et reconnu comme l'un des 'Quatre Baijiu Célèbres' originaux de Chine lors de la première Conférence d'Évaluation de 1952. Les fosses de fermentation sont retapissées de nouvelle boue chaque année, et le vieillissement se fait dans des 'mers d'alcool' (酒海) — paniers de rotin scellés avec sang de porc, huile végétale, chaux et cire d'abeille — une méthode n'existant nulle part ailleurs dans le monde.`,

      zh: `凤香型是所有白酒风格中历史意义最重大、技术上最独特的风格之一。专属于陕西省凤翔县柳林镇西凤酒一家酒厂，1952年首届全国评酒会正式认定为中国原"四大名酒"之一。

凤香型的技术独特性在于两个本不相容的生产特征的结合：发酵窖在本地黄土中开凿，但每年重新用新鲜黄土泥填充——消除了定义浓香型风味的古老微生物积累，同时保留窖池的基础矿物质贡献；蒸馏后陈酿专在酒海中进行——巨型藤条编织的篓，用猪血、植物油（桐油和大麻油）、石灰和多层布料内衬，以蜂蜡密封。这一方法在世界其他地方不存在。`
    },

    science: {
      en: `Phoenix Aroma bridges two fermentation chemistries in a way that creates a genuinely novel aromatic matrix. The annual loess pit relining process is significant: by introducing fresh uncolonised mud each year, producers limit the Clostridium and hexanoic acid bacteria that would develop in permanently maintained pits, preventing the build-up of strong ethyl caproate character (the Strong Aroma-defining compound).<br><br>However, the loess mineral chemistry still contributes ethyl caproate in lower concentrations than Strong Aroma, along with a unique set of mineral-derived compounds specific to Shaanxi loess geology.<br><br>The rattan 酒海 aging vessels are technically fascinating. The rattan baskets are porous — micro-oxygenation through the basket weave and the layered lining creates a gentle oxidative aging environment.<br><br>The pig's blood lining (traditionally applied as a sealant that hardens to form the inner surface) contributes amino acids and proteins that interact with the spirit over time, potentially producing Maillard-adjacent reactions that contribute the aged character.<br><br>The multiple layers of cloth, vegetable oil and beeswax create a semi-permeable membrane that allows controlled alcohol evaporation (the baijiu equivalent of the "angel's share").<br><br>Aromatic compound analysis shows Phoenix Aroma contains both ethyl acetate (Light Aroma characteristic) and ethyl caproate (Strong Aroma characteristic) in roughly equal proportions — a balanced dual-ester profile that is the chemical expression of its hybrid production methodology.`,

      fr: `L'Arôme du Phénix fait le pont entre deux chimies de fermentation. La réimplantation annuelle de la fosse limite les bactéries Clostridium et acide hexanoïque qui se développeraient dans des fosses maintenues en permanence, empêchant l'accumulation de caractère fort en caproate d'éthyle. Les récipients de vieillissement en rotin (酒海) sont techniquement fascinants : la micro-oxydation à travers le tissage crée un vieillissement oxydatif doux. La doublure de sang de porc contribue des acides aminés et protéines. L'analyse aromatique montre que l'Arôme du Phénix contient acétate d'éthyle et caproate d'éthyle en proportions approximativement égales.`,

      zh: `凤香型将两种发酵化学特性桥接起来，创造出真正新颖的香气矩阵。每年重新填充黄土窖的工艺意义重大：引入新鲜未定植的泥土，限制了永久维护的窖池中会发展的梭状芽胞杆菌和己酸细菌，防止强浓香型特征己酸乙酯的积累。

藤条酒海陈酿容器在技术上令人着迷。藤条篓是透气的——通过篓编织和多层内衬的微氧化创造温和的氧化陈酿环境。猪血内衬（传统上作为密封剂涂抹，硬化形成内表面）随时间向酒液贡献氨基酸和蛋白质。芳香化合物分析显示凤香型同时含有乙酸乙酯（清香型特征）和己酸乙酯（浓香型特征），比例大致相当——其混合生产方法在化学上的表达。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "xifengjiu",
        name: "Xifengjiu (西凤酒)",
        founded: "1956",
        region: "Liulin Town, Fengxiang County, Baoji, Shaanxi",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/xifengjiu.jpg' */
        image: "https://www.tasteatlas.com/images/ingredients/499513d995a341988f37801535cce648.jpg",

        description: {
          en: `Xifengjiu (西凤酒, "West Phoenix Spirit") is one of China's "Four Famous Baijiu" — an institution whose history spans over three thousand years of documented spirit production in Liulin Town, Fengxiang County, making it arguably the oldest continuous production site of any baijiu style.<br><br>Its modern enterprise form was established in 1956 from the consolidation of local distilleries, but the production heritage significantly predates this.<br><br>The historical record is extraordinary in its depth. Shang Dynasty oracle bone inscriptions (~1400–1100 BCE) reference ritual grain fermentation in the Fengxiang area.<br><br>Zhou Dynasty texts (ca. 1046 BCE) document offerings of "Qin wine" (秦酒) — identified by historians with the Fengxiang production tradition — to ancestral spirits and at court ceremonies.<br><br>Tang Dynasty imperial court records (618–907 AD) document Xifeng-style spirit being presented at imperial banquets, and the Song Dynasty polymath Su Shi (苏轼, 1037–1101) — poet, artist, statesman, and by all accounts enthusiastic consumer — referenced Fengxiang wine approvingly in his literary correspondence.<br><br>These documented references across 3,000 years of Chinese civilisation give Xifengjiu a cultural pedigree that is genuinely unprecedented in the global spirits category.<br><br>The modern distillery occupies a site of significant archaeological interest: Liulin Town sits adjacent to the ancient capital of Yong (雍城), the Qin State's capital for 294 years (677–383 BCE), where China's first professional bureaucratic state was administered.<br><br>The archaeological proximity to this site is not merely symbolic: production water is drawn from the Liulin River (柳林河), which flows through limestone and loess strata that are geologically specific to the Guanzhong Basin and documented in Qin Dynasty water management records.`,

          fr: `Xifengjiu (西凤酒) est l'un des 'Quatre Baijiu Célèbres' de Chine, avec une histoire documentée de plus de 3 000 ans de production de spiritueux à Liulin Town. L'entreprise moderne a été établie en 1956. Les inscriptions sur os oraculaires Shang (~1400–1100 AV. J.-C.) référencent la fermentation rituelle dans la région de Fengxiang. Les textes Zhou documentent des offrandes de 'vin Qin' aux cérémonies de cour. Su Shi (1037–1101) a référencé favorablement le vin de Fengxiang. Ces références sur 3 000 ans de civilisation chinoise donnent à Xifengjiu un pedigree culturel sans précédent.`,

          zh: `西凤酒是中国"四大名酒"之一，在柳林镇有超过3000年的有据可查的烈酒生产历史，现代企业形式1956年建立。

历史记录在深度上令人叹为观止：商代甲骨文（约公元前1400-1100年）提及凤翔地区的仪式性粮食发酵；周代典籍（约公元前1046年）记载以"秦酒"——被历史学家认定为凤翔生产传统——祭祀先祖和朝廷仪式；唐代宫廷档案记录西凤式烈酒在御宴上呈献；宋代全才苏轼（1037-1101年）在文学书信中对凤翔酒表示赞赏。这些跨越3000年中国文明的文献引用赋予西凤酒在全球烈酒品类中真正史无前例的文化血统。`
        },

        flagship: {
          name: "Xifengjiu 6 Year (西凤酒6年)",
          nameZh: "西凤酒6年",
          abv: "55%",
          price: "~25–45€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/xifengjiu-6year.jpg' */
          image: POOL_B.e,

          notes: {
            en: `The 6-year expression is Xifengjiu's standard-tier flagship and the definitive accessible introduction to Phoenix Aroma — a style so unique that it genuinely doesn't resemble any other baijiu, making it both challenging and rewarding for those coming from other styles.<br><br>The rattan 酒海 aging contributes a character that is immediately identifiable once understood: a distinctive dried-apricot, prune and dried fruit complexity that comes from the semi-permeable aging environment, combined with a characteristic slightly tannic astringency at the beginning of the mid-palate that is unique to this style. No other baijiu produces this combination.<br><br>The nose opens with dried stone fruit (apricot, plum, a hint of dried fig), cereal grain, and a warm, slightly spicy note from the loess pit fermentation — not the heavy earthiness of Strong Aroma pits, but a lighter, mineral-adjacent earthiness specific to the yellow loess soil of Shaanxi.<br><br>A faint beeswax note — from the 酒海 lining — is present with extended air contact and is one of the most unusual aromatic notes in all of baijiu.<br><br>On the palate at 55% ABV, the entry is warm and direct — higher proof than most baijiu styles, but the 酒海 aging has rounded the spirit considerably. The mid-palate develops the dried fruit and grain character with a distinctive peppery quality (black and white pepper notes) that Xifengjiu is famous for — a characteristic not typically found in other aroma types.<br><br>The finish extends 30–45 seconds, warm, mineral and gently spiced. An utterly unique spirit.`,

            fr: `L'expression 6 ans est le fleuron standard de Xifengjiu et l'introduction accessible définitive à l'Arôme du Phénix. Le vieillissement en rotin (酒海) contribue une caractéristique immédiatement identifiable : une complexité abricot séché, pruneau et fruits secs, combinée à une astringence légèrement tannique caractéristique de la mi-bouche unique à ce style. Le nez s'ouvre avec des fruits à noyau séchés, des céréales, et une note légèrement épicée de la fermentation en fosse de lœss. Une légère note de cire d'abeille — de la doublure 酒海 — est présente. La finale s'étend 30–45 secondes, chaude, minérale et doucement épicée.`,

            zh: `6年表达是西凤酒的标准旗舰产品，是凤香型最权威的亲民入门——这一风格非常独特，与任何其他白酒都不相似，使其对从其他风格转来的人既具挑战性又具回报性。

藤条酒海陈酿赋予一种一旦理解便立即可辨识的特征：一种独特的杏干、梅子干和干果复杂性，来自半透气的陈酿环境，结合中段初期特有的略带单宁收敛感——这是这一风格独有的，其他白酒都没有这种组合。

鼻腔以干核果（杏子、梅子、淡淡无花果干）、谷物粮食香和来自黄土窖发酵的温暖略带辛辣感开场。延长醒酒后，可觉察到一丝蜂蜡香气——来自酒海内衬——是所有白酒中最不寻常的香气之一。余味延续30-45秒，温暖、矿物质感、轻柔辛辣。一款绝对独特的烈酒。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     6. MIXED AROMA — 兼香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "mixed-aroma",
    name: { en: "Mixed Aroma", fr: "Arôme mixte", zh: "兼香型" },
    nameZh: "兼香型",
    regions: ["Hubei", "Anhui"],
    color: "#7B68AA",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/mixed-aroma.jpg' */
    image: POOL_B.f,

    description: {
      en: `Mixed Aroma (兼香型, jiān xiāng xíng) is a deliberately engineered hybridisation of two major aroma styles — Sauce Aroma and Strong Aroma — designed to capture the best qualities of both in a single spirit.<br><br>Formally recognised as an independent aroma classification in 1994 by the China's National Standards Authority (formally standardised in GB/T 23547), it is one of the newer formal categories and represents a deliberate philosophical departure from the "purity of origin" principle that defines most traditional baijiu styles.<br><br>The style was pioneered in Hubei Province by Baiyunbian Distillery in the 1950s–1960s, initially as an experimental production method and later as a formal category.<br><br>The motivation was partly commercial: Hubei producers, lacking the Guizhou terroir for authentic Sauce Aroma and the Sichuan pit infrastructure for authentic Strong Aroma, developed a dual-process method that could access both aromatic registers.<br><br>The results were sufficiently distinctive to merit formal recognition as an independent category rather than as a lower-quality imitation of either parent style.<br><br>The experience of drinking Mixed Aroma is genuinely unusual — and for experienced baijiu drinkers, one of the most intellectually rewarding experiences in the category.<br><br>The spirit presents in what can be described as two acts: the opening is characterised by the fruity, approachable richness of Strong Aroma (ethyl caproate-dominant ester character, stone fruit, pineapple), followed by a gradual emergence of Sauce Aroma depth — umami, mushroom, mineral, dried fruit — that arrives 20–30 seconds into the mid-palate and develops through the finish.<br><br>This temporal dimension (a spirit that evolves significantly over time in the glass) is rare in any spirits category.`,

      fr: `L'Arôme Mixte (兼香型) est une hybridation délibérément conçue de deux styles majeurs — Sauce Aroma et Strong Aroma — formellement reconnu en 1994 (normalisé en GB/T 23547). Pionnier par la distillerie Baiyunbian au Hubei, il offre une expérience en deux actes : l'ouverture est caractérisée par la richesse fruitée de l'Arôme Fort, suivie d'une émergence progressive de la profondeur de l'Arôme Sauce qui arrive 20–30 secondes dans le milieu de bouche. Cette dimension temporelle est rare dans toute catégorie de spiritueux.`,

      zh: `兼香型是酱香型和浓香型两种主要香型的刻意工程化混合——1994年由中国国家标准局正式认定为独立香型分类（正式标准化为GB/T 23547）。

饮用兼香型的体验是真正不寻常的——对于有经验的白酒饮者，是品类中最具智识奖励的体验之一。烈酒以两幕呈现：开场以浓香型的果香、易接近的丰富感（己酸乙酯主导的酯类特征，核果、菠萝）为特征，随后是酱香深度的逐渐浮现——鲜味、蘑菇、矿物质、干果——在中段约20-30秒后出现，并贯穿余味发展。这种时间维度（一款在杯中随时间显著演变的烈酒）在任何烈酒品类中都属罕见。`
    },

    science: {
      en: `Mixed Aroma production uses two entirely separate fermentation processes running simultaneously in different production areas of the same facility. The Sauce Aroma component follows standard Sauce Aroma protocols: high-temperature Daqu (60–65°C), stone or special-clay pit fermentation, nine distillation cycles, outdoor sun-drying and re-wetting of the grain stack.<br><br>The Strong Aroma component follows standard Strong Aroma protocols: medium-high temperature Daqu (55–62°C), ancient mud pit fermentation, single 60–90-day fermentation cycle.<br><br>The two resulting base spirits are then blended in defined proportions — typically 60% Sauce component to 40% Strong component (or similar ratios depending on the producer's target profile) — and aged as a blend in ceramic vessels.<br><br>The aromatic compound profile of Mixed Aroma is analytically complex because it contains high concentrations of both ethyl caproate (Strong Aroma marker) and ethyl lactate + pyrazines (Sauce Aroma markers) simultaneously.<br><br>These would not co-exist at this concentration in a naturally produced single-process spirit — their combination is the chemical signature of the deliberate blending approach. The aging process in ceramic vessels allows the two aromatic families to integrate, developing what experienced tasters describe as a "unified" rather than "layered" character over time.`,

      fr: `La production utilise deux processus de fermentation entièrement séparés : le composant Sauce Aroma suit les protocoles Sauce standard (Daqu haute température, fermentation en fosse), le composant Fort suit les protocoles Fort standard (Daqu moyen-haute température, fermentation en fosse de boue ancienne). Les deux spiritueux de base résultants sont ensuite mélangés en proportions définies — typiquement 60% composant Sauce pour 40% composant Fort. Le profil de composés aromatiques contient simultanément de fortes concentrations de caproate d'éthyle (marqueur Fort) et de lactate d'éthyle + pyrazines (marqueurs Sauce).`,

      zh: `兼香型生产在同一设施的不同生产区域同时运行两套完全独立的发酵工艺。酱香组分遵循标准酱香工艺：高温大曲（60-65°C）、石窖或特殊黏土窖发酵、九个蒸馏循环、粮食堆的户外晾晒和润粮。浓香组分遵循标准浓香工艺：中高温大曲（55-62°C）、古泥窖发酵、单次60-90天发酵循环。

两种基础酒按规定比例勾调——通常酱香组分60%、浓香组分40%（或根据生产商目标风格的类似比例）——并作为勾调酒在陶瓷容器中陈酿。兼香型的芳香化合物特征在分析上是复杂的，因为它同时含有高浓度的己酸乙酯（浓香型标志）和乳酸乙酯+吡嗪（酱香型标志）。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "baiyunbian",
        name: "Baiyunbian (白云边)",
        founded: "1952",
        region: "Songzi, Hubei",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/baiyunbian.jpg' */
        image: "https://www.chinadaily.com.cn/food/img/attachement/jpg/site1/20170812/d8cb8a51564a1af8e78b0d.jpg",

        description: {
          en: `Baiyunbian (白云边, "White Cloud Edge") is the founding producer and definitive benchmark of Mixed Aroma baijiu — the distillery that invented the Jiānxiāng category and whose products defined what "mixed aroma" means in practical terms.<br><br>Established in 1952 in Songzi City, Hubei Province, it was the first producer to deliberately combine Sauce Aroma and Strong Aroma production protocols in a single facility, and the first to formally propose the mixed aroma classification to Chinese standards authorities.<br><br>The brand name "白云边" (White Cloud Edge) references the poem "Leaving Baidicheng" (早发白帝城) by Tang Dynasty poet Li Bai — a poem set in the Three Gorges region of Hubei, where white clouds are said to drift at the edges of the gorge walls.<br><br>This literary reference grounds the brand in Hubei's most iconic landscape: the Yangtze River gorge system, which provides both cultural identity and the water source (Yangtze tributaries) for production.<br><br>Baiyunbian's production was a deliberate response to a specific quality challenge: the distillery was established in a region with access to neither the Guizhou red sorghum and microclimate needed for authentic Sauce Aroma nor the ancient mud pits of Sichuan needed for Strong Aroma's most complex character.<br><br>By developing and mastering a dual-process approach, Baiyunbian transformed a potential competitive disadvantage into a stylistic innovation. The formal recognition of Mixed Aroma in 1994 (after decades of informal recognition) validated this innovation at the national standard level.`,

          fr: `Baiyunbian (白云边) est le producteur fondateur et le benchmark définitif de l'Arôme Mixte — la distillerie qui a inventé la catégorie Jiānxiāng. Établie en 1952 à Songzi, Hubei, ce fut la première à combiner délibérément les protocoles de production Sauce Aroma et Fort dans un seul établissement. Le nom de la marque référence le poème 'Partir de Baidi City' de Li Bai. La reconnaissance formelle de l'Arôme Mixte en 1994, après des décennies de reconnaissance informelle, valida cette innovation au niveau des normes nationales.`,

          zh: `白云边是兼香型白酒的创始生产商和权威标杆——发明了兼香型品类、其产品定义了"兼香"实际意义的酒厂。1952年建立于湖北省松滋市，是第一家刻意将酱香和浓香生产工艺结合在单一设施中的生产商，也是第一家向中国标准机构正式提出兼香型分类申请的企业。

品牌名称"白云边"引用唐代诗人李白的《早发白帝城》——一首以湖北三峡地区为背景的诗。1994年兼香型的正式认可（在数十年非正式认可之后）在国家标准层面验证了这一创新。`
        },

        flagship: {
          name: "Baiyunbian 15 Year (白云边15年)",
          nameZh: "白云边15年",
          abv: "53%",
          price: "~60–110€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/baiyunbian-15year.jpg' */
          image: POOL_B.f,

          notes: {
            en: `The 15-year expression is Baiyunbian's definitive statement — the expression that most clearly demonstrates the potential of Mixed Aroma to transcend its hybridised origins and become a genuinely great spirit in its own right.<br><br>Fifteen years in ceramic vessels has allowed the two aromatic families — Sauce and Strong — to integrate fully rather than existing as sequential impressions.<br><br>The nose at this age is complex and immediately engaging: the opening presents the warm, fruited richness of Sauce Aroma heritage — dried tropical fruit (lychee, guava), mushroom broth, a mellow soy-adjacent fermented character — without the assertiveness of young Sauce Aroma.<br><br>With 5–10 minutes of air contact, the Strong Aroma dimension emerges: stone fruit, light floral, a characteristic earthiness. The integration at 15 years means these two aromatic families are genuinely woven together rather than layered sequentially.<br><br>On the palate, the textbook two-act presentation resolves at this age into something more unified. The entry is rich, warm and full-bodied — the Sauce Aroma heritage providing the umami backbone.<br><br>The Strong Aroma contribution expresses through the mid-palate as fruited sweetness, stone fruit and gentle earthiness. The finish extends 50–70 seconds, with the Sauce Aroma mineral depth persisting longest alongside dried fruit and a clean, warming fade. One of the most interesting and rewarding long-finish experiences in all of baijiu.`,

            fr: `L'expression 15 ans est la déclaration définitive de Baiyunbian. Quinze ans dans des cuves en céramique ont permis aux deux familles aromatiques — Sauce et Fort — de s'intégrer pleinement. Le nez est complexe : richesse fruitée chaude de l'héritage Sauce Aroma — fruits tropicaux séchés, bouillon de champignons, caractère fermenté proche du soja. Avec 5–10 minutes de contact avec l'air, la dimension Fort émerge. La finale s'étend 50–70 secondes avec la profondeur minérale Sauce persistant le plus longtemps.`,

            zh: `15年表达是白云边的权威之作——最清楚地展示兼香型超越其混合起源、成为自身真正伟大烈酒潜力的产品。陶瓷容器中的十五年使两个香气族——酱香和浓香——完全融合，而非作为连续印象存在。

此年龄的鼻腔复杂而立即吸引人：开场呈现酱香遗产的温暖、果香丰富感——干热带水果（荔枝、番石榴）、蘑菇汤、醇厚的近酱油发酵特征——但没有年轻酱香的强势。经过5-10分钟醒酒，浓香维度浮现：核果、轻淡花香、特征性泥土感。余味延续50-70秒，酱香矿物质深度持续最久。是所有白酒中最有趣、最有价值的悠长余味体验之一。`
          }
        }
      },

      {
        slug: "kouzijiao",
        name: "Kouzijiao (口子窖)",
        founded: "1949",
        region: "Huoqiu, Anhui",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/kouzijiao.jpg' */
        image: "https://gbaike-image.cdn.bcebos.com/0824ab18972bd4077a4f607b77899e510eb309af/0824ab18972bd4077a4f607b77899e510eb309af_url?x-bce-process=image/format,f_auto/resize,m_lfit,h_1024,limit_1",

        description: {
          en: `Kouzijiao (口子窖, "Mouth of the Cellar") is a significant Mixed Aroma producer from Anhui Province, established in 1949 in Huoqiu County. While less internationally known than Baiyunbian, Kouzijiao is highly respected in eastern China — particularly in Anhui, Jiangsu, and Shandong — as a quality mid-tier Mixed Aroma expression.<br><br>The brand name references the "kouziyao" (口子窖) or "necklace cellar" shape of its ancient fermentation pits.<br><br>Kouzijiao's Mixed Aroma production differs from Baiyunbian's in its regional emphasis: being in Anhui rather than Hubei, it shares proximity to Strong Aroma production traditions of the Jianghuai region (江淮地区) and incorporates local Anhui fermentation characters alongside its Sauce Aroma components.<br><br>This gives Kouzijiao expressions a slightly different aromatic balance — somewhat more approachable and rounded than the assertive Baiyunbian, with the Strong Aroma character somewhat more prominent relative to the Sauce.`,

          fr: `Kouzijiao (口子窖) est un important producteur d'Arôme Mixte du Anhui, établi en 1949 à Huoqiu. Très respecté dans l'est de la Chine, il offre un équilibre aromatique légèrement différent de Baiyunbian — somewhat more accessible, avec le caractère Fort un peu plus prominent.`,

          zh: `口子窖是安徽省重要的兼香型生产商，1949年建于霍邱县。虽然在国际上不如白云边知名，但在华东地区——特别是安徽、江苏和山东——作为优质中档兼香型产品备受尊重。品牌名称来源于其古代发酵窖池的"口子窖"（口项链形）形状。

口子窖的兼香型生产在区域侧重上与白云边有所不同：地处安徽而非湖北，与江淮地区的浓香型生产传统更为接近，并将安徽本地发酵特征融入其酱香组分中。这使口子窖产品的香气平衡略有不同——比强势的白云边更易亲近、更圆润，浓香特征相对于酱香略更突出。`
        },

        flagship: {
          name: "Kouzijiao 10 Year (口子窖10年)",
          nameZh: "口子窖10年",
          abv: "46%",
          price: "~30–55€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/kouzijiao-10year.jpg' */
          image: POOL_B.a,

          notes: {
            en: `The 10-year expression at 46% ABV is Kouzijiao's standard premium offering and a very accessible introduction to the Jiānxiāng category — lower proof than most Mixed Aroma expressions (Baiyunbian's premium tier sits at 53%), making it approachable for those exploring the style for the first time.<br><br>The nose presents the Mixed Aroma character in a softer, more approachable register: the opening is dominated by gentle fruit (soft lychee, peach, a delicate floral note) with the Strong Aroma heritage clearly legible, and the Sauce Aroma dimension arriving as a quiet background layer of miso, dried mushroom and mineral.<br><br>This balance — Strong Aroma foreground, Sauce Aroma background — is somewhat inverted from Baiyunbian's typical presentation.<br><br>The palate at 46% is deliberately accessible: medium-bodied, with soft fruit, gentle earthiness and a clean, moderately complex mid-palate. The finish extends 30–40 seconds with a pleasant mixed aromatic fade. A well-balanced, highly accessible Mixed Aroma expression that represents excellent value in the category.`,

            fr: `L'expression 10 ans à 46% vol est l'offre premium standard de Kouzijiao et une introduction très accessible à la catégorie Jiānxiāng. Le nez présente le caractère Arôme Mixte dans un registre plus doux : l'ouverture est dominée par des fruits doux (litchi doux, pêche, note florale délicate) avec la dimension Sauce Aroma arrivant comme une couche de fond discrète de miso, champignon séché et minéral. La finale s'étend 30–40 secondes.`,

            zh: `46%酒精度的10年表达是口子窖的标准高端产品，是兼香型品类的非常亲民的入门——度数比大多数兼香型产品低（白云边高端系列为53%），使首次探索该风格的人更易接受。

鼻腔以更柔和、更亲近的风格呈现兼香特征：以柔和果香（柔软荔枝、蜜桃、细腻花香）为主，浓香遗产清晰可辨，酱香维度作为味噌、干香菇和矿物质的安静背景层次出现。余味延续30-40秒，带有令人愉悦的兼香淡出。是品类中均衡、高度亲民、性价比突出的兼香型产品。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     7. HERBAL AROMA — 药香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "herbal-aroma",
    name: { en: "Herbal Aroma", fr: "Arôme herbacé", zh: "药香型" },
    nameZh: "药香型",
    regions: ["Guizhou"],
    color: "#556B2F",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/herbal-aroma.jpg' */
    image: POOL_B.g,

    description: {
      en: `Herbal Aroma (药香型, yào xiāng xíng) — also known as Dong Aroma (董香型) after its sole major producer — is the rarest, most unusual and most pharmacologically complex of all baijiu styles.<br><br>It is produced almost exclusively in Zunyi, Guizhou Province by a single distillery (Dongjiu), and its production protocol is the only one in the world of commercial spirits that deliberately incorporates over 130 traditional Chinese medicinal plants as a systematic part of the fermentation process.<br><br>The pharmaceutical tradition that informs Herbal Aroma production is deeply rooted in Chinese medical practice and specifically in the Bencao Gangmu (本草纲目, "Compendium of Materia Medica") — the 1596 masterwork of physician and naturalist Li Shizhen (李时珍) that catalogued 1,892 medicinal substances including 1,094 plant species.<br><br>The medicinal plants incorporated in Dongjiu's Daqu and small qu include angelica root (白芷), astragalus (黄芪), atractylodes (苍术), spikenard (甘松), and dozens of other species used in Traditional Chinese Medicine for their documented effects on digestion, circulation, and wellbeing.<br><br>The medicinal plant incorporation is not a marketing claim or traditional supplement — it is a fundamental production requirement that defines the aromatic character and microbial ecosystem of the fermentation.<br><br>The 130+ plants are divided between the large Daqu (大曲, providing the Sauce Aroma base character) and the small qu (小曲, providing a Light Aroma/medicinal character layer), and their presence fundamentally changes the microbial community: plant-derived antimicrobial compounds selectively inhibit certain organisms while favouring others, creating a unique fermentation ecology found nowhere else.`,

      fr: `L'Arôme Herbacé (药香型) est le plus rare et le plus pharmacologiquement complexe de tous les styles de baijiu. Produit quasi exclusivement à Zunyi, Guizhou, par une seule distillerie (Dongjiu), son protocole de production incorpore délibérément plus de 130 plantes médicinales chinoises. La tradition pharmaceutique s'inscrit profondément dans le Bencao Gangmu (本草纲目, 1596) de Li Shizhen. Les plantes médicinales incorporées comprennent la racine d'angélique, l'astragale, et des dizaines d'autres espèces de Médecine Traditionnelle Chinoise.`,

      zh: `药香型——也以其唯一主要生产商命名为董香型——是所有白酒风格中最稀有、最不寻常、最具药理学复杂性的。几乎专门由遵义一家酒厂（董酒）在贵州省遵义市生产，其生产规程是商业烈酒世界中唯一将130多种传统中草药作为发酵过程的系统性部分有意纳入的。

指导药香型生产的药学传统根植于中医实践，尤其是李时珍（1518-1593年）1596年出版的《本草纲目》——这部巨著收录了包括1094种植物在内的1892种药用物质。白芷、黄芪、苍术、甘松等在传统中医中对消化、循环和健康有记录效果的植物被纳入董酒的大小曲中。`
    },

    science: {
      en: `The 130+ medicinal plants divided between Dongjiu's large Daqu and small qu create a unique and scientifically extraordinary fermentation system. The large Daqu (following Sauce Aroma protocols at high temperature) incorporates plants that introduce terpenes, sesquiterpenes, flavonoids, and alkaloids into the fermentation environment.<br><br>The small qu (following Rice Aroma protocols at lower temperature) incorporates a different set of plants targeting β-phenylethanol precursors and ester-producing pathways.<br><br>Key aromatic compounds identified in Herbal Aroma that are absent or trace in all other aroma types include: α-terpineol (pine, lilac notes); linalool (lavender, floral); eugenol (cloves, nutmeg); thymol (thyme, medicinal); borneol (camphor, mint-adjacent); and various sesquiterpenes contributing woody, resinous notes.<br><br>These terpene and terpenoid compounds are entirely absent from the aromatic profiles of all other baijiu styles.<br><br>The combined aromatic compound count in Herbal Aroma is substantial — comparable to Sauce Aroma — but the specific composition is entirely different: where Sauce Aroma's 1,000+ compounds are primarily esters, aldehydes and pyrazines, Herbal Aroma's complex is heavily weighted toward terpenoids, alkaloids and plant-derived secondary metabolites.<br><br>This makes it chemically the most unusual spirit produced at commercial scale in any national tradition.`,

      fr: `Les 130+ plantes médicinales créent un système de fermentation scientifiquement extraordinaire. Les composés aromatiques clés identifiés dans l'Arôme Herbacé absents de tous les autres styles incluent : α-terpinéol, linalol, eugénol, thymol, bornéol — terpènes et terpenoïdes entièrement absents des profils d'autres styles de baijiu. La composition est lourdement pondérée vers les terpenoïdes, alcaloïdes et métabolites secondaires d'origine végétale — chimiquement le spiritueux le plus inhabituel produit à l'échelle commerciale dans toute tradition nationale.`,

      zh: `董酒大小曲中的130多种中草药创造了一个独特且科学上非凡的发酵系统。大曲（遵循高温酱香工艺）中的植物将萜烯、倍半萜烯、类黄酮和生物碱引入发酵环境。

药香型中识别出的、在所有其他香型中缺失或痕量的关键芳香化合物包括：α-松油醇（松木、紫丁香香气）、芳樟醇（薰衣草、花香）、丁香酚（丁香、肉豆蔻）、百里酚（百里香、药物气味）、龙脑（樟脑、薄荷邻近）以及各种倍半萜烯。这些萜烯和萜烯类化合物在所有其他白酒风格的香气特征中完全缺失，使其成为任何国家传统中在商业规模上生产的化学上最不寻常的烈酒。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "dongjiu",
        name: "Dongjiu (董酒)",
        founded: "1929",
        region: "Zunyi, Guizhou",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/dongjiu.jpg' */
        image: "https://cathaydrinks.co.uk/cdn/shop/files/Dongjiu430ml.webp?v=1725545185",

        description: {
          en: `Dongjiu (董酒, "Dong Family Spirit") was established in 1929 in Zunyi, Guizhou, by Cheng Mingkun (程明坤) — a master distiller who had spent decades researching historical Chinese medicinal distillation methods and who was committed to codifying a production protocol that systematically incorporated Traditional Chinese Medicine plant pharmacopoeia into baijiu production.<br><br>The distillery is named after its founder's surname.<br><br>The 1929 founding date is significant in its context: Zunyi is also the site of the 1935 Zunyi Conference (遵义会议), the pivotal Communist Party meeting at which Mao Zedong consolidated his leadership — making the city a place of extraordinary historical weight in modern Chinese history.<br><br>Dongjiu's history is thus intertwined with both the pharmaceutical intellectual tradition and the revolutionary political tradition.<br><br>The formula for Dongjiu's medicinal plant incorporation — specifying which of the 130+ plants go into the large Daqu versus the small qu, in what proportions, and at which production stage — was classified as a State Secret (国家机密) in 1983 by the Chinese government, making it one of the few industrial production formulas formally protected at this level in China.<br><br>The classification was relaxed in 2013 but the full formula remains proprietary and undisclosed. What is publicly known is that the medicinal plant list references the Bencao Gangmu directly and incorporates plants used for digestive, circulatory and tonic effects in Traditional Chinese Medicine.<br><br>Dongjiu was recognised as one of China's "Eight Famous Baijiu" at the 1963 and 1979 national appraisal conferences, the only Herbal Aroma expression to achieve this recognition.`,

          fr: `Dongjiu (董酒) a été fondé en 1929 à Zunyi, Guizhou, par Cheng Mingkun, maître distillateur qui avait passé des décennies à rechercher les méthodes de distillation médicinale chinoises historiques. La formule d'incorporation des plantes médicinales a été classifiée comme Secret d'État (国家机密) en 1983 par le gouvernement chinois, assouplie en 2013 mais toujours non divulguée dans son intégralité. Reconnu parmi les 'Huit Baijiu Célèbres' lors des conférences nationales de 1963 et 1979.`,

          zh: `董酒由程明坤1929年创建于贵州遵义——一位花费数十年研究中国历史药用蒸馏方法、致力于规范将传统中医草药系统纳入白酒生产的规程的酿酒大师。

1983年，中国政府将董酒的中草药纳入配方——规定130多种植物中哪些进入大曲与小曲、以何种比例、在哪个生产阶段——列为国家机密，使其成为中国少数在这一级别受到正式保护的工业生产配方之一。2013年解密，但完整配方仍属专有且未公开。

董酒在1963年和1979年全国评酒会上被认定为中国"八大名酒"之一，是唯一获此认定的药香型产品。`
        },

        flagship: {
          name: "Dongjiu Red Label (董酒红标)",
          nameZh: "董酒红标",
          abv: "54%",
          price: "~30–65€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/dongjiu-red.jpg' */
          image: POOL_B.g,

          notes: {
            en: `The Red Label (红标) is Dongjiu's entry-level flagship and the most accessible expression of a style that presents significant challenges to first-time drinkers.<br><br>This is a spirit that divides opinion: those expecting a conventional baijiu profile will be profoundly surprised; those with a background in herbal spirits (absinthe, amaros, Chartreuse) will find it immediately comprehensible and fascinating.<br><br>The nose is unlike anything else in baijiu — and unlike most things in world spirits. The opening presents a complex medicinal herbal character: star anise and dried orange peel lead (both natural components of the medicinal plant formula), followed by a foundation of Sauce Aroma depth (fermented grain, mushroom, umami) that grounds the herbal character.<br><br>With extended air contact, the individual botanical components begin to separate out: dried ginger, white cardamom, a camphor-adjacent coolness (borneol), gentle pepper, angelica root, and a deep earthy base note.<br><br>At 54% ABV on the palate, the entry is warming and complex. The Sauce Aroma base provides structural backbone and umami richness through the mid-palate, while the medicinal plant compounds — terpenes and alkaloids — create a warming, slightly bitter, profoundly herbal mid-palate that is without parallel in any commercial spirit.<br><br>The finish extends 50–70 seconds and is deeply complex: medicinal herb fading slowly through spice to a clean mineral base. Challenging, extraordinary, and deeply memorable. Not for the faint-hearted, but one of the most genuinely unique spirit experiences in the world.`,

            fr: `Le Label Rouge est le fleuron d'entrée de gamme de Dongjiu et l'expression la plus accessible d'un style qui présente des défis significatifs aux nouveaux consommateurs. Le nez est unique — anis étoilé et écorce d'orange séchée en tête, suivis d'un Sauce Aroma de fond profond, puis gingembre séché, cardamome blanche, fraîcheur camphrée, angélique. À 54% vol en bouche, l'entrée est chaleureuse et complexe. La finale s'étend 50–70 secondes, profondément complexe. Un défi, mais l'une des expériences de spiritueux les plus uniques au monde.`,

            zh: `红标是董酒的入门旗舰产品，也是对首次饮用者极具挑战性的风格中最易亲近的表达。这是一款能引发两极分化的烈酒：期待传统白酒风格的人会深感意外；有草本烈酒（苦艾酒、阿马罗、夏翠丝）背景的人会立即理解并着迷。

鼻腔与任何其他白酒不同——与世界上大多数烈酒也不同。开场呈现复杂的草药特征：八角和陈皮领衔，随后是酱香底色的深度（发酵粮食、蘑菇、鲜味）。充分醒酒后，各植物成分开始分离：干姜、白豆蔻、近樟脑的凉感（龙脑）、温和胡椒、白芷和深层泥土底味。

余味延续50-70秒，极为复杂：草药味缓慢过渡到香料，最终消散于干净的矿物质底色。充满挑战，非凡出众，印象深刻难以忘怀。世界上最真正独特的烈酒体验之一。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     8. LAOBAIGAN AROMA — 老白干香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "laobaigan-aroma",
    name: { en: "Laobaigan Aroma", fr: "Arôme Laobaigan", zh: "老白干香型" },
    nameZh: "老白干香型",
    regions: ["Hebei"],
    color: "#708090",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/laobaigan-aroma.jpg' */
    image: POOL_B.h,

    description: {
      en: `Laobaigan Aroma (老白干香型, lǎo bái gān xiāng xíng) is the signature style of Hebei Province — and, like Phoenix Aroma, is essentially the expression of a single distillery from a single geographic community.<br><br>The name "laobaigan" (老白干) translates literally as "old white dry," and the three elements of this name constitute a precise description of the spirit's character: "old" (老) meaning aged through traditional methods; "white" (白) referring to the clarity of a pure, uncoloured spirit; "dry" (干) characterising its austere, non-sweet, mineral-forward palate.<br><br>Laobaigan Aroma is frequently grouped with Light Aroma as one of the "purist" baijiu styles — styles that prioritise transparency of grain character over accumulative aromatic complexity.<br><br>Like Light Aroma, it uses ceramic vessels rather than mud pits for fermentation. However, its aromatic chemistry is distinct from all other styles, including Light Aroma, in its uniquely balanced ratio of ethyl lactate to ethyl acetate — creating a profile that is simultaneously cleaner than Strong Aroma, more mineral than Light Aroma, and less sweet than Rice Aroma.<br><br>The style was recognised as one of China's "Eight Famous Baijiu" at both the 1963 and 1979 national appraisal conferences — the only style to receive this recognition at two consecutive evaluations under two different institutional contexts.<br><br>Despite this recognition, Laobaigan Aroma remains relatively unknown outside China and the dedicated baijiu community, making it one of the most underappreciated styles for international enthusiasts.`,

      fr: `L'Arôme Laobaigan (老白干香型) est le style signature du Hebei. Le nom 'laobaigan' (老白干) signifie littéralement 'vieux blanc sec' : 'vieux' pour les méthodes d'affinage traditionnelles, 'blanc' pour la clarté, 'sec' pour le palais austère et minéral. Souvent regroupé avec l'Arôme Léger comme style 'puriste', il utilise des cuves en céramique plutôt que des fosses de boue. Sa chimie aromatique est distincte de tous les autres styles dans son ratio unique et équilibré lactate d'éthyle / acétate d'éthyle. Reconnu parmi les 'Huit Baijiu Célèbres' lors des deux conférences nationales de 1963 et 1979.`,

      zh: `老白干香型是河北省的标志性风格。"老白干"直译为"老、白、干"，三个字精确描述了该酒特征："老"指传统方法陈酿；"白"指纯净、无色的透明烈酒；"干"描述其朴素、不甜、矿物质主导的口感。

老白干香型常与清香型并列为"纯粹主义"白酒风格——优先体现粮食特征的透明性而非积累性香气复杂性。与清香型一样，使用陶瓷容器而非泥窖发酵。然而，其香气化学特性在独特平衡的乳酸乙酯与乙酸乙酯比例上有别于包括清香型在内的所有其他风格。在1963年和1979年两届全国评酒会上均被认定为中国"八大名酒"——是唯一在两届连续评选中均获此认定的风格。`
    },

    science: {
      en: `The defining chemical characteristic of Laobaigan Aroma is the ratio of ethyl lactate (乳酸乙酯) to ethyl acetate (乙酸乙酯) — approximately 1:1, meaning these two esters are present in roughly equal proportions.<br><br>This is unique among all major baijiu styles: Light Aroma is ethyl acetate-dominant (ratio approximately 1:3 or more acetate-heavy); Strong Aroma is ethyl caproate-dominant with acetate secondary; Sauce Aroma is a complex mixture where lactate and acetate are roughly equal but accompanied by hundreds of additional compounds.<br><br>Only in Laobaigan Aroma is the binary ethyl lactate/ethyl acetate balance both the dominant aromatic characteristic and essentially unaccompanied by large concentrations of competing ester families.<br><br>The geological character of Hengshui well water is considered a primary terroir factor. Hengshui's groundwater is drawn from deep aquifer strata beneath the North China Plain, filtered through sandstone and clay layers over long residence times.<br><br>This produces water that is notably high in dissolved calcium and magnesium carbonate (slightly hard to medium-hard), with trace mineral concentrations of zinc and selenium that are documented as influencing yeast metabolism and ester production rates.<br><br>The characteristic "mineral dryness" of Laobaigan Aroma — the quality that distinguishes it from both Light Aroma freshness and Rice Aroma sweetness — is attributed primarily to this water chemistry.`,

      fr: `La caractéristique chimique définissante est le ratio acétate d'éthyle/lactate d'éthyle — approximativement 1:1, unique parmi tous les styles majeurs. La géologie de l'eau du puits de Hengshui est un facteur de terroir primaire : l'eau souterraine, tirée de strates aquifères profondes sous la plaine nord-chinoise et filtrée à travers des couches de grès et d'argile, est notablement riche en calcium et magnésium dissous, avec des traces de zinc et de sélénium qui influencent le métabolisme des levures.`,

      zh: `老白干香型的决定性化学特征是乙酸乙酯与乳酸乙酯的比例——约1:1，即这两种酯类以大致相等的比例存在。这在所有主要白酒风格中是独一无二的。

衡水井水的地质特性被视为主要的风土因素。衡水地下水从华北平原深层含水层抽取，经过砂岩和黏土层长期过滤。这产生钙镁碳酸盐溶解含量明显偏高的水（中等至中硬），以及锌和硒的痕量矿物质浓度，这些被记录为影响酵母代谢和酯类生成速率。老白干香型特征性的"矿物干燥感"——使其区别于清香型清新感和米香型甜感的品质——主要归因于这一水质特征。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "hengshui-laobaigan",
        name: "Hengshui Laobaigan (衡水老白干)",
        founded: "1946",
        region: "Hengshui, Hebei",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/hengshui-laobaigan.jpg' */
        image: POOL_B.h,

        description: {
          en: `Hengshui Laobaigan (衡水老白干, "Hengshui Old White Dry") is the sole major producer of Laobaigan Aroma style and the custodian of one of China's most historically significant regional spirit traditions.<br><br>Founded in 1946 in Hengshui City, Hebei Province, it draws its production water from ancient deep wells — some dated to the Ming Dynasty — that access the same aquifer system that gives the style its characteristic mineral profile.<br><br>The historical record of spirit production in Hengshui extends to the Han Dynasty. Historical chronicles (汉书 Han Shu and 史记 Records of the Grand Historian) document grain wine production in the region, and Tang Dynasty merchant records reference Hengshui spirits in commercial inventories.<br><br>The modern enterprise was established in 1946 from the consolidation of several Hengshui distilleries during the early PRC period.<br><br>The brand occupies a uniquely prestigious position in Chinese spirit history: it was selected as one of China's "Eight Famous Baijiu" at BOTH the 1963 and 1979 national appraisal conferences — the only style to receive this double recognition.<br><br>This twice-confirmed national quality status gives Hengshui Laobaigan institutional credibility that exceeds many better-known brands in terms of formal recognition.<br><br>Despite this, the brand has historically operated at a lower price point than its prestige would suggest, reflecting both regional economic factors and the general under-promotion of north China baijiu styles relative to Sichuan and Guizhou.`,

          fr: `Hengshui Laobaigan (衡水老白干) est le seul grand producteur du style Laobaigan. Fondé en 1946 à Hengshui, Hebei, il tire son eau de production d'anciens puits profonds — certains datant de la Dynastie Ming. Reconnu parmi les 'Huit Baijiu Célèbres' lors des deux conférences nationales de 1963 ET 1979 — le seul style à avoir reçu cette double reconnaissance. Malgré ce prestige formel, la marque a historiquement fonctionné à un niveau de prix inférieur à ce que son prestige suggèrerait.`,

          zh: `衡水老白干是老白干香型风格的唯一主要生产商。1946年建于河北省衡水市，从古代深井——部分可追溯至明代——取水生产，进入赋予该风格特征矿物特性的同一含水层。

该品牌在中国烈酒史上占据独特的高声望地位：在1963年和1979年两届全国评酒会上均被选为中国"八大名酒"——唯一获此双重认可的风格。这一两次确认的国家品质地位赋予衡水老白干的正式认可超过许多更知名的品牌。尽管如此，该品牌历史上的运营价位低于其声誉所暗示的水平，反映了区域经济因素和北方白酒风格相对于川黔的整体宣传不足。`
        },

        flagship: {
          name: "Hengshui Laobaigan 67° (衡水老白干67度)",
          nameZh: "衡水老白干67度",
          abv: "67%",
          price: "~25–45€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/hengshui-67.jpg' */
          image: POOL_B.h,

          notes: {
            en: `The 67° expression is Hengshui Laobaigan's most celebrated product and one of the highest-ABV commercially produced baijiu expressions available. At 67% alcohol by volume, it sits at the extreme upper range of commercial baijiu production — only a small number of specialist high-proof expressions exceed this.<br><br>Yet it is the 67° that the brand is known for, and it is genuinely unusual in how well the spirit integrates its high ABV.<br><br>The nose at room temperature is initially assertive — 67% is not concealed — but the character that emerges through the alcohol is remarkable in its cleanliness.<br><br>No harshness, no solvent quality: the mineral dryness of the Hengshui water comes through immediately as a clean, cool mineral note. Dried grain (sorghum-forward), white pepper, a distinctive dried herb quality (reminiscent of dried chrysanthemum and light angelica), and a subtle floral mineral character.<br><br>The nose does not present the tropical fruit richness of Strong Aroma or the medicinal complexity of Herbal Aroma — it is precise, mineral and grain-focused.<br><br>On the palate at 67%, the entry is genuinely hot — this is unavoidable at this ABV — but the heat is clean and focused rather than rough or harsh. The mineral character of the Hengshui water provides the backbone: a dry, slightly saline quality that cushions and structures the alcohol.<br><br>Dried grain, light white pepper, clean mineral. The finish extends 40–55 seconds, long for the style, with the mineral dryness persisting throughout and a pleasant dried-herb echo at the very end. A purist's spirit in the truest sense.`,

            fr: `L'expression 67° est le produit le plus célèbre de Hengshui Laobaigan et l'une des expressions de baijiu commercialement produites à l'ABV le plus élevé. À 67% vol, elle se situe à l'extrémité supérieure de la production commerciale de baijiu. Le nez est initialement assertif mais le caractère émergent est remarquable dans sa propreté : sécheresse minérale de l'eau de Hengshui, grain séché (sorgho dominant), poivre blanc, qualité herbacée séchée, floral minéral subtil. La finale s'étend 40–55 secondes avec la sécheresse minérale persistant tout au long.`,

            zh: `67度表达是衡水老白干最著名的产品，也是目前可获得的商业生产白酒中酒精度最高的产品之一。在67%酒精度，它处于商业白酒生产的极端上限——只有极少数专业高度产品超过这一度数。<br><br>在室温下，鼻腔初始是强势的——67%无法隐藏——但通过酒精展现出的特征在其干净程度上令人叹为观止。没有刺激，没有溶剂感：衡水水的矿物干燥感作为干净、清凉的矿物香气立即穿透而来。干粮食（高粱为主）、白胡椒、独特的干草本品质（让人想起菊花干和淡淡白芷），以及微妙的矿物花香。<br><br>口感在67%时入口确实烫热——这在这一酒精度下不可避免——但热感干净专注而非粗糙刺激。余味延续40-55秒，矿物干燥感贯穿始终，最后带有令人愉悦的干草本回响。真正意义上的纯粹主义者烈酒。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     9. COMPLEX FRUITY AROMA — 馥郁香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "fuyu-aroma",
    name: { en: "Complex Fruity Aroma", fr: "Arôme fruité complexe", zh: "馥郁香型" },
    nameZh: "馥郁香型",
    regions: ["Hunan"],
    color: "#C2185B",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/fuyu-aroma.jpg' */
    image: POOL_B.a,

    description: {
      en: `Complex Fruity Aroma (馥郁香型, fù yù xiāng xíng) is the newest formally recognised baijiu aroma classification, receiving official standardisation in 1998 (GB/T 22736).<br><br>It is unique to Hunan Province — specifically Jishou in the Xiangxi Tujia and Miao Autonomous Prefecture — and is produced almost exclusively by a single distillery (Jiugui Jiu).<br><br>The category's formal creation is an act of deliberate product positioning: Jiugui Jiu developed and promoted the fù yù classification as a vehicle for their unique production methodology rather than conforming to any existing classification.<br><br>The ambition of Complex Fruity Aroma is expressed in its Chinese name: 馥郁 (fù yù) means "rich, concentrated fragrance" — an aspiration toward maximum aromatic density rather than purity or specificity.<br><br>The category's claim is genuinely bold: to simultaneously embody the defining aromatic characteristics of three distinct aroma types (Strong, Sauce and Light Aroma) in a single product, with each style contributing in sequence rather than blending into homogeneity.<br><br>The Xiangxi Tujia and Miao Autonomous Prefecture of western Hunan is one of China's most ethnobotanically diverse regions, home to the Tujia and Miao ethnic minorities whose traditional distillation practices predate the standardised baijiu category system.<br><br>The region's mountainous terrain, abundant clean water sources, and unique ecosystem provide a production environment genuinely distinct from any other Chinese baijiu production zone. The specific sorghum cultivar used — Xiangxi native sorghum — has a different starch composition from Guizhou or Sichuan varieties, influencing the fermentation pathway.`,

      fr: `L'Arôme Fruité Complexe (馥郁香型) est la plus récente classification d'arôme de baijiu formellement reconnue, standardisée en 1998. Unique au Hunan — spécifiquement Jishou dans la Préfecture autonome Tujia et Miao de Xiangxi — produit quasi exclusivement par Jiugui Jiu. L'ambition du style est exprimée dans son nom : 馥郁 signifie 'fragrance riche et concentrée'. L'affirmation de la catégorie est véritablement audacieuse : incarner simultanément les caractéristiques aromatiques définissantes de trois types d'arômes distincts (Fort, Sauce et Léger) en un seul produit.`,

      zh: `馥郁香型是最新正式认定的白酒香型分类，1998年获得官方标准化（GB/T 22736）。为湖南省——尤其是湘西土家族苗族自治州吉首市——所特有，几乎专由一家酒厂（酒鬼酒）生产。

馥郁香型的雄心体现在其名称中：馥郁意为"浓郁馥香"——追求最大香气密度而非纯净性或特定性。该品类的主张真正大胆：在单一产品中同时体现三种不同香型（浓香、酱香和清香）的决定性香气特征，每种风格依次贡献而非混合成均一性。

湘西土家族苗族自治州是中国民族植物学多样性最丰富的地区之一，土家族和苗族的传统蒸馏实践早于标准化白酒品类体系。所用特定高粱品种——湘西本地高粱——淀粉组成与贵州或四川品种不同，影响发酵路径。`
    },

    science: {
      en: `The "triple harmony" (三香合一) production system is a three-stage sequential fermentation using three different qu types, each designed to produce different dominant aromatic compounds.<br><br>Stage 1 uses small-ball qu (小曲) at low temperature, producing β-phenylethanol, isoamyl alcohol, and light ester compounds characteristic of Rice Aroma/Light Aroma.<br><br>Stage 2 uses medium-temperature Daqu (55–62°C), producing ethyl caproate and related fruited ester compounds characteristic of Strong Aroma. Stage 3 uses high-temperature Daqu (60–65°C), producing pyrazines, ethyl lactate, and the savoury/umami compound families characteristic of Sauce Aroma.<br><br>Crucially, each stage is not a separate production batch blended afterward (as in Mixed Aroma production), but a sequential fermentation: the grain and qu from Stage 1 are carried forward into Stage 2 without separation, and similarly into Stage 3. This means each fermentation stage builds upon the aromatic foundation of the previous stage rather than starting fresh.<br><br>The result is not a blend of three separate spirits but a single fermented mass that has been sequentially exposed to three distinct microbial environments, creating compound interactions that blending alone cannot replicate. Over 300 aromatic compounds have been identified in Complex Fruity Aroma expressions.`,

      fr: `Le système de production 'triple harmonie' (三香合一) est une fermentation séquentielle en trois étapes utilisant trois types de qu différents. Étape 1 : petit qu à basse température (β-phénéthanol, caractère Arôme Léger). Étape 2 : Daqu température moyenne (caproate d'éthyle, caractère Arôme Fort). Étape 3 : Daqu haute température (pyrazines, lactate d'éthyle, caractère Arôme Sauce). Cruciallement, ce n'est pas un mélange de trois lots séparés, mais une fermentation séquentielle portée en avant sans séparation. Plus de 300 composés aromatiques identifiés.`,

      zh: `"三香合一"生产系统是使用三种不同曲的三阶段连续发酵。第一阶段：低温小曲，产生β-苯乙醇、异戊醇和米香/清香特征的轻酯化合物。第二阶段：中温大曲（55-62°C），产生己酸乙酯和相关浓香特征的果味酯化合物。第三阶段：高温大曲（60-65°C），产生吡嗪、乳酸乙酯和酱香特征的鲜味化合物族。

关键是，每个阶段不是事后勾调的独立批次（如兼香型生产），而是连续发酵：第一阶段的粮食和曲无需分离直接进入第二阶段，同样延续到第三阶段。结果不是三种独立烈酒的勾调，而是依次暴露于三种截然不同微生物环境中的单一发酵体，创造出单纯勾调无法复制的化合物交互作用。馥郁香型产品中已识别出超过300种芳香化合物。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "jiugui-jiu",
        name: "Jiugui Jiu (酒鬼酒)",
        founded: "1956",
        region: "Jishou, Xiangxi, Hunan",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/jiugui.jpg' */
        image: POOL_B.a,

        description: {
          en: `Jiugui Jiu (酒鬼酒, "Wine Ghost Spirit") is one of the most conceptually ambitious distilleries in Chinese baijiu — a brand that chose to invent a new aroma category rather than compete within an existing one, and that succeeded in having that invention formally recognised at the national standard level.<br><br>Founded in 1956 in Jishou, the brand name is a playful embrace of the concept of intoxication: 酒鬼 (jiǔ guǐ, "wine ghost" or "drunk ghost") is a Chinese colloquial term for a devoted drinker.<br><br>The brand's cultural identity is deeply rooted in the Xiangxi Tujia and Miao minority cultural tradition. The distinctive ceramic bottle design — an irregularly shaped, slightly misshapen linen-cloth-wrapped bottle — is a direct reference to the wine gourds (葫芦) used in traditional Tujia and Miao social ceremonies, deliberately evoking the artisanal, ethnic heritage of the production region rather than the polished luxury presentation of mainstream premium baijiu.<br><br>This design has become iconic and immediately recognisable.<br><br>In the 1990s and 2000s, Jiugui Jiu achieved premium status and a level of critical acclaim that positioned it alongside the top national brands — a remarkable achievement for a Hunan-based producer without the geographic prestige of Guizhou or Sichuan.<br><br>However, the brand suffered significant reputational damage in 2012 when media investigations reported plasticiser contamination in some products — an industry-wide issue in Chinese baijiu that affected multiple producers but had particularly severe reputational consequences for Jiugui.<br><br>The brand has since rebuilt substantially through production reforms and renewed critical quality recognition.`,

          fr: `Jiugui Jiu (酒鬼酒, 'Esprit du Vin') est l'une des distilleries conceptuellement les plus ambitieuses du baijiu chinois — une marque qui a choisi d'inventer une nouvelle catégorie d'arôme plutôt que de concurrencer dans une existante, et qui a réussi à faire reconnaître cette invention au niveau des normes nationales. Fondée en 1956 à Jishou, la bouteille en céramique de forme irrégulière enveloppée de lin est une référence directe aux gourdes à vin (葫芦) utilisées dans les cérémonies sociales Tujia et Miao traditionnelles.`,

          zh: `酒鬼酒是中国白酒中概念上最雄心勃勃的酒厂之一——一个选择发明新的香型分类而非在现有分类中竞争的品牌，并成功让这一发明在国家标准层面获得正式认可。1956年建于吉首，品牌名称是对沉醉概念的俏皮拥抱。

品牌的文化认同深深植根于湘西土家族和苗族少数民族文化传统。独特的陶瓷瓶设计——形状不规则、略显变形的粗布包裹瓶子——直接参照土家族和苗族传统社会仪式中使用的酒葫芦，刻意唤起产区的手工艺、民族遗产，而非主流高端白酒精致的奢华呈现。这一设计已成标志性形象，辨识度极高。`
        },

        flagship: {
          name: "Jiugui Jiu Red (酒鬼酒红)",
          nameZh: "酒鬼酒（红）",
          abv: "52%",
          price: "~80–140€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/jiugui-red.jpg' */
          image: POOL_B.a,

          notes: {
            en: `The Red expression is Jiugui's core premium tier — the standard-bearer for the Complex Fruity Aroma style. The linen-wrapped irregular ceramic bottle is one of the most distinctive packaging objects in premium baijiu, and the liquid inside justifies the presentation with genuine ambition.<br><br>In the glass, the spirit presents with notable richness: deep golden-amber with good viscosity. The nose is the most deliberately layered experience in any baijiu style — a temporal aromatics exercise that rewards patience.<br><br>The opening act (0–3 minutes) presents the Strong Aroma heritage: ripe tropical fruit (mango, lychee, pineapple), caramelised sugar, fresh stone fruit. This is rich, accessible, and clearly fruit-driven.<br><br>The second act (3–10 minutes) gradually introduces the Sauce Aroma dimension: umami depth, dried mushroom, a light miso quality, and the beginning of complex mineral character.<br><br>The fruit character doesn't disappear but recedes as the savoury depth builds. With extended air contact (10+ minutes), the Light Aroma clean grain character becomes perceptible as a quiet foundation that provides structural clarity beneath the fruit and savoury complexity.<br><br>On the palate, the sequential presentation resolves more quickly than on the nose: the entry is fruity and rich (Strong Aroma register), the mid-palate deepens into savoury complexity (Sauce Aroma register), and the finish presents clean grain and light mineral (Light Aroma register).<br><br>This aromatic architecture — changing over time in the glass — makes it one of the most intellectually engaging spirits in any category. Finish extends 45–65 seconds.`,

            fr: `L'expression Rouge est le niveau premium standard de Jiugui. Le nez est l'expérience la plus délibérément stratifiée de tout style de baijiu — un exercice d'aromatique temporel qui récompense la patience. Premier acte (0–3 min) : héritage Fort, fruits tropicaux mûrs. Deuxième acte (3–10 min) : dimension Sauce, profondeur umami. Contact prolongé (10+ min) : caractère propre de grain Arôme Léger. En bouche, la finale s'étend 45–65 secondes. Une des expériences les plus intellectuellement engageantes.`,

            zh: `红标是酒鬼酒的核心高端系列——馥郁香型风格的旗手。麻布包裹的不规则陶瓷瓶是高端白酒中最独特的包装物件之一。

在杯中，烈酒以明显的丰富感呈现：深金琥珀色，粘度良好。鼻腔是任何白酒风格中最刻意分层的体验——一种奖励耐心的时间香气演练。第一幕（0-3分钟）：浓香遗产，熟透热带水果（芒果、荔枝、菠萝）、焦糖、新鲜核果。第二幕（3-10分钟）：酱香维度逐渐涌现，鲜味深度、干香菇、淡淡味噌感、复杂矿物特征的开端。充分醒酒后（10分钟以上），清香干净粮食特征作为安静底色可被感知。

余味延续45-65秒。这种在杯中随时间变化的香气结构——使其成为任何品类中最具智识吸引力的烈酒之一。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     10. SPECIAL AROMA (TE) — 特香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "special-aroma",
    name: { en: "Special Aroma (Te)", fr: "Arôme spécial (Te)", zh: "特香型" },
    nameZh: "特香型",
    regions: ["Jiangxi"],
    color: "#8B0000",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/special-aroma.jpg' */
    image: POOL_B.b,

    description: {
      en: `Special Aroma (特香型, tè xiāng xíng) is the distinctive baijiu of Jiangxi Province and one of the most technically unusual styles in the category — a spirit that combines production features from three different aroma-type traditions into a coherent and distinctive regional expression.<br><br>Formally codified in 1988 under national standard GB/T 20823, it is produced in Zhangshu City, Jiangxi, a location historically renowned in China as the "Medicine Capital" (药都) for its role as the country's largest traditional Chinese medicine trading hub for over a thousand years.<br><br>What makes Special Aroma structurally unique is its combination of three unusual production features that distinguish it from all other styles. First: the primary grain is long-grain Indica rice (籼米), supplemented by sorghum and wheat — unusual because almost all other baijiu styles use sorghum as the primary or sole grain, and because Indica rice fermentation produces a notably different aromatic base than sorghum.<br><br>Second: fermentation occurs in stone containers (石窖) rather than mud pits or ceramic vessels — stone being the least common fermentation vessel type in all of Chinese baijiu, contributing specific mineral ions to the fermenting mash. Third: the Daqu uses a combination of rice, sorghum, and wheat in a ratio unique to Jiangxi.<br><br>The proximity of Zhangshu's production to the traditional Chinese medicine wholesale markets has historically influenced the production philosophy: medicinal plant residue from the nearby markets has traditionally been incorporated into production water and Daqu preparation, contributing trace botanical compounds to the fermentation environment in a manner less systematic but directionally similar to Herbal Aroma production.`,

      fr: `L'Arôme Spécial (特香型) est le baijiu distinctif du Jiangxi, formellement codifié en 1988. Produit à Zhangshu, historiquement renommé comme 'Capitale de la Médecine' (药都) de Chine. Ce qui le rend structurellement unique : grain primaire de riz Indica à grain long (inhabituel parmi les styles de baijiu), fermentation dans des contenants en pierre (石窖) — le type le moins courant —, et un Daqu utilisant riz, sorgho et blé dans une proportion unique au Jiangxi.`,

      zh: `特香型是江西省独特的白酒，也是品类中技术上最不寻常的风格之一。1988年在国家标准GB/T 20823下正式规范，产于江西省樟树市——历史上以中国最大传统中药材交易中心闻名的"药都"，这一声誉已持续千年以上。

特香型的结构独特性在于三种不寻常生产特征的组合：主粮为长粒籼米，辅以高粱和小麦——几乎所有其他白酒风格都以高粱为主粮，籼米发酵产生与高粱截然不同的香气基础；在石窖（而非泥窖或陶瓷容器）中发酵——石质是所有中国白酒中最不常见的发酵容器类型；大曲使用江西独有比例的大米、高粱和小麦组合。`
    },

    science: {
      en: `Aromatic compound analysis of Special Aroma shows a profile that overlaps with all three major aroma types simultaneously — specifically: ethyl caproate at concentrations comparable to a light Strong Aroma expression; ethyl acetate at concentrations comparable to Light Aroma; and β-phenylethanol at concentrations comparable to Rice Aroma.<br><br>This tri-style overlap is unique among all classified baijiu styles and reflects the mixed-grain fermentation approach (sorghum → ethyl caproate; rice → β-phenylethanol; wheat + both → ethyl acetate).<br><br>The stone fermentation vessels contribute specific mineral ions — particularly silicate and carbonate ions from the local Jiangxi granite and limestone geology — that are absent from both clay-pit and ceramic-vessel fermentation.<br><br>Silicate ions specifically are documented as enhancing the activity of certain ester-producing enzyme systems, potentially explaining the somewhat higher combined ester concentration observed in Special Aroma relative to pure Light Aroma styles of comparable ABV.`,

      fr: `L'analyse des composés aromatiques montre un profil qui chevauche les trois types d'arômes majeurs simultanément : caproate d'éthyle comparable à un léger Arôme Fort ; acétate d'éthyle comparable à l'Arôme Léger ; β-phénéthanol comparable à l'Arôme de Riz. Les contenants en pierre apportent des ions silicates et carbonates spécifiques de la géologie granite-calcaire du Jiangxi, documentés comme améliorant l'activité de certains systèmes enzymatiques producteurs d'esters.`,

      zh: `特香型的芳香化合物分析显示同时与三种主要香型重叠的特征：己酸乙酯浓度可与轻度浓香型相比；乙酸乙酯浓度可与清香型相比；β-苯乙醇浓度可与米香型相比。这种三风格重叠在所有分类白酒风格中是独一无二的，反映了多粮发酵工艺（高粱→己酸乙酯；大米→β-苯乙醇；小麦+两者→乙酸乙酯）。

石质发酵容器贡献特定矿物离子——特别是来自江西本地花岗岩和石灰岩地质的硅酸盐和碳酸盐离子——这在泥窖和陶瓷容器发酵中都不存在。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    producers: [
      {
        slug: "sitejiu",
        name: "Sige Jiu (四特酒)",
        founded: "1952",
        region: "Zhangshu, Jiangxi",

        /* ── IMAGE PRODUCTEUR ──
           Remplace par : '/images/producers/sitejiu.jpg' */
        image: POOL_B.b,

        description: {
          en: `Sige Jiu (四特酒, "Four Special Spirit") is the defining and essentially sole major producer of Special Aroma baijiu, founded in 1952 in Zhangshu, Jiangxi. The name "四特" (Sige, "Four Specials") references the spirit's four traditional quality claims — clarity (清, qīng), fragrance (香, xiāng), sweetness (醇, chún), and purity (纯, chún) — a four-character quality claim that predates the formal 1988 standardisation.<br><br>The Zhangshu production environment is historically important: Zhangshu has been a centre of Chinese medical herb trading for over 1,200 years and remains one of the four largest traditional Chinese medicine wholesale markets in China.<br><br>The production facility draws water from the Zhang River (樟树江), which flows through the same sandstone and limestone geology that supports the region's distinctive soil chemistry. The proximity to the medicine trading infrastructure historically provided access to high-quality medicinal plant waste that supplemented the production process.<br><br>Sige Jiu's production is notable for its complete adherence to the Jiangxi terroir: local rice and local sorghum, Jiangxi-specific wheat for Daqu, Zhang River water, and stone fermentation vessels sourced from local Jiangxi quarries.<br><br>This commitment to geographic specificity is as complete as any regional Chinese spirit style, making Sige Jiu the authentic voice of Jiangxi's baijiu tradition.`,

          fr: `Sige Jiu (四特酒, 'Quatre Spéciaux') est le producteur définissant du style Arôme Spécial, fondé en 1952 à Zhangshu. Le nom référence les quatre affirmations de qualité traditionnelles du spiritueux — clarté, fragrance, douceur, pureté. Zhangshu est un centre de commerce d'herbes médicinales chinoises depuis plus de 1 200 ans. L'engagement de Sige Jiu envers le terroir du Jiangxi — riz local, sorgho local, eau de la rivière Zhang, récipients de fermentation en pierre locale — est aussi complet que tout style de spiritueux régional chinois.`,

          zh: `四特酒是特香型白酒的决定性也是实质上唯一的主要生产商，1952年建于江西省樟树市。"四特"之名指该酒传统的四大品质主张——清、香、醇、纯——这一四字品质主张早于1988年的正式标准化。

樟树的生产环境历史重要：樟树作为中国药材交易中心已逾1200年，至今仍是中国四大传统中药材批发市场之一。四特酒对江西风土的坚守：本地大米和高粱、江西特色小麦大曲、章江水和本地江西石窖——与任何中国区域烈酒风格一样完整，使四特酒成为江西白酒传统的真实声音。`
        },

        flagship: {
          name: "Sige Jiu Blue Classic (四特酒蓝色经典)",
          nameZh: "四特酒蓝色经典",
          abv: "52%",
          price: "~25–50€",

          /* ── IMAGE FLAGSHIP ──
             Remplace par : '/images/flagships/sitejiu-blue.jpg' */
          image: POOL_B.b,

          notes: {
            en: `The Blue Classic (蓝色经典) is Sige Jiu's accessible premium expression and the clearest demonstration of what the Special Aroma style achieves as a distinct regional identity.<br><br>The nose presents the tri-style aromatic overlap in a clear and balanced form. The opening note is a clean, light fruit character — closer to Light Aroma freshness than Strong Aroma richness — with the long-grain Indica rice contribution providing a distinctive sweet-grain note not found in sorghum-based styles.<br><br>A gentle floral quality (characteristic β-phenylethanol from the rice component) and light stone fruit (from the sorghum component's ethyl caproate) develop over 5 minutes. The stone vessel fermentation contributes a faint mineral dryness that underpins the entire profile.<br><br>The palate is medium-bodied and notably clean — the stone vessel fermentation's exclusion of pit-clay microbiome influence produces a clarity comparable to Light Aroma, but with more aromatic complexity from the multi-grain base.<br><br>The rice sweetness is the most prominent character through the mid-palate: clean, slightly sweet, with light floral and gentle stone-fruit echoes. The finish extends 25–40 seconds, clean and moderately complex, with a pleasant mineral echo from the stone vessel character. A distinctive spirit that rewards exploration.`,

            fr: `Le Blue Classic est l'expression premium accessible de Sige Jiu. Le nez présente l'overlap aromatique tri-style de manière claire et équilibrée. L'ouverture est un caractère de fruit propre et léger — plus proche de la fraîcheur Arôme Léger que de la richesse Fort — avec la contribution de riz Indica donnant une note céréale-sucrée distinctive. La fermentation en pierre contribue une légère sécheresse minérale. La finale s'étend 25–40 secondes, propre et modérément complexe.`,

            zh: `蓝色经典是四特酒的亲民高端产品，也是特香型风格作为独特区域身份所能实现的最清晰展示。

鼻腔以清晰均衡的方式呈现三风格香气重叠。开场香气是干净、轻淡的果香——更接近清香型的清新而非浓香型的丰富——长粒籼米的贡献提供高粱基风格中没有的独特甜粮食香。5分钟内发展出轻柔的花香品质（来自米香成分的β-苯乙醇特征）和轻淡核果香（来自高粱成分的己酸乙酯）。石窖发酵贡献一丝矿物干燥感，贯穿整个风格作为底色。余味延续25-40秒，干净，适度复杂，带有来自石窖特征的宜人矿物回响。`
          }
        }
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
     11. SESAME AROMA — 芝麻香型
     ────────────────────────────────────────────────────────── */
  {
    slug: "sesame-aroma",
    name: { en: "Sesame Aroma", fr: "Arôme de sésame", zh: "芝麻香型" },
    nameZh: "芝麻香型",
    regions: ["Shandong"],
    color: "#B8882A",

    /* ── IMAGE DE L'ARÔME ──
       Remplace par : '/images/aroma/sesame-aroma.jpg' */
    image: POOL_B.c,

    description: {
      en: `Sesame Aroma (芝麻香型, zhī ma xiāng xíng) is the characteristic baijiu style of Shandong Province and one of the most scientifically interesting aroma categories — a style whose defining aromatic compound (pyrazines) is shared with Sauce Aroma but expressed in a fundamentally different ratio and context, producing an entirely different sensory experience.<br><br>The style was formally isolated and scientifically characterised in the 1950s under state-sponsored baijiu research programs that systematically analysed regional production traditions across China.<br><br>The name is literal: Sesame Aroma baijiu genuinely smells and tastes of toasted sesame seeds, warm roasted grain, and gentle nuttiness. This is not a marketing metaphor or approximation — the pyrazine compounds responsible for this character are the same compounds found in roasted sesame oil (and in roasted coffee, chocolate and many Maillard-browned foods), and they are present in Sesame Aroma baijiu at measurably higher concentrations than in any other spirit style globally.<br><br>Shandong's position as the spiritual home of Confucianism and one of China's oldest continuous civilisations gives Sesame Aroma a cultural context that extends beyond spirit production.<br><br>Jingzhi Town (景芝镇) in Zhucheng County, where the benchmark Jingzhi Baijiu is produced, has been a production centre for centuries — local chronicles document spirit production in the town as far back as the Yuan Dynasty (1271–1368), and the Jingzhi spring water (景芝泉) that supplies the distillery was referenced in Ming Dynasty local gazetteers (地方志) as a notable local resource.`,

      fr: `L'Arôme de Sésame (芝麻香型) est le style de baijiu caractéristique du Shandong, formellement caractérisé dans les années 1950. Le nom est littéral : l'Arôme de Sésame sent et goûte véritablement les graines de sésame grillées, la céréale torréfiée, et la noisette douce. Les composés pyrazines responsables sont les mêmes que dans l'huile de sésame grillée, le café et le chocolat. Jingzhi Town dans le comté de Zhucheng, où est produit le benchmark Jingzhi Baijiu, a une production documentée remontant à la Dynastie Yuan (1271–1368).`,

      zh: `芝麻香型是山东省的特色白酒风格，也是最具科学趣味的香型品类之一。其决定性芳香化合物（吡嗪类）与酱香型共享，但以根本不同的比例和背景表达，产生完全不同的感官体验。20世纪50年代在国家资助的白酒研究项目中被正式分离和科学表征。

名称是字面意义的：芝麻香型白酒真实地散发出烘烤芝麻籽、温暖烘烤谷物和轻柔坚果的气息和味道。这不是营销比喻或近似——负责这一特征的吡嗪化合物与烘烤芝麻油（以及烘烤咖啡、巧克力和许多美拉德褐变食品）中的化合物相同，在芝麻香型白酒中的可测量浓度高于全球任何其他烈酒风格。`
    },

    science: {
      en: `The characteristic sesame note in Sesame Aroma baijiu derives from two specific pyrazine isomers: 2,6-dimethylpyrazine (2,6-二甲基吡嗪) and 2,3,5-trimethylpyrazine (2,3,5-三甲基吡嗪).<br><br>These are the same pyrazine isomers found in Sauce Aroma baijiu, roasted sesame oil, and roasted peanuts — but in Sesame Aroma baijiu, they are present at approximately 3–5 times higher concentrations than in Sauce Aroma, creating the dominant rather than supporting role for the nutty/roasted character.<br><br>The elevated pyrazine concentration is achieved through a specific combination of production parameters: high-temperature Daqu (60–65°C) drives Maillard reaction-derived pyrazine formation during Daqu preparation; simultaneous earthen pit fermentation (shared with Strong Aroma, unlike the stone or ceramic vessels of other styles) allows the pit microbiome to produce precursor compounds that interact with the high-temperature Daqu compounds; and a solid-state fermentation stage in ceramic containers (similar to Light Aroma) provides a complementary microbial environment that produces ester compounds without competing against the pyrazine character.<br><br>This dual-environment fermentation system — earthen pit AND ceramic vessel — is unique to Sesame Aroma among all classified aroma types and is the technical mechanism by which the style achieves its distinctive hybrid profile.`,

      fr: `La note de sésame provient de deux isomères de pyrazine spécifiques : 2,6-diméthylpyrazine et 2,3,5-triméthylpyrazine — présents à des concentrations 3 à 5 fois plus élevées que dans l'Arôme Sauce. La concentration élevée est obtenue par une combinaison de Daqu haute température (réactions de Maillard), fermentation en fosse de boue (partagée avec Arôme Fort) ET fermentation en contenants en céramique (partagée avec Arôme Léger) — ce double environnement de fermentation est unique à l'Arôme de Sésame.`,

      zh: `芝麻香型的芝麻特征来自两种特定的吡嗪异构体：2,6-二甲基吡嗪和2,3,5-三甲基吡嗪。在芝麻香型白酒中，这些化合物的浓度约是酱香型的3-5倍，使坚果/烘烤特征发挥主导而非辅助作用。<br><br>高浓度吡嗪通过特定生产参数组合实现：高温大曲（60-65°C）驱动大曲制备中美拉德反应衍生的吡嗪形成；同时进行土窖发酵（与浓香型共享，不同于其他风格的石窖或陶瓷容器），允许窖泥微生物产生与高温大曲化合物相互作用的前体物质；以及陶瓷容器中的固态发酵阶段（类似清香型），提供互补的微生物环境。<br><br>这种双环境发酵系统——土窖和陶瓷容器——在所有分类香型中对芝麻香型来说是独一无二的，是该风格实现其独特混合特征的技术机制。`
    },

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: POOL_B.c,
  },
];

/* ─── WINE REGIONS ─── */
export const REGIONS = [
  { slug:"shandong", name:"Shandong (Yantai)", nameZh:"山东（烟台）", desc:{ en:"The birthplace of China's modern wine industry. Home to Changyu — founded 1892 — and China's longest continuous commercial wine tradition.", fr:"Le berceau de l'industrie viticole moderne chinoise. Foyer de Changyu — fondée en 1892.", zh:"中国现代葡萄酒工业的发源地。张裕（1892年创立）的家乡，中国最悠久的连续商业葡萄酒传统。" }, brands:["Changyu","Dynasty Wine","Great Wall Wine"], image: POOL_W.b },
];

/* ─── WINE BRANDS ─── */
export const WINE_BRANDS = [
  { slug:"helan-qingxue", name:"Helan Qingxue", region:"ningxia", image:POOL_W.a, desc:{ en:"Founded in 2005. The estate's Jia Bei Lan Cabernet Sauvignon won Decanter Magazine's International Trophy in 2011 — the first Chinese wine to achieve this recognition. The estate practices sustainable viticulture at 1,100m altitude.", fr:"Fondée en 2005. Le Cabernet Sauvignon Jia Bei Lan a remporté le Trophée International de Decanter en 2011 — premier vin chinois à obtenir cette distinction.", zh:"创建于2005年。酒庄的加贝兰赤霞珠于2011年荣获醇鉴杂志国际大奖——首款获此殊荣的中国葡萄酒。酒庄在海拔1100米处实践可持续葡萄种植。" } },
  { slug:"silver-heights", name:"Silver Heights", region:"ningxia", image:POOL_W.b, desc:{ en:"A family-owned estate founded by Emma Gao, who trained in Bordeaux. First vintage 2007. The Summit, their flagship wine, is one of China's most critically acclaimed expressions.", fr:"Domaine familial fondé par Emma Gao, formée à Bordeaux. Première récolte 2007. The Summit est l'une des expressions les plus critiquées de Chine.", zh:"由在波尔多接受培训的高源创立的家族酒庄。首个年份为2007年。旗舰酒款'山峰'是中国最受好评的酒款之一。" } },
  { slug:"ao-yun", name:"Ao Yun", region:"yunnan", image:POOL_W.c, desc:{ en:"LVMH's high-altitude project, launched in 2013. Vineyards at 2,600m in Adong, Yunnan — among the highest Cabernet Sauvignon vineyards in the world.", fr:"Le projet de haute altitude de LVMH, lancé en 2013. Vignobles à 2 600 m à Adong, Yunnan.", zh:"LVMH于2013年启动的高海拔项目。葡萄园位于云南阿东海拔2600米处——世界上海拔最高的赤霞珠葡萄园之一。" } },
  { slug:"changyu", name:"Changyu Pioneer Wine", region:"shandong", image:POOL_W.d, desc:{ en:"Founded in 1892 — China's oldest wine company, with over 130 years of continuous operation. Their underground wine cellar in Yantai is a cultural heritage site.", fr:"Fondée en 1892 — la plus ancienne société vinicole de Chine. Plus de 130 ans d'opération continue.", zh:"创建于1892年——中国最古老的葡萄酒公司。130多年持续运营。其位于烟台的地下酒窖是文化遗产。" } },
];