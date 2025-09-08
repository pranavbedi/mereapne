import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PiggyBank, Shield, Clock, CheckCircle, ArrowRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Loan Against Deposit',
  description: 'Get loan against your fixed deposits, recurring deposits, insurance policies, and National Saving Certificates without breaking them.',
};

export default function LoanAgainstDepositPage() {
  const depositTypes = [
    'Bank Fixed Deposit',
    'Recurring Deposit',
    'Insurance Policies',
    'National Saving Certificates (NSC)',
    'Mere Apne Fixed Deposits',
    'Mere Apne Recurring Deposits',
  ];

  const features = [
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: 'No Deposit Breakage',
      description: 'Get loan without breaking your deposits.',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Overdraft Facility',
      description: 'Structured as overdraft facility against deposits.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Tenure',
      description: 'No specific tenure - till deposit matures.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'No Prepayment Penalty',
      description: 'Foreclose loan anytime without penalty.',
    },
  ];

  return (
    <div className="space-y-12 pb-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Loan Against Deposit
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                If you have invested in bank fixed deposits, recurring deposits, insurance policies, 
                or National Saving Certificates, you can easily get a loan against them without having to break them. 
                This is similar to a personal loan structured as an overdraft facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us for Details
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
                alt="Loan against deposit - keep your investments intact"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Loan Against Deposit?</h2>
          <p className="text-lg text-gray-600">
            Keep your investments intact while accessing funds when needed.
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

      {/* Deposit Types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Deposits Accepted</h2>
          <p className="text-lg text-gray-600">
            We accept various types of deposits and investments as collateral for loans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depositTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loan Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loan Details</h2>
          <p className="text-lg text-gray-600">
            Key information about our loan against deposit facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Loan Tenure</h3>
            <p className="text-gray-600 mb-4">
              There is no specific tenure; you can avail of the loan till the deposit matures. 
              If unpaid till maturity, the loan is adjusted against the fixed deposit proceeds.
            </p>
            <p className="text-sm text-gray-500">
              * Terms and conditions apply. Contact us for detailed information.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mere Apne Deposits</h3>
            <p className="text-gray-600 mb-4">
              In case of a deposit with Mere Apne Small Fincare Nidhi Limited, 
              you can borrow after three months of investing.
            </p>
            <p className="text-sm text-gray-500">
              * Minimum holding period applies. Contact us for details.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">No need to break your deposits</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Structured as overdraft facility</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">No prepayment penalties</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">No restriction on end use of funds</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Can be used for business, investment, or property purchase</span>
              </div>
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
                  <h3 className="font-semibold text-gray-900 mb-1">Deposit Verification</h3>
                  <p className="text-gray-600">We verify your deposit documents and determine loan eligibility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Loan Application</h3>
                  <p className="text-gray-600">Submit loan application with required documentation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Overdraft Setup</h3>
                  <p className="text-gray-600">Overdraft facility is set up against your deposit.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fund Access</h3>
                  <p className="text-gray-600">Access funds as needed while keeping deposits intact.</p>
                </div>
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
            <p>• <strong>Members Only:</strong> Loan against deposit facility available exclusively to registered members.</p>
            <p>• <strong>Deposit Types:</strong> Bank FD, RD, Insurance Policies, NSC, and Mere Apne deposits accepted.</p>
            <p>• <strong>Mere Apne Deposits:</strong> Can borrow after 3 months of investing in Mere Apne deposits.</p>
            <p>• <strong>No Tenure:</strong> Loan available till deposit matures, then adjusted against proceeds.</p>
            <p>• <strong>No Penalty:</strong> No prepayment penalties for early loan closure.</p>
            <p>• <strong>End Use:</strong> No restriction on use of funds - business, investment, or property purchase.</p>
            <p>• <strong>Contact Us:</strong> For detailed terms, conditions, and interest rates, please contact our branch.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Loan Against Your Deposits?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Keep your investments intact while accessing funds when needed. Contact us for detailed information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us for Details
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
