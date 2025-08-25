"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/mockData";

interface FinancialMetricCardProps {
  title: string;
  value: number;
  change?: number;
  changeType?: 'increase' | 'decrease';
}

export default function FinancialMetricCard({ 
  title, 
  value, 
  change, 
  changeType 
}: FinancialMetricCardProps) {
  if (!title || value === undefined || value === null) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <p className="text-sm text-gray-500">Data unavailable</p>
        </CardContent>
      </Card>
    );
  }

  const getChangeColor = () => {
    if (!change) return '';
    return changeType === 'increase' ? 'text-green-600' : 'text-red-600';
  };

  const getChangeSymbol = () => {
    if (!change) return '';
    return changeType === 'increase' ? '+' : '-';
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">
          {formatCurrency(value)}
        </div>
        {change && (
          <p className={`text-xs ${getChangeColor()} mt-1`}>
            {getChangeSymbol()}{Math.abs(change)}% from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
