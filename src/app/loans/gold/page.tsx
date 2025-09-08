import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Gold Loan',
  description: 'Get instant loan against your gold ornaments. Safe storage, competitive rates, and quick processing.',
};

export default function GoldLoanPage() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Processing',
      description: 'Get loan approval in just 30 minutes with minimal documentation.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe Storage',
      description: 'Your gold ornaments are stored in our secure, insured vaults.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Best Value',
      description: 'Get the maximum value for your gold with competitive interest rates.',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Flexible Repayment',
      description: 'Choose from multiple repayment options that suit your needs.',
    },
  ];

  const benefits = [
    'Loan against gold jewelry, coins, and bars',
    'Up to 75% of gold value as loan amount',
    'Competitive interest rates starting from 12% p.a.',
    'Flexible tenure from 6 months to 3 years',
    'No prepayment penalty',
    'Insurance coverage for stored gold',
    'Quick release of gold after repayment',
  ];

  const documents = [
    'Identity proof (Aadhaar/PAN/Passport)',
    'Address proof (Utility bills/Rent agreement)',
    'Gold purchase receipt (if available)',
    'Passport size photographs',
    'Income proof for higher loan amounts',
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Gold Loan
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                When you pledge your gold with us, rest assured, it is in the safest hands. 
                Come unlock the best value of your gold ornaments with our instant gold loan facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/loans">View All Loans</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/stock_image_mom_child_piggy_bank.png"
                alt="Gold loan - secure your financial future"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Gold Loan?</h2>
          <p className="text-lg text-gray-600">
            Experience the best-in-class gold loan service with unmatched benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
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
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bring Your Gold</h3>
                  <p className="text-gray-600">Visit our branch with your gold ornaments and required documents.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gold Evaluation</h3>
                  <p className="text-gray-600">Our experts will evaluate your gold and determine the loan amount.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instant Approval</h3>
                  <p className="text-gray-600">Complete documentation and get instant loan approval.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Receive Money</h3>
                  <p className="text-gray-600">Get cash immediately or direct transfer to your account.</p>
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
              Simple documentation for quick loan processing.
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
            <p>• <strong>Members Only:</strong> Gold loan facility available exclusively to registered members.</p>
            <p>• <strong>Gold Purity:</strong> Minimum 18 karat gold accepted for loan against ornaments.</p>
            <p>• <strong>Loan Amount:</strong> Up to 75% of gold value as per current market rates.</p>
            <p>• <strong>Interest Calculation:</strong> Interest calculated on daily reducing balance method.</p>
            <p>• <strong>Insurance:</strong> All pledged gold is covered under comprehensive insurance policy.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get Instant Gold Loan Today
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Visit our branch with your gold ornaments and get instant cash for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Visit Branch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/loans">View All Loans</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}


