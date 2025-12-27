import React, { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  Users,
  Bell,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'introduction',
      icon: Shield,
      title: 'Introduction',
      content:
        'Welcome to our Privacy Policy. We respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you use our services.'
    },
    {
      id: 'collection',
      icon: Eye,
      title: 'Information We Collect',
      content:
        'We collect information that you provide directly to us such as your name, email address, and usage data.'
    },
    {
      id: 'usage',
      icon: Users,
      title: 'How We Use Your Information',
      content:
        'We use your information to provide, improve, and secure our services. We never sell your personal data.'
    },
    {
      id: 'cookies',
      icon: Bell,
      title: 'Cookies & Tracking',
      content:
        'Cookies help us remember preferences and understand site usage. You can control them through browser settings.'
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Data Protection & Security',
      content:
        'We use encryption and security best practices to protect your data.'
    },
    {
      id: 'sharing',
      icon: Users,
      title: 'Third-Party Sharing',
      content:
        'We only share data with trusted partners required to operate our services.'
    },
    {
      id: 'rights',
      icon: Shield,
      title: 'User Rights',
      content:
        'You may access, update, or delete your personal data at any time.'
    },
    {
      id: 'updates',
      icon: Bell,
      title: 'Policy Updates',
      content:
        'We may update this policy. Continued use means acceptance.'
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Information',
      content:
        'For privacy questions, contact our team anytime.'
    }
  ];

  return (
    <div className="min-h-full bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Learn how we collect, use, and protect your data.
          </p>
          <div className="mt-2 text-sm text-gray-500">
            Last updated: December 27, 2025
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <div
                key={section.id}
                className="bg-white rounded-lg border shadow"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-lg font-semibold">
                      {section.title}
                    </h2>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 text-gray-700">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

     
      </div>
    </div>
  );
}
