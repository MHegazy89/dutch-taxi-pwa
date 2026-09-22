'use client';

import React from 'react';
import Link from 'next/link';
import { PRICING_TIERS, COMPARISON_POINTS } from '@/lib/pricingData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from '../(dashboard)/components/LanguageSwitcher';
import {
  Check,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  Flame,
  Zap,
  Star,
  Trophy
} from 'lucide-react';
import { activatePremium, getAccessTier } from '@/lib/accessControl';

export default function UpgradePage() {
  const { language, t, isRtl } = useLanguage();
  const [isPremiumActive, setIsPremiumActive] = React.useState(false);

  React.useEffect(() => {
    setIsPremiumActive(getAccessTier().isPremium);
  }, []);

  return (
    <div className={`min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8 ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white rounded-2xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>{t.navHome}</span>
            </Button>
          </Link>

          <LanguageSwitcher />
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
            <Sparkles className="w-4 h-4" />
            <span>TaxiMaster TVT Premium Pas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {language === 'ar'
              ? 'استثمر في رخصة التاكسي.. وانجح من المحاولة الأولى'
              : language === 'en'
              ? 'Invest in Your CBR Taxi Diploma — Pass on Your 1st Attempt'
              : 'Investeer in je CBR Taxidiploma — Slaag in 1 Keer'}
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'مقارنة بالدورات التقليدية المكلفة التي لا تقدم محاكاة للامتحان العملي ولا تدعم اللغة العربية، نمنحك كل ما تحتاجه للنجاح.'
              : language === 'en'
              ? 'Unlike generic driving schools charging €150 without practical roleplay or bilingual support, TaxiMaster TVT delivers unfair advantages.'
              : 'Waar traditionele rijscholen tot €150 rekenen zonder praktijksimulatie of A0-vertalingen, biedt TaxiMaster TVT de complete voorsprong.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isHighlight = tier.highlight;
            const tierName = language === 'ar' ? tier.nameAr : tier.name;
            const tierDuration = language === 'ar' ? tier.durationAr : tier.duration;
            const tierBadge = language === 'ar' ? tier.badgeAr : tier.badge;

            return (
              <Card
                key={tier.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl backdrop-blur-xl transition-all duration-300 ${
                  isHighlight
                    ? 'bg-gradient-to-b from-slate-900/90 via-slate-900 to-orange-950/40 border-2 border-orange-500 shadow-2xl shadow-orange-500/20 md:-translate-y-2'
                    : 'bg-slate-900/70 border border-white/10 shadow-xl'
                }`}
              >
                {/* Badge if present */}
                {tierBadge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-500 text-slate-950 font-black px-3 py-1 shadow-md shadow-orange-500/40 text-xs">
                      {tierBadge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-white">{tierName}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{tierDuration}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {tier.price}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      {tier.originalPrice}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 italic">
                    {language === 'ar'
                      ? tier.targetAudience.ar
                      : language === 'en'
                      ? tier.targetAudience.en
                      : tier.targetAudience.nl}
                  </p>

                  <div className="border-t border-white/10 pt-4 space-y-2.5">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">
                          {language === 'ar'
                            ? feat.ar
                            : language === 'en'
                            ? feat.en
                            : feat.nl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="pt-6">
                  <Button
                    className={`w-full font-bold h-12 rounded-2xl shadow-lg transition-all ${
                      isHighlight
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                    onClick={() => {
                      activatePremium('complete', 52);
                      setIsPremiumActive(true);
                      alert(
                        language === 'ar'
                          ? 'تم تفعيل الحساب المميز بالكامل بنجاح! جميع الميزات والامتحانات مفتوحة لك الآن.'
                          : language === 'en'
                          ? 'Full Premium Access successfully unlocked! All modules and exams are now available.'
                          : 'Volledige Premium Toegang succesvol ontgrendeld! Alle modules en examens zijn geopend.'
                      );
                    }}
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    <span>
                      {isPremiumActive
                        ? (language === 'ar' ? 'تم فتح كافة الميزات ✓' : language === 'en' ? 'Full Access Unlocked ✓' : 'Volledig Ontgrendeld ✓')
                        : (language === 'ar' ? 'تفعيل الحساب الكامل (تجريبي)' : language === 'en' ? 'Unlock Full Access (QA Mode)' : 'Activeer Volledige Toegang')}
                    </span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <Card className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-black text-white">
              {language === 'ar'
                ? 'لماذا يتفوق TaxiMaster TVT على مدارس السياقة التقليدية؟'
                : language === 'en'
                ? 'Why TaxiMaster TVT Outperforms Traditional Courses'
                : 'Waarom TaxiMaster TVT Traditionele Opleiders Overtreft'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'ar'
                ? 'مقارنة مباشرة مع المعاهد التي تطلب 150 يورو لبنوك أسئلة وفيديوهات عادية'
                : 'Direct comparison with training institutes charging €150 for video-only packages'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-3">Onderdeel</th>
                  <th className="py-3 px-3 text-red-400">Traditionele Cursus (€150)</th>
                  <th className="py-3 px-3 text-emerald-400 font-bold">TaxiMaster TVT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {COMPARISON_POINTS.map((pt, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="py-3.5 px-3 font-semibold text-slate-200">
                      {pt.feature}
                    </td>
                    <td className="py-3.5 px-3 text-slate-400">{pt.traditional}</td>
                    <td className="py-3.5 px-3 text-orange-400 font-bold">
                      {pt.taximaster}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
