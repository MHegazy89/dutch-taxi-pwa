'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white rounded-2xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Home</span>
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
            <Shield className="w-4 h-4" />
            <span>Privacybeleid / Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            TaxiMaster TVT — CBR Taxi Theorie & Praktijk · NUVANDA
          </p>
          <p className="text-slate-500 text-xs">
            Last updated: September 12, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              TaxiMaster TVT (&ldquo;the App&rdquo;) is an educational application developed and published by <strong>NUVANDA</strong>. 
              This privacy policy explains how we handle your data when you use the App. We are committed to protecting 
              your privacy and being transparent about our data practices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Data Collection — We Collect Nothing</h2>
            <p>
              <strong>TaxiMaster TVT does not collect, transmit, or store any personal data on external servers.</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>No user accounts or registration required</li>
              <li>No email addresses collected</li>
              <li>No names, phone numbers, or contact details</li>
              <li>No location data or GPS tracking</li>
              <li>No usage analytics or crash reporting sent to third parties</li>
              <li>No cookies or tracking pixels</li>
              <li>No advertising SDKs or ad networks</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Local Data Storage</h2>
            <p>
              All your study progress — including flashcard review history, practice question scores, 
              streak data, and exam results — is stored <strong>locally on your device only</strong> using 
              the browser&apos;s localStorage and IndexedDB APIs. This data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Never leaves your device</li>
              <li>Is not accessible by NUVANDA or any third party</li>
              <li>Is automatically deleted when you uninstall the app or clear browser data</li>
              <li>Cannot be recovered by NUVANDA once deleted</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Third-Party Services</h2>
            <p>
              The App does not integrate any third-party analytics, advertising, or tracking services. 
              The only external service used is <strong>Google Fonts</strong> (Inter typeface) which is loaded 
              for typography — Google&apos;s own privacy policy applies to that service.
            </p>
            <p>
              If you access the App through the <strong>Google Play Store</strong>, Google&apos;s own privacy policy 
              and data practices apply to the download and installation process, which is outside of our control.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. In-App Purchases</h2>
            <p>
              Premium features are available via subscription. All payment processing is handled entirely by the 
              <strong> Google Play Store billing infrastructure</strong>. NUVANDA does not directly handle, store, 
              or have access to your payment card details, banking information, or Google account credentials.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">6. Children&apos;s Privacy</h2>
            <p>
              TaxiMaster TVT is an educational app designed for adults preparing for the CBR taxi driver 
              theory examination. It is not directed at children under 16 years of age. We do not knowingly 
              collect any data from children.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">7. Your Rights (AVG / GDPR)</h2>
            <p>
              Since we do not collect or process any personal data, there is no personal data to access, 
              modify, export, or delete on our end. All your study data is stored locally on your device 
              and under your full control. You can delete all App data at any time by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Uninstalling the App from your device</li>
              <li>Clearing the App&apos;s storage in your device settings</li>
              <li>Clearing browser data (for the web version)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected in the 
              &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or the App, please contact us:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1.5">
              <p className="font-bold text-white">NUVANDA</p>
              <p className="text-slate-400">Email: info@nuvanda.com</p>
              <p className="text-slate-400">Website: nuvanda.com</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-6 pb-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NUVANDA — TaxiMaster TVT. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </div>
  );
}
