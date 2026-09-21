<template>
  <div>
    <TheHeader />
    <TheHero />
    <TheAwards />
    <TheBio />
    <WorksSection>
      <WorkCard
        v-for="(work, i) in works"
        :key="work.title"
        :index="i"
        v-bind="work"
      />
    </WorksSection>
 
    <UpcomingProjectsHeader
    left-src="/upcoming1.avif"
    right-src="/upcoming2.avif"
  />

    <WorksSection>
      <UpcomingProjectCard
        v-for="(p, i) in upcoming"
        :key="p.title"
        :index="i"
        v-bind="p"
      />
    </WorksSection>
    <TheFooter/>
  </div>
</template>

<script setup>
const works = [
  {
    title: "The Walrus and the Whistleblower",
    img: "/images/walrus.jpg",
    metaLines: [
      "2020",
      "Feature Documentary",
      "Writer / Director / Producer",
      "A CBC Original with Bunbury Films",
    ],
    description:
      "A whistleblower is sued for $1.5 million and falls down the rabbit hole of a personal quest at the heart of the movement to end marine mammal captivity.",
    credits: [
      { label: "Directed by ", value: "Nathalie Bibeau" },
      { label: "Written by ", value: "Nathalie Bibeau" },
      { label: "Produced by ", value: "Frederic Bohbot and Nathalie Bibeau" },
      { label: "Cinematography ", value: "Christian Bielz" },
      { label: "Edited by ", value: "Vincent Guignard" },
      {
        label: "Original score ",
        value: "Anaïs Larocque and Raphael Reed (songs by Patrick Watson)",
      },
    ],
    recognition: [
      { label: "Top Audience Award ", value: "Hot Docs International Film Festival" },
      { label: "Best Documentary ", value: "Forest City Film Festival" },
      { label: "Special Jury Prize ", value: "Newburyport Film Festival" },
      { label: "Nominee, Best Director & Best Feature Documentary ", value: "Melbourne Documentary Film Festival" },
      { label: "Nominee Environmental Award", value: "Innsbruck Nature Film Festival" },
      { label: "Nominee, Best Documentary ",value: "Oslo Film Festival"},
      { label: "Nominee, Canadian Screen Award ",value: "Donald Brittain Award for Best Social & Political Documentary, Best Editorial Research and Best Cinematography" },
    ],
  },

  {
    title: "The Unsolved Murder of Beverly Lynn Smith",
    img: "/images/unsolved.jpg",
    metaLines: [
      "2022",
      "4 x 1hr.",
      "Series Director / Showrunner / Co-Executive Producer",
      "An Amazon Original with Muse Entertainment",
    ],
    description:
      "A cinematic study of a controversial cold case that explores the unrelenting enigma of a 50-year search for justice.",
    credits: [
      { label: "Series Directed by ", value: "Nathalie Bibeau" },
      { label: "Written by ", value: "Andrea Stewart, Nathalie Bibeau" },
      { label: "Series Produced by ", value: "Tara Jan" },
      { label: "Story Editors ", value: "Andrea Stewart, Tara Hughes, Sean Robb, Brooks Gray" },
      { label: "Associate Producer ", value: "Rachel Browne" },
      { label: "Executive Producers ", value: "Jonas Prupas, Courtney Dobbins, Catherine Legge" },
      { label: "Cinematography ", value: "Christian Bielz" },
      { label: "Original score by ", value: "Todor Kobakov" },
      { label: "Edited by ", value: "Graeme Ball, Steve Taylor, Clark Masters, Jon Deitcher, Nick Taylor" },
      { label: "Production Designer ", value: "Brendan Callaghan" },
    ],
    recognition: [],
  },

  {
    title: "Sugar Coated",
    img: "/images/sugar.jpg", // replace with actual path if different
    metaLines: [
      "2015",
      "Feature Documentary",
      "Associate Producer / Digital Media Producer",
    ],
    description:
      "How the food industry seduced the world one spoonful at a time.",
    credits: [
      { label: "Directed & Edited by ", value: "Michèle Hozer" },
      { label: "Written by ", value: "Roxana Spicer" },
      { label: "Associate Producer ", value: "Nathalie Bibeau" },
      {
        label: "Executive Producers ",
        value: "Michèle Hozer, Janice Dawe",
      },
      { label: "Co-Executive Producer ", value: "Jan Rofekamp" },
    ],
    recognition: [
      {
        label: "Winner, Canadian Screen Award – ",
        value: "Donald Brittain Award for Best Social & Political Documentary",
      },
      {
        label: "Nominee, Canadian Screen Award – ",
        value: "Best Editorial Research, Best Visual Research",
      },
    ],
  },
];

const upcoming = [
  {
    title: "Lost Boy",
    img: "/images/lost.png",
    metaLines: [
      "Planned Release: 2027",
      "Feature Documentary",
      "A CBC Original with the NFB and Muse Entertainment",
      "A Film by Nathalie Bibeau",
    ],
    description: [
      "The disappearance of a young boy draws an army of Internet sleuths that puts his parents in the crosshairs, turns the family on itself, and reveals what we’ve become in the true crime era.",
      "Based on the article in WIRED Magazine, Rain Boots, Turning Tides and the Search for a Missing Child by Katherine Laidlaw.",
    ],
  },
  {
    title: "Doula",
    img: "/images/doula.png",
    metaLines: [
      "Planned Release: 2026",
      "3 × 1hr",
      "A CBC Original with Muse Entertainment",
      "A Series by Nathalie Bibeau",
    ],
    description: [
      "The inconceivable saga of Kaitlyn Braun, a 25-year old social worker who called on over 40 doulas to support her through multiple traumatic pregnancies and births.",
      "With intimate access to both the victims and the perpetrator, Doula explores same-gender crime, the nature of empathy and the controversial question of its limitations.",
    ],
  },
  {
    title: "Gagged",
    img: "/images/gagged.png",
    metaLines: [
      "Planned Release: 2027",
      "Feature documentary",
      "TVO / Knowledge Network",
      "A Film by Nathalie Bibeau",
    ],
    description: [
      "A poetic reckoning that unmasks how NDAs have quietly enabled abuse, silenced victims, and shaped our collective silence.",
      "Featuring a live case that will break in the film, Gagged is a story about secrets and what happens to us all when the wrong ones are forced to be kept.",
    ],
  },
];

</script>

<style scoped>
.works {
  background: #fbf9dc; /* pale yellow */
}

.inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
 
}
</style>

