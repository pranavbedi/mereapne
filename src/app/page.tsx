import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CalculatorFD } from '@/components/CalculatorFD';
import { CalculatorRD } from '@/components/CalculatorRD';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Shield, Users, Clock, Award, ArrowRight, PiggyBank, CreditCard } from 'lucide-react';
import siteData from '../../content/site.json';
import productsData from '../../content/products.json';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative hero-gradient-subtle py-16 lg:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 hero-title">
                Make Your Dreams Come True!
              </h1>
              <p className="text-xl text-slate-700 mb-8 hero-description">
                {siteData.tagline} - A trusted Nidhi company serving the financial needs of our community 
                with transparent, member-focused banking services since {siteData.established}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-cta">
                <Button size="lg" asChild>
                  <Link href="/membership">
                    <Users className="w-5 h-5 mr-2" />
                    Become a Member
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
        <Image
                src="/stock_image_family.png"
                alt="Happy family with financial security"
                width={600}
                height={400}
                className="rounded-lg shadow-lg hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 trust-indicator">
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <div className="text-2xl font-bold text-gray-900">Licensed</div>
              <div className="text-sm text-gray-600">Under Delhi Co-operative Society Act</div>
            </div>
            <div className="space-y-2 trust-indicator">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <div className="text-2xl font-bold text-gray-900">5000+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>
            <div className="space-y-2 trust-indicator">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-600">Years of Service</div>
            </div>
            <div className="space-y-2 trust-indicator">
              <Award className="w-12 h-12 text-primary mx-auto" />
              <div className="text-2xl font-bold text-gray-900">Secure</div>
              <div className="text-sm text-gray-600">Member-first Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <ScrollAnimation>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Financial Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive savings and lending solutions designed specifically for our members
              </p>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deposits */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Deposit Products</h3>
              </div>
              <div className="grid gap-4">
                {productsData.deposits.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/deposits/${product.slug}`}
                    className="p-4 rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 product-card group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-accent mb-1">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{product.teaser}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Loans */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Loan Products</h3>
              </div>
              <div className="grid gap-4">
                {productsData.loans.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/loans/${product.slug}`}
                    className="p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 product-card group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary mb-1">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{product.teaser}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/loans" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                View all loan products
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
        </section>
      </ScrollAnimation>

      {/* Calculators */}
      <ScrollAnimation>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Returns
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our calculators to plan your savings and see potential returns
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="calculator-card">
                <CalculatorFD />
              </div>
              <div className="calculator-card">
                <CalculatorRD />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey with us today. Membership is open to eligible individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/membership">
                View Membership Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Visit Our Branch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Members-only services.</strong> All rates are subject to change with prior notice. 
            Please visit our branch for the most current information and terms.
          </p>
        </div>
      </section>
    </div>
  );
}