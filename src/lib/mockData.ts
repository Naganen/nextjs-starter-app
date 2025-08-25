// Mock data for Finance ERP Dashboard

export interface FinancialMetrics {
  revenue: number;
  expenses: number;
  profit: number;
  cashFlow: number;
}

export interface ChartDataPoint {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
}

export const financialMetrics: FinancialMetrics = {
  revenue: 2450000,
  expenses: 1680000,
  profit: 770000,
  cashFlow: 890000,
};

export const chartData: ChartDataPoint[] = [
  { month: 'Jan', revenue: 185000, expenses: 142000, profit: 43000 },
  { month: 'Feb', revenue: 198000, expenses: 156000, profit: 42000 },
  { month: 'Mar', revenue: 225000, expenses: 168000, profit: 57000 },
  { month: 'Apr', revenue: 242000, expenses: 175000, profit: 67000 },
  { month: 'May', revenue: 268000, expenses: 189000, profit: 79000 },
  { month: 'Jun', revenue: 285000, expenses: 198000, profit: 87000 },
  { month: 'Jul', revenue: 295000, expenses: 205000, profit: 90000 },
  { month: 'Aug', revenue: 312000, expenses: 218000, profit: 94000 },
  { month: 'Sep', revenue: 328000, expenses: 225000, profit: 103000 },
  { month: 'Oct', revenue: 345000, expenses: 238000, profit: 107000 },
  { month: 'Nov', revenue: 362000, expenses: 248000, profit: 114000 },
  { month: 'Dec', revenue: 385000, expenses: 265000, profit: 120000 },
];

export const transactions: Transaction[] = [
  {
    id: '1',
    date: '2024-01-15',
    description: 'Software License Renewal',
    amount: -12500,
    type: 'expense',
    category: 'Technology',
  },
  {
    id: '2',
    date: '2024-01-14',
    description: 'Client Payment - ABC Corp',
    amount: 45000,
    type: 'income',
    category: 'Revenue',
  },
  {
    id: '3',
    date: '2024-01-13',
    description: 'Office Rent',
    amount: -8500,
    type: 'expense',
    category: 'Facilities',
  },
  {
    id: '4',
    date: '2024-01-12',
    description: 'Consulting Services - XYZ Ltd',
    amount: 28000,
    type: 'income',
    category: 'Revenue',
  },
  {
    id: '5',
    date: '2024-01-11',
    description: 'Marketing Campaign',
    amount: -15000,
    type: 'expense',
    category: 'Marketing',
  },
  {
    id: '6',
    date: '2024-01-10',
    description: 'Equipment Purchase',
    amount: -22000,
    type: 'expense',
    category: 'Equipment',
  },
  {
    id: '7',
    date: '2024-01-09',
    description: 'Project Payment - DEF Inc',
    amount: 67000,
    type: 'income',
    category: 'Revenue',
  },
  {
    id: '8',
    date: '2024-01-08',
    description: 'Utilities',
    amount: -3200,
    type: 'expense',
    category: 'Utilities',
  },
];

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
