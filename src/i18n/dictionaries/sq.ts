import type { Dictionary } from './en'

const sq: Dictionary = {
  meta: {
    home: {
      title: 'Fiscalix — Studio për zhvillim softueri me porosi',
      description:
        'Fiscalix projekton dhe ndërton softuer me porosi për biznese në Kosovë dhe në Evropë: sisteme për menaxhimin e biznesit, aplikacione web dhe mobile, vegla të brendshme, faqe interneti dhe integrime.',
    },
    services: {
      title: 'Shërbimet — Softuer me porosi, zhvillim web dhe mobile',
      description:
        'Softuer me porosi, aplikacione web, aplikacione mobile, sisteme për menaxhimin e biznesit, vegla të brendshme, faqe interneti dhe automatizim — të ndërtuara sipas mënyrës si punon biznesi juaj.',
    },
    solutions: {
      title: 'Çfarë mund të ndërtojmë — Shembuj softuerësh për biznes',
      description:
        'Inventar, financa, CRM dhe ERP, portale për punonjës, rezervime, administratë shëndetësore, shitje me pakicë, prodhim dhe këmbimore — të projektuara dhe ndërtuara nga zero.',
    },
    work: {
      title: 'Punët tona — Projekte softuerike',
      description:
        'Projekte të zgjedhura nga Fiscalix: platformë për këmbimore, sistem menaxhimi për një kompani prodhuese, pikë shitjeje desktop për një dyqan dhe të tjera.',
    },
    about: {
      title: 'Rreth nesh — Studio e pavarur softueri nga Kosova',
      description:
        'Fiscalix është studio e pavarur për zhvillim softueri me bazë në Klinë, Kosovë, që punon me biznese vendore dhe ndërkombëtare në shqip, anglisht dhe gjermanisht.',
    },
    contact: {
      title: 'Nis një projekt — Kontakto Fiscalix',
      description: 'Na tregoni për biznesin tuaj dhe softuerin që ju nevojitet. I përgjigjemi personalisht çdo kërkese.',
    },
    legal: {
      title: 'Njoftim ligjor dhe privatësia',
      description: 'Të dhënat e kompanisë dhe njoftimi për privatësinë për faqen e Fiscalix.',
    },
  },

  nav: {
    home: 'Ballina',
    services: 'Shërbimet',
    solutions: 'Zgjidhjet',
    work: 'Punët tona',
    about: 'Rreth nesh',
    contact: 'Kontakti',
    menu: 'Menyja',
    close: 'Mbyll menynë',
    language: 'Gjuha',
    skip: 'Kalo te përmbajtja',
    main: 'Navigimi kryesor',
  },

  cta: {
    start: 'Nis një projekt',
    consult: 'Rezervo një konsultim',
    explore: 'Shiko punët tona',
    discuss: 'Diskuto një projekt të ngjashëm',
    allServices: 'Të gjitha shërbimet',
    allSolutions: 'Të gjitha zgjidhjet',
    allWork: 'Të gjitha projektet',
    howWeWork: 'Si punojmë',
  },

  hero: {
    headline: 'Ndërtojmë softuer sipas mënyrës si punon biznesi juaj.',
    lead:
      'Nga sistemet për menaxhimin e biznesit dhe platformat komplekse web, te aplikacionet mobile për ekipin tuaj — idetë dhe problemet operative i kthejmë në softuer të besueshëm që funksionon.',
    markets: 'Për biznese në Kosovë, Gjermani, Zvicër, Austri dhe më gjerë.',
    idea: 'Ideja juaj',
    built: 'Softueri i përfunduar',
    sliderLabel: 'Krahaso idenë me softuerin e përfunduar',
    notes: ['Të gjitha pikat në një listë', 'Kush i aprovon faturat?', 'Më njofto kur bie stoku', 'Kontabilisti i sheh të gjitha'],
  },

  services: {
    title: 'Softuer i ndërtuar rreth biznesit tuaj.',
    intro:
      'Asnjë biznes nuk punon njësoj, prandaj nuk nisim nga një shabllon. Mësojmë si funksionon biznesi juaj, pastaj projektojmë dhe ndërtojmë softuerin që i përshtatet.',
    typical: 'Çfarë përfshin zakonisht',
    items: [
      {
        id: 'custom',
        name: 'Zhvillim softueri me porosi',
        summary: 'Zgjidhje të plota, të projektuara dhe ndërtuara sipas kërkesave tuaja specifike.',
        detail:
          'Kur programet e gatshme ju detyrojnë të ndryshoni mënyrën si punoni, ne ndërtojmë softuer që ndjek procesin tuaj. Merremi me arkitekturën, ndërfaqen, backend-in dhe bazën e të dhënave, dhe dorëzojmë një produkt të përfunduar.',
        includes: [
          'Analizë e kërkesave dhe projektim i sistemit',
          'Zhvillim i frontend-it, backend-it dhe bazës së të dhënave',
          'Role, leje dhe gjurmë auditimi',
          'Vendosje në punë, dokumentim dhe dorëzim',
        ],
      },
      {
        id: 'web',
        name: 'Aplikacione web',
        summary: 'Aplikacione, platforma dhe portale web që punojnë në çdo shfletues.',
        detail:
          'Platforma me shumë përdorues, portale për klientë dhe sisteme komplekse në shfletues, të ndërtuara që të mbeten të shpejta ndërsa rriten të dhënat dhe ekipi — me punë pa internet aty ku lidhja nuk është e sigurt.',
        includes: [
          'Platforma me shumë përdorues dhe shumë pika',
          'Portale për klientë dhe partnerë',
          'Të dhëna në kohë reale dhe përditësime të menjëhershme',
          'Aplikacione web të instalueshme që punojnë pa internet',
        ],
      },
      {
        id: 'mobile',
        name: 'Zhvillim aplikacionesh mobile',
        summary: 'Aplikacione për klientët, punonjësit dhe operacionet tuaja të përditshme.',
        detail:
          'Aplikacione që i vënë veglat e duhura në duart e duhura: stafi në terren, ekipet e depos, menaxherët në lëvizje ose klientët që duan të rezervojnë dhe paguajnë nga telefoni.',
        includes: [
          'Aplikacione për punonjës dhe punë në terren',
          'Aplikacione për klientë',
          'Fotografim i dokumenteve dhe fotove',
          'Njoftime dhe aprovime kudo që të jeni',
        ],
      },
      {
        id: 'management',
        name: 'Sisteme për menaxhimin e biznesit',
        summary: 'ERP, CRM, faturim, inventar dhe sisteme financiare me porosi.',
        detail:
          'Një sistem për punën që e mban biznesin në këmbë — oferta, fatura, stok, furnitorë, shpenzime dhe raporte — i formësuar sipas produkteve tuaja, rregullave tuaja të çmimeve dhe nevojave të kontabilistit.',
        includes: [
          'Faturim, oferta dhe TVSH',
          'Menaxhim i inventarit dhe depos',
          'Klientë, furnitorë dhe shpenzime',
          'Qasje dhe eksporte për kontabilistin',
        ],
      },
      {
        id: 'internal',
        name: 'Aplikacione të brendshme për biznesin',
        summary: 'Vegla private për punonjësit, rrjedhat e punës, proceset dhe të dhënat.',
        detail:
          'Zëvendësoni tabelat Excel, formularët në letër dhe grupet e bisedave me një aplikacion privat që ekipi juaj e përdor vërtet. Rolet e qarta përcaktojnë kush sheh, ndryshon dhe aprovon çfarë.',
        includes: [
          'Portale për punonjës dhe orare',
          'Rrjedha aprovimi',
          'Leje sipas rolit dhe lokacionit',
          'Raporte të brendshme',
        ],
      },
      {
        id: 'websites',
        name: 'Faqe interneti dhe platforma digjitale',
        summary: 'Faqe profesionale, platforma biznesi dhe përvoja digjitale sipas masës.',
        detail:
          'Faqe të shpejta dhe shumëgjuhëshe që shpjegojnë çfarë bëni dhe sjellin kërkesa — të dizajnuara për markën tuaj, të ndërtuara për motorët e kërkimit dhe të lehta për t’i mbajtur të përditësuara.',
        includes: [
          'Faqe për kompani dhe produkte',
          'Përmbajtje në disa gjuhë',
          'Optimizim për motorët e kërkimit',
          'Formularë për rezervime dhe kërkesa',
        ],
      },
      {
        id: 'automation',
        name: 'Automatizim dhe integrime',
        summary: 'Lidhni sistemet tuaja dhe hiqni punën e përsëritur.',
        detail:
          'Lidhim softuerët që tashmë i përdorni — kontabilitetin, pagesat, dyqanet online, sistemet fiskale dhe API-të e palëve të treta — dhe automatizojmë hapat që ekipi juaj i përsërit çdo ditë.',
        includes: [
          'Zhvillim API-sh dhe integrime',
          'Sinkronizim i të dhënave mes sistemeve',
          'Dokumente dhe njoftime automatike',
          'Punë dhe raporte të planifikuara',
        ],
      },
    ],
  },

  solutions: {
    title: 'Çfarë mund të ndërtojmë',
    intro:
      'Një përzgjedhje e sistemeve që projektojmë dhe zhvillojmë. Secili ndërtohet nga zero për biznesin që e përdor.',
    disclaimer: 'Shembuj të asaj që mund të ndërtojmë për ju — jo produkte të gatshme.',
    filterLabel: 'Filtro shembujt',
    filters: {
      all: 'Të gjitha',
      operations: 'Operacione',
      finance: 'Financa',
      people: 'Ekipe dhe klientë',
      industry: 'Sipas industrisë',
    },
    items: [
      { id: 'inventory', category: 'operations', name: 'Menaxhim inventari dhe depoje', text: 'Stoku në të gjitha lokacionet, transferet, alarmet për stok të ulët dhe porositë te furnitorët.' },
      { id: 'finance', category: 'finance', name: 'Menaxhim financiar', text: 'Të hyrat, shpenzimet, TVSH-ja dhe rrjedha e parasë në një vend, gati për kontabilistin.' },
      { id: 'crm', category: 'operations', name: 'Aplikacione CRM dhe ERP', text: 'Klientë potencialë, oferta, porosi dhe historiku i klientëve, të lidhura me pjesën tjetër të punës.' },
      { id: 'employees', category: 'people', name: 'Portale për punonjës', text: 'Ndërrimet, kërkesat për pushim, dokumentet dhe njoftimet për çdo punonjës.' },
      { id: 'booking', category: 'people', name: 'Rezervime dhe termine', text: 'Rezervim online, kalendar për secilin anëtar të stafit, kujtesa dhe ndjekje e mungesave.' },
      { id: 'healthcare', category: 'industry', name: 'Administratë shëndetësore', text: 'Kartela pacientësh, vizita, radhë pritjeje dhe raporte për klinika dhe ordinanca.' },
      { id: 'retail', category: 'industry', name: 'Shitje me pakicë dhe shumicë', text: 'Pika e shitjes, skanim barkodi, lista çmimesh dhe porosi B2B.' },
      { id: 'printing', category: 'industry', name: 'Shtypshkronja dhe prodhim', text: 'Punët nga oferta te montimi: dizajni, CNC, shtypi, materialet dhe faturimi.' },
      { id: 'exchange', category: 'finance', name: 'Këmbimore valutore', text: 'Kurse për secilën pikë, para sipas valutës, mbyllje ditore dhe regjistër auditimi i pandryshueshëm.' },
      { id: 'dashboards', category: 'finance', name: 'Panele dhe raporte', text: 'Shifrat e të gjitha sistemeve në një ekran, të filtruara ashtu si vendosni ju.' },
      { id: 'internal', category: 'operations', name: 'Aplikacione të brendshme', text: 'Kërkesa, aprovime dhe lista kontrolli që zëvendësojnë Excel-in dhe letrën.' },
      { id: 'mobile', category: 'people', name: 'Aplikacione mobile për operacione', text: 'Dërgesa, inspektime dhe punë në terren, me foto, nënshkrime dhe punë pa internet.' },
    ],
  },

  work: {
    title: 'Punët tona',
    intro:
      'Sisteme që i kemi ndërtuar për klientë dhe për produktet tona. Secili nisi nga një problem konkret operativ.',
    homeTitle: 'Punë të zgjedhura',
    labels: {
      industry: 'Industria',
      type: 'Zgjidhja',
      status: 'Statusi',
      features: 'Çfarë bën',
      stack: 'Ndërtuar me',
      location: 'Lokacioni',
    },
    note: 'Emrat e klientëve i publikojmë vetëm me lejen e tyre.',
    projects: [
      {
        id: 'exchange',
        title: 'Platformë për operacionet e një këmbimoreje',
        industry: 'Shërbime financiare',
        type: 'Platformë web me punë pa internet dhe version desktop',
        location: 'Klinë, Kosovë',
        status: 'Në përdorim',
        summary:
          'Një këmbimore me dy pika i mbante kurset dhe transaksionet në Excel, ku shënimet mund të ndryshoheshin më vonë. E zëvendësuam me një sistem ku çdo transaksion është i përhershëm dhe çdo korrigjim është i dukshëm.',
        features: [
          'Kurse dhe stok parash të ndara për çdo pikë dhe valutë',
          'Role për pronarin dhe punonjësin, të zbatuara në server',
          'Transaksione të përhershme, korrigjim vetëm me stornim',
          'Mbyllje ditore për çdo valutë me diferencat e regjistruara',
          'Identifikim i klientit mbi 1.000 €',
          'Punon pa internet dhe sinkronizohet kur kthehet lidhja',
        ],
        stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'PWA', 'Electron'],
      },
      {
        id: 'printing',
        title: 'Menaxhim biznesi për një kompani CNC, shtypi dhe reklamash',
        industry: 'Prodhim dhe reklama',
        type: 'Sistem me porosi për menaxhimin e biznesit',
        location: 'Kosovë',
        status: 'Në zhvillim',
        summary:
          'Një kompani prodhuese B2B kishte nevojë për ofertat, faturat, stokun, klientët, furnitorët dhe shpenzimet në një vend — plus një hapësirë të veçantë ku kontabilisti shkarkon gjithçka pa pasur nevojë të pyesë.',
        features: [
          'Oferta që kthehen në fatura',
          'Ndjekje e materialeve dhe stokut',
          'Klientë dhe furnitorë',
          'Shpenzime si qiraja dhe rryma',
          'Hapësirë vetëm për kontabilistin, me shkarkime',
          'Me identitetin vizual të klientit',
        ],
        stack: [],
      },
      {
        id: 'platform',
        title: 'Platforma e biznesit Fiscalix',
        industry: 'Kontabilitet dhe shitje',
        type: 'Platformë web për shumë biznese — produkti ynë',
        location: 'Kosovë',
        status: 'Produkti ynë',
        summary:
          'Platformë për bizneset në Kosovë dhe kontabilistët e tyre: biznesi shet dhe faturon, kontabilisti punon në të njëjtat libra në kohë reale.',
        features: [
          'Fatura, shpenzime dhe raportim i TVSH-së',
          'Pikë shitjeje për dyqane, restorante dhe shërbime',
          'Stok, furnitorë dhe libri i blerjeve',
          'Portal për kontabilistin me përditësime të menjëhershme',
          'Paga, termine dhe portal për punonjës',
          'Të dhëna të ndara për çdo biznes me siguri në nivel rreshti',
        ],
        stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
      },
      {
        id: 'cosmetics',
        title: 'Pikë shitjeje desktop për një dyqan kozmetike',
        industry: 'Shitje me pakicë',
        type: 'Aplikacion desktop',
        location: 'Pejë, Kosovë',
        status: 'Projekt për klient',
        summary:
          'Sistem për shitje dhe produkte për një dyqan kozmetike, i ndërtuar për të llogaritur çmimet nga kostot e importit dhe për t’i dhënë kontabilistit të dhëna të pastra.',
        features: [
          'Skanim barkodi në arkë',
          'Çmime të llogaritura nga TVSH-ja, dogana dhe marzha',
          'Import masiv i produkteve nga CSV',
          'Raporte shitjesh',
          'Eksport në Excel për kontabilistin',
        ],
        stack: ['Electron', 'React', 'SQLite'],
      },
    ],
  },

  process: {
    title: 'Si punojmë',
    intro: 'Një proces i qartë, nga biseda e parë deri shumë kohë pas lansimit.',
    steps: [
      { name: 'Njohja', text: 'Mësojmë si punon biznesi juaj, çfarë e ngadalëson dhe çfarë duhet të arrijë softueri.' },
      { name: 'Strategjia dhe planifikimi', text: 'Përcaktojmë zgjidhjen, arkitekturën, funksionet dhe një plan të qartë mbi të cilin mund të planifikoni.' },
      { name: 'Dizajni dhe zhvillimi', text: 'Dizajnojmë dhe ndërtojmë në hapa të shkurtër, që ta shihni softuerin duke punuar herët dhe shpesh.' },
      { name: 'Testimi dhe dorëzimi', text: 'Testojmë me skenarë realë, përmirësojmë, vendosim në punë dhe dorëzojmë një produkt të përfunduar e të dokumentuar.' },
      { name: 'Mbështetje e vazhdueshme', text: 'Mbetemi në dispozicion për përmirësime, mirëmbajtje dhe mbështetje teknike sa herë që ju nevojitet.' },
    ],
  },

  why: {
    title: 'Pse bizneset punojnë me Fiscalix',
    statement:
      'Flisni drejtpërdrejt me njerëzit që e projektojnë dhe e ndërtojnë softuerin tuaj. Asgjë nuk humbet mes asaj që ju duhet dhe asaj që ndërtohet.',
    items: [
      { title: 'Ndërtuar për biznesin tuaj', text: 'Softuer i formësuar sipas proceseve tuaja, jo e kundërta.' },
      { title: 'Zhvillim i plotë', text: 'Arkitekturë, ndërfaqe, backend, bazë të dhënash dhe vendosje në punë nga një ekip i vetëm.' },
      { title: 'Komunikim i drejtpërdrejtë', text: 'Pyetjet tuaja shkojnë drejt te njerëzit që shkruajnë kodin.' },
      { title: 'Arkitekturë që rritet', text: 'Sisteme të projektuara për më shumë përdorues, pika dhe të dhëna.' },
      { title: 'Teknologji moderne e provuar', text: 'Vegla me mbështetje të mirë, të zgjedhura për besueshmëri, jo për modë.' },
      { title: 'Problemet reale në plan të parë', text: 'Nisim nga ajo që ju kushton kohë dhe para, jo nga një listë funksionesh.' },
      { title: 'Proces që mund ta ndiqni', text: 'Afate të qarta dhe prezantime të rregullta, që dorëzimi të mos sjellë surpriza.' },
      { title: 'Partner afatgjatë', text: 'E mirëmbajmë dhe e zgjerojmë atë që ndërtojmë, sa kohë t’ju nevojitet.' },
    ],
  },

  tech: {
    title: 'Inxhinieria pas punës',
    intro: 'Teknologjitë e projekteve tona të fundit, të renditura sipas shtresës së sistemit që shërbejnë.',
    layers: [
      { name: 'Ndërfaqja', text: 'Ajo që ekipi dhe klientët tuaj përdorin çdo ditë.', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Aplikacione web të instalueshme', 'Aplikacione desktop me Electron'] },
      { name: 'Aplikacioni dhe API-të', text: 'Logjika e biznesit, lejet dhe lidhjet me sisteme të tjera.', items: ['Node.js', 'Express', 'REST API', 'Integrime me palë të treta'] },
      { name: 'Të dhënat', text: 'Ku jeton informacioni juaj, i qëndrueshëm dhe i mbrojtur.', items: ['PostgreSQL', 'Supabase', 'SQLite', 'IndexedDB', 'Sinkronizim në kohë reale'] },
      { name: 'Infrastruktura dhe dorëzimi', text: 'Si vendoset në punë, si funksionon dhe si përditësohet softueri.', items: ['Vercel', 'Docker', 'Supabase Cloud', 'Versione për Windows dhe macOS'] },
    ],
    practicesTitle: 'Të përfshira që në fillim',
    practices: [
      'Kontroll i qasjes sipas roleve',
      'Siguri në nivel rreshti për të dhëna të shumë bizneseve',
      'Regjistra auditimi kundër manipulimit',
      'Punë pa internet si parim',
    ],
  },

  international: {
    title: 'Nga Kosova, për biznese në gjithë Evropën.',
    text:
      'Punojmë me biznese në Kosovë dhe jashtë saj, me fokus të veçantë te tregjet gjermanofolëse. Projektet zhvillohen në distancë, me thirrje të rregullta dhe një pasqyrë të përbashkët të ecurisë.',
    markets: ['Kosova', 'Gjermania', 'Zvicra', 'Austria', 'Ndërkombëtarisht'],
    points: [
      { title: 'E njëjta ditë pune', text: 'Kosova është në orën e Evropës Qendrore — të njëjtat orë si Berlini, Vjena dhe Cyrihu.' },
      { title: 'Tri gjuhë pune', text: 'Punojmë në shqip, anglisht dhe gjermanisht.' },
      { title: 'Ndërtuar për punë në distancë', text: 'Video-thirrje, tabela të përbashkëta projekti dhe prezantime të rregullta ju mbajnë afër punës.' },
      { title: 'Në euro', text: 'Fushëveprimi merret vesh me shkrim dhe faturohet në euro.' },
    ],
    clockLabel: 'Ora lokale tani',
    cities: ['Klinë', 'Berlin', 'Cyrih', 'Vjenë'],
  },

  contact: {
    title: 'Keni një ide? Le ta ndërtojmë.',
    lead:
      'Na tregoni për biznesin tuaj, sfidat që keni ose softuerin që keni në mendje. Do t’ju ndihmojmë ta ktheni në një zgjidhje që funksionon.',
    next: {
      title: 'Çfarë ndodh më pas',
      steps: [
        'E lexojmë mesazhin tuaj dhe ju përgjigjemi personalisht.',
        'Caktojmë një bisedë për të kuptuar çfarë ju nevojitet.',
        'Merrni një ofertë me fushëveprimin, afatin dhe çmimin.',
      ],
    },
    direct: {
      title: 'Preferoni të flasim drejtpërdrejt?',
      email: 'Email',
      whatsapp: 'WhatsApp',
      office: 'Zyra',
    },
    form: {
      title: 'Detajet e projektit',
      name: 'Emri dhe mbiemri',
      namePh: 'Emri juaj',
      email: 'Email',
      emailPh: 'emri@kompania.com',
      company: 'Kompania',
      companyPh: 'Emri i kompanisë',
      country: 'Shteti',
      countryPh: 'Ku e ka selinë biznesi juaj?',
      projectType: 'Lloji i projektit',
      choose: 'Zgjidhni një',
      budget: 'Buxheti i përafërt',
      description: 'Përshkrimi i projektit',
      descriptionPh: 'Çfarë duhet të bëjë softueri? Kush do ta përdorë? A ka ndonjë afat?',
      optional: 'opsionale',
      submit: 'Dërgo detajet e projektit',
      sending: 'Duke u dërguar…',
      consent: 'Të dhënat tuaja i përdorim vetëm për t’iu përgjigjur kërkesës. Lexoni',
      consentLink: 'njoftimin për privatësinë',
      types: {
        custom: 'Softuer me porosi',
        web: 'Aplikacion web',
        mobile: 'Aplikacion mobil',
        management: 'Sistem për menaxhimin e biznesit',
        internal: 'Aplikacion i brendshëm',
        website: 'Faqe interneti ose platformë digjitale',
        automation: 'Automatizim dhe integrime',
        consultation: 'Konsultim',
        unsure: 'Ende nuk e di',
      },
      budgets: ['Nën 5.000 €', '5.000 – 15.000 €', '15.000 – 50.000 €', 'Mbi 50.000 €', 'Ende nuk e di'],
      countries: ['Kosova', 'Gjermania', 'Zvicra', 'Austria', 'Shqipëria', 'Maqedonia e Veriut'],
      errors: {
        summary: 'Kontrolloni fushat e shënuara dhe provoni sërish.',
        name: 'Shkruani emrin tuaj.',
        email: 'Shkruani një adresë email të vlefshme.',
        country: 'Shkruani shtetin ku e ka selinë biznesi juaj.',
        projectType: 'Zgjidhni llojin e projektit.',
        description: 'Përshkruani projektin me të paktën 20 karaktere.',
      },
      success: {
        title: 'Faleminderit — detajet e projektit u dërguan.',
        text: 'Do t’ju përgjigjemi në {email} sa më shpejt. Për gjëra urgjente, na shkruani në WhatsApp.',
        again: 'Dërgo një kërkesë tjetër',
      },
      failure: {
        title: 'Mesazhi nuk u dërgua.',
        text: 'Asgjë nuk ka humbur. Dërgoni të njëjtat detaje në WhatsApp ose provoni sërish pas pak.',
        whatsapp: 'Dërgo me WhatsApp',
        retry: 'Provo sërish',
      },
      whatsappIntro: 'Përshëndetje Fiscalix, dua të diskutoj një projekt.',
    },
  },

  about: {
    title: 'Studio e pavarur softueri nga Kosova.',
    lead:
      'Fiscalix projekton dhe zhvillon softuer me porosi për biznese që i kanë tejkaluar tabelat Excel, letrën dhe programet e përgjithshme.',
    story: [
      'Nisëm duke ndërtuar softuer për bizneset përreth nesh në Kosovë: dyqane, restorante, këmbimore, kompani prodhuese dhe kontabilistë. Çdo projekt na mësoi të njëjtën gjë — softueri më i mirë ndërtohet rreth mënyrës si punojnë njerëzit në të vërtetë.',
      'Sot marrim përsipër projekte të çdo madhësie, nga një faqe interneti për biznes te platforma me shumë pika, me punë pa internet, integrim fiskal dhe kërkesa strikte auditimi. Punojmë me klientë në Kosovë dhe ndërkombëtarisht, në shqip, anglisht dhe gjermanisht.',
    ],
    principlesTitle: 'Ku qëndrojmë',
    principles: [
      { title: 'Kuptojmë para se të ndërtojmë', text: 'Ditët e para ia kushtojmë biznesit tuaj, jo kodit. Softueri i mirë nis me pyetjet e duhura.' },
      { title: 'Softueri është vegël', text: 'Duhet të kursejë kohë, të ulë gabimet dhe t’i bëjë shifrat tuaja të besueshme. Çdo gjë tjetër është zbukurim.' },
      { title: 'Ndërtojmë për afat të gjatë', text: 'Arkitekturë e pastër dhe dokumentim, që sistemi juaj të rritet për vite me radhë.' },
      { title: 'E themi qartë', text: 'Gjuhë e qartë, afate realiste dhe pa zhargon teknik që nuk ju duhet.' },
    ],
    factsTitle: 'Shkurtimisht',
    facts: [
      { label: 'Kompania', value: 'Fiscalix SH.P.K.' },
      { label: 'Selia', value: 'Klinë, Kosovë' },
      { label: 'Gjuhët e punës', value: 'Shqip, anglisht, gjermanisht' },
      { label: 'Klientët', value: 'Në Kosovë dhe ndërkombëtarë' },
    ],
  },

  legal: {
    title: 'Njoftim ligjor dhe privatësia',
    companyTitle: 'Të dhënat e kompanisë',
    company: {
      name: 'Kompania',
      nui: 'Numri unik identifikues (NUI)',
      address: 'Adresa e regjistruar',
      registry: 'E regjistruar në',
      registryValue: 'Agjencia e Regjistrimit të Bizneseve të Kosovës (ARBK)',
      email: 'Email',
      phone: 'Telefon dhe WhatsApp',
    },
    privacyTitle: 'Njoftim për privatësinë',
    privacy: [
      'Kjo faqe nuk përdor analitikë, reklama ose cookies për gjurmim. Një cookie funksionale mban mend gjuhën që zgjidhni.',
      'Kur dërgoni formularin e kontaktit, marrim emrin, adresën email, kompaninë, shtetin, llojin e projektit, buxhetin e përafërt dhe mesazhin tuaj. Këto të dhëna i përdorim vetëm për t’iu përgjigjur kërkesës dhe për të përgatitur një ofertë. Nuk i shesim dhe nuk i ndajmë me palë të treta për marketing.',
      'Mesazhet e formularit dërgohen në postën tonë përmes ofruesit tonë të shërbimit email. Faqja mbahet në serverët e Vercel.',
      'Mund të kërkoni në çdo kohë t’i shihni, t’i korrigjoni ose t’i fshini të dhënat tuaja duke na shkruar në {email}.',
    ],
    updated: 'Përditësuar së fundi: tetor 2026',
  },

  footer: {
    tagline: 'Softuer me porosi, i ndërtuar në Kosovë për biznese kudo.',
    rights: 'Të gjitha të drejtat e rezervuara.',
    legal: 'Njoftim ligjor dhe privatësia',
    studio: 'Studio',
    contact: 'Kontakti',
    backToTop: 'Kthehu lart',
  },


  mock: {
    app: {
      nav: ['Përmbledhja', 'Porositë', 'Inventari', 'Faturat', 'Ekipi'],
      search: 'Kërko',
      newOrder: 'Porosi e re',
      kpis: ['Porosi të hapura', 'Të hyrat këtë muaj', 'Stok i ulët'],
      chart: 'Porositë në javë',
      table: 'Porositë e fundit',
      cols: ['Porosia', 'Klienti', 'Pika', 'Statusi', 'Totali'],
      status: { paid: 'Paguar', pending: 'Në pritje', ready: 'Gati' },
      branch: 'Pika',
      live: 'Live',
    },
    svc: {
      layers: ['Ndërfaqja', 'API', 'Baza e të dhënave', 'Integrimet', 'Rolet dhe qasja'],
      today: 'Sot',
      tasks: ['Dërgesë te Marketi 2', 'Inspektim në terren', 'Merr nënshkrimin'],
      newTask: 'Detyrë e re e caktuar',
      invoice: 'Faturë',
      subtotal: 'Nëntotali',
      vat: 'TVSH 18%',
      total: 'Totali',
      roles: ['Pronari', 'Menaxheri', 'Stafi', 'Kontabilisti'],
      perms: ['Shitje', 'Stok', 'Raporte', 'Cilësime'],
      flow: ['Porosi e re', 'Kontrollo stokun', 'Krijo faturën', 'Njofto kontabilistin'],
      desktop: 'Desktop',
      mobile: 'Mobil',
    },
    words: {
      inStock: 'Në stok',
      low: 'I ulët',
      reorder: 'Porosit',
      income: 'Të hyrat',
      expenses: 'Shpenzimet',
      cash: 'Rrjedha e parasë',
      leads: 'Kontakte',
      offers: 'Oferta',
      won: 'Fituar',
      shift: 'Ndërrimi',
      leave: 'Kërkesë për pushim',
      approved: 'Aprovuar',
      pending: 'Në pritje',
      waiting: 'Në pritje',
      inRoom: 'Në ordinancë',
      done: 'Kryer',
      total: 'Totali',
      pay: 'Paguaj',
      scan: 'Skano barkodin',
      design: 'Dizajn',
      cnc: 'CNC',
      print: 'Shtyp',
      install: 'Montim',
      buy: 'Blerje',
      sell: 'Shitje',
      closing: 'Mbyllja ditore',
      revenue: 'Të hyrat',
      request: 'Kërkesë',
      approve: 'Aprovo',
      offline: 'Pa internet — ruajtur',
      synced: 'Sinkronizuar',
      margin: 'Marzha',
      customs: 'Dogana',
      accountant: 'Kontabilisti',
      liveSync: 'Sinkronizim live',
      today: 'Sot',
      week: 'Këtë javë',
    },
  },
}

export default sq
