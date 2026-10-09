import vidro from "@/assets/vidro-detalhe.jpg";
import sump from "@/assets/sump.jpg";
import peixes from "@/assets/peixes.jpg";
import plantado from "@/assets/plantado.jpg";
import fabricacao from "@/assets/fabricacao.jpg";
import ambiente from "@/assets/ambiente.jpg";
import hero from "@/assets/hero-aquario.jpg";
import agua from "@/assets/agua.jpg";

export const IMG = { vidro, sump, peixes, plantado, fabricacao, ambiente, hero, agua };

export const SERVICES = [
  {
    n: "01",
    title: "Fabricação de aquários",
    text: "Aquários construídos com atenção ao vidro, às colagens e ao acabamento — a base estrutural de todo ambiente aquático.",
    image: fabricacao,
    alt: "Mãos aplicando silicone na montagem de um aquário de vidro",
  },
  {
    n: "02",
    title: "Sistemas de sump",
    text: "Sumps que organizam a filtragem fora do aquário principal, contribuindo para o funcionamento e a estabilidade do sistema.",
    image: sump,
    alt: "Sump de vidro com compartimentos de mídias filtrantes iluminado em azul",
  },
  {
    n: "03",
    title: "Catálogo e consultas",
    text: "Modelos, opções e especificações disponíveis são apresentados diretamente no catálogo oficial do WhatsApp.",
    image: vidro,
    alt: "Detalhe da quina de um aquário de vidro com acabamento polido",
  },
];

export const PROCESS = [
  { title: "Planejamento", text: "Tudo começa pelo espaço, pelo volume de água e pelo tipo de ambiente que se deseja criar.", image: ambiente, alt: "Sala com aquário embutido em móvel escuro" },
  { title: "Estrutura", text: "O aquário precisa ser pensado para suportar com segurança o peso e a pressão da água.", image: vidro, alt: "Detalhe de vidro e colagem de aquário" },
  { title: "Filtragem", text: "Sistemas como o sump ajudam a acomodar mídias e equipamentos, mantendo o aquário principal mais limpo visualmente.", image: sump, alt: "Sistema de sump com mídias filtrantes" },
  { title: "Maturação", text: "Antes dos peixes, a água precisa amadurecer para desenvolver as bactérias que sustentam o equilíbrio biológico.", image: agua, alt: "Superfície da água vista por baixo com reflexos de luz" },
  { title: "Vida", text: "Com o sistema estável, plantas e peixes compatíveis completam o ecossistema.", image: peixes, alt: "Peixes ornamentais entre plantas aquáticas" },
];

export const CARE = [
  { title: "A importância da filtragem", text: "A filtragem combina etapas mecânica, biológica e, quando necessário, química. A biológica é a mais importante: abriga as bactérias que transformam compostos tóxicos, como amônia e nitrito, em substâncias menos nocivas." },
  { title: "Qualidade e parâmetros da água", text: "Temperatura, pH, dureza, amônia, nitrito e nitrato devem ser acompanhados com testes. Os valores ideais variam conforme as espécies mantidas — não existe um parâmetro único para todos os aquários." },
  { title: "Escolha responsável das espécies", text: "Pesquise o tamanho adulto, o comportamento e as necessidades de cada espécie antes da compra. O aquário deve comportar o animal adulto, não apenas o filhote." },
  { title: "Compatibilidade entre peixes", text: "Temperamento, tamanho, região do aquário ocupada e exigências de água precisam ser compatíveis. Em caso de dúvida, consulte fontes confiáveis ou profissionais experientes." },
  { title: "Manutenção e equilíbrio", text: "Trocas parciais de água regulares, limpeza cuidadosa das mídias (sem eliminar as bactérias benéficas) e alimentação moderada ajudam a manter o sistema estável." },
  { title: "Cuidados com plantas aquáticas", text: "Plantas dependem do equilíbrio entre luz, nutrientes e CO₂. Excesso de luz sem nutrientes adequados costuma favorecer o surgimento de algas." },
];

export const GALLERY = [
  { src: hero, alt: "Aquário plantado com rochas e cardume iluminado por feixes de luz", w: 1920, h: 1088, span: "md:col-span-2 md:row-span-2" },
  { src: peixes, alt: "Peixes discos e tetras-neon entre plantas", w: 1200, h: 1504, span: "md:row-span-2" },
  { src: plantado, alt: "Aquapaisagismo estilo iwagumi com tapete de plantas", w: 1504, h: 1008, span: "" },
  { src: sump, alt: "Sistema de sump iluminado sob móvel", w: 1200, h: 1504, span: "md:row-span-2" },
  { src: vidro, alt: "Detalhe de quina de aquário em vidro", w: 1200, h: 1504, span: "md:row-span-2" },
  { src: ambiente, alt: "Aquário embutido em sala de estar", w: 1200, h: 1504, span: "md:row-span-2" },
  { src: fabricacao, alt: "Montagem de aquário com silicone", w: 1504, h: 1008, span: "" },
];
