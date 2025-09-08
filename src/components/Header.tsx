'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const depositsMenu = [
    { name: 'Savings Account', href: '/deposits/savings' },
    { name: 'Fixed Deposit', href: '/deposits/fixed-deposit' },
    { name: 'Recurring Deposit', href: '/deposits/recurring-deposit' },
    { name: 'Monthly Income Scheme', href: '/deposits/monthly-income-scheme' },
  ];

  const loansMenu = [
    { name: 'Gold Loan', href: '/loans/gold' },
    { name: 'Loan Against Property', href: '/loans/property' },
    { name: 'Loan Against Deposit', href: '/loans/deposit' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/icon.png"
              alt="Mere Apne Fincare Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-gray-900">Mere Apne</span>
              <span className="text-sm text-gray-600 block leading-tight">Small Fincare Nidhi Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-primary nav-link">
              About
            </Link>
            
            {/* Deposits Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary nav-link">
                <span>Deposits</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {depositsMenu.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Loans Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary nav-link">
                <span>Loans</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {loansMenu.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/membership" className="text-gray-700 hover:text-primary nav-link">
              Membership
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary nav-link">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact">Visit Branch</Link>
            </Button>
            <Button asChild>
              <Link href="/membership">Become a Member</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-primary nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div>
                <div className="font-medium text-gray-900 mb-2">Deposits</div>
                <div className="pl-4 space-y-2">
                  {depositsMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium text-gray-900 mb-2">Loans</div>
                <div className="pl-4 space-y-2">
                  {loansMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-gray-600 hover:text-primary nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/membership" 
                className="block text-gray-700 hover:text-primary nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Membership
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-primary nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Visit Branch</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/membership">Become a Member</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
