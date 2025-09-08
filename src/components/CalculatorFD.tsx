'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateFD, formatCurrency, type FDCalculation } from '@/lib/calculators';
import { Calculator } from 'lucide-react';

export function CalculatorFD() {
  const [principal, setPrincipal] = useState<string>('');
  const [tenure, setTenure] = useState<string>('');
  const [result, setResult] = useState<FDCalculation | null>(null);

  const tenureOptions = [
    { value: '12', label: '12 Months' },
    { value: '24', label: '24 Months' },
    { value: '36', label: '36 Months' },
    { value: '48', label: '48 Months' },
    { value: '74', label: '74 Months (Double Money)' },
  ];

  const handleCalculate = () => {
    const principalAmount = parseInt(principal);
    const tenureMonths = parseInt(tenure);

    if (principalAmount >= 1000 && tenureMonths > 0) {
      const calculation = calculateFD(principalAmount, tenureMonths);
      setResult(calculation);
    }
  };

  const handleReset = () => {
    setPrincipal('');
    setTenure('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">FD Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="principal">Principal Amount (₹)</Label>
            <Input
              id="principal"
              type="number"
              placeholder="Minimum ₹1,000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              min="1000"
              step="1000"
            />
          </div>

          <div>
            <Label htmlFor="tenure">Tenure</Label>
            <Select value={tenure} onValueChange={setTenure}>
              <SelectTrigger>
                <SelectValue placeholder="Select tenure" />
              </SelectTrigger>
              <SelectContent>
                {tenureOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-2">
            <Button 
              onClick={handleCalculate} 
              disabled={!principal || !tenure}
              className="flex-1"
            >
              Calculate
            </Button>
            <Button 
              variant="outline" 
              onClick={handleReset}
              disabled={!principal && !tenure && !result}
            >
              Reset
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-4">Calculation Results</h4>
          
          {result ? (
            <div className="space-y-3 calculator-result">
              <div className="flex justify-between">
                <span className="text-gray-600">Principal Amount:</span>
                <span className="font-medium">{formatCurrency(result.principal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tenure:</span>
                <span className="font-medium">{result.tenure} months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Rate:</span>
                <span className="font-medium">{result.rate} p.a.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Earned:</span>
                <span className="font-medium text-accent">{formatCurrency(result.interest)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Maturity Amount:</span>
                  <span className="font-bold text-primary">{formatCurrency(result.maturity)}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Enter amount and tenure to see results</p>
          )}
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> These are indicative calculations based on current rates. 
          Actual rates may vary. Members-only service.
        </p>
      </div>
    </div>
  );
}
