import ratesData from '../../content/rates.json';

export interface FDCalculation {
  principal: number;
  tenure: number;
  rate: string;
  maturity: number;
  interest: number;
}

export interface RDCalculation {
  monthlyAmount: number;
  tenure: number;
  rate: string;
  totalDeposit: number;
  interest: number;
  maturity: number;
}

export function calculateFD(principal: number, tenureMonths: number): FDCalculation | null {
  // First try to find exact match in rates table
  const fdRates = ratesData.fd.tenures;
  const tenureData = fdRates.find(t => t.months === tenureMonths);
  
  if (tenureData) {
    const exactMatch = tenureData.rows.find(row => row.amount === principal);
    if (exactMatch) {
      return {
        principal,
        tenure: tenureMonths,
        rate: tenureData.rate,
        maturity: exactMatch.maturity,
        interest: exactMatch.maturity - principal
      };
    }
    
    // Interpolate for custom amount
    const rate = parseFloat(tenureData.rate) / 100;
    const years = tenureMonths / 12;
    const maturity = Math.round(principal * (1 + rate * years));
    
    return {
      principal,
      tenure: tenureMonths,
      rate: tenureData.rate,
      maturity,
      interest: maturity - principal
    };
  }
  
  // Fallback calculation for non-standard tenures
  // Use simple interest with interpolated rate
  let interpolatedRate = 0.082; // Default 8.2%
  
  if (tenureMonths <= 12) interpolatedRate = 0.082;
  else if (tenureMonths <= 24) interpolatedRate = 0.087;
  else if (tenureMonths <= 36) interpolatedRate = 0.097;
  else if (tenureMonths <= 48) interpolatedRate = 0.102;
  else interpolatedRate = 0.12;
  
  const years = tenureMonths / 12;
  const maturity = Math.round(principal * (1 + interpolatedRate * years));
  
  return {
    principal,
    tenure: tenureMonths,
    rate: `${Math.round(interpolatedRate * 100)}%`,
    maturity,
    interest: maturity - principal
  };
}

export function calculateRD(monthlyAmount: number, tenureMonths: number): RDCalculation | null {
  // First try to find exact match in rates table
  const rdRates = ratesData.rd.schemes;
  const tenureData = rdRates.find(s => s.months === tenureMonths);
  
  if (tenureData) {
    const exactMatch = tenureData.rows.find(row => row.monthly === monthlyAmount);
    if (exactMatch) {
      return {
        monthlyAmount,
        tenure: tenureMonths,
        rate: tenureData.rate,
        totalDeposit: exactMatch.total,
        interest: exactMatch.interest,
        maturity: exactMatch.maturity
      };
    }
    
    // Interpolate for custom amount
    const rate = parseFloat(tenureData.rate) / 100;
    const totalDeposit = monthlyAmount * tenureMonths;
    
    // RD formula: M = P * [(1 + r/12)^n - 1] / (r/12) where P is monthly deposit
    const monthlyRate = rate / 12;
    const compound = Math.pow(1 + monthlyRate, tenureMonths);
    const maturity = Math.round(monthlyAmount * ((compound - 1) / monthlyRate));
    
    return {
      monthlyAmount,
      tenure: tenureMonths,
      rate: tenureData.rate,
      totalDeposit,
      interest: maturity - totalDeposit,
      maturity
    };
  }
  
  // Fallback calculation
  let interpolatedRate = 0.072;
  if (tenureMonths <= 12) interpolatedRate = 0.072;
  else if (tenureMonths <= 24) interpolatedRate = 0.078;
  else if (tenureMonths <= 36) interpolatedRate = 0.084;
  else if (tenureMonths === 365) interpolatedRate = 0.06;
  else interpolatedRate = 0.072;
  
  const totalDeposit = monthlyAmount * tenureMonths;
  const monthlyRate = interpolatedRate / 12;
  const compound = Math.pow(1 + monthlyRate, tenureMonths);
  const maturity = Math.round(monthlyAmount * ((compound - 1) / monthlyRate));
  
  return {
    monthlyAmount,
    tenure: tenureMonths,
    rate: `${Math.round(interpolatedRate * 100)}%`,
    totalDeposit,
    interest: maturity - totalDeposit,
    maturity
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}


