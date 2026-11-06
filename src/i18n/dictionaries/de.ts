import type { Dictionary } from './en'

const de: Dictionary = {
  meta: {
    home: {
      title: 'Fiscalix — Studio für individuelle Softwareentwicklung',
      description:
        'Fiscalix konzipiert und entwickelt individuelle Software für Unternehmen im Kosovo und in ganz Europa: Unternehmenssoftware, Web- und Mobile-Apps, interne Tools, Websites und Integrationen.',
    },
    services: {
      title: 'Leistungen — Individuelle Software, Web- und App-Entwicklung',
      description:
        'Individualsoftware, Webanwendungen, mobile Apps, Unternehmenssoftware, interne Anwendungen, Websites und Automatisierung — entwickelt rund um die Abläufe Ihres Unternehmens.',
    },
    solutions: {
      title: 'Was wir entwickeln — Beispiele für Unternehmenssoftware',
      description:
        'Lager, Finanzen, CRM und ERP, Mitarbeiterportale, Terminbuchung, Praxisverwaltung, Handel, Produktion und Wechselstuben — von Grund auf konzipiert und entwickelt.',
    },
    work: {
      title: 'Projekte — Softwareprojekte von Fiscalix',
      description:
        'Ausgewählte Projekte von Fiscalix: eine Plattform für Wechselstuben, Unternehmenssoftware für einen Produktionsbetrieb, eine Desktop-Kasse für einen Händler und mehr.',
    },
    about: {
      title: 'Über uns — Ein unabhängiges Softwarestudio aus dem Kosovo',
      description:
        'Fiscalix ist ein unabhängiges Studio für Softwareentwicklung mit Sitz in Klina, Kosovo, und arbeitet mit Unternehmen vor Ort und international — auf Albanisch, Englisch und Deutsch.',
    },
    contact: {
      title: 'Projekt starten — Kontakt zu Fiscalix',
      description:
        'Erzählen Sie uns von Ihrem Unternehmen und der Software, die Sie brauchen. Wir antworten persönlich auf jede Anfrage.',
    },
    legal: {
      title: 'Impressum & Datenschutz',
      description: 'Unternehmensangaben und Datenschutzhinweise für die Website von Fiscalix.',
    },
  },

  nav: {
    home: 'Start',
    services: 'Leistungen',
    solutions: 'Lösungen',
    work: 'Projekte',
    about: 'Über uns',
    contact: 'Kontakt',
    menu: 'Menü',
    close: 'Menü schließen',
    language: 'Sprache',
    skip: 'Zum Inhalt springen',
    main: 'Hauptnavigation',
  },

  cta: {
    start: 'Projekt starten',
    consult: 'Erstgespräch vereinbaren',
    explore: 'Projekte ansehen',
    discuss: 'Ähnliches Projekt besprechen',
    allServices: 'Alle Leistungen',
    allSolutions: 'Alle Lösungen',
    allWork: 'Alle Projekte',
    howWeWork: 'So arbeiten wir',
  },

  hero: {
    headline: 'Software, die sich Ihrem Unternehmen anpasst — nicht umgekehrt.',
    lead:
      'Von Unternehmenssoftware und komplexen Webplattformen bis zu mobilen Apps für Ihr Team: Wir machen aus Ideen und betrieblichen Problemen zuverlässige Software, die funktioniert.',
    markets: 'Für Unternehmen im Kosovo, in Deutschland, der Schweiz, Österreich und darüber hinaus.',
    idea: 'Ihre Idee',
    built: 'Fertige Software',
    sliderLabel: 'Idee und fertige Software vergleichen',
    notes: ['Alle Filialen in einer Liste', 'Wer gibt Rechnungen frei?', 'Warnung bei niedrigem Bestand', 'Steuerberater sieht alles'],
  },

  services: {
    title: 'Software, gebaut um Ihr Unternehmen herum.',
    intro:
      'Kein Unternehmen arbeitet wie das andere. Deshalb beginnen wir nicht mit einer Vorlage, sondern mit Ihren Abläufen — und entwickeln dann die Software, die genau dazu passt.',
    typical: 'Typische Aufgaben',
    items: [
      {
        id: 'custom',
        name: 'Individuelle Softwareentwicklung',
        summary: 'Komplette Lösungen, konzipiert und entwickelt nach Ihren konkreten Anforderungen.',
        detail:
          'Wenn Standardsoftware Sie zwingt, Ihre Arbeitsweise zu ändern, entwickeln wir Software, die Ihrem Prozess folgt. Architektur, Oberfläche, Backend und Datenbank kommen aus einer Hand — geliefert wird ein fertiges Produkt.',
        includes: [
          'Anforderungsanalyse und Systemdesign',
          'Frontend-, Backend- und Datenbankentwicklung',
          'Rollen, Berechtigungen und Audit-Trails',
          'Inbetriebnahme, Dokumentation und Übergabe',
        ],
      },
      {
        id: 'web',
        name: 'Webanwendungen',
        summary: 'Skalierbare Web-Apps, Plattformen und Portale, die in jedem Browser laufen.',
        detail:
          'Mehrbenutzer-Plattformen, Kundenportale und komplexe browserbasierte Systeme, die auch mit wachsenden Datenmengen und Teams schnell bleiben — mit Offline-Betrieb, wo die Verbindung unzuverlässig ist.',
        includes: [
          'Plattformen für mehrere Benutzer und Standorte',
          'Kunden- und Partnerportale',
          'Echtzeitdaten und Live-Aktualisierungen',
          'Installierbare, offlinefähige Web-Apps',
        ],
      },
      {
        id: 'mobile',
        name: 'Entwicklung mobiler Apps',
        summary: 'Apps für Ihre Kunden, Ihre Mitarbeitenden und Ihr Tagesgeschäft.',
        detail:
          'Apps, die die richtigen Werkzeuge in die richtigen Hände legen: Außendienst, Lagerteams, Führungskräfte unterwegs oder Kunden, die per Smartphone buchen und bezahlen möchten.',
        includes: [
          'Apps für Mitarbeitende und Außendienst',
          'Apps für Kunden',
          'Erfassung von Dokumenten und Fotos',
          'Benachrichtigungen und Freigaben unterwegs',
        ],
      },
      {
        id: 'management',
        name: 'Unternehmenssoftware',
        summary: 'Individuelle ERP-, CRM-, Rechnungs-, Lager- und Finanzsysteme.',
        detail:
          'Ein System für alles, was Ihren Betrieb am Laufen hält — Angebote, Rechnungen, Lager, Lieferanten, Ausgaben und Berichte — abgestimmt auf Ihre Produkte, Ihre Preislogik und die Anforderungen Ihrer Buchhaltung.',
        includes: [
          'Rechnungen, Angebote und Mehrwertsteuer',
          'Lager- und Bestandsverwaltung',
          'Kunden, Lieferanten und Ausgaben',
          'Zugang und Exporte für die Buchhaltung',
        ],
      },
      {
        id: 'internal',
        name: 'Interne Unternehmensanwendungen',
        summary: 'Eigene Tools für Mitarbeitende, Arbeitsabläufe, Prozesse und Daten.',
        detail:
          'Ersetzen Sie Tabellen, Papierformulare und Gruppenchats durch eine eigene Anwendung, die Ihr Team tatsächlich nutzt. Klare Rollen regeln, wer was sehen, ändern und freigeben darf.',
        includes: [
          'Mitarbeiterportale und Dienstpläne',
          'Freigabe-Workflows',
          'Berechtigungen nach Rolle und Standort',
          'Interne Berichte',
        ],
      },
      {
        id: 'websites',
        name: 'Websites & digitale Plattformen',
        summary: 'Professionelle Websites, Geschäftsplattformen und maßgeschneiderte digitale Erlebnisse.',
        detail:
          'Schnelle, mehrsprachige Websites, die verständlich erklären, was Sie tun, und Anfragen bringen — gestaltet für Ihre Marke, optimiert für Suchmaschinen und einfach aktuell zu halten.',
        includes: [
          'Unternehmens- und Produktwebsites',
          'Mehrsprachige Inhalte',
          'Suchmaschinenoptimierung',
          'Buchungs- und Anfrageformulare',
        ],
      },
      {
        id: 'automation',
        name: 'Automatisierung & Integrationen',
        summary: 'Verbinden Sie Ihre Systeme und sparen Sie sich wiederkehrende Arbeit.',
        detail:
          'Wir verbinden die Software, die Sie bereits nutzen — Buchhaltung, Zahlungen, Onlineshops, Fiskalsysteme und externe APIs — und automatisieren die Schritte, die Ihr Team jeden Tag wiederholt.',
        includes: [
          'API-Entwicklung und Integrationen',
          'Datenabgleich zwischen Systemen',
          'Automatische Dokumente und Benachrichtigungen',
          'Geplante Aufgaben und Berichte',
        ],
      },
    ],
  },

  solutions: {
    title: 'Was wir entwickeln können',
    intro:
      'Eine Auswahl der Systeme, die wir konzipieren und entwickeln. Jedes entsteht von Grund auf für das Unternehmen, das es nutzt.',
    disclaimer: 'Beispiele dafür, was wir für Sie entwickeln können — keine Fertigprodukte.',
    filterLabel: 'Beispiele filtern',
    filters: {
      all: 'Alle',
      operations: 'Betrieb',
      finance: 'Finanzen',
      people: 'Teams & Kunden',
      industry: 'Branchenlösungen',
    },
    items: [
      { id: 'inventory', category: 'operations', name: 'Lager- und Bestandsverwaltung', text: 'Bestände über alle Standorte, Umbuchungen, Mindestbestandswarnungen und Bestellungen bei Lieferanten.' },
      { id: 'finance', category: 'finance', name: 'Finanzverwaltung', text: 'Einnahmen, Ausgaben, Mehrwertsteuer und Liquidität an einem Ort — bereit für die Buchhaltung.' },
      { id: 'crm', category: 'operations', name: 'CRM- und ERP-Anwendungen', text: 'Leads, Angebote, Aufträge und Kundenhistorie, verbunden mit dem übrigen Betrieb.' },
      { id: 'employees', category: 'people', name: 'Mitarbeiterportale', text: 'Schichten, Urlaubsanträge, Dokumente und Mitteilungen für alle Mitarbeitenden.' },
      { id: 'booking', category: 'people', name: 'Buchungen & Termine', text: 'Online-Buchung, ein Kalender pro Mitarbeitendem, Erinnerungen und Ausfallübersicht.' },
      { id: 'healthcare', category: 'industry', name: 'Praxis- und Klinikverwaltung', text: 'Patientenakten, Besuche, Wartelisten und Berichte für Kliniken und Praxen.' },
      { id: 'retail', category: 'industry', name: 'Einzel- und Großhandel', text: 'Kasse, Barcode-Scan, Preislisten und B2B-Bestellungen.' },
      { id: 'printing', category: 'industry', name: 'Druck & Produktion', text: 'Aufträge vom Angebot bis zur Montage: Gestaltung, CNC, Druck, Material und Rechnung.' },
      { id: 'exchange', category: 'finance', name: 'Wechselstuben', text: 'Kurse pro Filiale, Bargeld pro Währung, Tagesabschluss und ein unveränderliches Protokoll.' },
      { id: 'dashboards', category: 'finance', name: 'Dashboards & Berichte', text: 'Aktuelle Zahlen aus all Ihren Systemen auf einem Bildschirm, gefiltert nach Ihren Vorgaben.' },
      { id: 'internal', category: 'operations', name: 'Interne Anwendungen', text: 'Anträge, Freigaben und Checklisten statt Tabellen und Papier.' },
      { id: 'mobile', category: 'people', name: 'Mobile Apps für den Betrieb', text: 'Lieferungen, Prüfungen und Außendienst — mit Fotos, Unterschriften und Offline-Modus.' },
    ],
  },

  work: {
    title: 'Projekte',
    intro:
      'Systeme, die wir für Kunden und für unsere eigenen Produkte entwickelt haben. Am Anfang stand jeweils ein konkretes betriebliches Problem.',
    homeTitle: 'Ausgewählte Projekte',
    labels: {
      industry: 'Branche',
      type: 'Lösung',
      status: 'Status',
      features: 'Was es leistet',
      stack: 'Technologien',
      location: 'Standort',
    },
    note: 'Kundennamen nennen wir nur mit deren Zustimmung.',
    projects: [
      {
        id: 'exchange',
        title: 'Betriebsplattform für eine Wechselstube',
        industry: 'Finanzdienstleistungen',
        type: 'Webplattform mit Offline- und Desktop-Modus',
        location: 'Klina, Kosovo',
        status: 'Im Produktivbetrieb',
        summary:
          'Eine Wechselstube mit zwei Filialen führte Kurse und Transaktionen in Excel — Einträge ließen sich nachträglich ändern. Wir haben das durch ein System ersetzt, in dem jede Transaktion dauerhaft ist und jede Korrektur sichtbar bleibt.',
        features: [
          'Eigene Kurse und Bargeldbestände pro Filiale und Währung',
          'Rollen für Inhaber und Mitarbeitende, serverseitig durchgesetzt',
          'Unveränderliche Transaktionen, Korrektur nur per Storno',
          'Tagesabschluss pro Währung mit dokumentierten Differenzen',
          'Kundenidentifikation ab 1.000 €',
          'Arbeitet offline weiter und synchronisiert, sobald die Verbindung zurück ist',
        ],
        stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'PWA', 'Electron'],
      },
      {
        id: 'printing',
        title: 'Unternehmenssoftware für einen CNC-, Druck- und Werbebetrieb',
        industry: 'Produktion & Werbung',
        type: 'Individuelle Unternehmenssoftware',
        location: 'Kosovo',
        status: 'In Entwicklung',
        summary:
          'Ein B2B-Produktionsbetrieb brauchte Angebote, Rechnungen, Lager, Kunden, Lieferanten und laufende Kosten an einem Ort — plus einen eigenen Bereich, in dem die Buchhaltung alles selbst herunterlädt.',
        features: [
          'Angebote, die zu Rechnungen werden',
          'Material- und Lagerverwaltung',
          'Kunden und Lieferanten',
          'Laufende Kosten wie Miete und Strom',
          'Eigener Bereich für die Buchhaltung mit Downloads',
          'Im Erscheinungsbild des Kunden',
        ],
        stack: [],
      },
      {
        id: 'platform',
        title: 'Fiscalix-Geschäftsplattform',
        industry: 'Buchhaltung & Handel',
        type: 'Mandantenfähige Webplattform — unser eigenes Produkt',
        location: 'Kosovo',
        status: 'Eigenes Produkt',
        summary:
          'Eine Plattform für Unternehmen im Kosovo und ihre Buchhalter: Das Unternehmen verkauft und stellt Rechnungen, die Buchhaltung arbeitet in Echtzeit in denselben Büchern.',
        features: [
          'Rechnungen, Ausgaben und Mehrwertsteuer-Meldungen',
          'Kasse für Geschäfte, Restaurants und Dienstleister',
          'Lager, Lieferanten und Einkaufsjournal',
          'Portal für die Buchhaltung mit Live-Aktualisierung',
          'Lohnabrechnung, Termine und Mitarbeiterportal',
          'Daten pro Unternehmen getrennt durch Row-Level Security',
        ],
        stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
      },
      {
        id: 'cosmetics',
        title: 'Desktop-Kasse für einen Kosmetikhändler',
        industry: 'Einzelhandel',
        type: 'Desktop-Anwendung',
        location: 'Peja, Kosovo',
        status: 'Kundenprojekt',
        summary:
          'Ein Kassen- und Artikelsystem für ein Kosmetikgeschäft, das Preise aus Importkosten berechnet und der Buchhaltung saubere Daten liefert.',
        features: [
          'Barcode-Scan an der Kasse',
          'Preise aus Mehrwertsteuer, Zoll und Marge berechnet',
          'Artikelimport per CSV',
          'Verkaufsberichte',
          'Excel-Export für die Buchhaltung',
        ],
        stack: ['Electron', 'React', 'SQLite'],
      },
    ],
  },

  process: {
    title: 'So arbeiten wir',
    intro: 'Ein klarer Ablauf — vom ersten Gespräch bis weit nach dem Start.',
    steps: [
      { name: 'Analyse', text: 'Wir verstehen, wie Ihr Unternehmen arbeitet, was es bremst und was die Software leisten muss.' },
      { name: 'Strategie & Planung', text: 'Wir legen Lösung, Architektur, Funktionen und eine Roadmap fest, mit der Sie planen können.' },
      { name: 'Design & Entwicklung', text: 'Wir gestalten und entwickeln in kurzen Etappen — Sie sehen früh und regelmäßig funktionierende Software.' },
      { name: 'Test & Übergabe', text: 'Wir testen mit echten Szenarien, verfeinern, gehen live und übergeben ein fertiges, dokumentiertes Produkt.' },
      { name: 'Laufende Betreuung', text: 'Wir bleiben für Weiterentwicklung, Wartung und technischen Support da, wann immer Sie uns brauchen.' },
    ],
  },

  why: {
    title: 'Warum Unternehmen mit Fiscalix arbeiten',
    statement:
      'Sie sprechen direkt mit den Menschen, die Ihre Software konzipieren und entwickeln. Zwischen Ihrem Bedarf und dem Ergebnis geht nichts verloren.',
    items: [
      { title: 'Für Ihr Unternehmen gebaut', text: 'Software, die sich nach Ihren Prozessen richtet — nicht umgekehrt.' },
      { title: 'Alles aus einer Hand', text: 'Architektur, Oberfläche, Backend, Datenbank und Betrieb von einem Team.' },
      { title: 'Direkte Kommunikation', text: 'Ihre Fragen gehen direkt an die Menschen, die den Code schreiben.' },
      { title: 'Skalierbare Architektur', text: 'Systeme, die mit mehr Nutzern, Standorten und Daten mitwachsen.' },
      { title: 'Moderne, bewährte Technologie', text: 'Gut unterstützte Werkzeuge, ausgewählt nach Zuverlässigkeit statt nach Trends.' },
      { title: 'Echte Probleme zuerst', text: 'Wir beginnen bei dem, was Sie Zeit und Geld kostet — nicht bei einer Funktionsliste.' },
      { title: 'Ein nachvollziehbarer Ablauf', text: 'Klare Meilensteine und regelmäßige Demos, damit die Übergabe keine Überraschungen bringt.' },
      { title: 'Langfristige Partnerschaft', text: 'Wir warten und erweitern, was wir bauen — so lange Sie es brauchen.' },
    ],
  },

  tech: {
    title: 'Die Technik hinter der Arbeit',
    intro: 'Technologien aus unseren aktuellen Projekten, geordnet nach der Systemebene, für die sie stehen.',
    layers: [
      { name: 'Oberfläche', text: 'Was Ihr Team und Ihre Kunden täglich nutzen.', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Installierbare Web-Apps', 'Electron-Desktop-Apps'] },
      { name: 'Anwendung & APIs', text: 'Geschäftslogik, Berechtigungen und Anbindung an andere Systeme.', items: ['Node.js', 'Express', 'REST-APIs', 'Externe Integrationen'] },
      { name: 'Daten', text: 'Wo Ihre Informationen liegen — konsistent und geschützt.', items: ['PostgreSQL', 'Supabase', 'SQLite', 'IndexedDB', 'Echtzeit-Synchronisation'] },
      { name: 'Infrastruktur & Auslieferung', text: 'Wie die Software bereitgestellt, betrieben und aktualisiert wird.', items: ['Vercel', 'Docker', 'Supabase Cloud', 'Builds für Windows und macOS'] },
    ],
    practicesTitle: 'Von Anfang an eingebaut',
    practices: [
      'Rollenbasierte Zugriffskontrolle',
      'Row-Level Security für mandantenfähige Daten',
      'Manipulationssichere Audit-Logs',
      'Offline-First-Betrieb',
    ],
  },

  international: {
    title: 'Aus dem Kosovo, für Unternehmen in ganz Europa.',
    text:
      'Wir arbeiten mit Unternehmen im Kosovo und im Ausland, mit besonderem Fokus auf den deutschsprachigen Raum. Projekte laufen remote — mit regelmäßigen Calls und einem gemeinsamen Blick auf den Fortschritt.',
    markets: ['Kosovo', 'Deutschland', 'Schweiz', 'Österreich', 'International'],
    points: [
      { title: 'Derselbe Arbeitstag', text: 'Der Kosovo liegt in der Mitteleuropäischen Zeit — dieselben Bürozeiten wie in Berlin, Wien und Zürich.' },
      { title: 'Drei Arbeitssprachen', text: 'Wir arbeiten auf Albanisch, Englisch und Deutsch.' },
      { title: 'Remote als Prinzip', text: 'Videocalls, gemeinsame Projektboards und regelmäßige Demos halten Sie nah am Geschehen.' },
      { title: 'In Euro', text: 'Leistungsumfang schriftlich vereinbart, Abrechnung in Euro.' },
    ],
    clockLabel: 'Ortszeit gerade jetzt',
    cities: ['Klina', 'Berlin', 'Zürich', 'Wien'],
  },

  contact: {
    title: 'Sie haben eine Idee? Lassen Sie sie uns umsetzen.',
    lead:
      'Erzählen Sie uns von Ihrem Unternehmen, Ihren Herausforderungen oder der Software, die Ihnen vorschwebt. Wir helfen Ihnen, daraus eine funktionierende Lösung zu machen.',
    next: {
      title: 'So geht es weiter',
      steps: [
        'Wir lesen Ihre Nachricht und antworten persönlich.',
        'Wir vereinbaren ein Gespräch, um Ihren Bedarf zu verstehen.',
        'Sie erhalten ein Angebot mit Umfang, Zeitplan und Preis.',
      ],
    },
    direct: {
      title: 'Lieber direkt sprechen?',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      office: 'Büro',
    },
    form: {
      title: 'Projektdetails',
      name: 'Vor- und Nachname',
      namePh: 'Ihr Name',
      email: 'E-Mail',
      emailPh: 'name@firma.de',
      company: 'Unternehmen',
      companyPh: 'Name des Unternehmens',
      country: 'Land',
      countryPh: 'Wo hat Ihr Unternehmen seinen Sitz?',
      projectType: 'Art des Projekts',
      choose: 'Bitte wählen',
      budget: 'Geschätztes Budget',
      description: 'Projektbeschreibung',
      descriptionPh: 'Was soll die Software leisten? Wer wird sie nutzen? Gibt es eine Frist?',
      optional: 'optional',
      submit: 'Projektdetails senden',
      sending: 'Wird gesendet …',
      consent: 'Wir verwenden Ihre Angaben ausschließlich zur Beantwortung Ihrer Anfrage. Mehr in den',
      consentLink: 'Datenschutzhinweisen',
      types: {
        custom: 'Individualsoftware',
        web: 'Webanwendung',
        mobile: 'Mobile App',
        management: 'Unternehmenssoftware',
        internal: 'Interne Anwendung',
        website: 'Website oder digitale Plattform',
        automation: 'Automatisierung & Integrationen',
        consultation: 'Beratungsgespräch',
        unsure: 'Noch unklar',
      },
      budgets: ['Unter 5.000 €', '5.000 – 15.000 €', '15.000 – 50.000 €', 'Über 50.000 €', 'Noch unklar'],
      countries: ['Kosovo', 'Deutschland', 'Schweiz', 'Österreich', 'Albanien', 'Nordmazedonien'],
      errors: {
        summary: 'Bitte prüfen Sie die markierten Felder.',
        name: 'Bitte geben Sie Ihren Namen ein.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        country: 'Bitte geben Sie das Land an, in dem Ihr Unternehmen sitzt.',
        projectType: 'Bitte wählen Sie die Art des Projekts.',
        description: 'Bitte beschreiben Sie Ihr Projekt in mindestens 20 Zeichen.',
      },
      success: {
        title: 'Vielen Dank — Ihre Projektdetails wurden gesendet.',
        text: 'Wir antworten Ihnen so bald wie möglich an {email}. In dringenden Fällen schreiben Sie uns auf WhatsApp.',
        again: 'Weitere Anfrage senden',
      },
      failure: {
        title: 'Ihre Nachricht konnte nicht gesendet werden.',
        text: 'Es ist nichts verloren. Senden Sie dieselben Angaben per WhatsApp oder versuchen Sie es gleich noch einmal.',
        whatsapp: 'Per WhatsApp senden',
        retry: 'Erneut versuchen',
      },
      whatsappIntro: 'Hallo Fiscalix, ich möchte ein Projekt besprechen.',
    },
  },

  about: {
    title: 'Ein unabhängiges Softwarestudio aus dem Kosovo.',
    lead:
      'Fiscalix konzipiert und entwickelt individuelle Software für Unternehmen, denen Tabellen, Papier und Standardprogramme nicht mehr genügen.',
    story: [
      'Angefangen haben wir mit Software für Unternehmen in unserer Umgebung im Kosovo: Geschäfte, Restaurants, Wechselstuben, Produktionsbetriebe und Buchhalter. Jedes Projekt hat uns dasselbe gelehrt — die beste Software entsteht rund um die Art, wie Menschen tatsächlich arbeiten.',
      'Heute übernehmen wir Projekte jeder Größe, von der Unternehmenswebsite bis zur Plattform mit mehreren Standorten, Offline-Betrieb, Fiskalanbindung und strengen Prüfanforderungen. Wir arbeiten mit Kunden im Kosovo und international — auf Albanisch, Englisch und Deutsch.',
    ],
    principlesTitle: 'Wofür wir stehen',
    principles: [
      { title: 'Erst verstehen, dann bauen', text: 'Die ersten Tage gehören Ihrem Unternehmen, nicht dem Code. Gute Software beginnt mit den richtigen Fragen.' },
      { title: 'Software ist ein Werkzeug', text: 'Sie soll Zeit sparen, Fehler vermeiden und Ihre Zahlen verlässlich machen. Alles andere ist Dekoration.' },
      { title: 'Für die Dauer gebaut', text: 'Saubere Architektur und Dokumentation, damit Ihr System über Jahre wachsen kann.' },
      { title: 'Klar gesagt', text: 'Verständliche Sprache, realistische Zeitpläne und kein Fachjargon, den Sie nicht brauchen.' },
    ],
    factsTitle: 'Auf einen Blick',
    facts: [
      { label: 'Unternehmen', value: 'Fiscalix SH.P.K.' },
      { label: 'Sitz', value: 'Klina, Kosovo' },
      { label: 'Arbeitssprachen', value: 'Albanisch, Englisch, Deutsch' },
      { label: 'Kunden', value: 'Kosovo und international' },
    ],
  },

  legal: {
    title: 'Impressum & Datenschutz',
    companyTitle: 'Angaben zum Unternehmen',
    company: {
      name: 'Unternehmen',
      nui: 'Unternehmensnummer (NUI)',
      address: 'Eingetragene Anschrift',
      registry: 'Registriert bei',
      registryValue: 'Agentur für Unternehmensregistrierung des Kosovo (ARBK)',
      email: 'E-Mail',
      phone: 'Telefon & WhatsApp',
    },
    privacyTitle: 'Datenschutzhinweise',
    privacy: [
      'Diese Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies. Ein technisch notwendiges Cookie speichert die gewählte Sprache.',
      'Wenn Sie das Kontaktformular senden, erhalten wir Ihren Namen, Ihre E-Mail-Adresse, Ihr Unternehmen, Ihr Land, die Projektart, den Budgetrahmen und Ihre Nachricht. Wir verwenden diese Angaben ausschließlich, um Ihre Anfrage zu beantworten und ein Angebot zu erstellen. Wir verkaufen sie nicht und geben sie nicht zu Werbezwecken an Dritte weiter.',
      'Formularnachrichten werden über unseren E-Mail-Dienstleister an unser Postfach zugestellt. Die Website wird bei Vercel gehostet.',
      'Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen — schreiben Sie uns an {email}.',
    ],
    updated: 'Stand: Oktober 2026',
  },

  footer: {
    tagline: 'Individuelle Software, entwickelt im Kosovo für Unternehmen überall.',
    rights: 'Alle Rechte vorbehalten.',
    legal: 'Impressum & Datenschutz',
    studio: 'Studio',
    contact: 'Kontakt',
    backToTop: 'Nach oben',
  },


  mock: {
    app: {
      nav: ['Übersicht', 'Aufträge', 'Lager', 'Rechnungen', 'Team'],
      search: 'Suchen',
      newOrder: 'Neuer Auftrag',
      kpis: ['Offene Aufträge', 'Umsatz diesen Monat', 'Niedriger Bestand'],
      chart: 'Aufträge pro Woche',
      table: 'Neueste Aufträge',
      cols: ['Auftrag', 'Kunde', 'Filiale', 'Status', 'Summe'],
      status: { paid: 'Bezahlt', pending: 'Offen', ready: 'Bereit' },
      branch: 'Filiale',
      live: 'Live',
    },
    svc: {
      layers: ['Oberfläche', 'API', 'Datenbank', 'Integrationen', 'Rollen & Zugriff'],
      today: 'Heute',
      tasks: ['Lieferung an Markt 2', 'Prüfung vor Ort', 'Unterschrift einholen'],
      newTask: 'Neue Aufgabe zugewiesen',
      invoice: 'Rechnung',
      subtotal: 'Zwischensumme',
      vat: 'MwSt. 18 %',
      total: 'Gesamt',
      roles: ['Inhaber', 'Leitung', 'Team', 'Buchhaltung'],
      perms: ['Verkauf', 'Lager', 'Berichte', 'Einstellungen'],
      flow: ['Neuer Auftrag', 'Bestand prüfen', 'Rechnung erstellen', 'Buchhaltung informieren'],
      desktop: 'Desktop',
      mobile: 'Mobil',
    },
    words: {
      inStock: 'Auf Lager',
      low: 'Niedrig',
      reorder: 'Nachbestellen',
      income: 'Einnahmen',
      expenses: 'Ausgaben',
      cash: 'Liquidität',
      leads: 'Leads',
      offers: 'Angebote',
      won: 'Gewonnen',
      shift: 'Schicht',
      leave: 'Urlaubsantrag',
      approved: 'Genehmigt',
      pending: 'Offen',
      waiting: 'Wartet',
      inRoom: 'Im Zimmer',
      done: 'Erledigt',
      total: 'Summe',
      pay: 'Kassieren',
      scan: 'Barcode scannen',
      design: 'Gestaltung',
      cnc: 'CNC',
      print: 'Druck',
      install: 'Montage',
      buy: 'Ankauf',
      sell: 'Verkauf',
      closing: 'Tagesabschluss',
      revenue: 'Umsatz',
      request: 'Antrag',
      approve: 'Freigeben',
      offline: 'Offline — gespeichert',
      synced: 'Synchronisiert',
      margin: 'Marge',
      customs: 'Zoll',
      accountant: 'Buchhaltung',
      liveSync: 'Live-Sync',
      today: 'Heute',
      week: 'Diese Woche',
    },
  },
}

export default de
