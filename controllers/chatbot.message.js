import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(text)
    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const user = await User.create({
      sender: "user",
      text
    })

    // Data
    const botResponses = {

      "hello": "Hi! How can I help you?",
      "hi": "Hello! What can I do for you today?",
      "good morning": "Good morning! How may I assist you?",
      "good afternoon": "Good afternoon! How can I help?",
      "good evening": "Good evening! What do you need help with?",
      "hey": "Hey there! How can I assist you?",
      "how are you": "I'm doing great! How can I help you?",
      "what's up": "Not much! How can I help you today?",
      "can you help me": "Of course! Please tell me your problem.",
      "i need help": "Sure! What do you need help with?",
      "anyone there": "Yes, I'm here! How can I assist you?",

      "what is teamwork": "Teamwork is working together to achieve a common goal.",
      "what is discipline": "Discipline is the ability to control behavior and follow rules.",
      "what is honesty": "Honesty means telling the truth and being fair in all actions.",
      "what is leadership": "Leadership is the ability to guide and inspire others.",
      "what is responsibility": "Responsibility means being accountable for your actions.",
      "what is communication": "Communication is the exchange of information and ideas.",
      "what is time management": "Time management is the skill of using time effectively.",
      "what is confidence": "Confidence is belief in one's own abilities.",
      "what is respect": "Respect means showing care and value for others.",
      "what is teamwork spirit": "Teamwork spirit is supporting and helping each other.",
      "what is motivation": "Motivation is the drive to achieve goals.",
      "what is creativity": "Creativity is the ability to think in new and innovative ways.",
      "what is problem solving": "Problem solving is finding solutions to difficulties.",
      "what is cooperation": "Cooperation is working together for mutual benefit.",
      "what is patience": "Patience is the ability to wait calmly without frustration.",

      "what is success": "Success is achieving goals through effort and determination.",
      "what is failure": "Failure is a step toward learning and improvement.",
      "what is hard work": "Hard work is putting consistent effort to achieve goals.",
      "what is dedication": "Dedication is commitment toward a task or purpose.",
      "what is learning": "Learning is gaining knowledge or skills through experience.",
      "what is education": "Education is the process of acquiring knowledge and values.",
      "what is self confidence": "Self confidence is trust in your own abilities.",
      "what is teamwork skill": "Teamwork skill is the ability to work well with others.",
      "what is adaptability": "Adaptability is the ability to adjust to new situations.",
      "what is decision making": "Decision making is choosing the best option among alternatives.",
      "what is focus": "Focus is the ability to concentrate on a task.",
      "what is perseverance": "Perseverance is continuing despite difficulties.",
      "what is integrity": "Integrity is being honest and having strong moral values.",
      "what is kindness": "Kindness is showing care and compassion to others.",
      "what is empathy": "Empathy is understanding and sharing others’ feelings.",
      "what is teamwork coordination": "Teamwork coordination is working in harmony with others.",
      "what is goal setting": "Goal setting is the process of defining objectives to achieve.",
      "what is self discipline": "Self discipline is controlling emotions and actions.",
      "what is collaboration": "Collaboration is working jointly to achieve shared goals.",
      "what is productivity": "Productivity is the efficiency of completing tasks.",
      "what is innovation": "Innovation is introducing new ideas or methods.",
      "what is stress management": "Stress management is handling pressure in a healthy way.",
      "what is positive thinking": "Positive thinking is focusing on good outcomes.",
      "what is leadership quality": "Leadership quality is the ability to influence others positively.",
      "what is self improvement": "Self improvement is the process of becoming better over time.",


      "what is cricket": "Cricket is a bat-and-ball sport played between two teams of eleven players.",
      "who is sachin tendulkar": "Sachin Tendulkar is a legendary Indian cricketer known as the Master Blaster.",
      "what is football": "Football is a team sport played by kicking a ball to score goals.",
      "what is olympics": "The Olympics is an international sports event held every four years.",
      "what is badminton": "Badminton is a racquet sport played with a shuttlecock.",
      "what is kabaddi": "Kabaddi is a traditional Indian contact team sport.",
      "what is fifa": "FIFA is the international governing body of football.",
      "what is world cup": "The World Cup is an international tournament held in various sports.",
      "who is virat kohli": "Virat Kohli is a former Indian cricket team captain.",
      "what is chess": "Chess is a strategic board game played between two players.",

      "what is current affairs": "Current affairs are recent events happening around the world.",
      "who is the prime minister of india": "The Prime Minister of India is the head of the government.",
      "what is election": "An election is a process of choosing leaders by voting.",
      "what is democracy": "Democracy is a system of government where people elect leaders.",
      "what is parliament": "Parliament is the supreme legislative body of a country.",
      "what is budget": "A budget is a financial plan for income and expenditure.",
      "what is inflation": "Inflation is the rise in prices over time.",
      "what is gdp": "GDP is the total value of goods and services produced by a country.",
      "what is united nations": "The United Nations is an international organization for global peace.",
      "what is world health organization": "WHO is a UN agency focused on global health.",

      "what is programming": "Programming is writing instructions for computers to perform tasks.",
      "what is coding": "Coding is the process of converting ideas into computer-readable language.",
      "what is javascript": "JavaScript is a programming language used for web development.",
      "what is python": "Python is a high-level programming language known for simplicity.",
      "what is java": "Java is an object-oriented programming language.",
      "what is html": "HTML is the standard language for creating web pages.",
      "what is css": "CSS is used to style and design web pages.",
      "what is react": "React is a JavaScript library for building user interfaces.",
      "what is node js": "Node.js allows JavaScript to run on the server.",
      "what is database": "A database is a structured collection of data.",

      "what is artificial intelligence": "Artificial intelligence enables machines to think like humans.",
      "what is machine learning": "Machine learning is a subset of AI that learns from data.",
      "what is cloud computing": "Cloud computing provides computing services over the internet.",
      "what is cybersecurity": "Cybersecurity protects systems from digital attacks.",
      "what is blockchain": "Blockchain is a decentralized digital ledger technology.",
      "what is internet": "The internet is a global network of computers.",
      "what is 5g": "5G is the fifth generation of mobile network technology.",
      "what is smartphone": "A smartphone is a mobile phone with advanced features.",
      "what is operating system": "An operating system manages computer hardware and software.",

      "what is politics": "Politics is the process of making decisions for governance.",
      "what is constitution": "A constitution is the supreme law of a country.",
      "what is judiciary": "Judiciary interprets and applies the law.",
      "what is executive": "Executive implements and enforces laws.",
      "what is legislature": "Legislature makes laws for a country.",
      "what is public policy": "Public policy is a plan of action by the government.",
      "what is civil service": "Civil services help run government administration.",
      "what is opposition party": "Opposition parties question the ruling government.",
      "what is coalition government": "A coalition government is formed by multiple parties.",
      "what is freedom of speech": "Freedom of speech is the right to express opinions.",

      "what is news": "News is information about recent events.",
      "what is journalism": "Journalism is the activity of collecting and presenting news.",
      "what is media": "Media is a means of mass communication.",
      "what is breaking news": "Breaking news is urgent and important information.",
      "what is press conference": "A press conference is a meeting with journalists.",
      "what is headline": "A headline is the title of a news story.",
      "what is fake news": "Fake news is false or misleading information.",
      "what is editorial": "An editorial expresses opinions of a newspaper.",
      "what is press freedom": "Press freedom allows media to work independently.",
      "what is news channel": "A news channel broadcasts news programs.",

      "what is science": "Science is the study of the natural world.",
      "what is physics": "Physics studies matter, energy, and motion.",
      "what is chemistry": "Chemistry studies substances and their reactions.",
      "what is biology": "Biology studies living organisms.",
      "what is space science": "Space science studies the universe beyond Earth.",
      "what is satellite": "A satellite is an object that orbits a planet.",
      "what is rocket": "A rocket is a vehicle used for space travel.",
      "what is renewable energy": "Renewable energy comes from natural sources.",
      "what is climate change": "Climate change refers to long-term weather changes.",
      "what is environment": "Environment includes all living and non-living surroundings.",


      "what is hockey": "Hockey is a team sport played with sticks and a ball.",
      "what is tennis": "Tennis is a racquet sport played individually or in doubles.",
      "what is volleyball": "Volleyball is a team sport played by hitting a ball over a net.",
      "what is basketball": "Basketball is a sport where players score by throwing a ball into a hoop.",
      "what is athletics": "Athletics includes running, jumping, and throwing sports.",
      "what is marathon": "A marathon is a long-distance running race.",
      "what is asian games": "The Asian Games is a multi-sport event held among Asian countries.",
      "what is commonwealth games": "The Commonwealth Games is an international sports event.",
      "what is ipl": "IPL is a professional Twenty20 cricket league in India.",
      "what is test cricket": "Test cricket is the longest format of cricket.",

      "what is supreme court": "The Supreme Court is the highest judicial authority in India.",
      "what is high court": "A High Court is the top court in a state.",
      "what is lok sabha": "Lok Sabha is the lower house of Indian Parliament.",
      "what is rajya sabha": "Rajya Sabha is the upper house of Indian Parliament.",
      "what is by election": "A by-election fills a vacant seat between general elections.",
      "what is model code of conduct": "It is a set of rules for political parties during elections.",
      "what is governor": "A Governor is the constitutional head of a state.",
      "what is president of india": "The President is the ceremonial head of India.",
      "what is impeachment": "Impeachment is the process to remove a public official.",
      "what is ordinance": "An ordinance is a law issued by the executive.",

      "what is software": "Software is a set of instructions that tell a computer what to do.",
      "what is hardware": "Hardware refers to the physical components of a computer.",
      "what is algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
      "what is data structure": "A data structure organizes and stores data efficiently.",
      "what is api": "API allows communication between different software systems.",
      "what is backend": "Backend handles server-side logic and databases.",
      "what is frontend": "Frontend is the user-facing part of a website.",
      "what is full stack developer": "A full stack developer works on both frontend and backend.",
      "what is version control": "Version control tracks changes in code.",
      "what is github": "GitHub is a platform for hosting and managing code.",

      "what is internet of things": "IoT connects physical devices to the internet.",
      "what is big data": "Big data refers to extremely large data sets.",
      "what is virtual reality": "Virtual reality creates a simulated digital environment.",
      "what is augmented reality": "Augmented reality overlays digital elements on the real world.",
      "what is data science": "Data science extracts insights from data.",
      "what is automation": "Automation uses technology to perform tasks automatically.",
      "what is digital marketing": "Digital marketing promotes products online.",
      "what is search engine": "A search engine helps find information on the internet.",
      "what is google": "Google is a popular internet search engine.",
      "what is social media": "Social media allows people to connect online.",

      "what is economy": "Economy is the system of production and consumption.",
      "what is stock market": "The stock market is where shares are traded.",
      "what is share": "A share represents ownership in a company.",
      "what is mutual fund": "A mutual fund pools money from investors.",
      "what is cryptocurrency": "Cryptocurrency is a digital form of money.",
      "what is digital currency": "Digital currency exists only in electronic form.",
      "what is banking": "Banking manages money and financial transactions.",
      "what is interest rate": "Interest rate is the cost of borrowing money.",
      "what is tax": "Tax is money paid to the government.",
      "what is gst": "GST is a unified indirect tax system in India.",

      "what is education system": "Education system provides structured learning.",
      "what is online learning": "Online learning uses the internet for education.",
      "what is skill development": "Skill development improves abilities for work.",
      "what is competitive exam": "Competitive exams select candidates based on merit.",
      "what is ugc": "UGC regulates higher education in India.",
      "what is nta": "NTA conducts national level entrance exams.",
      "what is scholarship": "A scholarship provides financial aid to students.",
      "what is literacy": "Literacy is the ability to read and write.",
      "what is digital education": "Digital education uses technology for teaching.",
      "what is vocational training": "Vocational training focuses on job skills.",

      "what is health": "Health is a state of physical and mental well-being.",
      "what is fitness": "Fitness is the ability to stay physically active.",
      "what is mental health": "Mental health relates to emotional well-being.",
      "what is nutrition": "Nutrition is the intake of healthy food.",
      "what is immunity": "Immunity is the body's defense system.",
      "what is vaccine": "A vaccine protects against diseases.",
      "what is pandemic": "A pandemic is a global disease outbreak.",
      "what is first aid": "First aid is immediate medical help.",
      "what is yoga": "Yoga is a practice for physical and mental health.",
      "what is meditation": "Meditation improves focus and calmness.",

      "what is solar energy": "Solar energy comes from the sun.",
      "what is wind energy": "Wind energy is produced using wind turbines.",
      "what is global warming": "Global warming is the rise in Earth’s temperature.",
      "what is pollution": "Pollution is contamination of the environment.",
      "what is water conservation": "Water conservation saves water resources.",
      "what is wildlife conservation": "It protects animals and plants.",
      "what is sustainable development": "Development without harming future needs.",
      "what is recycling": "Recycling converts waste into reusable material.",
      "what is green energy": "Green energy is environmentally friendly energy.",
      "what is biodiversity": "Biodiversity is the variety of life on Earth."


    }





    const normalizedText = text.toLowerCase().trim();

    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";


    const bot = await Bot.create({
      text: botResponse
    })

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    })
  } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}