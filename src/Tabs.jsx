import { useState } from "react";
import "./Index.css";

function Tabs() {
  const tabs = [
    { id: "laptop", label: "laptop", content:
      <>
       <div className="box-img">
          <img src="/images/open-laptop.webp" alt="laptop" />
       </div>
       <div className="box-contetnt">
          <p>A laptop is a portable computer that combines all the essential components of a desktop, including a screen, keyboard, touchpad, and speakers, into a single compact device. Designed for convenience, laptops allow users to work, study, or entertain themselves from anywhere with a battery-powered operation. They come in various sizes, from lightweight ultrabooks to powerful gaming laptops, catering to different needs. Modern laptops feature high-resolution displays, fast processors, and long-lasting batteries, making them ideal for professionals, students, and casual users alike. With wireless connectivity options like Wi-Fi and Bluetooth, laptops provide seamless access to the internet and peripheral devices.</p>
       </div>
      </>
       },

    { id: "keyboard", label: "keyboard", content: 
      <>
        <div className="box-img">
          <img src="/images/keyboard-wooden-desk.webp" alt="keyboard wooden desk" />
        </div>
        <div className="box-contetnt">
          <p>A keyboard is an essential input device used to type text, enter commands, and control a computer or other electronic devices. It consists of a set of keys arranged in a specific layout, typically following the QWERTY design, which helps users type efficiently. Keyboards can be wired or wireless, connecting via USB, Bluetooth, or other technologies. Modern keyboards often include additional features like backlighting, multimedia controls, and ergonomic designs for comfort during long typing sessions. They are used not only with computers but also with smartphones, tablets, and gaming consoles, making them a universal tool for communication and productivity.</p>
        </div>
      </>
     },
    { id: "headphones", label: "headphones", content: 
      <>
        <div className="box-img">
          <img src="/images/headphones-table.webp" alt="headphone" />
        </div>
        <div className="box-contetnt">
          <p>Headphones are a popular audio device worn over or inside the ears to listen to music, podcasts, or other audio content privately. They come in different styles, including over-ear, on-ear, and in-ear (earbuds), each offering unique comfort and sound quality. Modern headphones feature advanced technologies like noise cancellation, which blocks external noise for an immersive experience, and wireless Bluetooth connectivity for hassle-free use. Many models also include built-in microphones, allowing users to take calls or interact with voice assistants. Whether for entertainment, gaming, or professional use, headphones provide a personal and high-quality audio experience.</p>
        </div>
      </>
     },
    { id: "mouse", label: "mouse", content: 
      <>
        <div className="box-img">
          <img src="/images/mouse.webp" alt="mouse" />
        </div>
        <div className="box-contetnt">
          <p>A computer mouse is an essential input device that allows users to interact with their computer by controlling the cursor on the screen. It typically features two buttons (left and right) for clicking and a scroll wheel for navigating documents and web pages. Modern mice come in various designs, including wired (USB) and wireless (Bluetooth or RF) models, offering flexibility for different setups. Ergonomic mice are designed to reduce wrist strain during prolonged use, while gaming mice boast high precision, customizable buttons, and RGB lighting for enhanced performance. The mouse plays a crucial role in improving efficiency, whether for work, creative tasks, or gaming.</p>
        </div>
      </>
    },
  ];

  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || tabs[0].id );

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
                setActiveTab(tab.id);
                localStorage.setItem("activeTab", tab.id);
              }}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`tab-content ${activeTab ? "show" : ""}`}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
