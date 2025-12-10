// Script to add remaining mic translations to pt, de, fr, hi
// This adds all the detailed translation keys that are already in en.json and es.json

const fs = require('fs');
const path = require('path');

const translations = {
  pt: {
    "mic_step_1_title": "Conceder Permissões de Microfone",
    "mic_step_1_text": "Quando você visitar nossa página de teste de microfone, seu navegador pedirá acesso ao microfone. Clique em \"Permitir\" para continuar. Se você não vir uma solicitação, procure um ícone de microfone na barra de endereços do seu navegador.",
    "mic_step_2_title": "Verificar o Medidor de Volume",
    "mic_step_2_text": "Uma vez que as permissões sejam concedidas, fale no seu microfone. Você deve ver o medidor de volume responder com barras verdes, amarelas ou vermelhas indicando seu nível de entrada. Verde/amarelo é ideal; vermelho significa que você está muito alto.",
    "mic_step_3_title": "Gravar um Clip de Teste",
    "mic_step_3_text": "Clique no botão do microfone para gravar um teste de 5 segundos. Diga \"Testando 1, 2, 3\" ou conte em voz alta. A gravação parará automaticamente após 5 segundos.",
    "mic_step_4_title": "Reproduzir Sua Gravação",
    "mic_step_4_text": "Após gravar, clique em reproduzir para ouvir como você soa. Isso ajuda a identificar problemas como eco, distorção, ruído de fundo ou volume baixo.",
    "mic_step_5_title": "Testar Seus Alto-falantes",
    "mic_step_5_text": "Use os botões de teste de alto-falantes (Esquerdo, Direito, Varredura) para verificar se seu dispositivo de saída funciona corretamente e está configurado para áudio estéreo.",
    "mic_not_working_1": "Verificar Permissões do Navegador: Clique no ícone de cadeado na barra de endereços do seu navegador e certifique-se de que \"Microfone\" está definido como \"Permitir\". No Chrome, vá para Configurações → Privacidade e Segurança → Configurações do Site → Microfone.",
    "mic_not_working_2": "Verificar Interruptor de Mudo Físico: Muitos fones de ouvido e laptops têm botões ou interruptores de mudo físicos. Certifique-se de que seu microfone não esteja fisicamente silenciado.",
    "mic_not_working_3": "Verificar Dispositivo de Entrada: No Windows, vá para Configurações → Sistema → Som → Entrada e certifique-se de que o microfone correto está selecionado. No Mac, vá para Preferências do Sistema → Som → Entrada.",
    "mic_not_working_4": "Fechar Outras Aplicações: Apenas um aplicativo pode acessar seu microfone por vez. Feche Zoom, Teams, Discord ou outros aplicativos que usem o microfone, depois atualize esta página.",
    "mic_not_working_5": "Verificar Volume do Sistema: Certifique-se de que seu microfone não esteja silenciado nas configurações do sistema e que o volume de entrada esteja aumentado.",
    "mic_too_quiet_1": "Aumentar o volume de entrada do microfone nas configurações do sistema (Windows: Configurações → Som → Entrada; Mac: Preferências do Sistema → Som → Entrada)",
    "mic_too_quiet_2": "Habilitar o aumento do microfone se disponível (Configurações de Som do Windows)",
    "mic_too_quiet_3": "Aproxime-se mais do microfone ou ajuste o posicionamento",
    "mic_too_quiet_4": "Verifique se seu microfone tem um dial ou interruptor de controle de ganho",
    "mic_too_quiet_5": "Teste com um microfone diferente para descartar problemas de hardware",
    "mic_echo_1": "Retroalimentação de Alto-falantes: Diminua o volume dos alto-falantes ou use fones de ouvido para evitar que o microfone capture a saída dos alto-falantes",
    "mic_echo_2": "Acústica da Sala: Reduza o eco adicionando móveis macios, tapetes ou cortinas à sua sala",
    "mic_echo_3": "Posição do Microfone: Mantenha o microfone longe dos alto-falantes e a uma distância consistente da sua boca",
    "mic_echo_4": "Ruído de Fundo: Feche janelas, desligue ventiladores e minimize fontes de ruído de fundo",
    "mic_echo_5": "Problemas de Drivers: Atualize seus drivers de áudio (Gerenciador de Dispositivos do Windows ou Preferências do Sistema do Mac)",
    "mic_wrong_device_1": "Verifique as configurações de som do sistema para ver qual dispositivo de entrada está ativo",
    "mic_wrong_device_2": "Desconecte e reconecte microfones USB",
    "mic_wrong_device_3": "No Windows, clique com o botão direito no ícone do alto-falante → Abrir Configurações de Som → Escolha seu dispositivo de entrada",
    "mic_wrong_device_4": "No Mac, vá para Preferências do Sistema → Som → Entrada e selecione o dispositivo correto",
    "mic_wrong_device_5": "Alguns navegadores permitem que você escolha o dispositivo de entrada—verifique as configurações do navegador",
    "mic_zoom_title": "Teste de Microfone do Zoom",
    "mic_zoom_text": "Antes de entrar em uma reunião do Zoom, teste seu microfone aqui primeiro. Se nossa ferramenta funcionar, seu microfone funcionará no Zoom. Você também pode testar no Zoom indo para Configurações → Áudio → Testar Alto-falante e Microfone, mas nosso teste do navegador é mais rápido e não requer o aplicativo Zoom.",
    "mic_teams_title": "Teste de Microfone do Microsoft Teams",
    "mic_teams_text": "Os usuários do Teams devem testar seu microfone aqui antes de entrar em reuniões. No Teams, você pode testar indo para Configurações → Dispositivos → Dispositivos de Áudio, mas nosso teste online funciona em qualquer navegador sem instalar o Teams.",
    "mic_meet_title": "Verificação de Microfone do Google Meet",
    "mic_meet_text": "O Google Meet usa o acesso ao microfone do seu navegador. Se nosso teste funcionar, o Meet também funcionará. Você também pode testar no Meet entrando em uma reunião de teste e verificando suas configurações de áudio antes que outros entrem.",
    "mic_levels_title": "Entender os Níveis de Entrada do Microfone",
    "mic_levels_intro": "O medidor de volume mostra o nível de entrada do seu microfone:",
    "mic_levels_green": "Barras Verdes: Nível de entrada ótimo. Sua voz está clara e em um bom volume.",
    "mic_levels_yellow": "Barras Amarelas: Bom nível, mas se aproximando do máximo. Ainda aceitável para a maioria dos casos de uso.",
    "mic_levels_red": "Barras Vermelhas: Muito alto—você está cortando ou distorcendo. Diminua o volume de entrada ou afaste-se mais do microfone.",
    "mic_levels_none": "Sem Atividade: Microfone não detectado, silenciado ou volume muito baixo. Verifique permissões e configurações.",
    "mic_permissions_title": "Guia de Permissões de Microfone do Navegador",
    "mic_permissions_intro": "Cada navegador lida com as permissões do microfone de forma ligeiramente diferente:",
    "mic_permissions_chrome": "Chrome: Clique no ícone de cadeado na barra de endereços → Configurações do Site → Microfone → Permitir. Ou vá para chrome://settings/content/microphone",
    "mic_permissions_firefox": "Firefox: Clique no ícone do microfone na barra de endereços → Permitir. Ou vá para Preferências → Privacidade e Segurança → Permissões → Microfone",
    "mic_permissions_edge": "Edge: Similar ao Chrome. Clique no ícone de cadeado → Permissões → Microfone → Permitir",
    "mic_permissions_safari": "Safari: Safari → Preferências → Sites → Microfone → Permitir para este site",
    "mic_privacy_title": "Privacidade e Segurança",
    "mic_privacy_intro": "Sua privacidade de áudio é fundamental. Nosso teste de microfone:",
    "mic_privacy_1": "Processa todos os dados de áudio localmente no seu navegador",
    "mic_privacy_2": "Não envia áudio para nossos servidores",
    "mic_privacy_3": "Não armazena ou grava sua voz",
    "mic_privacy_4": "Não compartilha dados com terceiros",
    "mic_privacy_5": "Interrompe o acesso ao microfone quando você fecha a página",
    "mic_privacy_footer": "Todo o processamento de áudio acontece em tempo real no seu dispositivo. As gravações são armazenadas temporariamente na memória do seu navegador e são excluídas quando você atualiza ou fecha a página.",
    "mic_troubleshooting_title": "Guias de Solução de Problemas"
  },
  // Add de, fr, hi translations here - for now just adding pt
};

const locales = ['pt', 'de', 'fr', 'hi'];

locales.forEach(locale => {
  const filePath = path.join(__dirname, '..', 'i18n', 'translations', `${locale}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Add translations if they exist for this locale
  if (translations[locale]) {
    Object.assign(content, translations[locale]);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
  console.log(`Updated ${locale}.json`);
});

console.log('Done!');

