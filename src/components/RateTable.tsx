'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency } from '@/lib/calculators';
import ratesData from '../../content/rates.json';

interface RateTableProps {
  type: 'fd' | 'rd';
}

export function RateTable({ type }: RateTableProps) {
  if (type === 'fd') {
    return (
      <div className="w-full">
        <Tabs defaultValue={ratesData.fd.tenures[0].months.toString()} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            {ratesData.fd.tenures.map((tenure) => (
              <TabsTrigger key={tenure.months} value={tenure.months.toString()}>
                {tenure.months}M
              </TabsTrigger>
            ))}
          </TabsList>
          
          {ratesData.fd.tenures.map((tenure) => (
            <TabsContent key={tenure.months} value={tenure.months.toString()}>
              <div className="rounded-lg border tab-content">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h3 className="font-semibold text-lg">
                    {tenure.months} Months at {tenure.rate} p.a.
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-3 px-4 font-medium">Principal Amount</th>
                        <th className="text-left py-3 px-4 font-medium">Interest Earned</th>
                        <th className="text-left py-3 px-4 font-medium">Maturity Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tenure.rows.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">
                            {formatCurrency(row.amount)}
                          </td>
                          <td className="py-3 px-4 text-accent font-medium">
                            {formatCurrency(row.maturity - row.amount)}
                          </td>
                          <td className="py-3 px-4 font-semibold">
                            {formatCurrency(row.maturity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> {ratesData.fd.prematurity}
          </p>
        </div>
      </div>
    );
  }

  if (type === 'rd') {
    return (
      <div className="w-full space-y-6">
        <Tabs defaultValue={ratesData.rd.schemes[0].months.toString()} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {ratesData.rd.schemes.map((scheme) => (
              <TabsTrigger key={scheme.months} value={scheme.months.toString()}>
                {scheme.months}M
              </TabsTrigger>
            ))}
          </TabsList>
          
          {ratesData.rd.schemes.map((scheme) => (
            <TabsContent key={scheme.months} value={scheme.months.toString()}>
              <div className="rounded-lg border tab-content">
                <div className="bg-gray-50 px-4 py-3 border-b">
                  <h3 className="font-semibold text-lg">
                    {scheme.months} Months at {scheme.rate} p.a.
                  </h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-3 px-4 font-medium">Monthly Deposit</th>
                        <th className="text-left py-3 px-4 font-medium">Total Deposit</th>
                        <th className="text-left py-3 px-4 font-medium">Interest Earned</th>
                        <th className="text-left py-3 px-4 font-medium">Maturity Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheme.rows.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">
                            {formatCurrency(row.monthly)}
                          </td>
                          <td className="py-3 px-4">
                            {formatCurrency(row.total)}
                          </td>
                          <td className="py-3 px-4 text-accent font-medium">
                            {formatCurrency(row.interest)}
                          </td>
                          <td className="py-3 px-4 font-semibold">
                            {formatCurrency(row.maturity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> {ratesData.rd.disclaimer}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
