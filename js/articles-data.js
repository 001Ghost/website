/* ============================================================
   ARTICLES-DATA.JS — Blog articles for Exhibition & Events pages
   ============================================================
   Each article has:
   - slug: unique URL identifier
   - category: 'exhibition' | 'event' | 'culture' | 'education'
   - date: display date
   - image: URL or local path
   - title: { en, fr, zh }
   - excerpt: { en, fr, zh }
   - body: { en, fr, zh }  (HTML allowed)
   ============================================================ */

export const ARTICLES = [

  /* ── EXHIBITION ARTICLES ── */
  {
    slug: "paris-baijiu-2024",
    category: "exhibition",
    date: "October 2024",
    dateISO: "2024-10-15",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: true,
    title: {
      en: "Paris Wine & Baijiu 2024: A New Chapter for Chinese Spirits in Europe",
      fr: "Paris Wine & Baijiu 2024 : Un Nouveau Chapitre pour les Spiritueux Chinois en Europe",
      zh: "巴黎葡萄酒与白酒2024：中国烈酒在欧洲的新篇章"
    },
    excerpt: {
      en: "Over 40 Chinese producers gathered in Paris for a landmark four-day exhibition that introduced European sommeliers and collectors to the full breadth of China's baijiu and wine culture.",
      fr: "Plus de 40 producteurs chinois se sont réunis à Paris pour une exposition historique de quatre jours qui a présenté aux sommeliers et collectionneurs européens toute l'étendue de la culture du baijiu et du vin chinois.",
      zh: "超过40家中国生产商汇聚巴黎，参加为期四天的里程碑式展览，向欧洲侍酒师和收藏家全面展示中国白酒与葡萄酒文化的深度。"
    },
    body: {
      en: `<p>The Paris Wine & Baijiu 2024 exhibition, held at a prestigious venue in the heart of the French capital, marked a watershed moment for the international perception of Chinese distilled spirits. Over four days in October 2024, more than 40 producers from China's leading Baijiu and wine regions filled the exhibition halls with the aromas of soy, stone fruit, floral notes and roasted grain that define the world's most consumed spirit category.</p>
<p>The event attracted over 2,000 visitors — sommeliers, wine importers, journalists, and private collectors — many of whom encountered Baijiu in its full diversity for the first time. The format combined a public tasting salon, professional buyer sessions by appointment, and an evening conference program featuring leading voices in Chinese spirit education.</p>
<p>The centerpiece of the educational programming was the Aroma Type Discovery Lab: a guided sensory experience allowing visitors to taste across all 11 official Baijiu aroma types side by side. The sessions, led by certified educators, ran at full capacity throughout the event, reflecting growing European curiosity about what many in the industry are calling "the next great spirits frontier."</p>`,
      fr: `<p>L'exposition Paris Wine & Baijiu 2024, tenue dans un lieu prestigieux au cœur de la capitale française, a marqué un tournant dans la perception internationale des spiritueux distillés chinois. Durant quatre jours en octobre 2024, plus de 40 producteurs issus des principales régions de Baijiu et de vin de Chine ont rempli les halls d'exposition des arômes de sauce soja, de fruits à noyau, de notes florales et de grain torréfié qui définissent la catégorie de spiritueux la plus consommée au monde.</p>
<p>L'événement a attiré plus de 2 000 visiteurs — sommeliers, importateurs de vins, journalistes et collectionneurs privés — dont beaucoup ont découvert le Baijiu dans toute sa diversité pour la première fois. Le format combinait un salon de dégustation public, des sessions acheteurs professionnels sur rendez-vous, et un programme de conférences du soir avec les principales voix de l'éducation aux spiritueux chinois.</p>`,
      zh: `<p>2024年巴黎葡萄酒与白酒展览在法国首都中心的一处知名场所举行，标志着国际社会对中国蒸馏烈酒认知的重要转折点。在2024年10月的四天内，来自中国主要白酒和葡萄酒产区的40多家生产商，用酱香、核果香、花香和烘烤谷物的芬芳填满了展览大厅，而这些正是世界上消费量最大的烈酒品类的特征。</p>
<p>活动吸引了逾2000名访客——侍酒师、葡萄酒进口商、记者和私人收藏家——其中许多人首次全面接触了白酒的多样性。活动形式包括向公众开放的品鉴沙龙、预约制专业买家会议，以及由中国烈酒教育领域领军人物参与的晚间研讨会项目。</p>`
    }
  },

  {
    slug: "aroma-lab-discovery",
    category: "exhibition",
    date: "October 2024",
    dateISO: "2024-10-16",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: false,
    title: {
      en: "The Aroma Type Discovery Lab: Teaching 11 Styles in One Session",
      fr: "Le Laboratoire de Découverte des Arômes : Enseigner 11 Styles en Une Session",
      zh: "香型探索实验室：一次品鉴11种香型"
    },
    excerpt: {
      en: "The most popular feature of the 2024 exhibition was a guided sensory journey through all 11 official Baijiu aroma types — from the crystalline purity of Light Aroma to the medicinal complexity of Herbal Aroma.",
      fr: "La caractéristique la plus populaire de l'exposition 2024 était un voyage sensoriel guidé à travers les 11 types d'arômes officiels du Baijiu.",
      zh: "2024年展览最受欢迎的环节是一场引导性感官体验之旅，带领参与者穿越全部11种官方白酒香型。"
    },
    body: {
      en: `<p>Running continuously from 10am to 8pm across all four exhibition days, the Aroma Type Discovery Lab became the single most discussed element of Paris Wine & Baijiu 2024. Led by trained educators, each 45-minute session guided groups of 20 through a structured tasting of all 11 officially recognised Baijiu aroma types.</p>
<p>The sequence was deliberate: Light Aroma first (to establish a baseline of clarity), followed by Strong Aroma (to introduce ethyl caproate's fruit character), then Sauce Aroma (for the full complexity of the most prestigious style), and progressively through Rice, Phoenix, Mixed, Sesame, Herbal, Laobaigan, Complex Fruity, and Special Aroma styles.</p>`,
      fr: `<p>Fonctionnant continuellement de 10h à 20h pendant les quatre jours d'exposition, le Laboratoire de Découverte des Arômes est devenu l'élément le plus discuté de Paris Wine & Baijiu 2024. Conduit par des éducateurs formés, chaque session de 45 minutes guidait des groupes de 20 personnes à travers une dégustation structurée de l'ensemble des 11 types d'arômes officiellement reconnus du Baijiu.</p>`,
      zh: `<p>在展览全部四天的上午10点至晚上8点持续开放，香型探索实验室成为2024年巴黎葡萄酒与白酒展览中讨论最为热烈的环节。由受过专业培训的教育者主导，每次45分钟的课程引导20人小组系统品鉴全部11种官方认定的白酒香型。</p>`
    }
  },

  {
    slug: "exposition-2025-preview",
    category: "exhibition",
    date: "January 2025",
    dateISO: "2025-01-10",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: false,
    title: {
      en: "2025 Edition: Bigger Program, First European Baijiu Cocktail Competition",
      fr: "Édition 2025 : Programme Élargi, Première Compétition Européenne de Cocktails Baijiu",
      zh: "2025年版：扩大的项目，首届欧洲白酒鸡尾酒大赛"
    },
    excerpt: {
      en: "The 2025 Paris Wine & Baijiu exhibition will feature an expanded program including a dedicated Chinese wine masterclass track and the first-ever European Baijiu cocktail competition.",
      fr: "L'exposition Paris Wine & Baijiu 2025 proposera un programme élargi comprenant une série de masterclasses dédiées au vin chinois et la toute première compétition européenne de cocktails au Baijiu.",
      zh: "2025年巴黎葡萄酒与白酒展览将推出扩大版项目，包括专项中国葡萄酒大师课系列及首届欧洲白酒鸡尾酒大赛。"
    },
    body: {
      en: `<p>Planning for the 2025 edition of Paris Wine & Baijiu is underway, with an expanded scope that reflects the growing appetite for Chinese spirits education across Europe. The centerpiece addition is the First European Baijiu Cocktail Competition — an invitation to bartenders and mixologists across the continent to engage creatively with Baijiu's aromatic diversity.</p>
<p>The 2025 program will also feature a dedicated Chinese Wine Masterclass track, building on the growing international recognition of wines from Ningxia, Yunnan, Shandong, and other Chinese wine regions. Confirmed participants include estates from the Helan Mountain East Foothills appellation in Ningxia and the high-altitude Shangri-La wine region in Yunnan.</p>`,
      fr: `<p>La planification de l'édition 2025 de Paris Wine & Baijiu est en cours, avec une portée élargie qui reflète l'appétit croissant pour l'éducation aux spiritueux chinois à travers l'Europe. L'ajout central est la Première Compétition Européenne de Cocktails Baijiu — une invitation aux barmen et mixologistes du continent à s'engager créativement avec la diversité aromatique du Baijiu.</p>`,
      zh: `<p>2025年巴黎葡萄酒与白酒展览的筹备工作正在进行中，扩展的范围反映了欧洲各地对中国烈酒教育日益增长的热情。核心新增内容是首届欧洲白酒鸡尾酒大赛——邀请欧洲大陆各地的调酒师和调饮师创意探索白酒的香气多样性。</p>`
    }
  },

  /* ── EVENT ARTICLES ── */
  {
    slug: "chengdu-baijiu-festival-2024",
    category: "event",
    date: "March 2024",
    dateISO: "2024-03-20",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: true,
    title: {
      en: "Chengdu Baijiu Festival: The World's Largest Celebration of Strong Aroma",
      fr: "Festival de Baijiu de Chengdu : La Plus Grande Célébration Mondiale de l'Arôme Fort",
      zh: "成都白酒节：全球最大规模的浓香型庆典"
    },
    excerpt: {
      en: "The annual Chengdu Baijiu Festival brought together the top 20 Sichuan distilleries for a celebration of Strong Aroma culture — the style that accounts for 70% of China's total baijiu consumption.",
      fr: "Le festival annuel de Baijiu de Chengdu a réuni les 20 meilleures distilleries du Sichuan pour une célébration de la culture de l'Arôme Fort.",
      zh: "一年一度的成都白酒节汇聚了四川省前20家蒸馏酒厂，共同庆祝浓香型文化——这一占中国白酒总消费量70%的香型风格。"
    },
    body: {
      en: `<p>Each March, the Sichuan capital transforms into the global center of Strong Aroma Baijiu culture. The 2024 Chengdu Baijiu Festival gathered the leading distilleries of the Sichuan Basin — from Wuliangye and Luzhou Laojiao to Jiannanchun and Langjiu — for a five-day celebration that combined public tasting, professional trade sessions, and cultural programming.</p>
<p>Central to the 2024 edition was a tribute to the 450-year fermentation pits of Luzhou Laojiao — the world's oldest continuously operating commercial fermentation vessels, now proposed for UNESCO Cultural Heritage listing. Visitors could observe the ancient pit walls and participate in a tasting journey from the 5-year to 30-year expressions produced from the original 1573 Ming Dynasty pits.</p>`,
      fr: `<p>Chaque mars, la capitale du Sichuan se transforme en centre mondial de la culture du Baijiu Arôme Fort. Le Festival de Baijiu de Chengdu 2024 a rassemblé les principales distilleries du Bassin du Sichuan pour une célébration de cinq jours combinant dégustation publique, sessions commerciales professionnelles et programmation culturelle.</p>`,
      zh: `<p>每年三月，四川省会都会蜕变为浓香型白酒文化的全球中心。2024年成都白酒节汇聚了四川盆地的主要蒸馏酒厂，举办为期五天的庆典活动，包括公众品鉴、专业贸易会议和文化活动。</p>`
    }
  },

  {
    slug: "ningxia-harvest-2024",
    category: "event",
    date: "September 2024",
    dateISO: "2024-09-15",
    image: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: false,
    title: {
      en: "Ningxia Harvest 2024: Open Doors at China's Finest Wine Estates",
      fr: "Vendanges de Ningxia 2024 : Portes Ouvertes dans les Plus Beaux Domaines Viticoles de Chine",
      zh: "宁夏2024年葡萄采收季：中国顶级酒庄开门迎客"
    },
    excerpt: {
      en: "Harvest season open days at Ningxia's leading estates — including Helan Qingxue, Silver Heights, and Tiansai — offered a rare window into China's most internationally recognized wine region.",
      fr: "Les journées portes ouvertes de la saison des vendanges dans les domaines phares de Ningxia ont offert une fenêtre rare sur la région viticole la plus reconnue internationalement de Chine.",
      zh: "宁夏领先酒庄的采收季开放日——包括贺兰晴雪、银色高地和天赛葡萄园——为访客提供了了解中国国际知名度最高葡萄酒产区的难得机会。"
    },
    body: {
      en: `<p>September 2024 saw Ningxia's wine estates throw open their cellar doors for the annual harvest season. At the foot of the Helan Mountains, with the Yellow River plains stretching east and the desert at their backs, estates like Helan Qingxue — whose Jia Bei Lan Cabernet Sauvignon won Decanter Magazine's International Trophy in 2011 — welcomed visitors for guided vineyard tours, barrel tastings, and winemaker conversations.</p>
<p>Silver Heights, the family-owned estate of Emma Gao — who trained at a Bordeaux château — poured barrel samples of their 2024 Summit Cabernet Sauvignon, a wine that has established itself as a benchmark for the Helan Mountain East Foothills appellation.</p>`,
      fr: `<p>Septembre 2024 a vu les domaines viticoles de Ningxia ouvrir leurs portes pour la saison des vendanges annuelle. Au pied des Montagnes Helan, des domaines comme Helan Qingxue ont accueilli des visiteurs pour des visites guidées de vignobles, des dégustations de fûts et des échanges avec les vignerons.</p>`,
      zh: `<p>2024年9月，宁夏葡萄酒庄园在年度采收季向访客敞开了酒窖大门。在贺兰山脚下，东望黄河平原、背倚沙漠，贺兰晴雪——其加贝兰赤霞珠于2011年荣获醇鉴杂志国际大奖——迎接访客参加葡萄园导览、桶装酒品鉴和酿酒师交流活动。</p>`
    }
  },

  {
    slug: "beijing-baijiu-week-2024",
    category: "event",
    date: "November 2024",
    dateISO: "2024-11-10",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: false,
    title: {
      en: "Beijing Baijiu Week: A Week of History, Science, and Tasting at the National Museum",
      fr: "Semaine du Baijiu à Pékin : Une Semaine d'Histoire, de Science et de Dégustation au Musée National",
      zh: "北京白酒周：在国家博物馆的历史、科学与品鉴之旅"
    },
    excerpt: {
      en: "A week-long educational program at the National Museum of China covered Baijiu history, production science, and cultural significance — drawing academics, industry professionals, and curious newcomers from across the country.",
      fr: "Un programme éducatif d'une semaine au Musée National de Chine a couvert l'histoire du Baijiu, la science de la production et la signification culturelle.",
      zh: "在中国国家博物馆举办的为期一周的教育项目涵盖了白酒的历史、生产科学和文化意义，吸引了全国各地的学者、行业专业人士和初学者。"
    },
    body: {
      en: `<p>November's Beijing Baijiu Week at the National Museum of China represented the most ambitious attempt yet to bring China's spirit heritage to a mainstream cultural audience. Hosted in the institution that stands on Tiananmen Square, the week-long program combined archival exhibitions, scientific lectures, master tastings, and conversations with some of China's most decorated master blenders.</p>
<p>The centerpiece was a archival display tracing Baijiu's documented history from Han Dynasty grain fermentation records to the 1915 Panama-Pacific International Exposition gold medals that first brought Chinese spirits to international attention. Special exhibits focused on the traditional production methods of each aroma type, with original Daqu bricks, fermentation vessels, and aging containers displayed alongside their scientific analyses.</p>`,
      fr: `<p>La Semaine du Baijiu de Pékin au Musée National de Chine de novembre a représenté la tentative la plus ambitieuse à ce jour d'apporter le patrimoine spiritueux de Chine à un public culturel général. Le programme d'une semaine combinait des expositions archivistiques, des conférences scientifiques, des dégustations maître et des conversations avec certains des maîtres-assembleurs les plus décorés de Chine.</p>`,
      zh: `<p>11月在中国国家博物馆举办的北京白酒周，是迄今为止将中国烈酒遗产呈现给主流文化受众最雄心勃勃的尝试。这个在天安门广场对面举办的为期一周的项目，融合了档案展览、科学讲座、大师品鉴，以及与中国最具声望的调酒大师的对话交流。</p>`
    }
  },

  /* ── CULTURE ARTICLES ── */
  {
    slug: "changyu-130-years",
    category: "culture",
    date: "December 2024",
    dateISO: "2024-12-01",
    image: "https://asialyst.com/fr/wp-content/uploads/2016/07/CHINE-VIN-YANTAI.jpg",
    featured: false,
    title: {
      en: "Changyu: 130 Years of Chinese Wine Excellence",
      fr: "Changyu : 130 Ans d'Excellence du Vin Chinois",
      zh: "张裕：130年中国葡萄酒卓越历程"
    },
    excerpt: {
      en: "Founded in 1892 by Zhang Bishi in Yantai, Shandong, Changyu Pioneer Wine has pioneered every major chapter of Chinese wine history over 130 years of continuous production.",
      fr: "Fondée en 1892 par Zhang Bishi à Yantai, Shandong, Changyu Pioneer Wine a été pionnière dans chaque grand chapitre de l'histoire viticole chinoise.",
      zh: "1892年由张弼士在山东烟台创建，张裕葡萄酿酒公司在130年的持续生产历程中，引领了中国葡萄酒史的每一个重要篇章。"
    },
    body: {
      en: `<p>When Zhang Bishi established the Changyu Pioneer Wine Company in Yantai, Shandong in 1892, he was building more than a winery — he was founding what would become the oldest and largest wine company in China, and one of the first Chinese enterprises to achieve genuine international recognition for a manufactured luxury product.</p>
<p>Changyu was the first Chinese winery to import European varietal grapevine cuttings at scale, bringing Cabernet Sauvignon, Chardonnay, Riesling and other varieties from France, Germany, and Spain to the Yellow Sea peninsula climate of Yantai — a choice of terroir that proved remarkably prescient, as Yantai's maritime climate has since been recognised as one of China's most suitable for European grape varieties.</p>`,
      fr: `<p>Quand Zhang Bishi a établi la Changyu Pioneer Wine Company à Yantai, Shandong en 1892, il construisait plus qu'un domaine viticole — il fondait ce qui allait devenir la plus ancienne et la plus grande société vinicole de Chine. Changyu a été la première cave chinoise à importer des boutures de cépages européens à grande échelle, amenant Cabernet Sauvignon, Chardonnay, Riesling et d'autres cépages de France, d'Allemagne et d'Espagne.</p>`,
      zh: `<p>1892年，当张弼士在山东烟台创立张裕葡萄酿酒公司时，他所建立的不仅仅是一座酒庄——而是中国历史最悠久、规模最大的葡萄酒公司，也是最早在国际上获得制造奢侈品认可的中国企业之一。</p>
<p>张裕是中国第一家大规模引进欧洲葡萄品种枝条的酒庄，将赤霞珠、霞多丽、雷司令等品种从法国、德国和西班牙引入烟台这片黄海半岛的风土——这一风土选择极具远见，烟台的海洋性气候此后被公认为中国最适合欧洲葡萄品种的产区之一。</p>`
    }
  },

  {
    slug: "moutai-diplomacy",
    category: "culture",
    date: "February 2025",
    dateISO: "2025-02-05",
    image: "https://www.barnews.ch/wp-content/uploads/Kweichow-Moutai.jpg",
    featured: false,
    title: {
      en: "The Spirit of Diplomacy: How Moutai Shaped China's Foreign Relations",
      fr: "Le Spiritueux de la Diplomatie : Comment Moutai a Façonné les Relations Étrangères de la Chine",
      zh: "外交烈酒：茅台如何塑造中国的对外关系"
    },
    excerpt: {
      en: "From Nixon's 1972 visit to state banquets for visiting heads of government, Kweichow Moutai has served as China's diplomatic calling card for over 70 years.",
      fr: "De la visite de Nixon en 1972 aux banquets d'État pour les chefs de gouvernement en visite, le Kweichow Moutai a servi de carte de visite diplomatique de la Chine pendant plus de 70 ans.",
      zh: "从1972年尼克松访华到国宾宴会，贵州茅台70多年来一直是中国的外交名片。"
    },
    body: {
      en: `<p>The history of Kweichow Moutai cannot be told without reference to the history of Chinese diplomacy. The two stories are intertwined so completely that understanding Moutai's rise to become the world's most valuable spirits brand requires understanding its role as an instrument of Chinese state power.</p>
<p>The defining moment came on February 21, 1972, when President Richard Nixon landed in Beijing for his historic nine-day visit to the People's Republic of China. At the state dinner hosted by Premier Zhou Enlai, both leaders drank Moutai throughout the meal. Nixon later wrote in his memoirs that he had been warned by the US advance team about the potency of the spirit, but found it "smooth and warming."</p>`,
      fr: `<p>L'histoire du Kweichow Moutai ne peut être racontée sans référence à l'histoire de la diplomatie chinoise. Le moment décisif est venu le 21 février 1972, quand le Président Richard Nixon a atterri à Pékin pour sa visite historique de neuf jours. Au dîner d'État organisé par le Premier Ministre Zhou Enlai, les deux dirigeants ont bu du Moutai tout au long du repas.</p>`,
      zh: `<p>贵州茅台的历史无法脱离中国外交史来讲述，两者的交织如此深入，以至于理解茅台如何跻身全球最有价值烈酒品牌，需要先理解其作为中国国家权力工具的角色。</p>
<p>决定性的时刻发生在1972年2月21日，当尼克松总统抵达北京，开始其历史性的九天访华之旅。在国务院总理周恩来主持的国宴上，两位领导人在整个用餐过程中都饮用了茅台。</p>`
    }
  },

  {
    slug: "baijiu-cocktail-renaissance",
    category: "education",
    date: "March 2025",
    dateISO: "2025-03-12",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    featured: false,
    title: {
      en: "The Baijiu Cocktail Renaissance: How Bartenders Are Embracing China's Spirit",
      fr: "La Renaissance du Cocktail Baijiu : Comment les Bartenders Embracent le Spiritueux Chinois",
      zh: "白酒鸡尾酒的文艺复兴：调酒师如何拥抱中国烈酒"
    },
    excerpt: {
      en: "From London to New York to Shanghai, a new generation of bartenders is discovering that Baijiu's extraordinary aromatic complexity makes it one of the most versatile — and rewarding — cocktail spirits in the world.",
      fr: "De Londres à New York en passant par Shanghai, une nouvelle génération de bartenders découvre que la complexité aromatique extraordinaire du Baijiu en fait l'un des spiritueux de cocktail les plus polyvalents au monde.",
      zh: "从伦敦到纽约再到上海，新一代调酒师正在发现，白酒非凡的香气复杂性使其成为世界上最多样化、最令人回味的鸡尾酒烈酒之一。"
    },
    body: {
      en: `<p>The cocktail bar world has always been a laboratory for the exotic and the unexpected, but few spirits have presented as much creative potential — or as steep a learning curve — as Baijiu. The spirit that has been consumed by more people than any other on Earth remained almost entirely absent from international cocktail culture until the last decade.</p>
<p>That is now changing rapidly. At bars from London's Chinatown to New York's Lower East Side to Singapore's Marina Bay, Baijiu-forward cocktails are appearing on menus, and the bartenders creating them are discovering that the spirit's extraordinary aromatic range — from the fruity accessibility of Strong Aroma to the medicinal complexity of Herbal Aroma — provides creative possibilities unavailable with Western spirit categories.</p>`,
      fr: `<p>Le monde des bars à cocktails a toujours été un laboratoire pour l'exotique et l'inattendu, mais peu de spiritueux ont présenté autant de potentiel créatif que le Baijiu. Dans les bars de Chinatown à Londres jusqu'au Lower East Side de New York, les cocktails à base de Baijiu apparaissent sur les cartes.</p>`,
      zh: `<p>鸡尾酒吧世界历来是探索异域风味和意外体验的实验室，但很少有烈酒能像白酒一样呈现如此大的创作潜力。从伦敦唐人街的酒吧到纽约下东区，再到新加坡滨海湾，以白酒为主角的鸡尾酒正出现在各地菜单上。</p>`
    }
  },

];

/* ─── HELPERS ─── */
export function getArticlesByCategory(category) {
  return ARTICLES.filter(a => a.category === category);
}

export function getFeaturedArticles() {
  return ARTICLES.filter(a => a.featured);
}

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(slug, limit = 3) {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return ARTICLES
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}