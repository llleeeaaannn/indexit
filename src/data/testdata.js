const tickertestdata = [
    "AAPL",
    "MSFT",
    "AMZN",
    "NVDA",
    "GOOGL",
    "BRK.B",
    "GOOG",
    "TSLA",
    "META",
    "XOM",
    "UNH",
    "JNJ",
    "JPM",
    "V",
    "PG",
    "MA",
    "HD",
    "CVX",
    "ABBV",
    "LLY",
    "MRK",
    "AVGO",
    "PEP",
    "KO",
    "PFE",
    "TMO",
    "COST",
    "CSCO",
    "WMT",
    "MCD",
    "BAC",
    "CRM",
    "DIS",
    "ACN",
    "ADBE",
    "LIN",
    "ABT",
    "TXN",
    "DHR",
    "VZ",
    "AMD",
    "CMCSA",
    "NEE",
    "NFLX",
    "PM",
    "NKE",
    "BMY",
    "RTX",
    "WFC",
    "QCOM",
    "UPS",
    "ORCL",
    "T",
    "INTC",
    "AMGN",
    "HON",
    "INTU",
    "COP",
    "UNP",
    "BA",
    "CAT",
    "IBM",
    "LOW",
    "SBUX",
    "MS",
    "PLD",
    "SPGI",
    "ELV",
    "DE",
    "GS",
    "LMT",
    "MDT",
    "AMAT",
    "GE",
    "GILD",
    "BKNG",
    "BLK",
    "ADI",
    "AXP",
    "CVS",
    "MDLZ",
    "SYK",
    "AMT",
    "ADP",
    "NOW",
    "TJX",
    "C",
    "ISRG",
    "REGN",
    "TMUS",
    "PYPL",
    "PGR",
    "MMC",
    "VRTX",
    "CB",
    "SCHW",
    "MO",
    "ZTS",
    "CI",
    "SO",
    "DUK",
    "TGT",
    "LRCX",
    "FISV",
    "BSX",
    "BDX",
    "SLB",
    "MU",
    "CME",
    "ETN",
    "ITW",
    "NOC",
    "EOG",
    "EQIX",
    "AON",
    "CL",
    "APD",
    "CSX",
    "HUM",
    "MPC",
    "ATVI",
    "WM",
    "FCX",
    "ICE",
    "SNPS",
    "CCI",
    "EL",
    "CDNS",
    "MMM",
    "HCA",
    "KLAC",
    "VLO",
    "ORLY",
    "FDX",
    "SHW",
    "PNC",
    "GD",
    "EW",
    "GIS",
    "GM",
    "USB",
    "MCK",
    "EMR",
    "MRNA",
    "F",
    "PXD",
    "APH",
    "NSC",
    "MCO",
    "MSI",
    "NXPI",
    "SRE",
    "PSX",
    "PSA",
    "DG",
    "D",
    "AEP",
    "ROP",
    "CMG",
    "MCHP",
    "OXY",
    "AZO",
    "KMB",
    "TFC",
    "DXCM",
    "MSCI",
    "MAR",
    "ADM",
    "ADSK",
    "PH",
    "CTVA",
    "FTNT",
    "TT",
    "EXC",
    "TEL",
    "IDXX",
    "JCI",
    "ECL",
    "CTAS",
    "AJG",
    "ANET",
    "MNST",
    "A",
    "BIIB",
    "TRV",
    "O",
    "SYY",
    "NEM",
    "NUE",
    "TDG",
    "DOW",
    "CARR",
    "PCAR",
    "MET",
    "HSY",
    "LHX",
    "AIG",
    "CHTR",
    "HES",
    "HLT",
    "XEL",
    "STZ",
    "YUM",
    "PAYX",
    "AFL",
    "IQV",
    "COF",
    "ROST",
    "WMB",
    "ILMN",
    "CNC",
    "ON",
    "SPG",
    "OTIS",
    "KMI",
    "ED",
    "WELL",
    "MTD",
    "CMI",
    "ROK",
    "BK",
    "WBD",
    "AME",
    "DVN",
    "DD",
    "AMP",
    "VICI",
    "KR",
    "RMD",
    "CPRT",
    "EA",
    "FIS",
    "PEG",
    "CTSH",
    "KHC",
    "PPG",
    "ODFL",
    "FAST",
    "GWW",
    "PRU",
    "VRSK",
    "GEHC",
    "DHI",
    "WEC",
    "APTV",
    "KDP",
    "DLTR",
    "ALL",
    "BKR",
    "ANSS",
    "KEYS",
    "HAL",
    "AWK",
    "OKE",
    "ENPH",
    "SBAC",
    "CSGP",
    "RSG",
    "ULTA",
    "ES",
    "GPN",
    "DLR",
    "URI",
    "EIX",
    "ZBH",
    "GLW",
    "DFS",
    "STT",
    "ALB",
    "LEN",
    "ABC",
    "CDW",
    "PCG",
    "TSCO",
    "WST",
    "IT",
    "CEG",
    "ACGL",
    "HPQ",
    "WBA",
    "TROW",
    "WTW",
    "FANG",
    "EFX",
    "PWR",
    "EBAY",
    "FTV",
    "LYB",
    "IR",
    "GPC",
    "IFF",
    "AVB",
    "ALGN",
    "VMC",
    "CBRE",
    "AEE",
    "MPWR",
    "PODD",
    "HIG",
    "DAL",
    "ETR",
    "MLM",
    "WY",
    "FE",
    "EXR",
    "CHD",
    "FSLR",
    "DTE",
    "DOV",
    "TDY",
    "BAX",
    "MKC",
    "MTB",
    "HPE",
    "PPL",
    "HOLX",
    "EQR",
    "LH",
    "CAH",
    "ARE",
    "VRSN",
    "CLX",
    "CTRA",
    "OMC",
    "LUV",
    "DRI",
    "SWKS",
    "STE",
    "TTWO",
    "CNP",
    "XYL",
    "STLD",
    "NDAQ",
    "LVS",
    "WAT",
    "COO",
    "NTRS",
    "FITB",
    "WAB",
    "CMS",
    "VTR",
    "RJF",
    "INVH",
    "CAG",
    "FICO",
    "CINF",
    "RF",
    "MAA",
    "BR",
    "K",
    "EXPD",
    "IEX",
    "BALL",
    "TSN",
    "PFG",
    "SJM",
    "TER",
    "EPAM",
    "AMCR",
    "PKI",
    "SEDG",
    "NVR",
    "TRGP",
    "ATO",
    "ZBRA",
    "HBAN",
    "DGX",
    "AES",
    "FDS",
    "HWM",
    "MOH",
    "MOS",
    "FMC",
    "GRMN",
    "FLT",
    "BBY",
    "CFG",
    "IRM",
    "MRO",
    "J",
    "TXT",
    "LW",
    "MKTX",
    "PAYC",
    "BG",
    "TYL",
    "EXPE",
    "UAL",
    "AVY",
    "IPG",
    "RCL",
    "LKQ",
    "CF",
    "JBHT",
    "RE",
    "CBOE",
    "EVRG",
    "MGM",
    "ETSY",
    "NTAP",
    "PTC",
    "BRO",
    "LNT",
    "INCY",
    "ESS",
    "PHM",
    "POOL",
    "PKG",
    "SNA",
    "TRMB",
    "IP",
    "STX",
    "WRB",
    "SYF",
    "LDOS",
    "UDR",
    "AKAM",
    "WDC",
    "PEAK",
    "NDSN",
    "DPZ",
    "TFX",
    "CTLT",
    "VTRS",
    "KEY",
    "APA",
    "KIM",
    "BWA",
    "BF.B",
    "SWK",
    "TECH",
    "WYNN",
    "CPT",
    "EQT",
    "CHRW",
    "HRL",
    "HST",
    "NI",
    "L",
    "CPB",
    "JNPR",
    "PARA",
    "MAS",
    "HSIC",
    "JKHY",
    "CDAY",
    "CE",
    "MTCH",
    "QRVO",
    "FOXA",
    "CCL",
    "TPR",
    "CRL",
    "BIO",
    "EMN",
    "CZR",
    "GL",
    "KMX",
    "LYV",
    "TAP",
    "GEN",
    "AAL",
    "ALLE",
    "CASH_USD",
    "REG",
    "PNW",
    "PNR",
    "AOS",
    "ROL",
    "RHI",
    "FFIV",
    "XRAY",
    "BBWI",
    "HII",
    "UHS",
    "NRG",
    "WRK",
    "BEN",
    "BXP",
    "VFC",
    "IVZ",
    "AAP",
    "WHR",
    "FRT",
    "GNRC",
    "HAS",
    "NWSA",
    "SEE",
    "AIZ",
    "OGN",
    "CMA",
    "DXC",
    "NCLH",
    "ALK",
    "MHK",
    "RL",
    "ZION",
    "NWL",
    "DVA",
    "FOX",
    "LNC",
    "FRC",
    "DISH",
    "NWS"
]

