import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";

import { banners } from "@/features/shared-ui/configs/banners.config";

import { ContactForm } from "../components/sections/ContactForm";
import { ContactInfo } from "../components/sections/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <PageBanner {...banners.contact} />

      <Section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/5 blur-3xl" />

          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <Container>
          <div className="relative mx-auto max-w-7xl">
            {/* Intro */}
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">Contact Askari Insurance</span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Speak With Our Insurance Specialists</h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Whether you need fleet protection, cargo insurance, Yellow Card cover, claims assistance, or a tailored logistics insurance solution, our team is ready to help.
              </p>
            </div>

            {/* Content */}
            <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
              {/* Contact Details */}
              <Card className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-xl shadow-slate-200/40">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500" />

                <ContactInfo />
              </Card>

              {/* Contact Form */}
              <Card className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/40">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500" />

                <ContactForm />
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
