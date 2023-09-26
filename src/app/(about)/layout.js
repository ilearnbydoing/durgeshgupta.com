import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "1k+ Projects Completed",
  "15+ Years of Freelancing",
  "99% Client Satisfaction",
  "A Blogger",
  "Freelance Professional",
  "Web Consultant",
  "Solopreneur",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
