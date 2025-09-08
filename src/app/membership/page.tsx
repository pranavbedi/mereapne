import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, FileText, CreditCard, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import siteData from '../../../content/site.json';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join our cooperative society. Learn about eligibility criteria, membership process, fees, and benefits.',
};

export default function MembershipPage() {
  const eligibilityCriteria = [
    'Age: 18 years and above',
    'Resident of Delhi NCR',
    'Valid identity and address proof',
    'Minimum income requirement as per society norms',
    'Good credit history and references',
    'Willing to abide by society rules and regulations',
  ];

  const requiredDocuments = [
    { category: 'Identity Proof', documents: ['Aadhaar Card', 'PAN Card', 'Passport', 'Voter ID'] },
    { category: 'Address Proof', documents: ['Aadhaar Card', 'Utility Bills', 'Rent Agreement', 'Property Documents'] },
    { category: 'Income Proof', documents: ['Salary Slips (3 months)', 'Bank Statements (6 months)', 'ITR', 'Business Proof'] },
    { category: 'Photographs', documents: ['Passport size photos (4 nos.)', 'Nominee photograph (2 nos.)'] },
  ];

  const membershipSteps = [
    {
      step: 1,
      title: 'Visit Branch',
      description: 'Visit our branch with required documents during business hours.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Our team will verify your documents and check eligibility.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 3,
      title: 'Application Form',
      description: 'Fill out the membership application form completely.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay the membership fee and initial share capital.',
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      step: 5,
      title: 'Approval',
      description: 'Application review and membership approval (7-10 working days).',
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: 'What is the membership fee?',
      answer: 'The membership fee includes admission fee and share capital as per society bylaws. Please visit our branch for current fee structure.',
    },
    {
      question: 'How long does the membership process take?',
      answer: 'After submitting all required documents, the membership approval process typically takes 7-10 working days.',
    },
    {
      question: 'Can I nominate someone for my account?',
      answer: 'Yes, you can nominate up to 3 people for your account. Nominee details must be provided during membership application.',
    },
    {
      question: 'What are the benefits of membership?',
      answer: 'Members enjoy competitive interest rates, low processing fees, dividend sharing, voting rights, and access to all society services.',
    },
    {
      question: 'Is there a minimum balance requirement?',
      answer: 'Yes, members must maintain minimum share capital and savings account balance as per society norms.',
    },
    {
      question: 'Can I transfer my membership?',
      answer: 'Membership is non-transferable. However, legal heirs can continue the membership as per society rules.',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Become a Member
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our cooperative society and become part of a community committed to 
            mutual growth, financial security, and transparent banking services.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-gray-600">
            To become a member of our society, you must meet the following requirements:
          </p>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-700">{criteria}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
          <p className="text-lg text-gray-600">
            Please bring the following documents when visiting our branch:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requiredDocuments.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">{doc.category}</h3>
              <ul className="space-y-2">
                {doc.documents.map((document, docIndex) => (
                  <li key={docIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-sm text-gray-600">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Process</h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to become a member of our society:
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {membershipSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < membershipSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about membership:
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                <span className="font-medium text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our branch today to begin your membership application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="/contact">
                Visit Our Branch
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/downloads">Download Forms</a>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm opacity-75">
              <strong>Branch Hours:</strong> {siteData.hours} | 
              <strong className="ml-2">Phone:</strong> {siteData.contacts.phone[0]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
