/**
 * HerbNutri - Herbal and Nutrition Awareness Project
 * Educational Dataset for Herbs, Nutrition Guidelines, and Interactive Tools
 */

const HERBS_DATA = [
  {
    id: "tulsi",
    name: "Tulsi (Holy Basil)",
    scientificName: "Ocimum sanctum (Ocimum tenuiflorum)",
    family: "Lamiaceae (Mint Family)",
    category: "immunity",
    badge: "Queen of Herbs",
    image: "images/tulsi.svg",
    photoUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "Revered in Ayurveda as an 'Elixir of Life', Tulsi is an adaptogenic herb that strengthens the immune system, reduces physiological stress, and purifies respiratory pathways.",
    activeCompounds: "Eugenol, Rosmarinic Acid, Ursolic Acid, Caryophyllene",
    keyBenefits: [
      "Boosts natural immunity and fights seasonal infections",
      "Acts as a powerful adaptogen to lower stress and cortisol",
      "Clears respiratory airways and soothes persistent coughs",
      "Contains antibacterial and antioxidant compounds"
    ],
    traditionalUses: "In Ayurveda, Tulsi balances Vata and Kapha doshas. Traditionally taken as fresh leaf infusion with honey to combat fevers, colds, and sluggish vitality.",
    modernScience: "Clinical trials highlight its antimicrobial, anti-inflammatory, and hypoglycemic (blood-sugar regulating) properties, supporting pulmonary defense against environmental pollutants.",
    homeRemedy: {
      title: "Immunity Kadha (Herbal Decoction)",
      ingredients: "5-7 fresh Tulsi leaves, 1 crushed black peppercorn, small ginger slice, 1 cup water, 1/2 tsp honey.",
      steps: "Boil crushed Tulsi and ginger in water for 5 minutes until reduced slightly. Strain into a cup, allow to cool to lukewarm, and stir in honey. Sip once daily in morning."
    },
    dosageAndPrecaution: "Safe for regular daily intake (3-6 leaves or 1-2 cups tea). Individuals on blood-thinning medications or pregnant women should consult a physician."
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis Miller",
    family: "Asphodelaceae",
    category: "skin",
    badge: "Plant of Immortality",
    image: "images/aloe-vera.svg",
    photoUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
    description: "A hardy succulent famous for its clear, nutrient-rich inner leaf gel that provides deep hydration, accelerates wound healing, and restores gut lining balance.",
    activeCompounds: "Acemannan (polysaccharide), Aloin, Vitamins A, C, E, Bradykinase enzyme",
    keyBenefits: [
      "Deeply hydrates and calms sunburns, acne, and irritated skin",
      "Aids gastrointestinal digestion and soothes acid reflux",
      "Packed with antioxidants that counter cellular aging",
      "Promotes tissue regeneration and wound healing"
    ],
    traditionalUses: "Historically known as 'Ghritkumari' in classical Indian medicine for cooling internal heat (Pitta), soothing menstrual discomfort, and moisturizing skin.",
    modernScience: "Modern dermatological research confirms acemannan enhances fibroblast collagen production, while oral juice neutralizes excess stomach hydrochloric acid.",
    homeRemedy: {
      title: "Cooling Morning Aloe Juice",
      ingredients: "2 tablespoons of pure, freshly extracted clear inner aloe gel (yellow latex completely drained), 1 cup water, squeeze of fresh lemon, pinch of cumin.",
      steps: "Scrape only the clear transparent gel. Rinse thoroughly with water. Blend with 1 glass of water and lemon juice. Drink on an empty stomach twice a week."
    },
    dosageAndPrecaution: "Only ingest clean inner transparent gel. Never consume the bitter yellow latex layer beneath the rind as it causes intense laxative cramping."
  },
  {
    id: "turmeric",
    name: "Turmeric (Haldi)",
    scientificName: "Curcuma longa",
    family: "Zingiberaceae (Ginger Family)",
    category: "vitality",
    badge: "The Golden Healer",
    image: "images/turmeric.svg",
    photoUrl: "https://images.unsplash.com/photo-1615485290161-085e6834bb1e?auto=format&fit=crop&w=600&q=80",
    description: "The vibrant golden rhizome recognized worldwide as nature's most potent natural anti-inflammatory agent, joint protector, and immune modulator.",
    activeCompounds: "Curcumin (diferuloylmethane), Curcuminoids, Tumerone essential oils",
    keyBenefits: [
      "Unmatched natural anti-inflammatory activity",
      "Relieves joint pain, stiffness, and arthritis symptoms",
      "Supports liver detoxification and clean skin complexion",
      "Enhances memory by stimulating Brain-Derived Neurotrophic Factor (BDNF)"
    ],
    traditionalUses: "Used for thousands of years across South Asia as both culinary spice and medicine. Applied topically to cuts to prevent infection and consumed with warm milk for injury recovery.",
    modernScience: "Peer-reviewed studies confirm curcumin inhibits inflammatory signaling molecules (NF-kB). Note: Curcumin absorption surges by 2000% when combined with piperine (black pepper).",
    homeRemedy: {
      title: "Traditional Golden Milk (Haldi Doodh)",
      ingredients: "1 cup warm milk (dairy or almond/oat milk), 1/2 tsp organic turmeric powder, a pinch of freshly ground black pepper, 1/4 tsp crushed cardamom, 1 tsp honey or jaggery.",
      steps: "Whisk turmeric and black pepper into simmering milk for 3 minutes. Pour into a mug, let cool slightly, and sweeten with honey. Drink 30 minutes before bedtime."
    },
    dosageAndPrecaution: "Standard culinary amount (1-3g powder daily) is safe. High therapeutic extracts should be avoided by individuals with gallbladder gallstones or bleeding disorders."
  },
  {
    id: "ginger",
    name: "Ginger (Adrak)",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
    category: "digestion",
    badge: "Digestive Powerhouse",
    image: "images/ginger.svg",
    photoUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80",
    description: "A pungent, warming rhizome celebrated for igniting digestive fire (Agni), relieving motion sickness and nausea, and soothing muscular sore spots.",
    activeCompounds: "Gingerol, Shogaols, Zingiberene, Paradols",
    keyBenefits: [
      "Stimulates gastric enzymes to ease bloating and indigestion",
      "Fast-acting natural remedy for nausea, motion sickness, and morning sickness",
      "Warming thermogenic effect that supports healthy metabolic rate",
      "Reduces post-workout delayed onset muscle soreness (DOMS)"
    ],
    traditionalUses: "Described as 'Mahaushadhi' (universal great medicine) in Sanskrit scriptures. Chewed raw with rock salt before meals to awaken appetite and digestive secretion.",
    modernScience: "Double-blind studies prove gingerol accelerates gastric emptying and effectively suppresses nausea receptors without pharmaceutical drowsiness.",
    homeRemedy: {
      title: "Zesty Fresh Ginger Lemon Elixir",
      ingredients: "1 inch fresh grated ginger root, 2 cups water, 1 tbsp fresh lemon juice, 1 tsp organic honey.",
      steps: "Boil grated ginger in water for 7 minutes on low flame. Strain into a cup, stir in fresh lemon juice and honey. Drink warm after heavy meals."
    },
    dosageAndPrecaution: "Normal dietary use: 1-4 grams fresh ginger daily. Avoid extreme mega-doses if suffering from active peptic ulcers or acute stomach hyperacidity."
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    family: "Solanaceae (Nightshade Family)",
    category: "vitality",
    badge: "Indian Ginseng",
    image: "images/ashwagandha.svg",
    photoUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    description: "One of the cornerstone Rasayana (rejuvenator) herbs in Ayurveda, acclaimed for building stamina, balancing cortisol, and promoting restorative deep sleep.",
    activeCompounds: "Withanolides, Withaferin A, Alkaloids, Saponins",
    keyBenefits: [
      "Lowers chronic psychological stress and nervous exhaustion",
      "Improves endurance, physical stamina, and muscle strength",
      "Supports balanced thyroid hormone function",
      "Promotes deep REM sleep without morning lethargy"
    ],
    traditionalUses: "The name literally translates to 'smell of a horse', representing its ability to bestow the vigor, endurance, and fortitude of a healthy stallion.",
    modernScience: "Clinical trials demonstrate significant reductions in serum cortisol levels (-30%) and notable improvement in sleep architecture and cognitive recall.",
    homeRemedy: {
      title: "Restorative Moon Milk",
      ingredients: "1/2 tsp pure Ashwagandha root powder, 1 cup warm milk, 1/4 tsp cinnamon, 1 tsp ghee or honey.",
      steps: "Warm milk with ashwagandha powder and cinnamon for 3-4 minutes. Stir well, add honey, and consume 45 minutes before sleep."
    },
    dosageAndPrecaution: "Recommended dosage: 300-600mg standardized extract or 1/2 tsp root powder. Avoid during pregnancy unless advised by an Ayurvedic physician."
  },
  {
    id: "amla",
    name: "Amla (Indian Gooseberry)",
    scientificName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    category: "immunity",
    badge: "Vitamin C Champion",
    image: "images/amla.svg",
    photoUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    description: "A translucent green superfruit packed with the highest natural concentration of bio-available Vitamin C on earth (20x more than fresh oranges).",
    activeCompounds: "Ascorbic Acid (Vitamin C), Ellagitannins, Gallic Acid, Flavonoids",
    keyBenefits: [
      "Powers white blood cell count and robust viral defense",
      "Nourishes hair follicles, prevents early graying, and boosts collagen",
      "Regulates healthy blood sugar and insulin sensitivity",
      "Improves eyesight and protects retina capillaries"
    ],
    traditionalUses: "The primary active component of Chyawanprash. Known as the ultimate Rasayana that balances all three doshas (Vata, Pitta, and Kapha).",
    modernScience: "Heat-stable tannins protect its Vitamin C content even during light boiling. Strong lipid-lowering and cardioprotective biomarker profiles.",
    homeRemedy: {
      title: "Morning Amla Vitality Shot",
      ingredients: "2 fresh amlas (deseeded and chopped), small piece of ginger, 1/2 cup water, pinch of pink Himalayan rock salt.",
      steps: "Blend chopped amla and ginger with water until smooth. Strain the juice, add rock salt, and drink fresh first thing in the morning."
    },
    dosageAndPrecaution: "1-2 fresh fruits daily or 15-20ml juice. Very safe; those prone to kidney stones should drink plenty of water alongside high Vitamin C intake."
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    family: "Meliaceae (Mahogany Family)",
    category: "skin",
    badge: "Nature's Pharmacy",
    image: "images/neem.svg",
    photoUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    description: "Dubbed the 'Village Pharmacy' in India, every part of the Neem tree possesses potent antibacterial, antifungal, blood-purifying, and pest-repelling qualities.",
    activeCompounds: "Azadirachtin, Nimbin, Nimbidin, Quercetin",
    keyBenefits: [
      "Natural blood purifier that clears stubborn acne and eczema",
      "Antimicrobial action cleanses oral gums and prevents plaque",
      "Supports liver enzyme balance and detoxifies systemic toxins",
      "Acts as an organic antimicrobial for skin and scalp dandruff"
    ],
    traditionalUses: "Fresh neem twigs (Datun) are traditionally chewed as natural toothbrushes. Neem leaf water baths treat infections and summer heat rashes.",
    modernScience: "Pharmacological studies validate its broad-spectrum anti-fungal, anti-inflammatory, and immune-stimulatory therapeutic profile.",
    homeRemedy: {
      title: "Purifying Neem Face Pack & Scalp Rinse",
      ingredients: "Handful of fresh neem leaves (or 2 tbsp neem powder), 1 tbsp rose water, 1/2 tsp turmeric.",
      steps: "Grind neem leaves into a fine paste with rose water and turmeric. Apply onto clean face for 15 minutes, then rinse with cold water. Clears breakout bacteria."
    },
    dosageAndPrecaution: "Topical application is widely safe. High internal intake is not recommended for young children, infants, or couples trying to conceive."
  },
  {
    id: "mint",
    name: "Mint (Pudina)",
    scientificName: "Mentha spicata / Mentha piperita",
    family: "Lamiaceae",
    category: "digestion",
    badge: "Cooling Digestive Mint",
    image: "images/mint.svg",
    photoUrl: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    description: "An aromatic herb with a crisp, refreshing menthol fragrance that instantly cools internal body heat, relieves gas, and promotes mental alertness.",
    activeCompounds: "Menthol, Menthone, Limonene, Rosmarinic Acid",
    keyBenefits: [
      "Relaxes digestive smooth muscles to alleviate irritable bowel symptoms",
      "Natural mouth freshener that inhibits oral sulfur-producing bacteria",
      "Cooling sensation alleviates tension headaches and nasal congestion",
      "Aids nutrient absorption while adding vibrant culinary flavor"
    ],
    traditionalUses: "Prepared as fresh spicy chutney with cumin, lemon, and coriander to stimulate sluggish appetite during hot summer months.",
    modernScience: "Menthol acts on TRPM8 cold-sensing receptors, delivering an antispasmodic effect on digestive muscles and reducing abdominal cramping.",
    homeRemedy: {
      title: "Cooling Summer Pudina Chaas (Buttermilk)",
      ingredients: "1 cup homemade fresh yogurt/curd, 1 cup water, 10 crushed mint leaves, 1/4 tsp roasted cumin powder, pinch of black salt.",
      steps: "Blend curd, water, crushed mint, cumin, and black salt until frothy. Serve chilled after lunch to ease digestion."
    },
    dosageAndPrecaution: "Extremely safe in normal culinary amounts. Excessive pure menthol essential oil should never be ingested directly without dilution."
  }
];

