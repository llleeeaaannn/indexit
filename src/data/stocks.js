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
  },
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
