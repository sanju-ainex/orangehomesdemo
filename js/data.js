/**
 * Orange Homes - Master Application Data
 * Complete database of home designs, packages, suburb profiles,
 * construction tracker demo records, articles, and reviews.
 */

const ORANGE_DATA = {
  brand: {
    name: "Orange Homes",
    tagline: "Sydney's Premier Custom Home Builders",
    subtagline: "Next-Level Luxury, Fixed Pricing & Unmatched Freedom",
    phone: "+61 488 582 007",
    phoneRaw: "+61488582007",
    whatsappUrl: "https://wa.me/61488582007",
    email: "admin@orangesolutions.com.au",
    website: "https://orangesolutions.com.au/",
    address: "Bella Vista, NSW | Cheltenham, VIC",
    openingHours: "Mon - Sat: 8:30 AM - 5:30 PM | Sun: By Appointment",
    licenseNo: "NSW Builders Lic: 389421C",
    experienceYears: 20
  },

  homeDesigns: [
    {
      id: "bion",
      name: "Bion",
      category: "Dual Occupancy",
      storeys: "Double Storey",
      badge: "Dual Living / High Rental Yield",
      image: "assets/images/facade_bion_duplex.jpg",
      heroImage: "assets/images/facade_bion_duplex.jpg",
      sizeSQ: 58,
      sizeM2: 538.8,
      beds: 8,
      baths: 6.5,
      living: 4,
      garages: 2,
      minBlockWidth: 15.2,
      minBlockLength: 30.0,
      priceFrom: "$789,000",
      description: "An extraordinary dual-occupancy luxury design configured as two symmetrical high-end architectural dwellings. Maximise your land value and generate dual rental streams with bespoke master suites, open-concept living, and alfresco dining on both sides.",
      features: [
        "2 Completely Independent Luxury Dwellings",
        "Dual Gourmet Kitchens with 60mm Waterfall Islands",
        "Ground Floor Guest Bedroom Suite with Ensuite",
        "Dual Private Covered Alfresco Entertaining Areas",
        "Acoustic Insulation Party Wall Exceeding BCA Standards",
        "Independent Solar & Smart Home Meters"
      ],
      facades: [
        { name: "Urban Modern", desc: "Matte black cladding with vertical timber battens and off-white render" },
        { name: "Hamptons Coastal", desc: "Classic weatherboard with crisp white moldings and charcoal shingles" },
        { name: "Monolith Slate", desc: "Feature stacked dry-stone pillar with charcoal architectural panels" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Dwelling 1 & Dwelling 2 mirrored ground floor living, guest suites, and garages.",
          svgMap: `
            <svg viewBox="0 0 800 480" class="floorplan-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
              <!-- Dwelling 1 (Left) -->
              <rect x="40" y="40" width="350" height="400" fill="#27272a" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="4"/>
              <text x="215" y="65" fill="#ff6b00" font-family="Outfit" font-size="14" font-weight="bold" text-anchor="middle">DWELLING 1 (GROUND FLOOR)</text>
              
              <rect x="50" y="80" width="150" height="130" fill="#18181b" stroke="#52525b"/>
              <text x="125" y="145" fill="#f4f4f5" font-size="12" text-anchor="middle">Garage 1 (5.8 x 3.2m)</text>
              
              <rect x="210" y="80" width="170" height="130" fill="#18181b" stroke="#52525b"/>
              <text x="295" y="135" fill="#f4f4f5" font-size="12" text-anchor="middle">Guest Suite (Bed 4)</text>
              <text x="295" y="155" fill="#a1a1aa" font-size="10" text-anchor="middle">3.6 x 3.4m + Ensuite</text>
              
              <rect x="50" y="220" width="330" height="140" fill="#18181b" stroke="#52525b"/>
              <text x="215" y="280" fill="#f4f4f5" font-size="13" font-weight="bold" text-anchor="middle">Open Living & Dining Area (6.4 x 4.8m)</text>
              <text x="215" y="300" fill="#ff851b" font-size="11" text-anchor="middle">Chef Island Kitchen + Butler's Pantry</text>
              
              <rect x="50" y="370" width="330" height="60" fill="#1c1917" stroke="#ea580c"/>
              <text x="215" y="405" fill="#fed7aa" font-size="12" text-anchor="middle">Covered Outdoor Alfresco (4.5 x 3.2m)</text>

              <!-- Central Party Wall -->
              <line x1="400" y1="30" x2="400" y2="450" stroke="#ff6b00" stroke-width="4"/>

              <!-- Dwelling 2 (Right) -->
              <rect x="410" y="40" width="350" height="400" fill="#27272a" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="4"/>
              <text x="585" y="65" fill="#ff6b00" font-family="Outfit" font-size="14" font-weight="bold" text-anchor="middle">DWELLING 2 (GROUND FLOOR)</text>
              
              <rect x="420" y="80" width="170" height="130" fill="#18181b" stroke="#52525b"/>
              <text x="505" y="135" fill="#f4f4f5" font-size="12" text-anchor="middle">Guest Suite (Bed 4)</text>
              <text x="505" y="155" fill="#a1a1aa" font-size="10" text-anchor="middle">3.6 x 3.4m + Ensuite</text>

              <rect x="600" y="80" width="150" height="130" fill="#18181b" stroke="#52525b"/>
              <text x="675" y="145" fill="#f4f4f5" font-size="12" text-anchor="middle">Garage 2 (5.8 x 3.2m)</text>

              <rect x="420" y="220" width="330" height="140" fill="#18181b" stroke="#52525b"/>
              <text x="585" y="280" fill="#f4f4f5" font-size="13" font-weight="bold" text-anchor="middle">Open Living & Dining Area (6.4 x 4.8m)</text>
              <text x="585" y="300" fill="#ff851b" font-size="11" text-anchor="middle">Chef Island Kitchen + Butler's Pantry</text>

              <rect x="420" y="370" width="330" height="60" fill="#1c1917" stroke="#ea580c"/>
              <text x="585" y="405" fill="#fed7aa" font-size="12" text-anchor="middle">Covered Outdoor Alfresco (4.5 x 3.2m)</text>
            </svg>
          `,
          dimensions: [
            { room: "Dwelling 1 Living / Dining", size: "6.4m x 4.8m" },
            { room: "Dwelling 1 Kitchen", size: "3.8m x 3.2m" },
            { room: "Dwelling 1 Guest Suite (Bed 4)", size: "3.6m x 3.4m" },
            { room: "Dwelling 1 Alfresco", size: "4.5m x 3.2m" },
            { room: "Dwelling 2 Living / Dining", size: "6.4m x 4.8m" },
            { room: "Dwelling 2 Kitchen", size: "3.8m x 3.2m" },
            { room: "Dwelling 2 Guest Suite (Bed 4)", size: "3.6m x 3.4m" },
            { room: "Dwelling 2 Alfresco", size: "4.5m x 3.2m" }
          ]
        },
        first: {
          title: "First Floor",
          desc: "Upper sanctuary with dual grand master retreats, walk-in robes, and upper rumpus lounges.",
          svgMap: `
            <svg viewBox="0 0 800 480" class="floorplan-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
              <!-- Dwelling 1 Upper -->
              <rect x="40" y="40" width="350" height="400" fill="#27272a" stroke="#ff851b" stroke-width="1.5"/>
              <text x="215" y="65" fill="#ff851b" font-family="Outfit" font-size="14" font-weight="bold" text-anchor="middle">DWELLING 1 (UPPER LEVEL)</text>
              
              <rect x="50" y="80" width="180" height="150" fill="#18181b" stroke="#ff6b00"/>
              <text x="140" y="145" fill="#fed7aa" font-size="12" font-weight="bold" text-anchor="middle">Master Retreat (4.8 x 4.2m)</text>
              <text x="140" y="165" fill="#a1a1aa" font-size="10" text-anchor="middle">Dual WIR + Luxury Ensuite</text>

              <rect x="240" y="80" width="140" height="150" fill="#18181b" stroke="#52525b"/>
              <text x="310" y="145" fill="#f4f4f5" font-size="12" text-anchor="middle">Upper Rumpus Lounge</text>
              <text x="310" y="165" fill="#a1a1aa" font-size="10" text-anchor="middle">4.0 x 3.6m</text>

              <rect x="50" y="240" width="160" height="180" fill="#18181b" stroke="#52525b"/>
              <text x="130" y="320" fill="#f4f4f5" font-size="12" text-anchor="middle">Bed 2 (3.6 x 3.2m)</text>
              <text x="130" y="340" fill="#a1a1aa" font-size="10" text-anchor="middle">Built-in Robe</text>

              <rect x="220" y="240" width="160" height="180" fill="#18181b" stroke="#52525b"/>
              <text x="300" y="320" fill="#f4f4f5" font-size="12" text-anchor="middle">Bed 3 (3.6 x 3.2m)</text>
              <text x="300" y="340" fill="#a1a1aa" font-size="10" text-anchor="middle">Built-in Robe</text>

              <!-- Central Party Wall -->
              <line x1="400" y1="30" x2="400" y2="450" stroke="#ff6b00" stroke-width="4"/>

              <!-- Dwelling 2 Upper -->
              <rect x="410" y="40" width="350" height="400" fill="#27272a" stroke="#ff851b" stroke-width="1.5"/>
              <text x="585" y="65" fill="#ff851b" font-family="Outfit" font-size="14" font-weight="bold" text-anchor="middle">DWELLING 2 (UPPER LEVEL)</text>

              <rect x="420" y="80" width="140" height="150" fill="#18181b" stroke="#52525b"/>
              <text x="490" y="145" fill="#f4f4f5" font-size="12" text-anchor="middle">Upper Rumpus Lounge</text>
              <text x="490" y="165" fill="#a1a1aa" font-size="10" text-anchor="middle">4.0 x 3.6m</text>

              <rect x="570" y="80" width="180" height="150" fill="#18181b" stroke="#ff6b00"/>
              <text x="660" y="145" fill="#fed7aa" font-size="12" font-weight="bold" text-anchor="middle">Master Retreat (4.8 x 4.2m)</text>
              <text x="660" y="165" fill="#a1a1aa" font-size="10" text-anchor="middle">Dual WIR + Luxury Ensuite</text>

              <rect x="420" y="240" width="160" height="180" fill="#18181b" stroke="#52525b"/>
              <text x="500" y="320" fill="#f4f4f5" font-size="12" text-anchor="middle">Bed 2 (3.6 x 3.2m)</text>
              <text x="500" y="340" fill="#a1a1aa" font-size="10" text-anchor="middle">Built-in Robe</text>

              <rect x="590" y="240" width="160" height="180" fill="#18181b" stroke="#52525b"/>
              <text x="670" y="320" fill="#f4f4f5" font-size="12" text-anchor="middle">Bed 3 (3.6 x 3.2m)</text>
              <text x="670" y="340" fill="#a1a1aa" font-size="10" text-anchor="middle">Built-in Robe</text>
            </svg>
          `,
          dimensions: [
            { room: "Dwelling 1 Master Bedroom", size: "4.8m x 4.2m" },
            { room: "Dwelling 1 Rumpus / Lounge", size: "4.0m x 3.6m" },
            { room: "Dwelling 1 Bedroom 2", size: "3.6m x 3.2m" },
            { room: "Dwelling 1 Bedroom 3", size: "3.6m x 3.2m" },
            { room: "Dwelling 2 Master Bedroom", size: "4.8m x 4.2m" },
            { room: "Dwelling 2 Rumpus / Lounge", size: "4.0m x 3.6m" },
            { room: "Dwelling 2 Bedroom 2", size: "3.6m x 3.2m" },
            { room: "Dwelling 2 Bedroom 3", size: "3.6m x 3.2m" }
          ]
        }
      }
    },
    {
      id: "tryst",
      name: "Tryst",
      tagline: "Attached Granny & Double Storey Modern Luxury for Next-Level Living",
      category: "Double Storey / Attached Granny",
      storeys: "Double Storey",
      badge: "Flagship Luxury Estate",
      image: "assets/images/facade_tryst_luxury.jpg",
      heroImage: "assets/images/facade_tryst_luxury.jpg",
      gallery: [
        { src: "assets/images/facade_tryst_luxury.jpg", title: "Modern Contemporary Day Facade" },
        { src: "assets/images/tryst_twilight_pool.jpg", title: "Twilight Illuminated Pool, Spa & Alfresco" },
        { src: "assets/images/tryst_master_ensuite.jpg", title: "Royal Master Ensuite with Freestanding Bath" },
        { src: "assets/images/interior_luxury_kitchen.jpg", title: "Chef Island Kitchen & Butler's Scullery" },
        { src: "assets/images/alfresco_pool_area.jpg", title: "Resort Entertaining Pavilion" }
      ],
      sizeSQ: 60,
      sizeM2: 551.76,
      beds: 7,
      baths: 6,
      living: 4,
      garages: 2,
      minBlockWidth: 15.5,
      minBlockLength: 32.0,
      priceFrom: "$845,000",
      description: "Tryst is an architectural tour-de-force designed with the comfort of spacious multi-generational living, an attached independent 2-bedroom granny flat, and bespoke resort amenities including an integrated swimming pool and spa. A soaring skylit entrance hall welcomes you into a grand formal gallery, flowing seamlessly into open-concept living, a private media/cinema lounge, and an executive study wing. Upstairs, the royal master retreat features a private wrap-around terrace overlooking the pool, while every bedroom enjoys its own walk-in robe and ensuite.",
      features: [
        "7 Bedroom Luxury Layout with Attached 2-Bed Granny Flat",
        "Resort-Style Swimming Pool & Heated Spa Integration",
        "Dedicated Media / Cinema Multipurpose Entertainment Suite",
        "Architectural Skylight Entrance Hallway & Formal Living Gallery",
        "Executive Home Office / Study with Dedicated Private Access",
        "Gourmet Kitchen with 60mm Waterfall Stone Island & Butler's Pantry",
        "Royal Master Sanctuary with Walk-in Dressing Suite & Ensuite Bath",
        "Upstairs Rumpus Gallery with Wide L-Shaped Cantilevered Balcony",
        "All Bedrooms Equipped with Private Walk-In Robes",
        "Acoustic Wall Separation Exceeding Australian Standards"
      ],
      areaBreakdown: [
        { label: "Total Built Area", value: "551.76 m² (60.0 SQ)" },
        { label: "Main House Living Area", value: "507.52 m² (55.0 SQ)" },
        { label: "Attached Granny Flat", value: "68.50 m² (7.4 SQ)" },
        { label: "Double Lockup Garage", value: "37.89 m²" },
        { label: "Resort Outdoor Alfresco", value: "24.96 m²" },
        { label: "Architectural Entry Porch", value: "6.35 m²" },
        { label: "Upper Wrap-Around Balcony", value: "9.60 m²" }
      ],
      roomDimensions: [
        { room: "Double Garage", size: "5.5m x 5.6m" },
        { room: "Entry Porch", size: "2.5m x 3.08m" },
        { room: "Home Office / Study", size: "2.6m x 3.86m" },
        { room: "Formal Living", size: "5.5m x 3.34m" },
        { room: "Media / Multipurpose", size: "3.97m x 6.20m" },
        { room: "Open Living & Dining", size: "5.0m x 8.05m" },
        { room: "Gourmet Chef Kitchen", size: "5.15m x 4.01m" },
        { room: "Butler's Scullery", size: "4.15m x 2.20m" },
        { room: "Ground Powder Room", size: "2.36m x 2.17m" },
        { room: "Laundry & Linen", size: "4.16m x 2.20m" },
        { room: "Guest Bedroom Suite", size: "3.80m x 4.80m" },
        { room: "Guest Walk-In Robe", size: "2.90m x 1.40m" },
        { room: "Guest Ensuite Bath", size: "2.40m x 2.02m" },
        { room: "Covered Alfresco", size: "6.00m x 4.16m" },
        { room: "Upper Rumpus Retreat", size: "5.05m x 4.80m" },
        { room: "Royal Master Bed", size: "5.00m x 4.80m" },
        { room: "Master Dressing Robe", size: "2.60m x 3.00m" },
        { room: "Master Spa Ensuite", size: "2.70m x 3.00m" },
        { room: "Bedroom 1 (Upper)", size: "4.60m x 3.86m" },
        { room: "Bedroom 2 (Upper)", size: "5.18m x 3.86m" },
        { room: "Bedroom 3 (Upper)", size: "3.30m x 3.80m" },
        { room: "Upper Balcony", size: "6.40m x 1.50m" },
        { room: "Granny Flat Bed 1", size: "3.09m x 3.00m" },
        { room: "Granny Flat Bed 2", size: "3.09m x 3.00m" },
        { room: "Granny Flat Study", size: "3.91m x 2.37m" },
        { room: "Granny Living & Kitchen", size: "4.80m x 3.60m" }
      ],
      facades: [
        { name: "Executive Sandstone & Cedar", desc: "Hand-laid natural stacked sandstone pillars with dark cedar battens and off-white render", img: "assets/images/facade_tryst_luxury.jpg" },
        { name: "Nordic Minimalist Bauhaus", desc: "Linear off-white brickwork with matte black steel frames and expansive picture glazing", img: "assets/images/facade_contemporary_home.jpg" },
        { name: "Monolith Slate & Twilight", desc: "Charcoal architectural panels with warm cedar soffits and illuminated recessed portals", img: "assets/images/tryst_twilight_pool.jpg" },
        { name: "Hamptons Luxury Coastal", desc: "Classic wide weatherboards with architectural corbels and crisp white multi-pane windows", img: "assets/images/facade_bion_duplex.jpg" }
      ],
      inclusions: [
        { category: "Kitchen & Scullery", items: ["900mm Miele / Smeg induction cooktop & undermount dual ovens", "60mm Calacatta marble-look engineered stone with double waterfall edges", "Full-height custom 2-pac polyurethane joinery with soft-close Blum hardware", "Butler's scullery with secondary prep sink, dishwasher & walk-in pantry"] },
        { category: "Bathrooms & Spa Ensuites", items: ["Freestanding luxury stone composite soaking bathtub in master ensuite", "Frameless 10mm toughened glass shower screens with rainfall showerheads", "Floor-to-ceiling 600x1200mm Italian rectified porcelain slab tiles", "Custom wall-hung floating vanities with LED perimeter mirror illumination"] },
        { category: "Structure & Climate", items: ["Soaring 3.0m ground floor and 2.7m first floor ceiling heights", "Daikin multi-zone ducted inverter air conditioning with smart mobile control", "Commercial-grade thermal-break double-glazed aluminium windows & sliding stacker doors", "Engineered H2-F termite-treated structural timber frame with 25-Year Warranty"] },
        { category: "Smart Home & Energy", items: ["6.6kW Tier-1 Solar PV system with hybrid inverter ready for battery storage", "Smart keyless biometric front entry lock & video intercom with remote app access", "Clipsal Iconic LED light switches & smart dimming automation throughout", "3-Phase power supply & dedicated EV fast-charging terminal in garage"] }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor Layout",
          desc: "Grand foyer with soaring skylights, executive home office, acoustic tiered cinema, open living & dining gallery, chef scullery, alfresco pool pavilion, and integrated granny wing.",
          svgMap: `
            <svg viewBox="0 0 800 480" class="floorplan-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="770" height="450" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
              
              <!-- Garage -->
              <rect x="35" y="35" width="185" height="195" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="127" y="125" fill="#ffffff" font-family="Outfit" font-size="14" font-weight="700" text-anchor="middle">Double Lockup Garage</text>
              <text x="127" y="148" fill="#8b949e" font-size="11" text-anchor="middle">5.50m x 5.60m • EV Station</text>

              <!-- Main Entrance & Foyer -->
              <rect x="230" y="35" width="200" height="100" fill="#161b22" stroke="#58a6ff" stroke-width="1.5"/>
              <text x="330" y="80" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Skylit Grand Foyer</text>
              <text x="330" y="100" fill="#8b949e" font-size="10" text-anchor="middle">3.0m High Ceiling Entry</text>

              <!-- Study / Executive Office -->
              <rect x="230" y="145" width="200" height="85" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="330" y="190" fill="#e6edf3" font-family="Outfit" font-size="12" font-weight="600" text-anchor="middle">Executive Office / Study (2.6 x 3.9m)</text>

              <!-- Attached Granny Flat Wing -->
              <rect x="440" y="35" width="325" height="195" fill="#161e2e" stroke="#388bfd" stroke-width="1.8"/>
              <text x="602" y="60" fill="#58a6ff" font-family="Outfit" font-size="12" font-weight="700" letter-spacing="0.5" text-anchor="middle">ATTACHED INDEPENDENT GRANNY SUITE</text>
              <rect x="450" y="75" width="145" height="70" fill="#0d1117" stroke="#30363d"/>
              <text x="522" y="115" fill="#e6edf3" font-size="11" text-anchor="middle">Granny Bed 1 (3.1 x 3.0m)</text>
              <rect x="605" y="75" width="150" height="70" fill="#0d1117" stroke="#30363d"/>
              <text x="680" y="115" fill="#e6edf3" font-size="11" text-anchor="middle">Granny Bed 2 (3.1 x 3.0m)</text>
              <rect x="450" y="155" width="305" height="65" fill="#0d1117" stroke="#30363d"/>
              <text x="602" y="192" fill="#7ee787" font-size="11" font-weight="600" text-anchor="middle">Granny Living, Kitchen & Porch (68.50 m²)</text>

              <!-- Cinema / Media Room -->
              <rect x="35" y="240" width="225" height="205" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="147" y="335" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Acoustic Cinema / Media</text>
              <text x="147" y="355" fill="#8b949e" font-size="11" text-anchor="middle">4.00m x 6.20m • Soundproofed</text>

              <!-- Main Living & Gourmet Kitchen -->
              <rect x="270" y="240" width="320" height="205" fill="#161b22" stroke="#e6edf3" stroke-width="1.5"/>
              <text x="430" y="325" fill="#ffffff" font-family="Outfit" font-size="14" font-weight="700" text-anchor="middle">Open Living & Dining (5.0 x 8.1m)</text>
              <text x="430" y="348" fill="#8b949e" font-size="11" text-anchor="middle">Chef Island Kitchen (5.2 x 4.0m) + Butler Scullery</text>

              <!-- Alfresco & Pool -->
              <rect x="600" y="240" width="165" height="205" fill="#0c2d48" stroke="#38bdf8" stroke-width="2"/>
              <text x="682" y="335" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Resort Alfresco</text>
              <text x="682" y="355" fill="#7dd3fc" font-size="11" text-anchor="middle">6.0 x 4.2m • Pool & Spa</text>
            </svg>
          `,
          dimensions: [
            { room: "Grand Open Living & Dining", size: "5.00m x 8.05m" },
            { room: "Gourmet Chef Kitchen", size: "5.15m x 4.01m" },
            { room: "Butler's Scullery & Pantry", size: "4.15m x 2.20m" },
            { room: "Acoustic Cinema / Media Lounge", size: "3.97m x 6.20m" },
            { room: "Formal Living Hall", size: "5.50m x 3.34m" },
            { room: "Executive Study Wing", size: "2.60m x 3.86m" },
            { room: "Attached Granny Flat Suite", size: "68.50 m² (2-Bed + Study)" },
            { room: "Covered Resort Alfresco", size: "6.00m x 4.16m" },
            { room: "Double Lockup Garage", size: "5.50m x 5.60m" }
          ]
        },
        first: {
          title: "First Floor Master Sanctuary",
          desc: "Royal master suite with private wrap-around terrace, luxury dressing room robe, freestanding spa bath ensuite, and 3 king ensuite bedrooms with leisure rumpus gallery.",
          svgMap: `
            <svg viewBox="0 0 800 480" class="floorplan-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="770" height="450" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
              
              <!-- Royal Master Suite -->
              <rect x="35" y="35" width="370" height="225" fill="#161b22" stroke="#58a6ff" stroke-width="2"/>
              <text x="220" y="105" fill="#ffffff" font-family="Outfit" font-size="15" font-weight="700" text-anchor="middle">Royal Master Suite (5.0 x 4.8m)</text>
              <text x="220" y="130" fill="#e6edf3" font-size="11" text-anchor="middle">Walk-In Dressing Robe (2.6 x 3.0m) + Spa Ensuite (2.7 x 3.0m)</text>
              <text x="220" y="152" fill="#7ee787" font-size="11" font-weight="600" text-anchor="middle">Private Cantilevered Balcony Terrace (6.4 x 1.5m)</text>

              <!-- Upper Leisure Lounge -->
              <rect x="415" y="35" width="350" height="155" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="590" y="105" fill="#ffffff" font-family="Outfit" font-size="14" font-weight="700" text-anchor="middle">Upper Children's Retreat / Rumpus</text>
              <text x="590" y="128" fill="#8b949e" font-size="11" text-anchor="middle">5.05m x 4.80m • Study Nook Integration</text>

              <!-- Bedrooms 1, 2, 3 -->
              <rect x="35" y="270" width="230" height="175" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="150" y="350" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Bedroom 1 Suite</text>
              <text x="150" y="372" fill="#8b949e" font-size="11" text-anchor="middle">4.60m x 3.90m + Private Ensuite</text>

              <rect x="275" y="270" width="230" height="175" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="390" y="350" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Bedroom 2 Suite</text>
              <text x="390" y="372" fill="#8b949e" font-size="11" text-anchor="middle">5.18m x 3.90m + Private Ensuite</text>

              <rect x="515" y="200" width="250" height="245" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="640" y="315" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Bedroom 3 Suite</text>
              <text x="640" y="338" fill="#8b949e" font-size="11" text-anchor="middle">3.30m x 3.80m + WIR + Ensuite</text>
            </svg>
          `,
          dimensions: [
            { room: "Royal Master Sanctuary", size: "5.00m x 4.80m" },
            { room: "Master Dressing Room / WIR", size: "2.60m x 3.00m" },
            { room: "Master Spa Ensuite Bath", size: "2.70m x 3.00m" },
            { room: "Upper Rumpus & Leisure Gallery", size: "5.05m x 4.80m" },
            { room: "Bedroom 1 (Upper Ensuite)", size: "4.60m x 3.86m" },
            { room: "Bedroom 2 (Upper Ensuite)", size: "5.18m x 3.86m" },
            { room: "Bedroom 3 (Upper Ensuite)", size: "3.30m x 3.80m" },
            { room: "Upper Cantilever Balcony", size: "6.40m x 1.50m" }
          ]
        },
        granny: {
          title: "Attached Independent Granny Flat (68.50 m²)",
          desc: "Complete self-contained dwelling engineered with acoustic isolation, private entrance porch, 2 bedrooms with robes, gourmet kitchen with skylight, dedicated study, and independent sub-meters.",
          svgMap: `
            <svg viewBox="0 0 800 480" class="floorplan-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="770" height="450" rx="10" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
              
              <!-- Private Entry Porch -->
              <rect x="40" y="40" width="160" height="110" fill="#161b22" stroke="#58a6ff" stroke-width="1.5"/>
              <text x="120" y="90" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Private Entry Porch</text>
              <text x="120" y="112" fill="#8b949e" font-size="11" text-anchor="middle">Independent Access</text>

              <!-- Dedicated Study Room -->
              <rect x="40" y="160" width="160" height="130" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="120" y="220" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Dedicated Study</text>
              <text x="120" y="242" fill="#8b949e" font-size="11" text-anchor="middle">3.91m x 2.37m</text>

              <!-- Independent Bathroom / Laundry -->
              <rect x="40" y="300" width="160" height="140" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="120" y="365" fill="#ffffff" font-family="Outfit" font-size="13" font-weight="700" text-anchor="middle">Full Bathroom & Lndry</text>
              <text x="120" y="388" fill="#8b949e" font-size="11" text-anchor="middle">Floor-to-Ceiling Tiles</text>

              <!-- Open Living & Kitchen -->
              <rect x="210" y="40" width="310" height="400" fill="#161b22" stroke="#7ee787" stroke-width="2"/>
              <text x="365" y="215" fill="#ffffff" font-family="Outfit" font-size="16" font-weight="700" text-anchor="middle">Open Living & Dining</text>
              <text x="365" y="242" fill="#7ee787" font-size="12" font-weight="600" text-anchor="middle">4.80m x 3.60m • Gourmet Kitchen + Island</text>
              <text x="365" y="265" fill="#8b949e" font-size="11" text-anchor="middle">Natural Overhead Skylight Illumination</text>

              <!-- Bedroom 1 -->
              <rect x="530" y="40" width="230" height="195" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="645" y="130" fill="#ffffff" font-family="Outfit" font-size="14" font-weight="700" text-anchor="middle">Granny Bedroom 1</text>
              <text x="645" y="152" fill="#8b949e" font-size="11" text-anchor="middle">3.09m x 3.00m • Built-In Robe</text>

              <!-- Bedroom 2 -->
              <rect x="530" y="245" width="230" height="195" fill="#161b22" stroke="#484f58" stroke-width="1.5"/>
              <text x="645" y="335" fill="#ffffff" font-family="Outfit" font-size="14" font-weight="700" text-anchor="middle">Granny Bedroom 2</text>
              <text x="645" y="358" fill="#8b949e" font-size="11" text-anchor="middle">3.09m x 3.00m • Built-In Robe</text>
            </svg>
          `,
          dimensions: [
            { room: "Granny Flat Living & Dining", size: "4.80m x 3.60m" },
            { room: "Granny Gourmet Kitchen", size: "3.20m x 2.40m" },
            { room: "Granny Bedroom 1 (Built-In Robe)", size: "3.09m x 3.00m" },
            { room: "Granny Bedroom 2 (Built-In Robe)", size: "3.09m x 3.00m" },
            { room: "Granny Dedicated Study Room", size: "3.91m x 2.37m" },
            { room: "Granny Bathroom & Laundry", size: "2.40m x 2.10m" },
            { room: "Granny Private Porch Entry", size: "2.10m x 1.80m" }
          ]
        }
      }
    },
    {
      id: "echor",
      name: "Echor",
      category: "Double Storey",
      storeys: "Double Storey",
      badge: "Contemporary Modern Masterpiece",
      image: "assets/images/facade_contemporary_home.jpg",
      heroImage: "assets/images/facade_contemporary_home.jpg",
      sizeSQ: 54,
      sizeM2: 501.7,
      beds: 5,
      baths: 4,
      living: 3,
      garages: 2,
      minBlockWidth: 14.5,
      minBlockLength: 28.0,
      priceFrom: "$720,000",
      description: "Designed for modern families craving architectural presence with sharp geometric forms, cantilevered second storey profiles, and vast light-filled living spaces connecting flawlessly to Australian gardens.",
      features: [
        "Cantilevered Modern Architectural Exterior",
        "Soaring 2.7m Ceilings to Both Levels",
        "Seamless Indoor-Outdoor Flow with 3-Way Corner Sliding Doors",
        "Wine Display Room with Ambient LED Orange Backlighting",
        "Dedicated Upstairs Media Retreat & Downstairs Guest Suite"
      ],
      facades: [
        { name: "Charred Timber Skillion", desc: "Black timber battens, off-white render, and skillion rooflines" },
        { name: "Modernist Concrete", desc: "Architectural off-form concrete panels with black aluminum frames" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Expansive open living, designer kitchen with hidden scullery, alfresco, and guest room.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff6b00" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">ECHOR 54 - GROUND LEVEL OPEN LIVING & ALFRESCO (9.8m x 5.6m)</text></svg>`,
          dimensions: [
            { room: "Living & Dining", size: "9.8m x 5.6m" },
            { room: "Kitchen & Scullery", size: "4.6m x 3.8m" },
            { room: "Guest Bedroom", size: "3.8m x 3.6m" },
            { room: "Double Garage", size: "6.0m x 5.8m" }
          ]
        },
        first: {
          title: "First Floor",
          desc: "Private family sleeping quarters, master retreat with terrace balcony, and study zone.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff851b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">ECHOR 54 - UPPER MASTER WING & 3 BEDROOM SUITES</text></svg>`,
          dimensions: [
            { room: "Master Bedroom Suite", size: "5.6m x 4.8m" },
            { room: "Bedroom 2", size: "4.0m x 3.6m" },
            { room: "Bedroom 3", size: "3.8m x 3.6m" },
            { room: "Upper Rumpus", size: "5.2m x 4.2m" }
          ]
        }
      }
    },
    {
      id: "linea",
      name: "Linea",
      category: "Single Storey",
      storeys: "Single Storey",
      badge: "Wide-Lot Single Storey Luxury",
      image: "assets/images/hero_luxury_home.jpg",
      heroImage: "assets/images/hero_luxury_home.jpg",
      sizeSQ: 48,
      sizeM2: 445.9,
      beds: 4,
      baths: 3.5,
      living: 3,
      garages: 2,
      minBlockWidth: 18.0,
      minBlockLength: 30.0,
      priceFrom: "$645,000",
      description: "Proof that single storey living can be exceptionally grand. The Linea offers an expansive single level floorplan with separated parents and kids wings, internal courtyard atriums, and grand entertaining hub.",
      features: [
        "Sprawling Single Level Layout with Courtyard Vistas",
        "Parents Wing Isolated for Complete Peace & Luxury",
        "Raked Ceilings with Clerestory Highlight Windows",
        "Integrated Outdoor Kitchen & Heated Pool Pergola"
      ],
      facades: [
        { name: "Pavilion Modern", desc: "Low pitch roof with extended eaves and stone columns" },
        { name: "Contemporary Linear", desc: "Sleek horizontal fascia with warm timber slats" }
      ],
      floorplans: {
        ground: {
          title: "Complete Single Storey Floor Plan",
          desc: "Full single-level layout featuring central courtyard, dual living rooms, and private wings.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ea580c" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">LINEA 48 - SPRAWLING SINGLE STOREY PAVILION DESIGN</text></svg>`,
          dimensions: [
            { room: "Main Great Room", size: "11.0m x 6.2m" },
            { room: "Master Retreat", size: "5.8m x 4.6m" },
            { room: "Kids Playroom / Lounge", size: "4.8m x 4.0m" },
            { room: "Alfresco Dining", size: "6.2m x 4.4m" }
          ]
        }
      }
    },
    {
      id: "aubin",
      name: "Aubin",
      category: "Double Storey",
      storeys: "Double Storey",
      badge: "Executive Family Favorite",
      image: "assets/images/facade_tryst_luxury.jpg",
      heroImage: "assets/images/facade_tryst_luxury.jpg",
      sizeSQ: 43,
      sizeM2: 399.5,
      beds: 5,
      baths: 3.5,
      living: 3,
      garages: 2,
      minBlockWidth: 12.5,
      minBlockLength: 26.0,
      priceFrom: "$589,000",
      description: "Designed specifically to fit Sydney's popular 12.5m and 14m wide blocks without sacrificing luxury. Features 5 full bedrooms including a ground floor multi-gen suite.",
      features: [
        "Smart Narrow-Lot 12.5m Block Fitment",
        "Ground Floor Guest / Multi-generational Ensuite",
        "Separate Media Room & Upstairs Kids Activity Zone",
        "Spacious Walk-in Pantry and Caesarstone Benchtops"
      ],
      facades: [
        { name: "Urban Modern", desc: "Rendered white facade with charcoal aluminum window boxes" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Efficient footprint with open living and guest suite.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff851b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">AUBIN 43 - 12.5M NARROW LOT DOUBLE STOREY DESIGN</text></svg>`,
          dimensions: [
            { room: "Living & Dining", size: "7.8m x 5.2m" },
            { room: "Guest Bedroom", size: "3.6m x 3.4m" },
            { room: "Double Garage", size: "5.8m x 5.8m" }
          ]
        }
      }
    },
    {
      id: "vesper",
      name: "Vesper",
      category: "Double Storey",
      storeys: "Double Storey",
      badge: "Compact Luxury",
      image: "assets/images/facade_contemporary_home.jpg",
      heroImage: "assets/images/facade_contemporary_home.jpg",
      sizeSQ: 37,
      sizeM2: 343.7,
      beds: 4,
      baths: 3,
      living: 2,
      garages: 2,
      minBlockWidth: 10.5,
      minBlockLength: 25.0,
      priceFrom: "$520,000",
      description: "The ultimate solution for high-density 10m to 12m blocks in new estates, delivering high-end inclusions, 4 bedrooms, and a generous alfresco at an exceptional price point.",
      features: [
        "10.5m Ultra-Narrow Block Optimization",
        "Zero Waste Layout Maximizing Natural Light",
        "Modern European Smeg Appliance Package"
      ],
      facades: [
        { name: "Metro Contemporary", desc: "Dark brickwork with crisp white parapet and timber porch" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Light-filled compact open plan living.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff6b00" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">VESPER 37 - 10.5M NARROW LOT LUXURY DESIGN</text></svg>`,
          dimensions: [
            { room: "Living / Dining", size: "7.2m x 4.8m" },
            { room: "Alfresco", size: "4.2m x 3.2m" }
          ]
        }
      }
    },
    {
      id: "oculus",
      name: "Oculus",
      category: "Double Storey",
      storeys: "Double Storey",
      badge: "Architectural Statement",
      image: "assets/images/hero_luxury_home.jpg",
      heroImage: "assets/images/hero_luxury_home.jpg",
      sizeSQ: 39,
      sizeM2: 362.3,
      beds: 4,
      baths: 3.5,
      living: 3,
      garages: 2,
      minBlockWidth: 12.0,
      minBlockLength: 28.0,
      priceFrom: "$560,000",
      description: "Characterised by bold feature curves, round statement windows, and open gallery spaces that let sunlight wash over every corner of your daily life.",
      features: [
        "Curved Architectural Walls and Statement Windows",
        "Floating Terrazzo Step Entryway",
        "Integrated Custom Joinery Throughout"
      ],
      facades: [
        { name: "Curve Moderne", desc: "Curved white rendered balcony with vertical black screening" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Flowing curved living spaces and outdoor sanctuary.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff851b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">OCULUS 39 - CURVED ARCHITECTURAL DESIGN</text></svg>`,
          dimensions: [
            { room: "Living & Dining", size: "8.4m x 5.2m" },
            { room: "Alfresco", size: "4.8m x 3.8m" }
          ]
        }
      }
    },
    {
      id: "solstice-acreage",
      name: "Solstice Acreage",
      category: "Acreage",
      storeys: "Single Storey",
      badge: "Grand Rural Estate",
      image: "assets/images/alfresco_pool_area.jpg",
      heroImage: "assets/images/alfresco_pool_area.jpg",
      sizeSQ: 65,
      sizeM2: 603.8,
      beds: 6,
      baths: 5,
      living: 4,
      garages: 4,
      minBlockWidth: 32.0,
      minBlockLength: 45.0,
      priceFrom: "$980,000",
      description: "A monumental 65 SQ estate engineered for sprawling acreage land in Hawkesbury, Hills, Camden, or Central Coast. Features grand vaulted timber ceilings, 4-car garage, and independent guest wing.",
      features: [
        "65 SQ Wide Ranch Pavilion Layout",
        "4-Car Extended Workshop Garage",
        "Vaulted Cathedral Ceilings with Exposed Timber Trusses",
        "Triple Outdoor Fireplace & Entertaining Verandahs"
      ],
      facades: [
        { name: "Acreage Homestead", desc: "Wrap-around verandahs, dry-stack stone, and Colorbond Monument roof" }
      ],
      floorplans: {
        ground: {
          title: "Grand Acreage Floor Plan",
          desc: "Over 600m² of single level luxury living with wing zoning.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#f59e0b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">SOLSTICE 65 SQ - GRAND ACREAGE ESTATE</text></svg>`,
          dimensions: [
            { room: "Cathedral Great Room", size: "12.5m x 7.5m" },
            { room: "Master Oasis", size: "7.0m x 5.5m" },
            { room: "4-Car Garage", size: "12.0m x 6.5m" }
          ]
        }
      }
    },
    {
      id: "aria-villa",
      name: "Aria Villa",
      category: "Single Storey",
      storeys: "Single Storey",
      badge: "Compact Luxury / 10m Lot",
      image: "assets/images/facade_contemporary_home.jpg",
      heroImage: "assets/images/facade_contemporary_home.jpg",
      sizeSQ: 32,
      sizeM2: 297.3,
      beds: 4,
      baths: 3,
      living: 2,
      garages: 2,
      minBlockWidth: 10.5,
      minBlockLength: 28.0,
      priceFrom: "$435,000",
      description: "Designed specifically for modern 10m-12.5m frontage urban blocks without compromising on luxury. Features high 3.0m ceilings, central skylit courtyard, and a master retreat overlooking the garden.",
      features: [
        "3.0m Soaring Ceilings Throughout",
        "Central Sunken Architectural Lightwell",
        "Master Suite with Freestanding Stone Bath",
        "Double Garage with Internal Storage Attic"
      ],
      facades: [
        { name: "Nordic Minimalist", desc: "Off-white stucco with charred timber cladding accents" }
      ],
      floorplans: {
        ground: {
          title: "Single Level Floorplan",
          desc: "Optimised single storey layout with zero wasted hallway space.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff6b00" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">ARIA 32 SQ - SINGLE STOREY LUXURY</text></svg>`,
          dimensions: [
            { room: "Grand Living", size: "7.2m x 4.8m" },
            { room: "Master Oasis", size: "4.5m x 4.2m" }
          ]
        }
      }
    },
    {
      id: "mirage-pavilion",
      name: "Mirage Pavilion",
      category: "Double Storey",
      storeys: "Double Storey",
      badge: "Resort-Style Living",
      image: "assets/images/facade_tryst_luxury.jpg",
      heroImage: "assets/images/facade_tryst_luxury.jpg",
      sizeSQ: 52,
      sizeM2: 483.1,
      beds: 5,
      baths: 4.5,
      living: 4,
      garages: 2,
      minBlockWidth: 15.0,
      minBlockLength: 32.0,
      priceFrom: "$710,000",
      description: "An architectural masterpiece featuring a floating glass staircase, open mezzanine, seamless indoor-outdoor stacker doors, and an outdoor poolside kitchen.",
      features: [
        "Double-Height 6.2m Glass Void Entry",
        "Floating Cantilevered Timber Staircase",
        "Ensuite to Every Bedroom",
        "Built-In Wine Cellar & Tasting Bar"
      ],
      facades: [
        { name: "Pavilion Luxe", desc: "Dark basalt stone, bronze anodised screens, and illuminated eave reveals" }
      ],
      floorplans: {
        ground: {
          title: "Ground Floor",
          desc: "Expansive entertaining pavilion with seamless pool views.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff851b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">MIRAGE 52 SQ - GROUND RESORT FLOOR</text></svg>`,
          dimensions: [
            { room: "Pavilion Living", size: "9.0m x 5.8m" },
            { room: "Alfresco Poolside", size: "6.2m x 4.5m" }
          ]
        }
      }
    },
    {
      id: "apex-duplex",
      name: "Apex Dual Living",
      category: "Dual Occupancy",
      storeys: "Double Storey",
      badge: "High Yield Investment",
      image: "assets/images/facade_bion_duplex.jpg",
      heroImage: "assets/images/facade_bion_duplex.jpg",
      sizeSQ: 54,
      sizeM2: 501.7,
      beds: 8,
      baths: 6,
      living: 4,
      garages: 2,
      minBlockWidth: 15.0,
      minBlockLength: 30.0,
      priceFrom: "$765,000",
      description: "Dual occupancy engineered for corner blocks or standard 15m frontages. Two architecturally striking 4-bedroom homes with private street frontages and individual garages.",
      features: [
        "Dual Torrens Title Subdivision Ready",
        "Separate Street Facing Entries",
        "Independent Solar & Inverter Setups",
        "Soundproof Multi-Layer Party Wall"
      ],
      facades: [
        { name: "Apex Geometric", desc: "Charcoal vertical louvres with warm travertine stone base" }
      ],
      floorplans: {
        ground: {
          title: "Dual Ground Floor",
          desc: "Symmetrical ground layouts for Dwelling 1 and Dwelling 2.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#ff6b00" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">APEX 54 SQ - DUAL OCCUPANCY</text></svg>`,
          dimensions: [
            { room: "Dwelling 1 Living", size: "6.0m x 4.5m" },
            { room: "Dwelling 2 Living", size: "6.0m x 4.5m" }
          ]
        }
      }
    },
    {
      id: "zenith-manor",
      name: "Zenith Manor",
      category: "Acreage",
      storeys: "Double Storey",
      badge: "Monumental Acreage Estate",
      image: "assets/images/alfresco_pool_area.jpg",
      heroImage: "assets/images/alfresco_pool_area.jpg",
      sizeSQ: 72,
      sizeM2: 668.9,
      beds: 6,
      baths: 6.5,
      living: 5,
      garages: 4,
      minBlockWidth: 35.0,
      minBlockLength: 50.0,
      priceFrom: "$1,120,000",
      description: "The pinnacle of grand country luxury. A 72 SQ mansion complete with full cinema theatre, elevator shaft provision, 4-car showroom garage, and multi-generational in-law wing.",
      features: [
        "72 SQ Monumental Custom Estate",
        "Private 4-Car Showroom Garage",
        "Gold-Class Private Home Cinema",
        "Independent Secondary Living Quarter"
      ],
      facades: [
        { name: "Zenith Heritage Manor", desc: "Handcrafted stone masonry with wrap-around balconies and slate tiles" }
      ],
      floorplans: {
        ground: {
          title: "Zenith Grand Floor Plan",
          desc: "Expansive double storey country estate with multiple entertainment wings.",
          svgMap: `<svg viewBox="0 0 800 480" class="floorplan-svg"><rect x="20" y="20" width="760" height="440" rx="8" fill="#18181b" stroke="#f59e0b" stroke-width="2"/><text x="400" y="240" fill="#f4f4f5" font-family="Outfit" font-size="16" font-weight="bold" text-anchor="middle">ZENITH 72 SQ - MONUMENTAL ESTATE</text></svg>`,
          dimensions: [
            { room: "Grand Ballroom Living", size: "14.0m x 8.0m" },
            { room: "Cinema Theatre", size: "6.5m x 5.0m" }
          ]
        }
      }
    }
  ],

  houseAndLandPackages: [
    {
      id: "pkg-box-hill-01",
      title: "The Tryst 60 Estate at Box Hill",
      suburb: "Box Hill",
      region: "North West Sydney",
      address: "Lot 104 Gables Parkway, Box Hill NSW 2765",
      price: "$1,495,000",
      status: "Featured",
      landSize: "510 m²",
      buildSize: "60 SQ (557 m²)",
      beds: 5,
      baths: 5.5,
      cars: 3,
      homeDesign: "Tryst 60",
      image: "assets/images/facade_tryst_luxury.jpg",
      features: ["Fixed Price Contract", "Turnkey Inclusions", "Walk to Gables Town Centre", "3-Car Garage"]
    },
    {
      id: "pkg-leppington-02",
      title: "The Bion Dual Living at Leppington",
      suburb: "Leppington",
      region: "South West Sydney",
      address: "Lot 42 Rickard Road, Leppington NSW 2179",
      price: "$1,380,000",
      status: "Available",
      landSize: "480 m²",
      buildSize: "58 SQ (538 m²)",
      beds: 8,
      baths: 6.5,
      cars: 2,
      homeDesign: "Bion Dual Occupancy",
      image: "assets/images/facade_bion_duplex.jpg",
      features: ["Dual Rental Income", "5 Mins to Leppington Station", "Full Turnkey Finish", "Fixed Site Costs"]
    },
    {
      id: "pkg-marsden-park-03",
      title: "The Echor Contemporary at Marsden Park",
      suburb: "Marsden Park",
      region: "North West Sydney",
      address: "Lot 219 Elara Boulevard, Marsden Park NSW 2765",
      price: "$1,290,000",
      status: "Available",
      landSize: "420 m²",
      buildSize: "54 SQ (501 m²)",
      beds: 5,
      baths: 4,
      cars: 2,
      homeDesign: "Echor 54",
      image: "assets/images/facade_contemporary_home.jpg",
      features: ["Cantilever Facade", "Opposite Parklands", "Near Sydney Business Park", "Zero Hidden Costs"]
    },
    {
      id: "pkg-austral-04",
      title: "The Aubin Executive at Austral",
      suburb: "Austral",
      region: "South West Sydney",
      address: "Lot 88 Edmondson Avenue, Austral NSW 2179",
      price: "$1,120,000",
      status: "Available",
      landSize: "375 m²",
      buildSize: "43 SQ (399 m²)",
      beds: 5,
      baths: 3.5,
      cars: 2,
      homeDesign: "Aubin 43",
      image: "assets/images/hero_luxury_home.jpg",
      features: ["Multi-Gen Suite", "Close to Western Sydney Airport", "High Rental Growth Zone"]
    },
    {
      id: "pkg-riverstone-05",
      title: "The Linea Modern at Riverstone",
      suburb: "Riverstone",
      region: "North West Sydney",
      address: "Lot 15 Crown Street, Riverstone NSW 2765",
      price: "$1,095,000",
      status: "Under Offer",
      landSize: "450 m²",
      buildSize: "48 SQ (445 m²)",
      beds: 4,
      baths: 3.5,
      cars: 2,
      homeDesign: "Linea 48",
      image: "assets/images/interior_luxury_kitchen.jpg",
      features: ["Sprawling Single Storey", "Near Metro Northwest Link", "Solar System Included"]
    },
    {
      id: "pkg-oran-park-06",
      title: "The Oculus Luxury at Oran Park",
      suburb: "Oran Park",
      region: "South West Sydney",
      address: "Lot 314 Central Avenue, Oran Park NSW 2570",
      price: "$1,240,000",
      status: "Available",
      landSize: "400 m²",
      buildSize: "39 SQ (362 m²)",
      beds: 4,
      baths: 3.5,
      cars: 2,
      homeDesign: "Oculus 39",
      image: "assets/images/alfresco_pool_area.jpg",
      features: ["Statement Curved Architecture", "Walk to Podium Shopping Mall", "120-Day Build Guarantee"]
    }
  ],

  suburbs: [
    {
      id: "box-hill",
      name: "Box Hill",
      region: "The Hills Shire",
      postcode: "2765",
      description: "One of Sydney's most prestigious master-planned growth corridors. Known for large lot frontages, The Gables, water features, and proximity to Rouse Hill Town Centre & Metro.",
      activeBuilds: 18,
      council: "The Hills Shire Council",
      highlights: ["High capital appreciation", "Generous block widths", "Rouse Hill Metro 8 mins away", "New town centres & schools"]
    },
    {
      id: "leppington",
      name: "Leppington",
      region: "South West Sydney",
      postcode: "2179",
      description: "The core hub of the South West Growth Centre, offering major transit connections via Leppington Train Station and immediate proximity to the new Western Sydney International Airport.",
      activeBuilds: 24,
      council: "Camden Council & Liverpool City Council",
      highlights: ["Dual Occupancy hotspot", "Direct heavy rail connection", "Massive infrastructure investments"]
    },
    {
      id: "marsden-park",
      name: "Marsden Park",
      region: "North West Sydney",
      postcode: "2765",
      description: "A bustling family-friendly community with Elara estate, Sydney Business Park (Costco, IKEA), modern parks, and premier private schools.",
      activeBuilds: 15,
      council: "Blacktown City Council",
      highlights: ["Family-centric master planned estates", "Major retail & business employment hub", "Excellent parks and cycleways"]
    },
    {
      id: "austral",
      name: "Austral",
      region: "South West Sydney",
      postcode: "2179",
      description: "Rapidly expanding corridor offering great value house and land packages, ideal for first home buyers and investors looking for duplex yields.",
      activeBuilds: 19,
      council: "Liverpool City Council",
      highlights: ["Affordable luxury packages", "Rapid rezoning and infrastructure", "Close to M7 & M5 motorways"]
    },
    {
      id: "riverstone",
      name: "Riverstone",
      region: "North West Sydney",
      postcode: "2765",
      description: "A heritage suburb experiencing massive modern revitalization with railway access and proximity to Schofields and Tallawong Metro.",
      activeBuilds: 11,
      council: "Blacktown City Council",
      highlights: ["Established rail station", "Proximity to Tallawong Metro", "Competitive land pricing"]
    },
    {
      id: "beaumont-hills",
      name: "Beaumont Hills",
      region: "The Hills District",
      postcode: "2155",
      description: "Established luxury Hills suburb perfect for Knockdown Rebuilds and high-end custom mansions on undulating land.",
      activeBuilds: 8,
      council: "The Hills Shire Council",
      highlights: ["Knockdown Rebuild prime location", "Elevated scenic views", "Kellyville Metro nearby"]
    }
  ],

  demoBuilds: [
    {
      id: "OH-2026-881",
      clientName: "David & Sarah Jenkins",
      houseDesign: "Tryst 60 SQ Custom Luxury",
      lotLocation: "Lot 104, Gables Parkway, Box Hill NSW",
      overallProgress: 68,
      currentStageIndex: 4, // 0-indexed -> 4th is Brickwork & Cladding
      supervisor: "Mike Patterson (Senior Site Manager)",
      supervisorContact: "0412 889 001",
      estCompletionDate: "Nov 28, 2026",
      stages: [
        {
          name: "1. Planning & Council Approval (DA/CDC)",
          status: "Completed",
          date: "Feb 14, 2026",
          note: "Hills Shire Council CDC approved in 21 days. Soil engineering and hydraulic plans certified."
        },
        {
          name: "2. Site Prep & Excavation",
          status: "Completed",
          date: "Mar 02, 2026",
          note: "Site benchmarked, piering holes drilled 3.5m to solid bedrock, underground plumbing laid."
        },
        {
          name: "3. Concrete Engineered Slab",
          status: "Completed",
          date: "Mar 22, 2026",
          note: "Class M engineered 32MPa concrete pour with thermal vapor barrier. Engineer signoff passed."
        },
        {
          name: "4. Wall Framing & Roof Trusses",
          status: "Completed",
          date: "Apr 28, 2026",
          note: "T2 termite-treated structural pine framework erected onsite. Roof trusses and structural steel beams inspected."
        },
        {
          name: "5. Brickwork & Lockup",
          status: "In Progress (72%)",
          date: "Current Active Stage",
          note: "Austral feature masonry, Colorbond roof sheeting installed, commercial A&L double-glazed windows locked."
        },
        {
          name: "6. Internal Fit-out & Luxury Joinery",
          status: "Upcoming",
          date: "Est. Jul 15, 2026",
          note: "Gyprock plastering, Calacatta 60mm stone waterfall installation, bespoke vanities, and ducted A/C."
        },
        {
          name: "7. Final Inspection & Handover (OC)",
          status: "Upcoming",
          date: "Est. Nov 28, 2026",
          note: "Independent 120-point quality audit, private certifier Occupation Certificate signoff, key ceremony."
        }
      ],
      recentPhotos: [
        { title: "Roof Trusses & Structural Framing", img: "assets/images/facade_tryst_luxury.jpg", date: "May 10" },
        { title: "Masonry Brickwork & Windows", img: "assets/images/facade_contemporary_home.jpg", date: "May 22" },
        { title: "Alfresco Concrete Slab & Plumbing", img: "assets/images/alfresco_pool_area.jpg", date: "Jun 02" }
      ]
    },
    {
      id: "OH-2026-904",
      clientName: "Dr. A. Sharma",
      suburb: "Kellyville (Knockdown Rebuild)",
      planName: "Tryst 46 SQ Custom",
      status: "In Progress",
      percentage: 85,
      siteSupervisor: "Dave Robinson (0422 119 443)",
      currentStage: "Stone Benchtop & Cabinetry Fit-off",
      stages: [
        { name: "Demolition & Soil Test", status: "completed", date: "10 Jan 2026", note: "Safe demolition of 1970s cottage and EPA waste disposal manifest issued." },
        { name: "Slab Pour", status: "completed", date: "02 Feb 2026", note: "Engineered slab with drop edge beams for mild slope." },
        { name: "Frame & Lockup", status: "completed", date: "05 Mar 2026", note: "Double storey frame and architectural monument cladding complete." },
        { name: "Plaster & Tiling", status: "completed", date: "14 Apr 2026", note: "Floor-to-ceiling porcelain tiles in all 5 ensuites." },
        { name: "Cabinetry & Stone", status: "in-progress", date: "Est. 05 May 2026", note: "80mm Calacatta island bench and butler's pantry cabinetry installation." },
        { name: "Handover Celebration", status: "upcoming", date: "Est. 30 May 2026", note: "Full turnkey completion with custom landscaping and driveway." }
      ],
      photos: [
        { title: "Demolition Complete", date: "10 Jan 2026", img: "assets/images/facade_tryst_luxury.jpg" },
        { title: "Bathroom Tiling Complete", date: "14 Apr 2026", img: "assets/images/interior_luxury_kitchen.jpg" }
      ]
    }
  ],

  articles: [
    {
      id: "knockdown-rebuild-sydney",
      title: "Knockdown & Rebuild in Sydney: Why It's the Smartest Move in 2026",
      category: "Rebuild Guide",
      date: "August 2026",
      readTime: "5 min read",
      image: "assets/images/hero_luxury_home.jpg",
      summary: "Love your suburb and schools but outgrown your dated 1970s home? Learn why knocking down and rebuilding with Orange Homes saves tens of thousands in stamp duty while delivering a brand new luxury residence.",
      content: `
        <p>If you love where you live—your neighbours, local schools, favorite coffee shops, and established trees—moving to an unfamiliar estate might feel like an unwelcome compromise. Yet renovating an older home often uncovers costly surprises like asbestos, sagging foundations, and outdated wiring.</p>
        <h4>The Mathematical Advantage of Knockdown Rebuild</h4>
        <p>When you buy an established luxury home in Sydney, stamp duty can easily exceed $100,000 to $180,000. With a knockdown rebuild on your existing block:</p>
        <ul>
          <li><strong>Zero Stamp Duty on the Land:</strong> You already own the dirt. You only pay for the construction contract.</li>
          <li><strong>Tailored to Your Block's Aspect:</strong> Maximize northern sun, views, and privacy with a bespoke design.</li>
          <li><strong>Fixed Price Guarantee:</strong> No unexpected renovation budget blowouts.</li>
          <li><strong>25-Year Structural Lifetime Warranty:</strong> Complete peace of mind for decades.</li>
        </ul>
        <p>Orange Homes handles the entire process: soil testing, demolition permits, CDC/DA council approvals, site clearing, and construction to full turnkey handover.</p>
      `
    },
    {
      id: "bushfire-bal40-construction",
      title: "Building in Bushfire Prone Areas (BAL-40 & Flame Zone): The Complete Builder's Guide",
      category: "Technical Standards",
      date: "July 2026",
      readTime: "7 min read",
      image: "assets/images/facade_contemporary_home.jpg",
      summary: "Understanding AS 3959 compliance, toughened glazing, ember-proof seals, non-combustible subfloors, and how Orange Homes engineers high-BAL safety without sacrificing sleek modern aesthetics.",
      content: `
        <p>Many of Sydney's most picturesque suburbs—including the Hills District, Hawkesbury, and Blue Mountains fringe—are designated bushfire-prone zones. Building here requires strict compliance with Australian Standard AS 3959.</p>
        <h4>How Orange Homes Masters BAL Ratings</h4>
        <p>From BAL-12.5 up to BAL-40 and BAL-FZ (Flame Zone), we integrate compliant materials seamlessly:</p>
        <ul>
          <li><strong>Ember-Proof Roof Systems:</strong> Colorbond steel roofing with zero-gap seals, metal gutter guards, and enclosed eaves.</li>
          <li><strong>Toughened & Fire-Rated Glazing:</strong> Double-glazed toughened safety glass with stainless steel bushfire mesh screens.</li>
          <li><strong>Non-Combustible Cladding:</strong> Natural stone, engineered masonry, and flame-retardant fiber cement panels that look ultra-luxurious.</li>
        </ul>
      `
    },
    {
      id: "sloping-block-engineering",
      title: "Building on Sloping Sites: How Land Fall Impacts Construction Costs & Design",
      category: "Site Preparation",
      date: "June 2026",
      readTime: "6 min read",
      image: "assets/images/alfresco_pool_area.jpg",
      summary: "Don't let a steep or falling block intimidate you. Discover how split-level home designs, engineered drop-edge beams, and stepped foundations turn challenging topography into architectural stunners.",
      content: `
        <p>The steepness of your block is termed the 'fall of the land'. While flat blocks are the simplest to pour a standard slab on, sloping blocks offer extraordinary architectural opportunities for split-level living, elevated district views, and under-house multi-car garages.</p>
        <h4>Split-Level Engineering vs Excessive Excavation</h4>
        <p>Rather than spending tens of thousands on massive retaining walls and cut-and-fill, Orange Homes specializes in split-level custom plans that follow the natural contour of your land, saving significant earthwork costs while creating soaring ceiling heights inside.</p>
      `
    },
    {
      id: "kitchen-bulkheads-trends",
      title: "What is a Bulkhead? Why Architectural Kitchen Ceilings Transform Your Space",
      category: "Interior Architecture",
      date: "May 2026",
      readTime: "4 min read",
      image: "assets/images/interior_luxury_kitchen.jpg",
      summary: "Explore how recessed ceiling bulkheads with hidden LED warm lighting define open-plan kitchens, conceal ducted rangehoods, and elevate homes from standard to multi-million-dollar luxury.",
      content: `
        <p>A bulkhead is a lowered section of ceiling used to frame specific living zones. In modern luxury kitchen design, a floating bulkhead over the central island bench creates an intimate, sophisticated focal point while discreetly housing ducted extraction vents and integrated warm ambient LED strip lighting.</p>
      `
    },
    {
      id: "dual-occupancy-cdc-fast-track",
      title: "Dual Occupancy & Duplex CDC Approvals: How to Fast-Track Your Approval in 20 Days",
      category: "Rebuild Guide",
      date: "April 2026",
      readTime: "5 min read",
      image: "assets/images/facade_bion_duplex.jpg",
      summary: "Skip prolonged council DA delays with Complying Development Certificate (CDC) rules in NSW. Learn land size thresholds, minimum frontage rules, and dual rental yield strategies.",
      content: `
        <p>The Low Rise Housing Diversity Code in NSW allows dual occupancies and duplexes to be approved via a private certifier (CDC) in as little as 20 business days if your block meets the criteria.</p>
        <h4>Key CDC Dual Occupancy Requirements:</h4>
        <ul>
          <li><strong>Minimum Lot Size:</strong> Typically 400m² to 600m² depending on your local council area.</li>
          <li><strong>Minimum Frontage:</strong> Usually 12m to 15m.</li>
          <li><strong>Subdivision Potential:</strong> Torrens Title subdivision can often be approved simultaneously with the construction certificate.</li>
        </ul>
      `
    },
    {
      id: "smart-home-automation-2026",
      title: "Next-Gen Smart Home Automation: What to Wire Before Gyprock Goes Up",
      category: "Technical Standards",
      date: "March 2026",
      readTime: "6 min read",
      image: "assets/images/facade_tryst_luxury.jpg",
      summary: "From ducted smart climate zoning and app-controlled architectural lighting to hardwired security and EV fast chargers—here is what every new luxury home must include.",
      content: `
        <p>Retrofitting smart wiring after plasterboard is fixed costs five times more than installing structured CAT6 and automation conduits during the framing stage. At Orange Homes, all our designs include an integrated structured cabling plan.</p>
      `
    }
  ],

  testimonials: [
    {
      name: "Mehran & Fatima Muzaffar",
      suburb: "Harrington Grove",
      rating: 5,
      buildType: "110 SQ Custom Mansion",
      image: "assets/images/facade_tryst_luxury.jpg",
      quote: "We signed up with Orange Homes to build our 110 square dream mansion in Harrington Grove. They are highly organized, transparent, and a complete breeze to deal with. Their in-house architects made every single amendment we asked for with zero extra charges. Truly world-class quality!"
    },
    {
      name: "Jenny & Michael Fu",
      suburb: "Box Hill",
      rating: 5,
      buildType: "54 SQ Double Storey",
      image: "assets/images/facade_contemporary_home.jpg",
      quote: "This is our second house built with the team. Mike and Shafeeq delivered everything they promised right on schedule. The Orange App build tracker let us see site photos and stage signoffs every few days without needing to take time off work. Outstanding builder!"
    },
    {
      name: "Senthil Kumar",
      suburb: "Austral",
      rating: 5,
      buildType: "43 SQ Family Residence",
      image: "assets/images/hero_luxury_home.jpg",
      quote: "Construction started first week of February, and the brickwork and roof were locked up so quickly. The mobile app gave us complete confidence tracking council certificates, engineer approvals, and milestone dates. Unrivalled builder in NSW."
    },
    {
      name: "Julie & Craig Savage",
      suburb: "Box Hill",
      rating: 5,
      buildType: "58 SQ Custom Residence",
      image: "assets/images/interior_luxury_kitchen.jpg",
      quote: "Our current home frame was cut and assembled onsite the old-school way, ensuring maximum precision and structural rigidity. The communication and honesty were second to none. We recommend Orange Homes to all our friends."
    },
    {
      name: "David & Amanda Reynolds",
      suburb: "Leppington",
      rating: 5,
      buildType: "48 SQ Knockdown Rebuild",
      image: "assets/images/facade_tryst_luxury.jpg",
      quote: "From our first meeting at their Bella Vista studio, Orange Homes understood exactly what we wanted for our sloping block. Fixed price contract with zero variations, completed 3 weeks ahead of schedule!"
    },
    {
      name: "Dr. Andrew & Vivian Chen",
      suburb: "Kellyville",
      rating: 5,
      buildType: "62 SQ Luxury Manor",
      image: "assets/images/alfresco_pool_area.jpg",
      quote: "The craftsmanship in the floating bulkhead ceilings, waterfall stone island, and acoustic insulation exceeded our expectations. Truly the highest standard custom builder in Sydney."
    }
  ],

  virtualTourRooms: [
    {
      id: "kitchen",
      name: "Chef's Gourmet Kitchen & Dining",
      image: "assets/images/interior_luxury_kitchen.jpg",
      desc: "Featuring 80mm Calacatta marble waterfall island, matte black tapware, flush induction cooktop, and floating LED bulkhead ceiling.",
      hotspots: [
        { top: "58%", left: "68%", title: "Calacatta Marble Waterfall", text: "80mm reconstituted stone island with concealed power popups and dual sinks." },
        { top: "22%", left: "65%", title: "Architectural Ceiling Bulkhead", text: "Integrated warm 3000K LED wash lighting with ducted commercial rangehood." },
        { top: "60%", left: "28%", title: "Polished Concrete Floors", text: "Honed and sealed concrete flooring with embedded underfloor hydronic heating." }
      ]
    },
    {
      id: "alfresco",
      name: "Resort-Style Alfresco & Pool Oasis",
      image: "assets/images/alfresco_pool_area.jpg",
      desc: "Expansive undercover outdoor pavilion featuring built-in stainless steel BBQ, bar fridge, limestone pavers, and frameless glass pool fencing.",
      hotspots: [
        { top: "45%", left: "22%", title: "Outdoor Gourmet Kitchen", text: "Beefeater 5-burner BBQ, bar fridge, stone benchtops and marine-grade cabinetry." },
        { top: "65%", left: "75%", title: "Heated Mineral Pool", text: "Fully tiled freshwater mineral pool with automatic chlorination and LED underwater mood lights." },
        { top: "78%", left: "55%", title: "LED Step Lighting", text: "Recessed waterproof warm step lights creating an ethereal night atmosphere." }
      ]
    },
    {
      id: "facade",
      name: "Flagship Twilight Architectural Facade",
      image: "assets/images/hero_luxury_home.jpg",
      desc: "Bold black steel exoskeleton, vertical cedar cladding, cantilevered master balcony, and illuminated garden pathway.",
      hotspots: [
        { top: "40%", left: "42%", title: "Cantilevered Master Balcony", text: "Structural steel beam supporting a seamless 3-metre floating cantilever with frameless glass." },
        { top: "68%", left: "72%", title: "Illuminated Concrete Driveway", text: "Exposed aggregate driveway with in-ground linear LED light strips." },
        { top: "25%", left: "45%", title: "Warm Architectural Eaves", text: "Continuous LED channel lighting integrated into charred timber soffits." }
      ]
    }
  ],

  faqs: [
    {
      q: "Why choose Orange Homes over other Sydney project builders?",
      a: "Unlike typical high-volume project builders that lure clients with low base prices and hit them with massive variation fees, Orange Homes provides 100% Fixed-Price Contracts, complimentary custom architectural design revisions, premium luxury inclusions as standard (such as 60mm/80mm stone, high ceilings, ducted A/C), and our proprietary live construction stage tracking app."
    },
    {
      q: "Is it really 100% free to design a custom home with you?",
      a: "Yes! When you build with Orange Homes, our in-house qualified architects collaborate with you to create, modify, and finalize your bespoke floor plan and 3D elevations at zero design charge. You do not pay thousands of dollars in architectural drafting fees."
    },
    {
      q: "How does the Orange App construction tracker work?",
      a: "Every Orange Homes client receives a secure personal login to our Build Tracker app. You can log in 24/7 on your smartphone or computer to view live progress percentages, site supervisor daily logs, high-resolution progress photos, upcoming milestones, and download certified council & engineering inspection signoffs."
    },
    {
      q: "How much does it cost to build a custom home in Sydney?",
      a: "The overall cost depends on 4 main factors: (1) Total house size in SQ/m², (2) Complexity of architectural engineering, (3) Inclusions tier (Essential, Luxury, or Diamond), and (4) Site slope / land fall conditions. Use our interactive Build Cost Estimator on this website to get an immediate realistic estimate."
    },
    {
      q: "How long does the construction process take?",
      a: "A standard single-storey or double-storey home typically takes between 140 to 180 construction days from slab pour to handover. Large bespoke luxury estates (50-70+ SQ) typically take between 8 to 11 months depending on custom finishes and site fall."
    },
    {
      q: "Will you build on challenging sloping blocks or in bushfire-prone zones?",
      a: "Absolutely. We are recognized Sydney specialists in complex site engineering. Whether your block has a 4-metre slope requiring split-level slabs and drop-edge beams, or a high BAL-40 / Flame Zone bushfire rating requiring non-combustible steel shutters and ember seals, our team has built hundreds of compliant, award-winning homes."
    }
  ]
};

// Expose globally
window.ORANGE_DATA = ORANGE_DATA;
