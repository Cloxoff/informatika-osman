export const quizQuestions = [
  {
    id: 1,
    topic: { ru: 'История CPU', tm: 'CPU taryhy' },
    question: {
      ru: 'Какой микропроцессор стал первым коммерческим однокристальным CPU в мире в 1971 году?',
      tm: '1971-nji ýylda dünýäde ilkinji täjirçilik bir kristally mikroprosessor haýsy boldy?',
    },
    options: [
      { id: 'A', text: { ru: 'Intel 4004', tm: 'Intel 4004' } },
      { id: 'B', text: { ru: 'AMD Ryzen 9', tm: 'AMD Ryzen 9' } },
      { id: 'C', text: { ru: 'IBM PowerPC', tm: 'IBM PowerPC' } },
      { id: 'D', text: { ru: 'Motorola 68000', tm: 'Motorola 68000' } },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Intel 4004, разработанный Федерико Фаггином, Тедом Хоффом, Стэнли Мазором и Масатоси Симой в 1971 году, открыл эру микропроцессоров.',
      tm: '1971-nji ýylda Federiko Faggin, Ted Hoff, Stenli Mazor we Masatosi Şima tarapyndan döredilen Intel 4004 mikroprosessorlar eýýamyny açdy.',
    },
  },
  {
    id: 2,
    topic: { ru: 'Память ПК', tm: 'PK ýady' },
    question: {
      ru: 'Почему при отключении питания компьютера данные из оперативной памяти (RAM) исчезают?',
      tm: 'Kompýuter tokdan öçürilende operatiw ýatdaky (RAM) maglumatlar näme üçin ýitýär?',
    },
    options: [
      { id: 'A', text: { ru: 'Их стирает антивирус при выключении', tm: 'Öçürilende antiwirus olary pozýar' } },
      { id: 'B', text: { ru: 'DRAM хранит биты в зарядах конденсаторов, требующих тока', tm: 'DRAM bitleri tok talap edýän kondensator zarýadlarynda saklaýar' } },
      { id: 'C', text: { ru: 'Их магнитные пластины размагничиваются', tm: 'Magnit plastinalary magnitsizlenýär' } },
      { id: 'D', text: { ru: 'BIOS специально форматирует слоты DIMM', tm: 'BIOS DIMM slotlaryny ýörite formatlaýar' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Ячейки динамической оперативной памяти (изобретённой Робертом Деннардом) хранят информацию в виде микроскопических электрических зарядов, которые пропадают без питания.',
      tm: 'Robert Dennard tarapyndan oýlap tapylan dinamiki operatiw ýat öýjükleri maglumatlary elektrik zarýady görnüşinde saklaýar we tok bolmasa olar ýitýär.',
    },
  },
  {
    id: 3,
    topic: { ru: 'Графика и ИИ', tm: 'Grafika we EA' },
    question: {
      ru: 'Какая компания в 1999 году представила GeForce 256 и ввела термин GPU?',
      tm: '1999-njy ýylda GeForce 256-ny hödürlän we GPU adalgasyny girizen kompaniýa haýsy?',
    },
    options: [
      { id: 'A', text: { ru: 'Xerox PARC', tm: 'Xerox PARC' } },
      { id: 'B', text: { ru: 'Digital Research', tm: 'Digital Research' } },
      { id: 'C', text: { ru: 'NVIDIA', tm: 'NVIDIA' } },
      { id: 'D', text: { ru: 'Toshiba', tm: 'Toshiba' } },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'NVIDIA (сооснователи Дженсен Хуанг, Крис Малаховски и Кёртис Прим) в 1999 году выпустила GeForce 256 — первый в мире чип, названный GPU.',
      tm: 'NVIDIA (esaslandyryjylary Jensen Huang, Kris Malahowski we Körtis Prim) 1999-njy ýylda ilkinji GPU diýlip atlandyrylan GeForce 256 çipini çykardy.',
    },
  },
  {
    id: 4,
    topic: { ru: 'Языки программирования', tm: 'Programmirleme dilleri' },
    question: {
      ru: 'Какой язык программирования является единственным нативным языком, который исполняется прямо в браузере без плагинов?',
      tm: 'Brauzerde goşmaça modulsyz göni ýerine ýetirilýän ýeke-täk öz (natiw) programmirleme dili haýsy?',
    },
    options: [
      { id: 'A', text: { ru: 'PHP', tm: 'PHP' } },
      { id: 'B', text: { ru: 'JavaScript', tm: 'JavaScript' } },
      { id: 'C', text: { ru: 'SQL', tm: 'SQL' } },
      { id: 'D', text: { ru: 'C++', tm: 'C++' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'JavaScript (созданный Бренданом Эйхом в 1995 году) встроен в движки всех современных браузеров и отвечает за интерактивность веб-страниц.',
      tm: '1995-nji ýylda Brendan Eýh tarapyndan döredilen JavaScript häzirki zaman brauzerleriniň hemmesine ornaşdyrylandyr we web-sahypalaryň interaktiwligine jogap berýär.',
    },
  },
  {
    id: 5,
    topic: { ru: 'Базы данных', tm: 'Maglumat bazalary' },
    question: {
      ru: 'Какой оператор в SQL используется для сортировки строк результата по убыванию?',
      tm: 'SQL-de netije setirlerini kemelýän tertipde düzmegi haýsy operator ýerine ýetirýär?',
    },
    options: [
      { id: 'A', text: { ru: 'FILTER BY', tm: 'FILTER BY' } },
      { id: 'B', text: { ru: 'GROUP DOWN', tm: 'GROUP DOWN' } },
      { id: 'C', text: { ru: 'ORDER BY ... DESC', tm: 'ORDER BY ... DESC' } },
      { id: 'D', text: { ru: 'SORT TOP', tm: 'SORT TOP' } },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Конструкция ORDER BY столбец DESC сортирует выборку от большего значения к меньшему (descending).',
      tm: 'ORDER BY sütün DESC gurluşy maglumatlary uludan kiçä (kemelýän tertipde) düzýär.',
    },
  },
  {
    id: 6,
    topic: { ru: 'Запуск системы', tm: 'Ulgamyň başlangyjy' },
    question: {
      ru: 'Как называется процедура первичного самотестирования оборудования, которую выполняет BIOS / UEFI при включении ПК?',
      tm: 'PK açylanda BIOS / UEFI tarapyndan enjamlary ilkinji barlaýyş amaly nähili atlandyrylýar?',
    },
    options: [
      { id: 'A', text: { ru: 'POST (Power-On Self-Test)', tm: 'POST (Power-On Self-Test)' } },
      { id: 'B', text: { ru: 'HTTP (HyperText Transfer)', tm: 'HTTP (HyperText Transfer)' } },
      { id: 'C', text: { ru: 'VRAM (Video Memory)', tm: 'VRAM (Wideýat)' } },
      { id: 'D', text: { ru: 'JSON (Object Notation)', tm: 'JSON (Obýekt belligi)' } },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'POST проверяет процессор, оперативную память, видеокарту и накопители ещё до того, как начнёт загружаться операционная система.',
      tm: 'POST amaly operasion ulgam ýüklenip başlamazdan ozal prosessory, RAM-y, wideokartany we toplaýjylary barlaýar.',
    },
  },
  {
    id: 7,
    topic: { ru: 'Накопители', tm: 'Maglumat toplaýjylar' },
    question: {
      ru: 'Почему современные M.2 NVMe SSD во много раз быстрее классических жёстких дисков HDD?',
      tm: 'Häzirki zaman M.2 NVMe SSD-ler adaty HDD gaty disklerinden näme üçin birnäçe esse çalt?',
    },
    options: [
      { id: 'A', text: { ru: 'Внутри SSD вращается лазерный диск быстрее 7200 RPM', tm: 'SSD-niň içinde lazer diski 7200 RPM-den çalt aýlanýar' } },
      { id: 'B', text: { ru: 'У них нет механики, а флеш-память работает напрямую через шину PCIe', tm: 'Olarda mehanika ýok we fleş-ýat göni PCIe şinasy arkaly işleýär' } },
      { id: 'C', text: { ru: 'Они используют жидкое охлаждение внутри чипа', tm: 'Olar çipiň içinde suwuklyk sowadyşyny ulanýar' } },
      { id: 'D', text: { ru: 'Они сжимают файлы с помощью Wi-Fi', tm: 'Olar faýllary Wi-Fi arkaly gysýar' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'NVMe SSD обращаются к ячейкам NAND напрямую по скоростным линиям PCI Express без ожидания физического поворота магнитной пластины и движения головки.',
      tm: 'NVMe SSD-ler magnit plastinanyň aýlanmagyna garaşmazdan göni çalt PCI Express liniýalary boýunça NAND öýjüklerine ýüzlenýär.',
    },
  },
  {
    id: 8,
    topic: { ru: 'Сети', tm: 'Torlar' },
    question: {
      ru: 'Какой уникальный 48-битный аппаратный адрес прошит в каждой сетевой карте (NIC) на заводе?',
      tm: 'Her bir tor kartasyna (NIC) zawodda ýazylýan gaýtalanmaýan 48-bit apparat salgysy näme?',
    },
    options: [
      { id: 'A', text: { ru: 'MAC-адрес', tm: 'MAC-salgy' } },
      { id: 'B', text: { ru: 'URL-ссылка', tm: 'URL-salgy' } },
      { id: 'C', text: { ru: 'BIOS-ключ', tm: 'BIOS-açary' } },
      { id: 'D', text: { ru: 'TDP-индекс', tm: 'TDP-indeksi' } },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'MAC-адрес (Media Access Control) однозначно идентифицирует сетевой интерфейс в локальной сети, например 00:1A:2B:3C:4D:5E.',
      tm: 'MAC-salgy (Media Access Control) ýerli torda tor interfeýsini takyk kesgitleýär, meselem 00:1A:2B:3C:4D:5E.',
    },
  },
  {
    id: 9,
    topic: { ru: 'Питание и база', tm: 'Tok we esas' },
    question: {
      ru: 'Что означает маркировка «80 PLUS Gold» на блоке питания (PSU)?',
      tm: 'Tok üpjünçilik blogyndaky (PSU) «80 PLUS Gold» belligi nämäni aňladýar?',
    },
    options: [
      { id: 'A', text: { ru: 'Внутри установлены золотые вентиляторы', tm: 'Içinde altyn wentilýatorlar oturdylan' } },
      { id: 'B', text: { ru: 'Высокий КПД (около 90%) и меньшие потери энергии на нагрев', tm: 'Ýokary peýdaly täsir koeffisiýenti (~90%) we az ýylylyk ýitgisi' } },
      { id: 'C', text: { ru: 'Блок работает ровно 80 часов без перерыва', tm: 'Blok üznüksiz bary-ýogy 80 sagat işleýär' } },
      { id: 'D', text: { ru: 'Напряжение в розетке должно быть 80 Вольт', tm: 'Rozetkadaky naprýaženiýe 80 Wolt bolmaly' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Сертификат 80 PLUS Gold гарантирует, что блок питания преобразует электричество из розетки с КПД около 87–92%, меньше греется и стабильнее питает ПК.',
      tm: '80 PLUS Gold şahadatnamasy tok blogynyň elektriki ~87–92% peýdaly täsir bilen öwürýändigini, az gyzýandygyny we durnukly işleýändigini kepillendirýär.',
    },
  },
  {
    id: 10,
    topic: { ru: 'Языки кода', tm: 'Kod dilleri' },
    question: {
      ru: 'Для какой задачи чаще всего выбирают язык C++ вместо Python?',
      tm: 'Haýsy mesele üçin Python-yň ornuna köplenç C++ saýlanýar?',
    },
    options: [
      { id: 'A', text: { ru: 'Высоконагруженные 3D-движки, драйверы и быстрое ПО реального времени', tm: 'Ýokary ýükli 3D-hereketlendirijiler, draýwerler we hakyky wagt programmalary' } },
      { id: 'B', text: { ru: 'Быстрое написание одноразовых SQL-запросов в Excel', tm: 'Excel-de bir gezeklik SQL talaplaryny ýazmak' } },
      { id: 'C', text: { ru: 'Оформление цветов кнопок в CSS-таблице стилей', tm: 'CSS stillerinde düwmeleriň reňkini bezemek' } },
      { id: 'D', text: { ru: 'Хранение паролей в текстовом файле', tm: 'Parollary tekst faýlynda saklamak' } },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'C++ компилируется напрямую в машинный код и даёт тонкий контроль над памятью, поэтому незаменим для игровых движков, ОС и робототехники.',
      tm: 'C++ göni maşyn koduna kompilirlenýär we ýada berk gözegçilik berýär, şonuň üçin oýun hereketlendirijilerinde, OS-da we robototehnikada öňdebaryjydyr.',
    },
  },
  {
    id: 11,
    topic: { ru: 'Тренды 2026', tm: '2026 ugurlary' },
    question: {
      ru: 'В чём главное преимущество нейроморфных чипов по сравнению с классической архитектурой?',
      tm: 'Neýromorf çipleriň klassiki binagärlikden esasy artykmaçlygy nämede?',
    },
    options: [
      { id: 'A', text: { ru: 'Они работают только на 1000-ваттных блоках питания', tm: 'Olar diňe 1000-wattlyk tok bloklarynda işleýär' } },
      { id: 'B', text: { ru: 'Событийные вычисления как в мозге и память внутри узлов снижают расход энергии', tm: 'Beýni ýaly waka esasly hasaplamalar we içki ýat energiýa sarp edişini peseldýär' } },
      { id: 'C', text: { ru: 'Они не используют электричество вообще', tm: 'Olar elektrik toguny asla ulanmaýar' } },
      { id: 'D', text: { ru: 'Они печатают 3D-детали прямо на материнской плате', tm: 'Olar göni esasy platada 3D-şaýlary çap edýär' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Нейроморфные процессоры работают по принципу биологических нейронов (спайков) и совмещают память с вычислениями, экономя энергию в десятки раз.',
      tm: 'Neýromorf prosessorlar biologiki neýronlaryň (spaýklaryň) ýörelgesi boýunça işläp, ýady we hasaplamalary birleşdirýär hem-de energiýany onlarça esse tygşytlaýar.',
    },
  },
  {
    id: 12,
    topic: { ru: 'Тренды 2026', tm: '2026 ugurlary' },
    question: {
      ru: 'Что передаёт сигналы вместо электронов в технологиях кремниевой фотоники?',
      tm: 'Kremniý fotonikasy tehnologiýalarynda elektronlaryň ornuna signallary näme geçirýär?',
    },
    options: [
      { id: 'A', text: { ru: 'Звуковые волны ультразвука', tm: 'Ultrases tolkunlary' } },
      { id: 'B', text: { ru: 'Импульсы лазерного света (фотоны)', tm: 'Lazer ýagtylygynyň impulslary (fotonlar)' } },
      { id: 'C', text: { ru: 'Сжатый воздух в трубках', tm: 'Turbalardaky gysylan howa' } },
      { id: 'D', text: { ru: 'Магнитная лента', tm: 'Magnit lentasy' } },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Фотонные интерконнекты передают данные световыми импульсами по микроволноводам, устраняя перегрев и потери, свойственные медным проводам.',
      tm: 'Foton baglanyşyklary maglumatlary mikro-tolkungeçirijiler arkaly ýagtylyk impulslary bilen geçirip, mis simlere mahsus gyzmany we ýitgini aradan aýyrýar.',
    },
  },
];
