import React from 'react';
import MarkdownDisplayPage from '../components/MarkdownDisplayPage';
import pilotGuyImage from '../assets/art.jpg';

// --- Sample Markdown Content (Replace with your actual content) ---
const markdownContent = `
Bekasi, **5th of July 2003**, exactly a day after the birthday of the American nation, **Jeshua Matthew H.**, a man of many talents, was born. Blessed by the Lord with the talent of *drawing human figures poorly*, *eating 4 packs of instant noodles* and a great passion to *sit and stare at a computer screen for long periods of time*, he realized that the only viable career option for a man like him was to become a programmer. He began to fulfill his lifelong calling by pursuing an informatics engineering degree at **[UNAI](https://unai.edu/) (Universitas Advent Indonesia)**.

![Person coding intensely on a computer](https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/unaiiiii.jpg)
*(Image 1 : Universitas Advent Indonesia)*

---

Matthew spend most of his time alone in his room coding while listening to his favourite indie rock band, one of them is “**Black country, new road**” [(BCNR)](https://blackcountrynewroad.com/), some people enjoy BCNR’s music because their “*post-punk*” influence, while others because of their “*experimental-rock*” influence, but as for matthew, he doesn’t judge a music by it’s genre, as a non-musician he enjoys music as long as the music sounds unique and lyrically interesting to him.

![Person coding intensely on a computer](https://images.squarespace-cdn.com/content/v1/5ec6a8301f93db7c497048f8/140f01e6-a06f-444b-80b9-708dae503233/ZENDNL314_PACKSHOT_3000.jpg?format=750w)
*(Image 2 : BCNR's Latest Album)*

---

Coding and listening to music is not the only thing he spends his time with, sometimes if he’s in the mood, he’ll whip out his art supplies and begin drawing. He has enjoyed creating art since he was young, back then the only thing he drew are monsters and creatures he saw from movies and video games, but since 6 years ago, he started to challenge himself to draw things he usually avoid to draw, such as **human figure**, because he wanted to express his emotion and creativity beyond his limit as an artist.

![pilot guy](${pilotGuyImage})
*(Image 3 : My Recent Art)*

---

Recently, Matthew started to join **UNAI’s IT Department team**, he choose to join the **network division**, he join said division not because he’s interested in the world of networking, but because he wanted to have a deeper knowledge on computer networking,
his my opinion, to become a great programmer, having a deep understanding on computer networking is as important as being excel at computer algorithms.
`;
// --- End Sample Markdown Content ---

const AboutMe: React.FC = () => {
  return (
    <MarkdownDisplayPage
      title="About Me 🙋‍♂️"
      markdownContent={markdownContent}
    />
  );
};

export default AboutMe;