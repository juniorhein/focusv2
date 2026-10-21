import type { IconType } from "react-icons";
import {
  RiCloudLine,
  RiLineChartLine,
  RiTimeLine,
  RiShieldCheckLine,
  RiFireLine,
  RiEyeLine,
  RiNodeTree,
  RiStackLine,
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
  RiGitMergeLine,
  RiDashboardLine,
  RiFileList3Line,
  RiNotification3Line,
  RiCustomerService2Line,
  RiToolsLine,
  RiComputerLine,
  RiBugLine,
  RiUserSettingsLine,
  RiGlobalLine,
  RiRouterLine,
  RiLockLine,
} from "react-icons/ri";

export type Servico = {
  slug: string;
  nome: string;
  icon: IconType;
  /** Linha curta do card da home e da /solucoes */
  resumo: string;
  /** Título grande do hero da página do serviço */
  titulo: string;
  destaque: string;
  intro: string;
  tags: string[];
  entregas: { icon: IconType; titulo: string; desc: string }[];
  etapas: { titulo: string; desc: string }[];
  ganhos: string[];
};

export const servicos: Servico[] = [
  {
    slug: "cybervision",
    nome: "CyberVision",
    icon: RiLockLine,
    resumo:
      "Cofre de credenciais e controle de acessos privilegiados (PAM) para ambientes de TI e OT, com auditoria de cada sessão.",
    titulo: "Acesso privilegiado sob",
    destaque: "controle total",
    intro:
      "Senhas de administrador espalhadas e acessos sem registro são uma porta aberta. Com a CyberVision, uma plataforma de PAM web, centralizamos as credenciais privilegiadas em um cofre, definimos quem acessa cada sistema e registramos cada sessão, em ambientes de TI e industriais.",
    tags: ["PAM", "Cofre de credenciais", "TI e OT", "Auditoria"],
    entregas: [
      {
        icon: RiLockLine,
        titulo: "Cofre de credenciais privilegiadas",
        desc: "Senhas e credenciais administrativas armazenadas e governadas em um só lugar, longe de planilhas e anotações.",
      },
      {
        icon: RiComputerLine,
        titulo: "Sessões de acesso seguras",
        desc: "Acesso via RDP, SSH, VNC, HTTP/HTTPS, Telnet e Kubernetes direto pela web, com rastreabilidade.",
      },
      {
        icon: RiUserSettingsLine,
        titulo: "Segregação por Vault e perfil",
        desc: "Acessos organizados por empresa, Vault, perfil e recurso, aplicando o menor privilégio necessário.",
      },
      {
        icon: RiFileList3Line,
        titulo: "Auditoria e integrações",
        desc: "Registro de eventos e sessões, com integração a SSO, diretórios corporativos e SIEM.",
      },
    ],
    etapas: [
      { titulo: "Diagnóstico", desc: "Levantamos sistemas críticos, credenciais administrativas e quem precisa de acesso." },
      { titulo: "Implantação", desc: "Configuramos a plataforma, o cofre e as integrações com o seu ambiente." },
      { titulo: "Políticas de acesso", desc: "Organizamos Vaults, perfis e permissões por recurso." },
      { titulo: "Acompanhamento", desc: "Acompanhamos o uso, os registros de auditoria e os ajustes de acesso." },
    ],
    ganhos: [
      "Credenciais administrativas fora de planilhas e anotações",
      "Cada acesso privilegiado com contexto, escopo e registro",
      "Evidências prontas para auditoria e compliance",
      "Mesmo controle para ambientes de TI e industriais",
    ],
  },
  {
    slug: "multi-cloud",
    nome: "Multi-cloud",
    icon: RiCloudLine,
    resumo:
      "Azure, AWS e Oracle Cloud trabalhando juntas, com cada carga de trabalho na nuvem que faz mais sentido.",
    titulo: "O melhor de cada nuvem,",
    destaque: "em um só ambiente",
    intro:
      "Combinamos Azure, AWS e Oracle Cloud de forma integrada, com governança centralizada e sem dependência de um único fornecedor. Da arquitetura à operação, sua empresa ganha liberdade para escolher onde cada sistema roda.",
    tags: ["Azure", "AWS", "Oracle Cloud", "Kubernetes"],
    entregas: [
      {
        icon: RiStackLine,
        titulo: "Arquitetura multi-cloud",
        desc: "Desenho do ambiente distribuindo cada carga de trabalho na nuvem mais adequada.",
      },
      {
        icon: RiGitMergeLine,
        titulo: "Integração entre nuvens",
        desc: "Rede, identidade e dados conectados entre os provedores de forma segura.",
      },
      {
        icon: RiNodeTree,
        titulo: "Kubernetes e containers",
        desc: "Aplicações portáteis, que escalam e rodam em qualquer nuvem.",
      },
      {
        icon: RiMoneyDollarCircleLine,
        titulo: "Governança e custos",
        desc: "Políticas, acessos e consumo acompanhados em um só lugar.",
      },
    ],
    etapas: [
      { titulo: "Diagnóstico", desc: "Levantamos sistemas, custos e requisitos do ambiente atual." },
      { titulo: "Arquitetura", desc: "Definimos o que vai para cada nuvem e como tudo se conecta." },
      { titulo: "Migração", desc: "Movemos as cargas com planejamento e mínimo impacto." },
      { titulo: "Operação", desc: "Gerimos, monitoramos e otimizamos o ambiente no dia a dia." },
    ],
    ganhos: [
      "Sem dependência de um único fornecedor",
      "Custo equilibrado entre as nuvens",
      "Mais resiliência para os sistemas críticos",
      "Um só parceiro para Azure, AWS e Oracle Cloud",
    ],
  },
  {
    slug: "observabilidade",
    nome: "Observabilidade",
    icon: RiLineChartLine,
    resumo:
      "Métricas, logs e alertas reunidos em painéis claros, para entender o ambiente e agir antes do usuário perceber.",
    titulo: "Saiba o que acontece no seu ambiente",
    destaque: "antes de virar problema",
    intro:
      "Reunimos métricas, logs e eventos de servidores, aplicações, redes e nuvens em painéis que mostram a saúde do ambiente em tempo real. Assim a equipe encontra a causa de uma falha mais rápido e decide com base em dados.",
    tags: ["Métricas", "Logs", "Dashboards", "Alertas"],
    entregas: [
      {
        icon: RiDashboardLine,
        titulo: "Painéis sob medida",
        desc: "Dashboards com os indicadores que importam para TI e para a gestão.",
      },
      {
        icon: RiFileList3Line,
        titulo: "Centralização de logs",
        desc: "Registros de sistemas e aplicações reunidos e fáceis de pesquisar.",
      },
      {
        icon: RiNotification3Line,
        titulo: "Alertas inteligentes",
        desc: "Avisos configurados por criticidade, sem excesso de ruído.",
      },
      {
        icon: RiBarChartBoxLine,
        titulo: "Análise de desempenho",
        desc: "Gargalos e tendências identificados para planejar capacidade e custos.",
      },
    ],
    etapas: [
      { titulo: "Diagnóstico", desc: "Mapeamos sistemas, fontes de dados e indicadores críticos." },
      { titulo: "Coleta", desc: "Conectamos servidores, aplicações, redes e nuvens." },
      { titulo: "Painéis e alertas", desc: "Montamos as visões e as regras de alerta do seu negócio." },
      { titulo: "Evolução", desc: "Ajustamos limites e painéis conforme o ambiente muda." },
    ],
    ganhos: [
      "Falhas encontradas e resolvidas mais rápido",
      "Visão única de ambientes locais e em nuvem",
      "Decisões de capacidade e custo baseadas em dados",
      "Menos surpresas para quem usa os sistemas",
    ],
  },
  {
    slug: "noc-24-7",
    nome: "NOC 24/7",
    icon: RiTimeLine,
    resumo:
      "Monitoramento contínuo da sua infraestrutura, dia e noite, com resposta rápida a qualquer incidente.",
    titulo: "Sua infraestrutura acompanhada",
    destaque: "24 horas por dia",
    intro:
      "Nosso centro de operações de rede acompanha servidores, links, equipamentos e ambientes em nuvem o tempo todo. Quando algo sai do normal, a equipe age — e sua empresa fica sabendo do que aconteceu e do que foi feito.",
    tags: ["Monitoramento", "Incidentes", "Relatórios"],
    entregas: [
      {
        icon: RiEyeLine,
        titulo: "Monitoramento contínuo",
        desc: "Servidores, links, ativos de rede e nuvem acompanhados 24/7.",
      },
      {
        icon: RiCustomerService2Line,
        titulo: "Tratamento de incidentes",
        desc: "Equipe técnica que identifica, atua e escala cada ocorrência.",
      },
      {
        icon: RiToolsLine,
        titulo: "Ações preventivas",
        desc: "Sinais de risco tratados antes de causar indisponibilidade.",
      },
      {
        icon: RiFileList3Line,
        titulo: "Relatórios periódicos",
        desc: "Disponibilidade, ocorrências e recomendações em linguagem clara.",
      },
    ],
    etapas: [
      { titulo: "Levantamento", desc: "Mapeamos ativos, serviços críticos e contatos de escalonamento." },
      { titulo: "Integração", desc: "Conectamos o ambiente ao nosso monitoramento." },
      { titulo: "Operação 24/7", desc: "Acompanhamos e respondemos a eventos dia e noite." },
      { titulo: "Revisão", desc: "Reportamos o período e propomos melhorias." },
    ],
    ganhos: [
      "Menos tempo de sistema fora do ar",
      "Problemas resolvidos fora do horário comercial",
      "Equipe interna livre para projetos estratégicos",
      "Histórico claro de tudo o que aconteceu no ambiente",
    ],
  },
  {
    slug: "bitdefender",
    nome: "Bitdefender",
    icon: RiShieldCheckLine,
    resumo:
      "Proteção de computadores e servidores contra vírus, ransomware e ataques, com gestão centralizada.",
    titulo: "Proteção completa para",
    destaque: "computadores e servidores",
    intro:
      "Implantamos e gerenciamos as soluções de segurança da Bitdefender para proteger estações de trabalho, servidores e ambientes em nuvem contra malware, ransomware e ataques direcionados — tudo controlado a partir de um único console.",
    tags: ["Endpoint", "Antiransomware", "EDR"],
    entregas: [
      {
        icon: RiComputerLine,
        titulo: "Proteção de endpoints",
        desc: "Antivírus e antimalware em estações, notebooks e servidores.",
      },
      {
        icon: RiBugLine,
        titulo: "Detecção e resposta",
        desc: "Identificação de ataques avançados e contenção das máquinas afetadas.",
      },
      {
        icon: RiCloudLine,
        titulo: "Segurança para nuvem",
        desc: "Cargas de trabalho em Azure, AWS e Oracle Cloud também protegidas.",
      },
      {
        icon: RiUserSettingsLine,
        titulo: "Gestão centralizada",
        desc: "Políticas, atualizações e relatórios administrados pela nossa equipe.",
      },
    ],
    etapas: [
      { titulo: "Diagnóstico", desc: "Avaliamos o parque de máquinas e a proteção atual." },
      { titulo: "Implantação", desc: "Instalamos os agentes e definimos as políticas." },
      { titulo: "Ajuste fino", desc: "Calibramos regras para proteger sem atrapalhar o trabalho." },
      { titulo: "Gestão contínua", desc: "Acompanhamos alertas, atualizações e relatórios." },
    ],
    ganhos: [
      "Proteção contra ransomware e ataques modernos",
      "Todas as máquinas sob a mesma política de segurança",
      "Incidentes contidos antes de se espalhar",
      "Menos trabalho operacional para o time interno",
    ],
  },
  {
    slug: "fortinet",
    nome: "Fortinet",
    icon: RiFireLine,
    resumo:
      "Firewall, VPN e SD-WAN para proteger a rede e conectar matriz, filiais e nuvem com segurança.",
    titulo: "Rede protegida e conectada,",
    destaque: "da matriz à nuvem",
    intro:
      "Implantamos e gerenciamos soluções Fortinet para proteger o perímetro da rede, controlar o acesso à internet e conectar matriz, filiais, usuários remotos e ambientes em nuvem com desempenho e segurança.",
    tags: ["Firewall", "VPN", "SD-WAN"],
    entregas: [
      {
        icon: RiLockLine,
        titulo: "Firewall de nova geração",
        desc: "Controle de tráfego, aplicações e ameaças na borda da rede.",
      },
      {
        icon: RiGlobalLine,
        titulo: "VPN e acesso remoto",
        desc: "Conexão segura para quem trabalha fora do escritório.",
      },
      {
        icon: RiRouterLine,
        titulo: "SD-WAN",
        desc: "Links de filiais e nuvem combinados com mais estabilidade e menor custo.",
      },
      {
        icon: RiFileList3Line,
        titulo: "Gestão e relatórios",
        desc: "Regras, atualizações e visibilidade do uso da rede sob gestão da nossa equipe.",
      },
    ],
    etapas: [
      { titulo: "Diagnóstico", desc: "Avaliamos a rede, os links e as regras de segurança atuais." },
      { titulo: "Projeto", desc: "Desenhamos a topologia e as políticas de acesso." },
      { titulo: "Implantação", desc: "Configuramos os equipamentos com mínima interrupção." },
      { titulo: "Gestão contínua", desc: "Mantemos regras, firmware e monitoramento em dia." },
    ],
    ganhos: [
      "Rede protegida contra acessos e ameaças externas",
      "Filiais e nuvem conectadas com mais estabilidade",
      "Trabalho remoto com segurança",
      "Uma equipe responsável pela rede de ponta a ponta",
    ],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