const NUTRITION_TOPICS = [
  {
    id: "macro",
    title: "Essential Macronutrients",
    subtitle: "The Body's Primary Fuel & Structural Bricks",
    icon: "⚡",
    points: [
      {
        name: "Complex Carbohydrates (45-55%)",
        desc: "Whole grains (brown rice, oats, millets, quinoa) provide sustained glucose release for brain cognition and muscular energy, preventing insulin spikes."
      },
      {
        name: "Lean Proteins (15-25%)",
        desc: "Essential for muscle synthesis, cellular repair, enzyme production, and immune antibodies. Rich sources: lentils, beans, paneer, tofu, nuts, and eggs."
      },
      {
        name: "Healthy Unsaturated Fats (20-30%)",
        desc: "Crucial for absorbing fat-soluble vitamins (A, D, E, K) and hormone balance. Focus on extra virgin cold-pressed oils, walnuts, flaxseeds, and avocados."
      },
      {
        name: "Dietary Fiber (25-35g daily)",
        desc: "Feeds beneficial gut microbiome colonies, stabilizes cholesterol, and ensures smooth intestinal transit."
      }
    ]
  },
  {
    id: "micro",
    title: "Vital Micronutrients",
    subtitle: "Vitamins & Minerals That Drive Cellular Chemistry",
    icon: "🔬",
    points: [
      {
        name: "Vitamin C & Zinc",
        desc: "Synergistic immune warriors found in Amla, citrus, guava, pumpkin seeds, and legumes that accelerate cellular tissue healing."
      },
      {
        name: "Iron & Vitamin B12",
        desc: "Critical for hemoglobin oxygen transport and nerve sheath health. Found in leafy greens, dates, fortified cereals, and dairy."
      },
      {
        name: "Vitamin D3 & Calcium",
        desc: "Governs bone mineral density and neuromuscular signaling. Best gathered through 20 minutes of morning sunlight, milk, and sesame seeds."
      },
      {
        name: "Magnesium & Potassium",
        desc: "Electrolytes that manage blood pressure, heartbeat rhythm, and reduce nocturnal muscle cramps. Abundant in bananas, spinach, and almonds."
      }
    ]
  },
  {
    id: "superfoods",
    title: "Daily Functional Superfoods",
    subtitle: "Affordable Nutrient Bombs for College Students",
    icon: "🥑",
    points: [
      {
        name: "Sprouted Legumes (Moong & Chana)",
        desc: "Sprouting triples Vitamin C content and drastically lowers phytates, multiplying protein bioavailability and enzyme potency."
      },
      {
        name: "Flaxseeds & Chia Seeds",
        desc: "Plant kingdom champions of Alpha-Linolenic Acid (Omega-3) for memory focus, exam focus, and heart resilience."
      },
      {
        name: "Curd & Fermented Foods",
        desc: "Provides live active probiotic cultures that fortify the gut-brain axis, enhancing mood, digestion, and resilience against stress."
      },
      {
        name: "Seasonal Dark Greens (Palak, Methi, Moringa)",
        desc: "Packed with lutein for blue-light eye protection from screen fatigue, folate, and alkalizing chlorophyll."
      }
    ]
  }
];

