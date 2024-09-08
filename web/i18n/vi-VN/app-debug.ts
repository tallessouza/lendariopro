const translation = {
  pageTitle: {
    line1: 'YÊU CẦU',
    line2: 'KỸ THUẬT',
  },
  orchestrate: 'Điều phối',
  promptMode: {
    simple: 'Chuyển sang Chế độ Chuyên gia để chỉnh sửa toàn bộ YÊU CẦU',
    advanced: 'Chế độ Chuyên gia',
    switchBack: 'Quay lại',
    advancedWarning: {
      title: 'Bạn đã chuyển sang Chế độ Chuyên gia. Sau khi sửa đổi YÊU CẦU, bạn KHÔNG THỂ quay lại chế độ cơ bản.',
      description: 'Trong Chế độ Chuyên gia, bạn có thể chỉnh sửa toàn bộ YÊU CẦU.',
      learnMore: 'Tìm hiểu thêm',
      ok: 'Đồng ý',
    },
    operation: {
      addMessage: 'Thêm tin nhắn',
    },
    contextMissing: 'Thiếu thành phần Ngữ cảnh, hiệu quả của yêu cầu có thể không tốt.',
  },
  operation: {
    applyConfig: 'Áp dụng',
    resetConfig: 'Đặt lại',
    debugConfig: 'Gỡ lỗi',
    addFeature: 'Thêm tính năng',
    automatic: 'Tự động',
    stopResponding: 'Dừng phản hồi',
    agree: 'thích',
    disagree: 'không thích',
    cancelAgree: 'Bỏ thích',
    cancelDisagree: 'Bỏ không thích',
    userAction: 'Hành động người dùng ',
  },
  notSetAPIKey: {
    title: 'Chưa thiết lập khóa API của nhà cung cấp LLM',
    trailFinished: 'Kết thúc dùng thử',
    description: 'Chưa thiết lập khóa API của nhà cung cấp LLM. Cần thiết lập trước khi gỡ lỗi.',
    settingBtn: 'Đi đến cài đặt',
  },
  trailUseGPT4Info: {
    title: 'Hiện không hỗ trợ GPT-4',
    description: 'Để sử dụng GPT-4, vui lòng thiết lập API Key.',
  },
  feature: {
    groupChat: {
      title: 'Nâng cao trò chuyện',
      description: 'Thêm cài đặt trước cho cuộc trò chuyện có thể cải thiện trải nghiệm người dùng.',
    },
    groupExperience: {
      title: 'Nâng cao trải nghiệm',
    },
    conversationOpener: {
      title: 'Mở đầu cuộc trò chuyện',
      description: 'Trong ứng dụng trò chuyện, câu nói đầu tiên mà AI tự động nói với người dùng thường được sử dụng như một lời chào.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'Câu hỏi gợi ý',
      description: 'Thiết lập đề xuất câu hỏi tiếp theo có thể tạo ra cuộc trò chuyện tốt hơn cho người dùng.',
      resDes: '3 đề xuất cho câu hỏi tiếp theo của người dùng.',
      tryToAsk: 'Thử hỏi',
    },
    moreLikeThis: {
      title: 'Thêm tương tự',
      description: 'Tạo nhiều văn bản cùng một lúc, sau đó chỉnh sửa và tiếp tục tạo ra.',
      generateNumTip: 'Số lượng mỗi lần tạo',
      tip: 'Sử dụng tính năng này sẽ tiêu tốn thêm token.',
    },
    speechToText: {
      title: 'Chuyển đổi giọng nói thành văn bản',
      description: 'Khi được bật, bạn có thể sử dụng đầu vào bằng giọng nói.',
      resDes: 'Đã bật đầu vào bằng giọng nói',
    },
    textToSpeech: {
      title: 'Chuyển đổi văn bản thành giọng nói',
      description: 'Khi được bật, văn bản có thể được chuyển đổi thành giọng nói.',
      resDes: 'Đã bật chuyển đổi văn bản thành âm thanh',
    },
    citation: {
      title: 'Trích dẫn và chú thích',
      description: 'Khi được bật, hiển thị nguồn tài liệu và phần được trích dẫn của nội dung được tạo ra.',
      resDes: 'Đã bật trích dẫn và chú thích',
    },
    annotation: {
      title: 'Phản hồi có chú thích',
      description: 'Bạn có thể thêm phản hồi chất lượng cao vào bộ nhớ cache để ưu tiên phù hợp với các câu hỏi tương tự của người dùng.',
      resDes: 'Đã bật phản hồi có chú thích',
      scoreThreshold: {
        title: 'Ngưỡng điểm',
        description: 'Được sử dụng để đặt ngưỡng tương đồng cho phản hồi có chú thích.',
        easyMatch: 'Khớp dễ dàng',
        accurateMatch: 'Khớp chính xác',
      },
      matchVariable: {
        title: 'Biến khớp',
        choosePlaceholder: 'Chọn biến khớp',
      },
      cacheManagement: 'Quản lý chú thích',
      cached: 'Đã lưu cache',
      remove: 'Xóa',
      removeConfirm: 'Xóa chú thích này?',
      add: 'Thêm chú thích',
      edit: 'Chỉnh sửa chú thích',
    },
    dataSet: {
      title: 'Ngữ cảnh',
      noData: 'Bạn có thể nhập dữ liệu làm ngữ cảnh',
      words: 'Từ',
      textBlocks: 'Khối văn bản',
      selectTitle: 'Chọn kiến thức tham khảo',
      selected: 'Kiến thức đã chọn',
      noDataSet: 'Không tìm thấy kiến thức',
      toCreate: 'Tạo mới',
      notSupportSelectMulti: 'Hiện chỉ hỗ trợ một kiến thức',
      queryVariable: {
        title: 'Biến truy vấn',
        tip: 'Biến này sẽ được sử dụng làm đầu vào truy vấn để truy xuất ngữ cảnh, lấy thông tin ngữ cảnh liên quan đến đầu vào của biến này.',
        choosePlaceholder: 'Chọn biến truy vấn',
        noVar: 'Không có biến',
        noVarTip: 'Vui lòng tạo một biến trong phần Biến',
        unableToQueryDataSet: 'Không thể truy vấn kiến thức',
        unableToQueryDataSetTip: 'Không thể truy vấn kiến thức thành công, vui lòng chọn một biến truy vấn ngữ cảnh trong phần ngữ cảnh.',
        ok: 'Đồng ý',
        contextVarNotEmpty: 'Biến truy vấn ngữ cảnh không thể trống',
        deleteContextVarTitle: 'Xóa biến "{{varName}}"?',
        deleteContextVarTip: 'Biến này đã được thiết lập là biến truy vấn ngữ cảnh, và việc xóa nó sẽ ảnh hưởng đến việc sử dụng bình thường của kiến thức. Nếu bạn vẫn cần xóa nó, vui lòng chọn lại biến khác trong phần ngữ cảnh.',
      },
    },
    tools: {
      title: 'Công cụ',
      tips: 'Công cụ cung cấp phương thức gọi API tiêu chuẩn, sử dụng đầu vào của người dùng hoặc biến làm tham số yêu cầu để truy vấn dữ liệu bên ngoài như ngữ cảnh.',
      toolsInUse: 'Đang sử dụng {{count}} công cụ',
      modal: {
        title: 'Công cụ',
        toolType: {
          title: 'Loại công cụ',
          placeholder: 'Vui lòng chọn loại công cụ',
        },
        name: {
          title: 'Tên',
          placeholder: 'Vui lòng nhập tên',
        },
        variableName: {
          title: 'Tên biến',
          placeholder: 'Vui lòng nhập tên biến',
        },
      },
    },
    conversationHistory: {
      title: 'Lịch sử cuộc trò chuyện',
      description: 'Đặt tiền tố cho các vai trò trong cuộc trò chuyện',
      tip: 'Lịch sử cuộc trò chuyện chưa được bật, vui lòng thêm <histories> vào phần prompt ở trên.',
      learnMore: 'Tìm hiểu thêm',
      editModal: {
        title: 'Chỉnh sửa tên vai trò trong cuộc trò chuyện',
        userPrefix: 'Tiền tố người dùng',
        assistantPrefix: 'Tiền tố trợ lý',
      },
    },
    toolbox: {
      title: 'HỘP CÔNG CỤ',
    },
    moderation: {
      title: 'Kiểm duyệt nội dung',
      description: 'Bảo vệ đầu ra của mô hình bằng cách sử dụng API kiểm duyệt hoặc danh sách từ nhạy cảm.',
      allEnabled: 'Đã bật kiểm duyệt nội dung ĐẦU VÀO/ĐẦU RA',
      inputEnabled: 'Đã bật kiểm duyệt nội dung ĐẦU VÀO',
      outputEnabled: 'Đã bật kiểm duyệt nội dung ĐẦU RA',
      modal: {
        title: 'Cài đặt kiểm duyệt nội dung',
        provider: {
          title: 'Nhà cung cấp',
          openai: 'Kiểm duyệt OpenAI',
          openaiTip: {
            prefix: 'Kiểm duyệt OpenAI yêu cầu cấu hình khóa API OpenAI trong ',
            suffix: '.',
          },
          keywords: 'Từ khóa',
        },
        keywords: {
          tip: 'Mỗi dòng một từ khóa, phân tách bằng dòng mới. Tối đa 100 ký tự mỗi dòng.',
          placeholder: 'Mỗi dòng một từ khóa, phân tách bằng dòng mới',
          line: 'Dòng',
        },
        content: {
          input: 'Kiểm duyệt nội dung ĐẦU VÀO',
          output: 'Kiểm duyệt nội dung ĐẀU RA',
          preset: 'Câu trả lời mẫu',
          placeholder: 'Nội dung câu trả lời mẫu ở đây',
          condition: 'Đã bật ít nhất một kiểm duyệt nội dung ĐẦU VÀO và ĐẦU RA',
          fromApi: 'Câu trả lời mẫu được trả về bởi API',
          errorMessage: 'Câu trả lời mẫu không thể trống',
          supportMarkdown: 'Hỗ trợ Markdown',
        },
        openaiNotConfig: {
          before: 'Kiểm duyệt OpenAI yêu cầu cấu hình khóa API OpenAI trong',
          after: '',
        },
      },
    },
  },
  automatic: {
    title: 'Tự động hóa triển khai ứng dụng',
    description: 'Mô tả tình huống của bạn, Lab[IA] sẽ tự động hóa một ứng dụng cho bạn.',
    intendedAudience: 'Ai là đối tượng mục tiêu?',
    intendedAudiencePlaceHolder: 'ví dụ: Sinh viên',
    solveProblem: 'Họ hy vọng AI có thể giải quyết vấn đề gì cho họ?',
    solveProblemPlaceHolder: 'ví dụ: Đánh giá thành tích học tập',
    generate: 'Tạo ra',
    audiencesRequired: 'Yêu cầu Đối tượng mục tiêu',
    problemRequired: 'Vấn đề cần thiết',
    resTitle: 'Chúng tôi đã tự động hóa ứng dụng sau đây cho bạn.',
    apply: 'Áp dụng tự động hóa này',
    noData: 'Mô tả tình huống sử dụng của bạn ở bên trái, xem trước tự động hóa sẽ hiển thị ở đây.',
    loading: 'Đang tự động hóa ứng dụng cho bạn...',
    overwriteTitle: 'Ghi đè cấu hình hiện tại?',
    overwriteMessage: 'Áp dụng tự động hóa này sẽ ghi đè lên cấu hình hiện tại.',
  },
  resetConfig: {
    title: 'Xác nhận đặt lại?',
    message: 'Đặt lại sẽ loại bỏ các thay đổi, khôi phục cấu hình đã xuất bản lần cuối.',
  },
  errorMessage: {
    nameOfKeyRequired: 'Tên của khóa: {{key}} là bắt buộc',
    valueOfVarRequired: 'Giá trị {{key}} không thể trống',
    queryRequired: 'Văn bản yêu cầu là bắt buộc.',
    waitForResponse: 'Vui lòng đợi phản hồi của tin nhắn trước để hoàn thành.',
    waitForBatchResponse: 'Vui lòng đợi phản hồi của tác vụ hàng loạt để hoàn thành.',
    notSelectModel: 'Vui lòng chọn một mô hình',
    waitForImgUpload: 'Vui lòng đợi hình ảnh được tải lên',
  },
  chatSubTitle: 'Hướng dẫn',
  completionSubTitle: 'Tiền tố lời nhắc',
  promptTip: 'Lời nhắc hướng dẫn các phản hồi của AI với hướng dẫn và ràng buộc. Chèn biến như {{input}}. Lời nhắc này sẽ không được hiển thị cho người dùng.',
  formattingChangedTitle: 'Định dạng đã thay đổi',
  formattingChangedText: 'Thay đổi định dạng sẽ đặt lại khu vực gỡ lỗi, bạn có chắc chắn không?',
  variableTitle: 'Biến',
  variableTip: 'Người dùng điền các biến vào một biểu mẫu, tự động thay thế các biến trong lời nhắc.',
  notSetVar: 'Biến cho phép người dùng đưa ra từ khóa lời nhắc hoặc mở đầu khi điền vào biểu mẫu. Bạn có thể thử nhập "{{input}}" trong các từ khóa lời nhắc.',
  autoAddVar: 'Phát hiện biến không xác định được tham chiếu trong tiền-lời nhắc, bạn có muốn thêm chúng vào biểu mẫu đầu vào người dùng không?',
  variableTable: {
    key: 'Khóa biến',
    name: 'Tên trường nhập liệu người dùng',
    optional: 'Tùy chọn',
    type: 'Loại nhập liệu',
    action: 'Hành động',
    typeString: 'Chuỗi',
    typeSelect: 'Lựa chọn',
  },
  varKeyError: {
    canNoBeEmpty: '{{key}} là bắt buộc',
    tooLong: '{{key}} quá dài. Không thể dài hơn 30 ký tự',
    notValid: '{{key}} không hợp lệ. Chỉ có thể chứa chữ cái, số, và dấu gạch dưới',
    notStartWithNumber: '{{key}} không thể bắt đầu bằng số',
    keyAlreadyExists: '{{key}} đã tồn tại',
  },
  otherError: {
    promptNoBeEmpty: 'Lời nhắc không thể trống',
    historyNoBeEmpty: 'Lịch sử cuộc trò chuyện phải được thiết lập trong lời nhắc',
    queryNoBeEmpty: 'Truy vấn phải được thiết lập trong lời nhắc',
  },
  variableConig: {
    'addModalTitle': 'Thêm trường nhập',
    'editModalTitle': 'Chỉnh sửa trường nhập',
    'description': 'Cài đặt cho biến {{varName}}',
    'fieldType': 'Loại trường',
    'string': 'Văn bản ngắn',
    'text-input': 'Văn bản ngắn',
    'paragraph': 'Đoạn văn',
    'select': 'Lựa chọn',
    'number': 'Số',
    'notSet': 'Chưa thiết lập, hãy thử nhập {{input}} trong gợi ý tiền tố',
    'stringTitle': 'Tùy chọn hộp văn bản biểu mẫu',
    'maxLength': 'Độ dài tối đa',
    'options': 'Tùy chọn',
    'addOption': 'Thêm tùy chọn',
    'apiBasedVar': 'Biến dựa trên API',
    'varName': 'Tên biến',
    'labelName': 'Tên nhãn',
    'inputPlaceholder': 'Vui lòng nhập',
    'required': 'Bắt buộc',
    'errorMsg': {
      varNameRequired: 'Tên biến là bắt buộc',
      labelNameRequired: 'Tên nhãn là bắt buộc',
      varNameCanBeRepeat: 'Tên biến không được trùng lặp',
      atLeastOneOption: 'Cần ít nhất một tùy chọn',
      optionRepeat: 'Có các tùy chọn trùng lặp',
    },
  },
  vision: {
    name: 'Thị giác',
    description: 'Cho phép tính năng thị giác sẽ cho phép mô hình nhận diện hình ảnh và trả lời các câu hỏi về chúng.',
    settings: 'Cài đặt',
    visionSettings: {
      title: 'Cài đặt thị giác',
      resolution: 'Độ phân giải',
      resolutionTooltip: `Độ phân giải thấp sẽ cho phép mô hình nhận một phiên bản hình ảnh 512 x 512 thấp hơn, và đại diện cho hình ảnh với ngân sách 65 token. Điều này cho phép API trả về phản hồi nhanh hơn và tiêu thụ ít token đầu vào cho các trường hợp sử dụng không yêu cầu chi tiết cao.
      \n
      Độ phân giải cao sẽ đầu tiên cho phép mô hình nhìn thấy hình ảnh thấp hơn và sau đó tạo ra các cắt chi tiết của hình ảnh đầu vào dưới dạng hình vuông 512px dựa trên kích thước hình ảnh đầu vào. Mỗi cắt chi tiết sử dụng hai lần ngân sách token cho tổng cộng 129 token.`,
      high: 'Cao',
      low: 'Thấp',
      uploadMethod: 'Phương thức tải lên',
      both: 'Cả hai',
      localUpload: 'Tải lên nội bộ',
      url: 'URL',
      uploadLimit: 'Giới hạn tải lên',
    },
  },
  voice: {
    name: 'Giọng nói',
    defaultDisplay: 'Giọng mặc định',
    description: 'Cài đặt chuyển đổi văn bản thành giọng nói',
    settings: 'Cài đặt',
    voiceSettings: {
      title: 'Cài đặt giọng nói',
      language: 'Ngôn ngữ',
      resolutionTooltip: 'Chuyển đổi văn bản thành giọng nói hỗ trợ ngôn ngữ.',
      voice: 'Giọng nói',
      autoPlay: 'Tự động phát',
      autoPlayEnabled: 'Đã bật',
      autoPlayDisabled: 'Đã tắt',
    },
  },
  openingStatement: {
    title: 'Mở đầu cuộc trò chuyện',
    add: 'Thêm',
    writeOpener: 'Viết câu mở đầu',
    placeholder: 'Viết thông điệp mở đầu của bạn ở đây, bạn có thể sử dụng biến, hãy thử nhập {{biến}}.',
    openingQuestion: 'Câu hỏi mở đầu',
    noDataPlaceHolder: 'Bắt đầu cuộc trò chuyện với người dùng có thể giúp AI thiết lập mối quan hệ gần gũi hơn với họ trong các ứng dụng trò chuyện.',
    varTip: 'Bạn có thể sử dụng biến, hãy thử nhập {{biến}}',
    tooShort: 'Cần ít nhất 20 từ trong lời nhắc ban đầu để tạo ra các câu mở đầu cho cuộc trò chuyện.',
    notIncludeKey: 'Lời nhắc ban đầu không bao gồm biến: {{key}}. Vui lòng thêm nó vào lời nhắc ban đầu.',
  },
  modelConfig: {
    model: 'Mô hình',
    setTone: 'Thiết lập giọng điệu của phản hồi',
    title: 'Mô hình và tham số',
    modeType: {
      chat: 'Trò chuyện',
      completion: 'Hoàn thành',
    },
  },
  inputs: {
    title: 'Gỡ lỗi và xem trước',
    noPrompt: 'Hãy thử viết một số lời nhắc trong trường tiền-lời nhắc',
    userInputField: 'Trường nhập liệu người dùng',
    noVar: 'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi bắt đầu phiên mới.',
    chatVarTip: 'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi bắt đầu phiên mới',
    completionVarTip: 'Điền vào giá trị của biến, nó sẽ tự động thay thế từ khóa lời nhắc mỗi khi một câu hỏi được gửi.',
    previewTitle: 'Xem trước lời nhắc',
    queryTitle: 'Nội dung truy vấn',
    queryPlaceholder: 'Vui lòng nhập văn bản yêu cầu.',
    run: 'CHẠY',
  },
  result: 'Văn bản đầu ra',
  datasetConfig: {
    settingTitle: 'Cài đặt truy xuất',
    knowledgeTip: 'Nhấn vào nút "+" để thêm kiến thức',
    retrieveOneWay: {
      title: 'Truy xuất N-to-1',
      description: 'Dựa trên ý định của người dùng và mô tả kiến thức, Agent tự động chọn kiến thức tốt nhất để truy vấn. Phù hợp nhất cho các ứng dụng có kiến thức cụ thể, giới hạn.',
    },
    retrieveMultiWay: {
      title: 'Truy xuất đa hướng',
      description: 'Dựa trên ý định của người dùng, truy vấn qua tất cả kiến thức, truy xuất văn bản liên quan từ nhiều nguồn và chọn ra kết quả tốt nhất phù hợp với truy vấn của người dùng sau khi sắp xếp lại. Yêu cầu cấu hình của API mô hình Rerank.',
    },
    rerankModelRequired: 'Mô hình Rerank là bắt buộc',
    params: 'Tham số',
    top_k: 'Top K',
    top_kTip: 'Sử dụng để lọc các phần chính xác nhất với câu hỏi của người dùng. Hệ thống cũng sẽ tự động điều chỉnh giá trị của Top K, theo max_tokens của mô hình đã chọn.',
    score_threshold: 'Ngưỡng điểm',
    score_thresholdTip: 'Sử dụng để thiết lập ngưỡng tương đồng cho việc lọc các phần.',
    retrieveChangeTip: 'Thay đổi chế độ chỉ mục và chế độ truy xuất có thể ảnh hưởng đến các ứng dụng liên quan đến kiến thức này.',
  },
  debugAsSingleModel: 'Gỡ lỗi như một mô hình',
  debugAsMultipleModel: 'Gỡ lỗi như nhiều mô hình',
  duplicateModel: 'Sao chép',
  publishAs: 'Xuất bản dưới dạng',
  assistantType: {
    name: 'Loại trợ lý',
    chatAssistant: {
      name: 'Trợ lý cơ bản',
      description: 'Xây dựng một trợ lý dựa trên trò chuyện sử dụng một Mô hình Ngôn ngữ Lớn.',
    },
    agentAssistant: {
      name: 'Trợ lý tác nhân',
      description: 'Xây dựng một tác nhân thông minh có thể tự động chọn các công cụ để hoàn thành các nhiệm vụ.',
    },
  },
  agent: {
    agentMode: 'Chế độ tác nhân',
    agentModeDes: 'Thiết lập loại chế độ suy luận cho tác nhân',
    agentModeType: {
      ReACT: 'ReAct',
      functionCall: 'Gọi hàm',
    },
    setting: {
      name: 'Thiết lập tác nhân',
      description: 'Thiết lập tác nhân cho phép cấu hình chế độ tác nhân và các tính năng nâng cao như lời nhắc tích hợp sẵn, chỉ có sẵn trong loại Tác nhân.',
      maximumIterations: {
        name: 'Số lần lặp tối đa',
        description: 'Giới hạn số lần lặp mà một trợ lý tác nhân có thể thực hiện',
      },
    },
    buildInPrompt: 'Lời nhắc tích hợp',
    firstPrompt: 'Lời nhắc đầu tiên',
    nextIteration: 'Lần lặp tiếp theo',
    promptPlaceholder: 'Viết lời nhắc của bạn ở đây',
    tools: {
      name: 'Công cụ',
      description: 'Sử dụng công cụ có thể mở rộng khả năng của LLM, như tìm kiếm trên internet hoặc thực hiện các phép tính khoa học',
      enabled: 'Đã kích hoạt',
    },
  },
}

export default translation
