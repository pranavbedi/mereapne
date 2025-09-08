import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Shield, Clock, CheckCircle, ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Loan Against Property',
  description: 'Loan against property is a secured loan where you can avail funds by keeping your commercial/residential property as collateral.',
};

export default function LoanAgainstPropertyPage() {
  const propertyTypes = [
    'Self-owned residential property',
    'Self-owned and self-occupied residential property',
    'Self-owned but rented residential property',
    'Self-owned piece of land',
    'Self-owned commercial property',
    'Self-owned but rented commercial property',
  ];

  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Property as Collateral',
      description: 'Use your property as security for the loan.',
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Multiple Property Types',
      description: 'Residential, commercial, and land properties accepted.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '7 Year Tenure',
      description: 'Loan tenure of up to 7 years available.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secured Loan',
      description: 'Lower risk secured loan facility.',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Loan Against Property
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Loan against property is a secured loan where you can avail funds by keeping your 
                commercial/residential property as collateral. The value of your property decides 
                the amount of potential loan you will be sanctioned.
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
                src="/stock_image_house__with_keys.png"
                alt="Loan against property - unlock your property value"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Property Loan?</h2>
          <p className="text-lg text-gray-600">
            Unlock the value of your property with our competitive loan against property facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Property Accepted</h2>
          <p className="text-lg text-gray-600">
            We accept various types of properties as collateral for loan against property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type, index) => (
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
            Key information about our loan against property facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Loan Amount</h3>
            <p className="text-gray-600 mb-4">
              As a standard practice, Mere Apne Small Fincare Nidhi Limited generally sanctions 
              loans of approximately 65% of the value of your property.
            </p>
            <p className="text-sm text-gray-500">
              * Actual loan amount subject to property valuation and company policy.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Loan Tenure</h3>
            <p className="text-gray-600 mb-4">
              The tenure offered in Loan Against Property is 7 years.
            </p>
            <p className="text-sm text-gray-500">
              * Terms and conditions apply. Contact us for detailed information.
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
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Secured loan with property as collateral</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Multiple property types accepted</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Up to 65% of property value as loan amount</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">7-year loan tenure</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Property remains in your possession</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Property Valuation</h3>
                  <p className="text-gray-600">Our experts will evaluate your property and determine the loan amount.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Documentation</h3>
                  <p className="text-gray-600">Submit required documents and complete the application process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Loan Approval</h3>
                  <p className="text-gray-600">Get loan approval with competitive terms and conditions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Disbursement</h3>
                  <p className="text-gray-600">Receive loan amount while retaining property ownership.</p>
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
            <p>• <strong>Members Only:</strong> Loan against property facility available exclusively to registered members.</p>
            <p>• <strong>Property Valuation:</strong> Loan amount is determined based on property valuation and company policy.</p>
            <p>• <strong>Loan Amount:</strong> Generally up to 65% of property value as per standard practice.</p>
            <p>• <strong>Tenure:</strong> Loan tenure is 7 years for property loans.</p>
            <p>• <strong>Property Types:</strong> Residential, commercial, and land properties accepted.</p>
            <p>• <strong>Contact Us:</strong> For detailed terms, conditions, and interest rates, please contact our branch.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Loan Against Your Property?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact us for detailed information about loan terms, interest rates, and application process.
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
