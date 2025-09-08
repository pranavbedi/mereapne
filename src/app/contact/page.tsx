import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import siteData from '../../../content/site.json';
import branchesData from '../../../content/branches.json';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us. Visit our branch, call us, or send us a message. We are here to help with all your banking needs.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help you with all your banking needs. Visit our branch, 
            give us a call, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Visit our branch or contact us through any of the channels below. 
                Our team is ready to assist you with your banking needs.
              </p>
            </div>

            {/* Branch Information */}
            {branchesData.map((branch, index) => (
              <div key={index} className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-xl">{branch.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700">{branch.address}</p>
                      <p className="text-gray-700">{branch.city} - {branch.pin}</p>
                      {branch.mapUrl !== 'TBD' && (
                        <a 
                          href={branch.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 text-sm mt-1"
                        >
                          View on Map
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      {branch.phone.map((phone, phoneIndex) => (
                        <a 
                          key={phoneIndex}
                          href={`tel:${phone}`}
                          className="text-gray-700 hover:text-primary block"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* General Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">General Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href={`mailto:${siteData.contacts.email}`}
                    className="text-gray-700 hover:text-primary"
                  >
                    {siteData.contacts.email}
                  </a>
                </div>
                
                {siteData.contacts.whatsapp !== 'TBD' && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href={`https://wa.me/${siteData.contacts.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary"
                    >
                      WhatsApp: {siteData.contacts.whatsapp}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Grievance Officer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 mb-4">Grievance Officer</h3>
              <div className="space-y-2 text-sm text-yellow-700">
                <p><strong>Name:</strong> {siteData.grievanceOfficer.name}</p>
                <p><strong>Email:</strong> {siteData.grievanceOfficer.email}</p>
                <p><strong>Phone:</strong> {siteData.grievanceOfficer.phone}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" type="text" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="How can we help you?" />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Please describe your inquiry..."
                  required 
                />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the processing of my personal data as described in our{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  *
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                We typically respond to messages within 1-2 business days. 
                For urgent matters, please call our branch directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Visit Our Branch
          </h2>
          
          <div className="bg-white rounded-lg border shadow-sm p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-lg text-gray-700">{siteData.hours}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <h4 className="font-medium text-gray-900">Banking Services</h4>
                  <p className="text-sm text-gray-600">All deposit and loan services</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-gray-900">Customer Support</h4>
                  <p className="text-sm text-gray-600">Inquiries and assistance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" asChild>
              <a href={`tel:${siteData.contacts.phone[0]}`}>
                Call Now: {siteData.contacts.phone[0]}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
