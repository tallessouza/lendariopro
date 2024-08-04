const translation = {
  pageTitle: {
    line1: 'PROMPT',
    line2: 'Engineering',
  },
  orchestrate: 'Orchestrieren',
  promptMode: {
    simple: 'Wechseln Sie in den Expertenmodus, um das gesamte PROMPT zu bearbeiten',
    advanced: 'Expertenmodus',
    switchBack: 'Zurückwechseln',
    advancedWarning: {
      title: 'Sie haben in den Expertenmodus gewechselt, und sobald Sie das PROMPT ändern, können Sie NICHT zum Basis-Modus zurückkehren.',
      description: 'Im Expertenmodus können Sie das gesamte PROMPT bearbeiten.',
      learnMore: 'Mehr erfahren',
      ok: 'OK',
    },
    operation: {
      addMessage: 'Nachricht hinzufügen',
    },
    contextMissing: 'Komponente fehlt, die Wirksamkeit des Prompts könnte schlecht sein.',
  },
  operation: {
    applyConfig: 'Veröffentlichen',
    resetConfig: 'Zurücksetzen',
    debugConfig: 'Debuggen',
    addFeature: 'Funktion hinzufügen',
    automatic: 'Generieren',
    stopResponding: 'Antworten stoppen',
    agree: 'gefällt mir',
    disagree: 'gefällt mir nicht',
    cancelAgree: 'Gefällt mir zurücknehmen',
    cancelDisagree: 'Gefällt mir nicht zurücknehmen',
    userAction: 'Benutzer ',
  },
  notSetAPIKey: {
    title: 'LLM-Anbieterschlüssel wurde nicht festgelegt',
    trailFinished: 'Testversion beendet',
    description: 'Der LLM-Anbieterschlüssel wurde nicht festgelegt und muss vor dem Debuggen festgelegt werden.',
    settingBtn: 'Zu den Einstellungen gehen',
  },
  trailUseGPT4Info: {
    title: 'Unterstützt derzeit kein gpt-4',
    description: 'Um gpt-4 zu verwenden, bitte API-Schlüssel festlegen.',
  },
  feature: {
    groupChat: {
      title: 'Chatverbesserung',
      description: 'Voreinstellungen für Konversationen zu Apps hinzufügen kann die Benutzererfahrung verbessern.',
    },
    groupExperience: {
      title: 'Erfahrungsverbesserung',
    },
    conversationOpener: {
      title: 'Gesprächseröffnungen',
      description: 'In einer Chat-App wird der erste Satz, den die KI aktiv an den Benutzer richtet, üblicherweise als Begrüßung verwendet.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Nachfolgefragen',
      description: 'Das Einrichten von Vorschlägen für nächste Fragen kann den Chat für Benutzer verbessern.',
      resDes: '3 Vorschläge für die nächste Benutzerfrage.',
      tryToAsk: 'Versuchen Sie zu fragen',
    },
    moreLikeThis: {
      title: 'Mehr davon',
      description: 'Mehrere Texte gleichzeitig generieren und dann bearbeiten und weiter generieren',
      generateNumTip: 'Anzahl der generierten Texte pro Durchgang',
      tip: 'Die Verwendung dieser Funktion verursacht zusätzliche Token-Kosten',
    },
    speechToText: {
      title: 'Sprache zu Text',
      description: 'Einmal aktiviert, können Sie Spracheingabe verwenden.',
      resDes: 'Spracheingabe ist aktiviert',
    },
    textToSpeech: {
      title: 'Text zu Sprache',
      description: 'Einmal aktiviert, kann Text in Sprache umgewandelt werden.',
      resDes: 'Text zu Audio ist aktiviert',
    },
    citation: {
      title: 'Zitate und Urheberangaben',
      description: 'Einmal aktiviert, zeigen Sie das Quelldokument und den zugeordneten Abschnitt des generierten Inhalts an.',
      resDes: 'Zitate und Urheberangaben sind aktiviert',
    },
    annotation: {
      title: 'Annotation Antwort',
      description: 'Sie können manuell hochwertige Antworten zum Cache hinzufügen für bevorzugte Übereinstimmung mit ähnlichen Benutzerfragen.',
      resDes: 'Annotationsantwort ist aktiviert',
      scoreThreshold: {
        title: 'Schwellenwert',
        description: 'Wird verwendet, um den Ähnlichkeitsschwellenwert für die Annotation Antwort einzustellen.',
        easyMatch: 'Einfache Übereinstimmung',
        accurateMatch: 'Genaue Übereinstimmung',
      },
      matchVariable: {
        title: 'Übereinstimmungsvariable',
        choosePlaceholder: 'Wählen Sie Übereinstimmungsvariable',
      },
      cacheManagement: 'Annotationen',
      cached: 'Annotiert',
      remove: 'Entfernen',
      removeConfirm: 'Diese Annotation löschen?',
      add: 'Annotation hinzufügen',
      edit: 'Annotation bearbeiten',
    },
    dataSet: {
      title: 'Kontext',
      noData: 'Sie können Wissen als Kontext importieren',
      words: 'Wörter',
      textBlocks: 'Textblöcke',
      selectTitle: 'Wählen Sie Referenzwissen',
      selected: 'Wissen ausgewählt',
      noDataSet: 'Kein Wissen gefunden',
      toCreate: 'Erstellen gehen',
      notSupportSelectMulti: 'Unterstützt derzeit nur ein Wissen',
      queryVariable: {
        title: 'Abfragevariable',
        tip: 'Diese Variable wird als Eingabe für die Kontextabfrage verwendet, um kontextbezogene Informationen in Bezug auf die Eingabe dieser Variable zu erhalten.',
        choosePlaceholder: 'Wählen Sie Abfragevariable',
        noVar: 'Keine Variablen',
        noVarTip: 'Bitte erstellen Sie eine Variable im Variablenbereich',
        unableToQueryDataSet: 'Konnte das Wissen nicht abfragen',
        unableToQueryDataSetTip: 'Konnte das Wissen nicht erfolgreich abfragen, bitte wählen Sie eine Kontextabfragevariable im Kontextbereich.',
        ok: 'OK',
        contextVarNotEmpty: 'Kontextabfragevariable darf nicht leer sein',
        deleteContextVarTitle: 'Variable „{{varName}}“ löschen?',
        deleteContextVarTip: 'Diese Variable wurde als Kontextabfragevariable festgelegt und deren Entfernung wird die normale Verwendung des Wissens beeinträchtigen. Wenn Sie sie trotzdem löschen müssen, wählen Sie sie bitte im Kontextbereich erneut.',
      },
    },
    tools: {
      title: 'Werkzeuge',
      tips: 'Werkzeuge bieten eine standardisierte API-Aufrufmethode, die Benutzereingaben oder Variablen als Anfrageparameter für die Abfrage externer Daten als Kontext verwendet.',
      toolsInUse: '{{count}} Werkzeuge in Verwendung',
      modal: {
        title: 'Werkzeug',
        toolType: {
          title: 'Werkzeugtyp',
          placeholder: 'Bitte wählen Sie den Werkzeugtyp',
        },
        name: {
          title: 'Name',
          placeholder: 'Bitte geben Sie den Namen ein',
        },
        variableName: {
          title: 'Variablenname',
          placeholder: 'Bitte geben Sie den Variablennamen ein',
        },
      },
    },
    conversationHistory: {
      title: 'Konversationsverlauf',
      description: 'Präfixnamen für Konversationsrollen festlegen',
      tip: 'Der Konversationsverlauf ist nicht aktiviert, bitte fügen Sie <histories> im Prompt oben ein.',
      learnMore: 'Mehr erfahren',
      editModal: {
        title: 'Konversationsrollennamen bearbeiten',
        userPrefix: 'Benutzerpräfix',
        assistantPrefix: 'Assistentenpräfix',
      },
    },
    toolbox: {
      title: 'WERKZEUGKASTEN',
    },
    moderation: {
      title: 'Inhaltsmoderation',
      description: 'Sichern Sie die Ausgabe des Modells durch Verwendung der Moderations-API oder durch Pflege einer Liste sensibler Wörter.',
      allEnabled: 'INHALT von EINGABE/AUSGABE aktiviert',
      inputEnabled: 'INHALT von EINGABE aktiviert',
      outputEnabled: 'INHALT von AUSGABE aktiviert',
      modal: {
        title: 'Einstellungen zur Inhaltsmoderation',
        provider: {
          title: 'Anbieter',
          openai: 'OpenAI-Moderation',
          openaiTip: {
            prefix: 'OpenAI-Moderation erfordert einen konfigurierten OpenAI-API-Schlüssel in den ',
            suffix: '.',
          },
          keywords: 'Schlüsselwörter',
        },
        keywords: {
          tip: 'Jeweils eine pro Zeile, getrennt durch Zeilenumbrüche. Bis zu 100 Zeichen pro Zeile.',
          placeholder: 'Jeweils eine pro Zeile, getrennt durch Zeilenumbrüche',
          line: 'Zeile',
        },
        content: {
          input: 'INHALT der EINGABE moderieren',
          output: 'INHALT der AUSGABE moderieren',
          preset: 'Voreingestellte Antworten',
          placeholder: 'Inhalt der voreingestellten Antworten hier',
          condition: 'Moderation von INHALT der EINGABE und AUSGABE mindestens eine aktiviert',
          fromApi: 'Voreingestellte Antworten werden durch API zurückgegeben',
          errorMessage: 'Voreingestellte Antworten dürfen nicht leer sein',
          supportMarkdown: 'Markdown unterstützt',
        },
        openaiNotConfig: {
          before: 'OpenAI-Moderation erfordert einen konfigurierten OpenAI-API-Schlüssel in den',
          after: '',
        },
      },
    },
  },
  resetConfig: {
    title: 'Zurücksetzen bestätigen?',
    message:
      'Zurücksetzen verwirft Änderungen und stellt die zuletzt veröffentlichte Konfiguration wieder her.',
  },
  errorMessage: {
    nameOfKeyRequired: 'Name des Schlüssels: {{key}} erforderlich',
    valueOfVarRequired: '{{key}} Wert darf nicht leer sein',
    queryRequired: 'Anfragetext ist erforderlich.',
    waitForResponse:
      'Bitte warten Sie auf die Antwort auf die vorherige Nachricht, um abzuschließen.',
    waitForBatchResponse:
      'Bitte warten Sie auf die Antwort auf die Stapelaufgabe, um abzuschließen.',
    notSelectModel: 'Bitte wählen Sie ein Modell',
    waitForImgUpload: 'Bitte warten Sie, bis das Bild hochgeladen ist',
  },
  chatSubTitle: 'Anweisungen',
  completionSubTitle: 'Vor-Prompt',
  promptTip:
    'Prompts leiten KI-Antworten mit Anweisungen und Einschränkungen. Fügen Sie Variablen wie {{input}} ein. Dieses Prompt wird den Benutzern nicht angezeigt.',
  formattingChangedTitle: 'Formatierung geändert',
  formattingChangedText:
    'Die Änderung der Formatierung wird den Debug-Bereich zurücksetzen, sind Sie sicher?',
  variableTitle: 'Variablen',
  variableTip:
    'Benutzer füllen Variablen in einem Formular aus, automatisches Ersetzen von Variablen im Prompt.',
  notSetVar: 'Variablen ermöglichen es Benutzern, Aufforderungswörter oder Eröffnungsbemerkungen einzuführen, wenn sie Formulare ausfüllen. Sie könnten versuchen, "{{input}}" im Prompt einzugeben.',
  autoAddVar: 'Im Vor-Prompt referenzierte undefinierte Variablen, möchten Sie sie im Benutzereingabeformular hinzufügen?',
  variableTable: {
    key: 'Variablenschlüssel',
    name: 'Name des Benutzereingabefelds',
    optional: 'Optional',
    type: 'Eingabetyp',
    action: 'Aktionen',
    typeString: 'String',
    typeSelect: 'Auswählen',
  },
  varKeyError: {
    canNoBeEmpty: 'Variablenschlüssel darf nicht leer sein',
    tooLong: 'Variablenschlüssel: {{key}} zu lang. Darf nicht länger als 30 Zeichen sein',
    notValid: 'Variablenschlüssel: {{key}} ist ungültig. Darf nur Buchstaben, Zahlen und Unterstriche enthalten',
    notStartWithNumber: 'Variablenschlüssel: {{key}} darf nicht mit einer Zahl beginnen',
    keyAlreadyExists: 'Variablenschlüssel: :{{key}} existiert bereits',
  },
  otherError: {
    promptNoBeEmpty: 'Prompt darf nicht leer sein',
    historyNoBeEmpty: 'Konversationsverlauf muss im Prompt gesetzt sein',
    queryNoBeEmpty: 'Anfrage muss im Prompt gesetzt sein',
  },
  variableConig: {
    modalTitle: 'Feldeinstellungen',
    description: 'Einstellung für Variable {{varName}}',
    fieldType: 'Feldtyp',
    string: 'Kurztext',
    paragraph: 'Absatz',
    select: 'Auswählen',
    notSet: 'Nicht gesetzt, versuchen Sie, {{input}} im Vor-Prompt zu tippen',
    stringTitle: 'Formular-Textfeldoptionen',
    maxLength: 'Maximale Länge',
    options: 'Optionen',
    addOption: 'Option hinzufügen',
    apiBasedVar: 'API-basierte Variable',
  },
  vision: {
    name: 'Vision',
    description: 'Vision zu aktivieren ermöglicht es dem Modell, Bilder aufzunehmen und Fragen dazu zu beantworten.',
    settings: 'Einstellungen',
    visionSettings: {
      title: 'Vision-Einstellungen',
      resolution: 'Auflösung',
      resolutionTooltip: `Niedrige Auflösung ermöglicht es dem Modell, eine Bildversion mit niedriger Auflösung von 512 x 512 zu erhalten und das Bild mit einem Budget von 65 Tokens darzustellen. Dies ermöglicht schnellere Antworten des API und verbraucht weniger Eingabetokens für Anwendungsfälle, die kein hohes Detail benötigen.
      \n
      Hohe Auflösung ermöglicht zunächst, dass das Modell das Bild mit niedriger Auflösung sieht und dann detaillierte Ausschnitte von Eingabebildern als 512px Quadrate basierend auf der Größe des Eingabebildes erstellt. Jeder der detaillierten Ausschnitte verwendet das doppelte Token-Budget für insgesamt 129 Tokens.`,
      high: 'Hoch',
      low: 'Niedrig',
      uploadMethod: 'Upload-Methode',
      both: 'Beides',
      localUpload: 'Lokaler Upload',
      url: 'URL',
      uploadLimit: 'Upload-Limit',
    },
  },
  voice: {
    name: 'Stimme',
    defaultDisplay: 'Standardstimme',
    description: 'Text-zu-Sprache-Stimmeinstellungen',
    settings: 'Einstellungen',
    voiceSettings: {
      title: 'Stimmeinstellungen',
      language: 'Sprache',
      resolutionTooltip: 'Text-zu-Sprache unterstützte Sprache.',
      voice: 'Stimme',
    },
  },
  openingStatement: {
    title: 'Gesprächseröffner',
    add: 'Hinzufügen',
    writeOpener: 'Eröffnung schreiben',
    placeholder: 'Schreiben Sie hier Ihre Eröffnungsnachricht, Sie können Variablen verwenden, versuchen Sie {{Variable}} zu tippen.',
    openingQuestion: 'Eröffnungsfragen',
    noDataPlaceHolder:
      'Den Dialog mit dem Benutzer zu beginnen, kann helfen, in konversationellen Anwendungen eine engere Verbindung mit ihnen herzustellen.',
    varTip: 'Sie können Variablen verwenden, versuchen Sie {{Variable}} zu tippen',
    tooShort: 'Für die Erzeugung von Eröffnungsbemerkungen für das Gespräch werden mindestens 20 Wörter des Anfangsprompts benötigt.',
    notIncludeKey: 'Das Anfangsprompt enthält nicht die Variable: {{key}}. Bitte fügen Sie sie dem Anfangsprompt hinzu.',
  },
  modelConfig: {
    model: 'Modell',
    setTone: 'Ton der Antworten festlegen',
    title: 'Modell und Parameter',
    modeType: {
      chat: 'Chat',
      completion: 'Vollständig',
    },
  },
  inputs: {
    title: 'Debug und Vorschau',
    noPrompt: 'Versuchen Sie, etwas Prompt im Vor-Prompt-Eingabefeld zu schreiben',
    userInputField: 'Benutzereingabefeld',
    noVar: 'Füllen Sie den Wert der Variable aus, der bei jedem Start einer neuen Sitzung automatisch im Prompt ersetzt wird.',
    chatVarTip:
      'Füllen Sie den Wert der Variable aus, der bei jedem Start einer neuen Sitzung automatisch im Prompt ersetzt wird',
    completionVarTip:
      'Füllen Sie den Wert der Variable aus, der bei jeder Einreichung einer Frage automatisch in den Prompt-Wörtern ersetzt wird.',
    previewTitle: 'Prompt-Vorschau',
    queryTitle: 'Anfrageinhalt',
    queryPlaceholder: 'Bitte geben Sie den Anfragetext ein.',
    run: 'AUSFÜHREN',
  },
  result: 'Ausgabetext',
  datasetConfig: {
    settingTitle: 'Abfragen-Einstellungen',
    retrieveOneWay: {
      title: 'N-zu-1-Abfrage',
      description: 'Basierend auf Benutzerabsicht und Beschreibungen des Wissens wählt der Agent autonom das beste Wissen für die Abfrage aus. Am besten für Anwendungen mit deutlichen, begrenzten Wissensgebieten.',
    },
    retrieveMultiWay: {
      title: 'Mehrwegabfrage',
      description: 'Basierend auf Benutzerabsicht werden Abfragen über alle Wissensbereiche hinweg durchgeführt, relevante Texte aus Mehrfachquellen abgerufen und die besten Ergebnisse, die der Benutzerabfrage entsprechen, nach einer Neubewertung ausgewählt. Konfiguration des Rerank-Modell-APIs erforderlich.',
    },
    rerankModelRequired: 'Rerank-Modell erforderlich',
    params: 'Parameter',
    top_k: 'Top K',
    top_kTip: 'Wird verwendet, um Abschnitte zu filtern, die am ähnlichsten zu Benutzerfragen sind. Das System wird auch dynamisch den Wert von Top K anpassen, entsprechend max_tokens des ausgewählten Modells.',
    score_threshold: 'Schwellenwert',
    score_thresholdTip: 'Wird verwendet, um den Ähnlichkeitsschwellenwert für die Abschnittsfilterung einzustellen.',
    retrieveChangeTip: 'Das Ändern des Indexmodus und des Abfragemodus kann Anwendungen beeinflussen, die mit diesem Wissen verbunden sind.',
  },
  debugAsSingleModel: 'Als Einzelmodell debuggen',
  debugAsMultipleModel: 'Als Mehrfachmodelle debuggen',
  duplicateModel: 'Duplizieren',
  publishAs: 'Veröffentlichen als',
  assistantType: {
    name: 'Assistententyp',
    chatAssistant: {
      name: 'Basisassistent',
      description: 'Erstellen eines chatbasierten Assistenten mit einem Großsprachmodell',
    },
    agentAssistant: {
      name: 'Agentenassistent',
      description: 'Erstellen eines intelligenten Agenten, der autonom Werkzeuge wählen kann, um Aufgaben zu erfüllen',
    },
  },
  agent: {
    agentMode: 'Agentenmodus',
    agentModeDes: 'Den Typ des Inferenzmodus für den Agenten festlegen',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Funktionsaufruf',
    },
    setting: {
      name: 'Agenten-Einstellungen',
      description: 'Agentenassistenten-Einstellungen ermöglichen die Festlegung des Agentenmodus und erweiterte Funktionen wie integrierte Prompts, nur verfügbar im Agententyp.',
      maximumIterations: {
        name: 'Maximale Iterationen',
        description: 'Begrenzt die Anzahl der Iterationen, die ein Agentenassistent ausführen kann',
      },
    },
    buildInPrompt: 'Eingebautes Prompt',
    firstPrompt: 'Erstes Prompt',
    nextIteration: 'Nächste Iteration',
    promptPlaceholder: 'Schreiben Sie hier Ihr Prompt',
    tools: {
      name: 'Werkzeuge',
      description: 'Die Verwendung von Werkzeugen kann die Fähigkeiten von LLM erweitern, z.B. das Internet durchsuchen oder wissenschaftliche Berechnungen durchführen',
      enabled: 'Aktiviert',
    },
  },
}

export default translation
