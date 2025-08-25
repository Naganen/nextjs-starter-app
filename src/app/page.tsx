"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Finance ERP
            <span className="block text-blue-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive financial management system with real-time analytics, 
            transaction tracking, and business intelligence insights.
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Access Dashboard
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Financial Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Real-time charts and graphs showing revenue trends, expense tracking, 
                and profit analysis with interactive visualizations.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Transaction Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Complete transaction history with categorization, filtering, 
                and detailed reporting for better financial oversight.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Key Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Monitor essential KPIs including cash flow, profit margins, 
                revenue growth, and expense ratios at a glance.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Budget Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Track budget utilization, set spending limits, and receive 
                alerts when approaching budget thresholds.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Report Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Generate comprehensive financial reports with customizable 
                date ranges and export capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Data Export
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Export financial data in multiple formats for external 
                analysis and integration with other business systems.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Dashboard Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.45M</div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$1.68M</div>
              <div className="text-sm text-gray-600">Total Expenses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$770K</div>
              <div className="text-sm text-gray-600">Net Profit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$890K</div>
              <div className="text-sm text-gray-600">Cash Flow</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to manage your finances?
          </h2>
          <p className="text-gray-600 mb-6">
            Get started with our comprehensive financial dashboard today.
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Launch Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
