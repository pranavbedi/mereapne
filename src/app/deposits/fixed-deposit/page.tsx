import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Clock, Shield, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RateTable } from '@/components/RateTable';
import { CalculatorFD } from '@/components/CalculatorFD';

export const metadata: Metadata = {
  title: 'Fixed Deposit (FD)',
  description: 'Secure your future with our Fixed Deposit schemes. Competitive interest rates, flexible tenures, and guaranteed returns.',
};

export default function FixedDepositPage() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Interest Rates',
      description: 'Earn up to 12% per annum with our attractive FD rates across different tenures.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Tenures',
      description: 'Choose from 12, 24, 36, 48, or 74 months to match your financial planning needs.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Guaranteed Returns',
      description: 'Fixed interest rates ensure predictable returns with complete capital safety.',
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Easy Calculations',
      description: 'Use our calculator to plan your investments and see exact maturity amounts.',
    },
  ];

  const benefits = [
    'Minimum deposit starts from ₹5,000',
    'Interest credited at maturity',
    'Auto-renewal option available',
    'Loan facility against FD',
    'Nomination facility available',
    'Premature withdrawal with penalty',
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fixed Deposit (FD)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lock in your savings for guaranteed returns. Our Fixed Deposit schemes offer 
            competitive interest rates with flexible tenures to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Fixed Deposits?</h2>
          <p className="text-lg text-gray-600">
            Designed for members who want secure, predictable returns on their investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rate Tables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FD Interest Rates & Maturity</h2>
          <p className="text-lg text-gray-600">
            View current interest rates and maturity amounts for different tenures and deposit amounts.
          </p>
        </div>

        <RateTable type="fd" />
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FD Calculator</h2>
            <p className="text-lg text-gray-600">
              Calculate your FD returns instantly with our easy-to-use calculator.
            </p>
          </div>
          
          <CalculatorFD />
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 process-step">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Your Amount & Tenure</h3>
                  <p className="text-gray-600">Select deposit amount (min ₹5,000) and tenure (12-74 months).</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 process-step">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Make Your Deposit</h3>
                  <p className="text-gray-600">Visit our branch with required documents and make your FD deposit.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 process-step">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Receive FD Receipt</h3>
                  <p className="text-gray-600">Get your FD receipt with all terms and maturity details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 process-step">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Earn Guaranteed Returns</h3>
                  <p className="text-gray-600">Receive your principal plus interest at maturity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special 74-Month FD Scheme
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Double your money in 74 months! Our special FD scheme offers guaranteed doubling 
            of your investment at 12% per annum.
          </p>
          <div className="bg-white rounded-lg border shadow-sm p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">12%</div>
                <div className="text-gray-600">Interest Rate p.a.</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">74</div>
                <div className="text-gray-600">Months Tenure</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">₹1,00,000</div>
                <div className="text-gray-600">Deposit Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">₹2,00,000</div>
                <div className="text-gray-600">Maturity Amount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Important Information</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Premature Withdrawal:</strong> Premature FD interest payable as per slab at time of closure.</p>
            <p>• <strong>Members Only:</strong> FD facility available exclusively to society members.</p>
            <p>• <strong>Rate Changes:</strong> Interest rates are subject to change with prior notice.</p>
            <p>• <strong>Auto Renewal:</strong> FD can be set for auto-renewal on maturity.</p>
            <p>• <strong>Loan Facility:</strong> Up to 90% loan available against FD deposit.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your FD Investment Today
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Visit our branch to open your Fixed Deposit account and secure your financial future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Visit Branch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/deposits">View All Deposits</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
