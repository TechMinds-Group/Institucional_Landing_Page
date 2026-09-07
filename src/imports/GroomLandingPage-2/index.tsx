import svgPaths from "./svg-jh377g42tc";
import imgIconContainer from "./2e6ab184d92ccf9c9cc749dc008d4aec29ea5790.png";
import imgDashboardPreview from "./20860e87f1caa68bf54946def42a084f479fa552.png";

function Scissors() {
  return <div className="relative shrink-0 size-[28px]" data-name="scissors" />;
}

function IconContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[28px]" data-name="icon-container">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconContainer} />
      <Scissors />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Frame">
      <IconContainer />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[24px] whitespace-nowrap">Groom</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[32px] items-center leading-[normal] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Funcionalidades</p>
      <p className="relative shrink-0">Preços</p>
      <p className="relative shrink-0">Depoimentos</p>
      <p className="relative shrink-0">FAQ</p>
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="border-[#f1c75c] border-[1.5px] border-solid content-stretch flex items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="login-btn">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[14px] whitespace-nowrap">Entrar</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex items-start px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">TESTAR GRÁTIS</p>
    </div>
  );
}

function CtaGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="cta-group">
      <LoginBtn />
      <Frame2 />
    </div>
  );
}

function HeroNav() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="hero-nav">
      <Frame />
      <Frame1 />
      <CtaGroup />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">{`AGENDAMENTO & GESTÃO PREMIUM`}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ArrowRight />
    </div>
  );
}

function CtaPrimary() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex gap-[10px] items-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="cta-primary">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">QUERO TESTAR GRÁTIS POR 15 DIAS</p>
      <IconContainer1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[419px]" data-name="Frame">
      <CtaPrimary />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">⚡ Sem cartão de crédito. Sem compromisso. Configuração em 5 minutos.</p>
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="hero-left">
      <Badge />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[#f8fafc] text-[44px] w-[min-content]">
        <span className="leading-[1.15]">{`Enquanto você organiza agenda no papel, seu concorrente está faturando com o `}</span>
        <span className="leading-[1.15] text-[#f1c75c]">Groom.</span>
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[min-content]">O Groom é o sistema mais completo de agendamento e gestão para barbearias, estúdios de tatuagem e salões de beleza. Seu cliente agenda online, você recebe no WhatsApp, ninguém perde horário e seu faturamento escala.</p>
      <Frame3 />
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="h-[512px] relative rounded-[16px] shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.4)] shrink-0 w-[550px]" data-name="dashboard-preview">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-11.91%] max-w-none top-[0.06%] w-[127.57%]" src={imgDashboardPreview} />
      </div>
    </div>
  );
}

function HeroBody() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="hero-body">
      <HeroLeft />
      <DashboardPreview />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0b0f1a] gap-[64px] items-center pb-[100px] pt-[80px] px-[120px] relative shrink-0 to-[#1a2233] w-full" data-name="section-hero">
      <HeroNav />
      <HeroBody />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">CONTROLE TOTAL</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge1 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-[36px] text-center w-[min-content]">Você reconhece esses problemas na sua gestão?</p>
    </div>
  );
}

function CalendarX() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="calendar-x">
          <path d={svgPaths.p19e35a00} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <CalendarX />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Cliente marcou e simplesmente não apareceu?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Você reservou o horário, recusou outros clientes e ficou com a cadeira vazia. Dinheiro perdido. Com o Groom, lembretes automáticos no WhatsApp reduzem faltas drasticamente.</p>
    </div>
  );
}

function PainCard() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[304px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[384px]" data-name="pain-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function FileMinus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-minus">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="file-minus">
          <path d={svgPaths.p3b2f3cc0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <FileMinus />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Anotou no papel e perdeu o agendamento?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Aquele rabisco que ninguém entende, a folha que sumiu, o horário que foi marcado duas vezes. Já aconteceu, né? Com o Groom, sua agenda é digital, na nuvem e acessível de qualquer lugar.</p>
    </div>
  );
}

function PainCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[304px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[384px]" data-name="pain-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function DoorOpen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="door-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="door-open">
          <path d={svgPaths.pa8388c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <DoorOpen />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Planos de assinatura e serviços avulsos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Cliente com plano de assinatura contratado sendo cobrado como avulso, ou pior — serviço feito e ninguém cobrou. Controlar assinantes na planilha vira confusão. No Groom, cada cliente tem seu perfil organizado com plano, validade e serviços separados automaticamente.</p>
    </div>
  );
}

function PainCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[304px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[384px]" data-name="pain-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="help-circle">
          <path d={svgPaths.p26add900} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <HelpCircle />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Seu barbeiro chegou e não sabia a agenda do dia?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-80 relative shrink-0 text-[14px] w-full">Profissional perdido perguntando quem é o próximo, cliente esperando sem necessidade, horários trocados. No Groom, cada profissional vê sua agenda em tempo real no celular.</p>
    </div>
  );
}

function PainCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[283px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[384px]" data-name="pain-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)]" />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-bar">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-bar">
          <g id="Rectangle">
            <mask fill="white" id="path-1-inside-1_0_18">
              <rect height="8" rx="1" width="4" x="3" y="14" />
            </mask>
            <rect height="8" mask="url(#path-1-inside-1_0_18)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="3" y="14" />
          </g>
          <g id="Rectangle_2">
            <mask fill="white" id="path-2-inside-2_0_18">
              <rect height="14" rx="1" width="4" x="10" y="8" />
            </mask>
            <rect height="14" mask="url(#path-2-inside-2_0_18)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="10" y="8" />
          </g>
          <g id="Rectangle_3">
            <mask fill="white" id="path-3-inside-3_0_18">
              <rect height="10" rx="1" width="4" x="17" y="12" />
            </mask>
            <rect height="10" mask="url(#path-3-inside-3_0_18)" rx="1" stroke="#0D6EFD" strokeWidth="4" width="4" x="17" y="12" />
          </g>
          <line id="Line" stroke="#0D6EFD" strokeWidth="2" x1="2" x2="22" y1="21" y2="21" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <ChartBar />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Terça-feira vazia e você nem percebeu o padrão?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] w-full">Você tem dias e horários mortos e não faz nada a respeito. O Groom identifica esses buracos na agenda e sugere promoções relâmpago com valores calculados para valer a pena — pronto para você anunciar nas redes sociais.</p>
    </div>
  );
}

function PainCard4() {
  return (
    <div className="border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[20px] h-[283px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)] shrink-0 w-[384px]" data-name="pain-card">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function UserClock() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-clock">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="user-clock">
          <circle cx="9" cy="6" id="Ellipse" r="3" stroke="#0D6EFD" strokeWidth="2" />
          <path d={svgPaths.p12fd63e0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
          <circle cx="18" cy="18" id="Ellipse_2" r="3" stroke="#0D6EFD" strokeWidth="2" />
          <line id="Line" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" x1="19" x2="19" y1="19" y2="20" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <UserClock />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(13,110,253,0.06)] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer7 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 text-[#0f172a] w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] w-full">Cliente sumiu e você nem notou?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] w-full">Ele vinha todo mês, parou de aparecer e você só percebeu semanas depois. O Groom monitora a frequência de cada cliente e avisa você quando ele passa do tempo normal sem voltar — para que você decida se quer enviar uma mensagem personalizada, além de promoções automáticas em aniversários.</p>
    </div>
  );
}

function PainCard5() {
  return (
    <div className="border border-[#e2e8f0] border-solid content-stretch flex flex-col gap-[20px] h-[283px] items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)] shrink-0 w-[384px]" data-name="pain-card">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function PainGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] h-[611px] items-start relative shrink-0 w-full" data-name="pain-grid">
      <PainCard />
      <PainCard1 />
      <PainCard2 />
      <PainCard3 />
      <PainCard4 />
      <PainCard5 />
    </div>
  );
}

function SectionPainSolution() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[64px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-pain-solution">
      <Frame5 />
      <PainGrid />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">SIMPLICIDADE MÁXIMA</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge2 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-[36px] text-center w-[min-content]">Como o Groom Funciona</p>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="globe">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="globe">
          <path d={svgPaths.p163a41e0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <Globe />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f1c75c] text-[32px] whitespace-nowrap">01</p>
      <IconContainer8 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Cliente agenda em segundos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Seu cliente acessa o link exclusivo da sua barbearia ou manda uma mensagem direto no WhatsApp do estabelecimento. Escolhe o profissional, o serviço e o horário disponível — tudo rápido e sem complicação.</p>
    </div>
  );
}

