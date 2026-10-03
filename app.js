/**
 * SVPP (Autonomous) - Sri Venkatesa Perumal College of Engineering & Technology
 * Department of Artificial Intelligence Portal - Core Application Logic
 */

// =============================================================================
// 1. DATA REPOSITORIES (R26 Curriculum, Students, Faculty, Circulars, Timetables)
// =============================================================================

const SVPP_DATA = {
  college: {
    name: "Sri Venkatesa Perumal College of Engineering & Technology",
    shortName: "SVPP",
    location: "Puttur - 517583, Tirupati Dist., Andhra Pradesh",
    status: "Autonomous Institution Affiliated to JNTUA, Ananthapuramu",
    counsellingCode: "SVPP",
    phone: "9390505457 / 9390505452",
    email: "principal@svpcet.org / hod.ai@svpcet.org",
    accreditations: ["NAAC 'A' Grade", "NBA Accredited", "AICTE Approved", "ISO 9001:2015"]
  },

  // Faculty Directory (Department of Artificial Intelligence)
  faculty: [
    { id: "FAC-AI-01", name: "Dr. V. Janardhan Babu, Ph.D.", designation: "Professor & HOD", specialization: "Artificial Intelligence, Deep Learning & Neural Systems", email: "hod.ai@svpcet.org", phone: "8500666884", room: "AI Block - 301" },
    { id: "FAC-AI-02", name: "Mrs. N. Sridevi, M.Tech", designation: "Associate Professor", specialization: "Object Oriented Programming (Java) & Operating Systems", email: "sridevi.ai@svpcet.org", phone: "9493324549", room: "AI Block - 304" },
    { id: "FAC-AI-03", name: "Mr. H. Mohammed, M.Tech", designation: "Associate Professor", specialization: "Natural Language Processing, Full Stack Dev & Deep Learning", email: "mohammed.ai@svpcet.org", phone: "7893197479", room: "AI Block - 305" },
    { id: "FAC-AI-04", name: "Mr. P. Gopichand, M.Tech", designation: "Assistant Professor", specialization: "Advanced Data Structures & Algorithms", email: "gopichand.ai@svpcet.org", phone: "7674005465", room: "AI Block - 306" },
    { id: "FAC-AI-05", name: "Ms. H. Nazeema, M.Tech", designation: "Assistant Professor", specialization: "Advanced Data Structures & Algorithms", email: "nazeema.ai@svpcet.org", phone: "8374946620", room: "AI Block - 307" },
    { id: "FAC-AI-06", name: "Dr. S. Venkata Kiran, Ph.D.", designation: "Associate Professor", specialization: "Computer Vision & Digital Image Processing", email: "venkatakiran.ai@svpcet.org", phone: "8333020485", room: "AI Block - 308" },
    { id: "FAC-AI-07", name: "Mr. K. Purushotham, M.Tech", designation: "Assistant Professor", specialization: "Computer Vision & NLP Applications", email: "purushotham.ai@svpcet.org", phone: "8686101564", room: "AI Block - 309" },
    { id: "FAC-AI-08", name: "Mrs. Revathi, M.Tech", designation: "Assistant Professor", specialization: "Operating Systems & System Programming", email: "revathi.ai@svpcet.org", phone: "9618954293", room: "AI Block - 310" },
    { id: "FAC-AI-09", name: "Mrs. Saigeetha, M.Sc, M.Phil", designation: "Assistant Professor", specialization: "Discrete Mathematics & Graph Theory", email: "saigeetha.math@svpcet.org", phone: "8297112259", room: "Basic Sciences Block" },
    { id: "FAC-AI-10", name: "Mrs. V.P. Rohini, MBA", designation: "Assistant Professor", specialization: "Universal Human Values & Management Science", email: "rohini.hms@svpcet.org", phone: "8309508517", room: "Humanities Block" },
    { id: "FAC-AI-11", name: "Ms. R.R.S Spandana, M.Tech", designation: "Assistant Professor", specialization: "Generative AI & LLM Systems", email: "spandana.ai@svpcet.org", phone: "8522881017", room: "AI Block - 311" },
    { id: "FAC-AI-12", name: "Ms. D.V.S Charita, M.Tech", designation: "Assistant Professor", specialization: "AI in Cyber Security & Network Defense", email: "charita.ai@svpcet.org", phone: "8309481262", room: "AI Block - 312" },
    { id: "FAC-AI-13", name: "Mr. A. Dhanasekhar Reddy, M.Tech", designation: "Assistant Professor", specialization: "AI for Smart Cities & IoT Systems", email: "dhanasekhar.ai@svpcet.org", phone: "9966686918", room: "AI Block - 314" },
    { id: "FAC-AI-14", name: "Mrs. K. Hemavathi, M.Tech", designation: "Assistant Professor", specialization: "Python Programming & Data Analytics", email: "hemavathi.ai@svpcet.org", phone: "9347142967", room: "AI Block - 315" },
    { id: "FAC-AI-15", name: "Mr. Dr. P. Vinod Kumar, Ph.D.", designation: "Assistant Professor", specialization: "Environmental Science & Sustainability", email: "vinodkumar.env@svpcet.org", phone: "8500951282", room: "Basic Sciences Block" }
  ],

  // Circulars & Notifications
  circulars: [
    {
      id: "CIRC-2026-089",
      date: "02 Oct 2026",
      day: "02",
      month: "OCT",
      category: "exams",
      badgeText: "B.Tech AI Mid-I",
      badgeClass: "badge-exam",
      title: "Schedule of B.Tech II & III Year Artificial Intelligence Mid-I Examinations, A.Y. 2026-27",
      desc: "All II and III B.Tech CSE (AI) students are informed that Mid-I examinations will commence from 14th October 2026. Hall tickets and seating plans are published below.",
      refNo: "SVPP/AI/EXAM/2026-27/089",
      issuedBy: "Controller of Examinations & HOD - AI",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-088",
      date: "28 Sep 2026",
      day: "28",
      month: "SEP",
      category: "academic",
      badgeText: "R26 BoS Approved",
      badgeClass: "badge-academic",
      title: "Notification: 1st Board of Studies (BoS) Approved R26 Syllabus Copy Released",
      desc: "The Department of Artificial Intelligence has released the finalized R26 Autonomous course curriculum and detailed syllabus for Semesters I through IV.",
      refNo: "SVPP/AI/BOS/2026-27/012",
      issuedBy: "Chairman, Board of Studies (Dept. of AI)",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-087",
      date: "24 Sep 2026",
      day: "24",
      month: "SEP",
      category: "attendance",
      badgeText: "Attendance Alert",
      badgeClass: "badge-urgent",
      title: "Monthly Cumulative Attendance Report - September 2026 Display on Portal",
      desc: "Students having less than 75% attendance are directed to meet their faculty mentors immediately before 5th October to avoid exam condonation penalty.",
      refNo: "SVPP/AI/ATTN/2026-09/44",
      issuedBy: "Head of the Department (AI)",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-085",
      date: "20 Sep 2026",
      day: "20",
      month: "SEP",
      category: "faculty",
      badgeText: "Faculty Meeting",
      badgeClass: "badge-faculty",
      title: "Department Faculty Review Meeting on AI Research Labs & NAAC Documentation",
      desc: "All teaching faculty of AI Department are requested to assemble in the AI Seminar Hall on Saturday at 3:30 PM with Mid-1 internal question bank papers.",
      refNo: "SVPP/AI/FAC/2026-09/10",
      issuedBy: "Dr. K. Ramanathan, HOD-AI",
      pdfUrl: "#"
    },
    {
      id: "CIRC-2026-082",
      date: "15 Sep 2026",
      day: "15",
      month: "SEP",
      category: "events",
      badgeText: "Hackathon 2026",
      badgeClass: "badge-academic",
      title: "Call for Entries: SVPP Autonomous State-Level Generative AI Hackathon 2026",
      desc: "Registration is open for teams to build Edge AI & Computer Vision solutions. Cash prize pool of INR 50,000 sponsored by industry partners.",
      refNo: "SVPP/AI/CLUB/2026-09/03",
      issuedBy: "SVPP AI Innovation Club & IEEE Student Branch",
      pdfUrl: "#"
    }
  ],

  // R26 Syllabus Courses (Extract from SVPP R26 Autonomy Documents)
  syllabus: {
    "sem3": [
      {
        code: "26PC4301",
        title: "AI Tools and Applications",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Covers modern AI engineering tools, prompt engineering, HuggingFace transformers, LangChain frameworks, API orchestrations, and deployment pipelines.",
        units: [
          { num: "Unit I", title: "Introduction to Modern AI Ecosystem", content: "Evolution of AI tools, cloud AI APIs (OpenAI, Gemini, Claude), Python AI toolchains, Jupyter and Google Colab environments." },
          { num: "Unit II", title: "LLM Frameworks & Prompting", content: "Prompt engineering paradigms, zero-shot and few-shot inference, LangChain architectures, chaining tools and vector storage." },
          { num: "Unit III", title: "Embeddings & Retrieval Augmented Generation (RAG)", content: "Vector databases (Chroma, FAISS), document chunking, semantic similarity metrics, building end-to-end RAG pipelines." },
          { num: "Unit IV", title: "Autonomous Agents & Tool Calling", content: "ReAct patterns, multi-agent frameworks, integrating external database queries and web tools." },
          { num: "Unit V", title: "AI Application Deployment & Ethics", content: "Streamlit and FastAPI serving, model latency optimization, AI safety, bias mitigation, and responsible AI practices." }
        ],
        textbooks: ["Modern AI Tools & Frameworks by S. Russell, Pearson 2025", "Hands-on LangChain and LLM Applications by Harrison Chase, O'Reilly 2024"]
      },
      {
        code: "26SE4301",
        title: "AI Assisted Application Development",
        ltpc: { l: 1, t: 0, p: 2, c: 2.0 },
        category: "Skill Enhancement",
        desc: "Hands-on engineering using AI coding assistants, automated test generation, CI/CD integration, and full-stack AI web prototypes.",
        units: [
          { num: "Unit I", title: "AI-Augmented Software Engineering", content: "Code generation models, GitHub Copilot, Cursor, automated code refactoring, context-aware assistance." },
          { num: "Unit II", title: "Automated Testing & Bug Finding", content: "AI test suite synthesis, unit testing generation, vulnerability detection, static analysis with LLMs." },
          { num: "Unit III", title: "Full-Stack AI Application Design", content: "Connecting AI backends with modern frontend architectures, REST/GraphQL endpoints, responsive design." },
          { num: "Unit IV", title: "API Integration & Middleware", content: "Rate limiting, secret management, caching layer with Redis, asynchronous task queues." },
          { num: "Unit V", title: "Deployment & Monitoring", content: "Containerization using Docker, cloud hosting on Render/Vercel/AWS, telemetry and model logging." }
        ],
        textbooks: ["AI-Driven Software Development by M. Fowler, Addison-Wesley 2025"]
      },
      {
        code: "26PC4302",
        title: "Intelligent Data Processing and System Integration",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Data pipelines for machine learning, stream processing, feature engineering, distributed storage, and end-to-end telemetry integration.",
        units: [
          { num: "Unit I", title: "Data Ingestion & Cleaning at Scale", content: "ETL pipelines, missing value imputation, outlier detection algorithms, Apache Arrow, Polars and Pandas." },
          { num: "Unit II", title: "Feature Engineering & Dimensionality Reduction", content: "PCA, t-SNE, UMAP, categorical encodings, automated feature stores, data normalization." },
          { num: "Unit III", title: "Stream Processing & Event Systems", content: "Apache Kafka and RabbitMQ fundamentals, real-time event streaming for ML models, windowing techniques." },
          { num: "Unit IV", title: "System Integration Architecture", content: "Microservices design for AI inference, message brokers, caching strategies, horizontal scalability." },
          { num: "Unit V", title: "Data Governance & Quality Assurance", content: "Data lineage, schema validation, data drift detection, Great Expectations framework." }
        ],
        textbooks: ["Designing Data-Intensive Applications by Martin Kleppmann, O'Reilly"]
      },
      {
        code: "26PC4303",
        title: "Computer Architecture for Intelligent Systems",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Hardware architectures optimized for deep learning, GPUs, TPUs, systolic arrays, memory hierarchies, and edge tensor accelerators.",
        units: [
          { num: "Unit I", title: "Hardware Fundamentals for AI", content: "CPU vs GPU vs NPU comparison, SIMD/MIMD architectures, arithmetic units for FP16, BF16 and INT8." },
          { num: "Unit II", title: "Memory Hierarchy & Bandwidth Bottlenecks", content: "HBM3, cache memory hierarchies, memory-bound vs compute-bound operations, roofline model." },
          { num: "Unit III", title: "Tensor Processing Units & Systolic Arrays", content: "Matrix multiplication hardware, systolic dataflow architectures, Google TPU architecture." },
          { num: "Unit IV", title: "Edge AI Accelerators", content: "Embedded neural processors, ARM Cortex-M with CMSIS-NN, Intel Neural Compute Stick, Apple Neural Engine." },
          { num: "Unit V", title: "Quantization & Model Compression", content: "Weight pruning, post-training quantization, QAT (Quantization Aware Training), ONNX runtime." }
        ],
        textbooks: ["Computer Architecture: A Quantitative Approach by Hennessy & Patterson"]
      },
      {
        code: "26PC4304",
        title: "Foundations of Artificial Intelligence",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "State space search, heuristic algorithms, adversarial search, propositional & first-order logic, knowledge graphs, and uncertainty reasoning.",
        units: [
          { num: "Unit I", title: "Problem Formulation & Search Strategies", content: "Intelligent agents, environments, BFS, DFS, UCS, A* search, heuristic design, optimality proofs." },
          { num: "Unit II", title: "Adversarial Search & Game Playing", content: "Minimax algorithm, Alpha-Beta pruning, evaluation functions, Monte Carlo Tree Search (MCTS)." },
          { num: "Unit III", title: "Knowledge Representation & Logic", content: "Propositional logic, inference rules, resolution refutation, First-Order Logic (FOL), ontologies." },
          { num: "Unit IV", title: "Reasoning Under Uncertainty", content: "Probability basics, Bayesian Networks, conditional independence, exact and approximate inference." },
          { num: "Unit V", title: "Planning & Decision Making", content: "Classical planning, STRIPS, PDDL, Markov Decision Processes (MDPs), Bellman equations." }
        ],
        textbooks: ["Artificial Intelligence: A Modern Approach by Stuart Russell & Peter Norvig"]
      },
      {
        code: "26PC4305",
        title: "Intelligent Data Processing and System Integration Lab",
        ltpc: { l: 0, t: 0, p: 3, c: 1.5 },
        category: "Professional Lab",
        desc: "Hands-on implementation of streaming data pipelines, vector databases, Kafka ingestion, and Dockerized inference servers.",
        units: [
          { num: "Week 1-3", title: "High-Performance Data Ingestion", content: "Benchmarking Polars vs Pandas on 10M row dataset, automated cleansing and outlier clipping." },
          { num: "Week 4-6", title: "Vector DB & Hybrid Search", content: "Ingesting Wikipedia corpora into Milvus/Chroma and benchmarking BM25 vs dense embeddings." },
          { num: "Week 7-9", title: "Kafka Event Stream Simulation", content: "Publishing simulated IoT sensor stream to Kafka topic and scoring incoming points with PyTorch model." },
          { num: "Week 10-12", title: "Microservice Containerization", content: "Packaging model inference API into Docker container with Prometheus metrics endpoint." }
        ],
        textbooks: ["SVPP Autonomous Department of AI Lab Manual, R26 Edition"]
      }
    ],
    "sem4": [
      {
        code: "26PC4401",
        title: "Machine Learning: Principles & Algorithms",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Supervised and unsupervised learning, regression, SVM, decision trees, ensemble methods, clustering, and cross-validation.",
        units: [
          { num: "Unit I", title: "Introduction & Linear Models", content: "Linear regression, logistic regression, gradient descent variants, regularization (L1/L2)." },
          { num: "Unit II", title: "Tree Models & Ensembles", content: "Decision trees, Random Forests, XGBoost, LightGBM, boosting and bagging mathematics." },
          { num: "Unit III", title: "Kernel Methods & SVMs", content: "Support vector machines, dual formulation, RBF kernels, soft margin classification." },
          { num: "Unit IV", title: "Unsupervised Learning", content: "K-Means, Gaussian Mixture Models, EM algorithm, Hierarchical clustering, PCA." },
          { num: "Unit V", title: "Model Evaluation & Bias-Variance", content: "ROC-AUC, Precision-Recall, Cross-validation strategies, bias-variance tradeoff, hyperparameter tuning." }
        ],
        textbooks: ["Pattern Recognition and Machine Learning by Christopher Bishop"]
      },
      {
        code: "26PC4402",
        title: "Deep Neural Networks & Architectures",
        ltpc: { l: 3, t: 0, p: 0, c: 3.0 },
        category: "Professional Core",
        desc: "Feedforward networks, backpropagation, CNNs, RNNs, LSTMs, Transformers, and optimization algorithms.",
        units: [
          { num: "Unit I", title: "Neural Foundations", content: "Perceptrons, activation functions (ReLU, GELU), backpropagation mathematical derivation, Adam optimizer." },
          { num: "Unit II", title: "Convolutional Neural Networks", content: "Conv layers, pooling, ResNet, EfficientNet, transfer learning for image classification." },
          { num: "Unit III", title: "Sequence Models", content: "Recurrent neural networks, vanishing gradient solutions, LSTM and GRU cell mechanics." },
          { num: "Unit IV", title: "Transformer Self-Attention", content: "Query-Key-Value attention, multi-head attention, positional encodings, BERT and GPT architectures." },
          { num: "Unit V", title: "Training Dynamics & Regularization", content: "Dropout, Batch Normalization, Layer Normalization, learning rate schedules, loss landscapes." }
        ],
        textbooks: ["Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville"]
      }
    ]
  },

  // Student Mock Database with Realistic SVPP Details
  students: {
    "23F61A3101": {
      name: "T. Pujasree",
      rollNo: "23F61A3101",
      branch: "CSE (Artificial Intelligence)",
      year: "II B.Tech",
      semester: "I Semester (R26)",
      mentor: "Dr. K. Ramanathan",
      cgpa: "9.42",
      sgpa: "9.50",
      attendanceOverall: 88.5,
      totalClasses: 260,
      attendedClasses: 230,
      status: "Safe",
      subjectAttendance: [
        { code: "26PC4301", name: "AI Tools and Applications", conducted: 45, attended: 42, pct: 93.3 },
        { code: "26SE4301", name: "AI Assisted App Dev", conducted: 30, attended: 28, pct: 93.3 },
        { code: "26PC4302", name: "Intelligent Data Processing", conducted: 46, attended: 39, pct: 84.8 },
        { code: "26PC4303", name: "Computer Architecture for AI", conducted: 44, attended: 38, pct: 86.4 },
        { code: "26PC4304", name: "Foundations of AI", conducted: 45, attended: 41, pct: 91.1 },
        { code: "26PC4305", name: "Data Processing Lab", conducted: 50, attended: 42, pct: 84.0 }
      ],
      midMarks: {
        mid1: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 28, quiz: 10, assignment: 5, total: 43, scaled: 29 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 29, quiz: 9, assignment: 5, total: 43, scaled: 29 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 27, quiz: 10, assignment: 5, total: 42, scaled: 28 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 26, quiz: 8, assignment: 5, total: 39, scaled: 26 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 29, quiz: 10, assignment: 5, total: 44, scaled: 30 }
        ],
        mid2: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 29, quiz: 10, assignment: 5, total: 44, scaled: 30 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 28, quiz: 10, assignment: 5, total: 43, scaled: 29 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 28, quiz: 9, assignment: 5, total: 42, scaled: 28 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 27, quiz: 9, assignment: 5, total: 41, scaled: 27 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 30, quiz: 10, assignment: 5, total: 45, scaled: 30 }
        ]
      },
      results: [
        { code: "26PC4301", name: "AI Tools and Applications", internal: 29, external: 65, total: 94, grade: "O", points: 10, credits: 3.0, status: "PASS" },
        { code: "26SE4301", name: "AI Assisted App Dev", internal: 29, external: 46, total: 75, grade: "O", points: 10, credits: 2.0, status: "PASS" },
        { code: "26PC4302", name: "Intelligent Data Processing", internal: 28, external: 61, total: 89, grade: "A+", points: 9, credits: 3.0, status: "PASS" },
        { code: "26PC4303", name: "Comp Architecture for AI", internal: 27, external: 58, total: 85, grade: "A+", points: 9, credits: 3.0, status: "PASS" },
        { code: "26PC4304", name: "Foundations of AI", internal: 30, external: 67, total: 97, grade: "O", points: 10, credits: 3.0, status: "PASS" },
        { code: "26PC4305", name: "Data Processing Lab", internal: 29, external: 48, total: 77, grade: "O", points: 10, credits: 1.5, status: "PASS" }
      ]
    },

    "23F61A3105": {
      name: "K. Bhanu Prakash",
      rollNo: "23F61A3105",
      branch: "CSE (Artificial Intelligence)",
      year: "II B.Tech",
      semester: "I Semester (R26)",
      mentor: "Prof. S. Priya",
      cgpa: "8.65",
      sgpa: "8.80",
      attendanceOverall: 79.2,
      totalClasses: 260,
      attendedClasses: 206,
      status: "Safe",
      subjectAttendance: [
        { code: "26PC4301", name: "AI Tools and Applications", conducted: 45, attended: 36, pct: 80.0 },
        { code: "26SE4301", name: "AI Assisted App Dev", conducted: 30, attended: 24, pct: 80.0 },
        { code: "26PC4302", name: "Intelligent Data Processing", conducted: 46, attended: 37, pct: 80.4 },
        { code: "26PC4303", name: "Computer Architecture for AI", conducted: 44, attended: 34, pct: 77.3 },
        { code: "26PC4304", name: "Foundations of AI", conducted: 45, attended: 36, pct: 80.0 },
        { code: "26PC4305", name: "Data Processing Lab", conducted: 50, attended: 39, pct: 78.0 }
      ],
      midMarks: {
        mid1: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 24, quiz: 8, assignment: 5, total: 37, scaled: 25 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 25, quiz: 8, assignment: 4, total: 37, scaled: 25 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 23, quiz: 9, assignment: 5, total: 37, scaled: 25 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 22, quiz: 7, assignment: 4, total: 33, scaled: 22 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 25, quiz: 9, assignment: 5, total: 39, scaled: 26 }
        ],
        mid2: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 26, quiz: 9, assignment: 5, total: 40, scaled: 27 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 27, quiz: 9, assignment: 5, total: 41, scaled: 27 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 25, quiz: 8, assignment: 5, total: 38, scaled: 25 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 24, quiz: 8, assignment: 4, total: 36, scaled: 24 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 26, quiz: 9, assignment: 5, total: 40, scaled: 27 }
        ]
      },
      results: [
        { code: "26PC4301", name: "AI Tools and Applications", internal: 26, external: 55, total: 81, grade: "A", points: 8, credits: 3.0, status: "PASS" },
        { code: "26SE4301", name: "AI Assisted App Dev", internal: 26, external: 42, total: 68, grade: "A+", points: 9, credits: 2.0, status: "PASS" },
        { code: "26PC4302", name: "Intelligent Data Processing", internal: 25, external: 58, total: 83, grade: "A+", points: 9, credits: 3.0, status: "PASS" },
        { code: "26PC4303", name: "Comp Architecture for AI", internal: 23, external: 52, total: 75, grade: "A", points: 8, credits: 3.0, status: "PASS" },
        { code: "26PC4304", name: "Foundations of AI", internal: 27, external: 60, total: 87, grade: "A+", points: 9, credits: 3.0, status: "PASS" },
        { code: "26PC4305", name: "Data Processing Lab", internal: 28, external: 45, total: 73, grade: "O", points: 10, credits: 1.5, status: "PASS" }
      ]
    },

    "23F61A3118": {
      name: "M. Sai Charan",
      rollNo: "23F61A3118",
      branch: "CSE (Artificial Intelligence)",
      year: "II B.Tech",
      semester: "I Semester (R26)",
      mentor: "Dr. M. Varma",
      cgpa: "7.40",
      sgpa: "7.25",
      attendanceOverall: 68.8,
      totalClasses: 260,
      attendedClasses: 179,
      status: "Condonation",
      subjectAttendance: [
        { code: "26PC4301", name: "AI Tools and Applications", conducted: 45, attended: 31, pct: 68.9 },
        { code: "26SE4301", name: "AI Assisted App Dev", conducted: 30, attended: 21, pct: 70.0 },
        { code: "26PC4302", name: "Intelligent Data Processing", conducted: 46, attended: 30, pct: 65.2 },
        { code: "26PC4303", name: "Computer Architecture for AI", conducted: 44, attended: 29, pct: 65.9 },
        { code: "26PC4304", name: "Foundations of AI", conducted: 45, attended: 32, pct: 71.1 },
        { code: "26PC4305", name: "Data Processing Lab", conducted: 50, attended: 36, pct: 72.0 }
      ],
      midMarks: {
        mid1: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 19, quiz: 6, assignment: 4, total: 29, scaled: 19 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 20, quiz: 7, assignment: 4, total: 31, scaled: 21 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 18, quiz: 6, assignment: 4, total: 28, scaled: 19 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 17, quiz: 5, assignment: 4, total: 26, scaled: 17 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 20, quiz: 7, assignment: 4, total: 31, scaled: 21 }
        ],
        mid2: [
          { code: "26PC4301", name: "AI Tools & Applications", descriptive: 21, quiz: 7, assignment: 4, total: 32, scaled: 21 },
          { code: "26SE4301", name: "AI Assisted App Dev", descriptive: 22, quiz: 8, assignment: 5, total: 35, scaled: 23 },
          { code: "26PC4302", name: "Intelligent Data Processing", descriptive: 20, quiz: 7, assignment: 4, total: 31, scaled: 21 },
          { code: "26PC4303", name: "Comp Architecture for AI", descriptive: 18, quiz: 6, assignment: 4, total: 28, scaled: 19 },
          { code: "26PC4304", name: "Foundations of AI", descriptive: 22, quiz: 8, assignment: 5, total: 35, scaled: 23 }
        ]
      },
      results: [
        { code: "26PC4301", name: "AI Tools and Applications", internal: 20, external: 46, total: 66, grade: "B+", points: 7, credits: 3.0, status: "PASS" },
        { code: "26SE4301", name: "AI Assisted App Dev", internal: 22, external: 36, total: 58, grade: "B+", points: 7, credits: 2.0, status: "PASS" },
        { code: "26PC4302", name: "Intelligent Data Processing", internal: 20, external: 44, total: 64, grade: "B+", points: 7, credits: 3.0, status: "PASS" },
        { code: "26PC4303", name: "Comp Architecture for AI", internal: 18, external: 40, total: 58, grade: "B", points: 6, credits: 3.0, status: "PASS" },
        { code: "26PC4304", name: "Foundations of AI", internal: 22, external: 49, total: 71, grade: "A", points: 8, credits: 3.0, status: "PASS" },
        { code: "26PC4305", name: "Data Processing Lab", internal: 24, external: 38, total: 62, grade: "A", points: 8, credits: 1.5, status: "PASS" }
      ]
    }
  },

  // Department Timetables (Official schedules for II-A, II-B, III-A, III-B, and IV B.Tech AI)
  timetables: {
    classes: {
      "ii-a": {
        id: "ii-a",
        label: "II B.Tech • Sec A",
        fullName: "2026-2027 II B.Tech - I SEM (A-Section) TIME TABLE",
        room: "LH 203",
        regulation: "R23-B25",
        academicYear: "2026-2027",
        classInCharge: "Mrs. N. Sridevi",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "OOP1", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS1", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "DMGT1", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "ADS2", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "ES", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "OOP2", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "OOP3", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "UHV", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "DMGT2", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "NPTEL + PP LAB", subCode: "23SE0501", name: "Python Programming Lab", teacher: "Mrs. K. Hemavathi", phone: "9347142967", span: 4, isLab: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "ADS3", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "DMGT3", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "UHV1", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { isBreak: true },
              { code: "ADS4", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Ms. H. Nazeema", phone: "8374946620" },
              { code: "AI3", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "SPORTS / LIB", subCode: "-", name: "Sports / Library Session", teacher: "Faculty Incharge", span: 2, isActivity: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "OOP LAB", subCode: "23LC0505", name: "OOPJ Lab (Java Programming)", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 3, isLab: true },
              { isBreak: true },
              { code: "OOP5", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "TAP", subCode: "-", name: "Technical Aptitude & Placement", teacher: "Training Incharge", isActivity: true },
              { code: "OOP4", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "UHV2", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "ES2", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "DMGT4", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { isBreak: true },
              { code: "NPTEL + ADS LAB", subCode: "23LC0504", name: "NPTEL + ADSA Lab", teacher: "Ms. H. Nazeema", phone: "8374946620", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23BS0006", subName: "DISCRETE MATHEMATICS AND GRAPH THEORY (DMGT)", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. SAIGEETHA", phone: "8297112259" },
          { subCode: "23HM0002", subName: "UNIVERSAL HUMAN VALUES 2 (UHV)", l: 2, t: "-", p: "-", a: 2, teacher: "MRS. V. P . ROHINI", phone: "8309508517" },
          { subCode: "23PC4301", subName: "ARTIFICIAL INTELLIGENCE (AI)", l: 3, t: "-", p: "-", a: 4, teacher: "DR. V. JANARDHAN BABU", phone: "8500666884" },
          { subCode: "23PC0503", subName: "ADVANCED DATA STRUCTURES AND ALGORITHMS (ADSA)", l: 5, t: "-", p: "-", a: 5, teacher: "MS. H. NAZEEMA", phone: "8374946620" },
          { subCode: "23PC0504", subName: "OBJECT ORIENTED PROGRAMMING THROUGH JAVA (OOPJ)", l: 5, t: "-", p: "-", a: 5, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23LC0504", subName: "ADSA LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MS H. NAZEEMA", phone: "8374946620" },
          { subCode: "23LC0505", subName: "OOPJ LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE0501", subName: "PYTHON PROGRAMMING", l: 0, t: 1, p: 2, a: 4, teacher: "MRS. K. HEMAVATHI", phone: "9347142967" },
          { subCode: "23MC0001", subName: "ENVIRONMENTAL SCIENCE", l: 2, t: "-", p: "-", a: 3, teacher: "MR. DR. P. VINOD KUMAR", phone: "8500951282" }
        ]
      },
      "ii-b": {
        id: "ii-b",
        label: "II B.Tech • Sec B",
        fullName: "2026-2027 II B.Tech - I SEM (B-section) TIME TABLE",
        room: "LH 202",
        regulation: "R23-B25",
        academicYear: "2026-2027",
        classInCharge: "Mr. P. Gopichand",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "DMGT1", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "ES1", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "AI1", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "PP LAB", subCode: "23SE0501", name: "Python Programming Lab", teacher: "Mrs. K. Hemavathi", phone: "9347142967", span: 4, isLab: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "DMGT2", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "UHV1", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "NPTEL + ADS LAB", subCode: "23LC0504", name: "NPTEL + ADSA Lab", teacher: "Mr. P. Gopichand", phone: "7674005465", span: 4, isLab: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "OOP2", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS2", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "AI1", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { isBreak: true },
              { code: "OOP3", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ES2", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { code: "SPORTS/LIB", subCode: "-", name: "Sports & Library Session", teacher: "Faculty Incharge", span: 2, isActivity: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "ADS3", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "DMGT3", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "ES3", subCode: "23MC0001", name: "Environmental Science", teacher: "Mr. Dr. P. Vinod Kumar", phone: "8500951282" },
              { isBreak: true },
              { code: "UHV", subCode: "23HM0002", name: "Universal Human Values 2", teacher: "Mrs. V. P. Rohini", phone: "8309508517" },
              { code: "AI", subCode: "23PC4301", name: "Artificial Intelligence", teacher: "Dr. V. Janardhan Babu", phone: "8500666884" },
              { code: "ADS4", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { code: "ADS5", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "DMGT4", subCode: "23BS0006", name: "Discrete Mathematics & Graph Theory", teacher: "Mrs. Saigeetha", phone: "8297112259" },
              { code: "OOP", subCode: "23PC0504", name: "Object Oriented Programming Through Java", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ADS", subCode: "23PC0503", name: "Advanced Data Structures & Algorithms", teacher: "Mr. P. Gopichand", phone: "7674005465" },
              { isBreak: true },
              { code: "NPTEL + OOP LAB", subCode: "23LC0505", name: "NPTEL + OOPJ Lab", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23BS0006", subName: "DISCRETE MATHEMATICS AND GRAPH THEORY (DMGT)", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. SAIGEETHA", phone: "8297112259" },
          { subCode: "23HM0002", subName: "UNIVERSAL HUMAN VALUES 2 (UHV)", l: 2, t: "-", p: "-", a: 2, teacher: "MRS. V. P. ROHINI", phone: "8309508517" },
          { subCode: "23PC4301", subName: "ARTIFICIAL INTELLIGENCE (AI)", l: 3, t: "-", p: "-", a: 4, teacher: "DR. V. JANARDHAN BABU", phone: "8500666884" },
          { subCode: "23PC0503", subName: "ADVANCED DATA STRUCTURES AND ALGORITHMS (ADSA)", l: 5, t: "-", p: "-", a: 5, teacher: "MR. P. GOPICHAND", phone: "7674005465" },
          { subCode: "23PC0504", subName: "OBJECT ORIENTED PROGRAMMING THROUGH JAVA (OOPJ)", l: 5, t: "-", p: "-", a: 5, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23LC0504", subName: "ADSA LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MR. P. GOPICHAND", phone: "7674005465" },
          { subCode: "23LC0505", subName: "OOPJ LAB", l: 0, t: 0, p: 3, a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE0501", subName: "PYTHON PROGRAMMING", l: 0, t: 1, p: 2, a: 4, teacher: "MRS. K. HEMAVATHI", phone: "9347142967" },
          { subCode: "23MC0001", subName: "ENVIRONMENTAL SCIENCE", l: 2, t: "-", p: "-", a: 3, teacher: "MR DR. P. VINOD KUMAR", phone: "8500951282" }
        ]
      },
      "iii-a": {
        id: "iii-a",
        label: "III B.Tech • Sec A",
        fullName: "2026-2027 III B.Tech - I SEM (A-Section) TIME TABLE",
        room: "LH 308A",
        regulation: "R23-B24",
        academicYear: "2026-2027",
        classInCharge: "Dr. S. Venkata Kiran",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "CV & NLP LAB", subCode: "23LC4302", name: "Computer Vision & NLP Lab", teacher: "Dr. S. Venkata Kiran", phone: "8333020485", span: 3, isLab: true },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP 1", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "IQTA1", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "AI & SP LAB", subCode: "23LC4303", name: "AI & System Programming Lab", teacher: "Mrs. N. Sridevi", phone: "9493324549", span: 3, isLab: true },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "NLP1", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP2", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "CVIP3", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "FSD-II LAB", subCode: "23SE4301", name: "Full Stack Development-II Lab", teacher: "Mr. H. Mohammed", phone: "7893197479", span: 4, isLab: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "IQTA2", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "NLP3", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP4", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { isBreak: true },
              { code: "NLP4", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "OSSP4", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "IQTA", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "NLP6(M)", subCode: "23PC4303", name: "NLP Mentoring Session", teacher: "Mr. H. Mohammed", phone: "7893197479", isActivity: true }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "OSSP5", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. N. Sridevi", phone: "9493324549" },
              { code: "CVIP5", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Dr. S. Venkata Kiran", phone: "8333020485" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "IQTA", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Bhavani", phone: "9533991726" },
              { code: "LIB", subCode: "-", name: "Digital Library & Self-Study", teacher: "Incharge", isActivity: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4303", subName: "NATURAL LANGUAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PC4304", subName: "OPERATING SYSTEMS & SYSTEM PROGRAMMING", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23PC4305", subName: "COMPUTER VISION & IMAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "DR. S. VENKATA KIRAN", phone: "8333020485" },
          { subCode: "23PE4303", subName: "EXPLORATORY DATA ANALYSIS WITH PYTHON", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23OE0004", subName: "ENGLISH FOR COMPETITIVE EXAMINATIONS", l: 2, t: "-", p: "-", a: 2, teacher: "DR. ANIL", phone: "9963216412" },
          { subCode: "23LC4302", subName: "COMPUTER VISION & NLP LAB", l: "-", t: "-", p: 3, a: 3, teacher: "DR. S. VENKATA KIRAN", phone: "8333020485" },
          { subCode: "23LC4303", subName: "AI & SYSTEM PROGRAMMING LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23SE4301", subName: "FULL STACK DEVELOPMENT-II", l: 0, t: 1, p: 2, a: 3, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23ES0002", subName: "TINKERING LAB", l: "-", t: "-", p: 2, a: 2, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PW0001", subName: "EVALUATION OF COMMUNITY SERVICE INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "MRS. N. SRIDEVI", phone: "9493324549" },
          { subCode: "23PC0515", subName: "INTRODUCTION TO QUANTUM TECHNOLOGIES AND APPLICATIONS", l: 3, t: "-", p: "-", a: 3, teacher: "MRS. BHAVANI", phone: "9533991726" }
        ]
      },
      "iii-b": {
        id: "iii-b",
        label: "III B.Tech • Sec B",
        fullName: "2026-2027 III B.Tech - I SEM (B-Section) TIME TABLE",
        room: "LH 308B",
        regulation: "R23-B24",
        academicYear: "2026-2027",
        classInCharge: "Mr. K. Purushotham",
        totalWeeklyPeriods: 35,
        timingsText: "College Timings: 9:30 AM – 4:10 PM • Lunch: 12:00 – 12:50 PM",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { isBreak: true, label: "LUNCH BREAK", time: "12:00 - 12:50" },
          { num: "4", time: "12:50" },
          { num: "5", time: "1:40" },
          { num: "6", time: "2:30" },
          { num: "7", time: "3:20" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "NLP1", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP1", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { code: "OSSP1", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { isBreak: true },
              { code: "FSD-II LAB", subCode: "23SE4301", name: "Full Stack Development-II Lab", teacher: "Mr. H. Mohammed", phone: "7893197479", span: 4, isLab: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "OSSP2", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "IQTA1", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "NLP2", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { isBreak: true },
              { code: "OSSP", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "NLP", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "IQTA2", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "NLP(LIB)", subCode: "23PC4303", name: "NLP Library / Self Study", teacher: "Mr. H. Mohammed", phone: "7893197479", isActivity: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "NLP3", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "OSSP3", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "CVIP3", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { isBreak: true },
              { code: "OSSP4", subCode: "23PC4304", name: "Operating Systems & System Programming", teacher: "Mrs. Revathi", phone: "9618954293" },
              { code: "IQTA3", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "NLP6", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "CV & NLP LAB", subCode: "23LC4302", name: "Computer Vision & NLP Lab", teacher: "Mr. K. Purushotham", phone: "8686101564", span: 3, isLab: true },
              { isBreak: true },
              { code: "ECE", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP5", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { code: "NLP4", subCode: "23PC4303", name: "Natural Language Processing", teacher: "Mr. H. Mohammed", phone: "7893197479" },
              { code: "CVIP", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "IQTA4", subCode: "23PC0515", name: "Intro to Quantum Technologies & Apps", teacher: "Mrs. Jansi", phone: "8522900174" },
              { code: "ECE3", subCode: "23OE0004", name: "English for Competitive Examinations", teacher: "Dr. Anil", phone: "9963216412" },
              { code: "CVIP", subCode: "23PC4305", name: "Computer Vision & Image Processing", teacher: "Mr. K. Purushotham", phone: "8686101564" },
              { isBreak: true },
              { code: "AI & SP LAB", subCode: "23LC4303", name: "AI & System Programming Lab", teacher: "Mrs. Revathi", phone: "9618954293", span: 4, isLab: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4303", subName: "NATURAL LANGUAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PC4304", subName: "OPERATING SYSTEMS & SYSTEM PROGRAMMING", l: 4, t: "-", p: "-", a: 4, teacher: "MRS. REVATHI", phone: "9618954293" },
          { subCode: "23PC4305", subName: "COMPUTER VISION & IMAGE PROCESSING", l: 4, t: "-", p: "-", a: 4, teacher: "MR. K. PURUSHOTHAM", phone: "8686101564" },
          { subCode: "23PE4303", subName: "DEEP LEARNING FOR COMPUTER VISION", l: 4, t: "-", p: "-", a: 4, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23OE0004", subName: "ENGLISH FOR COMPETITIVE EXAMINATIONS", l: 2, t: "-", p: "-", a: 2, teacher: "DR. ANIL", phone: "9963216412" },
          { subCode: "23LC4302", subName: "COMPUTER VISION & NLP LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MR. K. PURUSHOTHAM", phone: "8686101564" },
          { subCode: "23LC4303", subName: "AI & SYSTEM PROGRAMMING LAB", l: "-", t: "-", p: 3, a: 3, teacher: "MRS. REVATHI", phone: "9618954293" },
          { subCode: "23SE4301", subName: "FULL STACK DEVELOPMENT-II", l: 0, t: 1, p: 2, a: 3, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23ES0002", subName: "TINKERING LAB", l: "-", t: "-", p: 2, a: 2, teacher: "MR. H. MOHAMMED", phone: "7893197479" },
          { subCode: "23PW0001", subName: "EVALUATION OF COMMUNITY SERVICE INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "MRS N SRIDEVI", phone: "9493324549" },
          { subCode: "23PC0515", subName: "INTRODUCTION TO QUANTUM TECHNOLOGIES AND APPLICATIONS", l: 3, t: "-", p: "-", a: 3, teacher: "MRS. JANSI", phone: "8522900174" }
        ]
      },
      "iv": {
        id: "iv",
        label: "IV B.Tech • Final Year",
        fullName: "2026-2027 IV B.Tech - I SEM TIME TABLE",
        room: "LH 310",
        regulation: "R23-B23",
        academicYear: "2026-2027",
        classInCharge: "Ms. R.R.S Spandana",
        totalWeeklyPeriods: 20,
        timingsText: "Morning Sessions: 9:30 AM – 12:50 PM • Afternoon: Industry Internship & Capstone Project Work",
        periodsHeader: [
          { num: "1", time: "9:30" },
          { num: "2", time: "10:20" },
          { num: "3", time: "11:10" },
          { num: "4", time: "12:00" },
          { isBreak: false, isAfternoon: true, label: "Afternoon Session (12:50 - 4:10 PM)", time: "Internship & Project" }
        ],
        days: [
          {
            day: "MON",
            periods: [
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517", isHighlighted: true },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "TUE",
            periods: [
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "WED",
            periods: [
              { code: "AISC", subCode: "23PE4320", name: "AI for Smart Cities & IoT Systems", teacher: "Mr. A. Dhanasekhar Reddy", phone: "9966686918" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "PROMPT ENGINEERING", subCode: "23SE4302", name: "Prompt Engineering Studio / Capstone Lab", teacher: "Mr. K. Lakshman", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "THU",
            periods: [
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517", isHighlighted: true },
              { code: "GAI", subCode: "23PC4309", name: "Generative AI", teacher: "Ms. R.R.S Spandana", phone: "8522881017" },
              { code: "EMPS", subCode: "23OE00013", name: "Employability Skills", teacher: "Dr. R. Devarajulu Reddy", phone: "9440123456" },
              { code: "INDUSTRY INTERNSHIP", subCode: "23PW4301", name: "Evaluation of Industry Internship / Capstone Lab", teacher: "Industry Mentor", span: 1, isAfternoonBlock: true }
            ]
          },
          {
            day: "FRI",
            periods: [
              { code: "MS", subCode: "23HM0012", name: "Management Science", teacher: "Mrs. V.P. Rohini", phone: "8309508517" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "TS", subCode: "23OE0403", name: "Transducers and Sensors", teacher: "Mr. Y. Maheswar Reddy", phone: "8309766268" },
              { code: "CS", subCode: "23PE4315", name: "AI in Cyber Security", teacher: "Ms. D.V.S Charita", phone: "8309481262" },
              { code: "GENDER SENSITIZATION", subCode: "23MC0003", name: "Gender Sensitization / Seminar Session", teacher: "Faculty Incharge", span: 1, isAfternoonBlock: true }
            ]
          }
        ],
        subjects: [
          { subCode: "23PC4309", subName: "GENERATIVE AI (GAI)", l: 3, t: "-", p: "-", a: 3, teacher: "MS. R.R.S SPANDANA", phone: "8522881017" },
          { subCode: "23HM0012", subName: "MANAGEMENT SCIENCE (MS)", l: 2, t: "-", p: "-", a: 3, teacher: "MRS. V.P ROHINI", phone: "8309508517" },
          { subCode: "23PE4315", subName: "AI IN CYBER SECURITY (CS)", l: 3, t: "-", p: "-", a: 5, teacher: "MS. D.V.S CHARITA", phone: "8309481262" },
          { subCode: "23PE4320", subName: "AI FOR SMART CITIES & IOT SYSTEMS (AISC)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. A. DHANASEKHAR REDDY", phone: "9966686918" },
          { subCode: "23OE00013", subName: "EMPLOYABILITY SKILLS (EMPS)", l: 3, t: "-", p: "-", a: 3, teacher: "DR. R.DEVARAJULU REDDY", phone: "9440123456" },
          { subCode: "23OE0403", subName: "TRANSDUCERS AND SENSORS (TS)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. Y. MAHESWAR REDDY", phone: "8309766268" },
          { subCode: "23SE4302", subName: "PROMPT ENGINEERING (PE)", l: 3, t: "-", p: "-", a: 3, teacher: "MR. K. LAKSHMAN", phone: "6305302057" },
          { subCode: "23MC0003", subName: "GENDER SENSITIZATION (GS)", l: 2, t: "-", p: "-", a: 2, teacher: "FACULTY INCHARGE", phone: "-" },
          { subCode: "23PW4301", subName: "EVALUATION OF INDUSTRY INTERNSHIP", l: "-", t: "-", p: "-", a: "-", teacher: "INDUSTRY COORDINATOR", phone: "-" }
        ]
      }
    },

    // Mid Examinations Timetable
    midExams: [
      { date: "14-10-2026", day: "Wednesday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC4301", name: "Artificial Intelligence" },
      { date: "15-10-2026", day: "Thursday", session: "10:00 AM - 12:00 PM (FN)", code: "23BS0006", name: "Discrete Mathematics & Graph Theory" },
      { date: "16-10-2026", day: "Friday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC0503", name: "Advanced Data Structures & Algorithms" },
      { date: "17-10-2026", day: "Saturday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC0504", name: "Object Oriented Programming Through Java" },
      { date: "19-10-2026", day: "Monday", session: "10:00 AM - 12:00 PM (FN)", code: "23PC4303", name: "Natural Language Processing (III B.Tech)" },
      { date: "20-10-2026", day: "Tuesday", session: "02:00 PM - 05:00 PM (AN)", code: "23PC4309", name: "Generative AI (IV B.Tech)" }
    ]
  }
};

// =============================================================================
// 2. HELPER FUNCTIONS & DYNAMIC FALLBACK GENERATOR
// =============================================================================

// Generate a plausible student record if someone types any other roll number

// =============================================================================
// OFFICIAL 3RD YEAR V SEMESTER CSE (AI) STUDENT COHORT (127 STUDENTS)
// Sri Venkatesa Perumal College of Engineering & Technology (SVPP Autonomous)
// =============================================================================

const SVPP_3RD_YEAR_STUDENTS = [
  { rollNo: "24G01A4301", rawName: "NAVYA SREE", name: "Navya Sree" },
  { rollNo: "24G01A4302", rawName: "ADINETI MEERAKUMARI", name: "Adineti Meerakumari" },
  { rollNo: "24G01A4303", rawName: "ALLIKESAM DILLI PRASAD", name: "Allikesam Dilli Prasad" },
  { rollNo: "24G01A4304", rawName: "AMBALATHANDI SURESH DEEPAKRAJ", name: "Ambalathandi Suresh Deepakraj" },
  { rollNo: "24G01A4305", rawName: "ARWA SIVA", name: "Arwa Siva" },
  { rollNo: "24G01A4306", rawName: "ATTURU HASINI", name: "Atturu Hasini" },
  { rollNo: "24G01A4307", rawName: "ATTURU SAI RENU", name: "Atturu Sai Renu" },
  { rollNo: "24G01A4308", rawName: "AUTHURU VIDYASREE", name: "Authuru Vidyasree" },
  { rollNo: "24G01A4309", rawName: "AVULA LAHARI", name: "Avula Lahari" },
  { rollNo: "24G01A4310", rawName: "B HASINI", name: "B Hasini" },
  { rollNo: "24G01A4311", rawName: "B THARUN", name: "B Tharun" },
  { rollNo: "24G01A4312", rawName: "BANDA RAM NAREN SURYA", name: "Banda Ram Naren Surya" },
  { rollNo: "24G01A4313", rawName: "BANNELA BRAHMAIAH", name: "Bannela Brahmaiah" },
  { rollNo: "24G01A4314", rawName: "BARAKA RAM MOHAN", name: "Baraka Ram Mohan" },
  { rollNo: "24G01A4315", rawName: "BATHALA V NARAYANA", name: "Bathala V Narayana" },
  { rollNo: "24G01A4316", rawName: "BEESAPATHNI RAKESH", name: "Beesapathni Rakesh" },
  { rollNo: "24G01A4317", rawName: "BETARASI JYOTHIKA", name: "Betarasi Jyothika" },
  { rollNo: "24G01A4318", rawName: "BOYA BALU", name: "Boya Balu" },
  { rollNo: "24G01A4319", rawName: "BUDDANNAGARI NEERAJA", name: "Buddannagari Neeraja" },
  { rollNo: "24G01A4321", rawName: "BURRA GAYATHRI", name: "Burra Gayathri" },
  { rollNo: "24G01A4322", rawName: "BURRI GUNASRI", name: "Burri Gunasri" },
  { rollNo: "24G01A4323", rawName: "CHADIVE KAVYA", name: "Chadive Kavya" },
  { rollNo: "24G01A4324", rawName: "CHAKALA KARTHIK", name: "Chakala Karthik" },
  { rollNo: "24G01A4325", rawName: "CHAKALI APARNA", name: "Chakali Aparna" },
  { rollNo: "24G01A4326", rawName: "CHAKALI SHIVAKUMAR", name: "Chakali Shivakumar" },
  { rollNo: "24G01A4327", rawName: "CHANAMBATLA RANJITH", name: "Chanambatla Ranjith" },
  { rollNo: "24G01A4328", rawName: "CHARAKULA NIHARIKA", name: "Charakula Niharika" },
  { rollNo: "24G01A4329", rawName: "CHELAMPALEM HARI BABU", name: "Chelampalem Hari Babu" },
  { rollNo: "24G01A4330", rawName: "CHINTHAKAYALA CHANDU", name: "Chinthakayala Chandu" },
  { rollNo: "24G01A4331", rawName: "CHINTHAKUNTA HARSHAVARDHAN REDDY", name: "Chinthakunta Harshavardhan Reddy" },
  { rollNo: "24G01A4332", rawName: "CHITRA PALLAVIKA", name: "Chitra Pallavika" },
  { rollNo: "24G01A4333", rawName: "CHITTURU GIRISH", name: "Chitturu Girish" },
  { rollNo: "24G01A4334", rawName: "D NIKHIL ROY", name: "D Nikhil Roy" },
  { rollNo: "24G01A4336", rawName: "DEVARAKONDA TEJASWI", name: "Devarakonda Tejaswi" },
  { rollNo: "24G01A4337", rawName: "DODDA DIVYA KRUPA", name: "Dodda Divya Krupa" },
  { rollNo: "24G01A4338", rawName: "E DEEPAK YADAV", name: "E Deepak Yadav" },
  { rollNo: "24G01A4339", rawName: "E SREE LAKSHMI", name: "E Sree Lakshmi" },
  { rollNo: "24G01A4340", rawName: "EPURI VENUMADHAV", name: "Epuri Venumadhav" },
  { rollNo: "24G01A4341", rawName: "G KISHORE", name: "G Kishore" },
  { rollNo: "24G01A4342", rawName: "GANDI KOTA BHANUPRAKASH", name: "Gandi Kota Bhanuprakash" },
  { rollNo: "24G01A4343", rawName: "GANDRA VAMSI", name: "Gandra Vamsi" },
  { rollNo: "24G01A4345", rawName: "GOLLAPALLI SUKANYA", name: "Gollapalli Sukanya" },
  { rollNo: "24G01A4346", rawName: "GORLAGUNTA THARUN", name: "Gorlagunta Tharun" },
  { rollNo: "24G01A4347", rawName: "GUDDANNA GARI NANDINI", name: "Guddanna Gari Nandini" },
  { rollNo: "24G01A4348", rawName: "HASTHI ROSHINI", name: "Hasthi Roshini" },
  { rollNo: "24G01A4349", rawName: "INDUKURU HIMA CHARAN", name: "Indukuru Hima Charan" },
  { rollNo: "24G01A4350", rawName: "JAGADESH R", name: "Jagadesh R" },
  { rollNo: "24G01A4352", rawName: "JEGINI BINDU", name: "Jegini Bindu" },
  { rollNo: "24G01A4353", rawName: "K B PRAVEEN KUMAR", name: "K B Praveen Kumar" },
  { rollNo: "24G01A4354", rawName: "K JAGADEESH", name: "K Jagadeesh" },
  { rollNo: "24G01A4356", rawName: "K MANASWINI", name: "K Manaswini" },
  { rollNo: "24G01A4357", rawName: "K MANOJ KUMAR", name: "K Manoj Kumar" },
  { rollNo: "24G01A4358", rawName: "K SHALINI", name: "K Shalini" },
  { rollNo: "24G01A4359", rawName: "K V SREEDHAR", name: "K V Sreedhar" },
  { rollNo: "24G01A4360", rawName: "KALLAKINDA REDDY NAVEEN", name: "Kallakinda Reddy Naveen" },
  { rollNo: "24G01A4361", rawName: "KALLURU JAYA KRISHNA", name: "Kalluru Jaya Krishna" },
  { rollNo: "24G01A4362", rawName: "KALUGOTLA SANDEEP KUMAR", name: "Kalugotla Sandeep Kumar" },
  { rollNo: "24G01A4363", rawName: "KANALA LAYA", name: "Kanala Laya" },
  { rollNo: "24G01A4364", rawName: "KARAKALA AMARNATH REDDY", name: "Karakala Amarnath Reddy" },
  { rollNo: "24G01A4365", rawName: "KARAKAMBADI MOUNIKA", name: "Karakambadi Mounika" },
  { rollNo: "24G01A4366", rawName: "KASANDULA SAI VANI", name: "Kasandula Sai Vani" },
  { rollNo: "24G01A4367", rawName: "KEESALAM POOJITHA", name: "Keesalam Poojitha" },
  { rollNo: "24G01A4368", rawName: "KONDANNA GARI PADMAVATHI", name: "Kondanna Gari Padmavathi" },
  { rollNo: "24G01A4369", rawName: "KOPPALA SUBHASH CHANDRA", name: "Koppala Subhash Chandra" },
  { rollNo: "24G01A4370", rawName: "KOYYAGURA SAIHARSITA", name: "Koyyagura Saiharsita" },
  { rollNo: "24G01A4372", rawName: "KUPPI REDDY GARI KIRAN KUMAR REDDY", name: "Kuppi Reddy Gari Kiran Kumar Reddy" },
  { rollNo: "24G01A4373", rawName: "L PAVANI", name: "L Pavani" },
  { rollNo: "24G01A4374", rawName: "M AJAY", name: "M Ajay" },
  { rollNo: "24G01A4375", rawName: "M JASWANTH REDDY", name: "M Jaswanth Reddy" },
  { rollNo: "24G01A4376", rawName: "M NITHYA SREE", name: "M Nithya Sree" },
  { rollNo: "24G01A4378", rawName: "M R SIDDARTHA YADAV", name: "M R Siddartha Yadav" },
  { rollNo: "24G01A4379", rawName: "MANDALA KALPANA", name: "Mandala Kalpana" },
  { rollNo: "24G01A4380", rawName: "MERALA MAHALAKSHMI", name: "Merala Mahalakshmi" },
  { rollNo: "24G01A4381", rawName: "MUKKARA SANGEETHA", name: "Mukkara Sangeetha" },
  { rollNo: "24G01A4382", rawName: "MUMMIDI HEMANTH", name: "Mummidi Hemanth" },
  { rollNo: "24G01A4383", rawName: "MUTTHULURI DEEKSHITH KUMAR", name: "Mutthuluri Deekshith Kumar" },
  { rollNo: "24G01A4384", rawName: "N ESWAR", name: "N Eswar" },
  { rollNo: "24G01A4385", rawName: "N HARIKRISHNAN", name: "N Harikrishnan" },
  { rollNo: "24G01A4386", rawName: "N SUSHANTH", name: "N Sushanth" },
  { rollNo: "24G01A4387", rawName: "N SWATHI", name: "N Swathi" },
  { rollNo: "24G01A4388", rawName: "NADAVATI CHARAN SAI", name: "Nadavati Charan Sai" },
  { rollNo: "24G01A4389", rawName: "NALLAPUSALA SOMA SEKHAR REDDY", name: "Nallapusala Soma Sekhar Reddy" },
  { rollNo: "24G01A4390", rawName: "NARASINGU POORNIMA", name: "Narasingu Poornima" },
  { rollNo: "24G01A4391", rawName: "P GURU VENKATA HEMANTH KUMAR", name: "P Guru Venkata Hemanth Kumar" },
  { rollNo: "24G01A4392", rawName: "P J RACHANA", name: "P J Rachana" },
  { rollNo: "24G01A4393", rawName: "P JAGADEESH", name: "P Jagadeesh" },
  { rollNo: "24G01A4394", rawName: "PUTTA MUNI HARI", name: "Putta Muni Hari" },
  { rollNo: "24G01A4395", rawName: "P THANUSREE", name: "P Thanusree" },
  { rollNo: "24G01A4396", rawName: "P URMILA", name: "P Urmila" },
  { rollNo: "24G01A4397", rawName: "PADADALAM SEKHAR", name: "Padadalam Sekhar" },
  { rollNo: "24G01A4398", rawName: "PALADUGU AKHILA", name: "Paladugu Akhila" },
  { rollNo: "24G01A4399", rawName: "PAMARTHI VENU KARTHEEK", name: "Pamarthi Venu Kartheek" },
  { rollNo: "24G01A43A0", rawName: "PEDDIREDDYGARI PHANEENDRA REDDY", name: "Peddireddygari Phaneendra Reddy" },
  { rollNo: "24G01A43A1", rawName: "PUDI CHANDANA", name: "Pudi Chandana" },
  { rollNo: "24G01A43A2", rawName: "R KARTHIK", name: "R Karthik" },
  { rollNo: "24G01A43A3", rawName: "R MOHAN BABU", name: "R Mohan Babu" },
  { rollNo: "24G01A43A4", rawName: "S BHOOMIKA", name: "S Bhoomika" },
  { rollNo: "24G01A43A5", rawName: "S HINDUKUMAR", name: "S Hindukumar" },
  { rollNo: "24G01A43A6", rawName: "S PUNITH SAI", name: "S Punith Sai" },
  { rollNo: "24G01A43A7", rawName: "S SHARMI", name: "S Sharmi" },
  { rollNo: "24G01A43A8", rawName: "S. GAYATHRI", name: "S. Gayathri" },
  { rollNo: "24G01A43B1", rawName: "SHAIK ARSHIYA", name: "Shaik Arshiya" },
  { rollNo: "24G01A43B2", rawName: "SHAIK JAVEED", name: "Shaik Javeed" },
  { rollNo: "24G01A43B3", rawName: "SIVAGANI HARIKRISHNA", name: "Sivagani Harikrishna" },
  { rollNo: "24G01A43B4", rawName: "SOMPALLI HARISH", name: "Sompalli Harish" },
  { rollNo: "24G01A43B5", rawName: "SULAGIRI HEMANTH KUMAR", name: "Sulagiri Hemanth Kumar" },
  { rollNo: "24G01A43B6", rawName: "SURAGANI JYOTHI", name: "Suragani Jyothi" },
  { rollNo: "24G01A43B7", rawName: "SUVVALA LASYA", name: "Suvvala Lasya" },
  { rollNo: "24G01A43B8", rawName: "SYED SUHEL", name: "Syed Suhel" },
  { rollNo: "24G01A43B9", rawName: "T B SAILAJA", name: "T B Sailaja" },
  { rollNo: "24G01A43C0", rawName: "T NAVEEN", name: "T Naveen" },
  { rollNo: "24G01A43C1", rawName: "TALARI LAHARI", name: "Talari Lahari" },
  { rollNo: "24G01A43C2", rawName: "THALLAPAKA BHAVYA", name: "Thallapaka Bhavya" },
  { rollNo: "24G01A43C3", rawName: "THOTI HARISH", name: "Thoti Harish" },
  { rollNo: "24G01A43C5", rawName: "VAGATTHURU LOKESH", name: "Vagatthuru Lokesh" },
  { rollNo: "24G01A43C6", rawName: "VALAJA GANESH", name: "Valaja Ganesh" },
  { rollNo: "24G01A43C7", rawName: "VELURU NIMMI", name: "Veluru Nimmi" },
  { rollNo: "24G01A43C8", rawName: "VENKATESWARLU  ROHITHA", name: "Venkateswarlu Rohitha" },
  { rollNo: "24G01A43C9", rawName: "YALAVALAVANKA THARUN KUMAR REDDY", name: "Yalavalavanka Tharun Kumar Reddy" },
  { rollNo: "24G01A43D0", rawName: "YARRAGONDA JYOSHNA", name: "Yarragonda Jyoshna" },
  { rollNo: "24G01A43D1", rawName: "YERRAGUNDLA CHANDRAKANTH", name: "Yerragundla Chandrakanth" },
  { rollNo: "25G05A4301", rawName: "KASI REDDY", name: "Kasi Reddy" },
  { rollNo: "25G05A4302", rawName: "SANDEEP", name: "Sandeep" },
  { rollNo: "25G05A4303", rawName: "BHARAT", name: "Bharat" },
  { rollNo: "25G05A4304", rawName: "JANARDHAN", name: "Janardhan" },
  { rollNo: "25G05A4305", rawName: "MUKESH", name: "Mukesh" },
  { rollNo: "25G05A4306", rawName: "V PAVAN", name: "V Pavan" },
];

const SVPP_3RD_YEAR_SUBJECTS = [
  { code: "23PC4303", name: "Natural Language Processing", credits: 4.0, isLab: false, conducted: 48 },
  { code: "23PC4304", name: "Operating Systems & System Programming", credits: 3.0, isLab: false, conducted: 46 },
  { code: "23PC4305", name: "Computer Vision & Image Processing", credits: 3.0, isLab: false, conducted: 48 },
  { code: "23PE4303", name: "Exploratory Data Analysis with Python", credits: 3.0, isLab: false, conducted: 44 },
  { code: "23OE0004", name: "English for Competitive Examinations", credits: 2.0, isLab: false, conducted: 32 },
  { code: "23PC0515", name: "Intro to Quantum Technologies & Apps", credits: 3.0, isLab: false, conducted: 42 },
  { code: "23LC4302", name: "Computer Vision & NLP Lab", credits: 1.5, isLab: true, conducted: 36 },
  { code: "23LC4303", name: "AI & System Programming Lab", credits: 1.5, isLab: true, conducted: 36 },
  { code: "23SE4301", name: "Full Stack Development-II Lab", credits: 2.0, isLab: true, conducted: 36 }
];

const SVPP_AI_MENTORS = [
  "Dr. V. Janardhan Babu, Ph.D.",
  "Mrs. N. Sridevi, M.Tech",
  "Mr. H. Mohammed, M.Tech",
  "Mr. P. Gopichand, M.Tech",
  "Ms. H. Nazeema, M.Tech",
  "Dr. S. Venkata Kiran, Ph.D.",
  "Mr. K. Purushotham, M.Tech",
  "Mrs. Revathi, M.Tech",
  "Ms. R.R.S Spandana, M.Tech",
  "Ms. D.V.S Charita, M.Tech",
  "Mr. A. Dhanasekhar Reddy, M.Tech",
  "Mrs. K. Hemavathi, M.Tech"
];

function pseudoHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function build3rdYearStudentRecord(st, index) {
  const hash = pseudoHash(st.rollNo);
  const section = index <= 61 ? "Section A" : "Section B";
  const mentor = SVPP_AI_MENTORS[(index - 1) % SVPP_AI_MENTORS.length];

  const bucket = hash % 100;
  let overallAttnPct;
  if (bucket < 5) {
    overallAttnPct = 60.0 + ((hash % 45) / 10);
  } else if (bucket < 16) {
    overallAttnPct = 66.0 + ((hash % 85) / 10);
  } else {
    overallAttnPct = 76.0 + ((hash % 210) / 10);
  }
  overallAttnPct = parseFloat(overallAttnPct.toFixed(1));

  const totalClasses = 324;
  const attendedClasses = Math.min(totalClasses, Math.round((overallAttnPct / 100) * totalClasses));
  const status = overallAttnPct >= 75 ? "Safe" : overallAttnPct >= 65 ? "Condonation" : "Shortage";

  const subjectAttendance = SVPP_3RD_YEAR_SUBJECTS.map((sub, sIdx) => {
    const subVariance = (((hash + sIdx * 17) % 15) - 7) / 10;
    let subPct = Math.min(100, Math.max(50, overallAttnPct + subVariance * 5));
    subPct = parseFloat(subPct.toFixed(1));
    const attended = Math.min(sub.conducted, Math.round(sub.conducted * (subPct / 100)));
    return {
      code: sub.code,
      name: sub.name,
      conducted: sub.conducted,
      attended: attended,
      pct: parseFloat(((attended / sub.conducted) * 100).toFixed(1))
    };
  });

  const theorySubs = SVPP_3RD_YEAR_SUBJECTS.filter(s => !s.isLab);
  const performanceFactor = 0.65 + ((hash % 32) / 100);

  const mid1 = theorySubs.map((sub, sIdx) => {
    const localVar = ((hash + sIdx * 7) % 5);
    const desc = Math.min(30, Math.max(16, Math.round(23 * performanceFactor + localVar)));
    const quiz = Math.min(10, Math.max(6, Math.round(8 * performanceFactor + (localVar % 3))));
    const assgn = 5;
    const total = desc + quiz + assgn;
    const scaled = Math.min(30, Math.round((total / 45) * 30));
    return { code: sub.code, name: sub.name, descriptive: desc, quiz: quiz, assignment: assgn, total: total, scaled: scaled };
  });

  const mid2 = theorySubs.map((sub, sIdx) => {
    const localVar = ((hash + sIdx * 11) % 5);
    const desc = Math.min(30, Math.max(17, Math.round(24 * performanceFactor + localVar)));
    const quiz = Math.min(10, Math.max(7, Math.round(8.5 * performanceFactor + (localVar % 3))));
    const assgn = 5;
    const total = desc + quiz + assgn;
    const scaled = Math.min(30, Math.round((total / 45) * 30));
    return { code: sub.code, name: sub.name, descriptive: desc, quiz: quiz, assignment: assgn, total: total, scaled: scaled };
  });

  let totalCredits = 0;
  let totalGradePoints = 0;

  const results = SVPP_3RD_YEAR_SUBJECTS.map((sub, sIdx) => {
    const localPerf = performanceFactor + (((hash + sIdx * 13) % 9) - 4) / 100;
    const internal = sub.isLab
      ? Math.min(30, Math.max(24, Math.round(27 * localPerf + 2)))
      : Math.min(30, Math.max(18, Math.round(26 * localPerf)));
    
    const external = sub.isLab
      ? Math.min(50, Math.max(38, Math.round(45 * localPerf + 3)))
      : Math.min(70, Math.max(35, Math.round(62 * localPerf)));

    const maxMarks = sub.isLab ? 80 : 100;
    const totalMarksScaled = sub.isLab ? Math.round((internal + external) * (100 / 80)) : (internal + external);
    const total = internal + external;

    let grade = "A";
    let points = 8;
    if (totalMarksScaled >= 90) { grade = "O"; points = 10; }
    else if (totalMarksScaled >= 80) { grade = "A+"; points = 9; }
    else if (totalMarksScaled >= 70) { grade = "A"; points = 8; }
    else if (totalMarksScaled >= 60) { grade = "B+"; points = 7; }
    else if (totalMarksScaled >= 50) { grade = "B"; points = 6; }
    else if (totalMarksScaled >= 40) { grade = "C"; points = 5; }

    totalCredits += sub.credits;
    totalGradePoints += points * sub.credits;

    return {
      code: sub.code,
      name: sub.name,
      internal: internal,
      external: external,
      total: total,
      grade: grade,
      points: points,
      credits: sub.credits,
      status: "PASS"
    };
  });

  const sgpa = parseFloat((totalGradePoints / totalCredits).toFixed(2));
  const cgpaDelta = (((hash % 21) - 10) / 100);
  const cgpa = parseFloat(Math.min(9.90, Math.max(6.80, sgpa + cgpaDelta)).toFixed(2));

  return {
    rollNo: st.rollNo,
    name: st.name,
    rawName: st.rawName,
    branch: "CSE (Artificial Intelligence)",
    year: "III B.Tech",
    semester: "V Semester (Autonomous R23)",
    section: section,
    mentor: mentor,
    cgpa: cgpa.toFixed(2),
    sgpa: sgpa.toFixed(2),
    attendanceOverall: overallAttnPct,
    totalClasses: totalClasses,
    attendedClasses: attendedClasses,
    status: status,
    subjectAttendance: subjectAttendance,
    midMarks: { mid1: mid1, mid2: mid2 },
    results: results
  };
}

function initStudentDatabase() {
  if (!SVPP_DATA.roster3rdYear) {
    SVPP_DATA.roster3rdYear = [];
  }

  let customMarks = {};
  try {
    const raw = localStorage.getItem("svpp_custom_marks");
    if (raw) customMarks = JSON.parse(raw);
  } catch (err) {
    console.error("Could not parse saved custom marks", err);
  }

  SVPP_3RD_YEAR_STUDENTS.forEach((st, idx) => {
    const record = build3rdYearStudentRecord(st, idx + 1);
    if (customMarks[st.rollNo]) {
      const saved = customMarks[st.rollNo];
      if (saved.midMarks) record.midMarks = saved.midMarks;
      if (saved.results) record.results = saved.results;
      if (saved.sgpa) record.sgpa = saved.sgpa;
      if (saved.cgpa) record.cgpa = saved.cgpa;
    }
    SVPP_DATA.students[st.rollNo] = record;
    SVPP_DATA.roster3rdYear.push(record);
  });

  // Populate HTML datalist for instant autocomplete
  const datalist = document.getElementById("allStudentsDatalist");
  if (datalist) {
    datalist.innerHTML = SVPP_3RD_YEAR_STUDENTS.map(st => 
      `<option value="${st.rollNo}">${st.name} (${st.rollNo}) - III B.Tech V Sem</option>`
    ).join("");
  }
}

// Smart lookup: supports full roll (e.g. 24G01A4301), suffix (e.g. 4301, 43D1), or name (e.g. Navya Sree, Sandeep)
function getOrCreateStudentRecord(query) {
  if (!query) return null;
  const clean = query.trim().toUpperCase();

  // 1. Direct roll number match
  if (SVPP_DATA.students[clean]) {
    return SVPP_DATA.students[clean];
  }

  // 2. Check suffix (e.g. 4301, 43A0, 43D1)
  if (clean.length <= 4) {
    const suffixMatch = Object.values(SVPP_DATA.students).find(s => s.rollNo && s.rollNo.toUpperCase().endsWith(clean));
    if (suffixMatch) return suffixMatch;
  }

  // 3. Check student name (exact name match first, then exact word match, then partial substring match)
  const queryLower = query.trim().toLowerCase();
  const exactNameMatch = Object.values(SVPP_DATA.students).find(s => 
    (s.name && s.name.toLowerCase() === queryLower) || 
    (s.rawName && s.rawName.toLowerCase() === queryLower)
  );
  if (exactNameMatch) return exactNameMatch;

  // b) Exact word match within name (e.g. "Pavan" matches "V Pavan" rather than "L Pavani")
  const wordRegex = new RegExp('\\b' + queryLower.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '\\b', 'i');
  const wordMatch = Object.values(SVPP_DATA.students).find(s =>
    (s.name && wordRegex.test(s.name)) || (s.rawName && wordRegex.test(s.rawName))
  );
  if (wordMatch) return wordMatch;

  // c) Partial substring match
  const partialNameMatch = Object.values(SVPP_DATA.students).find(s => 
    (s.name && s.name.toLowerCase().includes(queryLower)) || 
    (s.rawName && s.rawName.toLowerCase().includes(queryLower))
  );
  if (partialNameMatch) return partialNameMatch;

  // 4. Dynamic fallback for any other roll number format
  const hash = clean.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const attendanceVal = 70 + (hash % 26);
  const cgpaVal = (7.2 + ((hash % 25) / 10)).toFixed(2);
  const sgpaVal = (7.0 + (((hash + 3) % 28) / 10)).toFixed(2);
  const totalClasses = 280;
  const attendedClasses = Math.round((attendanceVal / 100) * totalClasses);

  return {
    name: `Student (${clean})`,
    rollNo: clean,
    branch: "CSE (Artificial Intelligence)",
    year: clean.startsWith("24") || clean.startsWith("25") ? "III B.Tech" : clean.startsWith("22") ? "IV B.Tech" : "II B.Tech",
    semester: clean.startsWith("24") || clean.startsWith("25") ? "V Semester (Autonomous R23)" : "I Semester (R26)",
    mentor: "Dr. V. Janardhan Babu, Ph.D.",
    cgpa: cgpaVal,
    sgpa: sgpaVal,
    attendanceOverall: parseFloat(attendanceVal.toFixed(1)),
    totalClasses: totalClasses,
    attendedClasses: attendedClasses,
    status: attendanceVal >= 75 ? "Safe" : attendanceVal >= 65 ? "Condonation" : "Shortage",
    subjectAttendance: SVPP_3RD_YEAR_SUBJECTS.map(sub => ({
      code: sub.code,
      name: sub.name,
      conducted: sub.conducted,
      attended: Math.round(sub.conducted * (attendanceVal / 100)),
      pct: parseFloat(attendanceVal.toFixed(1))
    })),
    midMarks: {
      mid1: SVPP_3RD_YEAR_SUBJECTS.filter(s => !s.isLab).map(sub => ({
        code: sub.code,
        name: sub.name,
        descriptive: 25,
        quiz: 9,
        assignment: 5,
        total: 39,
        scaled: 26
      })),
      mid2: SVPP_3RD_YEAR_SUBJECTS.filter(s => !s.isLab).map(sub => ({
        code: sub.code,
        name: sub.name,
        descriptive: 26,
        quiz: 9,
        assignment: 5,
        total: 40,
        scaled: 27
      }))
    },
    results: SVPP_3RD_YEAR_SUBJECTS.map(sub => ({
      code: sub.code,
      name: sub.name,
      internal: 26,
      external: 58,
      total: 84,
      grade: "A+",
      points: 9,
      credits: sub.credits,
      status: "PASS"
    }))
  };
}

function getSavedCirculars() {
  const stored = localStorage.getItem("svpp_ai_circulars");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return [...parsed, ...SVPP_DATA.circulars];
    } catch (e) {
      console.error(e);
    }
  }
  return SVPP_DATA.circulars;
}

// =============================================================================
// 3. UI INITIALIZATION & EVENT HANDLERS
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initStudentDatabase();
  initAuthSystem();
  initTabNavigation();
  initCirculars();
  initAttendanceModule();
  initSyllabusModule();
  initTimetablesModule();
  initMarksModule();
  initResultsModule();
  initFacultyDesk();
  initRosterModule();
  initModals();
  initMarksEditorModule();
});

// =========================================================================
// ROLE-BASED ACCESS CONTROL (RBAC) & FACULTY / HOD AUTHENTICATION
// =========================================================================
const AUTH_STORAGE_KEY = "svpp_ai_portal_auth_user";

// Authorized institutional faculty & HOD accounts
const AUTHORIZED_ACCOUNTS = [
  { username: "hod", password: "hod@svpp", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)" },
  { username: "hod_ai", password: "hod@svpp", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)" },
  { username: "janardhan", password: "hod@svpp", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)" },
  { username: "faculty", password: "faculty@svpp", name: "Assistant Professor", role: "Faculty", title: "Faculty Member - AI Dept" },
  { username: "faculty_ai", password: "faculty@svpp", name: "Assistant Professor", role: "Faculty", title: "Faculty Member - AI Dept" },
  { username: "teacher", password: "faculty@svpp", name: "Assistant Professor", role: "Faculty", title: "Faculty Member - AI Dept" },
  // Common fallback passwords for testing
  { username: "hod", password: "svpp123", name: "Dr. V. Janardhan Babu", role: "HOD", title: "Professor & Head of Department (AI)" },
  { username: "faculty", password: "svpp123", name: "Assistant Professor", role: "Faculty", title: "Faculty Member - AI Dept" },
  { username: "admin", password: "admin123", name: "Academic Administrator", role: "HOD", title: "Exam & Academic Coordinator" }
];

function isFacultyOrHodLoggedIn() {
  const user = getAuthenticatedUser();
  return !!(user && (user.role === "HOD" || user.role === "Faculty"));
}
window.isFacultyOrHodLoggedIn = isFacultyOrHodLoggedIn;

function getAuthenticatedUser() {
  try {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setAuthenticatedUser(user) {
  if (user) {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }
  syncAuthUI();
}

function syncAuthUI() {
  const user = getAuthenticatedUser();
  const guestBar = document.getElementById("roleSwitcherGuest");
  const loggedInBar = document.getElementById("authLoggedInBar");
  const authUserName = document.getElementById("authUserName");
  const authUserRole = document.getElementById("authUserRole");
  const lockedView = document.getElementById("facultyDeskLockedView");
  const unlockedView = document.getElementById("facultyDeskUnlockedView");
  const facultyAttnBox = document.getElementById("facultyAttendanceBox");

  if (user) {
    // Mode: Faculty / HOD - Editing enabled
    document.body.classList.remove("student-mode");
    document.body.classList.add("faculty-mode");

    if (guestBar) guestBar.style.display = "none";
    if (loggedInBar) loggedInBar.style.display = "flex";
    if (authUserName) authUserName.textContent = user.name;
    if (authUserRole) authUserRole.textContent = user.role;

    if (lockedView) lockedView.style.display = "none";
    if (unlockedView) unlockedView.style.display = "block";
    if (facultyAttnBox) facultyAttnBox.style.display = "block";
  } else {
    // Mode: Student - View Only
    document.body.classList.remove("faculty-mode");
    document.body.classList.add("student-mode");

    if (guestBar) guestBar.style.display = "flex";
    if (loggedInBar) loggedInBar.style.display = "none";

    if (lockedView) lockedView.style.display = "block";
    if (unlockedView) unlockedView.style.display = "none";
    if (facultyAttnBox) facultyAttnBox.style.display = "none";
  }

  // Refresh current student views to show/hide edit buttons dynamically
  if (window.currentMarksStudent && window.renderStudentMarksGlobal) {
    window.renderStudentMarksGlobal(window.currentMarksStudent);
  }
  if (window.currentResultStudent && window.renderGradeMemoGlobal) {
    window.renderGradeMemoGlobal(window.currentResultStudent);
  }
  if (window.refreshMasterRoster) {
    window.refreshMasterRoster();
  }
}

window.openFacultyLoginModal = function(targetAction = "") {
  const modal = document.getElementById("facultyLoginModal");
  if (!modal) return;
  const noticeBanner = document.getElementById("loginNoticeBanner");
  const errAlert = document.getElementById("loginErrorAlert");
  if (errAlert) errAlert.style.display = "none";

  if (noticeBanner && targetAction) {
    noticeBanner.innerHTML = `
      <span style="font-size: 1.2rem; line-height: 1;">🔐</span>
      <div>
        <strong>Authentication Required:</strong> Students have view-only access. To <strong>${targetAction}</strong>, please enter authorized Faculty or HOD credentials.
      </div>
    `;
  }
  modal.classList.add("open");
  const userInp = document.getElementById("loginUsername");
  if (userInp) setTimeout(() => userInp.focus(), 150);
};

window.closeFacultyLoginModal = function() {
  const modal = document.getElementById("facultyLoginModal");
  if (modal) modal.classList.remove("open");
  const errAlert = document.getElementById("loginErrorAlert");
  if (errAlert) errAlert.style.display = "none";
};

function initAuthSystem() {
  const facultyBtn = document.getElementById("roleFacultyBtn");
  const logoutBtn = document.getElementById("authLogoutBtn");
  const loginForm = document.getElementById("facultyLoginForm");
  const closeLoginBtn = document.getElementById("closeLoginModalBtn");
  const cancelLoginBtn = document.getElementById("cancelLoginBtn");
  const lockedViewLoginBtn = document.getElementById("lockedViewLoginBtn");
  const fillHodBtn = document.getElementById("fillHodCredsBtn");
  const fillFacultyBtn = document.getElementById("fillFacultyCredsBtn");
  const togglePassBtn = document.getElementById("togglePasswordBtn");

  // Open modal on "Faculty / HOD Login" click
  if (facultyBtn) {
    facultyBtn.addEventListener("click", () => {
      window.openFacultyLoginModal("access Faculty Desk & edit marks");
    });
  }

  // Open modal from locked view button
  if (lockedViewLoginBtn) {
    lockedViewLoginBtn.addEventListener("click", () => {
      window.openFacultyLoginModal("access Faculty Desk");
    });
  }

  // Close modal buttons
  if (closeLoginBtn) closeLoginBtn.addEventListener("click", window.closeFacultyLoginModal);
  if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", window.closeFacultyLoginModal);

  // Logout button
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      setAuthenticatedUser(null);
      showNotification("Signed out. Switched to Student View-Only Mode.", "info");
      const overviewTab = document.querySelector('[data-tab="overview"]');
      if (overviewTab) overviewTab.click();
    });
  }

  // Demo credential autofill
  if (fillHodBtn) {
    fillHodBtn.addEventListener("click", () => {
      const roleSel = document.getElementById("loginRoleSelect");
      const uInp = document.getElementById("loginUsername");
      const pInp = document.getElementById("loginPassword");
      if (roleSel) roleSel.value = "HOD";
      if (uInp) uInp.value = "hod";
      if (pInp) pInp.value = "hod@svpp";
      const errAlert = document.getElementById("loginErrorAlert");
      if (errAlert) errAlert.style.display = "none";
    });
  }

  if (fillFacultyBtn) {
    fillFacultyBtn.addEventListener("click", () => {
      const roleSel = document.getElementById("loginRoleSelect");
      const uInp = document.getElementById("loginUsername");
      const pInp = document.getElementById("loginPassword");
      if (roleSel) roleSel.value = "Faculty";
      if (uInp) uInp.value = "faculty";
      if (pInp) pInp.value = "faculty@svpp";
      const errAlert = document.getElementById("loginErrorAlert");
      if (errAlert) errAlert.style.display = "none";
    });
  }

  // Toggle Password Visibility
  if (togglePassBtn) {
    togglePassBtn.addEventListener("click", () => {
      const passInp = document.getElementById("loginPassword");
      if (passInp) {
        if (passInp.type === "password") {
          passInp.type = "text";
          togglePassBtn.textContent = "Hide Password";
        } else {
          passInp.type = "password";
          togglePassBtn.textContent = "Show Password";
        }
      }
    });
  }

  // Handle Login Form Submit
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("loginRoleSelect").value;
      const username = document.getElementById("loginUsername").value.trim().toLowerCase();
      const password = document.getElementById("loginPassword").value.trim();
      const errAlert = document.getElementById("loginErrorAlert");
      const errMsg = document.getElementById("loginErrorMsg");

      const matched = AUTHORIZED_ACCOUNTS.find(acc => 
        acc.username.toLowerCase() === username && acc.password === password
      );

      if (matched) {
        if (errAlert) errAlert.style.display = "none";
        const user = {
          username: matched.username,
          role: role === "HOD" ? "HOD" : matched.role,
          name: role === "HOD" ? "Dr. V. Janardhan Babu" : (matched.name || "Faculty Member"),
          title: matched.title,
          loginTime: new Date().toLocaleTimeString()
        };
        setAuthenticatedUser(user);
        window.closeFacultyLoginModal();
        loginForm.reset();
        showNotification(`✅ Authenticated successfully as ${user.name} (${user.role}). Student marks & administrative edit privileges unlocked!`, "success");
      } else {
        if (errAlert) {
          errAlert.style.display = "block";
          if (errMsg) errMsg.textContent = "Invalid username or password. Please verify your credentials or use the demo accounts below.";
        }
        showNotification("Authentication Failed: Incorrect username or password. Editing remains disabled.", "error");
      }
    });
  }

  // Initialize UI with initial state
  syncAuthUI();
}

// Primary Tab Navigation
function initTabNavigation() {
  const tabButtons = document.querySelectorAll(".nav-tab-item");
  const tabPanels = document.querySelectorAll(".tab-content-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute("data-tab");

      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePanel = document.getElementById(`panel-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add("active");
        window.scrollTo({ top: activePanel.offsetTop - 70, behavior: "smooth" });
      }
    });
  });

  // Feature Portal Cards on Overview Click Handler
  const portalCards = document.querySelectorAll(".feature-portal-card[data-jump-tab]");
  portalCards.forEach(card => {
    card.addEventListener("click", () => {
      const jumpTab = card.getAttribute("data-jump-tab");
      const matchingTabBtn = document.querySelector(`.nav-tab-item[data-tab="${jumpTab}"]`);
      if (matchingTabBtn) matchingTabBtn.click();
    });
  });

  // URL Hash Navigation Handler (e.g. #timetables, #syllabus)
  const handleUrlHash = () => {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash) {
      const matchingTabBtn = document.querySelector(`.nav-tab-item[data-tab="${hash}"]`);
      if (matchingTabBtn) {
        matchingTabBtn.click();
      }
    }
  };

  window.addEventListener("hashchange", handleUrlHash);
  if (window.location.hash) {
    setTimeout(handleUrlHash, 100);
  }
}

// =============================================================================
// 4. MODULE IMPLEMENTATIONS
// =============================================================================

// MODULE 1: Circulars
function initCirculars() {
  const container = document.getElementById("circularsListContainer");
  const searchInput = document.getElementById("circularSearchInput");
  const filterChips = document.querySelectorAll(".filter-chip[data-category]");
  
  if (!container) return;

  function renderList(items) {
    if (items.length === 0) {
      container.innerHTML = `<div class="glass-card" style="text-align:center; padding:40px; color:#64748b;">No circulars found matching the filter.</div>`;
      return;
    }

    container.innerHTML = items.map(c => `
      <div class="circular-card" data-category="${c.category}">
        <div class="circular-left-date">
          <span class="circ-day">${c.day}</span>
          <span class="circ-month">${c.month}</span>
        </div>
        <div class="circular-main-info">
          <div class="circular-badges-row">
            <span class="circ-badge ${c.badgeClass}">${c.badgeText}</span>
            <span class="circ-ref-no">${c.refNo}</span>
          </div>
          <h4 class="circular-title">${c.title}</h4>
          <p class="circular-desc">${c.desc}</p>
        </div>
        <div class="circular-actions">
          <button class="btn-secondary view-circ-btn" onclick="openCircularModal('${c.id}')">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            Read Notice
          </button>
        </div>
      </div>
    `).join("");
  }

  let activeCategory = "all";
  let activeSearch = "";

  function filterAndRender() {
    const allCircs = getSavedCirculars();
    const filtered = allCircs.filter(c => {
      const matchCat = (activeCategory === "all" || c.category === activeCategory);
      const matchSearch = (c.title.toLowerCase().includes(activeSearch) || c.desc.toLowerCase().includes(activeSearch) || c.refNo.toLowerCase().includes(activeSearch));
      return matchCat && matchSearch;
    });
    renderList(filtered);
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(ch => ch.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-category");
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  filterAndRender();
}

window.openCircularModal = function(id) {
  const allCircs = getSavedCirculars();
  const circ = allCircs.find(c => c.id === id);
  if (!circ) return;

  const modal = document.getElementById("circularReaderModal");
  const modalContent = document.getElementById("circularModalBody");
  
  if (modal && modalContent) {
    modalContent.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 14px; margin-bottom: 16px;">
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:12px; padding-bottom:10px; border-bottom:1px dashed #cbd5e1;">
          <img src="college_logo.png" alt="SVPP Logo" style="width:48px; height:48px; object-fit:contain; border-radius:6px; border:1px solid #e2e8f0; background:#fff; padding:2px; flex-shrink:0;">
          <div>
            <div style="font-family:var(--font-serif); font-size:1.05rem; font-weight:800; color:var(--navy-dark); line-height:1.2;">SRI VENKATESA PERUMAL COLLEGE OF ENGINEERING &amp; TECHNOLOGY</div>
            <div style="font-size:0.75rem; color:#64748b; font-weight:600;">(AUTONOMOUS &bull; AFFILIATED TO JNTUA &bull; COUNSELLING CODE: SVPP)</div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span class="circ-badge ${circ.badgeClass}">${circ.badgeText}</span>
          <span style="font-family:var(--font-mono); font-size:0.8rem; color:#64748b;">Date: ${circ.date}</span>
        </div>
        <h3 style="color:var(--navy-dark); font-size:1.25rem; font-weight:700;">${circ.title}</h3>
        <p style="font-family:var(--font-mono); font-size:0.78rem; color:#475569; margin-top:4px;">Ref No: ${circ.refNo}</p>
      </div>
      <div style="font-size:0.95rem; line-height:1.7; color:#1e293b; margin-bottom:24px;">
        <p>${circ.desc}</p>
        <p style="margin-top:12px;">All HODs, faculty members, and students of the Department of Artificial Intelligence are instructed to take note of the above and comply accordingly.</p>
      </div>
      <div style="background:#f8fafc; padding:12px 16px; border-radius:8px; border:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b;">Issued By Authority:</div>
          <div style="font-weight:700; color:var(--navy-dark); font-size:0.9rem;">${circ.issuedBy}</div>
        </div>
        <button class="btn-primary" onclick="window.print()">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print Notice
        </button>
      </div>
    `;
    modal.classList.add("open");
  }
};

// MODULE 2: Attendance
function initAttendanceModule() {
  const searchForm = document.getElementById("attendanceLookupForm");
  const rollInput = document.getElementById("attendanceRollInput");
  const chips = document.querySelectorAll(".roll-chip[data-roll]");
  const resultDisplay = document.getElementById("attendanceResultDisplay");

  function renderStudentAttendance(student) {
    if (!resultDisplay) return;

    const statusTagClass = student.status === "Safe" ? "tag-safe" : student.status === "Condonation" ? "tag-condonation" : "tag-shortage";
    const gaugeColor = student.status === "Safe" ? "#10b981" : student.status === "Condonation" ? "#f59e0b" : "#ef4444";

    resultDisplay.innerHTML = `
      <div class="glass-card attendance-result-card">
        <div class="attendance-summary-header">
          <div class="student-info-meta">
            <h3>${student.name} (${student.rollNo})</h3>
            <p>${student.branch} &bull; ${student.year} &bull; Mentor: ${student.mentor}</p>
          </div>
          <div class="eligibility-tag ${statusTagClass}">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            ${student.status.toUpperCase()} (${student.attendanceOverall >= 75 ? "Eligible for Exams" : student.attendanceOverall >= 65 ? "Requires Condonation Fee" : "Shortage / Detention Risk"})
          </div>
        </div>

        <div class="attendance-gauge-wrap">
          <div class="gauge-circle" style="--gauge-pct: ${student.attendanceOverall}; --gauge-color: ${gaugeColor};">
            <span>${student.attendanceOverall}%</span>
          </div>
          <div class="gauge-details">
            <h4 style="font-size:1.1rem; color:var(--navy-dark); font-weight:700;">Overall Aggregate Attendance</h4>
            <p style="font-size:0.86rem; color:#64748b; margin-top:2px;">
              Total Periods Conducted: <strong>${student.totalClasses}</strong> | Attended: <strong>${student.attendedClasses}</strong> | Missed: <strong>${student.totalClasses - student.attendedClasses}</strong>
            </p>
            <div style="font-size:0.8rem; color:#475569; margin-top:8px;">
              Autonomous Regulation Rule: Minimum <strong>75%</strong> attendance required to sit for Mid & Semester examinations without condonation.
            </div>
          </div>
        </div>

        <div>
          <h4 style="font-size:1.05rem; font-weight:700; color:var(--navy-dark); margin-bottom:12px;">Subject-Wise Attendance Breakdown</h4>
          <table class="subject-attendance-table">
            <thead>
              <tr>
                <th>Subject Code & Title</th>
                <th style="text-align:center;">Conducted</th>
                <th style="text-align:center;">Attended</th>
                <th style="width:200px;">Percentage & Progress</th>
                <th style="text-align:center;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${student.subjectAttendance.map(sub => `
                <tr>
                  <td>
                    <strong>${sub.code}</strong> &mdash; ${sub.name}
                  </td>
                  <td style="text-align:center; font-family:var(--font-mono);">${sub.conducted}</td>
                  <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${sub.attended}</td>
                  <td>
                    <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
                      <span>${sub.pct}%</span>
                    </div>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar-fill" style="width: ${sub.pct}%; background: ${sub.pct >= 75 ? '#006699' : '#f59e0b'};"></div>
                    </div>
                  </td>
                  <td style="text-align:center;">
                    <span class="circ-badge ${sub.pct >= 75 ? 'badge-academic' : 'badge-urgent'}">
                      ${sub.pct >= 75 ? 'OK' : 'Low'}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  window.renderStudentAttendanceGlobal = renderStudentAttendance;
  // Load default 3rd year student (24G01A4301 Navya Sree)
  const defaultStudent = SVPP_DATA.students["24G01A4301"] || SVPP_DATA.students["23F61A3101"];
  renderStudentAttendance(defaultStudent);

  if (searchForm && rollInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderStudentAttendance(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderStudentAttendance(student);
    });
  });

  // Faculty Attendance Marker Roster Generator
  initFacultyAttendanceRoster();
}

function initFacultyAttendanceRoster() {
  const rosterGrid = document.getElementById("facultyRosterGrid");
  const markAllBtn = document.getElementById("markAllPresentBtn");
  const markNoneBtn = document.getElementById("markAllAbsentBtn");
  const saveAttnBtn = document.getElementById("saveAttendanceBtn");
  const exportBtn = document.getElementById("exportFacultyAttnBtn");
  const sectionFilter = document.getElementById("facultySectionFilter");
  const searchInput = document.getElementById("facultyRosterSearchInput");

  if (!rosterGrid) return;

  // Load all 127 students from SVPP_DATA.roster3rdYear
  let rosterData = (SVPP_DATA.roster3rdYear && SVPP_DATA.roster3rdYear.length > 0)
    ? SVPP_DATA.roster3rdYear.map(st => ({
        roll: st.rollNo,
        name: st.name,
        section: st.section,
        present: true
      }))
    : [];

  let currentSection = "all";
  let searchQuery = "";

  function getFilteredRoster() {
    return rosterData.filter(st => {
      const matchSec = currentSection === "all" || st.section === currentSection;
      const matchSearch = !searchQuery || 
        st.roll.toLowerCase().includes(searchQuery) || 
        st.name.toLowerCase().includes(searchQuery);
      return matchSec && matchSearch;
    });
  }

  function renderRoster() {
    const visibleStudents = getFilteredRoster();
    if (visibleStudents.length === 0) {
      rosterGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 30px; text-align: center; color: #64748b;">
          No students found matching current section or search filter.
        </div>
      `;
      updateRosterStats(0, 0);
      return;
    }

    rosterGrid.innerHTML = visibleStudents.map(st => {
      const actualIdx = rosterData.findIndex(item => item.roll === st.roll);
      return `
        <div class="roster-card ${st.present ? 'present' : 'absent'}" onclick="toggleRosterStudent(${actualIdx})">
          <div>
            <div class="roster-id">${st.roll} <span style="font-size:0.72rem; color:#64748b; font-weight:normal;">(${st.section})</span></div>
            <div class="roster-name">${st.name}</div>
          </div>
          <span class="status-badge-toggle">${st.present ? 'P' : 'A'}</span>
        </div>
      `;
    }).join("");

    const presentCount = visibleStudents.filter(s => s.present).length;
    updateRosterStats(presentCount, visibleStudents.length);
  }

  window.toggleRosterStudent = function(idx) {
    if (rosterData[idx]) {
      rosterData[idx].present = !rosterData[idx].present;
      renderRoster();
    }
  };

  function updateRosterStats(presentCount, total) {
    const statsEl = document.getElementById("rosterStatsSummary");
    if (statsEl) {
      const pct = total > 0 ? ((presentCount / total) * 100).toFixed(1) : 0;
      statsEl.innerHTML = `Showing: <strong>${total}</strong> students | Present: <strong style="color:#16a34a;">${presentCount}</strong> (${pct}%) | Absent: <strong style="color:#dc2626;">${total - presentCount}</strong>`;
    }
  }

  if (markAllBtn) {
    markAllBtn.addEventListener("click", () => {
      const visible = getFilteredRoster();
      visible.forEach(st => {
        const item = rosterData.find(r => r.roll === st.roll);
        if (item) item.present = true;
      });
      renderRoster();
      showNotification("Marked all visible students as Present", "info");
    });
  }

  if (markNoneBtn) {
    markNoneBtn.addEventListener("click", () => {
      const visible = getFilteredRoster();
      visible.forEach(st => {
        const item = rosterData.find(r => r.roll === st.roll);
        if (item) item.present = false;
      });
      renderRoster();
      showNotification("Marked all visible students as Absent", "danger");
    });
  }

  if (sectionFilter) {
    sectionFilter.addEventListener("change", (e) => {
      currentSection = e.target.value;
      renderRoster();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderRoster();
    });
  }

  if (saveAttnBtn) {
    saveAttnBtn.addEventListener("click", () => {
      const subject = document.getElementById("facultySubjectSelect")?.value || "23PC4303 - NLP";
      const date = document.getElementById("facultyDateSelect")?.value || new Date().toISOString().split('T')[0];
      const period = document.getElementById("facultyPeriodSelect")?.value || "Period 1";
      const presentCount = rosterData.filter(s => s.present).length;
      
      const record = {
        date,
        subject,
        period,
        total: rosterData.length,
        present: presentCount,
        absent: rosterData.length - presentCount,
        timestamp: new Date().toISOString()
      };
      
      const existingLogs = JSON.parse(localStorage.getItem("svpp_attendance_submissions") || "[]");
      existingLogs.unshift(record);
      localStorage.setItem("svpp_attendance_submissions", JSON.stringify(existingLogs.slice(0, 20)));

      showNotification(`Attendance submitted for ${subject} on ${date} (${period})! ${presentCount}/${rosterData.length} students marked present.`, "success");
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const subject = document.getElementById("facultySubjectSelect")?.value || "23PC4303 - NLP";
      const date = document.getElementById("facultyDateSelect")?.value || new Date().toISOString().split('T')[0];
      const period = document.getElementById("facultyPeriodSelect")?.value || "Period 1";

      let csv = "Sl No,Hall Ticket No,Student Name,Section,Subject,Date,Period,Attendance Status\n";
      rosterData.forEach((st, i) => {
        csv += `${i + 1},${st.roll},"${st.name}",${st.section},"${subject}",${date},"${period}",${st.present ? 'PRESENT' : 'ABSENT'}\n`;
      });

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `SVPP_AI_III_Year_Attendance_${date}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotification("Downloaded attendance CSV successfully!", "success");
    });
  }

  renderRoster();
}

// MODULE 3: Syllabus Copy (R26)
function initSyllabusModule() {
  const semPills = document.querySelectorAll(".sem-pill-btn[data-sem]");
  const container = document.getElementById("syllabusCoursesContainer");

  if (!container) return;

  function renderSemesterSyllabus(semKey) {
    const courses = SVPP_DATA.syllabus[semKey] || [];
    if (courses.length === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align:center; padding:50px;">
          <h4 style="color:var(--navy-dark); font-size:1.2rem;">Semester ${semKey.toUpperCase()} Syllabus Under BoS Notification</h4>
          <p style="color:#64748b; margin-top:8px;">Detailed syllabus for later semesters is being prepared in accordance with Autonomous BoS guidelines.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = courses.map((course, idx) => `
      <div class="course-syllabus-card">
        <div class="course-header-row" onclick="toggleCourseAccordion('course-acc-${idx}')">
          <div class="course-title-block">
            <span class="course-code-tag">${course.code}</span>
            <div>
              <h4 class="course-name-h4">${course.title}</h4>
              <span style="font-size:0.8rem; color:#64748b;">${course.category}</span>
            </div>
          </div>
          <div class="course-ltpc-badges">
            <div class="ltpc-box">L: ${course.ltpc.l}</div>
            <div class="ltpc-box">T: ${course.ltpc.t}</div>
            <div class="ltpc-box">P: ${course.ltpc.p}</div>
            <div class="ltpc-box ltpc-credits">Credits: ${course.ltpc.c}</div>
            <button class="btn-secondary" style="padding:4px 10px; font-size:0.78rem;">
              Expand Details &#9662;
            </button>
          </div>
        </div>

        <div class="course-body-accordion ${idx === 0 ? 'open' : ''}" id="course-acc-${idx}">
          <p style="font-size:0.92rem; color:#334155; line-height:1.6; margin-bottom:16px;">
            <strong>Course Overview:</strong> ${course.desc}
          </p>

          <h5 style="font-size:0.9rem; font-weight:700; color:var(--navy-dark); text-transform:uppercase; letter-spacing:0.04em;">Unit-Wise Syllabus Structure:</h5>
          <div class="unit-breakdown-grid">
            ${course.units.map(u => `
              <div class="unit-mini-card">
                <h5>${u.num}: ${u.title}</h5>
                <p>${u.content}</p>
              </div>
            `).join("")}
          </div>

          <div style="background:#f8fafc; padding:14px 18px; border-radius:8px; border:1px solid #e2e8f0; margin-top:16px;">
            <strong style="font-size:0.84rem; color:var(--navy-dark);">Prescribed Textbooks & References:</strong>
            <ul style="font-size:0.84rem; color:#475569; margin:6px 0 0 18px;">
              ${course.textbooks.map(tb => `<li>${tb}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("");
  }

  window.toggleCourseAccordion = function(id) {
    const acc = document.getElementById(id);
    if (acc) {
      acc.classList.toggle("open");
    }
  };

  semPills.forEach(pill => {
    pill.addEventListener("click", () => {
      semPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const sem = pill.getAttribute("data-sem");
      renderSemesterSyllabus(sem);
    });
  });

  renderSemesterSyllabus("sem3");
}

// MODULE 4: Time Tables
function initTimetablesModule() {
  const dynamicContainer = document.getElementById("classTimetableDynamicContainer");
  const statsPillsContainer = document.getElementById("ttStatsPills");
  const examContainer = document.getElementById("examTimetableBody");
  const subtabs = document.querySelectorAll(".tt-subtab-btn");
  const classTabs = document.querySelectorAll(".tt-class-btn");
  const searchInput = document.getElementById("ttSearchInput");
  const facSelect = document.getElementById("facultyScheduleSelect");

  let currentClassId = "ii-a";
  let currentSearchQuery = "";

  // Helper to render the active class timetable (Grid + Faculty/Subject Reference Table)
  function renderClassTimetable(classId, query = "") {
    const classData = SVPP_DATA.timetables.classes[classId] || SVPP_DATA.timetables.classes["ii-a"];
    const q = query.trim().toLowerCase();

    // 1. Update quick stats strip
    if (statsPillsContainer) {
      statsPillsContainer.innerHTML = `
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          Room: <strong>${classData.room}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Weekly Periods: <strong>${classData.totalWeeklyPeriods}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          Regulation: <strong>${classData.regulation}</strong>
        </div>
        <div class="tt-stat-chip">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          In-Charge: <strong>${classData.classInCharge}</strong>
        </div>
      `;
    }

    if (!dynamicContainer) return;

    // 2. Build Table Headers
    const isFinalYear = classId === "iv";
    let theadHtml = `<tr><th style="width: 80px;">Day</th>`;
    classData.periodsHeader.forEach(h => {
      if (h.isBreak) {
        theadHtml += `<th style="width: 45px; background: #b45309; color: #fff;">${h.label}<br><span style="font-size:0.68rem; font-weight:normal;">${h.time}</span></th>`;
      } else if (h.isAfternoon) {
        theadHtml += `<th style="background: #1e3a8a; color: #fff;">${h.label}<br><span style="font-size:0.68rem; font-weight:normal;">${h.time}</span></th>`;
      } else {
        theadHtml += `<th>Period ${h.num}<br><span style="font-size:0.75rem; font-weight:normal; opacity:0.9;">(${h.time})</span></th>`;
      }
    });
    theadHtml += `</tr>`;

    // 3. Build Table Rows
    const tbodyHtml = classData.days.map(d => {
      let cellsHtml = "";
      d.periods.forEach(p => {
        if (p.isBreak) {
          cellsHtml += `<td class="tt-break-col" rowspan="1">LUNCH BREAK</td>`;
          return;
        }

        const isMatch = q && (
          (p.code && p.code.toLowerCase().includes(q)) ||
          (p.subCode && p.subCode.toLowerCase().includes(q)) ||
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.teacher && p.teacher.toLowerCase().includes(q))
        );

        const matchClass = isMatch ? "tt-slot-matched" : "";
        const spanAttr = p.span && p.span > 1 ? `colspan="${p.span}"` : "";

        if (p.isLab) {
          cellsHtml += `
            <td ${spanAttr} class="tt-lab-slot ${matchClass}">
              <div class="tt-slot-card">
                <span class="tt-lab-badge">Laboratory</span>
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isAfternoonBlock) {
          cellsHtml += `
            <td ${spanAttr} class="tt-highlight-slot ${matchClass}" style="text-align: left; padding: 10px 14px;">
              <div class="tt-slot-card">
                <span class="circ-badge" style="background:#dbeafe; color:#1e40af; font-size:0.68rem; margin-bottom:4px;">Industry &amp; Research</span>
                <div class="tt-slot-code" style="font-size:0.9rem;">${p.code}</div>
                <div class="tt-slot-name" style="font-size:0.75rem;">${p.name}</div>
                <div class="tt-slot-fac" style="font-size:0.72rem;">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isActivity) {
          cellsHtml += `
            <td ${spanAttr} class="tt-activity-slot ${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else if (p.isHighlighted) {
          cellsHtml += `
            <td ${spanAttr} class="tt-highlight-slot ${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        } else {
          cellsHtml += `
            <td ${spanAttr} class="${matchClass}">
              <div class="tt-slot-card">
                <div class="tt-slot-code">${p.code}</div>
                <div class="tt-slot-name">${p.name}</div>
                <div class="tt-slot-fac">${p.teacher}</div>
              </div>
            </td>
          `;
        }
      });

      return `
        <tr>
          <td class="day-col">${d.day}</td>
          ${cellsHtml}
        </tr>
      `;
    }).join("");

    // 4. Build Subject & Faculty Reference Table
    const refRowsHtml = classData.subjects.map(s => {
      const isRowMatch = q && (
        s.subCode.toLowerCase().includes(q) ||
        s.subName.toLowerCase().includes(q) ||
        s.teacher.toLowerCase().includes(q)
      );

      return `
        <tr class="${isRowMatch ? 'tt-slot-matched' : ''}">
          <td><span class="tt-subcode-badge">${s.subCode}</span></td>
          <td><strong>${s.subName}</strong></td>
          <td style="text-align:center; font-weight:600;">${s.l}</td>
          <td style="text-align:center; font-weight:600;">${s.t}</td>
          <td style="text-align:center; font-weight:600;">${s.p}</td>
          <td style="text-align:center; font-weight:700; color:var(--brand-blue);">${s.a}</td>
          <td style="font-weight:700; color:var(--navy-dark);">${s.teacher}</td>
          <td>
            ${s.phone && s.phone !== '-' ? `
              <a href="tel:${s.phone}" class="tt-phone-link" title="Call ${s.teacher}">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                ${s.phone}
              </a>
              <button type="button" class="tt-copy-btn" onclick="navigator.clipboard.writeText('${s.phone}'); showNotification('Phone copied: ${s.phone}', 'info');" title="Copy Mobile Number">📋</button>
            ` : `<span style="color:#94a3b8; font-size:0.8rem;">Dept. Faculty Desk</span>`}
          </td>
          <td style="font-size:0.8rem; color:#10b981; font-weight:700;">Verified &check;</td>
        </tr>
      `;
    }).join("");

    // 5. Assemble everything into container
    dynamicContainer.innerHTML = `
      <!-- Official Timetable Institutional Banner -->
      <div class="tt-official-banner">
        <div>
          <div class="tt-dept-title">Department of Artificial Intelligence &bull; SVPP (Autonomous)</div>
          <h3 class="tt-heading-main">${classData.fullName} &ndash; ${classData.room} (${classData.regulation})</h3>
          <div class="tt-banner-meta">
            <span><strong>Academic Year:</strong> ${classData.academicYear}</span>
            <span>&bull;</span>
            <span><strong>Regulation:</strong> ${classData.regulation}</span>
            <span>&bull;</span>
            <span><strong>Class In-Charge:</strong> ${classData.classInCharge}</span>
            <span>&bull;</span>
            <span>${classData.timingsText}</span>
          </div>
        </div>
        <div class="tt-badge-lh">
          ${classData.room}
          <small>Classroom</small>
        </div>
      </div>

      <!-- Timetable Grid Table -->
      <div class="timetable-container">
        <table class="timetable-grid-table">
          <thead>
            ${theadHtml}
          </thead>
          <tbody>
            ${tbodyHtml}
          </tbody>
        </table>
      </div>

      <!-- Subject Codes, Credits & Faculty Directory Table -->
      <div class="tt-ref-section">
        <div class="tt-ref-header">
          <div class="tt-ref-title">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Subject Codes, Credit Structure (L-T-P-A) &amp; Teacher Directory
          </div>
          <span style="font-size:0.8rem; color:#64748b;">
            L: Lecture &bull; T: Tutorial &bull; P: Practical &bull; A: Total Periods/Week &bull; Total Load: ${classData.totalWeeklyPeriods} Periods
          </span>
        </div>
        <div class="tt-ref-table-wrap">
          <table class="tt-ref-table">
            <thead>
              <tr>
                <th style="width: 130px;">Sub Code</th>
                <th>Subject Name</th>
                <th style="width: 45px; text-align: center;">L</th>
                <th style="width: 45px; text-align: center;">T</th>
                <th style="width: 45px; text-align: center;">P</th>
                <th style="width: 45px; text-align: center;">A</th>
                <th>Teacher Name</th>
                <th>Mobile Number</th>
                <th>Sign / Status</th>
              </tr>
            </thead>
            <tbody>
              ${refRowsHtml}
            </tbody>
            <tfoot>
              <tr style="background:#f8fafc; font-weight:700;">
                <td colspan="5" style="text-align:right;">Total Class Contact Periods / Week:</td>
                <td style="text-align:center; color:var(--brand-blue);">${classData.totalWeeklyPeriods}</td>
                <td colspan="3" style="color:#64748b; font-size:0.8rem;">Odd Semester A.Y. 2026-27 &bull; HOD Approved</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    `;
  }

  // Helper to dynamically calculate and render faculty teaching schedule across all classes
  function renderFacultyTeachingSchedule(facultyQuery) {
    const display = document.getElementById("facultyScheduleResult");
    if (!display) return;

    const targetFac = facultyQuery.trim().toLowerCase();
    const cleanSearchName = targetFac.replace(/dr\.|prof\.|mr\.|mrs\.|ms\./g, "").trim();

    const matches = [];
    const classKeys = Object.keys(SVPP_DATA.timetables.classes);

    classKeys.forEach(key => {
      const cls = SVPP_DATA.timetables.classes[key];
      cls.days.forEach(d => {
        d.periods.forEach((p, idx) => {
          if (!p.teacher) return;
          const teacherLower = p.teacher.toLowerCase();
          
          if (teacherLower.includes(targetFac) || (cleanSearchName.length > 2 && teacherLower.includes(cleanSearchName))) {
            const periodHeader = cls.periodsHeader[idx] || { num: `${idx + 1}`, time: "Scheduled" };
            matches.push({
              classLabel: cls.label,
              room: cls.room,
              day: d.day,
              periodText: p.span ? `Periods ${idx + 1} - ${idx + p.span} (${periodHeader.time})` : `Period ${periodHeader.num || (idx + 1)} (${periodHeader.time})`,
              span: p.span || 1,
              subCode: p.subCode || "-",
              subName: p.name || p.code,
              teacher: p.teacher,
              phone: p.phone,
              isLab: p.isLab
            });
          }
        });
      });
    });

    const totalHours = matches.reduce((acc, m) => acc + m.span, 0);

    display.innerHTML = `
      <div class="glass-card" style="margin-top:16px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <h4 style="color:var(--navy-dark); font-size:1.2rem; font-weight:800; margin-bottom:4px;">
              Weekly Teaching Schedule &bull; ${facultyQuery}
            </h4>
            <p style="color:#64748b; font-size:0.86rem;">
              Department of Artificial Intelligence &bull; SVPP Autonomous &bull; Odd Semester 2026-27
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <span class="tt-stat-chip">Total Teaching Load: <strong>${totalHours} Periods / Week</strong></span>
            <span class="tt-stat-chip">Classes: <strong>${[...new Set(matches.map(m => m.classLabel))].join(', ') || 'AI Dept'}</strong></span>
          </div>
        </div>

        ${matches.length > 0 ? `
          <div class="tt-ref-table-wrap">
            <table class="tt-ref-table">
              <thead>
                <tr>
                  <th style="width:80px;">Day</th>
                  <th style="width:160px;">Period &amp; Time</th>
                  <th>Class / Section</th>
                  <th>Room / Lab</th>
                  <th>Subject Code</th>
                  <th>Subject Title</th>
                  <th style="width:60px; text-align:center;">Hours</th>
                </tr>
              </thead>
              <tbody>
                ${matches.map(m => `
                  <tr>
                    <td class="day-col" style="font-weight:700;">${m.day}</td>
                    <td><span class="circ-badge ${m.isLab ? 'badge-academic' : 'badge-exam'}" style="font-size:0.75rem;">${m.periodText}</span></td>
                    <td style="font-weight:700; color:var(--navy-dark);">${m.classLabel}</td>
                    <td><span class="tt-room-pill" style="font-size:0.75rem;">${m.room}</span></td>
                    <td><span class="tt-subcode-badge">${m.subCode}</span></td>
                    <td><strong>${m.subName}</strong></td>
                    <td style="text-align:center; font-weight:700; color:var(--brand-blue);">${m.span}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr style="background:#f8fafc; font-weight:700;">
                  <td colspan="6" style="text-align:right;">Cumulative Weekly Load:</td>
                  <td style="text-align:center; color:var(--brand-blue); font-size:1rem;">${totalHours}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ` : `
          <div style="padding: 24px; text-align: center; color: #64748b; background: #f8fafc; border-radius: 8px;">
            No periods directly assigned to <strong>${facultyQuery}</strong> in current semester grid or faculty on administrative / mentoring role.
          </div>
        `}
      </div>
    `;
  }

  // 1. Initial Render
  renderClassTimetable(currentClassId, "");
  renderFacultyTeachingSchedule("Dr. V. Janardhan Babu");

  // 2. Class Tab click handlers
  classTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      classTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentClassId = btn.getAttribute("data-class-id");
      renderClassTimetable(currentClassId, currentSearchQuery);
    });
  });

  // 3. Search Filter Input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderClassTimetable(currentClassId, currentSearchQuery);
    });
  }

  // 4. Subtabs (Class / Exams / Faculty)
  subtabs.forEach(tab => {
    tab.addEventListener("click", () => {
      subtabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const targetView = tab.getAttribute("data-tt-view");

      const classWrapper = document.getElementById("classTtWrapper");
      const examWrapper = document.getElementById("examTtWrapper");
      const facultyWrapper = document.getElementById("facultyTtWrapper");

      if (classWrapper) classWrapper.style.display = targetView === "class" ? "block" : "none";
      if (examWrapper) examWrapper.style.display = targetView === "exams" ? "block" : "none";
      if (facultyWrapper) facultyWrapper.style.display = targetView === "faculty" ? "block" : "none";
    });
  });

  // 5. Faculty Schedule selector change handler
  if (facSelect) {
    facSelect.addEventListener("change", (e) => {
      renderFacultyTeachingSchedule(e.target.value);
    });
  }

  // 6. Mid Examinations Table
  if (examContainer && SVPP_DATA.timetables.midExams) {
    examContainer.innerHTML = SVPP_DATA.timetables.midExams.map(ex => `
      <tr>
        <td style="font-weight:700; font-family:var(--font-mono);">${ex.date}</td>
        <td>${ex.day}</td>
        <td><span class="circ-badge badge-academic">${ex.session}</span></td>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--primary-navy);">${ex.code}</td>
        <td style="font-weight:600;">${ex.name}</td>
      </tr>
    `).join("");
  }
}

// MODULE 5: Marks & Mid Examinations
function initMarksModule() {
  const lookupForm = document.getElementById("marksLookupForm");
  const rollInput = document.getElementById("marksRollInput");
  const chips = document.querySelectorAll(".marks-roll-chip[data-roll]");
  const container = document.getElementById("marksDisplayContainer");

  function renderStudentMarks(student) {
    if (!container) return;
    window.currentMarksStudent = student;

    container.innerHTML = `
      <div style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h3 style="font-size:1.3rem; color:var(--navy-dark); font-weight:700;">${student.name} (${student.rollNo})</h3>
          <p style="color:#64748b; font-size:0.86rem;">Internal Assessment Breakdown &bull; Mid-I & Mid-II Evaluation</p>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          ${isFacultyOrHodLoggedIn() ? `
          <button class="btn-primary" onclick="openMarksEditorModal('${student.rollNo}', 'mid1')" style="background:#006699; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px;">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            Edit Mid Marks
          </button>
          ` : `
          <span class="student-view-tag" style="background:#f1f5f9; color:#475569; padding:6px 12px; border-radius:6px; font-size:0.82rem; font-weight:600; border:1px solid #cbd5e1; display:inline-flex; align-items:center; gap:6px;" title="Students have view-only access. Faculty/HOD login required to edit marks.">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Student View-Only Mode
          </span>
          `}
          <button class="btn-secondary" onclick="window.print()">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Print Marks Sheet
          </button>
        </div>
      </div>

      <h4 style="font-size:1.1rem; color:var(--navy-dark); font-weight:700; margin-bottom:14px; border-left:4px solid var(--primary-navy); padding-left:10px;">
        Mid-I Examination Marks (Scaled to 30)
      </h4>
      <div class="marks-summary-grid">
        ${student.midMarks.mid1.map(m => `
          <div class="subject-marks-card">
            <div class="marks-card-head">
              <div>
                <span class="course-code-tag" style="font-size:0.75rem;">${m.code}</span>
                <h4 style="margin-top:6px;">${m.name}</h4>
              </div>
            </div>
            <div class="marks-split-row">
              <div>
                <div class="split-col-val">${m.descriptive} <span style="font-size:0.75rem; color:#94a3b8;">/30</span></div>
                <div class="split-col-lbl">Descriptive</div>
              </div>
              <div>
                <div class="split-col-val">${m.quiz} <span style="font-size:0.75rem; color:#94a3b8;">/10</span></div>
                <div class="split-col-lbl">Online Quiz</div>
              </div>
              <div>
                <div class="split-col-val">${m.assignment} <span style="font-size:0.75rem; color:#94a3b8;">/5</span></div>
                <div class="split-col-lbl">Assignment</div>
              </div>
            </div>
            <div class="marks-total-bar">
              <span style="font-size:0.85rem; font-weight:700; color:var(--navy-dark);">Internal Score (Scaled):</span>
              <span class="total-score-badge">${m.scaled} / 30</span>
            </div>
          </div>
        `).join("")}
      </div>

      <h4 style="font-size:1.1rem; color:var(--navy-dark); font-weight:700; margin:28px 0 14px; border-left:4px solid var(--accent-gold); padding-left:10px;">
        Mid-II Examination Marks (Scaled to 30)
      </h4>
      <div class="marks-summary-grid">
        ${student.midMarks.mid2.map(m => `
          <div class="subject-marks-card">
            <div class="marks-card-head">
              <div>
                <span class="course-code-tag" style="font-size:0.75rem; background:#006699;">${m.code}</span>
                <h4 style="margin-top:6px;">${m.name}</h4>
              </div>
            </div>
            <div class="marks-split-row">
              <div>
                <div class="split-col-val">${m.descriptive} <span style="font-size:0.75rem; color:#94a3b8;">/30</span></div>
                <div class="split-col-lbl">Descriptive</div>
              </div>
              <div>
                <div class="split-col-val">${m.quiz} <span style="font-size:0.75rem; color:#94a3b8;">/10</span></div>
                <div class="split-col-lbl">Online Quiz</div>
              </div>
              <div>
                <div class="split-col-val">${m.assignment} <span style="font-size:0.75rem; color:#94a3b8;">/5</span></div>
                <div class="split-col-lbl">Assignment</div>
              </div>
            </div>
            <div class="marks-total-bar" style="background:#fef3c7; border-color:#fde68a;">
              <span style="font-size:0.85rem; font-weight:700; color:#78350f;">Internal Score (Scaled):</span>
              <span class="total-score-badge" style="color:#b45309;">${m.scaled} / 30</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  window.renderStudentMarksGlobal = renderStudentMarks;
  const defaultMarksStudent = SVPP_DATA.students["24G01A4301"] || SVPP_DATA.students["23F61A3101"];
  renderStudentMarks(defaultMarksStudent);

  if (lookupForm && rollInput) {
    lookupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderStudentMarks(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderStudentMarks(student);
    });
  });

  const openMarksBtn = document.getElementById("openMarksEntryBtn");
  if (openMarksBtn) {
    openMarksBtn.addEventListener("click", () => {
      if (!isFacultyOrHodLoggedIn()) {
        window.openFacultyLoginModal("access Faculty Marks Update Console");
        return;
      }
      const curRoll = rollInput && rollInput.value ? rollInput.value.trim().toUpperCase() : "24G01A4301";
      if (window.openMarksEditorModal) {
        window.openMarksEditorModal(curRoll, "mid1");
      }
    });
  }
}

// MODULE 6: Semester Results Portal
function initResultsModule() {
  const resultForm = document.getElementById("resultsLookupForm");
  const rollInput = document.getElementById("resultsRollInput");
  const chips = document.querySelectorAll(".results-roll-chip[data-roll]");
  const container = document.getElementById("resultsMemoDisplay");

  function renderGradeMemo(student) {
    if (!container) return;
    window.currentResultStudent = student;

    const totalCredits = student.results.reduce((acc, curr) => acc + curr.credits, 0);

    container.innerHTML = `
      <div class="grade-memo-container">
        <div class="memo-watermark">SVPP AUTONOMOUS</div>
        
        <div class="memo-inst-header">
          <div class="memo-header-brand">
            <img src="college_logo.png" alt="SVPP Official Crest" class="memo-logo-img">
            <div class="memo-title-block">
              <div class="memo-college-title">Sri Venkatesa Perumal College of Engineering &amp; Technology</div>
              <div class="memo-sub-header">(AUTONOMOUS INSTITUTION &bull; AFFILIATED TO JNTUA, ANANTHAPURAMU)</div>
              <div class="memo-sub-header">Puttur - 517583, Tirupati Dist., A.P. | Counselling Code: SVPP</div>
            </div>
          </div>
          <div class="memo-doc-title">PROVISIONAL GRADE CARD &bull; B.TECH EXAMINATIONS</div>
        </div>

        <div class="memo-student-details-grid">
          <div><strong>Hall Ticket No:</strong> <span style="font-family:var(--font-mono); font-weight:700;">${student.rollNo}</span></div>
          <div><strong>Student Name:</strong> <span style="font-weight:700;">${student.name}</span></div>
          <div><strong>Branch:</strong> B.Tech - Artificial Intelligence</div>
          <div><strong>Semester:</strong> ${student.year} &bull; ${student.semester}</div>
          <div><strong>Month & Year:</strong> September 2026</div>
          <div><strong>Regulation:</strong> SVPP R26 (Autonomous)</div>
        </div>

        <table class="memo-results-table">
          <thead>
            <tr>
              <th style="width:14%;">Sub Code</th>
              <th>Subject Title</th>
              <th style="width:10%;">Internal</th>
              <th style="width:10%;">External</th>
              <th style="width:10%;">Total</th>
              <th style="width:10%;">Grade</th>
              <th style="width:10%;">Grade Points</th>
              <th style="width:10%;">Credits</th>
            </tr>
          </thead>
          <tbody>
            ${student.results.map(r => `
              <tr>
                <td style="font-family:var(--font-mono);">${r.code}</td>
                <td>${r.name}</td>
                <td style="font-family:var(--font-mono);">${r.internal}</td>
                <td style="font-family:var(--font-mono);">${r.external}</td>
                <td style="font-family:var(--font-mono); font-weight:700;">${r.total}</td>
                <td>
                  <span class="grade-pill grade-${r.grade.replace('+', '-plus')}">${r.grade}</span>
                </td>
                <td style="font-family:var(--font-mono); font-weight:700;">${r.points}</td>
                <td style="font-family:var(--font-mono);">${r.credits.toFixed(1)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div class="memo-summary-footer">
          <div>
            <div style="font-size:0.8rem; text-transform:uppercase; color:#64748b;">Credits Registered / Earned</div>
            <div style="font-size:1.2rem; font-weight:800; color:var(--navy-dark);">${totalCredits.toFixed(1)} / ${totalCredits.toFixed(1)}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; text-transform:uppercase; color:#64748b;">Semester Grade Point Average (SGPA)</div>
            <div style="font-size:1.4rem; font-weight:800; color:#006699;">${student.sgpa}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; text-transform:uppercase; color:#64748b;">Cumulative Grade Point Average (CGPA)</div>
            <div style="font-size:1.4rem; font-weight:800; color:#15803d;">${student.cgpa}</div>
          </div>
          <div>
            <div style="font-size:0.8rem; text-transform:uppercase; color:#64748b;">Result Status</div>
            <span class="circ-badge" style="background:#dcfce7; color:#166534; font-size:0.85rem; padding:4px 12px;">PASSED IN FIRST CLASS WITH DISTINCTION</span>
          </div>
        </div>

        <div class="memo-signatures-row">
          <div class="signature-block">
            <div class="sign-line"></div>
            <span>Verified By (Faculty In-Charge)</span>
          </div>
          <div style="text-align:center;">
            <div style="width:70px; height:70px; border:2px dashed #94a3b8; border-radius:8px; display:flex; align-items:center; justify-content:center; margin:0 auto 4px; font-size:9px; color:#64748b; font-weight:700;">
              QR CODE<br>VERIFIED
            </div>
            <span style="font-size:0.75rem; color:#64748b;">Online Verification Available</span>
          </div>
          <div class="signature-block">
            <div class="sign-line"></div>
            <span>Controller of Examinations</span>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-top:20px; display:flex; justify-content:center; gap:12px; flex-wrap:wrap; align-items:center;">
        ${isFacultyOrHodLoggedIn() ? `
        <button class="btn-primary" onclick="openMarksEditorModal('${student.rollNo}', 'semester')" style="background:#059669; border-color:#059669; display:inline-flex; align-items:center; gap:6px;">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          Update Semester Grades &amp; Marks
        </button>
        ` : `
        <span class="student-view-tag" style="background:#f1f5f9; color:#475569; padding:8px 16px; border-radius:6px; font-size:0.85rem; font-weight:600; border:1px solid #cbd5e1; display:inline-flex; align-items:center; gap:6px;" title="Students have view-only access. Faculty/HOD login required to update semester grades.">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Official Certified Memo (View Only)
        </span>
        `}
        <button class="btn-secondary" onclick="window.print()">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print Official SVPP Grade Memo (PDF)
        </button>
      </div>
    `;
  }

  window.renderGradeMemoGlobal = renderGradeMemo;
  const defaultResultStudent = SVPP_DATA.students["24G01A4301"] || SVPP_DATA.students["23F61A3101"];
  renderGradeMemo(defaultResultStudent);

  if (resultForm && rollInput) {
    resultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput.value.trim().toUpperCase();
      if (!roll) return;
      const student = getOrCreateStudentRecord(roll);
      renderGradeMemo(student);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const roll = chip.getAttribute("data-roll");
      if (rollInput) rollInput.value = roll;
      const student = getOrCreateStudentRecord(roll);
      renderGradeMemo(student);
    });
  });

  const openResultsBtn = document.getElementById("openResultsEntryBtn");
  if (openResultsBtn) {
    openResultsBtn.addEventListener("click", () => {
      if (!isFacultyOrHodLoggedIn()) {
        window.openFacultyLoginModal("update semester grades & marks");
        return;
      }
      const curRoll = rollInput && rollInput.value ? rollInput.value.trim().toUpperCase() : "24G01A4301";
      if (window.openMarksEditorModal) {
        window.openMarksEditorModal(curRoll, "semester");
      }
    });
  }
}

// MODULE 7: Faculty Desk
function initFacultyDesk() {
  const postNoticeForm = document.getElementById("facultyPostNoticeForm");
  if (postNoticeForm) {
    postNoticeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!isFacultyOrHodLoggedIn()) {
        showNotification("Permission Denied: Students have view-only access. Login as Faculty or HOD to post circulars.", "error");
        window.openFacultyLoginModal("publish departmental circulars");
        return;
      }

      const title = document.getElementById("noticeTitleInput")?.value.trim();
      const category = document.getElementById("noticeCategorySelect")?.value || "academic";
      const desc = document.getElementById("noticeDescInput")?.value.trim();
      
      if (!title || !desc) {
        showNotification("Please fill in both title and circular text", "danger");
        return;
      }

      const authUser = getAuthenticatedUser();
      const authorLabel = authUser ? `${authUser.name} (${authUser.role})` : "Faculty / Admin Portal";

      const now = new Date();
      const newCircular = {
        id: `CIRC-${Date.now()}`,
        date: `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`,
        day: now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`,
        month: now.toLocaleString('default', { month: 'short' }).toUpperCase(),
        category: category,
        badgeText: category.toUpperCase(),
        badgeClass: category === "exams" ? "badge-exam" : category === "urgent" ? "badge-urgent" : "badge-academic",
        title: title,
        desc: desc,
        refNo: `SVPP/AI/NOTIFY/${now.getFullYear()}/${Math.floor(100 + Math.random() * 900)}`,
        issuedBy: authorLabel,
        pdfUrl: "#"
      };

      const existing = JSON.parse(localStorage.getItem("svpp_ai_circulars") || "[]");
      existing.unshift(newCircular);
      localStorage.setItem("svpp_ai_circulars", JSON.stringify(existing));

      postNoticeForm.reset();
      showNotification(`New circular published to Department Portal successfully by ${authorLabel}!`, "success");
      initCirculars(); // re-render circulars tab
    });
  }
}

// Modals Handler
function initModals() {
  const modals = document.querySelectorAll(".modal-backdrop");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
    const closeBtn = modal.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    }
  });
}

// Global Toast Notification Helper
function showNotification(message, type = "info") {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.backgroundColor = type === "success" ? "#065f46" : type === "danger" ? "#991b1b" : "#0f172a";
  toast.style.color = "#ffffff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontSize = "0.9rem";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.animation = "fadeIn 0.2s ease-out";
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


// MODULE: III B.Tech V Semester Master Student Directory & Roster
function initRosterModule() {
  const tbody = document.getElementById("masterRosterTbody");
  const searchInput = document.getElementById("masterRosterSearch");
  const sectionPills = document.querySelectorAll("#rosterSectionPills .filter-pill");
  const statusPills = document.querySelectorAll("#rosterStatusPills .filter-pill");
  const exportBtn = document.getElementById("exportRosterCsvBtn");
  const emptyMsg = document.getElementById("rosterEmptyMsg");

  if (!tbody) return;

  const roster = SVPP_DATA.roster3rdYear || [];
  let curSection = "all";
  let curStatus = "all";
  let curSearch = "";

  // Update KPI counters
  const totalStudents = roster.length;
  const safeStudents = roster.filter(s => s.status === "Safe").length;
  const condonationStudents = roster.filter(s => s.status === "Condonation").length;
  const shortageStudents = roster.filter(s => s.status === "Shortage").length;
  const avgAttn = totalStudents > 0 
    ? (roster.reduce((acc, s) => acc + s.attendanceOverall, 0) / totalStudents).toFixed(1)
    : "83.8";

  const kpiTotal = document.getElementById("kpiTotalStudents");
  const kpiAvg = document.getElementById("kpiAvgAttendance");
  const kpiSafe = document.getElementById("kpiSafeCount");
  const kpiCond = document.getElementById("kpiCondonationCount");
  const kpiShort = document.getElementById("kpiShortageCount");

  if (kpiTotal) kpiTotal.textContent = totalStudents;
  if (kpiAvg) kpiAvg.textContent = `${avgAttn}%`;
  if (kpiSafe) kpiSafe.textContent = safeStudents;
  if (kpiCond) kpiCond.textContent = condonationStudents;
  if (kpiShort) kpiShort.textContent = shortageStudents;

  function renderTable() {
    const filtered = roster.filter(st => {
      const matchSec = curSection === "all" || st.section === curSection;
      const matchStat = curStatus === "all" || st.status === curStatus;
      const matchSearch = !curSearch ||
        st.rollNo.toLowerCase().includes(curSearch) ||
        st.name.toLowerCase().includes(curSearch) ||
        (st.rawName && st.rawName.toLowerCase().includes(curSearch));
      return matchSec && matchStat && matchSearch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = "";
      if (emptyMsg) emptyMsg.style.display = "block";
      return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";

    tbody.innerHTML = filtered.map((st, i) => {
      const initials = st.name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('');
      const tagClass = st.status === "Safe" ? "tag-safe" : st.status === "Condonation" ? "tag-condonation" : "tag-shortage";
      const barColor = st.status === "Safe" ? "#10b981" : st.status === "Condonation" ? "#f59e0b" : "#ef4444";

      return `
        <tr>
          <td style="font-family:var(--font-mono); color:#94a3b8; text-align:center;">${i + 1}</td>
          <td>
            <span style="font-family:var(--font-mono); font-weight:700; color:var(--primary-navy);">${st.rollNo}</span>
          </td>
          <td>
            <div class="student-meta-cell">
              <div class="student-avatar">${initials}</div>
              <div>
                <div style="font-weight:700; color:var(--navy-dark); font-size:0.88rem;">${st.name}</div>
                <div style="font-size:0.75rem; color:#64748b;">${st.rawName}</div>
              </div>
            </div>
          </td>
          <td style="text-align:center;">
            <span class="circ-badge ${st.section === 'Section A' ? 'badge-academic' : 'badge-faculty'}" style="font-size:0.75rem;">
              ${st.section}
            </span>
          </td>
          <td style="font-size:0.82rem; color:#475569;">
            ${st.mentor}
          </td>
          <td>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-weight:700; font-family:var(--font-mono); font-size:0.84rem;">${st.attendanceOverall}%</span>
              <span class="eligibility-tag ${tagClass}" style="margin:0; padding:2px 8px; font-size:0.72rem;">${st.status}</span>
            </div>
            <div class="progress-bar-wrap" style="height:6px; margin:0;">
              <div class="progress-bar-fill" style="width:${st.attendanceOverall}%; background:${barColor};"></div>
            </div>
          </td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700; color:#0284c7;">${st.sgpa}</td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700; color:#15803d;">${st.cgpa}</td>
          <td style="text-align:center;">
            <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">
              <button class="quick-action-btn" onclick="openStudentView('${st.rollNo}', 'attendance')" title="View Verified Attendance">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                Attn
              </button>
              <button class="quick-action-btn btn-marks" onclick="openStudentView('${st.rollNo}', 'marks')" title="View Mid Internal Marks">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                Marks
              </button>
              <button class="quick-action-btn btn-results" onclick="openStudentView('${st.rollNo}', 'results')" title="View Semester Grade Card Memo">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Result Memo
              </button>
              ${isFacultyOrHodLoggedIn() ? `
              <button class="quick-action-btn faculty-only" onclick="openMarksEditorModal('${st.rollNo}', 'mid1')" style="background:#eff6ff; color:#1d4ed8; border-color:#bfdbfe;" title="Update Student Marks">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Edit
              </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  window.refreshMasterRoster = renderTable;

  window.openStudentView = function(rollNo, viewType) {
    const student = getOrCreateStudentRecord(rollNo);
    if (!student) return;

    if (viewType === 'attendance') {
      const attnTab = document.querySelector('[data-tab="attendance"]');
      if (attnTab) attnTab.click();
      const input = document.getElementById("attendanceRollInput");
      if (input) input.value = rollNo;
      if (window.renderStudentAttendanceGlobal) {
        window.renderStudentAttendanceGlobal(student);
      }
    } else if (viewType === 'marks') {
      const marksTab = document.querySelector('[data-tab="marks"]');
      if (marksTab) marksTab.click();
      const input = document.getElementById("marksRollInput");
      if (input) input.value = rollNo;
      if (window.renderStudentMarksGlobal) {
        window.renderStudentMarksGlobal(student);
      }
    } else if (viewType === 'results') {
      const resultsTab = document.querySelector('[data-tab="results"]');
      if (resultsTab) resultsTab.click();
      const input = document.getElementById("resultsRollInput");
      if (input) input.value = rollNo;
      if (window.renderGradeMemoGlobal) {
        window.renderGradeMemoGlobal(student);
      }
    }
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      curSearch = e.target.value.trim().toLowerCase();
      renderTable();
    });
  }

  sectionPills.forEach(pill => {
    pill.addEventListener("click", () => {
      sectionPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      curSection = pill.getAttribute("data-section");
      renderTable();
    });
  });

  statusPills.forEach(pill => {
    pill.addEventListener("click", () => {
      statusPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      curStatus = pill.getAttribute("data-status");
      renderTable();
    });
  });

  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      let csv = "Sl No,Hall Ticket No,Student Name,Official Name,Section,Faculty Mentor,Overall Attendance (%),Attendance Status,SGPA,CGPA\n";
      roster.forEach((st, i) => {
        csv += `${i + 1},${st.rollNo},"${st.name}","${st.rawName}",${st.section},"${st.mentor}",${st.attendanceOverall},${st.status},${st.sgpa},${st.cgpa}\n`;
      });

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "SVPP_AI_III_Year_V_Sem_Master_Roster.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotification("Exported full master roster of 127 students to CSV!", "success");
    });
  }

  renderTable();
}

// =============================================================================
// MODULE 8: FACULTY MARKS & SEMESTER GRADES EDITOR MODULE
// =============================================================================

function initMarksEditorModule() {
  const modal = document.getElementById("marksUpdateModal");
  const studentSelect = document.getElementById("modalStudentSelect");
  const sectionBadge = document.getElementById("modalStudentSectionBadge");
  const batchBadge = document.getElementById("modalStudentBatchBadge");
  const examPills = document.querySelectorAll("#modalExamPills .exam-nav-pill");
  const tableContainer = document.getElementById("modalMarksTableContainer");
  const summaryBar = document.getElementById("modalMarksSummaryBar");
  const form = document.getElementById("marksEditForm");
  const resetBtn = document.getElementById("resetModalMarksBtn");
  const cancelBtn = document.getElementById("cancelMarksModalBtn");
  const closeBtn = document.getElementById("closeMarksModalBtn");

  if (!modal || !studentSelect || !tableContainer) return;

  let activeRoll = "24G01A4301";
  let activeExam = "mid1"; // 'mid1' | 'mid2' | 'semester'

  // Populate student dropdown with all 127 students
  studentSelect.innerHTML = SVPP_3RD_YEAR_STUDENTS.map(st => {
    const student = SVPP_DATA.students[st.rollNo] || st;
    const sec = student.section || (st.rollNo.endsWith("61") ? "Sec A" : "Sec B");
    return `<option value="${st.rollNo}">${st.rollNo} - ${st.name} (${sec})</option>`;
  }).join("");

  function updateStudentBadges(student) {
    if (!student) return;
    if (sectionBadge) sectionBadge.textContent = student.section || "Section A";
    if (batchBadge) {
      batchBadge.textContent = student.rollNo.startsWith("25G05") ? "2025-2028 (LE)" : "2024-2028 Regular";
    }
  }

  function renderEditor() {
    const student = SVPP_DATA.students[activeRoll] || getOrCreateStudentRecord(activeRoll);
    if (!student) return;

    updateStudentBadges(student);

    if (activeExam === "mid1" || activeExam === "mid2") {
      const marksList = activeExam === "mid1" ? student.midMarks.mid1 : student.midMarks.mid2;
      const examTitle = activeExam === "mid1" ? "Mid-I Assessment" : "Mid-II Assessment";

      tableContainer.innerHTML = `
        <table class="marks-edit-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="width: 14%;">Course Code</th>
              <th>Subject Title</th>
              <th style="width: 14%; text-align: center;">Descriptive (/30)</th>
              <th style="width: 13%; text-align: center;">Online Quiz (/10)</th>
              <th style="width: 14%; text-align: center;">Assignment (/5)</th>
              <th style="width: 13%; text-align: center;">Total (/45)</th>
              <th style="width: 14%; text-align: center;">Scaled Score (/30)</th>
            </tr>
          </thead>
          <tbody>
            ${marksList.map((m, idx) => `
              <tr data-sub-idx="${idx}">
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-navy);">${m.code}</td>
                <td style="font-weight: 600; font-size: 0.88rem;">${m.name}</td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-desc-input" min="0" max="30" value="${m.descriptive}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-quiz-input" min="0" max="10" value="${m.quiz}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <input type="number" class="marks-input-sm mid-assgn-input" min="0" max="5" value="${m.assignment}" data-idx="${idx}" required>
                </td>
                <td style="text-align: center;">
                  <span class="marks-calc-badge mid-raw-total" data-idx="${idx}">${m.total} / 45</span>
                </td>
                <td style="text-align: center;">
                  <span class="marks-calc-badge scaled mid-scaled-total" data-idx="${idx}">${m.scaled} / 30</span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;

      function recalcMidLive() {
        const rows = tableContainer.querySelectorAll("tbody tr");
        let totalScaled = 0;
        let count = 0;

        rows.forEach(row => {
          const descInput = row.querySelector(".mid-desc-input");
          const quizInput = row.querySelector(".mid-quiz-input");
          const assgnInput = row.querySelector(".mid-assgn-input");
          const rawBadge = row.querySelector(".mid-raw-total");
          const scaledBadge = row.querySelector(".mid-scaled-total");

          let desc = parseInt(descInput?.value, 10);
          if (isNaN(desc)) desc = 0;
          if (desc < 0) { desc = 0; descInput.value = 0; }
          if (desc > 30) { desc = 30; descInput.value = 30; }

          let quiz = parseInt(quizInput?.value, 10);
          if (isNaN(quiz)) quiz = 0;
          if (quiz < 0) { quiz = 0; quizInput.value = 0; }
          if (quiz > 10) { quiz = 10; quizInput.value = 10; }

          let assgn = parseInt(assgnInput?.value, 10);
          if (isNaN(assgn)) assgn = 0;
          if (assgn < 0) { assgn = 0; assgnInput.value = 0; }
          if (assgn > 5) { assgn = 5; assgnInput.value = 5; }

          const rawTotal = desc + quiz + assgn;
          const scaled = Math.min(30, Math.round((rawTotal / 45) * 30));

          if (rawBadge) rawBadge.textContent = `${rawTotal} / 45`;
          if (scaledBadge) scaledBadge.textContent = `${scaled} / 30`;

          totalScaled += scaled;
          count++;
        });

        const avg = count > 0 ? (totalScaled / count).toFixed(1) : "0.0";
        const perfStatus = avg >= 25 ? "Outstanding Performance" : avg >= 20 ? "Good Performance" : "Attention Required";
        const perfColor = avg >= 25 ? "#065f46" : avg >= 20 ? "#0369a1" : "#b45309";

        summaryBar.innerHTML = `
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Examination:</span>
            <div style="font-size: 1rem; font-weight: 800; color: var(--navy-dark);">${examTitle} (6 Subjects)</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Average Scaled Internal:</span>
            <div style="font-size: 1.25rem; font-weight: 800; color: #006699;">${avg} <span style="font-size: 0.8rem; color: #64748b;">/ 30.0</span></div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Assessment Status:</span>
            <div style="font-size: 0.95rem; font-weight: 700; color: ${perfColor};">${perfStatus}</div>
          </div>
        `;
      }

      tableContainer.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", recalcMidLive);
      });
      recalcMidLive();

    } else if (activeExam === "semester") {
      const results = student.results;

      tableContainer.innerHTML = `
        <table class="marks-edit-table" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="width: 12%;">Sub Code</th>
              <th>Subject Title</th>
              <th style="width: 10%; text-align: center;">Credits</th>
              <th style="width: 13%; text-align: center;">Internal (/30)</th>
              <th style="width: 14%; text-align: center;">External (/70 or /50)</th>
              <th style="width: 11%; text-align: center;">Total</th>
              <th style="width: 11%; text-align: center;">Grade</th>
              <th style="width: 11%; text-align: center;">Points</th>
            </tr>
          </thead>
          <tbody>
            ${results.map((r, idx) => {
              const subMeta = SVPP_3RD_YEAR_SUBJECTS.find(s => s.code === r.code) || { isLab: false, credits: r.credits };
              const isLab = subMeta.isLab;
              const maxExt = isLab ? 50 : 70;
              return `
                <tr data-res-idx="${idx}" data-is-lab="${isLab}" data-credits="${r.credits}">
                  <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-navy);">${r.code}</td>
                  <td style="font-weight: 600; font-size: 0.86rem;">
                    ${r.name}
                    ${isLab ? `<span style="font-size:0.7rem; background:#e0f2fe; color:#0369a1; padding:2px 6px; border-radius:4px; margin-left:4px;">LAB</span>` : ''}
                  </td>
                  <td style="text-align: center; font-family: var(--font-mono); font-weight: 700;">${r.credits.toFixed(1)}</td>
                  <td style="text-align: center;">
                    <input type="number" class="marks-input-sm sem-internal-input" min="0" max="30" value="${r.internal}" data-idx="${idx}" required>
                  </td>
                  <td style="text-align: center;">
                    <input type="number" class="marks-input-sm sem-external-input" min="0" max="${maxExt}" value="${r.external}" data-idx="${idx}" required>
                  </td>
                  <td style="text-align: center;">
                    <span class="marks-calc-badge sem-total-badge" data-idx="${idx}">${r.total}</span>
                  </td>
                  <td style="text-align: center;">
                    <span class="grade-pill grade-${r.grade.replace('+', '-plus')} sem-grade-pill" data-idx="${idx}">${r.grade}</span>
                  </td>
                  <td style="text-align: center; font-family: var(--font-mono); font-weight: 700;">
                    <span class="sem-points-badge" data-idx="${idx}">${r.points}</span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      `;

      function recalcSemesterLive() {
        const rows = tableContainer.querySelectorAll("tbody tr");
        let totalGradePoints = 0;
        let totalCredits = 0;
        let anyFailed = false;

        rows.forEach(row => {
          const isLab = row.getAttribute("data-is-lab") === "true";
          const credits = parseFloat(row.getAttribute("data-credits")) || 3.0;
          const intInput = row.querySelector(".sem-internal-input");
          const extInput = row.querySelector(".sem-external-input");
          const totalBadge = row.querySelector(".sem-total-badge");
          const gradePill = row.querySelector(".sem-grade-pill");
          const pointsBadge = row.querySelector(".sem-points-badge");

          let internal = parseInt(intInput?.value, 10);
          if (isNaN(internal)) internal = 0;
          if (internal < 0) { internal = 0; intInput.value = 0; }
          if (internal > 30) { internal = 30; intInput.value = 30; }

          const maxExt = isLab ? 50 : 70;
          let external = parseInt(extInput?.value, 10);
          if (isNaN(external)) external = 0;
          if (external < 0) { external = 0; extInput.value = 0; }
          if (external > maxExt) { external = maxExt; extInput.value = maxExt; }

          const total = internal + external;
          const totalMarksScaled = isLab ? Math.round(total * (100 / 80)) : total;

          let grade = "C";
          let points = 5;
          if (totalMarksScaled >= 90) { grade = "O"; points = 10; }
          else if (totalMarksScaled >= 80) { grade = "A+"; points = 9; }
          else if (totalMarksScaled >= 70) { grade = "A"; points = 8; }
          else if (totalMarksScaled >= 60) { grade = "B+"; points = 7; }
          else if (totalMarksScaled >= 50) { grade = "B"; points = 6; }
          else if (totalMarksScaled >= 40) { grade = "C"; points = 5; }
          else { grade = "F"; points = 0; anyFailed = true; }

          if (totalBadge) totalBadge.textContent = total;
          if (gradePill) {
            gradePill.textContent = grade;
            gradePill.className = `grade-pill grade-${grade.replace('+', '-plus')} sem-grade-pill`;
          }
          if (pointsBadge) pointsBadge.textContent = points;

          totalCredits += credits;
          totalGradePoints += points * credits;
        });

        const liveSGPA = (totalGradePoints / totalCredits).toFixed(2);
        // Estimate updated CGPA based on old CGPA and new SGPA
        const origSgpa = parseFloat(student.sgpa) || 8.0;
        const origCgpa = parseFloat(student.cgpa) || 8.0;
        const diff = (parseFloat(liveSGPA) - origSgpa) * 0.25;
        const liveCGPA = Math.min(9.95, Math.max(5.0, origCgpa + diff)).toFixed(2);

        const statusClass = anyFailed ? "#991b1b" : "#065f46";
        const statusText = anyFailed ? "BACKLOGS DETECTED" : "PASSED IN FIRST CLASS WITH DISTINCTION";

        summaryBar.innerHTML = `
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Registered Credits:</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--navy-dark);">${totalCredits.toFixed(1)} Credits</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Live Computed SGPA:</span>
            <div style="font-size: 1.35rem; font-weight: 800; color: #006699;">${liveSGPA}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Updated CGPA:</span>
            <div style="font-size: 1.35rem; font-weight: 800; color: #15803d;">${liveCGPA}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Provisional Classification:</span>
            <div style="font-size: 0.95rem; font-weight: 800; color: ${statusClass};">${statusText}</div>
          </div>
        `;
      }

      tableContainer.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", recalcSemesterLive);
      });
      recalcSemesterLive();
    }
  }

  // Student dropdown change
  studentSelect.addEventListener("change", (e) => {
    activeRoll = e.target.value;
    renderEditor();
  });

  // Exam type tab pills
  examPills.forEach(pill => {
    pill.addEventListener("click", () => {
      examPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeExam = pill.getAttribute("data-exam") || "mid1";
      renderEditor();
    });
  });

  // Close and Cancel buttons
  const closeModal = () => modal.classList.remove("open");
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Form submission (Save & Recalculate)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isFacultyOrHodLoggedIn()) {
      showNotification("Access Denied: Student view-only mode. You must login as Faculty or HOD to edit and save marks.", "error");
      closeModal();
      window.openFacultyLoginModal("save student marks modifications");
      return;
    }
    const student = SVPP_DATA.students[activeRoll];
    if (!student) return;

    if (activeExam === "mid1" || activeExam === "mid2") {
      const rows = tableContainer.querySelectorAll("tbody tr");
      const updatedMid = [];

      rows.forEach((row, idx) => {
        const desc = parseInt(row.querySelector(".mid-desc-input")?.value, 10) || 0;
        const quiz = parseInt(row.querySelector(".mid-quiz-input")?.value, 10) || 0;
        const assgn = parseInt(row.querySelector(".mid-assgn-input")?.value, 10) || 0;
        const total = desc + quiz + assgn;
        const scaled = Math.min(30, Math.round((total / 45) * 30));

        const originalItem = (activeExam === "mid1" ? student.midMarks.mid1 : student.midMarks.mid2)[idx];
        updatedMid.push({
          code: originalItem.code,
          name: originalItem.name,
          descriptive: desc,
          quiz: quiz,
          assignment: assgn,
          total: total,
          scaled: scaled
        });
      });

      if (activeExam === "mid1") {
        student.midMarks.mid1 = updatedMid;
      } else {
        student.midMarks.mid2 = updatedMid;
      }

    } else if (activeExam === "semester") {
      const rows = tableContainer.querySelectorAll("tbody tr");
      const updatedResults = [];
      let totalGradePoints = 0;
      let totalCredits = 0;

      rows.forEach((row, idx) => {
        const isLab = row.getAttribute("data-is-lab") === "true";
        const credits = parseFloat(row.getAttribute("data-credits")) || 3.0;
        const internal = parseInt(row.querySelector(".sem-internal-input")?.value, 10) || 0;
        const external = parseInt(row.querySelector(".sem-external-input")?.value, 10) || 0;
        const total = internal + external;
        const totalMarksScaled = isLab ? Math.round(total * (100 / 80)) : total;

        let grade = "C";
        let points = 5;
        if (totalMarksScaled >= 90) { grade = "O"; points = 10; }
        else if (totalMarksScaled >= 80) { grade = "A+"; points = 9; }
        else if (totalMarksScaled >= 70) { grade = "A"; points = 8; }
        else if (totalMarksScaled >= 60) { grade = "B+"; points = 7; }
        else if (totalMarksScaled >= 50) { grade = "B"; points = 6; }
        else if (totalMarksScaled >= 40) { grade = "C"; points = 5; }
        else { grade = "F"; points = 0; }

        totalCredits += credits;
        totalGradePoints += points * credits;

        const originalItem = student.results[idx];
        updatedResults.push({
          code: originalItem.code,
          name: originalItem.name,
          internal: internal,
          external: external,
          total: total,
          grade: grade,
          points: points,
          credits: credits,
          status: grade === "F" ? "FAIL" : "PASS"
        });
      });

      const newSgpa = (totalGradePoints / totalCredits).toFixed(2);
      const origSgpa = parseFloat(student.sgpa) || 8.0;
      const origCgpa = parseFloat(student.cgpa) || 8.0;
      const diff = (parseFloat(newSgpa) - origSgpa) * 0.25;
      const newCgpa = Math.min(9.95, Math.max(5.0, origCgpa + diff)).toFixed(2);

      student.results = updatedResults;
      student.sgpa = newSgpa;
      student.cgpa = newCgpa;
    }

    // Persist to localStorage
    let customMarks = {};
    try {
      const raw = localStorage.getItem("svpp_custom_marks");
      if (raw) customMarks = JSON.parse(raw);
    } catch (err) {}

    customMarks[student.rollNo] = {
      midMarks: student.midMarks,
      results: student.results,
      sgpa: student.sgpa,
      cgpa: student.cgpa
    };
    localStorage.setItem("svpp_custom_marks", JSON.stringify(customMarks));

    // Sync to SVPP_DATA.roster3rdYear
    if (SVPP_DATA.roster3rdYear) {
      const rIdx = SVPP_DATA.roster3rdYear.findIndex(s => s.rollNo === student.rollNo);
      if (rIdx !== -1) {
        SVPP_DATA.roster3rdYear[rIdx].midMarks = student.midMarks;
        SVPP_DATA.roster3rdYear[rIdx].results = student.results;
        SVPP_DATA.roster3rdYear[rIdx].sgpa = student.sgpa;
        SVPP_DATA.roster3rdYear[rIdx].cgpa = student.cgpa;
      }
    }

    // Live update open views
    const marksInput = document.getElementById("marksRollInput");
    if (marksInput && marksInput.value.trim().toUpperCase() === student.rollNo && window.renderStudentMarksGlobal) {
      window.renderStudentMarksGlobal(student);
    }

    const resultsInput = document.getElementById("resultsRollInput");
    if (resultsInput && resultsInput.value.trim().toUpperCase() === student.rollNo && window.renderGradeMemoGlobal) {
      window.renderGradeMemoGlobal(student);
    }

    if (window.refreshMasterRoster) {
      window.refreshMasterRoster();
    }

    closeModal();
    showNotification(`Successfully saved updated marks for ${student.name} (${student.rollNo})!`, "success");
  });

  // Reset to Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!isFacultyOrHodLoggedIn()) {
        showNotification("Access Denied: Only authenticated Faculty or HOD can reset student marks.", "error");
        return;
      }
      const student = SVPP_DATA.students[activeRoll];
      if (!student) return;

      if (!confirm(`Reset marks for ${student.name} (${student.rollNo}) back to original autonomous curriculum records?`)) {
        return;
      }

      let customMarks = {};
      try {
        const raw = localStorage.getItem("svpp_custom_marks");
        if (raw) customMarks = JSON.parse(raw);
      } catch (err) {}

      delete customMarks[student.rollNo];
      localStorage.setItem("svpp_custom_marks", JSON.stringify(customMarks));

      // Re-generate default record
      const stIdx = SVPP_3RD_YEAR_STUDENTS.findIndex(s => s.rollNo === student.rollNo);
      if (stIdx !== -1) {
        const refreshed = build3rdYearStudentRecord(SVPP_3RD_YEAR_STUDENTS[stIdx], stIdx + 1);
        SVPP_DATA.students[student.rollNo] = refreshed;
        if (SVPP_DATA.roster3rdYear) {
          SVPP_DATA.roster3rdYear[stIdx] = refreshed;
        }

        renderEditor();

        if (window.renderStudentMarksGlobal) window.renderStudentMarksGlobal(refreshed);
        if (window.renderGradeMemoGlobal) window.renderGradeMemoGlobal(refreshed);
        if (window.refreshMasterRoster) window.refreshMasterRoster();

        showNotification(`Marks reset to autonomous curriculum defaults for ${student.rollNo}.`, "info");
      }
    });
  }

  // Global trigger to open modal with a specific student and exam type
  window.openMarksEditorModal = function(rollNo, examType = "mid1") {
    if (!isFacultyOrHodLoggedIn()) {
      window.openFacultyLoginModal("edit and update student marks");
      return;
    }

    if (rollNo && SVPP_DATA.students[rollNo]) {
      activeRoll = rollNo;
      if (studentSelect) studentSelect.value = rollNo;
    }
    if (examType) {
      activeExam = examType;
      examPills.forEach(p => {
        if (p.getAttribute("data-exam") === examType) {
          p.classList.add("active");
        } else {
          p.classList.remove("active");
        }
      });
    }
    renderEditor();
    modal.classList.add("open");
  };
}

