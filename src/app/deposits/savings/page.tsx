import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PiggyBank, Shield, CreditCard, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Savings Account',
  description: 'Open your savings account with us. Enjoy competitive interest rates, ATM access, and online banking facilities.',
};

export default function SavingsAccountPage() {
  const features = [
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: 'Interest Earning',
      description: 'Earn competitive interest on your daily balance with our savings account.',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'ATM/Debit Card',
      description: 'Access your money anytime with our ATM and debit card facilities.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Online Banking',
      description: 'Manage your account online with our secure digital banking platform.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Banking',
      description: 'Your deposits are safe with our regulated and secure banking system.',
    },
  ];

  const benefits = [
    'Nominal minimum balance requirement',
    'Competitive interest rates on daily balance',
    'Free passbook facility',
    'ATM/Debit card with nationwide access',
    'Online banking and mobile app access',
    'No hidden charges or fees',
    'Nomination facility available',
    'Statement of account facility',
    'Cheque book facility',
    'Standing instruction facility',
  ];

  const documents = [
    'Identity proof (Aadhaar/PAN/Passport/Voter ID)',
    'Address proof (Utility bills/Rent agreement/Property documents)',
    'Passport size photographs (4 nos.)',
    'Income proof (Salary slips/ITR/Business proof)',
    'Initial deposit amount',
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Savings Account
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                An interest-bearing deposit account that provides a modest interest rate 
                while keeping your money safe and easily accessible for your daily needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Open Account
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
                src="/stock_image_mom_child_piggy_bank.png"
                alt="Savings account - secure your future"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Savings Account?</h2>
          <p className="text-lg text-gray-600">
            Experience modern banking with traditional trust and security.
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

      {/* Benefits & Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Benefits</h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Open Account</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Branch</h3>
                  <p className="text-gray-600">Visit our branch with required documents and initial deposit.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fill Application</h3>
                  <p className="text-gray-600">Complete the account opening form with your personal details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Document Verification</h3>
                  <p className="text-gray-600">Our team will verify your documents and process your application.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Account Activation</h3>
                  <p className="text-gray-600">Receive your passbook, ATM card, and start banking immediately.</p>
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
              Simple documentation for quick account opening.
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

      {/* Digital Banking */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Banking Services</h2>
          <p className="text-lg text-gray-600">
            Access your account anytime, anywhere with our digital banking solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Mobile Banking</h3>
            <p className="text-gray-600 mb-4">
              Download our mobile app for 24/7 account access and transactions.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <CreditCard className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">ATM Network</h3>
            <p className="text-gray-600 mb-4">
              Access your funds at ATMs nationwide with our debit card.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Secure Banking</h3>
            <p className="text-gray-600 mb-4">
              Bank with confidence using our secure and encrypted platform.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Important Information</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Members Only:</strong> Savings account facility available exclusively to registered members.</p>
            <p>• <strong>Minimum Balance:</strong> Nominal minimum balance requirement as per company policy.</p>
            <p>• <strong>Interest Rates:</strong> Interest calculated on daily balance and credited quarterly.</p>
            <p>• <strong>Charges:</strong> No hidden charges. All fees are transparently communicated.</p>
            <p>• <strong>Nomination:</strong> Nomination facility available for account security.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Open Your Savings Account?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Start your savings journey with us today. Visit our branch to open your account.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Visit Branch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/membership">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
