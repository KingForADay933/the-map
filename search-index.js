// The Map — Search Index
const SEARCH_INDEX = [
  {
    title: "Pathways",
    section: "Guided Reading",
    path: "pathways.html",
    desc: "Curated sequences through the site for specific life situations: moving out, first job, getting finances in order, college or trade, and healthcare literacy.",
    keywords: "pathways guided reading sequence moving out first job finances college trade healthcare"
  },
  {
    title: "Glossary",
    section: "Reference",
    path: "glossary.html",
    desc: "Plain-language definitions for the terms that come up most across finance, career, and adult life.",
    keywords: "glossary terms definitions APR deductible FICO credit score W-2 Roth IRA 401k premium coinsurance ETF index fund FAFSA COBRA"
  },
  {
    title: "Contact",
    section: "The Map",
    path: "contact.html",
    desc: "Send a message — feedback, corrections, topic suggestions, or anything else.",
    keywords: "contact feedback message suggestion correction error"
  },

  // ── Finance ──────────────────────────────────────────────────────────────
  {
    title: "Financial Literacy Overview",
    section: "Finance",
    path: "finance/financial-literacy-overview.html",
    desc: "Managing money is a skill, not something you're born knowing. Once you understand the basics, a lot of the stress around finances starts to loosen its grip.",
    keywords: "money finance basics income expenses savings emergency fund net worth compound interest budget"
  },
  {
    title: "Budgeting",
    section: "Finance",
    path: "finance/budgeting.html",
    desc: "A budget isn't about restriction. It's about knowing where your money goes so you can decide where it should go instead.",
    keywords: "budget 50/30/20 envelope zero-based spending tracking YNAB income expenses categories savings"
  },
  {
    title: "Debt Management & Building Credit",
    section: "Finance",
    path: "finance/debt-management.html",
    desc: "Not all debt is the same. Knowing the difference, and how to build credit strategically, puts you well ahead of most people your age.",
    keywords: "debt credit score credit card student loans payday loan credit history utilization FICO building credit authorized user"
  },
  {
    title: "Filing Taxes",
    section: "Finance",
    path: "finance/filing-taxes.html",
    desc: "Taxes sound complicated until you actually do them. For most people, it takes about 20 minutes and a website that walks you through every step.",
    keywords: "taxes filing W-2 1099 refund TurboTax FreeTaxUSA IRS free file April 15 deadline withholding"
  },
  {
    title: "Health Insurance 101",
    section: "Finance",
    path: "finance/health-insurance.html",
    desc: "Health insurance is one of the most confusing parts of adult life, and one of the most important. Here's how it actually works.",
    keywords: "health insurance premium deductible copay coinsurance HMO PPO HDHP HSA ACA marketplace Medicaid out-of-pocket"
  },
  {
    title: "Low-Risk Investing",
    section: "Finance",
    path: "finance/low-risk-investing.html",
    desc: "You don't need to pick stocks or time the market. The most reliable approach to building wealth over time is boring on purpose. And it works.",
    keywords: "investing index funds ETF Vanguard Fidelity S&P 500 brokerage compound growth stocks dollar cost averaging HYSA"
  },
  {
    title: "Roth IRA & Retirement Basics",
    section: "Finance",
    path: "finance/roth-ira.html",
    desc: "Retirement feels distant when you're young. But time is literally the most valuable asset you have right now. It only works if you start.",
    keywords: "Roth IRA retirement 401k compound interest tax-free investing employer match contribution limit early retirement"
  },
  {
    title: "Buying a Car",
    section: "Finance",
    path: "finance/buying-a-car.html",
    desc: "A car is one of the biggest purchases most young adults make, and one of the easiest to get wrong. Do your homework first.",
    keywords: "buying a car used new financing APR loan depreciation Carfax inspection negotiate dealer KBB Edmunds"
  },
  {
    title: "Auto Insurance",
    section: "Finance",
    path: "finance/auto-insurance.html",
    desc: "Auto insurance is legally required in almost every state. The difference between a good policy and a bad one can mean thousands of dollars out of your pocket.",
    keywords: "auto insurance car insurance liability collision comprehensive deductible premium uninsured motorist coverage quotes"
  },
  {
    title: "Renter's Insurance",
    section: "Finance",
    path: "finance/renters-insurance.html",
    desc: "Most renters don't have it. Most renters who've experienced a break-in, fire, or flood wish they had. It costs less than most people spend on coffee each month.",
    keywords: "renters insurance rental apartment belongings liability coverage flood theft fire replacement cost Lemonade"
  },
  {
    title: "Credit Cards 101",
    section: "Finance",
    path: "finance/credit-cards.html",
    desc: "A credit card used well builds your credit, earns rewards, and costs nothing. Used poorly, it's a debt trap with 20%+ interest.",
    keywords: "credit card APR interest balance minimum payment rewards cash back utilization grace period secured card"
  },
  {
    title: "Salary Negotiation & Job Offers",
    section: "Finance",
    path: "finance/salary-negotiation.html",
    desc: "Most people accept the first number they're given. That's almost always a mistake, and it compounds over your entire career.",
    keywords: "salary negotiation job offer benefits compensation raise counter offer market rate Glassdoor LinkedIn pay"
  },

  // ── Career ───────────────────────────────────────────────────────────────
  {
    title: "Job Hunting",
    section: "Career",
    path: "career/job-hunting.html",
    desc: "Finding a job takes more than sending out applications and hoping for the best. A little strategy goes a long way, especially early in your career.",
    keywords: "job hunting job search Indeed LinkedIn applications cover letter entry level hiring network interview"
  },
  {
    title: "Building a Strong Resume",
    section: "Career",
    path: "career/resume.html",
    desc: "Your resume is often the first impression an employer has of you. It doesn't need to be perfect, but it needs to be clear, honest, and relevant.",
    keywords: "resume CV job application experience skills ATS keywords one page cover letter action verbs format"
  },
  {
    title: "Interview Skills",
    section: "Career",
    path: "career/interview-skills.html",
    desc: "Landing an interview is half the battle. The other half is showing up prepared, calm, and ready to have a real conversation about why you're the right fit.",
    keywords: "interview preparation STAR method behavioral questions nerves thank you email virtual interview practice"
  },
  {
    title: "Networking & Professional Relationships",
    section: "Career",
    path: "career/networking.html",
    desc: "Most opportunities don't come from job boards. They come from people. Building a professional network isn't about being fake or transactional.",
    keywords: "networking LinkedIn professional relationships mentor informational interview connections career events"
  },
  {
    title: "Career Research",
    section: "Career",
    path: "career/career-research.html",
    desc: "Picking a career direction without researching it first is like choosing a place to live without visiting it. The more information you gather early, the better.",
    keywords: "career research occupation outlook BLS O*NET job market salary informational interview major field"
  },
  {
    title: "Workplace Basics",
    section: "Career",
    path: "career/workplace-basics.html",
    desc: "Getting hired is one thing. Showing up and actually thriving is another. Most of what makes someone good to work with has nothing to do with their job skills.",
    keywords: "workplace professional first job manager email meetings communication first 90 days culture professionalism"
  },
  {
    title: "Performance Reviews",
    section: "Career",
    path: "career/performance-review.html",
    desc: "A performance review isn't something that happens to you. It's a conversation you can prepare for, shape, and use — whether it goes well or not.",
    keywords: "performance review self assessment raise promotion feedback manager goals annual review preparation"
  },
  {
    title: "Getting a Raise or Promotion",
    section: "Career",
    path: "career/getting-a-raise.html",
    desc: "Working hard matters, but it's not enough on its own. The people who get promoted make their work visible, build the right relationships, and ask at the right time.",
    keywords: "raise promotion salary increase negotiation market rate performance manager advocate visibility"
  },
  {
    title: "Quitting a Job the Right Way",
    section: "Career",
    path: "career/quitting-a-job.html",
    desc: "How you leave a job matters almost as much as how you performed while you were there. People remember how you left, and references follow you for years.",
    keywords: "quitting job resignation two weeks notice reference letter COBRA 401k benefits transition professional"
  },

  // ── Learning ─────────────────────────────────────────────────────────────
  {
    title: "Choosing a Major or Trade",
    section: "Learning",
    path: "learning/choosing-a-major.html",
    desc: "Most people make one of the biggest decisions of their life with almost no information. Here's how to actually research your options before committing.",
    keywords: "major trade college career path four-year degree community college apprenticeship certification passion research BLS"
  },
  {
    title: "The College Journey",
    section: "Learning",
    path: "learning/college-journey.html",
    desc: "Whether you're heading to a four-year university, community college, or trade school, higher education is a major shift. Here's how to navigate it.",
    keywords: "college university community college trade school FAFSA financial aid GPA major advisor academic success"
  },
  {
    title: "Continued Learning",
    section: "Learning",
    path: "learning/continued-learning.html",
    desc: "School ending doesn't mean learning stops. The people who keep growing after graduation are the ones who stay curious and know where to look.",
    keywords: "continued learning online courses free education Coursera YouTube freeCodeCamp Crash Course habits skills"
  },
  {
    title: "Effective Learning Techniques",
    section: "Learning",
    path: "learning/effective-learning.html",
    desc: "Most people were never taught how to study. They were just told to do it. Here's what actually works, based on how memory and retention really function.",
    keywords: "study techniques active recall spaced repetition Anki flashcards notes Pomodoro sleep memory retention focus"
  },
  {
    title: "Test-Taking Strategies",
    section: "Learning",
    path: "learning/test-taking.html",
    desc: "Nothing replaces staying on top of the work and actually studying. But there's a real difference between knowing material and performing well on a test.",
    keywords: "test taking exam strategies multiple choice essay anxiety time management review STAR PEEL study plan"
  },

  // ── Life Skills ───────────────────────────────────────────────────────────
  {
    title: "Time Management & Productivity",
    section: "Life Skills",
    path: "life/time-management.html",
    desc: "Getting things done isn't about doing more. It's about doing the right things, in the right order, without running yourself into the ground.",
    keywords: "time management productivity Pomodoro Eisenhower matrix prioritization procrastination burnout calendar planning"
  },
  {
    title: "Managing Emotions, Anxiety & Stress",
    section: "Life Skills",
    path: "life/managing-emotions.html",
    desc: "Feeling overwhelmed, anxious, or emotionally drained is a normal part of being human, especially during major life transitions.",
    keywords: "anxiety stress emotions mental health coping grounding breathing therapy 988 crisis self-care regulation"
  },
  {
    title: "Finding a Place to Live",
    section: "Life Skills",
    path: "life/finding-housing.html",
    desc: "Finding your first place is one of the most exciting and stressful parts of becoming independent. Knowing what to look for makes it a lot smoother.",
    keywords: "apartment housing rental lease search Zillow rent budget security deposit utilities roommate application"
  },
  {
    title: "Setting Up Your First Place",
    section: "Life Skills",
    path: "life/setting-up-your-place.html",
    desc: "Signing a lease is just the beginning. Getting the actual place set up — utilities, mail, roommate agreements — is what most people figure out by stumbling through.",
    keywords: "moving apartment utilities electricity internet mail address change roommate agreement setup checklist"
  },
  {
    title: "Cooking 101",
    section: "Life Skills",
    path: "life/cooking.html",
    desc: "Cooking at home is one of the best financial decisions you can make as a young adult. It saves money, improves your health, and becomes genuinely satisfying.",
    keywords: "cooking recipes beginner kitchen skills grocery budget sauté roast boil meal prep ingredients staples"
  },
  {
    title: "Nutrition Basics",
    section: "Life Skills",
    path: "life/nutrition.html",
    desc: "You don't need to count calories or follow a specific diet. But understanding what you're putting in your body makes a real difference in how you feel.",
    keywords: "nutrition food health protein carbs fat vitamins balanced diet eating budget macronutrients meal"
  },
  {
    title: "Car Maintenance",
    section: "Life Skills",
    path: "life/car-maintenance.html",
    desc: "Owning a car means more than paying for it. Regular maintenance prevents breakdowns, extends the vehicle's life, and saves significant money.",
    keywords: "car maintenance oil change tires brakes fluids inspection mechanic check engine light dashboard warning"
  },
  {
    title: "Learning to Drive",
    section: "Life Skills",
    path: "life/learning-to-drive.html",
    desc: "Not everyone learns to drive in high school, and that's completely fine. Whenever you're ready, there are multiple paths to a license.",
    keywords: "driving license learner permit DMV road test driver's ed online course defensive driving highway"
  },
  {
    title: "Laundry & Clothing Care",
    section: "Life Skills",
    path: "life/laundry.html",
    desc: "Laundry is one of those things nobody officially teaches you, so most people either learn by ruining something or avoiding it until the pile gets critical.",
    keywords: "laundry washing clothes dryer stains sorting cold hot care label symbols detergent shrink fabric"
  },
  {
    title: "Digital Safety",
    section: "Life Skills",
    path: "life/digital-safety.html",
    desc: "Most people don't think about their digital security until something goes wrong. A few basic habits put in place now protect your money and identity.",
    keywords: "digital safety passwords 2FA two-factor authentication phishing scams identity theft credit freeze Bitwarden"
  },
  {
    title: "Tenant Rights & Landlord Issues",
    section: "Life Skills",
    path: "life/tenant-rights.html",
    desc: "Renting doesn't mean surrendering your rights. Most landlord problems can be resolved if you know what you're entitled to and document everything.",
    keywords: "tenant rights landlord repairs security deposit eviction small claims court habitability retaliation lease"
  },
  {
    title: "When Money Is Tight",
    section: "Life Skills",
    path: "life/money-tight.html",
    desc: "Not everyone starts from a stable place. What help is available, how to access it without shame, and how to triage when you can't cover everything.",
    keywords: "money tight financial hardship SNAP food stamps Medicaid 211 food bank utility assistance rent help emergency benefits"
  },
  {
    title: "Basic Legal Literacy",
    section: "Life Skills",
    path: "life/legal-literacy.html",
    desc: "What makes a contract binding, your rights at work and with debt collectors, how small claims court works, and when to get a lawyer.",
    keywords: "legal contract rights small claims court debt collectors police employment wage theft power of attorney notary"
  }
];
