"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FinancialMetricCard from "@/components/FinancialMetricCard";
import FnDashboardCharts from "@/components/FnDashboardCharts";
import TransactionsTable from "@/components/TransactionsTable";
import {
  financialMetrics,
  chartData,
  transactions,
} from "@/lib/mockData";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "transactions", label: "Transactions" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">Finance ERP</h1>
          <p className="text-sm text-gray-600 mt-1">Dashboard</p>
        </div>
        
        <Separator />
        
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-blue-900">Quick Actions</h3>
              <div className="mt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Generate Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
            <p className="text-gray-600 mt-1">
              Monitor your business performance and key financial metrics
            </p>
          </div>

          {/* Financial Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <FinancialMetricCard
              title="Total Revenue"
              value={financialMetrics.revenue}
              change={12.5}
              changeType="increase"
            />
            <FinancialMetricCard
              title="Total Expenses"
              value={financialMetrics.expenses}
              change={8.2}
              changeType="increase"
            />
            <FinancialMetricCard
              title="Net Profit"
              value={financialMetrics.profit}
              change={15.3}
              changeType="increase"
            />
            <FinancialMetricCard
              title="Cash Flow"
              value={financialMetrics.cashFlow}
              change={5.7}
              changeType="increase"
            />
          </div>

          {/* Charts Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Analytics</h3>
            <FnDashboardCharts data={chartData} />
          </div>

          {/* Transactions Table */}
          <div className="mb-8">
            <TransactionsTable transactions={transactions} />
          </div>

          {/* Additional Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">
                  Average Monthly Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+8.4%</div>
                <p className="text-xs text-gray-500 mt-1">
                  Compared to previous quarter
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">
                  Outstanding Invoices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">$124,500</div>
                <p className="text-xs text-gray-500 mt-1">
                  15 pending invoices
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">
                  Budget Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">73%</div>
                <p className="text-xs text-gray-500 mt-1">
                  Of annual budget used
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
