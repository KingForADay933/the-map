// The Map — Search Index
// One entry per page. Add new pages here as the site grows.
const SEARCH_INDEX = [
  {
    title: "Financial Literacy Overview",
    section: "Finance",
    path: "finance/financial-literacy-overview.html",
    desc: "Managing money is a skill, not something you're born knowing. Once you understand the basics, a lot of the stress around finances starts to loosen its grip.",
    keywords: "money finance basics income expenses savings emergency fund net worth compound interest"
  },
  {
    title: "Budgeting",
    section: "Finance",
    path: "finance/budgeting.html",
    desc: "A budget isn't about restriction. It's about knowing where your money goes so you can decide where it should go instead.",
    keywords: "budget 50/30/20 envelope zero-based spending tracking YNAB Mint income expenses categories"
  },
  {
    title: "Low-Risk Investing",
    section: "Finance",
    path: "finance/low-risk-investing.html",
    desc: "You don't need to pick stocks or time the market. The most reliable approach to building wealth over time is boring on purpose. And it works.",
    keywords: "investing index funds ETF Vanguard Fidelity S&P 500 brokerage compound growth stocks bonds"
  },
  {
    title: "Filing Taxes",
    section: "Finance",
    path: "finance/filing-taxes.html",
    desc: "Taxes sound complicated until you actually do them. For most people, it takes about 20 minutes and a website that walks you through every step.",
    keywords: "taxes W-2 1099 refund IRS TurboTax FreeTaxUSA deductions federal state return filing"
  },
  {
    title: "Debt Management & Building Credit",
    section: "Finance",
    path: "finance/debt-management.html",
    desc: "Not all debt is the same. Knowing the difference, and knowing how to build credit strategically, puts you miles ahead of most people your age.",
    keywords: "debt credit score FICO credit card loan interest avalanche snowball credit report collections student loans"
  },
  {
    title: "Roth IRA & Retirement Basics",
    section: "Finance",
    path: "finance/roth-ira.html",
    desc: "Retirement feels distant when you're young. But time is literally the most valuable asset you have right now. It only works if you start.",
    keywords: "Roth IRA retirement 401k contributions compound interest tax-free savings long-term investing"
  },
  {
    title: "Health Insurance 101",
    section: "Finance",
    path: "finance/health-insurance.html",
    desc: "Health insurance is one of the most confusing parts of adult life, and one of the most important. A single ER visit without coverage can cost thousands.",
    keywords: "health insurance premium deductible copay HMO PPO marketplace Medicaid plan coverage out-of-pocket"
  },
  {
    title: "Buying a Car",
    section: "Finance",
    path: "finance/buying-a-car.html",
    desc: "A car is one of the biggest purchases most young adults make, and one of the easiest to get wrong. Do your homework first.",
    keywords: "car buying new used dealership loan financing APR negotiation CarFax inspection trade-in"
  },
  {
    title: "Salary Negotiation & Understanding Job Offers",
    section: "Finance · Career",
    path: "finance/salary-negotiation.html",
    desc: "Most people accept the first number they're given. That's almost always a mistake, and it compounds over your entire career.",
    keywords: "salary negotiation offer letter compensation benefits PTO raise counter offer market rate"
  },
  {
    title: "Job Hunting",
    section: "Career",
    path: "career/job-hunting.html",
    desc: "Finding a job takes more than sending out applications and hoping for the best. A little strategy goes a long way, especially early in your career.",
    keywords: "job hunting job search applications LinkedIn Indeed cover letter entry level internship"
  },
  {
    title: "Building a Strong Resume",
    section: "Career",
    path: "career/resume.html",
    desc: "Your resume is often the first impression an employer has of you. It doesn't need to be perfect, but it needs to be clear, honest, and relevant.",
    keywords: "resume CV experience skills formatting ATS template one page cover letter references"
  },
  {
    title: "Interview Skills",
    section: "Career",
    path: "career/interview-skills.html",
    desc: "Landing an interview is half the battle. The other half is showing up prepared, calm, and ready to have a real conversation about why you're the right fit.",
    keywords: "interview behavioral STAR method questions preparation practice confidence follow-up thank you"
  },
  {
    title: "Networking & Professional Relationships",
    section: "Career",
    path: "career/networking.html",
    desc: "Most opportunities don't come from job boards. They come from people. Building a professional network isn't about being fake — it's about building real relationships.",
    keywords: "networking LinkedIn professional relationships mentorship informational interview connections outreach"
  },
  {
    title: "Career Research",
    section: "Career",
    path: "career/career-research.html",
    desc: "Picking a career direction without researching it first is like choosing a place to live without visiting it. The more information you gather early, the better.",
    keywords: "career research job shadowing informational interview industries fields salary outlook BLS O*NET"
  },
  {
    title: "The College Journey",
    section: "Learning",
    path: "learning/college-journey.html",
    desc: "Whether you're heading to a four-year university, community college, or trade school, higher education is a major shift. Here's how to navigate it.",
    keywords: "college university community college trade school FAFSA financial aid GPA major advisor freshman"
  },
  {
    title: "Continued Learning",
    section: "Learning",
    path: "learning/continued-learning.html",
    desc: "School ending doesn't mean learning stops. The people who keep growing after graduation are the ones who stay curious and know where to look.",
    keywords: "self-learning online courses Coursera edX YouTube books certifications skills after graduation"
  },
  {
    title: "Effective Learning Techniques",
    section: "Learning",
    path: "learning/effective-learning.html",
    desc: "Most people were never taught how to study. They were just told to do it. Here's what actually works, based on how memory and retention really function.",
    keywords: "studying spaced repetition active recall Pomodoro flashcards Anki memory retention learning science"
  },
  {
    title: "Test-Taking Strategies",
    section: "Learning",
    path: "learning/test-taking.html",
    desc: "Nothing replaces studying, but there's a real difference between knowing the material and performing well on a test. These strategies help close that gap.",
    keywords: "test exam strategy anxiety time management multiple choice essay finals standardized test ACT SAT"
  },
  {
    title: "Academic AI Usage",
    section: "Learning",
    path: "learning/academic-ai.html",
    desc: "Generative AI is real, it's not going away, and academic institutions are still figuring out how to handle it. Here's a grounded take on using it wisely.",
    keywords: "AI ChatGPT Claude academic integrity plagiarism tools writing research ethics school"
  },
  {
    title: "Time Management & Productivity",
    section: "Life Skills",
    path: "life/time-management.html",
    desc: "Getting things done isn't about doing more. It's about doing the right things, in the right order, without running yourself into the ground.",
    keywords: "time management productivity Pomodoro calendar planning priorities tasks overwhelm procrastination"
  },
  {
    title: "Managing Emotions, Anxiety & Stress",
    section: "Life Skills",
    path: "life/managing-emotions.html",
    desc: "Feeling overwhelmed, anxious, or emotionally drained is a normal part of being human, especially during major life transitions.",
    keywords: "anxiety stress mental health emotions coping grounding breathing mindfulness therapy crisis"
  },
  {
    title: "Cooking 101",
    section: "Life Skills",
    path: "life/cooking.html",
    desc: "Cooking at home is one of the best financial decisions you can make as a young adult. It saves money, improves your health, and becomes genuinely satisfying.",
    keywords: "cooking recipes basics kitchen beginner meal prep groceries knife skills pantry staples"
  },
  {
    title: "Nutrition Basics",
    section: "Life Skills",
    path: "life/nutrition.html",
    desc: "You don't need to count calories or follow a diet. But understanding what you're putting in your body makes a real difference in how you feel.",
    keywords: "nutrition food protein carbs fats vegetables hydration healthy eating diet macros energy"
  },
  {
    title: "Finding a Place to Live",
    section: "Life Skills",
    path: "life/finding-housing.html",
    desc: "Finding your first place is one of the most exciting and stressful parts of becoming independent. Know what to look for and what to avoid.",
    keywords: "apartment renting housing lease landlord deposit roommates searching neighborhoods Zillow Craigslist"
  },
  {
    title: "Setting Up Your First Place",
    section: "Life Skills",
    path: "life/setting-up-your-place.html",
    desc: "Signing a lease is just the beginning. Getting the place set up — utilities, mail, roommate agreements, and everything else — is a process most people stumble through.",
    keywords: "apartment setup utilities electricity internet renter's insurance mail address roommates move-in"
  },
  {
    title: "Car Maintenance",
    section: "Life Skills",
    path: "life/car-maintenance.html",
    desc: "Owning a car means more than paying for it. Regular maintenance prevents breakdowns, extends the vehicle's life, and saves significant money.",
    keywords: "car maintenance oil change tires brakes fluids inspection mechanic check engine light"
  },
  {
    title: "Learning to Drive",
    section: "Life Skills",
    path: "life/learning-to-drive.html",
    desc: "Not everyone learns to drive in high school, and that's completely fine. Whenever you're ready, there are multiple paths to getting your license.",
    keywords: "driving license learner's permit DMV road test parallel parking defensive driving practice"
  },
];
