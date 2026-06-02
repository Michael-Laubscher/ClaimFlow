import { CoreValuesSection } from "../components/sections/CoreValuesSection";
import { ImpactStatsSection } from "../components/sections/ImpactStatsSection";
import { MissionVisionSection } from "../components/sections/MissionVisionSection";
import { OurStorySection } from "../components/sections/OurStorySection";

import { PageBanner } from "@/shared/components/design-system/composite/banner/banner";
import { coreValues, impactStats, missionVision, ourStory } from "../configs/about.config.data";
import { banners } from "../configs/banners.config";

export default function AboutPage() {
  return (
    <>
      <PageBanner {...banners.about} />

      <OurStorySection paragraphs={ourStory.paragraphs} />

      <MissionVisionSection items={missionVision} />

      <CoreValuesSection values={coreValues} />

      <ImpactStatsSection stats={impactStats} />
    </>
  );
}