function StepCard() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="step-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="phone">
          <path d={svgPaths.p28682900} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <Phone />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f1c75c] text-[32px] whitespace-nowrap">02</p>
      <IconContainer9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">WhatsApp notifica</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">O profissional recebe uma notificação instantânea no WhatsApp com opções rápidas para confirmar ou recusar. O cliente é notificado na hora com a resposta e todos os detalhes do agendamento.</p>
    </div>
  );
}

function StepCard1() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="step-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="bell">
          <path d={svgPaths.p23bc3600} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <Bell />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f1c75c] text-[32px] whitespace-nowrap">03</p>
      <IconContainer10 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Lembretes automáticos</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">O sistema dispara lembretes de confirmação 1 dia antes e 4 horas antes do agendamento. Reduza faltas e cancelamentos de última hora em até 80%.</p>
    </div>
  );
}

function StepCard2() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="step-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bar-chart">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="bar-chart">
          <path d={svgPaths.p26837680} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <BarChart />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f1c75c] text-[32px] whitespace-nowrap">04</p>
      <IconContainer11 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Você domina o painel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Faturamento, ocupação, planos ativos, ranking da equipe e muito mais. Conte com análise preditiva, simulações de cenários — como mais clientes, valores diferentes — e dados completos para tomar decisões com segurança.</p>
    </div>
  );
}

function StepCard3() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px] self-stretch" data-name="step-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function TimelineRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="timeline-row">
      <StepCard />
      <StepCard1 />
      <StepCard2 />
      <StepCard3 />
    </div>
  );
}

function SectionHowItWorks() {
  return (
    <div className="bg-[#1a2233] content-stretch flex flex-col gap-[64px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-how-it-works">
      <Frame18 />
      <TimelineRow />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">RECURSOS COMPLETOS</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge3 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-[36px] text-center w-[min-content]">Tudo que você precisa em uma única plataforma</p>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer12 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">WhatsApp Integrado</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame29 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Robô automatizado que realiza o agendamento, confirmação e envia lembrete amigável.</p>
    </div>
  );
}

function CheckCircle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer13 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Agendamento Online 24h</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame30 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Cada estabelecimento tem seu link público para o cliente agendar sozinho a qualquer hora.</p>
    </div>
  );
}

function CheckCircle2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle2 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer14 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Dashboard Inteligente</p>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame31 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Faturamento consolidado, ocupação, gestão de assinaturas recorrentes e ticket médio atualizado.</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
    </div>
  );
}

function CheckCircle3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer15 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Clube de Assinaturas (MRR)</p>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame33 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Crie planos mensais ou semanais de recorrência e garanta estabilidade no seu faturamento.</p>
    </div>
  );
}

function CheckCircle4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle4 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer16 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Relatórios e Simulador</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame34 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Projeções de crescimento para o próximo semestre e relatórios detalhados de desempenho.</p>
    </div>
  );
}

function CheckCircle5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle5 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer17 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Gestão de Equipe</p>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame35 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Controle individual de horários, serviços prestados, comissões e níveis de acesso ao sistema.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FeatureCard3 />
      <FeatureCard4 />
      <FeatureCard5 />
    </div>
  );
}

function CheckCircle6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle6 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer18 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Catálogo de Serviços</p>
    </div>
  );
}

function FeatureCard6() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame37 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Apresente um catálogo digital elegante dos seus serviços, pacotes e tratamentos.</p>
    </div>
  );
}

function CheckCircle7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle7 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer19 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Importação Tua Agenda</p>
    </div>
  );
}

function FeatureCard7() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame38 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Importe sua base de clientes do Tua Agenda em poucos cliques. Precisa migrar outros dados? Entre em contato com a gente e negociamos a melhor solução.</p>
    </div>
  );
}

function CheckCircle8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle8 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer20 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Suporte Ultra Rápido</p>
    </div>
  );
}

function FeatureCard8() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame39 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Atendimento humanizado direto no WhatsApp. Nossa equipe técnica responde em poucos minutos com atenção real ao seu problema.</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FeatureCard6 />
      <FeatureCard7 />
      <FeatureCard8 />
    </div>
  );
}

