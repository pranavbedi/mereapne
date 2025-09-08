import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { PiggyBank, ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsData from '../../../content/products.json';

export const metadata: Metadata = {
  title: 'Deposit Products',
  description: 'Explore our range of deposit products including Savings, Fixed Deposits, Recurring Deposits, and Monthly Income Schemes.',
};

export default function DepositsPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PiggyBank className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Deposit Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow your savings with our competitive deposit products. From everyday savings 
            to long-term investments, we have the right solution for your financial goals.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <TrendingUp className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Competitive Returns</h3>
            <p className="text-gray-600">
              Enjoy attractive interest rates that help your money grow faster than traditional banks.
            </p>
          </div>
          <div className="space-y-4">
            <Shield className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Secure & Trusted</h3>
            <p className="text-gray-600">
              Your deposits are safe with our regulated cooperative society backed by strong governance.
            </p>
          </div>
          <div className="space-y-4">
            <Clock className="w-12 h-12 text-accent mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Flexible Terms</h3>
            <p className="text-gray-600">
              Choose from various tenure options and deposit amounts that suit your financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Deposit Product</h2>
          <p className="text-lg text-gray-600">
            Each product is designed to meet different financial needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.deposits.map((product) => (
            <Link
              key={product.slug}
              href={`/deposits/${product.slug}`}
              className="group bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{product.teaser}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-accent font-medium group-hover:underline">
                    Learn more & view rates →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Calculators CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your Returns
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Use our calculators to estimate returns on your deposits and plan your investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/deposits/fixed-deposit#calculator">
                FD Calculator
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/deposits/recurring-deposit#calculator">
                RD Calculator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Important Information</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• <strong>Members-only services:</strong> All deposit products are available exclusively to society members.</p>
            <p>• <strong>Interest rates:</strong> Rates are subject to change with prior notice as per society policy.</p>
            <p>• <strong>Premature withdrawal:</strong> Terms and conditions apply for early withdrawals.</p>
            <p>• <strong>Minimum deposits:</strong> Each product has specific minimum deposit requirements.</p>
            <p>• <strong>Documentation:</strong> Valid KYC documents required for all deposits.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Saving?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Visit our branch to open your deposit account and start earning competitive returns.
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
