export const programmingLanguages = [
  {
    id: 'python',
    name: 'Python',
    badge: 'PY',
    color: 'from-sky-400 to-amber-400',
    year: '1991',
    creator: 'Guido van Rossum',
    paradigm: {
      ru: 'Мультипарадигменный • Интерпретируемый',
      tm: 'Köp paradigmalay • Interpretirlenýän',
    },
    description: {
      ru: 'Лидер в обучении, искусственном интеллекте и анализе данных. Отличается чистым, почти читаемым как английский текст синтаксисом без лишних скобок.',
      tm: 'Bilim bermekde, emeli aňda we maglumat seljermesinde öňdebaryjy dil. Artykmaç ýaýsyz, iňlisçe tekst ýaly aýdyň we arassa sintaksisi bilen tapawutlanýar.',
    },
    usedFor: [
      { ru: 'ИИ и нейросети', tm: 'EA we neýrosetler' },
      { ru: 'Наука о данных (Data Science)', tm: 'Maglumat ylmy' },
      { ru: 'Веб-бэкенд и автоматизация', tm: 'Web-bekend we awtomatizasiýa' },
    ],
    difficulty: 2,
    difficultyLabel: { ru: 'Очень лёгкий старт', tm: 'Örän ýeňil başlangyç' },
    speed: 4,
    speedLabel: { ru: 'Средняя (гибкий, но не нативный)', tm: 'Ortaça (çeýe, ýöne natiw däl)' },
    fileName: 'ai_class_helper.py',
    syntaxLang: 'python',
    code: {
      ru: `# Подсчёт среднего балла класса по информатике
scores = [92, 85, 98, 76, 100, 89]

def class_summary(grades):
    avg = sum(grades) / len(grades)
    best = max(grades)
    return f"Средний балл: {avg:.1f} | Максимум: {best}"

print(class_summary(scores))`,
      tm: `# Synpyň informatika boýunça ortaça bahasyny hasaplamak
bahalar = [92, 85, 98, 76, 100, 89]

def synp_netijesi(sanaw):
    ortaca = sum(sanaw) / len(sanaw)
    in_yokary = max(sanaw)
    return f"Ortaça baha: {ortaca:.1f} | Iň ýokary: {in_yokary}"

print(synp_netijesi(bahalar))`,
    },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    badge: 'JS',
    color: 'from-amber-400 to-orange-500',
    year: '1995',
    creator: 'Brendan Eich',
    paradigm: {
      ru: 'Событийно-ориентированный • JIT-компиляция',
      tm: 'Waka gönükdirilen • JIT-kompilýasiýa',
    },
    description: {
      ru: 'Единственный родной язык браузеров, оживляющий веб-интерфейсы, интерактивные карты, анимации и современные SPA-порталы вроде этого сайта.',
      tm: 'Brauzerleriň ýeke-täk öz dili bolup, web-interfeýsleri, interaktiw kartalary, animasiýalary we şu sahypa ýaly SPA portallary janlandyrýar.',
    },
    usedFor: [
      { ru: 'Веб-приложения (React, Vue)', tm: 'Web-programmalar (React, Vue)' },
      { ru: 'Серверы на Node.js', tm: 'Node.js serwerleri' },
      { ru: 'Мобильные приложения', tm: 'Mobil programmalar' },
    ],
    difficulty: 4,
    difficultyLabel: { ru: 'Лёгкий / Средний', tm: 'Ýeňil / Ortaça' },
    speed: 7,
    speedLabel: { ru: 'Высокая (движок V8 JIT)', tm: 'Ýokary (V8 JIT hereketlendirijisi)' },
    fileName: 'live_timer.js',
    syntaxLang: 'javascript',
    code: {
      ru: `// Фильтрация учеников с высокой оценкой
const students = [
  { name: "Алина", score: 95 },
  { name: "Мурад", score: 88 },
  { name: "Тимур", score: 97 },
];

const honors = students
  .filter((s) => s.score >= 90)
  .map((s) => s.name);

console.log("Отличники:", honors.join(", "));`,
      tm: `// Ýokary baha alan okuwçylary saýlamak
const okuwcylar = [
  { at: "Aýna", baha: 95 },
  { at: "Myrat", baha: 88 },
  { at: "Kemal", baha: 97 },
];

const tapawutlananlar = okuwcylar
  .filter((o) => o.baha >= 90)
  .map((o) => o.at);

console.log("Tapawutlananlar:", tapawutlananlar.join(", "));`,
    },
  },
  {
    id: 'cpp',
    name: 'C++',
    badge: 'C++',
    color: 'from-blue-500 to-indigo-600',
    year: '1985',
    creator: 'Bjarne Stroustrup',
    paradigm: {
      ru: 'Компилируемый • Системный и ООП',
      tm: 'Kompilirlenýän • Ulgamlaýyn we OOP',
    },
    description: {
      ru: 'Мощнейший язык с прямым доступом к памяти и аппаратным ресурсам. На нём написаны игровые движки, драйверы, ядра ОС и высокочастотный ИИ.',
      tm: 'Ýada we enjam serişdelerine göni çykyş berýän örän kuwwatly dil. Oýun hereketlendirijileri, draýwerler, OS ýadrolary we çalt EA şunda ýazylýar.',
    },
    usedFor: [
      { ru: 'Игры (Unreal Engine)', tm: 'Oýunlar (Unreal Engine)' },
      { ru: 'Операционные системы и драйверы', tm: 'Operasion ulgamlar we draýwerler' },
      { ru: 'Робототехника и микроконтроллеры', tm: 'Robototehnika we mikrokontrollerler' },
    ],
    difficulty: 9,
    difficultyLabel: { ru: 'Высокая (строгие типы и память)', tm: 'Ýokary (berk tipler we ýat)' },
    speed: 10,
    speedLabel: { ru: 'Максимальная (нативный машинный код)', tm: 'Iň ýokary (göni maşyn kody)' },
    fileName: 'fast_primes.cpp',
    syntaxLang: 'cpp',
    code: {
      ru: `#include <iostream>
#include <vector>

// Быстрая проверка простого числа
bool isPrime(int n) {
    if (n < 2) return false;
    for (int d = 2; d * d <= n; ++d)
        if (n % d == 0) return false;
    return true;
}

int main() {
    std::cout << "17 простое? " << (isPrime(17) ? "Да" : "Нет") << "\\n";
    return 0;
}`,
      tm: `#include <iostream>
#include <vector>

// Ýönekeý sany çalt barlamak
bool yonekeyMi(int n) {
    if (n < 2) return false;
    for (int d = 2; d * d <= n; ++d)
        if (n % d == 0) return false;
    return true;
}

int main() {
    std::cout << "17 ýönekeý sanmy? " << (yonekeyMi(17) ? "Hawa" : "Ýok") << "\\n";
    return 0;
}`,
    },
  },
  {
    id: 'php',
    name: 'PHP',
    badge: 'PHP',
    color: 'from-indigo-400 to-purple-600',
    year: '1995',
    creator: 'Rasmus Lerdorf',
    paradigm: {
      ru: 'Серверный веб-скриптинг',
      tm: 'Serwer tarap web-skript dili',
    },
    description: {
      ru: 'Проверенный временем серверный язык, на котором до сих пор работает огромная доля веб-сайтов, интернет-магазинов, CMS и REST API.',
      tm: 'Wagt synagyndan geçen serwer dili bolup, web-saýtlaryň, onlaýn dükanlaryň, CMS ulgamlarynyň we REST API-laryň uly bölegi şunda işleýär.',
    },
    usedFor: [
      { ru: 'Серверная логика сайтов', tm: 'Saýtlaryň serwer logikasy' },
      { ru: 'Фреймворки Laravel и Symfony', tm: 'Laravel we Symfony freýmworklary' },
      { ru: 'Системы управления (WordPress)', tm: 'Dolandyryş ulgamlary (WordPress)' },
    ],
    difficulty: 4,
    difficultyLabel: { ru: 'Доступный для новичков', tm: 'Başlaýanlar üçin elýeterli' },
    speed: 6,
    speedLabel: { ru: 'Быстрая (PHP 8.x + JIT)', tm: 'Çalt (PHP 8.x + JIT)' },
    fileName: 'api_greeting.php',
    syntaxLang: 'php',
    code: {
      ru: `<?php
// Формирование JSON-ответа на сервере
declare(strict_types=1);

$lesson = [
    'topic' => 'Архитектура ЭВМ',
    'status' => 'active',
    'students' => 28,
];

header('Content-Type: application/json; charset=utf-8');
echo json_encode($lesson, JSON_UNESCAPED_UNICODE);`,
      tm: `<?php
// Serwerde JSON jogabyny taýýarlamak
declare(strict_types=1);

$sapak = [
    'tema' => 'EHM binagärligi',
    'yagdayy' => 'işjeň',
    'okuwcylar' => 28,
];

header('Content-Type: application/json; charset=utf-8');
echo json_encode($sapak, JSON_UNESCAPED_UNICODE);`,
    },
  },
  {
    id: 'java',
    name: 'Java',
    badge: 'JAVA',
    color: 'from-red-500 to-amber-500',
    year: '1995',
    creator: 'James Gosling',
    paradigm: {
      ru: 'Строго типизированный ООП • JVM',
      tm: 'Berk tipli OOP • JVM',
    },
    description: {
      ru: 'Надёжный язык корпоративного уровня с принципом «написано один раз — работает везде» благодаря виртуальной машине JVM.',
      tm: 'JVM wirtual maşyny arkaly «bir gezek ýaz — hemme ýerde işlet» ýörelgesini berjaý edýän ygtybarly korporatiw derejeli dil.',
    },
    usedFor: [
      { ru: 'Банковские и крупные системы', tm: 'Bank we iri ulgamlar' },
      { ru: 'Android-разработка', tm: 'Android programmalary' },
      { ru: 'Облачные микросервисы (Spring)', tm: 'Bulut mikroserwisleri (Spring)' },
    ],
    difficulty: 6,
    difficultyLabel: { ru: 'Средне-высокая (строгая ООП)', tm: 'Ortaça-ýokary (berk OOP)' },
    speed: 8,
    speedLabel: { ru: 'Очень высокая (HotSpot JVM)', tm: 'Örän ýokary (HotSpot JVM)' },
    fileName: 'ServerCheck.java',
    syntaxLang: 'java',
    code: {
      ru: `public class ServerCheck {
    public static void main(String[] args) {
        String service = "Informatics-Portal";
        int uptimeDays = 365;

        System.out.printf("%s онлайн %d дн.%n", service, uptimeDays);
    }
}`,
      tm: `public class ServerCheck {
    public static void main(String[] args) {
        String hyzmat = "Informatika-Portaly";
        int isWagty = 365;

        System.out.printf("%s onlaýn %d gün.%n", hyzmat, isWagty);
    }
}`,
    },
  },
  {
    id: 'sql',
    name: 'SQL',
    badge: 'SQL',
    color: 'from-emerald-400 to-teal-500',
    year: '1974',
    creator: 'Donald Chamberlin & Raymond Boyce',
    paradigm: {
      ru: 'Декларативный • Язык запросов к БД',
      tm: 'Deklaratiw • Maglumat bazasyna talap dili',
    },
    description: {
      ru: 'Универсальный язык общения с реляционными базами данных (PostgreSQL, MySQL, SQLite). Вы описываете, какие данные нужны, а СУБД сама находит их оптимально.',
      tm: 'Relýasion maglumat bazalary (PostgreSQL, MySQL, SQLite) bilen işleýän ählumumy dil. Siz näme gerekdigini aýdýarsyňyz, ulgam bolsa iň amatly ýol bilen tapýar.',
    },
    usedFor: [
      { ru: 'Хранение и поиск данных', tm: 'Maglumat saklamak we gözlemek' },
      { ru: 'Аналитика и отчёты', tm: 'Analitika we hasabatlar' },
      { ru: 'Финансовые и школьные базы', tm: 'Maliýe we mekdep bazalary' },
    ],
    difficulty: 3,
    difficultyLabel: { ru: 'Лёгкий старт (логика таблиц)', tm: 'Ýeňil başlangyç (tablisa logikasy)' },
    speed: 9,
    speedLabel: { ru: 'Сверхбыстрый поиск по индексам', tm: 'Indeksler boýunça örän çalt gözleg' },
    fileName: 'top_students.sql',
    syntaxLang: 'sql',
    code: {
      ru: `-- Топ-5 учеников по результатам викторины
SELECT full_name, class_room, score
FROM quiz_results
WHERE score >= 85
ORDER BY score DESC, finished_at ASC
LIMIT 5;`,
      tm: `-- Wiktorina netijeleri boýunça iň gowy 5 okuwçy
SELECT doly_ady, synpy, utuk
FROM wiktorina_netijeleri
WHERE utuk >= 85
ORDER BY utuk DESC, tamamlanan_wagty ASC
LIMIT 5;`,
    },
  },
];