function CheckCircle9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle9 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer21 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Feriados e Bloqueios</p>
    </div>
  );
}

function FeatureCard9() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame41 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Importe todos os feriados do ano em um clique. Configure folgas da equipe e bloqueios de agenda sem risco de agendar em dia fechado.</p>
    </div>
  );
}

function CheckCircle10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle10 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer22 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Tema Claro/Escuro</p>
    </div>
  );
}

function FeatureCard10() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame42 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Adapte o visual do seu painel administrativo como preferir com elegância premium.</p>
    </div>
  );
}

function CheckCircle11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_14)" id="check-circle">
          <path d={svgPaths.p14571d48} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CheckCircle11 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <IconContainer23 />
      <p className="[word-break:break-word] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">Multi-idioma nativo</p>
    </div>
  );
}

function FeatureCard11() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="feature-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame43 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-[min-content]">Suporte nativo e completo para clientes em português, inglês e espanhol.</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FeatureCard9 />
      <FeatureCard10 />
      <FeatureCard11 />
    </div>
  );
}

function FeaturesGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="features-grid">
      <Frame28 />
      <Frame32 />
      <Frame36 />
      <Frame40 />
    </div>
  );
}

function Zap() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="zap">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="zap">
          <path d={svgPaths.p13053670} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <Zap />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[rgba(241,199,92,0.13)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Frame">
      <IconContainer24 />
    </div>
  );
}

function FeatureHighlightBanner() {
  return (
    <div className="bg-[#161b22] content-stretch flex gap-[20px] items-center p-[32px] relative rounded-[12px] shrink-0 w-full" data-name="feature-highlight-banner">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame44 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-px not-italic relative text-[#f8fafc] text-[15px]">Enquanto outros sistemas resolvem um pedaço do problema, o Groom entrega a solução completa. Agendamento, WhatsApp, assinaturas, dados e gestão — tudo no mesmo lugar.</p>
    </div>
  );
}

function SectionFeatures() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[56px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-features">
      <Frame27 />
      <FeaturesGrid />
      <FeatureHighlightBanner />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">POR QUE MIGRAR PARA O GROOM?</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge4 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-[36px] text-center w-[min-content]">A melhor escolha operacional e financeira para sua barbearia</p>
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer25 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Previsibilidade de Caixa</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">O clube de assinaturas recorrentes transforma clientes esporádicos em receita fixa mensal garantida.</p>
    </div>
  );
}

function BenefitCard() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function ShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer26 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Redução Extrema de No-shows</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Lembretes automatizados via robô de WhatsApp reduzem esquecimentos e furos de agenda em até 80%.</p>
    </div>
  );
}

function BenefitCard1() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <BenefitCard />
      <BenefitCard1 />
    </div>
  );
}

function ShieldCheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck2 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer27 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Funcionamento Sem Interrupções</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Seu cliente pode agendar um horário no domingo à noite ou feriados, sem precisar ligar ou esperar atendimento.</p>
    </div>
  );
}

function BenefitCard2() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function ShieldCheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer28 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Gestão Unificada de Verdade</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Controle de profissionais, comissão, fluxo de caixa diário e controle de insumos. Uma central de controle única.</p>
    </div>
  );
}

function BenefitCard3() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <BenefitCard2 />
      <BenefitCard3 />
    </div>
  );
}

function ShieldCheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck4 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer29 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Pronto para Crescer seu Negócio</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Suporte multi-unidade nativo. Gerencie uma rede inteira ou franquias a partir de um único perfil mestre.</p>
    </div>
  );
}

function BenefitCard4() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function ShieldCheck5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ShieldCheck5 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[rgba(241,199,92,0.06)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Frame">
      <IconContainer30 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f8fafc] text-[18px] w-full">Facilidade de Pagamento Pix/Cartão</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#cbd5e1] text-[14px] w-full">Aceite pagamentos na reserva com as principais bandeiras ou PIX direto. Sem burocracias ou intermediários caros.</p>
    </div>
  );
}

function BenefitCard5() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_50px] gap-[20px] items-start min-w-px p-[24px] relative rounded-[12px] self-stretch" data-name="benefit-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <BenefitCard4 />
      <BenefitCard5 />
    </div>
  );
}

function BenefitsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="benefits-grid">
      <Frame46 />
      <Frame51 />
      <Frame56 />
    </div>
  );
}

function SectionBenefits() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col gap-[64px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-benefits">
      <Frame45 />
      <BenefitsGrid />
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">TABELA DE INVESTIMENTO</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge5 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-[36px] text-center w-[min-content]">Teste grátis por 15 dias. Depois, condições imperdíveis.</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold not-italic relative shrink-0 text-[#94a3b8] text-[14px] uppercase">EXPERIMENTAÇÃO</p>
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[24px]">Plano Grátis</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[40px]">R$ 0</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[14px]">/ 15 dias</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer31 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Agendamento Online</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check1 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer32 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Dashboard Básico</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check2 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer33 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Notificações WhatsApp</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check3 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer34 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Suporte Completo</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-start justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[14px] whitespace-nowrap">COMEÇAR GRÁTIS</p>
    </div>
  );
}

function PlanCard() {
  return (
    <div className="content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]" data-name="plan-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame62 />
      <Frame63 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic opacity-80 relative shrink-0 text-[#0f172a] text-[13px] w-[min-content]">Acesso completo a todas as funções para você validar como o Groom revoluciona seu negócio.</p>
      <Frame64 />
      <Frame69 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">MAIS POPULAR</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Badge6 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[11px] whitespace-nowrap">CAMPANHA ATIVA</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#f8fafc] text-[28px]">Oferta Trimestral</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#f1c75c] text-[12px]">Garanta as melhores condições iniciais</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#f1c75c] text-[40px]">R$ 49,90</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#cbd5e1] text-[14px]">/ mês</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through not-italic relative shrink-0 text-[#94a3b8] text-[14px]">De R$ 89,90/mês</p>
      <Frame73 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check4 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer35 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">Profissionais Ilimitados</p>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check5 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer36 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">Clube de Assinaturas MRR</p>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check6 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer37 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">WhatsApp Bot Avançado</p>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check7 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer38 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">Importador de dados em 1 clique</p>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check8 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer39 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#f8fafc] text-[13px] whitespace-nowrap">Suporte prioritário 24/7</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame75 />
      <Frame76 />
      <Frame77 />
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex items-start justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">QUERO ESSA OFERTA</p>
    </div>
  );
}

function PlanCardFeatured() {
  return (
    <div className="bg-[#161b22] content-stretch drop-shadow-[0px_8px_12px_rgba(241,199,92,0.08)] flex flex-[1_0_68px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]" data-name="plan-card-featured">
      <div aria-hidden className="absolute border-2 border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#cbd5e1] text-[13px] w-[min-content]">Valor promocional válido pelos primeiros 3 meses. Depois volta para R$ 89,90/mês sem compromisso.</p>
      <Frame74 />
      <Frame80 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold not-italic relative shrink-0 text-[#94a3b8] text-[14px] uppercase">PLANO MENSAL</p>
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[24px]">Assinatura Padrão</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#0f172a] text-[40px]">R$ 89,90</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[14px]">/ mês</p>
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check9 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer40 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Todas as funcionalidades</p>
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check10 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer41 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Clientes ilimitados</p>
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check11 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer42 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Atualizações inclusas</p>
    </div>
  );
}

function Check12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <Check12 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <IconContainer43 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Cancele quando desejar</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame84 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-start justify-center py-[14px] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#0f172a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">ASSINAR AGORA</p>
    </div>
  );
}

function PlanCard1() {
  return (
    <div className="content-stretch flex flex-[1_0_66px] flex-col gap-[24px] items-start min-w-px p-[32px] relative rounded-[12px]" data-name="plan-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame81 />
      <Frame82 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic opacity-80 relative shrink-0 text-[#0f172a] text-[13px] w-[min-content]">Todo o poder do Groom sem contratos de fidelização ou taxas adicionais de instalação.</p>
      <Frame83 />
      <Frame88 />
    </div>
  );
}

function PlansRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full" data-name="plans-row">
      <PlanCard />
      <PlanCardFeatured />
      <PlanCard1 />
    </div>
  );
}

