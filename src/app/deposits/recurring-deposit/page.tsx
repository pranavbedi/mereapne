import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Repeat, Target, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RateTable } from '@/components/RateTable';
import { CalculatorRD } from '@/components/CalculatorRD';

export const metadata: Metadata = {
  title: 'Recurring Deposit (RD)',
  description: 'Build your savings systematically with our Recurring Deposit schemes. Save monthly and earn competitive returns.',
};

export default function RecurringDepositPage() {
  const features = [
    {
      icon: <Repeat className="w-6 h-6" />,
      title: 'Systematic Savings',
      description: 'Build your savings habit with regular monthly deposits as low as ₹100.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Compounding Returns',
      description: 'Benefit from compounding interest with rates up to 12% per annum.',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Flexible Tenures',
      description: 'Choose from 12, 24, 36, or 60 month tenures to match your goals.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Achievement',
      description: 'Perfect for achieving specific financial goals like vacations or purchases.',
    },
  ];

  const benefits = [
    'Minimum monthly deposit of just ₹50',
    'No upper limit on monthly contribution',
    'Interest calculated on yearly basis',
    'Flexible tenure options available',
    'Nomination facility included',
    'Loan facility against RD balance',
  ];


  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Repeat className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recurring Deposit (RD)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build wealth systematically with our Recurring Deposit schemes. Save a fixed amount 
            every month and watch your savings grow with competitive interest rates.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Recurring Deposits?</h2>
          <p className="text-lg text-gray-600">
            Perfect for building a savings habit and achieving your financial goals systematically.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">RD Interest Rates & Returns</h2>
          <p className="text-lg text-gray-600">
            View current interest rates and maturity amounts for different monthly deposits and tenures.
          </p>
        </div>

        <RateTable type="rd" />
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">RD Calculator</h2>
            <p className="text-lg text-gray-600">
              Plan your recurring deposits and see how much you can save over time.
            </p>
          </div>
          
          <CalculatorRD />
        </div>
      </section>

      {/* Benefits & How It Works */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How RD Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Monthly Amount</h3>
                  <p className="text-gray-600">Decide on a monthly deposit amount starting from ₹100.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Select Tenure</h3>
                  <p className="text-gray-600">Choose from 12, 24, 36, or 60 months tenure options.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Make Regular Deposits</h3>
                  <p className="text-gray-600">Deposit the same amount every month on the due date.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Receive Maturity Amount</h3>
                  <p className="text-gray-600">Get your total deposits plus compound interest at maturity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Terms & Conditions</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Membership Required:</strong> It is mandatory to be a member in the Company.</p>
            <p>• <strong>Share Issue:</strong> Company will issue shares worth ₹100/- to member for RD Plan.</p>
            <p>• <strong>Interest Calculation:</strong> Interest will be calculated on yearly basis.</p>
            <p>• <strong>Minimum Amount:</strong> Recurring deposit minimum amount ₹50/-, thereafter in multiple of ₹50/-.</p>
            <p>• <strong>Irregular Deposits:</strong> Irregular deposits are not entitled for pre mature payment and loan facility against it.</p>
            <p>• <strong>Penalty:</strong> After maturity date, payment on irregular accounts will be made after deducting the penalty amount maximum to the limit of interest earned on such account. No deduction will be made on the principal amount of such loan.</p>
            <p>• <strong>Tenure:</strong> The tenure of account is 12 months and above.</p>
            <p>• <strong>Payment Mode:</strong> All payments to the Company shall be made either in cash or by cheque draft against the receipt countersigned by its authorised signatory.</p>
            <p>• <strong>Passbook:</strong> A passbook will be issued to every Member Account Holder.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Systematic Savings Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Begin building wealth with small monthly deposits. Visit our branch to start your RD today.
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
