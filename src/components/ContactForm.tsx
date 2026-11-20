'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';

interface ContactFormProps {
  lang: Language;
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = translations.contactPage.form;
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    translations.contactPage.whatsappNumber ||
    '6285776418145';
  const targetEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    translations.contactPage.emailAddress;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
    botField: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [successChannel, setSuccessChannel] = useState<'email' | 'whatsapp'>('email');
  const [errorMessage, setErrorMessage] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = t.validationName[lang];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      newErrors.email = t.validationEmail[lang];
    }

    if (!formData.purpose) {
      newErrors.purpose = t.validationPurpose[lang];
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = t.validationMessage[lang];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPurposeLabel = (purposeKey: string) => {
    const options = t.purposeOptions as Record<string, { id: string; en: string }>;
    return options[purposeKey] ? options[purposeKey][lang] : purposeKey;
  };

  // 1. Send via WhatsApp
  const handleSendWhatsApp = () => {
    if (!validate()) {
      setStatus('error');
      setErrorMessage(t.error[lang]);
      return;
    }

    const purposeText = getPurposeLabel(formData.purpose);
    const waText = `Halo Rayhan, perkenalkan saya *${formData.name.trim()}* (${formData.email.trim()}).\n\n📌 *Keperluan Diskusi:* ${purposeText}\n\n📝 *Pesan / Detail Kebutuhan:*\n${formData.message.trim()}\n\n---\n_Dikirim melalui formulir website portofolio_`;

    const encoded = encodeURIComponent(waText);
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;

    setSuccessChannel('whatsapp');
    setStatus('success');

    // Automatically open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // 2. Send via Email (Server API + Fallback)
  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botField) {
      setStatus('success');
      setSuccessChannel('email');
      return;
    }

    if (!validate()) {
      setStatus('error');
      setErrorMessage(t.error[lang]);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setSuccessChannel('email');
        setStatus('success');
        if (data?.mailtoLink) {
          setMailtoUrl(data.mailtoLink);
        }
      } else {
        setStatus('error');
        setErrorMessage(data?.message || t.error[lang]);
      }
    } catch {
      // In case of offline / network issue, generate instant mailto fallback
      const purposeText = getPurposeLabel(formData.purpose);
      const mailtoFallback = `mailto:${targetEmail}?subject=${encodeURIComponent(`[Portofolio] ${purposeText} - ${formData.name}`)}&body=${encodeURIComponent(
        `Halo Rayhan,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nKeperluan: ${purposeText}\n\nPesan:\n${formData.message}\n`
      )}`;
      setMailtoUrl(mailtoFallback);
      setSuccessChannel('email');
      setStatus('success');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', purpose: '', message: '', botField: '' });
    setErrors({});
    setErrorMessage('');
    setMailtoUrl('');
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
      {status === 'success' ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {lang === 'id' ? 'Pesan Siap Diteruskan!' : 'Message Ready to Dispatch!'}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {successChannel === 'whatsapp' ? t.whatsappSuccess[lang] : t.success[lang]}
            </p>
          </div>

          {/* Quick Action Buttons on Success */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* WhatsApp Direct Re-trigger Button */}
            <button
              onClick={handleSendWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>{lang === 'id' ? 'Buka Ulang di WhatsApp' : 'Open in WhatsApp'}</span>
            </button>

            {/* Email mailto fallback if available */}
            {mailtoUrl && (
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-orange-500" />
                <span>{lang === 'id' ? 'Buka di Aplikasi Email' : 'Open in Email Client'}</span>
              </a>
            )}

            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
            >
              {lang === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Message'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSendEmail} noValidate className="space-y-5">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="botField"
              tabIndex={-1}
              value={formData.botField}
              onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
              autoComplete="off"
            />
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-2">
                {t.name[lang]} <span className="text-orange-500 dark:text-orange-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder={t.namePlaceholder[lang]}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.name ? 'border-red-500/80' : 'border-slate-300 dark:border-slate-700/70'
                }`}
                required
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-2">
                {t.email[lang]} <span className="text-orange-500 dark:text-orange-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder={t.emailPlaceholder[lang]}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.email ? 'border-red-500/80' : 'border-slate-300 dark:border-slate-700/70'
                }`}
                required
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
            </div>
          </div>

          {/* Purpose Select */}
          <div>
            <label htmlFor="purpose" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-2">
              {t.purpose[lang]} <span className="text-orange-500 dark:text-orange-400">*</span>
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={(e) => {
                setFormData({ ...formData, purpose: e.target.value });
                if (errors.purpose) setErrors({ ...errors, purpose: '' });
              }}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                errors.purpose ? 'border-red-500/80' : 'border-slate-300 dark:border-slate-700/70'
              }`}
              required
            >
              <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-500">
                {t.purposeSelect[lang]}
              </option>
              <option value="internship" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                {t.purposeOptions.internship[lang]}
              </option>
              <option value="freelance" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                {t.purposeOptions.freelance[lang]}
              </option>
              <option value="training" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                {t.purposeOptions.training[lang]}
              </option>
              <option value="other" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                {t.purposeOptions.other[lang]}
              </option>
            </select>
            {errors.purpose && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.purpose}</p>}
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-2">
              {t.message[lang]} <span className="text-orange-500 dark:text-orange-400">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              placeholder={t.messagePlaceholder[lang]}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-y ${
                errors.message ? 'border-red-500/80' : 'border-slate-300 dark:border-slate-700/70'
              }`}
              required
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">{errors.message}</p>}
          </div>

          {/* Channel Choice Hint */}
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.channelHint[lang]}
          </p>

          {/* Global Error Banner */}
          {status === 'error' && errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-600 dark:text-red-300">
              <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Dual Submission Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            {/* 1. WhatsApp Button (Fast Response) */}
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-lg shadow-emerald-600/25 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>{t.submitWhatsApp[lang]}</span>
            </button>

            {/* 2. Official Email Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 active:scale-95 text-white shadow-lg shadow-orange-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.sending[lang]}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.submitEmail[lang]}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
