import React from 'react';
import MarkdownDisplayPage from '../components/MarkdownDisplayPage';


// --- Sample Markdown Content (Replace with your actual content) ---
const markdownContent = `
## Thesis 📜

**Cybersecurity** is important in the digital world. This is because it stops **unauthorized people** (people who shouldn't have access) from getting users' **sensitive information**.

## Arguments 🗣📢

1.  Without **cybersecurity**, users cannot use digital services that need their **sensitive data**, like online shopping. If online shop companies don't use **cybersecurity** for their services, users' **sensitive data** can be stolen and used wrongly by irresponsible people. Because of this, users may not want to give their **sensitive data**, and use the app services.

![PT Shopee Indonesia yang terletak di Pacific Century Place, SCBD](https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/kilat/32a8ebcc910ff42fd1dcc49e43be94df.jpg)
*(Image 1 : PT Shopee Indonesia yang terletak di Pacific Century Place, SCBD)*

2.  **Cybersecurity** gives users **privacy** online. Users can choose to share information only with certain people. For example, a company can create a special communication app that only its employees have access to. This allows all company members to share information to each other in a digital space, away from the reach of uninvited entities.

![Employees Communicating](https://images.unsplash.com/photo-1654609065916-747b61fee962?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVtcGxveWVlJTIwdGFsa2luZ3xlbnwwfHwwfHx8MA%3D%3D)
*(Image 2 : Employees Communicating)*

3.  **Cybersecurity** ensures applications work correctly. For example, if an application does not employ **cybersecurity**, an unwanted group or entity could change how the app functions and looks without the developers’ permission. This means users might not be able to use the app's services, or if severe enough may damage their devices.

![Website Defacement](https://blog.sucuri.net/wp-content/uploads/2023/03/hacked_by.png)
*(Image 3 : Website Defacement)*

4.  Lastly, in the digital age, governments use technology to store and manage people's data. This helps make administrative processes faster. **Cybersecurity** makes this possible. It protects the country from **cyber attacks** and ensures that **unauthorized people** cannot access people's **sensitive data**.

## Conclusion 👇

In conclusion, **cybersecurity** is very important in this digital age, because it ensures only the select few people have access to certain **sensitive information**.
`;
// --- End Sample Markdown Content ---

const ExpositionText: React.FC = () => {
  return (
    <MarkdownDisplayPage
      title="The Importance of Cybersecurity in the Digital Age 🔒 "
      markdownContent={markdownContent}
    />
  );
};

export default ExpositionText;