function SectionPricing() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[64px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-pricing">
      <Frame61 />
      <PlansRow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] text-center w-full">🔒 Sem taxa de setup. Cancele quando quiser. Seus dados estão 100% protegidos com criptografia de ponta a ponta.</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">CASOS DE SUCESSO REAL</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge7 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-[36px] text-center w-[min-content]">Histórias de quem impulsionou o negócio com o Groom</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">M</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#f8fafc] text-[14px]">Michel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#f1c75c] text-[12px]">VERSUSBARBERSHOP</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_82px] flex-col gap-[24px] items-start min-w-px p-[40px] relative rounded-[12px]" data-name="testimonial-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none relative shrink-0 text-[#f1c75c] text-[72px] whitespace-nowrap">“</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[min-content]">O Groom transformou minha barbearia. Antes eu perdia cliente todo dia controlando tudo no papel e se esquecendo de responder no Whats. Hoje tenho agenda cheia, assinantes recorrentes e faturamento previsível todo mês.</p>
      <Frame91 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">D</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#f8fafc] text-[14px]">Diretoria</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#f1c75c] text-[12px]">ATOMICSTUDIO</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-[#161b22] content-stretch flex flex-[1_0_82px] flex-col gap-[24px] items-start min-w-px p-[40px] relative rounded-[12px]" data-name="testimonial-card">
      <div aria-hidden className="absolute border border-[#1f2937] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-none relative shrink-0 text-[#f1c75c] text-[72px] whitespace-nowrap">“</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[min-content]">Migrei do Tua Agenda em apenas 1 clique usando o importador nativo do Groom. Não perdi UM cliente sequer no processo. O bot automatizado no WhatsApp é simplesmente de outro planeta.</p>
      <Frame94 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <TestimonialCard />
      <TestimonialCard1 />
    </div>
  );
}

function SectionTestimonials() {
  return (
    <div className="bg-[#1a2233] content-stretch flex flex-col gap-[64px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-testimonials">
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[rgba(13,110,253,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#0d6efd] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d6efd] text-[12px] uppercase whitespace-nowrap">FAQ</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge8 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#0f172a] text-[36px] text-center w-[min-content]">Perguntas Frequentes</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">Preciso de cartão de crédito para testar?</p>
      <IconContainer44 />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame100 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Não. Oferecemos 15 dias totalmente grátis para você testar sem precisar cadastrar cartão ou qualquer compromisso financeiro inicial.</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown1 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">E se eu já uso o Tua Agenda?</p>
      <IconContainer45 />
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame101 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Nós resolvemos isso para você. Temos uma ferramenta de migração nativa onde importamos clientes, histórico de serviços e todos os agendamentos anteriores com 1 clique.</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FaqItem />
      <FaqItem1 />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown2 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">Funciona para iPhone e Android?</p>
      <IconContainer46 />
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame103 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Sim. O Groom é uma plataforma SaaS 100% responsiva de última geração. Funciona perfeitamente em qualquer smartphone ou desktop.</p>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown3 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">Precisa instalar algum aplicativo?</p>
      <IconContainer47 />
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame104 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Nenhuma instalação é necessária. Tudo roda na nuvem direto do navegador e integrado ao seu WhatsApp corporativo. Setup completo em apenas 5 minutos.</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FaqItem2 />
      <FaqItem3 />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer48() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown4 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">Tem suporte para me ajudar?</p>
      <IconContainer48 />
    </div>
  );
}

function FaqItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame106 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Claro! Nosso time atende diretamente via WhatsApp de verdade. Sem respostas automáticas padrão, atendimento feito por pessoas prontas para te ajudar.</p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chevron-down">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="#0D6EFD" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-container">
      <ChevronDown5 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#0f172a] text-[16px]">Posso cancelar quando quiser?</p>
      <IconContainer49 />
    </div>
  );
}

