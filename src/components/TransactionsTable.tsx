"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Transaction, formatCurrency, formatDate } from "@/lib/mockData";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  if (!transactions || transactions.length === 0) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Add Transaction
            </Button>
            <Button variant="outline" size="sm">
              Refresh Data
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 text-center py-8">
            No transactions available
          </p>
        </CardContent>
      </Card>
    );
  }

  const getAmountColor = (amount: number) => {
    return amount >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getTransactionBadge = (type: 'income' | 'expense') => {
    return type === 'income' ? (
      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
        Income
      </Badge>
    ) : (
      <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
        Expense
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Add Transaction
          </Button>
          <Button variant="outline" size="sm">
            Refresh Data
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-sm">
                    {formatDate(transaction.date)}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    {getTransactionBadge(transaction.type)}
                  </TableCell>
                  <TableCell className={`text-right font-medium ${getAmountColor(transaction.amount)}`}>
                    {formatCurrency(Math.abs(transaction.amount))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Summary Footer */}
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Showing {transactions.length} transactions
            </span>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
              View All Transactions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
