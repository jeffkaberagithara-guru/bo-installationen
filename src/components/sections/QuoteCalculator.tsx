import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Upload, 
  X, 
  FileText, 
  Calendar, 
  Euro, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Building2,
  Hammer,
  Home,
  Briefcase,
  Clock,
  AlertCircle,
  Shield,
  Zap
} from "lucide-react";

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
    { value: "neubau", label: "Neubau", icon: <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "design", label: "Design & Beratung", icon: <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "renovierung", label: "Renovierung", icon: <Hammer className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "reparatur", label: "Reparatur", icon: <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "installation", label: "Installation", icon: <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  ];

  const projectOptions = [
    { value: "bathroom", label: "Badezimmer", icon: <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "kitchen", label: "Küche", icon: <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "whole-house", label: "Gesamtes Haus", icon: <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "commercial", label: "Gewerbe", icon: <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "other", label: "Anderes", icon: <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
  ];

  const timelineOptions = [
    { value: "emergency", label: "Notfall (sofort)", icon: <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "week", label: "Innerhalb 1 Woche", icon: <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
    { value: "planning", label: "In Planung", icon: <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
              Welche Dienstleistung benötigen Sie?
            </h3>
            <p className="text-xs sm:text-sm text-platinum/40">
              Wählen Sie die passende Leistung für Ihr Projekt
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, service: opt.value })
                  }
                  className={`flex items-center gap-2 sm:gap-3 rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-150 ${
                    formData.service === opt.value
                      ? "border-brass bg-brass/10 text-brass shadow-[0_0_30px_rgba(201,168,76,0.1)]"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white hover:bg-space/30"
                  }`}
                >
                  {opt.icon}
                  <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-3 sm:pt-4">
              <button
                onClick={handleNext}
                disabled={!formData.service}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brass to-brass-light px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-space transition-all duration-150 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
              Was ist der Projektumfang?
            </h3>
            <p className="text-xs sm:text-sm text-platinum/40">
              Definieren Sie den Bereich Ihrer Renovierung oder Installation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {projectOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, projectType: opt.value })
                  }
                  className={`flex items-center gap-2 sm:gap-3 rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-150 ${
                    formData.projectType === opt.value
                      ? "border-brass bg-brass/10 text-brass shadow-[0_0_30px_rgba(201,168,76,0.1)]"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white hover:bg-space/30"
                  }`}
                >
                  {opt.icon}
                  <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-3 sm:pt-4">
              <button
                onClick={handleBack}
                className="text-xs sm:text-sm text-platinum/60 hover:text-white transition-colors duration-150"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.projectType}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brass to-brass-light px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-space transition-all duration-150 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
              Wann soll das Projekt beginnen?
            </h3>
            <p className="text-xs sm:text-sm text-platinum/40">
              Wählen Sie den gewünschten Zeitrahmen
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {timelineOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() =>
                    setFormData({ ...formData, timeline: opt.value })
                  }
                  className={`flex items-center gap-2 sm:gap-3 rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-150 ${
                    formData.timeline === opt.value
                      ? "border-brass bg-brass/10 text-brass shadow-[0_0_30px_rgba(201,168,76,0.1)]"
                      : "border-platinum/20 text-platinum/60 hover:border-platinum/40 hover:text-white hover:bg-space/30"
                  }`}
                >
                  {opt.icon}
                  <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-3 sm:pt-4">
              <button
                onClick={handleBack}
                className="text-xs sm:text-sm text-platinum/60 hover:text-white transition-colors duration-150"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.timeline}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brass to-brass-light px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-space transition-all duration-150 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
              Was ist Ihr Budgetrahmen?
            </h3>
            <p className="text-xs sm:text-sm text-platinum/40">
              Ein erster Richtwert für Ihre Kosteneinschätzung
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-platinum/40">€1.000</span>
                <span className="text-brass font-bold">
                  €{formData.budget.toLocaleString()}
                </span>
                <span className="text-platinum/40">€50.000+</span>
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
                className="w-full h-2 bg-space-light rounded-lg appearance-none cursor-pointer accent-brass transition-all duration-150"
              />
              <div className="flex justify-between text-[8px] sm:text-[10px] text-platinum/30">
                <span>€1k</span>
                <span>€5k</span>
                <span>€10k</span>
                <span>€25k</span>
                <span>€50k+</span>
              </div>
            </div>
            <div className="flex justify-between pt-3 sm:pt-4">
              <button
                onClick={handleBack}
                className="text-xs sm:text-sm text-platinum/60 hover:text-white transition-colors duration-150"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brass to-brass-light px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-space transition-all duration-150 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
              >
                Weiter
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
              Ihre Kontaktdaten
            </h3>
            <p className="text-xs sm:text-sm text-platinum/40">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen
            </p>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-platinum/40" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors duration-150"
                  placeholder="Ihr vollständiger Name"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-platinum/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors duration-150"
                  placeholder="ihre@email.at"
                  required
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-platinum/40" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors duration-150"
                  placeholder="+43 660 26 26 722"
                  required
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-platinum/40" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors duration-150"
                  placeholder="Straße, Hausnummer, PLZ (optional)"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-3.5 w-3.5 sm:h-4 sm:w-4 text-platinum/40" />
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full rounded-lg border border-platinum/20 bg-space/50 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-white placeholder:text-platinum/40 focus:border-brass focus:outline-none transition-colors duration-150 resize-none"
                  placeholder="Weitere Details zu Ihrem Projekt..."
                />
              </div>
              <div>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer rounded-lg border-2 border-dashed border-platinum/20 bg-space/50 px-3 sm:px-4 py-4 sm:py-6 text-center transition-colors duration-150 hover:border-brass/50 hover:bg-space/70"
                >
                  <Upload className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-platinum/40" />
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-platinum/40">
                    Klicken oder ziehen Sie Fotos hierher
                  </p>
                  <p className="text-[10px] sm:text-xs text-platinum/20">
                    Max. 10 MB pro Datei
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
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-space/50 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-platinum/60 border border-platinum/10"
                      >
                        <FileText className="h-3 w-3 text-brass" />
                        <span className="max-w-[100px] sm:max-w-[150px] truncate">{file.name}</span>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-signal hover:text-signal/80 transition-colors duration-150"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between pt-3 sm:pt-4">
              <button
                onClick={handleBack}
                className="text-xs sm:text-sm text-platinum/60 hover:text-white transition-colors duration-150"
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
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brass to-brass-light px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-space transition-all duration-150 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Angebot anfragen
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="quote" className="relative py-16 sm:py-20 md:py-24 bg-space-light/20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] md:h-[500px] w-[300px] sm:w-[400px] md:w-[500px] rounded-full bg-brass/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-brass/70">
            <span className="h-px w-6 sm:w-8 bg-brass/30" />
            Kostenlos & unverbindlich
            <span className="h-px w-6 sm:w-8 bg-brass/30" />
          </span>
          <h2 className="mt-2 sm:mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Kosten<span className="bg-gradient-to-r from-brass to-brass-light bg-clip-text text-transparent">voranschlag</span>
          </h2>
          <p className="mt-1.5 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-platinum/60">
            Beantworten Sie 5 kurze Fragen und erhalten Sie einen präzisen
            Kostenvoranschlag.
          </p>
        </motion.div>

        <div className="mb-4 sm:mb-6 flex items-center gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`h-1 sm:h-1.5 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? "bg-gradient-to-r from-brass to-brass-light" : "bg-platinum/10"
              }`}
            />
          ))}
        </div>

        <div className="mb-6 sm:mb-8 flex items-center justify-between text-[10px] sm:text-xs text-platinum/40">
          <span>Schritt {step} von 5</span>
          <span className="flex items-center gap-1">
            <Euro className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/60" />
            <span>Kostenlos</span>
          </span>
        </div>

        <div className="rounded-2xl border border-platinum/10 bg-space/50 p-4 sm:p-5 md:p-6 backdrop-blur-sm shadow-[0_0_60px_rgba(0,0,0,0.2)]">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 sm:py-10 md:py-12"
            >
              <div className="mx-auto mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-r from-brass/20 to-brass/10">
                <Check className="h-8 w-8 sm:h-10 sm:w-10 text-brass" strokeWidth={2} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Anfrage gesendet!
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-platinum/60 max-w-sm mx-auto">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen mit einem
                unverbindlichen Kostenvoranschlag.
              </p>
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-brass/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-brass">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brass" />
                </span>
                Bearbeitung läuft
              </div>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-platinum/30">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              100% sicher
            </span>
            <span className="h-3 w-px bg-platinum/10" />
            <span className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              Unverbindlich
            </span>
            <span className="h-3 w-px bg-platinum/10" />
            <span className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              24h Antwort
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteCalculator;