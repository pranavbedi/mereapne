import React from 'react';
import { Metadata } from 'next';
import { Shield, Users, Building, Calendar } from 'lucide-react';
import siteData from '../../../content/site.json';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteData.orgName}, our mission, values, and commitment to serving our members since our establishment.`,
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Our Society
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A member-owned cooperative society dedicated to providing secure financial services 
            and building prosperity for our community through transparent, ethical banking practices.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To provide accessible, affordable, and reliable financial services to our members 
                while fostering economic growth and financial inclusion in our community.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the most trusted cooperative society, empowering members through 
                innovative financial solutions and building a stronger, more prosperous community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Trust & Transparency</h3>
                  <p className="text-gray-600">Open, honest dealings with complete transparency in all operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Member-Centric</h3>
                  <p className="text-gray-600">Every decision is made with our members&apos; best interests at heart.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Community Focus</h3>
                  <p className="text-gray-600">Building stronger communities through financial empowerment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Long-term Stability</h3>
                  <p className="text-gray-600">Sustainable growth and financial stability for generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Registration</h2>
            <p className="text-lg text-gray-600">
              Our society is duly registered and operates under the regulatory framework 
              of cooperative societies in Delhi.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Registered Under</h3>
                <p className="text-gray-600">{siteData.reg.act}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Registration Number</h3>
                <p className="text-gray-600">{siteData.reg.regNo}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Date of Registration</h3>
                <p className="text-gray-600">{siteData.reg.date}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Domain</h3>
                <p className="text-gray-600">{siteData.domain}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a cooperative society, we provide comprehensive financial services 
            exclusively to our members, ensuring personalized attention and competitive returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-accent/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Deposit Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Savings Deposit - Your everyday banking account</li>
              <li>• Fixed Deposit - Guaranteed returns with flexible tenures</li>
              <li>• Recurring Deposit - Systematic savings with compounding benefits</li>
              <li>• Monthly Income Scheme - Regular income from your investments</li>
            </ul>
          </div>

          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Loan Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Regular Loan - Multi-purpose financing solutions</li>
              <li>• Emergency Loan - Quick assistance during urgent needs</li>
              <li>• Medical Loan - Healthcare expense coverage</li>
              <li>• Two-Wheeler Loan - Vehicle financing options</li>
              <li>• Loans Against Deposits - Leverage your savings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governance & Management</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our society is governed by a democratically elected Board of Directors, 
            ensuring member representation and transparent decision-making processes.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Member Rights & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-2 text-gray-600">
                <li>• Voting rights in general body meetings</li>
                <li>• Access to all financial services</li>
                <li>• Dividend sharing from profits</li>
                <li>• Transparent financial reporting</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive interest rates</li>
                <li>• Personalized customer service</li>
                <li>• Low processing fees</li>
                <li>• Community-focused initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Learn more about membership requirements and start your journey with us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/membership"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View Membership Details
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
