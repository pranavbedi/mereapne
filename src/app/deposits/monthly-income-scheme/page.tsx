import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, TrendingUp, Shield, Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Monthly Income Scheme (MIS)',
  description: 'Invest once and receive regular monthly income. Traditional participating product providing deferred regular income for many years.',
};

export default function MonthlyIncomeSchemeePage() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Regular Monthly Income',
      description: 'Receive fixed monthly income for many years from your one-time investment.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Participating Benefits',
      description: 'Traditional participating product with potential for additional returns.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Investment',
      description: 'Safe and secure investment option with guaranteed monthly payouts.',
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Flexible Plans',
      description: 'Choose from various investment amounts and payout schedules.',
    },
  ];

  const benefits = [
    'One-time investment for long-term monthly income',
    'Traditional participating product benefits',
    'Deferred regular income for many years',
    'Flexible payout schedule options',
    'Competitive returns on investment',
    'Safe and secure investment option',
    'Nomination facility available',
    'Tax benefits as applicable',
    'Professional fund management',
    'Regular portfolio updates',
  ];

  const samplePlans = [
    {
      investment: 100000,
      monthlyIncome: 850,
      tenure: '5 years',
      totalReturns: 151000,
    },
    {
      investment: 250000,
      monthlyIncome: 2125,
      tenure: '5 years',
      totalReturns: 377500,
    },
    {
      investment: 500000,
      monthlyIncome: 4250,
      tenure: '5 years',
      totalReturns: 755000,
    },
    {
      investment: 1000000,
      monthlyIncome: 8500,
      tenure: '5 years',
      totalReturns: 1510000,
    },
  ];

  const documents = [
    'Identity proof (Aadhaar/PAN/Passport/Voter ID)',
    'Address proof (Utility bills/Rent agreement/Property documents)',
    'Passport size photographs (4 nos.)',
    'Income proof (Salary slips/ITR/Business proof)',
    'Investment amount (Cash/Cheque/DD)',
    'Nominee details and documents',
  ];

  return (
    <div className="space-y-12 pb-4">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Monthly Income Scheme (MIS)
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Monthly Income Plan is a traditional participating product, which provides 
                deferred regular income to the customer for many years. Invest once and 
                enjoy regular monthly payouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Invest Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/deposits">View All Deposits</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/stock_image_family.png"
                alt="Monthly income scheme - regular income for your family"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our MIS?</h2>
          <p className="text-lg text-gray-600">
            Perfect for those seeking regular income from their investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Plans */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Investment Plans</h2>
          <p className="text-lg text-gray-600">
            See how your investment can generate regular monthly income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-primary">
                  ₹{plan.investment.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-600">Investment Amount</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Income:</span>
                  <span className="font-semibold text-green-600">
                    ₹{plan.monthlyIncome.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenure:</span>
                  <span className="font-medium">{plan.tenure}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Returns:</span>
                    <span className="font-bold text-primary">
                      ₹{plan.totalReturns.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            * Sample calculations for illustration purposes. Actual returns may vary based on market conditions and company policy.
          </p>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Investment</h3>
                  <p className="text-gray-600">Select your investment amount and preferred payout schedule.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Make Investment</h3>
                  <p className="text-gray-600">Complete documentation and make your one-time investment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Start Receiving</h3>
                  <p className="text-gray-600">Begin receiving regular monthly income as per your plan.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enjoy Returns</h3>
                  <p className="text-gray-600">Receive consistent monthly payments for the entire tenure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents Required</h2>
            <p className="text-lg text-gray-600">
              Simple documentation for quick investment processing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Important Information</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Members Only:</strong> MIS facility available exclusively to registered members.</p>
            <p>• <strong>Minimum Investment:</strong> Minimum investment amount as per company policy.</p>
            <p>• <strong>Payout Schedule:</strong> Monthly income credited directly to your account.</p>
            <p>• <strong>Market Risk:</strong> Returns subject to market conditions and company performance.</p>
            <p>• <strong>Tax Implications:</strong> Income tax applicable as per prevailing rates.</p>
            <p>• <strong>Premature Withdrawal:</strong> Early withdrawal may attract penalties as per terms.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Monthly Income Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Invest today and enjoy regular monthly income for years to come.
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