function FaqItem5() {
  return (
    <div className="content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[12px]" data-name="faq-item">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame107 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic opacity-70 relative shrink-0 text-[#0f172a] text-[14px] w-full">Sim. Sem contratos ou multas. Você pode exportar seus dados a qualquer momento e solicitar o cancelamento da sua assinatura com 1 clique.</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <FaqItem4 />
      <FaqItem5 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame99 />
      <Frame102 />
      <Frame105 />
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[56px] items-center px-[120px] py-[96px] relative shrink-0 w-full" data-name="section-faq">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[rgba(241,199,92,0.08)] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[100px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border border-[#f1c75c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#f1c75c] text-[12px] uppercase whitespace-nowrap">APROVEITE A OPORTUNIDADE</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <Badge9 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#f8fafc] text-[40px] text-center w-[min-content]">Pronto para profissionalizar seu negócio?</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="arrow-right">
          <path d={svgPaths.p2df9a900} id="Vector" stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <ArrowRight1 />
    </div>
  );
}

function CtaButtonLarge() {
  return (
    <div className="bg-[#f1c75c] content-stretch flex gap-[12px] items-center px-[48px] py-[20px] relative rounded-[8px] shrink-0" data-name="cta-button-large">
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[16px] whitespace-nowrap">COMEÇAR GRÁTIS POR 15 DIAS</p>
      <IconContainer50 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#cbd5e1] text-[13px]">⚡ Sem cartão de crédito. Setup em 5 minutos. Cancele quando quiser.</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#f1c75c] text-[12px]">Oferta promocional por tempo limitado — 3 meses de Groom por apenas R$ 49,90/mês.</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Frame">
      <CtaButtonLarge />
      <Frame110 />
    </div>
  );
}

function SectionFinalCta() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col gap-[40px] items-center px-[120px] py-[100px] relative shrink-0 w-full" data-name="section-final-cta">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Scissors1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="scissors">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="scissors">
          <path d={svgPaths.p377ff800} id="Vector" stroke="#F1C75C" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-container">
      <Scissors1 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIconContainer} />
      <IconContainer51 />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[20px] whitespace-nowrap">Groom</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[360px]" data-name="Frame">
      <Frame112 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[13px] w-[min-content]">O Groom é a plataforma inteligente líder em automatizar e gerenciar as maiores barbearias e salões do Brasil. Menos tempo na papelada, mais tempo faturando.</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[min-content]">© 2026 Groom — Todos os direitos reservados.</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#f8fafc] text-[14px]">Navegação</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Funcionalidades</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Preços</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Suporte</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Blog Oficial</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#f8fafc] text-[14px]">Desenvolvimento</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px]">Feito por TechMinds Group</p>
      <a className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f1c75c] text-[13px]" href="https://portal.techminds.net.br" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">portal.techminds.net.br</p>
      </a>
    </div>
  );
}

function Frame113() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-top">
      <Frame111 />
      <Frame113 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Termos de Uso</p>
      <p className="relative shrink-0">Privacidade</p>
    </div>
  );
}

function FooterCredit() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[24px] relative shrink-0 w-full" data-name="footer-credit">
      <div aria-hidden className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Groom Gestão e Tecnologia S.A. CNPJ 12.345.678/0001-99</p>
      <Frame116 />
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col gap-[48px] items-start pb-[48px] pt-[64px] px-[120px] relative shrink-0 w-full" data-name="section-footer">
      <div aria-hidden className="absolute border-[#1f2937] border-solid border-t inset-0 pointer-events-none" />
      <FooterTop />
      <FooterCredit />
    </div>
  );
}

function WhatsappIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="whatsapp-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 24 20" width="24">
        <g id="whatsapp-icon">
          <path d={svgPaths.p16656200} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FloatingWhatsappCta() {
  return (
    <div className="absolute bg-[#22c55e] bottom-[32px] content-stretch flex gap-[10px] items-center justify-center overflow-clip pl-[20px] pr-[24px] py-[14px] right-[32px] rounded-[50px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)]" data-name="floating-whatsapp-cta">
      <WhatsappIcon />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Fale conosco e teste grátis</p>
    </div>
  );
}

export default function GroomLandingPage() {
  return (
    <div className="bg-[#0b0f1a] content-stretch flex flex-col items-start relative size-full" data-name="groom-landing-page">
      <SectionHero />
      <SectionPainSolution />
      <SectionHowItWorks />
      <SectionFeatures />
      <SectionBenefits />
      <SectionPricing />
      <SectionTestimonials />
      <SectionFaq />
      <SectionFinalCta />
      <SectionFooter />
      <FloatingWhatsappCta />
    </div>
  );
}