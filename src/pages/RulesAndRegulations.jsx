import React from 'react';
import { BookOpen, XOctagon, CheckCircle, MessageSquare, ShoppingCart, Scale, AlertTriangle, Shield } from 'lucide-react';

export default function RulesAndRegulations() {
  const rules = [
    {
      id: 'usage',
      icon: BookOpen,
      title: 'Website Usage Rules',
      rules: [
        'You must be at least 18 years old to use this website or have parental consent.',
        'Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access.',
        'You are responsible for all activities that occur under your account.',
        'Do not share your account with others or allow multiple users to access a single account.',
        'Use the website only for its intended purpose and in accordance with all applicable laws.',
        'Do not attempt to gain unauthorized access to any portion of the website or any other systems or networks.'
      ]
    },
    {
      id: 'prohibited',
      icon: XOctagon,
      title: 'Prohibited Activities',
      rules: [
        'Uploading, posting, or transmitting any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.',
        'Impersonating any person or entity or falsely stating or misrepresenting your affiliation with any person or entity.',
        'Engaging in any form of automated data collection, including scraping, data mining, or use of bots without express written permission.',
        'Interfering with or disrupting the website or servers or networks connected to the website.',
        'Attempting to decipher, decompile, disassemble, or reverse engineer any of the software comprising the website.',
        'Using the website to transmit any viruses, worms, defects, Trojan horses, or other harmful items.',
        'Violating any applicable local, state, national, or international law.',
        'Collecting or storing personal data about other users without their express consent.'
      ]
    },
    {
      id: 'accuracy',
      icon: CheckCircle,
      title: 'Content Accuracy',
      rules: [
        'Provide accurate, current, and complete information when creating an account or placing orders.',
        'Update your account information promptly if any changes occur.',
        'Do not provide false or misleading information about products, services, or your identity.',
        'Verify all information before submission, as you are responsible for the accuracy of data you provide.',
        'Understand that while we strive for accuracy, information on the website may contain errors or omissions.',
        'Report any inaccuracies or errors you discover to our support team immediately.',
        'Do not rely solely on website content for critical decisions without independent verification.'
      ]
    },
    {
      id: 'communication',
      icon: MessageSquare,
      title: 'Communication Guidelines',
      rules: [
        'Communicate respectfully and professionally with our staff and other users at all times.',
        'Do not use offensive, abusive, or discriminatory language in any communications.',
        'Respond to official communications from us in a timely manner.',
        'Use official communication channels provided on the website for inquiries and support.',
        'Do not spam, send unsolicited messages, or engage in excessive communication.',
        'Respect the privacy of other users and do not share their personal information.',
        'Provide clear and detailed information when submitting inquiries or complaints.',
        'Allow reasonable time for responses to your communications during business hours.'
      ]
    },
    {
      id: 'orders',
      icon: ShoppingCart,
      title: 'Order & Inquiry Guidelines',
      rules: [
        'Review all order details carefully before confirming your purchase.',
        'Ensure payment information is accurate and that you have sufficient funds or credit available.',
        'Provide a valid and monitored email address for order confirmations and updates.',
        'Submit inquiries through the appropriate channels with complete and relevant information.',
        'Allow stated processing times for orders and responses to inquiries.',
        'Do not place duplicate orders or inquiries unless specifically instructed to do so.',
        'Understand that orders are subject to acceptance and availability.',
        'Notify us immediately if you need to modify or cancel an order, though we cannot guarantee changes after submission.'
      ]
    },
    {
      id: 'compliance',
      icon: Scale,
      title: 'Compliance with Laws',
      rules: [
        'You must comply with all applicable local, state, national, and international laws and regulations.',
        'Do not use the website for any unlawful purpose or to conduct any illegal activity.',
        'Respect all intellectual property rights, including copyrights, trademarks, and patents.',
        'Comply with export control laws and do not access the website from prohibited jurisdictions.',
        'Adhere to data protection and privacy laws applicable in your region.',
        'Do not engage in money laundering, fraud, or any other financial crimes.',
        'Understand that you are solely responsible for ensuring your use of the website complies with applicable laws.',
        'Cooperate with law enforcement and regulatory authorities as required by law.'
      ]
    },
    {
      id: 'consequences',
      icon: AlertTriangle,
      title: 'Violation Consequences',
      rules: [
        'Violations of these rules may result in immediate suspension or termination of your account without prior notice.',
        'We reserve the right to refuse service to anyone who violates these rules.',
        'Repeated violations will result in permanent banning from the website and all associated services.',
        'You may be held legally and financially responsible for damages resulting from your violations.',
        'We may report illegal activities to appropriate law enforcement authorities.',
        'Removal of content that violates these rules may occur without notification.',
        'No refunds will be provided for accounts terminated due to rule violations.',
        'We reserve the right to pursue legal action for serious violations that cause harm to our business or users.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-linear-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20  bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-center mb-4">
            Rules & Regulations
          </h1>
          <p className="text-xl text-red-100 text-center max-w-3xl mx-auto">
            Guidelines for Proper and Lawful Use of Our Services
          </p>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="max-w-6xl mx-auto px-4 -mt-6 sm:px-6 lg:px-8">
        <div className="bg-white border-l-4 border-red-600 shadow-xl rounded-r-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1 shrink-0" />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Compliance is Mandatory
              </h3>
              <p className="text-gray-700">
                All users must comply with these rules and regulations. Failure to do so may result in account suspension, termination, or legal action. By using our website, you agree to abide by all rules outlined below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {rules.map((section, sectionIndex) => {
            const Icon = section.icon;
            
            return (
              <div key={section.id}>
                {/* Section Header */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-linear-to-r from-gray-50 to-white px-6 py-5 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-1">
                          Section {sectionIndex + 1}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  <div className="px-6 py-6">
                    <div className="space-y-4">
                      {section.rules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="flex items-start space-x-3">
                          <div className="shrink-0 mt-1">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-red-600">
                                {ruleIndex + 1}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">
                            {rule}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider between sections */}
                {sectionIndex < rules.length - 1 && (
                  <div className="my-8 border-t border-gray-200"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Warning */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Important Reminder
              </h3>
              <p className="text-red-800 leading-relaxed mb-4">
                These rules and regulations are binding and enforceable. We take violations seriously and will take appropriate action to protect our platform, users, and business. It is your responsibility to understand and comply with all rules outlined on this page.
              </p>
              <p className="text-red-800 leading-relaxed">
                If you have questions about any rule or need clarification, please contact our support team before proceeding. Ignorance of these rules does not excuse violations.
              </p>
            </div>
          </div>
        </div>

       

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: December 27, 2025
          </p>
        </div>
      </div>
    </div>
  );
}