const HEALTHY_TIPS = [
  {
    category: "Morning Routine",
    title: "Start With Warm Copper or Lemon Water",
    icon: "🌅",
    text: "Drink 500ml of room-temperature or lukewarm water right upon waking up. It stimulates peristalsis, clears overnight metabolic byproducts, and rehydrates your brain cells before tea or coffee."
  },
  {
    category: "Mindful Eating",
    title: "The 32-Chew Rule (Chew Your Drinks, Drink Your Solids)",
    icon: "🧘",
    text: "Digestion starts in the mouth with salivary amylase. Eating slowly without phone or laptop screens lets satiety signals (leptin) reach your brain, preventing overeating and heavy bloating."
  },
  {
    category: "Dietary Balance",
    title: "Eat The Color Rainbow Every Single Day",
    icon: "🌈",
    text: "Different colors represent distinct phytonutrients: Red (Lycopene for heart), Orange (Beta-carotene for vision), Green (Chlorophyll for detox), and Purple (Anthocyanins for brain health)."
  },
  {
    category: "Hydration",
    title: "Sip Water Continuously, Don't Chug Large Volumes",
    icon: "💧",
    text: "Chugging a liter of water at once overwhelms kidneys and flushes out vital electrolytes. Sip throughout the day; keep an herbal water bottle infused with mint or cucumber at your study desk."
  },
  {
    category: "Gut Health",
    title: "Include Traditional Probiotics with Lunch",
    icon: "🥣",
    text: "A small bowl of homemade curd, buttermilk (chaas), or fermented kanji replenishes your gut lining with friendly bacteria that produce 90% of your body's serotonin (happiness hormone)."
  },
  {
    category: "Evening Sleep",
    title: "The 3-Hour Dinner Gap Before Bedtime",
    icon: "🌙",
    text: "Complete dinner at least 2.5 to 3 hours before sleeping. Going to bed with an active stomach disrupts growth hormone release, causes silent acid reflux, and compromises deep sleep recovery."
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which medicinal plant is famously honored as the 'Queen of Herbs' in Ayurveda for immunity?",
    options: ["Aloe Vera", "Tulsi (Holy Basil)", "Ginger", "Mint"],
    correctIndex: 1,
    explanation: "Tulsi (Ocimum sanctum) is known as the 'Queen of Herbs' due to its powerful adaptogenic and immune-enhancing properties."
  },
  {
    id: 2,
    question: "What household spice increases the bioavailability of Turmeric's active compound (Curcumin) by up to 2000%?",
    options: ["Black Pepper (Piperine)", "Cinnamon", "Cardamom", "Coriander"],
    correctIndex: 0,
    explanation: "Piperine in black pepper inhibits hepatic and intestinal glucuronidation, increasing curcumin absorption by approximately 2000%!"
  },
  {
    id: 3,
    question: "Which section of a healthy balanced plate should be filled with Vegetables and Fruits?",
    options: ["10%", "25%", "50% (Half the plate)", "75%"],
    correctIndex: 2,
    explanation: "According to global dietary guidelines and the Plate Method, 50% of each meal should comprise colorful vegetables and fresh fruits."
  },
  {
    id: 4,
    question: "What is the primary soothing active polysaccharide found in pure transparent Aloe Vera gel?",
    options: ["Capsaicin", "Acemannan", "Caffeine", "Allicin"],
    correctIndex: 1,
    explanation: "Acemannan is the key bioactive polysaccharide in Aloe Vera responsible for skin cellular repair and gastrointestinal soothing."
  }
];

