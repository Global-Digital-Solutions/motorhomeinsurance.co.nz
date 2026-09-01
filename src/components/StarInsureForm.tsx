'use client';

import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';
import {
  ChevronRight, ChevronLeft, Check, Search, Loader2,
  User, Mail, Phone, MapPin, Calendar, Shield, AlertCircle,
  Car, Home, Truck, Caravan, Anchor, Star
} from 'lucide-react';

/* ─── Types ─────────────────────────────────────────── */

type VehicleType = 'motorhome' | 'caravan' | 'campervan' | 'tiny-home' | 'horse-float' | 'horse-truck';
type UseFrequency = 'weekly' | 'monthly' | 'occasionally' | 'full-time';
type PrimaryUse   = 'recreation' | 'touring' | 'full-time-home' | 'storage';
type StorageType  = 'garage' | 'driveway' | 'storage-facility' | 'other';

interface RegoResult {
  make: string;
  model: string;
  year: string;
  colour: string;
  bodyType: string;
}

interface FormData {
  // Step 1 — Your RV
  vehicleType: VehicleType | '';
  rego: string;
  regoLookupDone: boolean;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleColour: string;
  vehicleValue: string;

  // Step 2 — About You + Usage
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  suburb: string;
  city: string;
  useFrequency: UseFrequency | '';
  primaryUse: PrimaryUse | '';
  selfContained: boolean | null;
  storageType: StorageType | '';

  // Step 3 — Quick Check (8 questions)
  q_accidents: boolean | null;
  q_infringements: boolean | null;
  q_convictions: boolean | null;
  q_declined: boolean | null;
  q_medical: boolean | null;
  q_claims: boolean | null;
  q_commercial: boolean | null;
  q_fullLicence: boolean | null;
}

const INITIAL: FormData = {
  vehicleType: '', rego: '', regoLookupDone: false,
  vehicleMake: '', vehicleModel: '', vehicleYear: '', vehicleColour: '', vehicleValue: '',
  firstName: '', lastName: '', email: '', phone: '', dob: '',
  address: '', suburb: '', city: '',
  useFrequency: '', primaryUse: '', selfContained: null, storageType: '',
  q_accidents: null, q_infringements: null, q_convictions: null, q_declined: null,
  q_medical: null, q_claims: null, q_commercial: null, q_fullLicence: null,
};

/* ─── Static data ────────────────────────────────────── */

const VEHICLE_TYPES: { value: VehicleType; label: string; sub: string; Icon: React.FC<{ className?: string }> }[] = [
  { value: 'motorhome',   label: 'Motorhome',    sub: 'Self-propelled RV',         Icon: ({ className }) => <Truck className={className} /> },
  { value: 'caravan',     label: 'Caravan',       sub: 'Towed living space',        Icon: ({ className }) => <Caravan className={className} /> },
  { value: 'campervan',   label: 'Campervan',     sub: 'Van conversion',            Icon: ({ className }) => <Car className={className} /> },
  { value: 'tiny-home',   label: 'Tiny Home',     sub: 'Registered on trailer',     Icon: ({ className }) => <Home className={className} /> },
  { value: 'horse-float', label: 'Horse Float',   sub: 'With living quarters',      Icon: ({ className }) => <Anchor className={className} /> },
  { value: 'horse-truck', label: 'Horse Truck',   sub: 'Self-propelled horse truck', Icon: ({ className }) => <Truck className={className} /> },
];

const VALUE_RANGES = [
  { value: 'under-20k',  label: 'Under $20,000' },
  { value: '20k-40k',    label: '$20,000 – $40,000' },
  { value: '40k-60k',    label: '$40,000 – $60,000' },
  { value: '60k-100k',   label: '$60,000 – $100,000' },
  { value: '100k-150k',  label: '$100,000 – $150,000' },
  { value: 'over-150k',  label: 'Over $150,000' },
];

const FREQ_OPTIONS: { value: UseFrequency; label: string; sub: string }[] = [
  { value: 'weekly',       label: 'Weekly',          sub: 'Regular weekenders' },
  { value: 'monthly',      label: 'Monthly',         sub: 'Monthly trips' },
  { value: 'occasionally', label: 'Occasionally',    sub: 'A few times a year' },
  { value: 'full-time',    label: 'Full-time',       sub: 'I live in my RV' },
];

