import React, { useState } from 'react';
import { Scale, FileText, AlertCircle, Copyright, ShieldAlert, XCircle, Gavel, RefreshCw, ChevronRight } from 'lucide-react';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'acceptance',
      icon: Scale,
      title: 'Acceptance of Terms',
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service. These Terms of Service constitute a legally binding agreement between you and our company. Your continued use of the website signifies your acceptance of these terms and any modifications thereto. You represent that you have the legal capacity to enter into this agreement and that you are at least 18 years of age or have obtained parental consent to use our services.`
    },
    {
      id: 'usage',
      icon: FileText,
      title: 'Website Usage Rules',
      content: `You agree to use this website only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the website, including but not limited to accessing data not intended for you, attempting to probe or test the vulnerability of the system, or interfering with service to any user. You may not use any automated means to access the website for any purpose without our express written permission. Unauthorized use of this website may give rise to a claim for damages and constitute a criminal offense. You must not reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission.`
    },
    {
      id: 'disclaimer',
      icon: AlertCircle,
      title: 'Product Information Disclaimer',
      content: `All product descriptions, images, references, features, content, specifications, products, and prices of products and services described or depicted on this website are subject to change at any time without notice. The inclusion of any products or services on this website does not constitute or imply an endorsement or recommendation. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk. We reserve the right to limit quantities of items purchased and to refuse service to anyone at our sole discretion.`
    },
    {
      id: 'intellectual',
      icon: Copyright,
      title: 'Intellectual Property Rights',
      content: `Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use, subject to restrictions set in these terms and conditions. You must not republish, sell, rent, sub-license, reproduce, duplicate, or redistribute material from this website without our express written consent. No part of this website may be reproduced or transmitted in any form or by any means without prior written permission. Certain areas of this website may allow users to post content, and you retain ownership of such content but grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute such content in connection with the website and our business.`
    },
    {
      id: 'liability',
      icon: ShieldAlert,
      title: 'Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, in no event shall we be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website, or for any information, products, and services obtained through this website, whether based on contract, tort, strict liability, or otherwise, even if we have been advised of the possibility of damages. We shall not be held liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Nothing in these terms shall exclude or limit our liability for death or personal injury caused by negligence or for fraud or fraudulent misrepresentation.`
    },
    {
      id: 'termination',
      icon: XCircle,
      title: 'Termination of Access',
      content: `We reserve the right to terminate or suspend your access to the website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use the website will immediately cease. We may also remove or disable any content you have posted or contributed to the website. All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability. If you wish to terminate your account, you may discontinue using the website. We shall not be liable to you or any third party for any termination of your access to the website.`
    },
    {
      id: 'governing',
      icon: Gavel,
      title: 'Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. You agree that any legal action or proceeding between you and us for any purpose concerning these Terms or the parties' obligations hereunder shall be brought exclusively in the courts of the appropriate jurisdiction. Any claim under these Terms of Service must be brought within one year after the cause of action arises.`
    },
    {
      id: 'changes',
      icon: RefreshCw,
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the website. It is your responsibility to check these Terms periodically for changes. Your continued use of the website following the posting of any changes to these Terms constitutes acceptance of those changes.`
    }
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
           
          </div>
          <h1 className="text-5xl font-bold text-center mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto">
            Legal Agreement Governing Your Use of Our Services
          </p>
          <div className="mt-6 text-center">
            <span className="inline-block px-4 py-2  bg-opacity-10 rounded-full text-sm backdrop-blur-sm">
              Effective Date: December 27, 2025
            </span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-amber-800">
                Please read these Terms of Service carefully before using our website. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. These terms constitute a binding legal agreement between you and our company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setActiveSection(isActive ? null : section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-slate-500">
                          Section {index + 1}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mt-1">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      isActive ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {isActive && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {section.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Notice */}
        <div className="mt-12 bg-slate-900 text-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Legal Documentation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                These Terms of Service, together with our Privacy Policy and any other legal notices published by us on the website, constitute the entire agreement between you and our company concerning your use of the website.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <Gavel className="w-5 h-5 mr-2" />
                Questions or Concerns
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please contact our legal department.
              </p>
              
            </div>
          </div>    
        </div>

        {/* Acknowledgment */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
          <p className="text-sm text-gray-700 text-center">
            <strong>Acknowledgment:</strong> By using this website, you acknowledge that you have read these Terms of Service and agree to be bound by them. You also acknowledge that these Terms of Service supersede any prior agreements or understandings between you and our company.
          </p>
        </div>
      </div>
    </div>
  );
}