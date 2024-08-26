import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-black font-mono leading-normal">Hai, Saya Praditya Aldi</h1>
      <p className="mb-4 leading-relaxed text-neutral-300">
        Hai, saya Praditya Aldi Syahputra, mahasiswa Teknik Komputer di Amikom Yogyakarta. Saya
        tertarik banget dengan web development dan cybersecurity, tapi masih terus belajar juga.
        Kalau kamu tertarik untuk kolaborasi atau sekadar diskusi sambil belajar bareng, yuk kita
        ngobrol! Di situs ini, saya share opini, dokumentasi belajar, dan tutorial. Jangan ragu
        untuk hubungi saya via email di pradityaaldi.s@gmail.com atau cek sosial media saya di
        bagian bawah situs.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
