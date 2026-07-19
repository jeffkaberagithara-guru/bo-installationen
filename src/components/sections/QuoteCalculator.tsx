import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Upload } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

const QuoteCalculator = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    service: "",
    projectType: "",
    timeline: "",
    budget: 10000,
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    files: [] as File[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const serviceOptions = [
    { value: "neubau", label: "Neubau" },
    { value: "design", label: "Design & Beratung" },
    { value: "renovierung", label: "Renovierung" },
    { value: "reparatur", label: "Reparatur" },
    { value: "installation", label: "Installation" },
  ];

  const projectOptions = [
    { value: "bathroom", label: "Badezimmer" },
    { value: "kitchen", label: "Küche" },
    { value: "whole-house", label: "Gesamtes Haus" },
    { value: "commercial", label: "Gewerbe" },
    { value: "other", label: "Anderes" },
  ];

  const timelineOptions = [
    { value: "emergency", label: "🚨 Notfall (sofort)" },
    { value: "week", label: "📅 Innerhalb 1 Woche" },
    { value: "planning", label: "📋 In Planung" },
  ];

  const handleNext = () => {
    if (step < 5) setStep((step + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setStep(1);
      setFormData({
        service: "",
        projectType: "",
        timeline: "",
        budget: 10000,
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        files: [],
      });
    }, 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFormData({ ...formData, files: [...formData.files, ...fileArray] });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: newFiles });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Welche Dienstleistung benötigen Sie?
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, service: opt.value })
                  }
                  className={`rounded-lg border px-4 py-3 text-left transition-all ${
                    formData.service === opt.value
                      ? "border-brass bg-brass/10 text-brass"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={!formData.service}
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-2.5 text-sm font-semibold text-space transition-all hover:bg-brass-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Was ist der Projektumfang?
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {projectOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, projectType: opt.value })
                  }
                  className={`rounded-lg border px-4 py-3 text-left transition-all ${
                    formData.projectType === opt.value
                      ? "border-brass bg-brass/10 text-brass"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="text-platinum/60 hover:text-white transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.projectType}
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-2.5 text-sm font-semibold text-space transition-all hover:bg-brass-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Wann soll das Projekt beginnen?
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {timelineOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, timeline: opt.value })
                  }
                  className={`rounded-lg border px-4 py-3 text-center transition-all ${
                    formData.timeline === opt.value
                      ? "border-brass bg-brass/10 text-brass"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="text-platinum/60 hover:text-white transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.timeline}
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-2.5 text-sm font-semibold text-space transition-all hover:bg-brass-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Was ist Ihr Budgetrahmen?
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-platinum/60">
                <span>€1.000</span>
                <span className="text-brass font-semibold">
                  €{formData.budget.toLocaleString()}
                </span>
                <span>€50.000+</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: parseInt(e.target.value) })
                }
                className="w-full h-2 bg-space-light rounded-lg appearance-none cursor-pointer accent-brass"
              />
              <div className="flex flex-wrap gap-2 text-xs text-platinum/40">
                <span>€1k</span>
                <span>€5k</span>
                <span>€10k</span>
                <span>€25k</span>
                <span>€50k+</span>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="text-platinum/60 hover:text-white transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-2.5 text-sm font-semibold text-space transition-all hover:bg-brass-light"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">
              Ihre Kontaktdaten
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-platinum/60">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 px-4 py-2.5 text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div>
                <label className="text-sm text-platinum/60">E-Mail *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 px-4 py-2.5 text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors"
                  placeholder="ihre@email.at"
                />
              </div>
              <div>
                <label className="text-sm text-platinum/60">Telefon *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 px-4 py-2.5 text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors"
                  placeholder="+43 660 26 26 722"
                />
              </div>
              <div>
                <label className="text-sm text-platinum/60">
                  Adresse (optional)
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 px-4 py-2.5 text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors"
                  placeholder="Straße, Hausnummer, PLZ"
                />
              </div>
              <div>
                <label className="text-sm text-platinum/60">
                  Nachricht (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 px-4 py-2.5 text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors resize-none"
                  placeholder="Weitere Details zu Ihrem Projekt..."
                />
              </div>
              <div>
                <label className="text-sm text-platinum/60">
                  Fotos hochladen (optional)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer rounded-lg border-2 border-dashed border-platinum/20 bg-space/50 px-4 py-6 text-center transition-colors hover:border-brass/50"
                >
                  <Upload className="mx-auto h-8 w-8 text-platinum/40" />
                  <p className="mt-1 text-sm text-platinum/40">
                    Klicken oder ziehen Sie Fotos hierher
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                {formData.files.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded bg-space/50 px-3 py-1 text-sm text-platinum/60"
                      >
                        <span>{file.name}</span>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-signal hover:text-signal/80"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="text-platinum/60 hover:text-white transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleSubmit}
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.phone ||
                  isSubmitting
                }
                className="inline-flex items-center gap-2 rounded-lg bg-brass px-6 py-2.5 text-sm font-semibold text-space transition-all hover:bg-brass-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet..." : "Angebot anfragen"}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="quote" className="py-20 bg-space">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
            Kostenlos & unverbindlich
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Kosten<span className="text-brass">voranschlag</span>
          </h2>
          <p className="mt-3 text-platinum/60">
            Beantworten Sie 5 kurze Fragen und erhalten Sie einen präzisen
            Kostenvoranschlag.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8 flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s <= step ? "bg-brass" : "bg-platinum/20"
              }`}
            />
          ))}
        </div>

        {/* Step Indicator */}
        <div className="mb-6 text-center text-sm text-platinum/40">
          Schritt {step} von 5
        </div>

        {/* Form Content */}
        <div className="rounded-xl border border-platinum/10 bg-space-light/50 p-6 backdrop-blur-sm">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brass/20">
                <Check className="h-8 w-8 text-brass" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Anfrage gesendet!
              </h3>
              <p className="mt-2 text-platinum/60">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </motion.div>
          ) : (
            renderStep()
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