const FAQS = [
  {
    q: "Can herbal home remedies replace prescription medications?",
    a: "Herbal remedies and balanced nutrition work wonders for preventive wellness, symptom relief, and minor ailments. However, for diagnosed acute or chronic medical conditions, always consult qualified medical doctors. Herbs are complementary, not emergency pharmaceutical replacements."
  },
  {
    q: "How many cups of Tulsi or Ginger herbal tea can I safely drink daily?",
    a: "For most healthy adults and college students, 1 to 2 cups of mild herbal tea (such as freshly brewed Tulsi, ginger, or mint) per day is both safe and beneficial. Avoid drinking extremely concentrated decoctions on an empty stomach if you have high acidity."
  },
  {
    q: "How do I ensure my Turmeric (Curcumin) is properly absorbed by the body?",
    a: "Curcumin is fat-soluble and poorly absorbed in pure water. To unlock its full benefits, always consume turmeric with a source of healthy fat (warm milk, a drop of ghee or oil) and a pinch of freshly ground black pepper (piperine)."
  },
  {
    q: "What is the simplest way for college students to maintain a balanced diet on a tight budget?",
    a: "Focus on affordable whole foods: seasonal fruits (bananas, amla, guavas), sprouted moong beans, roasted chana (chickpeas), peanuts, eggs, whole wheat roti, curd, and local seasonal greens like spinach and fenugreek leaves."
  },
  {
    q: "Is it safe to consume fresh raw Aloe Vera straight from a garden plant?",
    a: "You must only consume the completely clear, transparent inner gel. When you cut an aloe leaf, a bitter yellow sap called 'aloin' drains out; this yellow latex is an irritating laxative. Let the yellow sap drain completely and wash the clear gel thoroughly before use."
  }
];
