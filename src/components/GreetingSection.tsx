import SectionHeading from "@/components/SectionHeading";
import { CoupleInfo, GreetingInfo } from "@/data/wedding";

interface GreetingSectionProps {
  couple: CoupleInfo;
  greeting: GreetingInfo;
}

function GreetingSection({ couple, greeting }: GreetingSectionProps) {
  return (
    <section id="greeting" className="section-shell scroll-mt-6">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f5e6db] blur-3xl" />
      <div className="section-inner relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Greeting"
              title={greeting.title}
              description="가장 가까운 분들께 가장 먼저 전하고 싶은 마음을 짧은 인사말에 담았습니다."
            />
            <div className="soft-card bg-gradient-to-br from-[#fffaf6] to-[#f6ece4]">
              <p className="font-display text-3xl text-rosewood sm:text-4xl">
                {couple.groomName} &amp; {couple.brideName}
              </p>
              <p className="mt-3 text-sm leading-7 text-rosewood/85 sm:text-base">
                {couple.subtitle}
              </p>
            </div>
          </div>

          <div className="soft-card space-y-5 sm:p-7">
            {greeting.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-8 text-ink/80 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
            <div className="border-t border-rose-100 pt-5">
              <p className="font-medium text-rosewood">{greeting.closing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreetingSection;

