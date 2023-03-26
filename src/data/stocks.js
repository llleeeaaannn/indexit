const stocksData = {
  aapl: {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    weight: 7.160776,
    currentprice: 160.22
  },
  msft: {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    weight: 6.261452,
    currentprice: 280.96
  },
  amzn: {
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    weight: 2.665966,
    currentprice: 98.49
  },
  nvda: {
    ticker: 'NVDA',
    name: 'NVIDIA Corporation',
    weight: 2.026405,
    currentprice: 267.70
  },
  googl: {
    ticker: 'GOOGL',
    name: 'Alphabet Inc. Class A',
    weight: 1.905394,
    currentprice: 105.70
  },
  goog: {
    ticker: 'GOOG',
    name: 'Alphabet Inc. Class C',
    weight: 1.671415,
    currentprice: 106.41
  },
  brkb: {
    brkb: 'BRK.B',
    name: 'Berkshire Hathaway Inc. Class B',
    weight: 1.628577,
    currentprice: 298.97
  },
  tsla: {
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    weight: 1.566153,
    currentprice: 190.23
  },
  meta: {
    ticker: 'META',
    name: 'Meta Platforms Inc. Class A',
    weight: 1.377436,
    currentprice: 206.25
  },
  unh: {
    ticker: 'UNH',
    name: 'UnitedHealth Group Incorporated',
    weight: 1.330112,
    currentprice: 476.83
  },
  xom: {
    ticker: 'XOM',
    name: 'Exxon Mobil Corporation',
    weight: 1.290078,
    currentprice: 103.70
  },
  jnj: {
    ticker: 'JNJ',
    name: 'Johnson & Johnson',
    weight: 1.197025,
    currentprice: 152.60
  },
  jpm: {
    ticker: 'JPM',
    name: 'JPMorgan Chase & Co.',
    weight: 1.127106,
    currentprice: 125.05
  },
  v: {
    ticker: 'V',
    name: 'Visa Inc. Class A',
    weight: 1.095756,
    currentprice: 221.30
  },
  pg: {
    ticker: 'PG',
    name: 'Procter & Gamble Company',
    weight: 1.027659,
    currentprice: 146.81
  },
  ma: {
    ticker: 'MA',
    name: 'Mastercard Incorporated Class A',
    weight: 0.905776,
    currentprice: 352.08
  },
  hd: {
    ticker: 'HD',
    name: 'Home Depot Inc.',
    weight: 0.876595,
    currentprice: 283.56
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  cvx: {
    ticker: 'CVX',
    name: 'Chevron Corporation',
    weight: 0.832751,
    currentprice: 156.18
  },
  abbv: {
    ticker: 'ABBV',
    name: 'AbbVie Inc.',
    weight: 0.832027,
    currentprice: 157.87
  },
  avgo: {
    ticker: 'AVGO',
    name: 'Broadcom Inc.',
    weight: 0.809253,
    currentprice: 636.74
  },
  mrk: {
    ticker: 'MRK',
    name: 'Merck & Co. Inc.',
    weight: 0.800579,
    currentprice: 104.65
  },
  lly: {
    ticker: 'LLY',
    name: 'Eli Lilly and Company',
    weight: 0.794739,
    currentprice: 336.08
  },
  pep: {
    ticker: 'PEP',
    name: 'PepsiCo Inc.',
    weight: 0.732871,
    currentprice: 179.29
  },
  ko: {
    ticker: 'KO',
    name: 'Coca-Cola Company',
    weight: 0.706509,
    currentprice: 60.95
  },
  pfe: {
    ticker: 'PFE',
    name: 'Pfizer Inc.',
    weight: 0.683276,
    currentprice: 40.42
  },
  tmo: {
    ticker: 'TMO',
    name: 'Thermo Fisher Scientific Inc.',
    weight: 0.659647,
    currentprice: 567.88
  },
  cost: {
    ticker: 'COST',
    name: 'Costco Wholesale Corporation',
    weight: 0.655676,
    currentprice: 495.51
  },
  csco: {
    ticker: 'CSCO',
    name: 'Cisco Systems Inc.',
    weight: 0.618909,
    currentprice: 50.59
  },
  mcd: {
    ticker: 'MCD',
    name: "McDonald's Corporation",
    weight: 0.598246,
    currentprice: 271.64
  },
  wmt: {
    ticker: 'WMT',
    name: 'Walmart Inc.',
    weight: 0.597527,
    currentprice: 141.89
  },
  bac: {
    ticker: 'BAC',
    name: 'Bank of America Corp',
    weight: 0.57026,
    currentprice: 27.21
  },
  crm: {
    ticker: 'CRM',
    name: 'Salesforce Inc.',
    weight: 0.567842,
    currentprice: 190.89
  },
  dis: {
    ticker: 'DIS',
    name: 'Walt Disney Company',
    weight: 0.530346,
    currentprice: 94.18
  },
  acn: {
    ticker: 'ACN',
    name: 'Accenture Plc Class A',
    weight: 0.518269,
    currentprice: 278.56
  },
  abt: {
    ticker: 'ABT',
    name: 'Abbott Laboratories',
    weight: 0.512576,
    currentprice: 98.77
  },
  adbe: {
    ticker: 'ADBE',
    name: 'Adobe Incorporated',
    weight: 0.511762,
    currentprice: 375.45
  },
  lin: {
    ticker: 'LIN',
    name: 'Linde plc',
    weight: 0.509273,
    currentprice: 354.01
  },
  txn: {
    ticker: 'TXN',
    name: 'Texas Instruments Incorporated',
    weight: 0.494814	,
    currentprice: 180.73
  },
  dhr: {
    ticker: 'DHR',
    name: 'Danaher Corporation',
    weight: 0.490336,
    currentprice: 249.08
  },
  amd: {
    ticker: 'AMD',
    name: '	Advanced Micro Devices Inc.',
    weight: 0.489825,
    currentprice: 98.13
  },
  vz: {
    ticker: 'VZ',
    name: 'Verizon Communications Inc.',
    weight: 0.475474,
    currentprice: 37.68
  },
  cmcsa: {
    ticker: 'CMCSA',
    name: 'Comcast Corporation Class A',
    weight: 0.458394,
    currentprice: 36.10
  },
  nke: {
    ticker: 'NKE',
    name: 'NIKE Inc. Class B',
    weight: 0.456504,
    currentprice: 120.83
  },
  nee: {
    ticker: 'NEE',
    name: 'NextEra Energy Inc.',
    weight: 0.444339,
    currentprice: 77.59
  },
  nflx: {
    ticker: 'NFLX',
    name: 'Netflix Inc.',
    weight: 0.432233,
    currentprice: 329.65
  },
  bmy: {
    ticker: 'BMY',
    name: 'Bristol-Myers Squibb Company',
    weight: 0.431428,
    currentprice: 69.70
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  rtx: {
    ticker: 'RTX',
    name: 'Raytheon Technologies Corporation',
    weight: 0.42605,
    currentprice: 96.67
  },
  pm: {
    ticker: 'PM',
    name: 'Philip Morris International Inc.',
    weight: 0.423942,
    currentprice: 91.31
  },
  wfc: {
    ticker: 'WFC',
    name: 'Wells Fargo & Company',
    weight: 0.422618,
    currentprice: 36.33
  },
  qcom: {
    ticker: 'QCOM',
    name: 'QUALCOMM Incorporated',
    weight: 0.420194,
    currentprice: 125.06
  },
  ups: {
    ticker: 'UPS',
    name: 'United Parcel Service Inc. Class B',
    weight: 0.40967,
    currentprice: 186.40
  },
  orcl: {
    ticker: 'ORCL',
    name: 'Oracle Corporation',
    weight: 0.408694	,
    currentprice: 88.11
  },
  t: {
    ticker: 'T',
    name: 'AT&T Inc.',
    weight: 0.398626,
    currentprice: 18.62
  },
  hon: {
    ticker: 'HON',
    name: 'Honeywell International Inc.',
    weight: 0.378346,
    currentprice: 188.25
  },
  amgn: {
    ticker: 'AMGN',
    name: 'Amgen Inc.',
    weight: 0.377076,
    currentprice: 238.70
  },
  intu: {
    ticker: 'INTU',
    name: 'Intuit Inc.',
    weight: 0.368702,
    currentprice: 430.28
  },
  intc: {
    ticker: 'INTC',
    name: '	Intel Corporation',
    weight: 0.36383,
    currentprice: 29.39
  },
  cop: {
    ticker: 'COP',
    name: '	ConocoPhillips',
    weight: 0.357489,
    currentprice: 95.56
  },
  low: {
    ticker: 'LOW',
    name: "Lowe's Companies Inc.",
    weight: 0.3475,
    currentprice: 189.62
  },
  cat: {
    ticker: 'CAT',
    name: 'Namenamename',
    weight: 0.345958,
    currentprice: 217.35
  },
  unp: {
    ticker: 'UNP',
    name: 'Union Pacific Corporation',
    weight: 0.345151,
    currentprice: 187.93
  },
  sbux: {
    ticker: 'SBUX',
    name: 'Starbucks Corporation',
    weight: 0.342676,
    currentprice: 98.46
  },
  ms: {
    ticker: 'MS',
    name: 'Morgan Stanley',
    weight: 0.339756,
    currentprice: 84.03
  },
  ibm: {
    ticker: 'IBM',
    name: '	International Business Machines Corporation',
    weight: 0.337914,
    currentprice: 125.44
  },
  ba: {
    ticker: 'BA',
    name: 'Boeing Company',
    weight: 0.337142,
    currentprice: 197.62
  },
  spgi: {
    ticker: 'SPGI',
    name: 'S&P Global Inc.',
    weight: 0.331357,
    currentprice: 338.58
  },
  gs: {
    ticker: 'GS',
    name: 'Goldman Sachs Group Inc.',
    weight: 0.322996,
    currentprice: 313.12
  },
  elv: {
    ticker: 'ELV',
    name: 'Elevance Health Inc.',
    weight: 0.322913,
    currentprice: 455.80
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 474.79
  },
  lmt: {
    ticker: 'LMT',
    name: 'Lockheed Martin Corporation',
    weight: 0.32207,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  de: {
    ticker: 'DE',
    name: 'Deere & Company',
    weight: 0.321012,
    currentprice: 387.07
  },
  pld: {
    ticker: 'PLD',
    name: 'Prologis Inc.',
    weight: 0.318706,
    currentprice: 116.80
  },
  amat: {
    ticker: 'AMAT',
    name: 'Applied Materials Inc.',
    weight: 0.31359,
    currentprice: 119.51
  },
  mdt: {
    ticker: 'MDT',
    name: 'Medtronic Plc',
    weight: 0.312587,
    currentprice: 79.36
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 91.68
  },
  ge: {
    ticker: 'GE',
    name: 'General Electric Company',
    weight: 0.301733,
    currentprice: 9999
  },
  bkng: {
    ticker: 'BKNG',
    name: 'Booking Holdings Inc.',
    weight: 0.297884,
    currentprice: 2,509.67
  },
  gild: {
    ticker: 'GILD',
    name: 'Gilead Sciences Inc.',
    weight: 0.297536,
    currentprice: 80.17
  },
  blk: {
    ticker: 'BLK',
    name: 'BlackRock Inc.',
    weight: 0.296198,
    currentprice: 648.17
  },
  axp: {
    ticker: 'AXP',
    name: 'American Express Company',
    weight: 0.294225,
    currentprice: 160.07
  },
  adi: {
    ticker: 'ADI',
    name: 'Analog Devices Inc.',
    weight: 0.290901,
    currentprice: 188.10
  },
  cvs: {
    ticker: 'CVS',
    name: 'CVS Health Corporation',
    weight: 0.281531,
    currentprice: 73.38
  },
  syk: {
    ticker: 'SYK',
    name: 'Stryker Corporation',
    weight: 0.280151,
    currentprice: 277.12
  },
  mdlz: {
    ticker: 'MDLZ',
    name: 'Mondelez International Inc. Class A',
    weight: 0.277604,
    currentprice: 69.22
  },
  now: {
    ticker: 'NOW',
    name: 'ServiceNow Inc.',
    weight: 433.50,
    currentprice: 433.50
  },
  amt: {
    ticker: 'AMT',
    name: 'American Tower Corporation',
    weight: 0.269857,
    currentprice: 200.33
  },
  adp: {
    ticker: 'ADP',
    name: 'Automatic Data Processing Inc.',
    weight: 0.268151,
    currentprice: 217.46
  },
  tjx: {
    ticker: 'TJX',
    name: 'TJX Companies Inc',
    weight: 0.26205,
    currentprice: 77.83
  },
  regn: {
    ticker: 'REGN',
    name: 'Regeneron Pharmaceuticals Inc.',
    weight: 0.261244,
    currentprice: 821.01
  },
  isrg: {
    ticker: 'ISRG',
    name: 'Intuitive Surgical Inc.',
    weight: 0.259506,
    currentprice: 256.35
  },
  tmus: {
    ticker: 'TMUS',
    name: 'T-Mobile US Inc.',
    weight: 0.255339,
    currentprice: 143.57
  },
  c: {
    ticker: 'C',
    name: 'Citigroup Inc.',
    weight: 0.254525,
    currentprice: 43.13
  },
  pypl: {
    ticker: 'PYPL',
    name: 'PayPal Holdings Inc.',
    weight: 0.248697,
    currentprice: 74.02
  },
  schw: {
    ticker: 'SCHW',
    name: 'Charles Schwab Corp',
    weight: 0.244399,
    currentprice: 53.08
  },
  pgr: {
    ticker: 'PGR',
    name: 'Progressive Corporation',
    weight: 0.24391,
    currentprice: 138.45
  },
  mmc: {
    ticker: 'MMC',
    name: 'Marsh & McLennan Companies Inc.',
    weight: 0.237992,
    currentprice: 160.78
  },
  vrtx: {
    ticker: 'VRTX',
    name: 'Vertex Pharmaceuticals Incorporated',
    weight: 0.237352,
    currentprice: 315.23
  },
  mo: {
    ticker: 'MO',
    name: 'Altria Group Inc.',
    weight: 0.235904,
    currentprice: 44.38
  },
  cb: {
    ticker: 'CB',
    name: 'Chubb Limited',
    weight: 0.233491,
    currentprice: 187.16
  },
  ci: {
    ticker: 'CI',
    name: 'Cigna Group',
    weight: 0.23216,
    currentprice: 260.51
  },
  zts: {
    ticker: 'ZTS',
    name: 'Zoetis Inc. Class A',
    weight: 0.227283,
    currentprice: 163.63
  },
  so: {
    ticker: 'SO',
    name: 'Southern Company',
    weight: 0.218435,
    currentprice: 67.70
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  }
}

const template = {
  template: {
    ticker: 'XXXX',
    name: 'Namenamename',
    weight: 12345,
    currentprice: 9999
  },
}

export default stocksData;