const USE_OPTIONS: { value: PrimaryUse; label: string }[] = [
  { value: 'recreation',      label: 'Recreation & holidays' },
  { value: 'touring',         label: 'Long-distance touring' },
  { value: 'full-time-home',  label: 'Full-time home' },
  { value: 'storage',         label: 'Mostly in storage' },
];

const STORAGE_OPTIONS: { value: StorageType; label: string }[] = [
  { value: 'garage',           label: 'Home garage or carport' },
  { value: 'driveway',         label: 'Home driveway' },
  { value: 'storage-facility', label: 'Storage facility' },
  { value: 'other',            label: 'Other' },
];

const QUICK_QUESTIONS: { key: keyof FormData; question: string; yesAlert?: boolean }[] = [
  { key: 'q_accidents',     question: 'Any motor vehicle accidents in the last 5 years?',                       yesAlert: true },
  { key: 'q_infringements', question: 'Any traffic infringements or speeding tickets in the last 3 years?',    yesAlert: true },
  { key: 'q_convictions',   question: 'Any criminal convictions (including traffic offences)?',                 yesAlert: true },
  { key: 'q_declined',      question: 'Any insurance policies declined, cancelled or had special conditions?',  yesAlert: true },
  { key: 'q_medical',       question: 'Any medical conditions that may affect your driving ability?',           yesAlert: true },
  { key: 'q_claims',        question: 'Any insurance claims made in the last 5 years?',                        yesAlert: true },
  { key: 'q_commercial',    question: 'Will this vehicle be used for any commercial purpose?',                  yesAlert: true },
  { key: 'q_fullLicence',   question: 'Do you hold a current full NZ driver\'s licence?',                      yesAlert: false },
];

const RV_MAKES = [
  'Toyota','Fiat','Mercedes-Benz','Volkswagen','Ford','Iveco','Mitsubishi',
  'Isuzu','Hymer','Winnebago','Jayco','Avida','Sunliner','Coachmen',
  'Adria','Swift','Auto-Trail','Carado','Roller Team','Benimar','Other',
];

const RV_COLOURS = [
  'White','Silver','Grey','Black','Blue','Red','Green',
  'Beige / Cream','Brown','Orange','Yellow','Other',
];

const CURRENT_YEAR = new Date().getFullYear();
const RV_YEARS = Array.from({ length: CURRENT_YEAR - 1974 }, (_, i) => String(CURRENT_YEAR - i));

const NZ_CITIES = [
  'Auckland','Wellington','Christchurch','Hamilton','Tauranga','Napier','Palmerston North',
  'Dunedin','Nelson','Rotorua','New Plymouth','Whangarei','Invercargill','Whanganui','Gisborne',
  'Blenheim','Timaru','Masterton','Levin','Queenstown','Other',
];

