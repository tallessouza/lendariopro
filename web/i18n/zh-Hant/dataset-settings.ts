const translation = {
  title: '知識庫設定',
  desc: '在這裡您可以修改知識庫的工作方式以及其它設定。',
  form: {
    name: '知識庫名稱',
    namePlaceholder: '請輸入知識庫名稱',
    nameError: '名稱不能為空',
    desc: '知識庫描述',
    descInfo: '請寫出清楚的文字描述來概述知識庫的內容。當從多個知識庫中進行選擇匹配時，該描述將用作匹配的基礎。',
    descPlaceholder: '描述這個知識庫中的內容。詳細的描述可以讓 AI 及時訪問知識庫的內容。如果為空，Lab[IA] 將使用預設的命中策略。',
    descWrite: '瞭解如何編寫更好的知識庫描述。',
    permissions: '可見許可權',
    permissionsOnlyMe: '只有我',
    permissionsAllMember: '所有團隊成員',
    indexMethod: '索引模式',
    indexMethodHighQuality: '高質量',
    indexMethodHighQualityTip: '使用 Embedding 模型進行處理，以在使用者查詢時提供更高的準確度。',
    indexMethodEconomy: '經濟',
    indexMethodEconomyTip: '使用離線的向量引擎、關鍵詞索引等方式，降低了準確度但無需花費 Token',
    embeddingModel: 'Embedding 模型',
    embeddingModelTip: '修改 Embedding 模型，請去',
    embeddingModelTipLink: '設定',
    retrievalSetting: {
      title: '檢索設定',
      learnMore: '瞭解更多',
      description: '關於檢索方法。',
      longDescription: '關於檢索方法，您可以隨時在知識庫設定中更改此設定。',
    },
    save: '儲存',
  },
}

export default translation
