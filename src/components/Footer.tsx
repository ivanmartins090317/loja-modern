import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer id="footer" className="w-full bg-[#ded9ce] border-t border-[#131313]/20 pt-16 pb-12 text-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Section with Newsletter */}
        {/* <div className="mb-14 pb-12 border-b border-[#131313]/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <span className="font-mono-code text-[11px] font-bold tracking-[0.25em] text-[#EB450E] uppercase block mb-1">
              DISPATCH & DROPS PRIVADOS
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-[#131313]">
              RECEBA OS PRÓXIMOS DROPS & CORES DO FIVE PANEL
            </h4>
            <p className="text-xs text-[#504718] font-medium mt-1 max-w-md">
              Acesso antecipado a novas colorways do boné de tactel, reposições de estoque e lançamentos exclusivos MODERN.SURF.
            </p>
          </div>

          <div className="md:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#D3FE89]/30 border border-[#131313] text-[#131313] text-xs font-bold font-mono-code">
                <CheckCircle2 className="w-4 h-4 text-[#EB450E]" />
                <span>Você está cadastrado na lista VIP da MODERN.SURF.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="DIGITE SEU E-MAIL..."
                  required
                  className="flex-1 bg-white border border-[#131313]/30 px-4 py-2.5 text-xs font-mono-code focus:outline-none focus:border-[#EB450E]"
                />
                <button
                  type="submit"
                  className="bg-[#131313] hover:bg-[#EB450E] text-white px-6 py-2.5 text-xs font-mono-code font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>CADASTRAR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div> */}

        {/* 4 Columns matching the Prototype layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Logo Badge */}
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <img alt="logo-modern-surf" className='w-25' src="/assets/crops/modern-laranja.png" />
              <div>
                <span className="font-anton text-lg leading-tight tracking-wider text-[#131313] block uppercase">
                  MODERN.SURF
                </span>
                <span className="font-signature text-xl text-[#EB450E] -mt-1 block">
                  Simples / Moderno / Clean
                </span>
              </div>
            </div>

            <div className="font-mono-code text-[11px] text-[#504718] font-medium space-y-1 pt-2 leading-relaxed">
              <p>Grupo Modern x lab</p>
              <p>Santos - SP, Brasil</p>
              <p>ESTD 2026</p>
            </div>
          </div>

          {/* Column 2: ATELIER & PONTOS */}
          {/* <div>
            <h5 className="font-mono-code text-xs font-bold tracking-[0.2em] text-[#131313] uppercase mb-4">
              ATELIER & ESPAÇOS
            </h5>
            <div className="font-mono-code text-[11px] text-[#504718] font-medium space-y-2 leading-relaxed">
              <p>Flagship Santos: Av. Ana Costa, Gonzaga</p>
              <p>Surf Point: Ponta da Praia, Santos</p>
              <p>Showroom SP: Pinheiros, São Paulo</p>
              <p>Atelier Floripa: Campeche, SC</p>
            </div>
          </div> */}

          {/* Column 3: NAVEGAÇÃO */}
          <div>
            <h5 className="font-mono-code text-xs font-bold tracking-[0.2em] text-[#131313] uppercase mb-4">
              MODERN.SURF
            </h5>
            <ul className="font-mono-code text-[11px] text-[#504718] font-medium space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#EB450E] transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#EB450E] transition-colors cursor-pointer"
                >
                  Five Panel de Tactel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('brand-story')}
                  className="hover:text-[#EB450E] transition-colors cursor-pointer"
                >
                  Conforto & Qualidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('footer')}
                  className="hover:text-[#EB450E] transition-colors cursor-pointer"
                >
                  Contato & Suporte
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: SOCIALS */}
          <div>
            <h5 className="font-mono-code text-xs font-bold tracking-[0.2em] text-[#131313] uppercase mb-4">
              CONEXÕES
            </h5>
            <ul className="font-mono-code text-[11px] text-[#504718] font-medium space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#EB450E] transition-colors block"
                >
                  Instagram / @modern.surf
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5513981400137"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#EB450E] transition-colors block font-bold text-[#131313]"
                >
                  WhatsApp / (13) 98140-0137
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@modernsurf.com.br"
                  className="hover:text-[#EB450E] transition-colors block"
                >
                  Email / contato@modernsurf.com.br
                </a>
              </li>
              <li>
                <span className="text-[#504718] block">
                  Envios Rápidos · Na Baixada Santista
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-14 pt-6 border-t border-[#131313]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-code text-[#504718] gap-4">
          <p>© 2026 MODERN.SURF. TODOS OS DIREITOS RESERVADOS. SANTOS - BR.</p>
          <div className="flex gap-6 uppercase">
            <span className="hover:text-[#131313] cursor-pointer">Política de Troca</span>
            <span className="hover:text-[#131313] cursor-pointer">Termos de Uso</span>
            <span className="hover:text-[#131313] cursor-pointer">Envio & Rastreio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