/* ─── Sub-components ────────────────────────────────── */

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round(((step) / total) * 100);
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Step {step} of {total}</span>
        <span className="text-xs font-bold text-sky-600">{pct}% complete</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {['Your RV', 'About You', 'Quick Check'].map((label, i) => (
          <span key={label} className={`text-xs font-medium ${i + 1 <= step ? 'text-sky-600' : 'text-slate-400'}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function YesNoToggle({
  value,
  onChange,
  yesAlert,
}: {
  value: boolean | null;
  onChange: (v: boolean) => void;
  yesAlert?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all ${
          value === false
            ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25'
            : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300'
        }`}
      >
        No
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all ${
          value === true
            ? yesAlert
              ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/25'
              : 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/25'
            : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
        }`}
      >
        Yes
      </button>
    </div>
  );
}

function FieldWrapper({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

function Input({ icon: Icon, ...props }: { icon: React.FC<{ className?: string }> } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all"
      />
    </div>
  );
}

function DobField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const parts = value ? value.split('-') : ['', '', ''];
  const year = parts[0] || '';
  const month = parts[1] || '';
  const day = parts[2] || '';

  function update(y: string, m: string, d: string) {
    if (y && m && d) onChange(`${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`);
    else onChange('');
  }

  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const maxDay = month && year ? new Date(Number(year), Number(month), 0).getDate() : 31;
  const days = Array.from({ length: maxDay }, (_, i) => String(i + 1));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1924 }, (_, i) => String(currentYear - 17 - i));

  const selectClass = "w-full px-3 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm appearance-none";

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="relative">
        <select value={day} onChange={e => update(year, month, e.target.value)} className={selectClass}>
          <option value="">Day</option>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      <div className="relative">
        <select value={month} onChange={e => update(year, e.target.value, day)} className={selectClass}>
          <option value="">Month</option>
          {MONTHS.map((m, i) => <option key={m} value={String(i + 1).padStart(2,'0')}>{m}</option>)}
        </select>
        <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
      <div className="relative">
        <select value={year} onChange={e => update(e.target.value, month, day)} className={selectClass}>
          <option value="">Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );
}

function SelectField({ icon: Icon, value, onChange, placeholder, options }: {
  icon: React.FC<{ className?: string }>;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-10 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm appearance-none transition-all"
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────── */

export default function StarInsureForm() {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [regoLoading, setRegoLoading] = useState(false);
  const [regoError, setRegoError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  }, []);

  function goToStep(n: number) {
    setStep(n);
    setTimeout(() => {
      const el = formRef.current;
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  }

  /* ── Rego lookup ── */
  async function handleRegoLookup() {
    if (!form.rego.trim()) return;
    setRegoLoading(true);
    setRegoError('');
    try {
      const res = await fetch(`/api/rego-lookup?plate=${encodeURIComponent(form.rego.trim().toUpperCase())}`);
      if (res.ok) {
        const data: RegoResult = await res.json();
        setForm(prev => ({
          ...prev,
          vehicleMake: data.make || '',
          vehicleModel: data.model || '',
          vehicleYear: data.year || '',
          vehicleColour: data.colour || '',
          regoLookupDone: true,
        }));
      } else {
        setRegoError('Registration not found. Please enter details manually below.');
        set('regoLookupDone', true);
      }
    } catch {
      setRegoError('Lookup unavailable — please enter details manually.');
      set('regoLookupDone', true);
    } finally {
      setRegoLoading(false);
    }
  }

  /* ── Validation per step ── */
  function isStep1Valid() {
    return (
      form.vehicleType !== '' &&
      form.vehicleValue !== '' &&
      (form.regoLookupDone || form.rego.trim() !== '')
    );
  }

  function isStep2Valid() {
    return (
      form.firstName.trim() !== '' &&
      form.lastName.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.phone.trim().length >= 6 &&
      form.dob.trim() !== '' &&
      form.address.trim() !== '' &&
      form.suburb.trim() !== '' &&
      form.city !== '' &&
      form.useFrequency !== '' &&
      form.primaryUse !== '' &&
      form.selfContained !== null &&
      form.storageType !== ''
    );
  }

  function isStep3Valid() {
    return QUICK_QUESTIONS.every(q => form[q.key] !== null);
  }

  /* ── Submit ── */
  async function handleSubmit() {
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setIsSubmitting(false);
        setSubmitError('Security check failed. Please try again.');
        return;
      }

      const payload = {
        referrer: 'cover4you',
        source: 'motorhomeinsurance.co.nz',
        // Vehicle
        vehicleType: form.vehicleType,
        rego: form.rego.toUpperCase(),
        vehicleMake: form.vehicleMake,
        vehicleModel: form.vehicleModel,
        vehicleYear: form.vehicleYear,
        vehicleColour: form.vehicleColour,
        vehicleValue: form.vehicleValue,
        // Personal
        name: `${form.firstName} ${form.lastName}`.trim(),
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        dob: form.dob,
        address: `${form.address}, ${form.suburb ? form.suburb + ', ' : ''}${form.city}`,
        // Usage
        useFrequency: form.useFrequency,
        primaryUse: form.primaryUse,
        selfContained: form.selfContained ? 'Yes' : 'No',
        storageType: form.storageType,
        // History
        q_accidents:     form.q_accidents     ? 'Yes' : 'No',
        q_infringements: form.q_infringements ? 'Yes' : 'No',
        q_convictions:   form.q_convictions   ? 'Yes' : 'No',
        q_declined:      form.q_declined      ? 'Yes' : 'No',
        q_medical:       form.q_medical       ? 'Yes' : 'No',
        q_claims:        form.q_claims        ? 'Yes' : 'No',
        q_commercial:    form.q_commercial    ? 'Yes' : 'No',
        q_fullLicence:   form.q_fullLicence   ? 'Yes' : 'No',
        cfTurnstileToken: cfToken,
      };

      const res = await fetch('/api/submit-star-insure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setSubmitError('Something went wrong. Please try again or contact hello@cover4you.co.nz.');
      setIsSubmitting(false);
    }
  }

  /* ─── Render ──────────────────────────────────────── */

  return (
    <div className="max-w-2xl mx-auto">
      {/* Card */}
      <div ref={formRef} className="bg-white rounded-2xl border-2 border-sky-400 shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <ProgressBar step={step} total={3} />

          {/* ── STEP 1: Your RV ── */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Tell us about your RV</h3>
                <p className="text-sm text-slate-500">Select your vehicle type, enter your rego and estimated value.</p>
              </div>

              {/* Vehicle type grid */}
              <FieldWrapper label="Vehicle Type">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {VEHICLE_TYPES.map(({ value, label, sub, Icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set('vehicleType', value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all ${
                        form.vehicleType === value
                          ? 'border-sky-500 bg-sky-50 text-sky-700'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50/50'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <div>
                        <p className="text-sm font-semibold leading-tight">{label}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                      </div>
                      {form.vehicleType === value && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-sky-500 rounded-full flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </FieldWrapper>

              {/* Rego lookup */}
              <FieldWrapper label="Registration Plate" hint="We'll use this to auto-fill your vehicle details.">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={form.rego}
                      onChange={e => { set('rego', e.target.value.toUpperCase()); set('regoLookupDone', false); }}
                      placeholder="e.g. ABC123"
                      maxLength={7}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm font-mono uppercase tracking-widest"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleRegoLookup}
                    disabled={!form.rego.trim() || regoLoading}
                    className="px-4 py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white font-semibold text-sm rounded-xl transition-all whitespace-nowrap flex items-center gap-2"
                  >
                    {regoLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    Look up
                  </button>
                </div>
                {regoError && <p className="mt-2 text-xs text-amber-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {regoError}</p>}
              </FieldWrapper>

              {/* Vehicle details (shown after lookup or manual) */}
              {form.regoLookupDone && (
                <div className="grid grid-cols-2 gap-3">
                  <FieldWrapper label="Make">
                    <SelectField icon={Car} value={form.vehicleMake} onChange={v => set('vehicleMake', v)} placeholder="Select make..." options={RV_MAKES} />
                  </FieldWrapper>
                  <FieldWrapper label="Model">
                    <Input icon={Car} type="text" value={form.vehicleModel} onChange={e => set('vehicleModel', e.target.value)} placeholder="e.g. HiAce" />
                  </FieldWrapper>
                  <FieldWrapper label="Year">
                    <SelectField icon={Calendar} value={form.vehicleYear} onChange={v => set('vehicleYear', v)} placeholder="Select year..." options={RV_YEARS} />
                  </FieldWrapper>
                  <FieldWrapper label="Colour">
                    <SelectField icon={Car} value={form.vehicleColour} onChange={v => set('vehicleColour', v)} placeholder="Select colour..." options={RV_COLOURS} />
                  </FieldWrapper>
                </div>
              )}

              {/* Skip rego — manual entry link */}
              {!form.regoLookupDone && form.rego.trim() === '' && (
                <button type="button" onClick={() => set('regoLookupDone', true)} className="text-xs text-sky-600 underline underline-offset-2">
                  Don&apos;t have rego? Enter details manually
                </button>
              )}

              {/* Value */}
              <FieldWrapper label="Estimated Vehicle Value">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {VALUE_RANGES.map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set('vehicleValue', value)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border-2 transition-all ${
                        form.vehicleValue === value
                          ? 'border-sky-500 bg-sky-50 text-sky-700'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </FieldWrapper>

              <button
                type="button"
                onClick={() => goToStep(2)}
                disabled={!isStep1Valid()}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:opacity-40 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* ── STEP 2: About You + Usage ── */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">About you &amp; your RV use</h3>
                <p className="text-sm text-slate-500">Personal details and how you use your vehicle.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FieldWrapper label="First Name">
                  <Input icon={User} type="text" value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Jane" required />
                </FieldWrapper>
                <FieldWrapper label="Last Name">
                  <Input icon={User} type="text" value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Smith" required />
                </FieldWrapper>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldWrapper label="Email Address">
                  <Input icon={Mail} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="jane@example.com" required />
                </FieldWrapper>
                <FieldWrapper label="Phone Number">
                  <Input icon={Phone} type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="021 xxx xxxx" required />
                </FieldWrapper>
              </div>

              <FieldWrapper label="Date of Birth" hint="Required by your insurer for rating purposes.">
                <DobField value={form.dob} onChange={v => set('dob', v)} />
              </FieldWrapper>

              <FieldWrapper label="Street Address">
                <Input icon={MapPin} type="text" value={form.address} onChange={e => set('address', e.target.value)} placeholder="123 Example Street" required />
              </FieldWrapper>

              <div className="grid grid-cols-2 gap-4">
                <FieldWrapper label="Suburb">
                  <Input icon={MapPin} type="text" value={form.suburb} onChange={e => set('suburb', e.target.value)} placeholder="e.g. Ponsonby" />
                </FieldWrapper>
                <FieldWrapper label="City / Town">
                  <SelectField icon={MapPin} value={form.city} onChange={v => set('city', v)} placeholder="Select city..." options={NZ_CITIES} />
                </FieldWrapper>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">How you use your RV</h4>

                <FieldWrapper label="How often do you use it?">
                  <div className="grid grid-cols-2 gap-2">
                    {FREQ_OPTIONS.map(({ value, label, sub }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => set('useFrequency', value)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          form.useFrequency === value
                            ? 'border-sky-500 bg-sky-50'
                            : 'border-slate-200 bg-white hover:border-sky-300'
                        }`}
                      >
                        <p className={`text-sm font-semibold ${form.useFrequency === value ? 'text-sky-700' : 'text-slate-700'}`}>{label}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                      </button>
                    ))}
                  </div>
                </FieldWrapper>

                <div className="mt-4">
                  <FieldWrapper label="Primary use">
                    <div className="grid grid-cols-2 gap-2">
                      {USE_OPTIONS.map(({ value, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => set('primaryUse', value)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium border-2 text-left transition-all ${
                            form.primaryUse === value
                              ? 'border-sky-500 bg-sky-50 text-sky-700'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </FieldWrapper>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FieldWrapper label="Self-contained certified?">
                    <div className="flex gap-3">
                      {[{ v: true, l: 'Yes' }, { v: false, l: 'No' }].map(({ v, l }) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => set('selfContained', v)}
                          className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all ${
                            form.selfContained === v
                              ? 'border-sky-500 bg-sky-500 text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </FieldWrapper>

                  <FieldWrapper label="Where is it stored?">
                    <div className="relative">
                      <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        value={form.storageType}
                        onChange={e => set('storageType', e.target.value as StorageType)}
                        className="w-full pl-10 pr-8 py-3 border border-slate-200 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm appearance-none"
                        required
                      >
                        <option value="">Select...</option>
                        {STORAGE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </FieldWrapper>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-5 py-4 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => goToStep(3)}
                  disabled={!isStep2Valid()}
                  className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:opacity-40 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Quick Check ── */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Quick check</h3>
                <p className="text-sm text-slate-500">8 short yes/no questions — required for all cover applications.</p>
              </div>

              <div className="space-y-4">
                {QUICK_QUESTIONS.map((q, i) => (
                  <div key={q.key} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-sm font-medium text-slate-800 mb-3">
                      <span className="inline-block w-6 h-6 bg-sky-100 text-sky-700 text-xs font-bold rounded-full text-center leading-6 mr-2 flex-shrink-0">{i + 1}</span>
                      {q.question}
                    </p>
                    <YesNoToggle
                      value={form[q.key] as boolean | null}
                      onChange={v => set(q.key, v)}
                      yesAlert={q.yesAlert}
                    />
                    {form[q.key] === true && q.yesAlert && (
                      <p className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        Your insurer may ask for more details when reviewing your application. This won&apos;t necessarily affect your coverage.
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-xl p-5 text-sm text-slate-400 flex items-start gap-3">
                <Shield className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <p>Your enquiry is matched securely to a specialist insurer via the <strong className="text-sky-400">cover4you</strong> network. A specialist will review and respond — usually within 30 minutes during business hours.</p>
              </div>

              <TurnstileWidget ref={turnstileRef} />

              {submitError && (
                <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" /> {submitError}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-5 py-4 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:border-slate-300 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isStep3Valid() || isSubmitting}
                  className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 disabled:opacity-40 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
                  ) : (
                    <>Submit My Enquiry <ChevronRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
