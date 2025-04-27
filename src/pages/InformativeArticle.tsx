import React from 'react';
import MarkdownDisplayPage from '../components/MarkdownDisplayPage';


// --- Sample Markdown Content (Replace with your actual content) ---
const markdownContent = `
**Libraries** are the place where anyone can find information through books. A famous American writer, **[Sidney Sheldon](https://en.wikipedia.org/wiki/Sidney_Sheldon)** once said: 
> Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life. Libraries change lives for the better. 

![Sidney sheldon](https://upload.wikimedia.org/wikipedia/en/f/f6/Sidney_Sheldon.jpg)
*(Image 1 : Sidney sheldon)*

I feel this is true at my university, **Universitas Advent Indonesia ([UNAI](https://unai.edu/))**, and having access to it has been a really great chance for me to learn and grow, especially because I wanted to become a *computer programmer*.

**Universitas Advent Indonesia ([UNAI](https://unai.edu/))** is a university managed by the Seventh-day Adventist Church in West Indonesia. It's a place for higher education. **[UNAI](https://unai.edu/)** has a library that is in a *very good spot* on the campus. It is located right in the middle, between the **New Academic Building (NACB)**, where we have our classes, and the buildings where students live (the dormitories). Because it's in the middle, it's very easy for students to walk to the library from their classes or from their rooms. This makes students want to go to the library more often. It helps them decide to spend time there reading and studying because it's not far away or difficult to reach.

![Unai](https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/unaiiiii.jpg)
*(Image 2 : Universitas Advent Indonesia)*  

When students visit the library, they can find many different kinds of books. There are books about science, history, stories, and even funny books (comedy). So, there is something for everyone, no matter what subject they are studying or what they like to read for fun. Another good thing is that students can **borrow books** from the library. They can take books out for a few days to read them somewhere else. This is really helpful for students who like to study in different places, maybe in their own room where it's quiet, or sitting outside on the campus. It gives students a choice about where they want to do their reading and homework.

![Library](https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D)
*(Image 3 : Library)*  

The library at **[UNAI](https://unai.edu/)** is a really useful place for students to learn, and it has done a good job helping them. We can see this because students who often go to the library and use its books and resources usually get **good grades** in their classes each semester. Their marks, or **GPA (Indeks Prestasi Semester)**, are often **satisfying**. This shows that the library really helps students to do well in their studies. It provides the books they need and a quiet place to focus, supporting their education in a positive way.

---

So, the library at **[UNAI](https://unai.edu/)** is a **very important place** for students. Like **Sidney Sheldon** said, it really does help *open up the world*. Its good location makes it easy for everyone to use. It has many different books for study and for fun. Also, letting students borrow books means they can learn in the way that is best for them. For me, wanting to be a *programmer*, having these books and a good place to study is very helpful. The fact that students who use the library often do well in school shows how **valuable** the library is. It really helps students at **UNAI** learn, grow, and have a *better university experience*.`;
// --- End Sample Markdown Content ---

const InformativeArticle: React.FC = () => {
  return (
    <MarkdownDisplayPage
      title="The Impact of Campus Library on Student Success 👩🏻‍🎓"
      markdownContent={markdownContent}
    />
  );
};

export default InformativeArticle;