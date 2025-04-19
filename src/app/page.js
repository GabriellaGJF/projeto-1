// app/page.tsx ou pages/index.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#e1a5ff] text-center font-sans">
      <div className="text-[10rem] text-red-600 heartPulse">❤️</div>

      <div className="mt-5 text-red-600 text-2xl flex items-center justify-center gap-2 flex-wrap">
        <a href="https://emoji.gg/emoji/7442-kuromiletter">
          <Image
            src="https://cdn3.emoji.gg/emojis/7442-kuromiletter.gif"
            width={64}
            height={64}
            alt="kuromiletter"
          />
        </a>

        <h1 >𝐂𝐨𝐦 𝐜𝐚𝐫𝐢𝐧𝐡𝐨 𝐝𝐞 𝐆𝐚𝐛𝐛𝐲!</h1>

        <a href="https://emoji.gg/emoji/7455-kuromilove">
          <Image
            src="https://cdn3.emoji.gg/emojis/7455-kuromilove.gif"
            width={64}
            height={64}
            alt="kuromilove"
          />
        </a>
      </div>
    </main>
  );
}
