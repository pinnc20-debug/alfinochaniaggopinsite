import { BrandData } from './types';

export const SNAPDRAGON_DATA: BrandData = {
  id: 'snapdragon',
  name: 'Snapdragon',
  color: 'bg-snapdragon',
  accentColor: 'text-snapdragon',
  description: "Snapdragon dari Qualcomm identik dengan performa Android premium. Dikenal dengan GPU Adreno yang kuat dan modem canggih, chip Snapdragon mentenagai sebagian besar smartphone flagship dunia.",
  philosophy: "Performa & Konektivitas Tanpa Henti",
  history: "Didirikan oleh Qualcomm, lini Snapdragon merevolusi komputasi seluler dengan mengintegrasikan modem langsung dengan prosesor. Dari S1 awal hingga seri 8 Gen modern, mereka telah menetapkan standar keunggulan Android.",
  flagshipChip: {
    name: "Snapdragon 8 Gen 3",
    cpu: "Kryo (1x Cortex-X4 @ 3.3GHz)",
    gpu: "Adreno 750",
    process: "4nm TSMC",
    aiEngine: "Hexagon NPU",
    antutuScore: "~2,100,000+"
  }
};

export const MEDIATEK_DATA: BrandData = {
  id: 'mediatek',
  name: 'MediaTek',
  color: 'bg-mediatek',
  accentColor: 'text-mediatek',
  description: "MediaTek telah berubah dari pilihan ekonomis menjadi penantang flagship sejati. Seri Dimensity mereka menawarkan efisiensi dan performa multi-core yang luar biasa, menantang status quo dengan arsitektur inovatif.",
  philosophy: "Teknologi Luar Biasa untuk Semua",
  history: "Perusahaan semikonduktor fabless Taiwan, MediaTek, awalnya berfokus pada hiburan rumah sebelum mendominasi pasar seluler kelas menengah. Dengan peluncuran seri Dimensity 9000, mereka sukses memasuki arena flagship premium.",
  flagshipChip: {
    name: "Dimensity 9300",
    cpu: "All Big Core Design (4x X4)",
    gpu: "Immortalis-G720",
    process: "4nm TSMC",
    aiEngine: "APU 790",
    antutuScore: "~2,200,000+"
  }
};