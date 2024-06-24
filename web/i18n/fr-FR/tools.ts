const translation = {
  title: 'Outils',
  createCustomTool: 'Créer un Outil Personnalisé',
  type: {
    all: 'Tout',
    builtIn: 'Intégré',
    custom: 'Personnalisé',
  },
  contribute: {
    line1: 'Je suis intéressé par',
    line2: 'contribuer des outils à Lab[IA].',
    viewGuide: 'Voir le guide',
  },
  author: 'Par',
  auth: {
    unauthorized: 'Pour Autoriser',
    authorized: 'Autorisé',
    setup: 'Mettez en place l\'autorisation à utiliser',
    setupModalTitle: 'Configurer l\'Autorisation',
    setupModalTitleDescription: 'Après avoir configuré les identifiants, tous les membres de l\'espace de travail peuvent utiliser cet outil lors de l\'orchestration des applications.',
  },
  includeToolNum: '{{num}} outils inclus',
  addTool: 'Ajouter un outil',
  createTool: {
    title: 'Créer un Outil Personnalisé',
    editAction: 'Configurer',
    editTitle: 'Modifier l\'Outil Personnalisé',
    name: 'Nom',
    toolNamePlaceHolder: 'Entrez le nom de l\'outil',
    schema: 'Schéma',
    schemaPlaceHolder: 'Entrez votre schéma OpenAPI ici',
    viewSchemaSpec: 'Voir la spécification OpenAPI-Swagger',
    importFromUrl: 'Importer depuis l\'URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Veuillez entrer une URL valide',
    examples: 'Exemples',
    exampleOptions: {
      json: 'Météo(JSON)',
      yaml: 'Animalerie (YAML)',
      blankTemplate: 'Modèle Vierge',
    },
    availableTools: {
      title: 'Outils Disponibles',
      name: 'Nom',
      description: 'Description',
      method: 'Méthode',
      path: 'Chemin',
      action: 'Actions',
      test: 'Test',
    },
    authMethod: {
      title: 'Méthode d\'autorisation',
      type: 'Type d\'autorisation',
      keyTooltip: 'Clé de l\'en-tête HTTP. Vous pouvez la laisser telle quelle avec "Autorisation" si vous n\'avez aucune idée de ce que c\'est, ou la définir sur une valeur personnalisée.',
      types: {
        none: 'Aucun',
        api_key: 'Clé API',
        apiKeyPlaceholder: 'Nom de l\'en-tête HTTP pour la clé API',
        apiValuePlaceholder: 'Entrez la clé API',
      },
      key: 'Clé',
      value: 'Valeur',
    },
    authHeaderPrefix: {
      title: 'Type d\'Authentification',
      types: {
        basic: 'Basique',
        bearer: 'Porteur',
        custom: 'Personnalisé',
      },
    },
    privacyPolicy: 'Politique de confidentialité',
    privacyPolicyPlaceholder: 'Veuillez entrer la politique de confidentialité',
    customDisclaimer: 'Clause de non-responsabilité personnalisée',
    customDisclaimerPlaceholder: 'Entrez le texte de la clause de non-responsabilité personnalisée',
  },
  test: {
    title: 'Test',
    parametersValue: 'Paramètres & Valeur',
    parameters: 'Paramètres',
    value: 'Valeur',
    testResult: 'Résultats du Test',
    testResultPlaceholder: 'Le résultat du test s\'affichera ici',
  },
  thought: {
    using: 'Utilisation',
    used: 'Utilisé',
    requestTitle: 'Demande à',
    responseTitle: 'Réponse de',
  },
  setBuiltInTools: {
    info: 'Infos',
    setting: 'Paramètres',
    toolDescription: 'Description de l\'outil',
    parameters: 'paramètres',
    string: 'chaîne',
    number: 'nombre',
    required: 'Requis',
    infoAndSetting: 'Infos & Paramètres',
  },
  noCustomTool: {
    title: 'Pas d\'outils personnalisés !',
    content: 'Ajoutez et gérez vos outils personnalisés ici pour construire des applications IA.',
    createTool: 'Créer un outil',
  },
  noSearchRes: {
    title: 'Désolé, aucun résultat !',
    content: 'Nous n\'avons trouvé aucun outil correspondant à votre recherche.',
    reset: 'Réinitialiser la recherche',
  },
  builtInPromptTitle: 'Invite',
  toolRemoved: 'Outil supprimé',
  notAuthorized: 'Outil non autorisé',
  howToGet: 'Comment obtenir',
}

export default translation
