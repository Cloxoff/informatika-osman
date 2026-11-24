export const hardwareCategories = [
  { id: 'all', key: 'all' },
  { id: 'compute', key: 'compute' },
  { id: 'memory', key: 'memory' },
  { id: 'power_base', key: 'power_base' },
];

export const hardwareItems = [
  {
    id: 'cpu',
    category: 'compute',
    image: 'images/cpu.jpg',
    accentColor: 'from-sky-400 to-indigo-500',
    name: {
      ru: 'Процессор (CPU)',
      tm: 'Prosessor (CPU)',
    },
    shortTag: {
      ru: 'Вычислительное ядро',
      tm: 'Hasaplama ýadrosy',
    },
    summary: {
      ru: 'Главный «мозг» компьютера, который считывает инструкции программ и выполняет миллиарды арифметических и логических операций в секунду.',
      tm: 'Programma buýruklaryny okaýan hem-de sekuntda milliardlarça arifmetiki we logiki amallary ýerine ýetirýän kompýuteriň esasy «beýnisi».',
    },
    role: {
      ru: 'CPU управляет работой всех узлов ПК по циклу «выборка — декодирование — исполнение». Внутри кристалла находятся ядра, блоки кэш-памяти (L1/L2/L3) и контроллеры шин. Чем выше тактовая частота, эффективнее архитектура и больше ядер, тем быстрее открываются приложения, компилируется код и обрабатываются данные.',
      tm: 'CPU «saýlama — kod çözme — ýerine ýetirme» sikli boýunça PK-nyň ähli bölekleriniň işini dolandyrýar. Kristalyň içinde ýadrolar, keş-ýat bloklary (L1/L2/L3) we şina gözegçileri ýerleşýär. Takt ýygylygy we ýadro sany näçe ýokary bolsa, programmalar şonça çalt işleýär.',
    },
    history: {
      inventor: {
        ru: 'Федерико Фаггин, Тед Хофф, Стэнли Мазор и Масатоси Сима',
        tm: 'Federiko Faggin, Ted Hoff, Stenli Mazor we Masatosi Şima',
      },
      company: {
        ru: 'Intel (первый коммерческий микропроцессор Intel 4004)',
        tm: 'Intel (ilkinji täjirçilik mikroprosessory Intel 4004)',
      },
      year: '1971',
      story: {
        ru: 'В 1971 году команда инженеров Intel во главе с Федерико Фаггином и Тедом Хоффом объединила тысячи транзисторов на одном кремниевом кристалле Intel 4004 для калькулятора Busicom — так началась эра персональных компьютеров.',
        tm: '1971-nji ýylda Federiko Fagginiň we Ted Hoffuň ýolbaşçylygyndaky Intel inženerleri Busicom kalkulýatory üçin müňlerçe tranzistory bir kremniý kristalynda (Intel 4004) birleşdirdiler — şeýlelikde şahsy kompýuterler eýýamy başlandy.',
      },
    },
    specs: [
      { label: { ru: 'Техпроцесс', tm: 'Tehnoligik ölçeg' }, value: { ru: '3–5 нм (FinFET / GAA)', tm: '3–5 nm (FinFET / GAA)' } },
      { label: { ru: 'Частота', tm: 'Takt ýygylygy' }, value: { ru: 'до 5.7–6.0 ГГц', tm: '5.7–6.0 GGs çenli' } },
      { label: { ru: 'Кэш-память', tm: 'Keş-ýat' }, value: { ru: 'L1 / L2 / L3 до 128 МБ', tm: 'L1 / L2 / L3 128 MB çenli' } },
      { label: { ru: 'Ядра', tm: 'Ýadrolar' }, value: { ru: '6–24+ (SMT / Потоки)', tm: '6–24+ (SMT / Akym)' } },
    ],
    funFact: {
      ru: 'Современный процессор содержит свыше 50 миллиардов транзисторов — каждый из них в тысячи раз тоньше человеческого волоса.',
      tm: 'Häzirki zaman prosessory 50 milliarddan gowrak tranzistory özünde jemleýär — olaryň her biri adam saçyndan müňlerçe esse inçedir.',
    },
  },
  {
    id: 'gpu',
    category: 'compute',
    image: 'images/gpu.jpg',
    accentColor: 'from-emerald-400 to-cyan-500',
    name: {
      ru: 'Видеокарта (GPU)',
      tm: 'Wideokarta (GPU)',
    },
    shortTag: {
      ru: 'Параллельный ускоритель',
      tm: 'Parallel tizlendiriji',
    },
    summary: {
      ru: 'Специализированное устройство с тысячами мини-ядер для одновременного рендеринга 3D-графики, видео и обучения нейросетей.',
      tm: '3D-grafikany, wideony we neýrosetleri bir wagtda işläp bilýän müňlerçe kiçi ýadroly ýöriteleşdirilen enjam.',
    },
    role: {
      ru: 'Если CPU — это «универсальный профессор» с небольшим числом сверхбыстрых ядер, то GPU — это «армия из тысяч математиков», решающих миллионы однотипных матричных задач параллельно. Видеокарта отвечает за вывод изображения на экран, трассировку лучей в играх и вычисления искусственного интеллекта.',
      tm: 'Eger CPU az sanly ýokary tizlikli ýadroly «köpugurly alym» bolsa, GPU birmeňzeş matrisa meselelerini şol bir wagtda çözýän «müňlerçe matematigiň goşunydyr». Wideokarta ekrana şekil çykarmaga, oýunlarda şöhle yzarlamaga we Emeli Aň hasaplamalaryna jogap berýär.',
    },
    history: {
      inventor: {
        ru: 'Дженсен Хуанг, Крис Малаховски и Кёртис Прим',
        tm: 'Jensen Huang, Kris Malahowski we Körtis Prim',
      },
      company: {
        ru: 'NVIDIA (GeForce 256 — первый в мире GPU)',
        tm: 'NVIDIA (GeForce 256 — dünýäde ilkinji GPU)',
      },
      year: '1999',
      story: {
        ru: 'В 1999 году компания NVIDIA выпустила GeForce 256, введя сам термин GPU (Graphics Processing Unit) — первый ускоритель с аппаратным блоком трансформации и освещения (T&L) на одном чипе.',
        tm: '1999-njy ýylda NVIDIA kompaniýasy GeForce 256 kartasyny çykaryp, GPU (Graphics Processing Unit) adalgasyny girizdi — bu bir çipde apparat transformasiýa we yşyklandyryş (T&L) blokly ilkinji tizlendiriji boldy.',
      },
    },
    specs: [
      { label: { ru: 'Шейдерные ядра', tm: 'Şeýder ýadrolary' }, value: { ru: '4 000 – 20 000+ CUDA/Stream', tm: '4 000 – 20 000+ CUDA/Stream' } },
      { label: { ru: 'Видеопамять', tm: 'Wideýat (VRAM)' }, value: { ru: '8–32 ГБ GDDR6X / GDDR7', tm: '8–32 GB GDDR6X / GDDR7' } },
      { label: { ru: 'Интерфейс', tm: 'Interfeýs' }, value: { ru: 'PCI Express 4.0 / 5.0 x16', tm: 'PCI Express 4.0 / 5.0 x16' } },
      { label: { ru: 'Спецблоки', tm: 'Ýörite bloklar' }, value: { ru: 'Тензорные (AI) и RT-ядра', tm: 'Tenzor (EA) we RT-ýadrolar' } },
    ],
    funFact: {
      ru: 'Именно архитектура GPU сделала возможной современную революцию нейросетей: матричные перемножения ускоряются в десятки раз быстрее, чем на обычных CPU.',
      tm: 'Hut GPU binagärligi häzirki zaman neýroset rewolýusiýasyny mümkin etdi: matrisa köpeltmeleri adaty CPU-dan onlarça esse çalt ýerine ýetirilýär.',
    },
  },
  {
    id: 'ram',
    category: 'memory',
    image: 'images/ram.jpg',
    accentColor: 'from-violet-400 to-fuchsia-500',
    name: {
      ru: 'Оперативная память (RAM)',
      tm: 'Operatiw ýat (RAM)',
    },
    shortTag: {
      ru: 'Быстрая рабочая память',
      tm: 'Çalt işçi ýat',
    },
    summary: {
      ru: 'Сверхбыстрая энергозависимая память, где хранятся запущенные программы, открытые вкладки и активные данные для мгновенного доступа CPU.',
      tm: 'Açyk programmalaryň, sahypalaryň we işjeň maglumatlaryň CPU-nyň dessine elýeterliligi üçin saklanýan örän çalt energiýa bagly ýat.',
    },
    role: {
      ru: 'Представьте рабочий стол программиста: SSD — это вместительный книжный шкаф, а RAM — поверхность стола, на которой лежат открытые прямо сейчас тетради и инструменты. При выключении питания данные из RAM стираются, но во время работы скорость обмена с процессором в разы выше, чем у накопителей.',
      tm: 'Programmaçynyň iş stoluny göz öňüne getiriň: SSD — giň kitap tekjesi, RAM bolsa häzir açyk duran depderleriň we gurallaryň ýerleşýän stoluň üstüdir. Tok öçürilende RAM-daky maglumatlar pozulýar, ýöne iş wagtynda tizligi toplaýjylardan birnäçe esse ýokarydyr.',
    },
    history: {
      inventor: {
        ru: 'Роберт Деннард',
        tm: 'Robert Dennard',
      },
      company: {
        ru: 'IBM (патент на динамическую память DRAM)',
        tm: 'IBM (dinamiki DRAM ýat patenti)',
      },
      year: '1968',
      story: {
        ru: 'В 1968 году инженер IBM Роберт Деннард запатентовал однотранзисторную ячейку DRAM (1 транзистор + 1 конденсатор), позволившую резко уменьшить стоимость и размер оперативной памяти.',
        tm: '1968-nji ýylda IBM inženeri Robert Dennard bir tranzistorly DRAM öýjügini (1 tranzistor + 1 kondensator) patentledi — bu operatiw ýadyň ölçegini we bahasyny düýpli azaltmaga mümkinçilik berdi.',
      },
    },
    specs: [
      { label: { ru: 'Поколение', tm: 'Nesil' }, value: { ru: 'DDR4 / DDR5 (288-pin DIMM)', tm: 'DDR4 / DDR5 (288-pin DIMM)' } },
      { label: { ru: 'Пропускная способн.', tm: 'Geçirijilik tizligi' }, value: { ru: '4800–8000+ МТ/с (DDR5)', tm: '4800–8000+ MT/s (DDR5)' } },
      { label: { ru: 'Объём для учёбы/ИТ', tm: 'Okuw/IT üçin göwrüm' }, value: { ru: '16–64 ГБ', tm: '16–64 GB' } },
      { label: { ru: 'Задержка', tm: 'Gijikme' }, value: { ru: '~12–15 наносекунд', tm: '~12–15 nanosekunt' } },
    ],
    funFact: {
      ru: 'Каждая ячейка DRAM хранит электрический заряд в микроконденсаторе, который нужно «подзаряжать» (обновлять) тысячи раз в секунду.',
      tm: 'Her bir DRAM öýjügi mikro-kondensatorda elektrik zarýadyny saklaýar we ony sekuntda müňlerçe gezek täzelemeli bolýar.',
    },
  },
  {
    id: 'motherboard',
    category: 'power_base',
    image: 'images/motherboard.jpg',
    accentColor: 'from-amber-400 to-orange-500',
    name: {
      ru: 'Материнская плата',
      tm: 'Esasy plata (Motherboard)',
    },
    shortTag: {
      ru: 'Системная магистраль',
      tm: 'Ulgamlaýyn magistral',
    },
    summary: {
      ru: 'Многослойная печатная плата, физически и электрически связывающая процессор, память, накопители, видеокарту и все внешние порты.',
      tm: 'Prosessory, ýady, toplaýjylary, wideokartany we ähli daşky portlary fiziki hem-de elektrik taýdan birleşdirýän köp gatlakly plata.',
    },
    role: {
      ru: 'Через медные дорожки внутри 6–12 слоёв текстолита материнская плата распределяет высокоскоростные сигналы PCIe, линии питания (VRM) и данные между компонентами. Чипсет на плате координирует USB-порты, звуковой кодек, SATA и слоты M.2.',
      tm: '6–12 gatlakly tekstolitiň içindäki mis ýodalary arkaly esasy plata ýokary tizlikli PCIe signallaryny, tok zynjyrlaryny (VRM) we maglumatlary paýlaýar. Platadaky çipset USB portlaryny, ses kodegini, SATA we M.2 slotlaryny sazlaýar.',
    },
    history: {
      inventor: {
        ru: 'Пэтти МакХью и инженерная команда IBM (Project Chess)',
        tm: 'Petti MakHýu we IBM inženerler topary (Project Chess)',
      },
      company: {
        ru: 'IBM (System Board в первом IBM PC 5150)',
        tm: 'IBM (ilkinji IBM PC 5150 üçin System Board)',
      },
      year: '1981',
      story: {
        ru: 'В 1981 году IBM заменила разрозненные платы-адаптеры единой «планарной» системной платой в IBM PC 5150, сделав архитектуру ПК модульной и стандартизированной по всему миру.',
        tm: '1981-nji ýylda IBM dagynyk uýgunlaşdyryjy platalaryň ornuna IBM PC 5150 üçin ýeke-täk «planar» ulgam platasyny döretdi we PK binagärligini bütin dünýäde standartlaşdyrdy.',
      },
    },
    specs: [
      { label: { ru: 'Форм-факторы', tm: 'Form-faktorlar' }, value: { ru: 'ATX, Micro-ATX, Mini-ITX', tm: 'ATX, Micro-ATX, Mini-ITX' } },
      { label: { ru: 'Сокеты CPU', tm: 'CPU soketleri' }, value: { ru: 'AM5 (AMD), LGA 1851 (Intel)', tm: 'AM5 (AMD), LGA 1851 (Intel)' } },
      { label: { ru: 'Подсистема питания', tm: 'Tok ulgamy (VRM)' }, value: { ru: 'Многофазные VRM-каскады', tm: 'Köp fazaly VRM kaskadlary' } },
      { label: { ru: 'Слоты расширения', tm: 'Giňeldiş slotlary' }, value: { ru: 'PCIe x16, M.2 NVMe, USB4', tm: 'PCIe x16, M.2 NVMe, USB4' } },
    ],
    funFact: {
      ru: 'Разница в длине двух соседних дорожек от CPU к слотам RAM на современной плате выравнивается с точностью до доли миллиметра, чтобы сигналы приходили строго синхронно.',
      tm: 'Häzirki zaman platasynda CPU-dan RAM slotlaryna barýan goňşy ýodalaryň uzynlygy signallaryň bir wagtda ýetmegi üçin millimetr bölegine çenli deňlenýär.',
    },
  },
  {
    id: 'storage',
    category: 'memory',
    image: 'images/storage.jpg',
    accentColor: 'from-rose-400 to-red-500',
    name: {
      ru: 'Накопители (NVMe SSD и HDD)',
      tm: 'Maglumat toplaýjylar (NVMe SSD we HDD)',
    },
    shortTag: {
      ru: 'Долговременное хранилище',
      tm: 'Uzak möhletli ammar',
    },
    summary: {
      ru: 'Энергонезависимая память для постоянного хранения операционной системы, проектов, фотографий и баз данных даже при выключенном ПК.',
      tm: 'Kompýuter öçürilende hem operasion ulgamy, taslamalary, suratlary we maglumat bazalaryny hemişelik saklaýan energiýa garaşsyz ýat.',
    },
    role: {
      ru: 'Твердотельные NVMe SSD используют флеш-память NAND и подключаются напрямую к шине PCIe без движущихся частей, обеспечивая мгновенную загрузку ОС за секунды. Классические жёсткие диски (HDD) применяют магнитные пластины и выгодны для архивов большого объёма.',
      tm: 'Gaty jisimi NVMe SSD-ler NAND fleş-ýadyny ulanyp, göni PCIe şinasyna birikýär we hereketli bölekleri bolmansoň ulgamy birnäçe sekuntda açýar. Adaty gaty diskler (HDD) bolsa magnit plastinalary ulanýar we uly arhiwler üçin amatlydyr.',
    },
    history: {
      inventor: {
        ru: 'Рейнольд Джонсон (HDD) и Фудзио Масуока (флеш-память NAND)',
        tm: 'Reýnold Jonson (HDD) we Fudzio Masuoka (NAND fleş-ýat)',
      },
      company: {
        ru: 'IBM (1956, RAMAC 350), Toshiba (1984), консорциум NVMe (2011)',
        tm: 'IBM (1956, RAMAC 350), Toshiba (1984), NVMe konsorsiumy (2011)',
      },
      year: '1956 / 1984 / 2011',
      story: {
        ru: 'В 1956 году IBM создала первый HDD размером с два холодильника на 5 МБ. В 1984-м Фудзио Масуока изобрёл флеш-память, а протокол NVMe 2011 года раскрыл полную скорость PCIe для компактных M.2 SSD.',
        tm: '1956-njy ýylda IBM 5 MB göwrümli ilkinji uly HDD-ni döretdi. 1984-nji ýylda Fudzio Masuoka fleş-ýady oýlap tapdy, 2011-nji ýylyň NVMe protokoly bolsa ykjam M.2 SSD-leriň doly tizligini açdy.',
      },
    },
    specs: [
      { label: { ru: 'Чтение NVMe Gen5', tm: 'NVMe Gen5 okama' }, value: { ru: 'до 14 000 МБ/с', tm: '14 000 MB/s çenli' } },
      { label: { ru: 'Скорость HDD', tm: 'HDD tizligi' }, value: { ru: '~150–250 МБ/с (7200 RPM)', tm: '~150–250 MB/s (7200 RPM)' } },
      { label: { ru: 'Форм-фактор SSD', tm: 'SSD ölçegi' }, value: { ru: 'M.2 2280 / PCIe AIC', tm: 'M.2 2280 / PCIe AIC' } },
      { label: { ru: 'Ресурс записи', tm: 'Ýazgy çydamlylygy' }, value: { ru: '600–2400+ TBW', tm: '600–2400+ TBW' } },
    ],
    funFact: {
      ru: 'Первый жёсткий диск IBM 350 весил около 1 тонны и вмещал всего 3,75 МБ — сегодня столько занимает одна фотография со смартфона.',
      tm: 'Ilkinji IBM 350 gaty diski takmynan 1 tonna agramly bolup, bary-ýogy 3,75 MB maglumat saklaýardy — häzirki wagtda bu bir smartfon suratynyň ölçegidir.',
    },
  },
  {
    id: 'psu',
    category: 'power_base',
    image: 'images/psu.jpg',
    accentColor: 'from-yellow-400 to-amber-500',
    name: {
      ru: 'Блок питания (PSU)',
      tm: 'Tok üpjünçilik blogy (PSU)',
    },
    shortTag: {
      ru: 'Сердце электропитания',
      tm: 'Elektrik energiýa ýüregi',
    },
    summary: {
      ru: 'Преобразует переменное напряжение розетки (220 В) в сверхстабильные линии постоянного тока +12 В, +5 В и +3,3 В для защиты электроники.',
      tm: 'Rozetkadaky üýtgeýän togy (220 W) elektronikany goramak üçin durnukly +12 W, +5 W we +3,3 W hemişelik tok ulgamyna öwürýär.',
    },
    role: {
      ru: 'Блок питания фильтрует сетевые помехи, защищает систему от короткого замыкания и скачков напряжения (OVP/OCP/SCP). Современные модульные PSU позволяют подключать только нужные кабели и поддерживают стандарт ATX 3.1 для кратковременных пиков нагрузки мощных GPU.',
      tm: 'Tok üpjünçilik blogy ulgamdaky päsgelçilikleri arassalaýar, gysga utgaşmadan we naprýaženiýe böküşlerinden (OVP/OCP/SCP) goraýar. Häzirki zaman modully PSU-lar diňe gerek kabelleri dakmaga we ATX 3.1 standartyny goldamaga mümkinçilik berýär.',
    },
    history: {
      inventor: {
        ru: 'Род Холт (импульсный БП для ПК) и архитекторы стандарта Intel ATX',
        tm: 'Rod Holt (PK üçin impulsly PSU) we Intel ATX standart inženerleri',
      },
      company: {
        ru: 'Apple (Apple II, 1977) и Intel (стандарт ATX, 1995)',
        tm: 'Apple (Apple II, 1977) we Intel (ATX standarty, 1995)',
      },
      year: '1977 / 1995',
      story: {
        ru: 'Инженер Род Холт в 1977 году применил лёгкий и эффективный импульсный блок питания в Apple II вместо тяжёлого линейного трансформатора, а в 1995-м Intel закрепила единый стандарт разъёмов ATX.',
        tm: '1977-nji ýylda inžener Rod Holt Apple II üçin agyr transformatoryň ornuna ýeňil hem-de netijeli impulsly tok blogyny döretdi, 1995-nji ýylda bolsa Intel ýeke-täk ATX standartlaryny tassyklady.',
      },
    },
    specs: [
      { label: { ru: 'Мощность', tm: 'Kuwwatlylygy' }, value: { ru: '550–1200+ Вт (стандарт ATX 3.1)', tm: '550–1200+ Wt (ATX 3.1 standarty)' } },
      { label: { ru: 'КПД (Сертификат)', tm: 'Peýdaly täsiri (80 PLUS)' }, value: { ru: '80 PLUS Gold / Platinum (90–94%)', tm: '80 PLUS Gold / Platinum (90–94%)' } },
      { label: { ru: 'Основные линии', tm: 'Esasy liniýalar' }, value: { ru: '+12V (CPU/GPU), +5V, +3.3V', tm: '+12V (CPU/GPU), +5V, +3.3V' } },
      { label: { ru: 'Защита', tm: 'Gorag ulgamy' }, value: { ru: 'OVP, UVP, OCP, OPP, SCP, OTP', tm: 'OVP, UVP, OCP, OPP, SCP, OTP' } },
    ],
    funFact: {
      ru: 'У качественного блока питания с сертификатом 80 PLUS Titanium потери энергии на нагрев составляют менее 6–8% при половинной нагрузке.',
      tm: '80 PLUS Titanium şahadatnamaly ýokary hilli PSU-da ýarym ýükde ýylylyga gidýän energiýa ýitgisi 6–8%-den azdyr.',
    },
  },
  {
    id: 'cooling',
    category: 'power_base',
    image: 'images/cooling.jpg',
    accentColor: 'from-cyan-400 to-blue-500',
    name: {
      ru: 'Система охлаждения (Воздушная и СЖО)',
      tm: 'Sowadyş ulgamy (Howa we suwuklyk)',
    },
    shortTag: {
      ru: 'Терморегуляция ПК',
      tm: 'PK-nyň ýylylyk gözegçiligi',
    },
    summary: {
      ru: 'Отводит тепло от процессора и видеокарты с помощью медных тепловых трубок, радиаторов, вентиляторов или замкнутого контура жидкости.',
      tm: 'Mis ýylylyk turbalary, radiatorlar, wentilýatorlar ýa-da ýapyk suwuklyk kontury arkaly prosessordan we wideokartadan ýylylygy çykarýar.',
    },
    role: {
      ru: 'При перегреве свыше 95–100 °C процессор автоматически сбрасывает частоту (троттлинг), чтобы не выйти из строя. Воздушные кулеры используют фазовый переход жидкости в тепловых трубках, а СЖО (AIO) переносят тепло по шлангам на крупный выносной радиатор.',
      tm: '95–100 °C-dan ýokary gyzan ýagdaýynda prosessor zaýalanmazlyk üçin awtomatik ýagdaýda ýygylygyny peseldýär (trottling). Howa kulerleri ýylylyk turbalaryny ulanýar, suwuklyk ulgamlary (AIO) bolsa ýylylygy şlanglar arkaly uly radiatora geçirýär.',
    },
    history: {
      inventor: {
        ru: 'Джордж Гровер (тепловая трубка), Сеймур Крей и Asetek (AIO СЖО)',
        tm: 'Jorj Grower (ýylylyk turbasy), Seýmur Kreý we Asetek (AIO SŽO)',
      },
      company: {
        ru: 'Los Alamos Lab (1963), Cray Research (1985), Asetek (2005)',
        tm: 'Los Alamos Lab (1963), Cray Research (1985), Asetek (2005)',
      },
      year: '1963 / 2005',
      story: {
        ru: 'Джордж Гровер изобрёл современную тепловую трубку в 1963 году для космических аппаратов, Сеймур Крей внедрил жидкостное охлаждение в суперкомпьютеры Cray-2, а Asetek в 2005 году сделала герметичные СЖО доступными для домашних ПК.',
        tm: 'Jorj Grower 1963-nji ýylda älem enjamlary üçin ýylylyk turbasyny oýlap tapdy, Seýmur Kreý Cray-2 superkompýuterlerine suwuklyk sowadyşyny ornaşdyrdy, Asetek bolsa 2005-nji ýylda öý PK-lary üçin ýapyk AIO ulgamyny döretdi.',
      },
    },
    specs: [
      { label: { ru: 'Воздушные кулеры', tm: 'Howa kulerleri' }, value: { ru: '4–8 медных теплотрубок + 120/140 мм', tm: '4–8 mis ýylylyk turbasy + 120/140 mm' } },
      { label: { ru: 'СЖО (AIO)', tm: 'Suwuklyk (AIO)' }, value: { ru: 'Радиаторы 240 / 360 / 420 мм', tm: '240 / 360 / 420 mm radiatorlar' } },
      { label: { ru: 'Термоинтерфейс', tm: 'Ýylylyk geçiriji' }, value: { ru: 'Термопаста или жидкий металл', tm: 'Termopasta ýa-da suwuk metal' } },
      { label: { ru: 'Управление', tm: 'Dolandyryş' }, value: { ru: '4-pin PWM по датчикам CPU', tm: 'CPU datçikleri boýunça 4-pin PWM' } },
    ],
    funFact: {
      ru: 'Медная тепловая трубка за счёт испарения и конденсации жидкости внутри переносит тепло в сотни раз быстрее, чем цельный медный стержень такого же диаметра.',
      tm: 'Mis ýylylyk turbasy içindäki suwuklygyň bugarmagy we kondensasiýasy netijesinde şol ölçegdäki tutuş mis çybykdan ýüzlerçe esse çalt ýylylyk geçirýär.',
    },
  },
  {
    id: 'bios',
    category: 'memory',
    image: 'images/bios.jpg',
    accentColor: 'from-fuchsia-400 to-purple-500',
    name: {
      ru: 'BIOS / UEFI чип',
      tm: 'BIOS / UEFI çipi',
    },
    shortTag: {
      ru: 'Микропрограмма запуска',
      tm: 'Başlangyç mikroprogrammasy',
    },
    summary: {
      ru: 'Энергонезависимая флеш-память на материнской плате, которая первой пробуждает процессор, проверяет оборудование (POST) и передаёт управление ОС.',
      tm: 'Esasy platadaky energiýa garaşsyz fleş-ýat: ilkinji bolup prosessory oýarýar, enjamlary barlaýar (POST) we dolandyryşy operasion ulgama berýär.',
    },
    role: {
      ru: 'Когда вы нажимаете кнопку питания, операционная система ещё не загружена. Именно прошивка UEFI в отдельной микросхеме проверяет память, клавиатуру и диски, задаёт профили XMP/EXPO для RAM и запускает загрузчик Windows или Linux.',
      tm: 'Tok düwmesine basanyňyzda operasion ulgam heniz ýüklenmedikdir. Aýratyn mikroshemadaky UEFI programmasy ýady, klawiaturany we diskleri barlaýar, RAM üçin XMP/EXPO sazlamalaryny berýär we Windows ýa-da Linux ýükleýjisini işe goýberýär.',
    },
    history: {
      inventor: {
        ru: 'Гэри Килдалл (BIOS) и консорциум Intel / UEFI Forum',
        tm: 'Geri Kildall (BIOS) we Intel / UEFI Forum konsorsiumy',
      },
      company: {
        ru: 'Digital Research (1975) и UEFI Forum (2005)',
        tm: 'Digital Research (1975) we UEFI Forum (2005)',
      },
      year: '1975 / 2005',
      story: {
        ru: 'Термин BIOS в 1975 году ввёл Гэри Килдалл для операционной системы CP/M. В конце 1990-х Intel разработала замену 16-битному BIOS — современный графический стандарт UEFI с поддержкой дисков свыше 2 ТБ и мыши.',
        tm: 'BIOS adalgasyny 1975-nji ýylda Geri Kildall CP/M ulgamy üçin girizdi. 1990-njy ýyllaryň ahyrynda Intel 16-bit BIOS-yň ornuna 2 TB-dan uly diskleri we syçanjygy goldaýan häzirki zaman UEFI standartyny döretdi.',
      },
    },
    specs: [
      { label: { ru: 'Носитель', tm: 'Ýat görnüşi' }, value: { ru: 'SPI NOR Flash (16–64 МБ)', tm: 'SPI NOR Flash (16–64 MB)' } },
      { label: { ru: 'Разрядность', tm: 'Razrýadlylygy' }, value: { ru: '32 / 64-битная среда UEFI', tm: '32 / 64-bit UEFI gurşawy' } },
      { label: { ru: 'Безопасность', tm: 'Howpsuzlyk' }, value: { ru: 'Secure Boot + TPM 2.0', tm: 'Secure Boot + TPM 2.0' } },
      { label: { ru: 'Разметка дисков', tm: 'Disk bölünişi' }, value: { ru: 'GPT (диски > 2 ТБ)', tm: 'GPT (2 TB-dan uly diskler)' } },
    ],
    funFact: {
      ru: 'Круглая батарейка CR2032 рядом с чипом на плате десятилетиями питала часы реального времени (RTC) и память настроек CMOS, чтобы компьютер знал дату без розетки.',
      tm: 'Platadaky tegelek CR2032 batareýasy kompýuter tokdan aýrylanda hem senäni we CMOS sazlamalaryny ýatda saklamak üçin hakyky wagt sagadyny (RTC) tok bilen üpjün edýär.',
    },
  },
  {
    id: 'nic',
    category: 'power_base',
    image: 'images/nic.jpg',
    accentColor: 'from-teal-400 to-emerald-500',
    name: {
      ru: 'Сетевая карта (NIC / Wi-Fi модуль)',
      tm: 'Tor kartasy (NIC / Wi-Fi moduly)',
    },
    shortTag: {
      ru: 'Выход в локальную сеть и интернет',
      tm: 'Ýerli tora we internete çykalga',
    },
    summary: {
      ru: 'Аппаратный контроллер, преобразующий цифровые данные компьютера в сетевые пакеты Ethernet или высокочастотные радиосигналы Wi-Fi.',
      tm: 'Kompýuteriň sanly maglumatlaryny Ethernet tor paketlerine ýa-da ýokary ýygylykly Wi-Fi radiosignallaryna öwürýän apparat gözegçisi.',
    },
    role: {
      ru: 'Каждый сетевой адаптер обладает уникальным физическим MAC-адресом. Проводной Ethernet (RJ-45) обеспечивает минимальный пинг и стабильные 1–10 Гбит/с, а современные модули Wi-Fi 7 работают сразу в трёх диапазонах (2.4, 5 и 6 ГГц) и включают Bluetooth.',
      tm: 'Her bir tor uýgunlaşdyryjysynyň gaýtalanmaýan fiziki MAC-salgysy bar. Simli Ethernet (RJ-45) minimal gijikme bilen durnukly 1–10 Gbit/s tizlik berýär, täze Wi-Fi 7 modullary bolsa bir wagtda üç diapazonda (2.4, 5 we 6 GGs) işleýär.',
    },
    history: {
      inventor: {
        ru: 'Роберт Меткалф и Дэвид Боггс (Ethernet); Вик Хейз и Джон О’Салливан (Wi-Fi)',
        tm: 'Robert Metkalf we Dewid Boggs (Ethernet); Wik Heýz we Jon O’Salliwan (Wi-Fi)',
      },
      company: {
        ru: 'Xerox PARC (1973) и CSIRO / IEEE 802.11 (1997)',
        tm: 'Xerox PARC (1973) we CSIRO / IEEE 802.11 (1997)',
      },
      year: '1973 / 1997',
      story: {
        ru: 'Роберт Меткалф описал технологию Ethernet в 1973 году в лаборатории Xerox PARC, а команда радиоастронома Джона О’Салливана и инженера Вика Хейза в 1990-х подарила миру стандарт беспроводной связи Wi-Fi.',
        tm: 'Robert Metkalf 1973-nji ýylda Xerox PARC laboratoriýasynda Ethernet tehnologiýasyny döretdi, radioastronom Jon O’Salliwanyň we inžener Wik Heýziň topary bolsa 1990-njy ýyllarda dünýä Wi-Fi simsiz aragatnaşyk standartyny berdi.',
      },
    },
    specs: [
      { label: { ru: 'Проводная сеть', tm: 'Simli tor' }, value: { ru: '1 / 2.5 / 10 Gigabit Ethernet', tm: '1 / 2.5 / 10 Gigabit Ethernet' } },
      { label: { ru: 'Беспроводной стандарт', tm: 'Simsiz standart' }, value: { ru: 'Wi-Fi 6E / Wi-Fi 7 (802.11be)', tm: 'Wi-Fi 6E / Wi-Fi 7 (802.11be)' } },
      { label: { ru: 'Идентификатор', tm: 'Şahsy belgi' }, value: { ru: 'Аппаратный MAC-адрес (48 бит)', tm: 'Apparat MAC-salgysy (48 bit)' } },
      { label: { ru: 'Интерфейс', tm: 'Interfeýs' }, value: { ru: 'PCIe / M.2 Key E / Интегр.', tm: 'PCIe / M.2 Key E / Goşulan' } },
    ],
    funFact: {
      ru: 'Алгоритмы борьбы с отражёнными радиоволнами, которые сегодня делают возможным быстрый Wi-Fi в школах и квартирах, выросли из исследований чёрных дыр австралийским учёным Джоном О’Салливаном.',
      tm: 'Häzirki wagtda mekdeplerde we öýlerde çalt Wi-Fi işini üpjün edýän şöhle gaýtmasyna garşy algoritmler awstraliýaly alym Jon O’Salliwanyň gara deşikleri öwrenmek barlaglaryndan gelip çykypdyr.',
    },
  },
];
