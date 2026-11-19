'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { translations } from '@/lib/translations';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  lang: Language;
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = translations.contactPage.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
    botField: '', // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.botField) {
      setStatus('success');
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

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', purpose: '', message: '', botField: '' });
      } else {
        const errorData = await res.json().catch(() => null);
        setStatus('error');
        setErrorMessage(errorData?.message || t.error[lang]);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.error[lang]);
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
      {status === 'success' ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-100">
            {lang === 'id' ? 'Pesan Terkirim!' : 'Message Received!'}
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {t.success[lang]}
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
          >
            {lang === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden from legitimate users) */}
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
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
                {t.name[lang]} <span className="text-orange-400">*</span>
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
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.name ? 'border-red-500/80' : 'border-slate-700/70'
                }`}
                required
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
                {t.email[lang]} <span className="text-orange-400">*</span>
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
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  errors.email ? 'border-red-500/80' : 'border-slate-700/70'
                }`}
                required
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          {/* Purpose Select */}
          <div>
            <label htmlFor="purpose" className="block text-xs font-semibold text-slate-300 mb-2">
              {t.purpose[lang]} <span className="text-orange-400">*</span>
            </label>
            <select
              id="purpose"
              value={formData.purpose}
              onChange={(e) => {
                setFormData({ ...formData, purpose: e.target.value });
                if (errors.purpose) setErrors({ ...errors, purpose: '' });
              }}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                errors.purpose ? 'border-red-500/80' : 'border-slate-700/70'
              }`}
              required
            >
              <option value="" disabled className="bg-slate-900 text-slate-500">
                {t.purposeSelect[lang]}
              </option>
              <option value="internship" className="bg-slate-900 text-slate-200">
                {t.purposeOptions.internship[lang]}
              </option>
              <option value="freelance" className="bg-slate-900 text-slate-200">
                {t.purposeOptions.freelance[lang]}
              </option>
              <option value="training" className="bg-slate-900 text-slate-200">
                {t.purposeOptions.training[lang]}
              </option>
              <option value="other" className="bg-slate-900 text-slate-200">
                {t.purposeOptions.other[lang]}
              </option>
            </select>
            {errors.purpose && <p className="mt-1.5 text-xs text-red-400">{errors.purpose}</p>}
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
              {t.message[lang]} <span className="text-orange-400">*</span>
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
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-y ${
                errors.message ? 'border-red-500/80' : 'border-slate-700/70'
              }`}
              required
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </div>

          {/* Global Error Banner */}
          {status === 'error' && errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg shadow-orange-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.sending[lang]}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{t.submit[lang]}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
