import { Product } from '../types/index.ts';

export const PRODUCTS: Product[] = [
  {
    id: 'five-panel-preto',
    code: 'PRODUCT 01',
    name: 'FIVE PANEL TACTEL PRETO',
    subtitle: 'Nylon Amassadinho com Corda Trançada',
    price: 80,
    originalPrice: 220,
    category: 'Five Panel',
    colorName: 'Modern Black',
    colorHex: '#131313',
    image: '/assets/crops/bone-five-ancora.png',
    secondaryImage: '/assets/crops/cap_detail_patch.png',
    badge: 'DROP PRINCIPAL',
    description: 'O clássico Five Panel MODERN.SURF confeccionado em tactel crinkle de alta tecnologia. Extremamente leve (apenas 58g), repelente à água e de secagem ultrarrápida. Detalhe frontal da corda náutica branca trançada e patch emborrachado selado.',
    specs: [
      'Tactel 100% Poliamida Crinkle Hydro-Repellent',
      'Corda náutica frontal branca trançada de alta densidade',
      'Fecho traseiro em fita de nylon com fivela de engate em metal fosco',
      'Ilhoses laterais bordados para ventilação térmica contínua',
      'Patch frontal emborrachado com logo MODERN em alto-relevo',
      'Aba maleável flexível com memória de formato (fácil de guardar no bolso)'
    ],
    inStock: true
  },
  {
    id: 'five-panel-bone',
    code: 'PRODUCT 02',
    name: 'FIVE PANEL TACTEL BONE',
    subtitle: 'Off-White Minimal com Corda Náutica',
    price: 80,
    originalPrice: 220,
    category: 'Five Panel',
    colorName: 'Bone Off-White',
    colorHex: '#E9E6DE',
    image: '/assets/crops/bone_logo_bone.png',
    secondaryImage: '/assets/cropsbone_back_fexo.png',
    badge: 'ESTOQUE LIMITADO',
    description: 'Tonalidade Bone orgânica com acabamento acetinado fosco. Desenvolvido para dias de sol intenso, refletindo o calor e mantendo a cabeça fresca graças à respirabilidade natural da trama de tactel.',
    specs: [
      'Tecido tactel leveza extrema com proteção UV50+',
      'Corda trançada em tom contrastante',
      'Forro interno antitranspirante com secagem em minutos',
      'Fivela metálica de ajuste rápido milimétrico',
      'Logo orbital MODERN.SURF impresso na lateral interna'
    ],
    inStock: true
  },
  {
    id: 'five-panel-orange',
    code: 'PRODUCT 03',
    name: 'FIVE PANEL TACTEL SIGNAL ORANGE',
    subtitle: 'Laranja de Destaque / High Visibility',
    price: 80,
    category: 'Five Panel',
    colorName: 'Orange',
    colorHex: '#E45826',
    image: '/assets/crops/bone_logo_orange.png',
    secondaryImage: '/assets/crops/bone_back_fexo.png',
    badge: 'DESTAQUE DA MARCA',
    description: 'A cor de assinatura da MODERN.SURF. Laranja puro de alta vibração com contraste moderno. Criado para fácil localização no mar e presença marcante no asfalto.',
    specs: [
      'Pigmentação Orange de alta solidez contra sal e sol',
      'Estrutura desestruturada anatômica 5-panel',
      'Aba curva suave ou reta personalizável',
      'Resistente a vincos e compressão em mochilas de surf'
    ],
    inStock: true
  }
];

export interface ColorwayItem {
  name: string;
  hex: string;
  label: string;
  image: string;
}

export const COLORWAYS_LIST: ColorwayItem[] = [
  {
    name: 'Modern Black',
    hex: '#131313',
    label: 'PRETO',
    image: '/assets/crops/bone-five-ancora.png'
  },
  {
    name: 'Bone',
    hex: '#E9E6DE',
    label: 'BONE',
    image: '/assets/crops/bone_logo_bone.png'
  },
  // {
  //   name: 'Cinza Claro',
  //   hex: '#D0D0CE',
  //   label: 'CINZA CLARO',
  //   image: '/assets/crops/bone_logo_cinza_claro.png'
  // },
  {
    name: 'Acid Lime',
    hex: '#D3FE89',
    label: 'ACID LIME',
    image: '/assets/crops/bone_logo_acid_lime.png'
  },
  {
    name: 'Orange',
    hex: '#E45826',
    label: 'ORANGE',
    image: '/assets/crops/bone_logo_orange.png'
  }
];

export const LOOKBOOK_ITEMS = [
  {
    id: 'look-1',
    title: 'LOOK 01 - THE SURF COMMUTE',
    subtitle: 'Five Panel Preto + Boardshort e Camisa de Linho',
    season: 'MODERN.SURF · SANTOS - BR',
    image: '/public/assets/crops/cap_five_panel_front.png',
    productFeatured: 'PRODUCT 01'
  },
  {
    id: 'look-2',
    title: 'LOOK 02 - SUN DRENCHED BONE',
    subtitle: 'Five Panel Bone em Sessão de Pôr do Sol',
    season: 'MODERN.SURF · SANTOS - BR',
    image: '/public/assets/crops/cap_detail_patch.png',
    productFeatured: 'PRODUCT 02'
  },
  {
    id: 'look-3',
    title: 'LOOK 03 - SIGNAL VISIBILITY',
    subtitle: 'Laranja de Destaque no Pontal de Santos',
    season: 'MODERN.SURF · SANTOS - BR',
    image: '/public/assets/crops/bone_back_fexo.png',
    productFeatured: 'PRODUCT 03'
  }
];
