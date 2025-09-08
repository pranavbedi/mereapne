import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CreditCard, ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsData from '../../../content/products.json';

export const metadata: Metadata = {
  title: 'Loan Products',
  description: 'Explore our range of loan products including Gold Loans, Property Loans, and Loans Against Deposits.',
};

export default function LoansPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CreditCard className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loan Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant loans for your personal and business needs. Quick processing, 
            competitive rates, and flexible repayment options.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <Shield className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Secure Process</h3>
            <p className="text-gray-600">
              Safe and secure loan processing with complete transparency and documentation.
            </p>
          </div>
          <div className="space-y-4">
            <Clock className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Quick Approval</h3>
            <p className="text-gray-600">
              Fast loan processing and approval to meet your urgent financial needs.
            </p>
          </div>
          <div className="space-y-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Flexible Terms</h3>
            <p className="text-gray-600">
              Competitive interest rates with flexible repayment options tailored for you.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Loan Product</h2>
          <p className="text-lg text-gray-600">
            Each loan product is designed to meet different financial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.loans.map((product) => (
            <Link
              key={product.slug}
              href={`/loans/${product.slug}`}
              className="group bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={
                    product.slug === 'gold' 
                      ? '/stock_image_mom_child_piggy_bank.png'
                      : product.slug === 'property'
                      ? '/stock_image_house__with_keys.png'
                      : '/stock_image_family.png'
                  }
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{product.teaser}</p>
                
                {product.features && (
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium group-hover:underline">
                    Learn more →
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our branch to discuss your loan requirements and get instant approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Visit Branch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Important Information</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Members Only:</strong> All loan products are available exclusively to registered members.</p>
            <p>• <strong>Documentation:</strong> Valid KYC documents and income proof required for all loans.</p>
            <p>• <strong>Interest Rates:</strong> Rates are subject to change as per company policy.</p>
            <p>• <strong>Processing:</strong> Loan processing time varies based on loan type and documentation.</p>
            <p>• <strong>Collateral:</strong> Security requirements vary by loan product and amount.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
