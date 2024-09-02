const nodemailer = require("nodemailer");

async function main() {
  // Configuração do transporte com Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail", // Usando o serviço do Gmail
    auth: {
      user: "seu_gmail@gmail.com", // Seu email do Gmail
      pass: "password", // Sua senha do Gmail ou Senha de Aplicativo
    },
  });

  // Envio do email com o objeto de transporte definido
  const info = await transporter.sendMail({
    from: '"😎 Teste" <seu_gmail@gmail.com>', // Endereço do remetente
    to: "email_teste@teste.com", // Lista de destinatários
    subject: "Hello ✔", // Linha de assunto
    text: "Hello world?", // Corpo do email em texto simples
    html: "<b>Hello world?</b>", // Corpo do email em HTML
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
