import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BanknoteIcon,
  BrainIcon,
  CalendarHeartIcon,
  GiftIcon,
  HandshakeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  ScaleIcon,
  ShieldCheckIcon,
  StoreIcon,
  TrophyIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="bg-gradient-to-bl from-avocado-100/40 to-avocado-50/20 from-0% to-70% py-20 border-b border-avocado-300/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="inline-block text-xs bg-primary-100/10 text-primary-400 px-4 py-2 rounded-full md:text-sm font-medium">
                Koperasi Simpan Pinjam dan Pembiayaan Syariah
              </div>
              <h1 className="sr-only">BMT Huwaiza</h1>
              <div>
                <img
                  src="/logo/logo-huwaiza.png"
                  alt="Logo Huwaiza"
                  className="h-28 md:h-40 w-auto"
                />
              </div>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed font-semibold text-center md:text-left">
                Melayani lebih dekat, mudah, dan berkah. Solusi keuangan syariah
                yang mengutamakan prinsip-prinsip Islam untuk kemajuan umat.
              </p>
              <div className="flex w-full flex-col sm:flex-row gap-4">
                <Button size="lg">Mulai Sekarang</Button>
                <Button size="lg" variant="secondary">
                  Pelajari Lebih Lanjut
                </Button>
              </div>

              {/* Credentials */}
              <div className="pt-6 space-y-4 text-sm text-gray-600">
                <p className="text-center md:text-left">
                  <b>Pengesahaan Akta Pendirian:</b>
                  <br />
                  Keputusan Menkop UKM RI No. 75/BH/KUKM/1.2/IV/2005
                </p>
                <p className="text-center md:text-left">
                  <b>Pengesahan Perubahan Anggaran Dasar:</b>
                  <br />
                  Keputusan Menteri HAM RI No. AHU-0000996.AH.01.07.TAHUN 2020
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent-600 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-300 rounded-full translate-y-12 -translate-x-12"></div>
                <img
                  src="/images/placeholder.svg?height=400&width=400"
                  alt="BMT Huwaiza Team"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-2xl w-full h-[200px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 z-20">
                  <p className="font-semibold text-gray-900">
                    Melayani Lebih Dekat Mudah & Berkah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Produk dan Layanan Syariah
            </h2>
            <p className="text-lg text-gray-600">
              Rangkaian solusi keuangan syariah untuk mendukung kesejahteraan
              dan kemandirian umat
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/" className="group">
              <div className="bg-[#569930] w-full min-h-64 rounded-2xl overflow-hidden flex flex-col h-[500px] relative">
                <div className="p-6 space-y-4 z-10">
                  <div className="p-3 w-fit text-avocado-400 bg-avocado-50 rounded-lg">
                    <BanknoteIcon size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-avocado-50 font-semibold text-2xl tracking-tight">
                      Simpanan Syariah
                    </h3>
                    <p className="text-avocado-50 text-sm">
                      Simpanan syariah berbasis akad Mudarabah dan Wadiah, aman,
                      produktif, dan penuh keberkahan.
                    </p>
                  </div>
                </div>
                <div className="mask-t-from-70% bg-cover bg-position-[center_bottom_-1rem] bg-[url(/images/layanan/simpanan.png)] flex-1 group-hover:bg-position-[center_top_0rem] bg-no-repeat transition-all ease-in"></div>
                <div className="bg-gradient-to-t from-avocado-700/20 to-avocado-700/0 from-10% to-50%  w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all ease-in"></div>
              </div>
            </Link>
            <Link to="/" className="group">
              <div className="bg-primary-400 w-full min-h-64 rounded-2xl overflow-hidden flex flex-col h-[500px] relative">
                <div className="p-6 space-y-4">
                  <div className="p-3 w-fit text-primary-400 bg-primary-50 rounded-lg">
                    <BanknoteIcon size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-primary-50 font-semibold text-2xl tracking-tight">
                      Pembiayaan Syariah
                    </h3>
                    <p className="text-primary-50 text-sm">
                      Pembiayaan usaha dan kebutuhan anggota dengan akad
                      jual-beli dan prinsip tolong-menolong sesuai syariah.
                    </p>
                  </div>
                </div>
                <div className="mask-t-from-70% bg-cover bg-position-[center_bottom_-1rem] bg-[url(/images/layanan/pembiayaan.png)] flex-1 group-hover:bg-position-[center_top_0rem] bg-no-repeat transition-all ease-in"></div>
                <div className="bg-gradient-to-t from-primary-700/20 to-primary-700/0 from-10% to-50%  w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all ease-in"></div>
              </div>
            </Link>
            <Link to="/" className="group">
              <div className="bg-accent-600 w-full rounded-2xl overflow-hidden flex flex-col h-[500px] relative">
                <div className="p-6 space-y-4">
                  <div className="p-3 w-fit text-accent-400 bg-accent-50 rounded-lg">
                    <BanknoteIcon size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-accent-50 font-semibold text-2xl tracking-tight">
                      Simpanan Syariah
                    </h3>
                    <p className="text-accent-50 text-sm">
                      Simpanan syariah berbasis akad Mudarabah dan Wadiah, aman,
                      produktif, dan penuh keberkahan.
                    </p>
                  </div>
                </div>
                <div className="mask-t-from-70% bg-cover bg-position-[center_bottom_-2rem] bg-[url(/images/layanan/baitulmal.png)] flex-1 group-hover:bg-position-[center_top_1rem] bg-no-repeat transition-all ease-in"></div>
                <div className="bg-gradient-to-t from-accent-900/20 to-accent-900/0 from-10% to-50%  w-full h-full absolute opacity-0 group-hover:opacity-100 transition-all ease-in"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Keuntungan Menjadi Bagian dari{" "}
              <span className="text-accent-600">BMT</span>{" "}
              <span className="text-primary-400">Huwaiza</span>
            </h2>
            <p className="text-lg text-gray-600">
              Bergabung dengan koperasi simpan pinjam berbasis syariah adalah
              langkah bijak bagi para anggota untuk mencapai keuangan yang
              berkah dan terhindar dari larangan riba.
            </p>
          </div>
          <div className="space-y-8 mx-auto max-w-5xl">
            <img
              src="/images/keuntungan/rapat-anggota.png"
              className="w-full h-auto rounded-xl md:rounded-3xl"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2 text-gray-600">
                <div className="flex gap-3 items-center">
                  <StoreIcon size={24} />
                  <p className="font-semibold tracking-tight text-base">
                    Akses Pembiayaan bagi UMKM
                  </p>
                </div>
                <p className="text-sm">
                  Koperasi simpan pinjam syariah menjadi mitra utama bagi pelaku
                  UMKM dalam memperoleh akses permodalan yang mudah, cepat, dan
                  berlandaskan nilai-nilai keadilan.
                </p>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex gap-3 items-center">
                  <HandshakeIcon size={24} />
                  <p className="font-semibold tracking-tight text-base">
                    Akses Pembiayaan Yang Adil
                  </p>
                </div>
                <p className="text-sm">
                  Anggota mendapatkan kemudahan pembiayaan tanpa bunga (riba),
                  melalui akad-akad syariah yang halal, adil, dan saling
                  menguntungkan.
                </p>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex gap-3 items-center">
                  <ScaleIcon size={24} />
                  <p className="font-semibold tracking-tight text-base">
                    Transparansi dan Akuntabilitas
                  </p>
                </div>
                <p className="text-sm">
                  Setiap transaksi dikelola dengan menjunjung tinggi prinsip
                  keterbukaan, kejujuran, dan akuntabilitas — mencerminkan
                  nilai-nilai amanah dalam muamalah Islami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              FAQ - Tanya Jawab Seputar{" "}
              <span className="text-accent-600">BMT</span>{" "}
              <span className="text-primary-400">Huwaiza</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kami rangkum pertanyaan umum agar Anda lebih memahami layanan dan
              prinsip koperasi syariah bersama kami.
            </p>
          </div>
          <div className="space-y-8 mx-auto max-w-3xl">
            <div className="p-2 bg-gray-100 border border-gray-200 rounded-lg">
              <Accordion
                type="single"
                defaultValue="item-1"
                className="space-y-4"
              >
                <AccordionItem
                  value="item-1"
                  className="data-[state=open]:bg-white rounded-lg data-[state=open]:border-gray-200 border border-transparent"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline cursor-pointer">
                    Bagaimana cara daftarnya?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Anda dapat mendaftar dengan mengunjungi kantor kami atau
                    menghubungi customer service. Bawa dokumen identitas yang
                    diperlukan seperti KTP, KK, dan dokumen pendukung lainnya.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="data-[state=open]:bg-white rounded-lg data-[state=open]:border-gray-200 border border-transparent"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline cursor-pointer">
                    Apa keuntungan mendaftar di KSPPS BMT Huwaiza?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    BMT Huwaiza menawarkan sistem bagi hasil yang adil,
                    pelayanan yang ramah, proses yang mudah, dan tentunya sesuai
                    dengan prinsip-prinsip syariah Islam.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="data-[state=open]:bg-white rounded-lg data-[state=open]:border-gray-200 border border-transparent"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline cursor-pointer">
                    Apakah BMT Huwaiza sudah terdaftar resmi?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Ya, BMT Huwaiza telah terdaftar resmi dengan izin dari
                    Kementerian Koperasi dan UKM RI serta memiliki pengawasan
                    dari Dewan Pengawas Syariah.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Dari Hati Para Anggota
            </h2>
            <p className="text-lg text-gray-600">
              Pengalaman para anggota dalam meraih kemudahan dan keberkahan
              melalui koperasi syariah.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "Alhamdulillah, BMT Huwaiza sangat membantu usaha kecil saya.
                  Prosesnya mudah, pelayanannya ramah, dan yang paling penting
                  sesuai dengan prinsip syariah."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">SA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Siti Aminah</h4>
                    <p className="text-sm text-gray-500">
                      Pemilik Warung Makan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "Sudah 5 tahun saya menabung di BMT Huwaiza. Bagi hasil yang
                  diberikan sangat memuaskan dan pelayanannya selalu memuaskan.
                  Terima kasih BMT Huwaiza!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">AH</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Ahmad Hidayat
                    </h4>
                    <p className="text-sm text-gray-500">Karyawan Swasta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "BMT Huwaiza membantu saya mendapatkan pembiayaan untuk
                  renovasi rumah dengan proses yang cepat dan mudah. Sangat
                  direkomendasikan!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">FR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fatimah Rahayu
                    </h4>
                    <p className="text-sm text-gray-500">Ibu Rumah Tangga</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "Alhamdulillah, BMT Huwaiza sangat membantu usaha kecil saya.
                  Prosesnya mudah, pelayanannya ramah, dan yang paling penting
                  sesuai dengan prinsip syariah."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">SA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Siti Aminah</h4>
                    <p className="text-sm text-gray-500">
                      Pemilik Warung Makan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "Sudah 5 tahun saya menabung di BMT Huwaiza. Bagi hasil yang
                  diberikan sangat memuaskan dan pelayanannya selalu memuaskan.
                  Terima kasih BMT Huwaiza!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">AH</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Ahmad Hidayat
                    </h4>
                    <p className="text-sm text-gray-500">Karyawan Swasta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary-200 rounded-md py-2 transition-colors bg-white">
              <CardContent className="p-4 h-full flex flex-col gap-4 justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  "BMT Huwaiza membantu saya mendapatkan pembiayaan untuk
                  renovasi rumah dengan proses yang cepat dan mudah. Sangat
                  direkomendasikan!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-400/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-400 font-semibold">FR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fatimah Rahayu
                    </h4>
                    <p className="text-sm text-gray-500">Ibu Rumah Tangga</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">4.9</div>
                <p className="text-sm">Rating Kepuasan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">500+</div>
                <p className="text-sm">Nasabah Aktif</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">20+</div>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-accent-600 to-accent-700 from-0% to-90%">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Program Baitulmal
            </h2>
            <p className="text-lg text-accent-50">
              Mewujudkan kepedulian sosial melalui berbagai program pemberdayaan
              masyarakat yang berkelanjutan
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            <Card className="border bg-accent-50 border-accent-500 rounded-md">
              <CardHeader className="text-center">
                <div className="p-2 bg-accent-600/20 text-accent-600 rounded-md flex items-center justify-center mx-auto mb-2">
                  <GiftIcon size={20} />
                </div>
                <CardTitle className="text-xl text-accent-600 mb-2">
                  Huwaiza Berbagi
                </CardTitle>
                <div className="w-20 h-[1px] bg-accent-600 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Sarapan Gratis</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">
                    Kado Yatim, Piatu, & Dhuafa
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Kado Guru Ngaji</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Tanggap Bencana</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border bg-accent-50 border-accent-500 rounded-md">
              <CardHeader className="text-center">
                <div className="p-2 bg-accent-600/20 text-accent-600 rounded-md flex items-center justify-center mx-auto mb-2">
                  <HeartIcon size={20} />
                </div>
                <CardTitle className="text-xl text-accent-600 mb-2">
                  Huwaiza Sehat
                </CardTitle>
                <div className="w-20 h-[1px] bg-accent-600 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Donor Darah</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Makanan Sehat</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Cek Kesehatan Gratis</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Ambulans</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border bg-accent-50 border-accent-500 rounded-md">
              <CardHeader className="text-center">
                <div className="p-2 bg-accent-600/20 text-accent-600 rounded-md flex items-center justify-center mx-auto mb-2">
                  <BrainIcon size={20} />
                </div>
                <CardTitle className="text-xl text-accent-600 mb-2">
                  Huwaiza Cerdas
                </CardTitle>
                <div className="w-20 h-[1px] bg-accent-600 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Rumah Tahfiz Yatim</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Beasiswa Anak Asuh</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border bg-accent-50 border-accent-500 rounded-md">
              <CardHeader className="text-center">
                <div className="p-2 bg-accent-600/20 text-accent-600 rounded-md flex items-center justify-center mx-auto mb-2">
                  <CalendarHeartIcon size={20} />
                </div>
                <CardTitle className="text-xl text-accent-600 mb-2">
                  Huwaiza Raya
                </CardTitle>
                <div className="w-20 h-[1px] bg-accent-600 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Kurban</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">Ramadhan</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border space-y-6 border-white w-full p-6 md:p-10 md:px-20 rounded-2xl bg-gradient-to-t from-white/30 from-0% to-white/0 to-50%">
              <div className="text-center space-y-2">
                <div className="text-xl lg:text-3xl font-bold text-white">
                  Kirimkan Donasi Terbaik Anda
                </div>
                <p className="text-sm md:text-base text-accent-50">
                  Salurkan zakat, infaq, dan sedekah Anda melalui program
                  Baitulmaal Huwaiz
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="border h-fit border-white w-full p-4 rounded-md bg-white/10 space-y-1 flex flex-col items-center justify-center text-center">
                  <span className="text-sm lg:text-base font-medium text-white">
                    Rekening Donasi BSI (Bank Syariah Indonesia)
                  </span>
                  <span className="text-3xl lg:text-4xl font-bold text-white">
                    724 007 7773
                  </span>
                  <span className="text-sm lg:text-base font-normal text-white">
                    a.n BAITULMAL HUWAIZA
                  </span>
                </div>
                <div className="overflow-hidden rounded-lg shrink-0">
                  <img
                    src="/images/baitulmal/qris.jpg"
                    alt="QRIS Baitulmal"
                    className="md:h-[300px] h-auto w-full md:w-auto"
                  />
                </div>
                <div className="border h-fit border-white w-full p-4 rounded-md bg-white/10 space-y-1 flex flex-col items-center justify-center text-center">
                  <span className="text-sm lg:text-base font-medium text-white">
                    Konfirmasi & Jemput Donasi
                  </span>
                  <span className="text-3xl lg:text-4xl font-bold text-white">
                    +62 811 9000 1065
                  </span>
                  <span className="text-sm lg:text-base font-normal text-white">
                    Layanan Jemput Donasi
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-accent-600"
                >
                  Donasi Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:text-accent-600"
                >
                  Jemput Donasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-bl from-primary-600 to-primary-400 from-10% to-80% relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 gap-6 flex flex-col items-center z-10">
          <div className="p-2 rounded-md bg-white shadow-md">
            <img
              src="/logo/logo-huwaiza-square.png"
              alt="Logo Square BMT Huwaiza"
              className="h-18 w-18"
            />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Mulai Perjalanan Finansial Syariah Anda
            </h2>
            <p className="text-lg text-primary-50">
              Mari menjadi bagian dari koperasi syariah yang amanah,
              memberdayakan, dan penuh keberkahan.
            </p>
          </div>
          <div className="flex w-full flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary-400"
            >
              Hubungi Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:text-primary-400"
            >
              Kunjungi Kami
            </Button>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-6">
            <div className="flex items-center gap-1">
              <div className="text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <p className="text-sm text-primary-50">
                Terakreditasi Bintang Tiga
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-yellow-400">
                <ShieldCheckIcon size={18} className="fill-yellow-400" />
              </div>
              <p className="text-sm text-primary-50">Terdaftar & Diawasi OJK</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-yellow-400">
                <TrophyIcon size={18} className="fill-yellow-400" />
              </div>
              <p className="text-sm text-primary-50">
                Koperasi Berprestasi Depok 2010 & 2016
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -top-60 -right-60 md:-top-40 md:-right-40 w-80 h-80 bg-primary-500 rounded-full -z-0"></div>
        <div className="absolute -bottom-60 -left-60 md:-bottom-40 md:-left-40 w-80 h-80 bg-primary-500 rounded-full"></div>
      </section>

      <footer className="bg-primary-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 py-6">
            <div className="space-y-4">
              <img
                src="/ogo/logo-huwaiza.png"
                alt="Logo Huwaiza"
                className="h-14 w-auto"
              />
              <p className="text-gray-200 mb-4">
                Lembaga keuangan syariah yang mengutamakan prinsip-prinsip Islam
                untuk kemajuan dan kesejahteraan umat.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-[1px] border-white/40 bg-white/15 rounded-md p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="h-4 w-4 text-primary-400" />
                      <span className="font-medium text-sm">
                        Kantor Pelayanan Utama
                      </span>
                    </div>
                    <p className="text-gray-300 ml-7 leading-normal font-light text-xs">
                      Jl. Raya Parung Bingung No. 02 RT 002/RW 013 <br />
                      Kel. Rangkapan Jaya Baru, Kec. Pancoran Mas,
                      <br />
                      Kota Depok 16434.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4 text-primary-400" />
                    <span className="font-medium text-sm">021 - 7789 6247</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-primary-400"
                      >
                        <title>WhatsApp</title>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">
                      +62 811 9000 743
                    </span>
                  </div>
                </div>
                <div className="border-[1px] border-white/40 bg-white/15 rounded-md p-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="h-4 w-4 text-primary-400" />
                      <span className="font-medium text-sm">
                        Kantor Pelayanan Anggota
                      </span>
                    </div>
                    <p className="text-gray-300 ml-7 leading-normal font-light text-xs">
                      Jl. Dewi Sartika III No. 75, RT 003/RW 014, <br />
                      Kel. Depok, Kec. Pancoran Mas, <br /> Kota Depok 16431.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-4 w-4 text-primary-400" />
                    <span className="font-medium text-sm">021 - 7781 3477</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-primary-400"
                      >
                        <title>WhatsApp</title>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">
                      +62 852 8252 9760
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 items-end">
              <div>
                <h4 className="font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Simpanan Syariah
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Pembiayaan Syariah
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Baitulmaal
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Visi & Misi
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Goresan Tinta Emas
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Pusat Informasi</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Berita
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-white transition-colors">
                      Hubungi Kami
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap justify-end col-span-2 md:col-span-1">
                <Link
                  to="/"
                  className="w-8 h-8 shrink-0 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <div className="h-4 w-4">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="w-8 h-8 shrink-0 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <div className="h-4 w-4">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="w-8 h-8 shrink-0 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <div className="h-4 w-4">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white"
                    >
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="w-8 h-8 shrink-0 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <div className="h-4 w-4">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white"
                    >
                      <title>YouTube</title>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="w-8 h-8 shrink-0 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <div className="h-4 w-4">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white"
                    >
                      <title>TikTok</title>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-700 mt-6 pt-6 text-center text-gray-300">
            <p>&copy; 2026 BMT Huwaiza. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
