import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import siteData from '../../content/site.json';
import branchesData from '../../content/branches.json';

export function Footer() {
  const depositsLinks = [
    { name: 'Savings Deposit', href: '/deposits/savings' },
    { name: 'Fixed Deposit', href: '/deposits/fixed-deposit' },
    { name: 'Recurring Deposit', href: '/deposits/recurring-deposit' },
    { name: 'Monthly Income Scheme', href: '/deposits/monthly-income-scheme' },
  ];

  const loansLinks = [
    { name: 'Regular Loan', href: '/loans/regular' },
    { name: 'Emergency Loan', href: '/loans/emergency' },
    { name: 'Medical Loan', href: '/loans/medical' },
    { name: 'Household Loan', href: '/loans/household' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Downloads', href: '/downloads' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Mere Apne Fincare Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-bold text-lg">Mere Apne Fincare</span>
                <span className="text-sm text-gray-400 block leading-tight">
                  Small Fincare Nidhi Limited
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {siteData.tagline}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Registered under {siteData.reg.act}</p>
              <p>Registration No: {siteData.reg.regNo}</p>
              <p>Date of Registration: {siteData.reg.date}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium text-gray-300 mb-2">Deposits</h4>
                <ul className="space-y-1">
                  {depositsLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <h4 className="font-medium text-gray-300 mb-2">Loans</h4>
                <ul className="space-y-1">
                  {loansLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact & Support</h3>
            <div className="space-y-3 mb-6">
              {branchesData[0] && (
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                    <div className="text-sm text-gray-400">
                      <div className="font-medium">{branchesData[0].name}</div>
                      <div>{branchesData[0].address}, {branchesData[0].city}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{siteData.contacts.phone[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{siteData.contacts.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{siteData.hours}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h4 className="font-medium text-gray-300 mb-2">Legal</h4>
              <ul className="space-y-1">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} {siteData.orgName}. All rights reserved.
            </div>
            <div className="text-sm text-gray-400 text-center lg:text-right">
              <p className="font-medium">Members-only services</p>
              <p>Rates subject to change with prior notice</p>
            </div>
          </div>
          
          {/* Grievance Officer */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              Grievance Officer: {siteData.grievanceOfficer.name} | 
              Email: {siteData.grievanceOfficer.email} | 
              Phone: {siteData.grievanceOfficer.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