const stocktestdata = {
    "AAPL": {
        "price": 107,
        "weight": "7.130985",
        "ticker": "AAPL",
        "name": "Apple Inc.",
        "originalprice": 107
    },
    "MSFT": {
        "price": 182,
        "weight": "6.244143",
        "ticker": "MSFT",
        "name": "Microsoft Corporation",
        "originalprice": 182
    },
    "AMZN": {
        "price": 236,
        "weight": "2.685407",
        "ticker": "AMZN",
        "name": "Amazon.com Inc.",
        "originalprice": 236
    },
    "NVDA": {
        "price": 174,
        "weight": "1.989291",
        "ticker": "NVDA",
        "name": "NVIDIA Corporation",
        "originalprice": 174
    },
    "GOOGL": {
        "price": 246,
        "weight": "1.774537",
        "ticker": "GOOGL",
        "name": "Alphabet Inc. Class A",
        "originalprice": 246
    },
    "BRK.B": {
        "price": 150,
        "weight": "1.623244",
        "ticker": "BRK.B",
        "name": "Berkshire Hathaway Inc. Class B",
        "originalprice": 150
    },
    "GOOG": {
        "price": 207,
        "weight": "1.553552",
        "ticker": "GOOG",
        "name": "Alphabet Inc. Class C",
        "originalprice": 207
    },
    "TSLA": {
        "price": 81,
        "weight": "1.550994",
        "ticker": "TSLA",
        "name": "Tesla Inc.",
        "originalprice": 81
    },
    "META": {
        "price": 241,
        "weight": "1.366125",
        "ticker": "META",
        "name": "Meta Platforms Inc. Class A",
        "originalprice": 241
    },
    "XOM": {
        "price": 117,
        "weight": "1.331509",
        "ticker": "XOM",
        "name": "Exxon Mobil Corporation",
        "originalprice": 117
    },
    "UNH": {
        "price": 196,
        "weight": "1.297011",
        "ticker": "UNH",
        "name": "UnitedHealth Group Incorporated",
        "originalprice": 196
    },
    "JNJ": {
        "price": 68,
        "weight": "1.184620",
        "ticker": "JNJ",
        "name": "Johnson & Johnson",
        "originalprice": 68
    },
    "JPM": {
        "price": 250,
        "weight": "1.115249",
        "ticker": "JPM",
        "name": "JPMorgan Chase & Co.",
        "originalprice": 250
    },
    "V": {
        "price": 50,
        "weight": "1.067039",
        "ticker": "V",
        "name": "Visa Inc. Class A",
        "originalprice": 50
    },
    "PG": {
        "price": 54,
        "weight": "1.027263",
        "ticker": "PG",
        "name": "Procter & Gamble Company",
        "originalprice": 54
    },
    "MA": {
        "price": 105,
        "weight": "0.895138",
        "ticker": "MA",
        "name": "Mastercard Incorporated Class A",
        "originalprice": 105
    },
    "HD": {
        "price": 113,
        "weight": "0.858868",
        "ticker": "HD",
        "name": "Home Depot Inc.",
        "originalprice": 113
    },
    "CVX": {
        "price": 227,
        "weight": "0.853111",
        "ticker": "CVX",
        "name": "Chevron Corporation",
        "originalprice": 227
    },
    "ABBV": {
        "price": 199,
        "weight": "0.824745",
        "ticker": "ABBV",
        "name": "AbbVie Inc.",
        "originalprice": 199
    },
    "LLY": {
        "price": 126,
        "weight": "0.793461",
        "ticker": "LLY",
        "name": "Eli Lilly and Company",
        "originalprice": 126
    },
    "MRK": {
        "price": 142,
        "weight": "0.793060",
        "ticker": "MRK",
        "name": "Merck & Co. Inc.",
        "originalprice": 142
    },
    "AVGO": {
        "price": 120,
        "weight": "0.782098",
        "ticker": "AVGO",
        "name": "Broadcom Inc.",
        "originalprice": 120
    },
    "PEP": {
        "price": 156,
        "weight": "0.735474",
        "ticker": "PEP",
        "name": "PepsiCo Inc.",
        "originalprice": 156
    },
    "KO": {
        "price": 219,
        "weight": "0.710889",
        "ticker": "KO",
        "name": "Coca-Cola Company",
        "originalprice": 219
    },
    "PFE": {
        "price": 247,
        "weight": "0.669373",
        "ticker": "PFE",
        "name": "Pfizer Inc.",
        "originalprice": 247
    },
    "TMO": {
        "price": 210,
        "weight": "0.652040",
        "ticker": "TMO",
        "name": "Thermo Fisher Scientific Inc.",
        "originalprice": 210
    },
    "COST": {
        "price": 56,
        "weight": "0.644024",
        "ticker": "COST",
        "name": "Costco Wholesale Corporation",
        "originalprice": 56
    },
    "CSCO": {
        "price": 216,
        "weight": "0.623937",
        "ticker": "CSCO",
        "name": "Cisco Systems Inc.",
        "originalprice": 216
    },
    "WMT": {
        "price": 92,
        "weight": "0.603261",
        "ticker": "WMT",
        "name": "Walmart Inc.",
        "originalprice": 92
    },
    "MCD": {
        "price": 241,
        "weight": "0.600839",
        "ticker": "MCD",
        "name": "McDonald's Corporation",
        "originalprice": 241
    },
    "BAC": {
        "price": 62,
        "weight": "0.583304",
        "ticker": "BAC",
        "name": "Bank of America Corp",
        "originalprice": 62
    },
    "CRM": {
        "price": 198,
        "weight": "0.580585",
        "ticker": "CRM",
        "name": "Salesforce Inc.",
        "originalprice": 198
    },
    "DIS": {
        "price": 208,
        "weight": "0.529230",
        "ticker": "DIS",
        "name": "Walt Disney Company",
        "originalprice": 208
    },
    "ACN": {
        "price": 162,
        "weight": "0.525664",
        "ticker": "ACN",
        "name": "Accenture Plc Class A",
        "originalprice": 162
    },
    "ADBE": {
        "price": 233,
        "weight": "0.516309",
        "ticker": "ADBE",
        "name": "Adobe Incorporated",
        "originalprice": 233
    },
    "LIN": {
        "price": 94,
        "weight": "0.511294",
        "ticker": "LIN",
        "name": "Linde plc",
        "originalprice": 94
    },
    "ABT": {
        "price": 146,
        "weight": "0.510164",
        "ticker": "ABT",
        "name": "Abbott Laboratories",
        "originalprice": 146
    },
    "TXN": {
        "price": 226,
        "weight": "0.492941",
        "ticker": "TXN",
        "name": "Texas Instruments Incorporated",
        "originalprice": 226
    },
    "DHR": {
        "price": 128,
        "weight": "0.483538",
        "ticker": "DHR",
        "name": "Danaher Corporation",
        "originalprice": 128
    },
    "VZ": {
        "price": 227,
        "weight": "0.479493",
        "ticker": "VZ",
        "name": "Verizon Communications Inc.",
        "originalprice": 227
    },
    "AMD": {
        "price": 87,
        "weight": "0.466055",
        "ticker": "AMD",
        "name": "Advanced Micro Devices Inc.",
        "originalprice": 87
    },
    "CMCSA": {
        "price": 52,
        "weight": "0.461503",
        "ticker": "CMCSA",
        "name": "Comcast Corporation Class A",
        "originalprice": 52
    },
    "NEE": {
        "price": 195,
        "weight": "0.449456",
        "ticker": "NEE",
        "name": "NextEra Energy Inc.",
        "originalprice": 195
    },
    "NFLX": {
        "price": 189,
        "weight": "0.445090",
        "ticker": "NFLX",
        "name": "Netflix Inc.",
        "originalprice": 189
    },
    "PM": {
        "price": 196,
        "weight": "0.442331",
        "ticker": "PM",
        "name": "Philip Morris International Inc.",
        "originalprice": 196
    },
    "NKE": {
        "price": 101,
        "weight": "0.441799",
        "ticker": "NKE",
        "name": "NIKE Inc. Class B",
        "originalprice": 101
    },
    "BMY": {
        "price": 87,
        "weight": "0.428217",
        "ticker": "BMY",
        "name": "Bristol-Myers Squibb Company",
        "originalprice": 87
    },
    "RTX": {
        "price": 140,
        "weight": "0.421241",
        "ticker": "RTX",
        "name": "Raytheon Technologies Corporation",
        "originalprice": 140
    },
    "WFC": {
        "price": 211,
        "weight": "0.420633",
        "ticker": "WFC",
        "name": "Wells Fargo & Company",
        "originalprice": 211
    },
    "QCOM": {
        "price": 126,
        "weight": "0.420322",
        "ticker": "QCOM",
        "name": "QUALCOMM Incorporated",
        "originalprice": 126
    },
    "UPS": {
        "price": 56,
        "weight": "0.411848",
        "ticker": "UPS",
        "name": "United Parcel Service Inc. Class B",
        "originalprice": 56
    },
    "ORCL": {
        "price": 212,
        "weight": "0.410786",
        "ticker": "ORCL",
        "name": "Oracle Corporation",
        "originalprice": 212
    },
    "T": {
        "price": 116,
        "weight": "0.401633",
        "ticker": "T",
        "name": "AT&T Inc.",
        "originalprice": 116
    },
    "INTC": {
        "price": 138,
        "weight": "0.392047",
        "ticker": "INTC",
        "name": "Intel Corporation",
        "originalprice": 138
    },
    "AMGN": {
        "price": 229,
        "weight": "0.380819",
        "ticker": "AMGN",
        "name": "Amgen Inc.",
        "originalprice": 229
    },
    "HON": {
        "price": 214,
        "weight": "0.373152",
        "ticker": "HON",
        "name": "Honeywell International Inc.",
        "originalprice": 214
    },
    "INTU": {
        "price": 116,
        "weight": "0.365720",
        "ticker": "INTU",
        "name": "Intuit Inc.",
        "originalprice": 116
    },
    "COP": {
        "price": 199,
        "weight": "0.358708",
        "ticker": "COP",
        "name": "ConocoPhillips",
        "originalprice": 199
    },
    "UNP": {
        "price": 79,
        "weight": "0.358429",
        "ticker": "UNP",
        "name": "Union Pacific Corporation",
        "originalprice": 79
    },
    "BA": {
        "price": 172,
        "weight": "0.350467",
        "ticker": "BA",
        "name": "Boeing Company",
        "originalprice": 172
    },
    "CAT": {
        "price": 52,
        "weight": "0.345078",
        "ticker": "CAT",
        "name": "Caterpillar Inc.",
        "originalprice": 52
    },
    "IBM": {
        "price": 146,
        "weight": "0.345020",
        "ticker": "IBM",
        "name": "International Business Machines Corporation",
        "originalprice": 146
    },
    "LOW": {
        "price": 205,
        "weight": "0.344028",
        "ticker": "LOW",
        "name": "Lowe's Companies Inc.",
        "originalprice": 205
    },
    "SBUX": {
        "price": 200,
        "weight": "0.343884",
        "ticker": "SBUX",
        "name": "Starbucks Corporation",
        "originalprice": 200
    },
    "MS": {
        "price": 202,
        "weight": "0.332237",
        "ticker": "MS",
        "name": "Morgan Stanley",
        "originalprice": 202
    },
    "PLD": {
        "price": 139,
        "weight": "0.331825",
        "ticker": "PLD",
        "name": "Prologis Inc.",
        "originalprice": 139
    },
    "SPGI": {
        "price": 113,
        "weight": "0.331775",
        "ticker": "SPGI",
        "name": "S&P Global Inc.",
        "originalprice": 113
    },
    "ELV": {
        "price": 180,
        "weight": "0.323674",
        "ticker": "ELV",
        "name": "Elevance Health Inc.",
        "originalprice": 180
    },
    "DE": {
        "price": 248,
        "weight": "0.322385",
        "ticker": "DE",
        "name": "Deere & Company",
        "originalprice": 248
    },
    "GS": {
        "price": 115,
        "weight": "0.321149",
        "ticker": "GS",
        "name": "Goldman Sachs Group Inc.",
        "originalprice": 115
    },
    "LMT": {
        "price": 69,
        "weight": "0.317492",
        "ticker": "LMT",
        "name": "Lockheed Martin Corporation",
        "originalprice": 69
    },
    "MDT": {
        "price": 190,
        "weight": "0.311035",
        "ticker": "MDT",
        "name": "Medtronic Plc",
        "originalprice": 190
    },
    "AMAT": {
        "price": 103,
        "weight": "0.304019",
        "ticker": "AMAT",
        "name": "Applied Materials Inc.",
        "originalprice": 103
    },
    "GE": {
        "price": 234,
        "weight": "0.302032",
        "ticker": "GE",
        "name": "General Electric Company",
        "originalprice": 234
    },
    "GILD": {
        "price": 63,
        "weight": "0.299944",
        "ticker": "GILD",
        "name": "Gilead Sciences Inc.",
        "originalprice": 63
    },
    "BKNG": {
        "price": 245,
        "weight": "0.298493",
        "ticker": "BKNG",
        "name": "Booking Holdings Inc.",
        "originalprice": 245
    },
    "BLK": {
        "price": 185,
        "weight": "0.292830",
        "ticker": "BLK",
        "name": "BlackRock Inc.",
        "originalprice": 185
    },
    "ADI": {
        "price": 151,
        "weight": "0.290695",
        "ticker": "ADI",
        "name": "Analog Devices Inc.",
        "originalprice": 151
    },
    "AXP": {
        "price": 69,
        "weight": "0.286192",
        "ticker": "AXP",
        "name": "American Express Company",
        "originalprice": 69
    },
    "CVS": {
        "price": 121,
        "weight": "0.283272",
        "ticker": "CVS",
        "name": "CVS Health Corporation",
        "originalprice": 121
    },
    "MDLZ": {
        "price": 121,
        "weight": "0.280192",
        "ticker": "MDLZ",
        "name": "Mondelez International Inc. Class A",
        "originalprice": 121
    },
    "SYK": {
        "price": 180,
        "weight": "0.279494",
        "ticker": "SYK",
        "name": "Stryker Corporation",
        "originalprice": 180
    },
    "AMT": {
        "price": 116,
        "weight": "0.276181",
        "ticker": "AMT",
        "name": "American Tower Corporation",
        "originalprice": 116
    },
    "ADP": {
        "price": 149,
        "weight": "0.268577",
        "ticker": "ADP",
        "name": "Automatic Data Processing Inc.",
        "originalprice": 149
    },
    "NOW": {
        "price": 126,
        "weight": "0.263558",
        "ticker": "NOW",
        "name": "ServiceNow Inc.",
        "originalprice": 126
    },
    "TJX": {
        "price": 196,
        "weight": "0.263248",
        "ticker": "TJX",
        "name": "TJX Companies Inc",
        "originalprice": 196
    },
    "C": {
        "price": 211,
        "weight": "0.263074",
        "ticker": "C",
        "name": "Citigroup Inc.",
        "originalprice": 211
    },
    "ISRG": {
        "price": 233,
        "weight": "0.260035",
        "ticker": "ISRG",
        "name": "Intuitive Surgical Inc.",
        "originalprice": 233
    },
    "REGN": {
        "price": 107,
        "weight": "0.257625",
        "ticker": "REGN",
        "name": "Regeneron Pharmaceuticals Inc.",
        "originalprice": 107
    },
    "TMUS": {
        "price": 140,
        "weight": "0.252875",
        "ticker": "TMUS",
        "name": "T-Mobile US Inc.",
        "originalprice": 140
    },
    "PYPL": {
        "price": 211,
        "weight": "0.248544",
        "ticker": "PYPL",
        "name": "PayPal Holdings Inc.",
        "originalprice": 211
    },
    "PGR": {
        "price": 231,
        "weight": "0.248049",
        "ticker": "PGR",
        "name": "Progressive Corporation",
        "originalprice": 231
    },
    "MMC": {
        "price": 98,
        "weight": "0.241105",
        "ticker": "MMC",
        "name": "Marsh & McLennan Companies Inc.",
        "originalprice": 98
    },
    "VRTX": {
        "price": 199,
        "weight": "0.236995",
        "ticker": "VRTX",
        "name": "Vertex Pharmaceuticals Incorporated",
        "originalprice": 199
    },
    "CB": {
        "price": 224,
        "weight": "0.236675",
        "ticker": "CB",
        "name": "Chubb Limited",
        "originalprice": 224
    },
    "SCHW": {
        "price": 73,
        "weight": "0.236348",
        "ticker": "SCHW",
        "name": "Charles Schwab Corp",
        "originalprice": 73
    },
    "MO": {
        "price": 121,
        "weight": "0.235459",
        "ticker": "MO",
        "name": "Altria Group Inc.",
        "originalprice": 121
    },
    "ZTS": {
        "price": 242,
        "weight": "0.225557",
        "ticker": "ZTS",
        "name": "Zoetis Inc. Class A",
        "originalprice": 242
    },
    "CI": {
        "price": 196,
        "weight": "0.224114",
        "ticker": "CI",
        "name": "Cigna Group",
        "originalprice": 196
    },
    "SO": {
        "price": 107,
        "weight": "0.221663",
        "ticker": "SO",
        "name": "Southern Company",
        "originalprice": 107
    },
    "DUK": {
        "price": 140,
        "weight": "0.218334",
        "ticker": "DUK",
        "name": "Duke Energy Corporation",
        "originalprice": 140
    },
    "TGT": {
        "price": 148,
        "weight": "0.217479",
        "ticker": "TGT",
        "name": "Target Corporation",
        "originalprice": 148
    },
    "LRCX": {
        "price": 87,
        "weight": "0.211733",
        "ticker": "LRCX",
        "name": "Lam Research Corporation",
        "originalprice": 87
    },
    "FISV": {
        "price": 204,
        "weight": "0.211543",
        "ticker": "FISV",
        "name": "Fiserv Inc.",
        "originalprice": 204
    },
    "BSX": {
        "price": 161,
        "weight": "0.209461",
        "ticker": "BSX",
        "name": "Boston Scientific Corporation",
        "originalprice": 161
    },
    "BDX": {
        "price": 121,
        "weight": "0.205405",
        "ticker": "BDX",
        "name": "Becton Dickinson and Company",
        "originalprice": 121
    },
    "SLB": {
        "price": 179,
        "weight": "0.204415",
        "ticker": "SLB",
        "name": "Schlumberger N.V.",
        "originalprice": 179
    },
    "MU": {
        "price": 91,
        "weight": "0.203301",
        "ticker": "MU",
        "name": "Micron Technology Inc.",
        "originalprice": 91
    },
    "CME": {
        "price": 189,
        "weight": "0.200383",
        "ticker": "CME",
        "name": "CME Group Inc. Class A",
        "originalprice": 189
    },
    "ETN": {
        "price": 95,
        "weight": "0.198590",
        "ticker": "ETN",
        "name": "Eaton Corp. Plc",
        "originalprice": 95
    },
    "ITW": {
        "price": 220,
        "weight": "0.197678",
        "ticker": "ITW",
        "name": "Illinois Tool Works Inc.",
        "originalprice": 220
    },
    "NOC": {
        "price": 183,
        "weight": "0.196772",
        "ticker": "NOC",
        "name": "Northrop Grumman Corp.",
        "originalprice": 183
    },
    "EOG": {
        "price": 109,
        "weight": "0.196613",
        "ticker": "EOG",
        "name": "EOG Resources Inc.",
        "originalprice": 109
    },
    "EQIX": {
        "price": 60,
        "weight": "0.191534",
        "ticker": "EQIX",
        "name": "Equinix Inc.",
        "originalprice": 60
    },
    "AON": {
        "price": 124,
        "weight": "0.190893",
        "ticker": "AON",
        "name": "Aon Plc Class A",
        "originalprice": 124
    },
    "CL": {
        "price": 112,
        "weight": "0.185605",
        "ticker": "CL",
        "name": "Colgate-Palmolive Company",
        "originalprice": 112
    },
    "APD": {
        "price": 77,
        "weight": "0.182923",
        "ticker": "APD",
        "name": "Air Products and Chemicals Inc.",
        "originalprice": 77
    },
    "CSX": {
        "price": 86,
        "weight": "0.182861",
        "ticker": "CSX",
        "name": "CSX Corporation",
        "originalprice": 86
    },
    "HUM": {
        "price": 136,
        "weight": "0.180231",
        "ticker": "HUM",
        "name": "Humana Inc.",
        "originalprice": 136
    },
    "MPC": {
        "price": 208,
        "weight": "0.179577",
        "ticker": "MPC",
        "name": "Marathon Petroleum Corporation",
        "originalprice": 208
    },
    "ATVI": {
        "price": 127,
        "weight": "0.178539",
        "ticker": "ATVI",
        "name": "Activision Blizzard Inc.",
        "originalprice": 127
    },
    "WM": {
        "price": 150,
        "weight": "0.177876",
        "ticker": "WM",
        "name": "Waste Management Inc.",
        "originalprice": 150
    },
    "FCX": {
        "price": 92,
        "weight": "0.169684",
        "ticker": "FCX",
        "name": "Freeport-McMoRan Inc.",
        "originalprice": 92
    },
    "ICE": {
        "price": 116,
        "weight": "0.169540",
        "ticker": "ICE",
        "name": "Intercontinental Exchange Inc.",
        "originalprice": 116
    },
    "SNPS": {
        "price": 230,
        "weight": "0.169214",
        "ticker": "SNPS",
        "name": "Synopsys Inc.",
        "originalprice": 230
    },
    "CCI": {
        "price": 194,
        "weight": "0.169190",
        "ticker": "CCI",
        "name": "Crown Castle Inc.",
        "originalprice": 194
    },
    "EL": {
        "price": 59,
        "weight": "0.168797",
        "ticker": "EL",
        "name": "Estee Lauder Companies Inc. Class A",
        "originalprice": 59
    },
    "CDNS": {
        "price": 118,
        "weight": "0.167696",
        "ticker": "CDNS",
        "name": "Cadence Design Systems Inc.",
        "originalprice": 118
    },
    "MMM": {
        "price": 95,
        "weight": "0.167498",
        "ticker": "MMM",
        "name": "3M Company",
        "originalprice": 95
    },
    "HCA": {
        "price": 118,
        "weight": "0.162176",
        "ticker": "HCA",
        "name": "HCA Healthcare Inc",
        "originalprice": 118
    },
    "KLAC": {
        "price": 137,
        "weight": "0.161964",
        "ticker": "KLAC",
        "name": "KLA Corporation",
        "originalprice": 137
    },
    "VLO": {
        "price": 99,
        "weight": "0.155758",
        "ticker": "VLO",
        "name": "Valero Energy Corporation",
        "originalprice": 99
    },
    "ORLY": {
        "price": 211,
        "weight": "0.155291",
        "ticker": "ORLY",
        "name": "O'Reilly Automotive Inc.",
        "originalprice": 211
    },
    "FDX": {
        "price": 152,
        "weight": "0.153879",
        "ticker": "FDX",
        "name": "FedEx Corporation",
        "originalprice": 152
    },
    "SHW": {
        "price": 188,
        "weight": "0.151135",
        "ticker": "SHW",
        "name": "Sherwin-Williams Company",
        "originalprice": 188
    },
    "PNC": {
        "price": 176,
        "weight": "0.151054",
        "ticker": "PNC",
        "name": "PNC Financial Services Group Inc.",
        "originalprice": 176
    },
    "GD": {
        "price": 70,
        "weight": "0.150516",
        "ticker": "GD",
        "name": "General Dynamics Corporation",
        "originalprice": 70
    },
    "EW": {
        "price": 154,
        "weight": "0.148774",
        "ticker": "EW",
        "name": "Edwards Lifesciences Corporation",
        "originalprice": 154
    },
    "GIS": {
        "price": 156,
        "weight": "0.148738",
        "ticker": "GIS",
        "name": "General Mills Inc.",
        "originalprice": 156
    },
    "GM": {
        "price": 91,
        "weight": "0.148226",
        "ticker": "GM",
        "name": "General Motors Company",
        "originalprice": 91
    },
    "USB": {
        "price": 77,
        "weight": "0.145853",
        "ticker": "USB",
        "name": "U.S. Bancorp",
        "originalprice": 77
    },
    "MCK": {
        "price": 101,
        "weight": "0.144691",
        "ticker": "MCK",
        "name": "McKesson Corporation",
        "originalprice": 101
    },
    "EMR": {
        "price": 129,
        "weight": "0.144420",
        "ticker": "EMR",
        "name": "Emerson Electric Co.",
        "originalprice": 129
    },
    "MRNA": {
        "price": 132,
        "weight": "0.143599",
        "ticker": "MRNA",
        "name": "Moderna Inc.",
        "originalprice": 132
    },
    "F": {
        "price": 91,
        "weight": "0.142588",
        "ticker": "F",
        "name": "Ford Motor Company",
        "originalprice": 91
    },
    "PXD": {
        "price": 61,
        "weight": "0.141696",
        "ticker": "PXD",
        "name": "Pioneer Natural Resources Company",
        "originalprice": 61
    },
    "APH": {
        "price": 66,
        "weight": "0.141525",
        "ticker": "APH",
        "name": "Amphenol Corporation Class A",
        "originalprice": 66
    },
    "NSC": {
        "price": 65,
        "weight": "0.140483",
        "ticker": "NSC",
        "name": "Norfolk Southern Corporation",
        "originalprice": 65
    },
    "MCO": {
        "price": 162,
        "weight": "0.139491",
        "ticker": "MCO",
        "name": "Moody's Corporation",
        "originalprice": 162
    },
    "MSI": {
        "price": 205,
        "weight": "0.139074",
        "ticker": "MSI",
        "name": "Motorola Solutions Inc.",
        "originalprice": 205
    },
    "NXPI": {
        "price": 219,
        "weight": "0.138746",
        "ticker": "NXPI",
        "name": "NXP Semiconductors NV",
        "originalprice": 219
    },
    "SRE": {
        "price": 76,
        "weight": "0.138612",
        "ticker": "SRE",
        "name": "Sempra Energy",
        "originalprice": 76
    },
    "PSX": {
        "price": 240,
        "weight": "0.137604",
        "ticker": "PSX",
        "name": "Phillips 66",
        "originalprice": 240
    },
    "PSA": {
        "price": 215,
        "weight": "0.137542",
        "ticker": "PSA",
        "name": "Public Storage",
        "originalprice": 215
    },
    "DG": {
        "price": 146,
        "weight": "0.137124",
        "ticker": "DG",
        "name": "Dollar General Corporation",
        "originalprice": 146
    },
    "D": {
        "price": 108,
        "weight": "0.137041",
        "ticker": "D",
        "name": "Dominion Energy Inc",
        "originalprice": 108
    },
    "AEP": {
        "price": 213,
        "weight": "0.136994",
        "ticker": "AEP",
        "name": "American Electric Power Company Inc.",
        "originalprice": 213
    },
    "ROP": {
        "price": 68,
        "weight": "0.136648",
        "ticker": "ROP",
        "name": "Roper Technologies Inc.",
        "originalprice": 68
    },
    "CMG": {
        "price": 165,
        "weight": "0.136377",
        "ticker": "CMG",
        "name": "Chipotle Mexican Grill Inc.",
        "originalprice": 165
    },
    "MCHP": {
        "price": 177,
        "weight": "0.133930",
        "ticker": "MCHP",
        "name": "Microchip Technology Incorporated",
        "originalprice": 177
    },
    "OXY": {
        "price": 242,
        "weight": "0.133596",
        "ticker": "OXY",
        "name": "Occidental Petroleum Corporation",
        "originalprice": 242
    },
    "AZO": {
        "price": 78,
        "weight": "0.133322",
        "ticker": "AZO",
        "name": "AutoZone Inc.",
        "originalprice": 78
    },
    "KMB": {
        "price": 185,
        "weight": "0.132572",
        "ticker": "KMB",
        "name": "Kimberly-Clark Corporation",
        "originalprice": 185
    },
    "TFC": {
        "price": 113,
        "weight": "0.132410",
        "ticker": "TFC",
        "name": "Truist Financial Corporation",
        "originalprice": 113
    },
    "DXCM": {
        "price": 83,
        "weight": "0.130277",
        "ticker": "DXCM",
        "name": "DexCom Inc.",
        "originalprice": 83
    },
    "MSCI": {
        "price": 123,
        "weight": "0.129384",
        "ticker": "MSCI",
        "name": "MSCI Inc. Class A",
        "originalprice": 123
    },
    "MAR": {
        "price": 118,
        "weight": "0.129048",
        "ticker": "MAR",
        "name": "Marriott International Inc. Class A",
        "originalprice": 118
    },
    "ADM": {
        "price": 207,
        "weight": "0.128712",
        "ticker": "ADM",
        "name": "Archer-Daniels-Midland Company",
        "originalprice": 207
    },
    "ADSK": {
        "price": 51,
        "weight": "0.128567",
        "ticker": "ADSK",
        "name": "Autodesk Inc.",
        "originalprice": 51
    },
    "PH": {
        "price": 130,
        "weight": "0.127489",
        "ticker": "PH",
        "name": "Parker-Hannifin Corporation",
        "originalprice": 130
    },
    "CTVA": {
        "price": 55,
        "weight": "0.126457",
        "ticker": "CTVA",
        "name": "Corteva Inc",
        "originalprice": 55
    },
    "FTNT": {
        "price": 196,
        "weight": "0.125799",
        "ticker": "FTNT",
        "name": "Fortinet Inc.",
        "originalprice": 196
    },
    "TT": {
        "price": 150,
        "weight": "0.124189",
        "ticker": "TT",
        "name": "Trane Technologies plc",
        "originalprice": 150
    },
    "EXC": {
        "price": 84,
        "weight": "0.121641",
        "ticker": "EXC",
        "name": "Exelon Corporation",
        "originalprice": 84
    },
    "TEL": {
        "price": 112,
        "weight": "0.121361",
        "ticker": "TEL",
        "name": "TE Connectivity Ltd.",
        "originalprice": 112
    },
    "IDXX": {
        "price": 238,
        "weight": "0.120767",
        "ticker": "IDXX",
        "name": "IDEXX Laboratories Inc.",
        "originalprice": 238
    },
    "JCI": {
        "price": 107,
        "weight": "0.120274",
        "ticker": "JCI",
        "name": "Johnson Controls International plc",
        "originalprice": 107
    },
    "ECL": {
        "price": 120,
        "weight": "0.119486",
        "ticker": "ECL",
        "name": "Ecolab Inc.",
        "originalprice": 120
    },
    "CTAS": {
        "price": 75,
        "weight": "0.119283",
        "ticker": "CTAS",
        "name": "Cintas Corporation",
        "originalprice": 75
    },
    "AJG": {
        "price": 223,
        "weight": "0.118798",
        "ticker": "AJG",
        "name": "Arthur J. Gallagher & Co.",
        "originalprice": 223
    },
    "ANET": {
        "price": 211,
        "weight": "0.118764",
        "ticker": "ANET",
        "name": "Arista Networks Inc.",
        "originalprice": 211
    },
    "MNST": {
        "price": 106,
        "weight": "0.117870",
        "ticker": "MNST",
        "name": "Monster Beverage Corporation",
        "originalprice": 106
    },
    "A": {
        "price": 219,
        "weight": "0.117375",
        "ticker": "A",
        "name": "Agilent Technologies Inc.",
        "originalprice": 219
    },
    "BIIB": {
        "price": 116,
        "weight": "0.117159",
        "ticker": "BIIB",
        "name": "Biogen Inc.",
        "originalprice": 116
    },
    "TRV": {
        "price": 200,
        "weight": "0.116583",
        "ticker": "TRV",
        "name": "Travelers Companies Inc.",
        "originalprice": 200
    },
    "O": {
        "price": 146,
        "weight": "0.115776",
        "ticker": "O",
        "name": "Realty Income Corporation",
        "originalprice": 146
    },
    "SYY": {
        "price": 245,
        "weight": "0.115169",
        "ticker": "SYY",
        "name": "Sysco Corporation",
        "originalprice": 245
    },
    "NEM": {
        "price": 220,
        "weight": "0.114481",
        "ticker": "NEM",
        "name": "Newmont Corporation",
        "originalprice": 220
    },
    "NUE": {
        "price": 134,
        "weight": "0.113090",
        "ticker": "NUE",
        "name": "Nucor Corporation",
        "originalprice": 134
    },
    "TDG": {
        "price": 66,
        "weight": "0.112557",
        "ticker": "TDG",
        "name": "TransDigm Group Incorporated",
        "originalprice": 66
    },
    "DOW": {
        "price": 151,
        "weight": "0.112034",
        "ticker": "DOW",
        "name": "Dow Inc.",
        "originalprice": 151
    },
    "CARR": {
        "price": 101,
        "weight": "0.111510",
        "ticker": "CARR",
        "name": "Carrier Global Corp.",
        "originalprice": 101
    },
    "PCAR": {
        "price": 170,
        "weight": "0.111065",
        "ticker": "PCAR",
        "name": "PACCAR Inc",
        "originalprice": 170
    },
    "MET": {
        "price": 143,
        "weight": "0.110851",
        "ticker": "MET",
        "name": "MetLife Inc.",
        "originalprice": 143
    },
    "HSY": {
        "price": 183,
        "weight": "0.109935",
        "ticker": "HSY",
        "name": "Hershey Company",
        "originalprice": 183
    },
    "LHX": {
        "price": 111,
        "weight": "0.109383",
        "ticker": "LHX",
        "name": "L3Harris Technologies Inc",
        "originalprice": 111
    },
    "AIG": {
        "price": 229,
        "weight": "0.109138",
        "ticker": "AIG",
        "name": "American International Group Inc.",
        "originalprice": 229
    },
    "CHTR": {
        "price": 123,
        "weight": "0.108576",
        "ticker": "CHTR",
        "name": "Charter Communications Inc. Class A",
        "originalprice": 123
    },
    "HES": {
        "price": 209,
        "weight": "0.108549",
        "ticker": "HES",
        "name": "Hess Corporation",
        "originalprice": 209
    },
    "HLT": {
        "price": 183,
        "weight": "0.108165",
        "ticker": "HLT",
        "name": "Hilton Worldwide Holdings Inc",
        "originalprice": 183
    },
    "XEL": {
        "price": 117,
        "weight": "0.107948",
        "ticker": "XEL",
        "name": "Xcel Energy Inc.",
        "originalprice": 117
    },
    "STZ": {
        "price": 76,
        "weight": "0.107603",
        "ticker": "STZ",
        "name": "Constellation Brands Inc. Class A",
        "originalprice": 76
    },
    "YUM": {
        "price": 178,
        "weight": "0.107392",
        "ticker": "YUM",
        "name": "Yum! Brands Inc.",
        "originalprice": 178
    },
    "PAYX": {
        "price": 210,
        "weight": "0.107375",
        "ticker": "PAYX",
        "name": "Paychex Inc.",
        "originalprice": 210
    },
    "AFL": {
        "price": 145,
        "weight": "0.107236",
        "ticker": "AFL",
        "name": "Aflac Incorporated",
        "originalprice": 145
    },
    "IQV": {
        "price": 234,
        "weight": "0.106776",
        "ticker": "IQV",
        "name": "IQVIA Holdings Inc",
        "originalprice": 234
    },
    "COF": {
        "price": 66,
        "weight": "0.106223",
        "ticker": "COF",
        "name": "Capital One Financial Corp",
        "originalprice": 66
    },
    "ROST": {
        "price": 230,
        "weight": "0.105906",
        "ticker": "ROST",
        "name": "Ross Stores Inc.",
        "originalprice": 230
    },
    "WMB": {
        "price": 203,
        "weight": "0.105282",
        "ticker": "WMB",
        "name": "Williams Companies Inc.",
        "originalprice": 203
    },
    "ILMN": {
        "price": 77,
        "weight": "0.104461",
        "ticker": "ILMN",
        "name": "Illumina Inc.",
        "originalprice": 77
    },
    "CNC": {
        "price": 158,
        "weight": "0.104304",
        "ticker": "CNC",
        "name": "Centene Corporation",
        "originalprice": 158
    },
    "ON": {
        "price": 171,
        "weight": "0.104143",
        "ticker": "ON",
        "name": "ON Semiconductor Corporation",
        "originalprice": 171
    },
    "SPG": {
        "price": 181,
        "weight": "0.103852",
        "ticker": "SPG",
        "name": "Simon Property Group Inc.",
        "originalprice": 181
    },
    "OTIS": {
        "price": 92,
        "weight": "0.102524",
        "ticker": "OTIS",
        "name": "Otis Worldwide Corporation",
        "originalprice": 92
    },
    "KMI": {
        "price": 208,
        "weight": "0.100771",
        "ticker": "KMI",
        "name": "Kinder Morgan Inc Class P",
        "originalprice": 208
    },
    "ED": {
        "price": 80,
        "weight": "0.099105",
        "ticker": "ED",
        "name": "Consolidated Edison Inc.",
        "originalprice": 80
    },
    "WELL": {
        "price": 135,
        "weight": "0.098851",
        "ticker": "WELL",
        "name": "Welltower Inc.",
        "originalprice": 135
    },
    "MTD": {
        "price": 75,
        "weight": "0.098503",
        "ticker": "MTD",
        "name": "Mettler-Toledo International Inc.",
        "originalprice": 75
    },
    "CMI": {
        "price": 105,
        "weight": "0.097679",
        "ticker": "CMI",
        "name": "Cummins Inc.",
        "originalprice": 105
    },
    "ROK": {
        "price": 69,
        "weight": "0.097069",
        "ticker": "ROK",
        "name": "Rockwell Automation Inc.",
        "originalprice": 69
    },
    "BK": {
        "price": 61,
        "weight": "0.097009",
        "ticker": "BK",
        "name": "Bank of New York Mellon Corp",
        "originalprice": 61
    },
    "WBD": {
        "price": 186,
        "weight": "0.096910",
        "ticker": "WBD",
        "name": "Warner Bros. Discovery Inc. Series A",
        "originalprice": 186
    },
    "AME": {
        "price": 53,
        "weight": "0.096868",
        "ticker": "AME",
        "name": "AMETEK Inc.",
        "originalprice": 53
    },
    "DVN": {
        "price": 81,
        "weight": "0.095904",
        "ticker": "DVN",
        "name": "Devon Energy Corporation",
        "originalprice": 81
    },
    "DD": {
        "price": 169,
        "weight": "0.095555",
        "ticker": "DD",
        "name": "DuPont de Nemours Inc.",
        "originalprice": 169
    },
    "AMP": {
        "price": 229,
        "weight": "0.094307",
        "ticker": "AMP",
        "name": "Ameriprise Financial Inc.",
        "originalprice": 229
    },
    "VICI": {
        "price": 185,
        "weight": "0.094286",
        "ticker": "VICI",
        "name": "VICI Properties Inc",
        "originalprice": 185
    },
    "KR": {
        "price": 85,
        "weight": "0.094244",
        "ticker": "KR",
        "name": "Kroger Co.",
        "originalprice": 85
    },
    "RMD": {
        "price": 191,
        "weight": "0.093278",
        "ticker": "RMD",
        "name": "ResMed Inc.",
        "originalprice": 191
    },
    "CPRT": {
        "price": 156,
        "weight": "0.092839",
        "ticker": "CPRT",
        "name": "Copart Inc.",
        "originalprice": 156
    },
    "EA": {
        "price": 199,
        "weight": "0.092432",
        "ticker": "EA",
        "name": "Electronic Arts Inc.",
        "originalprice": 199
    },
    "FIS": {
        "price": 104,
        "weight": "0.091275",
        "ticker": "FIS",
        "name": "Fidelity National Information Services Inc.",
        "originalprice": 104
    },
    "PEG": {
        "price": 154,
        "weight": "0.091032",
        "ticker": "PEG",
        "name": "Public Service Enterprise Group Inc",
        "originalprice": 154
    },
    "CTSH": {
        "price": 130,
        "weight": "0.090890",
        "ticker": "CTSH",
        "name": "Cognizant Technology Solutions Corporation Class A",
        "originalprice": 130
    },
    "KHC": {
        "price": 120,
        "weight": "0.090886",
        "ticker": "KHC",
        "name": "Kraft Heinz Company",
        "originalprice": 120
    },
    "PPG": {
        "price": 73,
        "weight": "0.089651",
        "ticker": "PPG",
        "name": "PPG Industries Inc.",
        "originalprice": 73
    },
    "ODFL": {
        "price": 245,
        "weight": "0.089105",
        "ticker": "ODFL",
        "name": "Old Dominion Freight Line Inc.",
        "originalprice": 245
    },
    "FAST": {
        "price": 57,
        "weight": "0.089041",
        "ticker": "FAST",
        "name": "Fastenal Company",
        "originalprice": 57
    },
    "GWW": {
        "price": 249,
        "weight": "0.089035",
        "ticker": "GWW",
        "name": "W.W. Grainger Inc.",
        "originalprice": 249
    },
    "PRU": {
        "price": 122,
        "weight": "0.088693",
        "ticker": "PRU",
        "name": "Prudential Financial Inc.",
        "originalprice": 122
    },
    "VRSK": {
        "price": 112,
        "weight": "0.088072",
        "ticker": "VRSK",
        "name": "Verisk Analytics Inc",
        "originalprice": 112
    },
    "GEHC": {
        "price": 246,
        "weight": "0.087924",
        "ticker": "GEHC",
        "name": "GE Healthcare Technologies Inc.",
        "originalprice": 246
    },
    "DHI": {
        "price": 247,
        "weight": "0.087871",
        "ticker": "DHI",
        "name": "D.R. Horton Inc.",
        "originalprice": 247
    },
    "WEC": {
        "price": 179,
        "weight": "0.087837",
        "ticker": "WEC",
        "name": "WEC Energy Group Inc",
        "originalprice": 179
    },
    "APTV": {
        "price": 217,
        "weight": "0.087800",
        "ticker": "APTV",
        "name": "Aptiv PLC",
        "originalprice": 217
    },
    "KDP": {
        "price": 147,
        "weight": "0.087679",
        "ticker": "KDP",
        "name": "Keurig Dr Pepper Inc.",
        "originalprice": 147
    },
    "DLTR": {
        "price": 55,
        "weight": "0.087327",
        "ticker": "DLTR",
        "name": "Dollar Tree Inc.",
        "originalprice": 55
    },
    "ALL": {
        "price": 141,
        "weight": "0.085294",
        "ticker": "ALL",
        "name": "Allstate Corporation",
        "originalprice": 141
    },
    "BKR": {
        "price": 125,
        "weight": "0.084881",
        "ticker": "BKR",
        "name": "Baker Hughes Company Class A",
        "originalprice": 125
    },
    "ANSS": {
        "price": 232,
        "weight": "0.083872",
        "ticker": "ANSS",
        "name": "ANSYS Inc.",
        "originalprice": 232
    },
    "KEYS": {
        "price": 230,
        "weight": "0.083585",
        "ticker": "KEYS",
        "name": "Keysight Technologies Inc",
        "originalprice": 230
    },
    "HAL": {
        "price": 206,
        "weight": "0.083158",
        "ticker": "HAL",
        "name": "Halliburton Company",
        "originalprice": 206
    },
    "AWK": {
        "price": 188,
        "weight": "0.083137",
        "ticker": "AWK",
        "name": "American Water Works Company Inc.",
        "originalprice": 188
    },
    "OKE": {
        "price": 108,
        "weight": "0.082402",
        "ticker": "OKE",
        "name": "ONEOK Inc.",
        "originalprice": 108
    },
    "ENPH": {
        "price": 176,
        "weight": "0.082394",
        "ticker": "ENPH",
        "name": "Enphase Energy Inc.",
        "originalprice": 176
    },
    "SBAC": {
        "price": 190,
        "weight": "0.082003",
        "ticker": "SBAC",
        "name": "SBA Communications Corp. Class A",
        "originalprice": 190
    },
    "CSGP": {
        "price": 86,
        "weight": "0.081718",
        "ticker": "CSGP",
        "name": "CoStar Group Inc.",
        "originalprice": 86
    },
    "RSG": {
        "price": 112,
        "weight": "0.081381",
        "ticker": "RSG",
        "name": "Republic Services Inc.",
        "originalprice": 112
    },
    "ULTA": {
        "price": 200,
        "weight": "0.080964",
        "ticker": "ULTA",
        "name": "Ulta Beauty Inc.",
        "originalprice": 200
    },
    "ES": {
        "price": 137,
        "weight": "0.080344",
        "ticker": "ES",
        "name": "Eversource Energy",
        "originalprice": 137
    },
    "GPN": {
        "price": 166,
        "weight": "0.080169",
        "ticker": "GPN",
        "name": "Global Payments Inc.",
        "originalprice": 166
    },
    "DLR": {
        "price": 119,
        "weight": "0.078917",
        "ticker": "DLR",
        "name": "Digital Realty Trust Inc.",
        "originalprice": 119
    },
    "URI": {
        "price": 175,
        "weight": "0.078898",
        "ticker": "URI",
        "name": "United Rentals Inc.",
        "originalprice": 175
    },
    "EIX": {
        "price": 55,
        "weight": "0.078818",
        "ticker": "EIX",
        "name": "Edison International",
        "originalprice": 55
    },
    "ZBH": {
        "price": 199,
        "weight": "0.078426",
        "ticker": "ZBH",
        "name": "Zimmer Biomet Holdings Inc.",
        "originalprice": 199
    },
    "GLW": {
        "price": 72,
        "weight": "0.078276",
        "ticker": "GLW",
        "name": "Corning Inc",
        "originalprice": 72
    },
    "DFS": {
        "price": 122,
        "weight": "0.077365",
        "ticker": "DFS",
        "name": "Discover Financial Services",
        "originalprice": 122
    },
    "STT": {
        "price": 156,
        "weight": "0.077303",
        "ticker": "STT",
        "name": "State Street Corporation",
        "originalprice": 156
    },
    "ALB": {
        "price": 241,
        "weight": "0.076822",
        "ticker": "ALB",
        "name": "Albemarle Corporation",
        "originalprice": 241
    },
    "LEN": {
        "price": 182,
        "weight": "0.076816",
        "ticker": "LEN",
        "name": "Lennar Corporation Class A",
        "originalprice": 182
    },
    "ABC": {
        "price": 232,
        "weight": "0.076093",
        "ticker": "ABC",
        "name": "AmerisourceBergen Corporation",
        "originalprice": 232
    },
    "CDW": {
        "price": 117,
        "weight": "0.075996",
        "ticker": "CDW",
        "name": "CDW Corporation",
        "originalprice": 117
    },
    "PCG": {
        "price": 247,
        "weight": "0.075429",
        "ticker": "PCG",
        "name": "PG&E Corporation",
        "originalprice": 247
    },
    "TSCO": {
        "price": 242,
        "weight": "0.075130",
        "ticker": "TSCO",
        "name": "Tractor Supply Company",
        "originalprice": 242
    },
    "WST": {
        "price": 185,
        "weight": "0.074520",
        "ticker": "WST",
        "name": "West Pharmaceutical Services Inc.",
        "originalprice": 185
    },
    "IT": {
        "price": 163,
        "weight": "0.074305",
        "ticker": "IT",
        "name": "Gartner Inc.",
        "originalprice": 163
    },
    "CEG": {
        "price": 123,
        "weight": "0.074053",
        "ticker": "CEG",
        "name": "Constellation Energy Corporation",
        "originalprice": 123
    },
    "ACGL": {
        "price": 127,
        "weight": "0.074005",
        "ticker": "ACGL",
        "name": "Arch Capital Group Ltd.",
        "originalprice": 127
    },
    "HPQ": {
        "price": 149,
        "weight": "0.073763",
        "ticker": "HPQ",
        "name": "HP Inc.",
        "originalprice": 149
    },
    "WBA": {
        "price": 61,
        "weight": "0.073290",
        "ticker": "WBA",
        "name": "Walgreens Boots Alliance Inc.",
        "originalprice": 61
    },
    "TROW": {
        "price": 186,
        "weight": "0.073123",
        "ticker": "TROW",
        "name": "T. Rowe Price Group",
        "originalprice": 186
    },
    "WTW": {
        "price": 79,
        "weight": "0.073063",
        "ticker": "WTW",
        "name": "Willis Towers Watson Public Limited Company",
        "originalprice": 79
    },
    "FANG": {
        "price": 103,
        "weight": "0.072346",
        "ticker": "FANG",
        "name": "Diamondback Energy Inc.",
        "originalprice": 103
    },
    "EFX": {
        "price": 92,
        "weight": "0.072084",
        "ticker": "EFX",
        "name": "Equifax Inc.",
        "originalprice": 92
    },
    "PWR": {
        "price": 117,
        "weight": "0.070274",
        "ticker": "PWR",
        "name": "Quanta Services Inc.",
        "originalprice": 117
    },
    "EBAY": {
        "price": 218,
        "weight": "0.070250",
        "ticker": "EBAY",
        "name": "eBay Inc.",
        "originalprice": 218
    },
    "FTV": {
        "price": 117,
        "weight": "0.070222",
        "ticker": "FTV",
        "name": "Fortive Corp.",
        "originalprice": 117
    },
    "LYB": {
        "price": 77,
        "weight": "0.069454",
        "ticker": "LYB",
        "name": "LyondellBasell Industries NV",
        "originalprice": 77
    },
    "IR": {
        "price": 215,
        "weight": "0.068556",
        "ticker": "IR",
        "name": "Ingersoll Rand Inc.",
        "originalprice": 215
    },
    "GPC": {
        "price": 101,
        "weight": "0.068520",
        "ticker": "GPC",
        "name": "Genuine Parts Company",
        "originalprice": 101
    },
    "IFF": {
        "price": 209,
        "weight": "0.068042",
        "ticker": "IFF",
        "name": "International Flavors & Fragrances Inc.",
        "originalprice": 209
    },
    "AVB": {
        "price": 214,
        "weight": "0.067348",
        "ticker": "AVB",
        "name": "AvalonBay Communities Inc.",
        "originalprice": 214
    },
    "ALGN": {
        "price": 145,
        "weight": "0.066684",
        "ticker": "ALGN",
        "name": "Align Technology Inc.",
        "originalprice": 145
    },
    "VMC": {
        "price": 216,
        "weight": "0.066675",
        "ticker": "VMC",
        "name": "Vulcan Materials Company",
        "originalprice": 216
    },
    "CBRE": {
        "price": 191,
        "weight": "0.065985",
        "ticker": "CBRE",
        "name": "CBRE Group Inc. Class A",
        "originalprice": 191
    },
    "AEE": {
        "price": 106,
        "weight": "0.065892",
        "ticker": "AEE",
        "name": "Ameren Corporation",
        "originalprice": 106
    },
    "MPWR": {
        "price": 212,
        "weight": "0.065788",
        "ticker": "MPWR",
        "name": "Monolithic Power Systems Inc.",
        "originalprice": 212
    },
    "PODD": {
        "price": 105,
        "weight": "0.065122",
        "ticker": "PODD",
        "name": "Insulet Corporation",
        "originalprice": 105
    },
    "HIG": {
        "price": 200,
        "weight": "0.064611",
        "ticker": "HIG",
        "name": "Hartford Financial Services Group Inc.",
        "originalprice": 200
    },
    "DAL": {
        "price": 204,
        "weight": "0.064593",
        "ticker": "DAL",
        "name": "Delta Air Lines Inc.",
        "originalprice": 204
    },
    "ETR": {
        "price": 234,
        "weight": "0.064286",
        "ticker": "ETR",
        "name": "Entergy Corporation",
        "originalprice": 234
    },
    "MLM": {
        "price": 147,
        "weight": "0.064266",
        "ticker": "MLM",
        "name": "Martin Marietta Materials Inc.",
        "originalprice": 147
    },
    "WY": {
        "price": 135,
        "weight": "0.063819",
        "ticker": "WY",
        "name": "Weyerhaeuser Company",
        "originalprice": 135
    },
    "FE": {
        "price": 69,
        "weight": "0.063125",
        "ticker": "FE",
        "name": "FirstEnergy Corp.",
        "originalprice": 69
    },
    "EXR": {
        "price": 132,
        "weight": "0.062818",
        "ticker": "EXR",
        "name": "Extra Space Storage Inc.",
        "originalprice": 132
    },
    "CHD": {
        "price": 94,
        "weight": "0.062540",
        "ticker": "CHD",
        "name": "Church & Dwight Co. Inc.",
        "originalprice": 94
    },
    "FSLR": {
        "price": 148,
        "weight": "0.062356",
        "ticker": "FSLR",
        "name": "First Solar Inc.",
        "originalprice": 148
    },
    "DTE": {
        "price": 78,
        "weight": "0.062186",
        "ticker": "DTE",
        "name": "DTE Energy Company",
        "originalprice": 78
    },
    "DOV": {
        "price": 220,
        "weight": "0.061289",
        "ticker": "DOV",
        "name": "Dover Corporation",
        "originalprice": 220
    },
    "TDY": {
        "price": 105,
        "weight": "0.060678",
        "ticker": "TDY",
        "name": "Teledyne Technologies Incorporated",
        "originalprice": 105
    },
    "BAX": {
        "price": 184,
        "weight": "0.060077",
        "ticker": "BAX",
        "name": "Baxter International Inc.",
        "originalprice": 184
    },
    "MKC": {
        "price": 241,
        "weight": "0.059858",
        "ticker": "MKC",
        "name": "McCormick & Company Incorporated",
        "originalprice": 241
    },
    "MTB": {
        "price": 214,
        "weight": "0.059787",
        "ticker": "MTB",
        "name": "M&T Bank Corporation",
        "originalprice": 214
    },
    "HPE": {
        "price": 122,
        "weight": "0.059774",
        "ticker": "HPE",
        "name": "Hewlett Packard Enterprise Co.",
        "originalprice": 122
    },
    "PPL": {
        "price": 159,
        "weight": "0.059523",
        "ticker": "PPL",
        "name": "PPL Corporation",
        "originalprice": 159
    },
    "HOLX": {
        "price": 97,
        "weight": "0.059261",
        "ticker": "HOLX",
        "name": "Hologic Inc.",
        "originalprice": 97
    },
    "EQR": {
        "price": 84,
        "weight": "0.058869",
        "ticker": "EQR",
        "name": "Equity Residential",
        "originalprice": 84
    },
    "LH": {
        "price": 161,
        "weight": "0.058702",
        "ticker": "LH",
        "name": "Laboratory Corporation of America Holdings",
        "originalprice": 161
    },
    "CAH": {
        "price": 212,
        "weight": "0.058232",
        "ticker": "CAH",
        "name": "Cardinal Health Inc.",
        "originalprice": 212
    },
    "ARE": {
        "price": 233,
        "weight": "0.057668",
        "ticker": "ARE",
        "name": "Alexandria Real Estate Equities Inc.",
        "originalprice": 233
    },
    "VRSN": {
        "price": 178,
        "weight": "0.056516",
        "ticker": "VRSN",
        "name": "VeriSign Inc.",
        "originalprice": 178
    },
    "CLX": {
        "price": 198,
        "weight": "0.056337",
        "ticker": "CLX",
        "name": "Clorox Company",
        "originalprice": 198
    },
    "CTRA": {
        "price": 208,
        "weight": "0.056147",
        "ticker": "CTRA",
        "name": "Coterra Energy Inc.",
        "originalprice": 208
    },
    "OMC": {
        "price": 82,
        "weight": "0.055767",
        "ticker": "OMC",
        "name": "Omnicom Group Inc",
        "originalprice": 82
    },
    "LUV": {
        "price": 181,
        "weight": "0.055707",
        "ticker": "LUV",
        "name": "Southwest Airlines Co.",
        "originalprice": 181
    },
    "DRI": {
        "price": 67,
        "weight": "0.055426",
        "ticker": "DRI",
        "name": "Darden Restaurants Inc.",
        "originalprice": 67
    },
    "SWKS": {
        "price": 79,
        "weight": "0.055250",
        "ticker": "SWKS",
        "name": "Skyworks Solutions Inc.",
        "originalprice": 79
    },
    "STE": {
        "price": 157,
        "weight": "0.055227",
        "ticker": "STE",
        "name": "STERIS Plc",
        "originalprice": 157
    },
    "TTWO": {
        "price": 59,
        "weight": "0.054591",
        "ticker": "TTWO",
        "name": "Take-Two Interactive Software Inc.",
        "originalprice": 59
    },
    "CNP": {
        "price": 108,
        "weight": "0.054546",
        "ticker": "CNP",
        "name": "CenterPoint Energy Inc.",
        "originalprice": 108
    },
    "XYL": {
        "price": 205,
        "weight": "0.054510",
        "ticker": "XYL",
        "name": "Xylem Inc.",
        "originalprice": 205
    },
    "STLD": {
        "price": 139,
        "weight": "0.054494",
        "ticker": "STLD",
        "name": "Steel Dynamics Inc.",
        "originalprice": 139
    },
    "NDAQ": {
        "price": 214,
        "weight": "0.053811",
        "ticker": "NDAQ",
        "name": "Nasdaq Inc.",
        "originalprice": 214
    },
    "LVS": {
        "price": 233,
        "weight": "0.053607",
        "ticker": "LVS",
        "name": "Las Vegas Sands Corp.",
        "originalprice": 233
    },
    "WAT": {
        "price": 159,
        "weight": "0.053585",
        "ticker": "WAT",
        "name": "Waters Corporation",
        "originalprice": 159
    },
    "COO": {
        "price": 126,
        "weight": "0.053554",
        "ticker": "COO",
        "name": "Cooper Companies Inc.",
        "originalprice": 126
    },
    "NTRS": {
        "price": 123,
        "weight": "0.053394",
        "ticker": "NTRS",
        "name": "Northern Trust Corporation",
        "originalprice": 123
    },
    "FITB": {
        "price": 216,
        "weight": "0.053267",
        "ticker": "FITB",
        "name": "Fifth Third Bancorp",
        "originalprice": 216
    },
    "WAB": {
        "price": 75,
        "weight": "0.053024",
        "ticker": "WAB",
        "name": "Westinghouse Air Brake Technologies Corporation",
        "originalprice": 75
    },
    "CMS": {
        "price": 147,
        "weight": "0.052632",
        "ticker": "CMS",
        "name": "CMS Energy Corporation",
        "originalprice": 147
    },
    "VTR": {
        "price": 178,
        "weight": "0.052517",
        "ticker": "VTR",
        "name": "Ventas Inc.",
        "originalprice": 178
    },
    "RJF": {
        "price": 237,
        "weight": "0.052485",
        "ticker": "RJF",
        "name": "Raymond James Financial Inc.",
        "originalprice": 237
    },
    "INVH": {
        "price": 93,
        "weight": "0.052284",
        "ticker": "INVH",
        "name": "Invitation Homes Inc.",
        "originalprice": 93
    },
    "CAG": {
        "price": 62,
        "weight": "0.052261",
        "ticker": "CAG",
        "name": "Conagra Brands Inc.",
        "originalprice": 62
    },
    "FICO": {
        "price": 84,
        "weight": "0.051730",
        "ticker": "FICO",
        "name": "Fair Isaac Corporation",
        "originalprice": 84
    },
    "CINF": {
        "price": 243,
        "weight": "0.051605",
        "ticker": "CINF",
        "name": "Cincinnati Financial Corporation",
        "originalprice": 243
    },
    "RF": {
        "price": 118,
        "weight": "0.050702",
        "ticker": "RF",
        "name": "Regions Financial Corporation",
        "originalprice": 118
    },
    "MAA": {
        "price": 148,
        "weight": "0.050636",
        "ticker": "MAA",
        "name": "Mid-America Apartment Communities Inc.",
        "originalprice": 148
    },
    "BR": {
        "price": 65,
        "weight": "0.050340",
        "ticker": "BR",
        "name": "Broadridge Financial Solutions Inc.",
        "originalprice": 65
    },
    "K": {
        "price": 143,
        "weight": "0.050311",
        "ticker": "K",
        "name": "Kellogg Company",
        "originalprice": 143
    },
    "EXPD": {
        "price": 95,
        "weight": "0.050234",
        "ticker": "EXPD",
        "name": "Expeditors International of Washington Inc.",
        "originalprice": 95
    },
    "IEX": {
        "price": 71,
        "weight": "0.050194",
        "ticker": "IEX",
        "name": "IDEX Corporation",
        "originalprice": 71
    },
    "BALL": {
        "price": 233,
        "weight": "0.050119",
        "ticker": "BALL",
        "name": "Ball Corporation",
        "originalprice": 233
    },
    "TSN": {
        "price": 214,
        "weight": "0.050042",
        "ticker": "TSN",
        "name": "Tyson Foods Inc. Class A",
        "originalprice": 214
    },
    "PFG": {
        "price": 225,
        "weight": "0.049737",
        "ticker": "PFG",
        "name": "Principal Financial Group Inc.",
        "originalprice": 225
    },
    "SJM": {
        "price": 121,
        "weight": "0.049676",
        "ticker": "SJM",
        "name": "J.M. Smucker Company",
        "originalprice": 121
    },
    "TER": {
        "price": 205,
        "weight": "0.049577",
        "ticker": "TER",
        "name": "Teradyne Inc.",
        "originalprice": 205
    },
    "EPAM": {
        "price": 227,
        "weight": "0.049504",
        "ticker": "EPAM",
        "name": "EPAM Systems Inc.",
        "originalprice": 227
    },
    "AMCR": {
        "price": 249,
        "weight": "0.049233",
        "ticker": "AMCR",
        "name": "Amcor PLC",
        "originalprice": 249
    },
    "PKI": {
        "price": 161,
        "weight": "0.048866",
        "ticker": "PKI",
        "name": "PerkinElmer Inc.",
        "originalprice": 161
    },
    "SEDG": {
        "price": 223,
        "weight": "0.048864",
        "ticker": "SEDG",
        "name": "SolarEdge Technologies Inc.",
        "originalprice": 223
    },
    "NVR": {
        "price": 177,
        "weight": "0.048119",
        "ticker": "NVR",
        "name": "NVR Inc.",
        "originalprice": 177
    },
    "TRGP": {
        "price": 97,
        "weight": "0.047521",
        "ticker": "TRGP",
        "name": "Targa Resources Corp.",
        "originalprice": 97
    },
    "ATO": {
        "price": 183,
        "weight": "0.047326",
        "ticker": "ATO",
        "name": "Atmos Energy Corporation",
        "originalprice": 183
    },
    "ZBRA": {
        "price": 123,
        "weight": "0.047016",
        "ticker": "ZBRA",
        "name": "Zebra Technologies Corporation Class A",
        "originalprice": 123
    },
    "HBAN": {
        "price": 162,
        "weight": "0.046965",
        "ticker": "HBAN",
        "name": "Huntington Bancshares Incorporated",
        "originalprice": 162
    },
    "DGX": {
        "price": 196,
        "weight": "0.046764",
        "ticker": "DGX",
        "name": "Quest Diagnostics Incorporated",
        "originalprice": 196
    },
    "AES": {
        "price": 71,
        "weight": "0.046493",
        "ticker": "AES",
        "name": "AES Corporation",
        "originalprice": 71
    },
    "FDS": {
        "price": 247,
        "weight": "0.046396",
        "ticker": "FDS",
        "name": "FactSet Research Systems Inc.",
        "originalprice": 247
    },
    "HWM": {
        "price": 65,
        "weight": "0.045510",
        "ticker": "HWM",
        "name": "Howmet Aerospace Inc.",
        "originalprice": 65
    },
    "MOH": {
        "price": 75,
        "weight": "0.045447",
        "ticker": "MOH",
        "name": "Molina Healthcare Inc.",
        "originalprice": 75
    },
    "MOS": {
        "price": 243,
        "weight": "0.045428",
        "ticker": "MOS",
        "name": "Mosaic Company",
        "originalprice": 243
    },
    "FMC": {
        "price": 135,
        "weight": "0.044816",
        "ticker": "FMC",
        "name": "FMC Corporation",
        "originalprice": 135
    },
    "GRMN": {
        "price": 194,
        "weight": "0.044796",
        "ticker": "GRMN",
        "name": "Garmin Ltd.",
        "originalprice": 194
    },
    "FLT": {
        "price": 158,
        "weight": "0.044700",
        "ticker": "FLT",
        "name": "FLEETCOR Technologies Inc.",
        "originalprice": 158
    },
    "BBY": {
        "price": 110,
        "weight": "0.044660",
        "ticker": "BBY",
        "name": "Best Buy Co. Inc.",
        "originalprice": 110
    },
    "CFG": {
        "price": 227,
        "weight": "0.044469",
        "ticker": "CFG",
        "name": "Citizens Financial Group Inc.",
        "originalprice": 227
    },
    "IRM": {
        "price": 168,
        "weight": "0.044463",
        "ticker": "IRM",
        "name": "Iron Mountain Inc.",
        "originalprice": 168
    },
    "MRO": {
        "price": 69,
        "weight": "0.044392",
        "ticker": "MRO",
        "name": "Marathon Oil Corporation",
        "originalprice": 69
    },
    "J": {
        "price": 100,
        "weight": "0.044027",
        "ticker": "J",
        "name": "Jacobs Solutions Inc.",
        "originalprice": 100
    },
    "TXT": {
        "price": 87,
        "weight": "0.043695",
        "ticker": "TXT",
        "name": "Textron Inc.",
        "originalprice": 87
    },
    "LW": {
        "price": 193,
        "weight": "0.043399",
        "ticker": "LW",
        "name": "Lamb Weston Holdings Inc.",
        "originalprice": 193
    },
    "MKTX": {
        "price": 133,
        "weight": "0.042885",
        "ticker": "MKTX",
        "name": "MarketAxess Holdings Inc.",
        "originalprice": 133
    },
    "PAYC": {
        "price": 88,
        "weight": "0.042461",
        "ticker": "PAYC",
        "name": "Paycom Software Inc.",
        "originalprice": 88
    },
    "BG": {
        "price": 182,
        "weight": "0.042274",
        "ticker": "BG",
        "name": "Bunge Limited",
        "originalprice": 182
    },
    "TYL": {
        "price": 95,
        "weight": "0.042238",
        "ticker": "TYL",
        "name": "Tyler Technologies Inc.",
        "originalprice": 95
    },
    "EXPE": {
        "price": 87,
        "weight": "0.042182",
        "ticker": "EXPE",
        "name": "Expedia Group Inc.",
        "originalprice": 87
    },
    "UAL": {
        "price": 159,
        "weight": "0.042124",
        "ticker": "UAL",
        "name": "United Airlines Holdings Inc.",
        "originalprice": 159
    },
    "AVY": {
        "price": 135,
        "weight": "0.042020",
        "ticker": "AVY",
        "name": "Avery Dennison Corporation",
        "originalprice": 135
    },
    "IPG": {
        "price": 152,
        "weight": "0.041773",
        "ticker": "IPG",
        "name": "Interpublic Group of Companies Inc.",
        "originalprice": 152
    },
    "RCL": {
        "price": 147,
        "weight": "0.041640",
        "ticker": "RCL",
        "name": "Royal Caribbean Group",
        "originalprice": 147
    },
    "LKQ": {
        "price": 202,
        "weight": "0.041604",
        "ticker": "LKQ",
        "name": "LKQ Corporation",
        "originalprice": 202
    },
    "CF": {
        "price": 141,
        "weight": "0.041578",
        "ticker": "CF",
        "name": "CF Industries Holdings Inc.",
        "originalprice": 141
    },
    "JBHT": {
        "price": 191,
        "weight": "0.041543",
        "ticker": "JBHT",
        "name": "J.B. Hunt Transport Services Inc.",
        "originalprice": 191
    },
    "RE": {
        "price": 104,
        "weight": "0.041312",
        "ticker": "RE",
        "name": "Everest Re Group Ltd.",
        "originalprice": 104
    },
    "CBOE": {
        "price": 185,
        "weight": "0.041064",
        "ticker": "CBOE",
        "name": "Cboe Global Markets Inc",
        "originalprice": 185
    },
    "EVRG": {
        "price": 162,
        "weight": "0.040976",
        "ticker": "EVRG",
        "name": "Evergy Inc.",
        "originalprice": 162
    },
    "MGM": {
        "price": 193,
        "weight": "0.040708",
        "ticker": "MGM",
        "name": "MGM Resorts International",
        "originalprice": 193
    },
    "ETSY": {
        "price": 153,
        "weight": "0.040207",
        "ticker": "ETSY",
        "name": "Etsy Inc.",
        "originalprice": 153
    },
    "NTAP": {
        "price": 73,
        "weight": "0.040093",
        "ticker": "NTAP",
        "name": "NetApp Inc.",
        "originalprice": 73
    },
    "PTC": {
        "price": 97,
        "weight": "0.039501",
        "ticker": "PTC",
        "name": "PTC Inc.",
        "originalprice": 97
    },
    "BRO": {
        "price": 107,
        "weight": "0.039303",
        "ticker": "BRO",
        "name": "Brown & Brown Inc.",
        "originalprice": 107
    },
    "LNT": {
        "price": 147,
        "weight": "0.039223",
        "ticker": "LNT",
        "name": "Alliant Energy Corp",
        "originalprice": 147
    },
    "INCY": {
        "price": 69,
        "weight": "0.038896",
        "ticker": "INCY",
        "name": "Incyte Corporation",
        "originalprice": 69
    },
    "ESS": {
        "price": 144,
        "weight": "0.038608",
        "ticker": "ESS",
        "name": "Essex Property Trust Inc.",
        "originalprice": 144
    },
    "PHM": {
        "price": 150,
        "weight": "0.038581",
        "ticker": "PHM",
        "name": "PulteGroup Inc.",
        "originalprice": 150
    },
    "POOL": {
        "price": 245,
        "weight": "0.038572",
        "ticker": "POOL",
        "name": "Pool Corporation",
        "originalprice": 245
    },
    "PKG": {
        "price": 248,
        "weight": "0.038063",
        "ticker": "PKG",
        "name": "Packaging Corporation of America",
        "originalprice": 248
    },
    "SNA": {
        "price": 158,
        "weight": "0.037988",
        "ticker": "SNA",
        "name": "Snap-on Incorporated",
        "originalprice": 158
    },
    "TRMB": {
        "price": 141,
        "weight": "0.037563",
        "ticker": "TRMB",
        "name": "Trimble Inc.",
        "originalprice": 141
    },
    "IP": {
        "price": 90,
        "weight": "0.037451",
        "ticker": "IP",
        "name": "International Paper Company",
        "originalprice": 90
    },
    "STX": {
        "price": 215,
        "weight": "0.037257",
        "ticker": "STX",
        "name": "Seagate Technology Holdings PLC",
        "originalprice": 215
    },
    "WRB": {
        "price": 117,
        "weight": "0.037161",
        "ticker": "WRB",
        "name": "W. R. Berkley Corporation",
        "originalprice": 117
    },
    "SYF": {
        "price": 64,
        "weight": "0.036847",
        "ticker": "SYF",
        "name": "Synchrony Financial",
        "originalprice": 64
    },
    "LDOS": {
        "price": 187,
        "weight": "0.036706",
        "ticker": "LDOS",
        "name": "Leidos Holdings Inc.",
        "originalprice": 187
    },
    "UDR": {
        "price": 205,
        "weight": "0.035984",
        "ticker": "UDR",
        "name": "UDR Inc.",
        "originalprice": 205
    },
    "AKAM": {
        "price": 239,
        "weight": "0.035709",
        "ticker": "AKAM",
        "name": "Akamai Technologies Inc.",
        "originalprice": 239
    },
    "WDC": {
        "price": 134,
        "weight": "0.035154",
        "ticker": "WDC",
        "name": "Western Digital Corporation",
        "originalprice": 134
    },
    "PEAK": {
        "price": 235,
        "weight": "0.035023",
        "ticker": "PEAK",
        "name": "Healthpeak Properties Inc.",
        "originalprice": 235
    },
    "NDSN": {
        "price": 211,
        "weight": "0.034683",
        "ticker": "NDSN",
        "name": "Nordson Corporation",
        "originalprice": 211
    },
    "DPZ": {
        "price": 105,
        "weight": "0.034533",
        "ticker": "DPZ",
        "name": "Domino's Pizza Inc.",
        "originalprice": 105
    },
    "TFX": {
        "price": 153,
        "weight": "0.034485",
        "ticker": "TFX",
        "name": "Teleflex Incorporated",
        "originalprice": 153
    },
    "CTLT": {
        "price": 206,
        "weight": "0.034393",
        "ticker": "CTLT",
        "name": "Catalent Inc",
        "originalprice": 206
    },
    "VTRS": {
        "price": 195,
        "weight": "0.034237",
        "ticker": "VTRS",
        "name": "Viatris Inc.",
        "originalprice": 195
    },
    "KEY": {
        "price": 122,
        "weight": "0.034122",
        "ticker": "KEY",
        "name": "KeyCorp",
        "originalprice": 122
    },
    "APA": {
        "price": 209,
        "weight": "0.033948",
        "ticker": "APA",
        "name": "APA Corporation",
        "originalprice": 209
    },
    "KIM": {
        "price": 158,
        "weight": "0.033881",
        "ticker": "KIM",
        "name": "Kimco Realty Corporation",
        "originalprice": 158
    },
    "BWA": {
        "price": 173,
        "weight": "0.033783",
        "ticker": "BWA",
        "name": "BorgWarner Inc.",
        "originalprice": 173
    },
    "BF.B": {
        "price": 241,
        "weight": "0.033773",
        "ticker": "BF.B",
        "name": "Brown-Forman Corporation Class B",
        "originalprice": 241
    },
    "SWK": {
        "price": 50,
        "weight": "0.033727",
        "ticker": "SWK",
        "name": "Stanley Black & Decker Inc.",
        "originalprice": 50
    },
    "TECH": {
        "price": 109,
        "weight": "0.033641",
        "ticker": "TECH",
        "name": "Bio-Techne Corporation",
        "originalprice": 109
    },
    "WYNN": {
        "price": 172,
        "weight": "0.033620",
        "ticker": "WYNN",
        "name": "Wynn Resorts Limited",
        "originalprice": 172
    },
    "CPT": {
        "price": 228,
        "weight": "0.033570",
        "ticker": "CPT",
        "name": "Camden Property Trust",
        "originalprice": 228
    },
    "EQT": {
        "price": 135,
        "weight": "0.033553",
        "ticker": "EQT",
        "name": "EQT Corporation",
        "originalprice": 135
    },
    "CHRW": {
        "price": 190,
        "weight": "0.033539",
        "ticker": "CHRW",
        "name": "C.H. Robinson Worldwide Inc.",
        "originalprice": 190
    },
    "HRL": {
        "price": 157,
        "weight": "0.033362",
        "ticker": "HRL",
        "name": "Hormel Foods Corporation",
        "originalprice": 157
    },
    "HST": {
        "price": 165,
        "weight": "0.033342",
        "ticker": "HST",
        "name": "Host Hotels & Resorts Inc.",
        "originalprice": 165
    },
    "NI": {
        "price": 180,
        "weight": "0.033078",
        "ticker": "NI",
        "name": "NiSource Inc",
        "originalprice": 180
    },
    "L": {
        "price": 208,
        "weight": "0.032836",
        "ticker": "L",
        "name": "Loews Corporation",
        "originalprice": 208
    },
    "CPB": {
        "price": 209,
        "weight": "0.032348",
        "ticker": "CPB",
        "name": "Campbell Soup Company",
        "originalprice": 209
    },
    "JNPR": {
        "price": 71,
        "weight": "0.032202",
        "ticker": "JNPR",
        "name": "Juniper Networks Inc.",
        "originalprice": 71
    },
    "PARA": {
        "price": 88,
        "weight": "0.032202",
        "ticker": "PARA",
        "name": "Paramount Global Class B",
        "originalprice": 88
    },
    "MAS": {
        "price": 215,
        "weight": "0.032093",
        "ticker": "MAS",
        "name": "Masco Corporation",
        "originalprice": 215
    },
    "HSIC": {
        "price": 136,
        "weight": "0.032021",
        "ticker": "HSIC",
        "name": "Henry Schein Inc.",
        "originalprice": 136
    },
    "JKHY": {
        "price": 215,
        "weight": "0.031791",
        "ticker": "JKHY",
        "name": "Jack Henry & Associates Inc.",
        "originalprice": 215
    },
    "CDAY": {
        "price": 193,
        "weight": "0.031552",
        "ticker": "CDAY",
        "name": "Ceridian HCM Holding Inc.",
        "originalprice": 193
    },
    "CE": {
        "price": 141,
        "weight": "0.031159",
        "ticker": "CE",
        "name": "Celanese Corporation",
        "originalprice": 141
    },
    "MTCH": {
        "price": 88,
        "weight": "0.031050",
        "ticker": "MTCH",
        "name": "Match Group Inc.",
        "originalprice": 88
    },
    "QRVO": {
        "price": 231,
        "weight": "0.030614",
        "ticker": "QRVO",
        "name": "Qorvo Inc.",
        "originalprice": 231
    },
    "FOXA": {
        "price": 119,
        "weight": "0.030335",
        "ticker": "FOXA",
        "name": "Fox Corporation Class A",
        "originalprice": 119
    },
    "CCL": {
        "price": 115,
        "weight": "0.030068",
        "ticker": "CCL",
        "name": "Carnival Corporation",
        "originalprice": 115
    },
    "TPR": {
        "price": 63,
        "weight": "0.029883",
        "ticker": "TPR",
        "name": "Tapestry Inc.",
        "originalprice": 63
    },
    "CRL": {
        "price": 205,
        "weight": "0.029752",
        "ticker": "CRL",
        "name": "Charles River Laboratories International Inc.",
        "originalprice": 205
    },
    "BIO": {
        "price": 81,
        "weight": "0.029513",
        "ticker": "BIO",
        "name": "Bio-Rad Laboratories Inc. Class A",
        "originalprice": 81
    },
    "EMN": {
        "price": 154,
        "weight": "0.029300",
        "ticker": "EMN",
        "name": "Eastman Chemical Company",
        "originalprice": 154
    },
    "CZR": {
        "price": 63,
        "weight": "0.029263",
        "ticker": "CZR",
        "name": "Caesars Entertainment Inc",
        "originalprice": 63
    },
    "GL": {
        "price": 228,
        "weight": "0.029136",
        "ticker": "GL",
        "name": "Globe Life Inc.",
        "originalprice": 228
    },
    "KMX": {
        "price": 183,
        "weight": "0.028972",
        "ticker": "KMX",
        "name": "CarMax Inc.",
        "originalprice": 183
    },
    "LYV": {
        "price": 156,
        "weight": "0.028878",
        "ticker": "LYV",
        "name": "Live Nation Entertainment Inc.",
        "originalprice": 156
    },
    "TAP": {
        "price": 88,
        "weight": "0.028522",
        "ticker": "TAP",
        "name": "Molson Coors Beverage Company Class B",
        "originalprice": 88
    },
    "GEN": {
        "price": 236,
        "weight": "0.028399",
        "ticker": "GEN",
        "name": "Gen Digital Inc.",
        "originalprice": 236
    },
    "AAL": {
        "price": 73,
        "weight": "0.027803",
        "ticker": "AAL",
        "name": "American Airlines Group Inc.",
        "originalprice": 73
    },
    "ALLE": {
        "price": 243,
        "weight": "0.027425",
        "ticker": "ALLE",
        "name": "Allegion Public Limited Company",
        "originalprice": 243
    },
    "CASH_USD": {
        "price": 127,
        "weight": "0.027274",
        "ticker": "CASH_USD",
        "name": "U.S. Dollar",
        "originalprice": 127
    },
    "REG": {
        "price": 170,
        "weight": "0.027066",
        "ticker": "REG",
        "name": "Regency Centers Corporation",
        "originalprice": 170
    },
    "PNW": {
        "price": 61,
        "weight": "0.026121",
        "ticker": "PNW",
        "name": "Pinnacle West Capital Corporation",
        "originalprice": 61
    },
    "PNR": {
        "price": 135,
        "weight": "0.025935",
        "ticker": "PNR",
        "name": "Pentair plc",
        "originalprice": 135
    },
    "AOS": {
        "price": 92,
        "weight": "0.025602",
        "ticker": "AOS",
        "name": "A. O. Smith Corporation",
        "originalprice": 92
    },
    "ROL": {
        "price": 166,
        "weight": "0.025386",
        "ticker": "ROL",
        "name": "Rollins Inc.",
        "originalprice": 166
    },
    "RHI": {
        "price": 159,
        "weight": "0.025216",
        "ticker": "RHI",
        "name": "Robert Half International Inc.",
        "originalprice": 159
    },
    "FFIV": {
        "price": 102,
        "weight": "0.025027",
        "ticker": "FFIV",
        "name": "F5 Inc.",
        "originalprice": 102
    },
    "XRAY": {
        "price": 126,
        "weight": "0.024523",
        "ticker": "XRAY",
        "name": "DENTSPLY SIRONA Inc.",
        "originalprice": 126
    },
    "BBWI": {
        "price": 214,
        "weight": "0.024299",
        "ticker": "BBWI",
        "name": "Bath & Body Works Inc.",
        "originalprice": 214
    },
    "HII": {
        "price": 228,
        "weight": "0.024175",
        "ticker": "HII",
        "name": "Huntington Ingalls Industries Inc.",
        "originalprice": 228
    },
    "UHS": {
        "price": 217,
        "weight": "0.023639",
        "ticker": "UHS",
        "name": "Universal Health Services Inc. Class B",
        "originalprice": 217
    },
    "NRG": {
        "price": 173,
        "weight": "0.023127",
        "ticker": "NRG",
        "name": "NRG Energy Inc.",
        "originalprice": 173
    },
    "WRK": {
        "price": 97,
        "weight": "0.022274",
        "ticker": "WRK",
        "name": "WestRock Company",
        "originalprice": 97
    },
    "BEN": {
        "price": 122,
        "weight": "0.022117",
        "ticker": "BEN",
        "name": "Franklin Resources Inc.",
        "originalprice": 122
    },
    "BXP": {
        "price": 128,
        "weight": "0.022026",
        "ticker": "BXP",
        "name": "Boston Properties Inc.",
        "originalprice": 128
    },
    "VFC": {
        "price": 57,
        "weight": "0.021677",
        "ticker": "VFC",
        "name": "V.F. Corporation",
        "originalprice": 57
    },
    "IVZ": {
        "price": 83,
        "weight": "0.021526",
        "ticker": "IVZ",
        "name": "Invesco Ltd.",
        "originalprice": 83
    },
    "AAP": {
        "price": 146,
        "weight": "0.021105",
        "ticker": "AAP",
        "name": "Advance Auto Parts Inc.",
        "originalprice": 146
    },
    "WHR": {
        "price": 141,
        "weight": "0.020595",
        "ticker": "WHR",
        "name": "Whirlpool Corporation",
        "originalprice": 141
    },
    "FRT": {
        "price": 104,
        "weight": "0.020576",
        "ticker": "FRT",
        "name": "Federal Realty Investment Trust",
        "originalprice": 104
    },
    "GNRC": {
        "price": 52,
        "weight": "0.020565",
        "ticker": "GNRC",
        "name": "Generac Holdings Inc.",
        "originalprice": 52
    },
    "HAS": {
        "price": 79,
        "weight": "0.019607",
        "ticker": "HAS",
        "name": "Hasbro Inc.",
        "originalprice": 79
    },
    "NWSA": {
        "price": 178,
        "weight": "0.019452",
        "ticker": "NWSA",
        "name": "News Corporation Class A",
        "originalprice": 178
    },
    "SEE": {
        "price": 235,
        "weight": "0.019378",
        "ticker": "SEE",
        "name": "Sealed Air Corporation",
        "originalprice": 235
    },
    "AIZ": {
        "price": 78,
        "weight": "0.018572",
        "ticker": "AIZ",
        "name": "Assurant Inc.",
        "originalprice": 78
    },
    "OGN": {
        "price": 170,
        "weight": "0.017123",
        "ticker": "OGN",
        "name": "Organon & Co.",
        "originalprice": 170
    },
    "CMA": {
        "price": 87,
        "weight": "0.017040",
        "ticker": "CMA",
        "name": "Comerica Incorporated",
        "originalprice": 87
    },
    "DXC": {
        "price": 204,
        "weight": "0.016919",
        "ticker": "DXC",
        "name": "DXC Technology Co.",
        "originalprice": 204
    },
    "NCLH": {
        "price": 130,
        "weight": "0.016159",
        "ticker": "NCLH",
        "name": "Norwegian Cruise Line Holdings Ltd.",
        "originalprice": 130
    },
    "ALK": {
        "price": 233,
        "weight": "0.014919",
        "ticker": "ALK",
        "name": "Alaska Air Group Inc.",
        "originalprice": 233
    },
    "MHK": {
        "price": 148,
        "weight": "0.014535",
        "ticker": "MHK",
        "name": "Mohawk Industries Inc.",
        "originalprice": 148
    },
    "RL": {
        "price": 245,
        "weight": "0.013839",
        "ticker": "RL",
        "name": "Ralph Lauren Corporation Class A",
        "originalprice": 245
    },
    "ZION": {
        "price": 76,
        "weight": "0.013421",
        "ticker": "ZION",
        "name": "Zions Bancorporation N.A.",
        "originalprice": 76
    },
    "NWL": {
        "price": 213,
        "weight": "0.013344",
        "ticker": "NWL",
        "name": "Newell Brands Inc",
        "originalprice": 213
    },
    "DVA": {
        "price": 89,
        "weight": "0.012991",
        "ticker": "DVA",
        "name": "DaVita Inc.",
        "originalprice": 89
    },
    "FOX": {
        "price": 191,
        "weight": "0.012688",
        "ticker": "FOX",
        "name": "Fox Corporation Class B",
        "originalprice": 191
    },
    "LNC": {
        "price": 95,
        "weight": "0.009937",
        "ticker": "LNC",
        "name": "Lincoln National Corp",
        "originalprice": 95
    },
    "FRC": {
        "price": 189,
        "weight": "0.007348",
        "ticker": "FRC",
        "name": "First Republic Bank",
        "originalprice": 189
    },
    "DISH": {
        "price": 192,
        "weight": "0.006533",
        "ticker": "DISH",
        "name": "DISH Network Corporation Class A",
        "originalprice": 192
    },
    "NWS": {
        "price": 241,
        "weight": "0.006147",
        "ticker": "NWS",
        "name": "News Corporation Class B",
        "originalprice": 241
    }
}

export { tickertestdata, stocktestdata }
