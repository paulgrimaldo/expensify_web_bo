export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      getApp: 'Get the App',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
    },
    footer: {
      rights: '© 2026 Expensify. All rights reserved.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
    },

    // ── Terms of Service ─────────────────────────────────────────────────
    terms: {
      badge: 'Legal',
      title: 'Terms of Service',
      lastUpdated: 'Last updated: March 28, 2026',
      intro:
        'Welcome to Expensify. By downloading, installing, or using our application, you agree to be bound by these Terms of Service. Please read them carefully before using the app.',

      sections: [
        {
          title: '1. Acceptance of Terms',
          body: `By accessing or using Expensify ("the App"), you confirm that you are at least 16 years of age and have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.\n\nIf you are using the App on behalf of an organization, you represent that you have the authority to bind that organization to these terms.`,
        },
        {
          title: '2. Description of Service',
          body: `Expensify is a personal finance management application that allows users to:\n\n• Log and categorize expenses and income\n• Scan receipts using AI-powered recognition\n• Visualize spending patterns through charts and dashboards\n• Manage multiple currencies and locales\n• Securely store financial data in the cloud\n\nThe App is provided free of charge and is intended for personal, non-commercial use.`,
        },
        {
          title: '3. Account Registration',
          body: `To use Expensify, you must create an account using a valid email address and password. You are responsible for:\n\n• Providing accurate and complete registration information\n• Maintaining the confidentiality of your account credentials\n• All activity that occurs under your account\n• Notifying us immediately of any unauthorized use\n\nWe reserve the right to suspend or terminate accounts that violate these terms.`,
        },
        {
          title: '4. User Data and Content',
          body: `You retain full ownership of all financial data you enter into the App, including expenses, income records, categories, and receipts.\n\nBy using the App, you grant us a limited, non-exclusive license to store, process, and display your data solely for the purpose of providing the service to you.\n\nYou are solely responsible for the accuracy of the data you enter. Expensify is not a financial advisory service and does not verify the correctness of your records.`,
        },
        {
          title: '5. AI Receipt Scanning',
          body: `Our receipt scanning feature uses artificial intelligence to extract text and figures from images. Please note:\n\n• Extracted data may not always be 100% accurate\n• You should always review and confirm scanned data before saving\n• Receipt images are processed securely and not used to train AI models without your explicit consent\n• We are not liable for financial decisions made based on incorrectly scanned data`,
        },
        {
          title: '6. Prohibited Uses',
          body: `You agree not to use the App to:\n\n• Engage in any unlawful activity, including fraud or money laundering\n• Attempt to reverse-engineer, decompile, or modify the App\n• Access the App through automated means (bots, scrapers)\n• Introduce malware, viruses, or other harmful code\n• Violate the rights of other users or third parties\n• Use the App for commercial resale purposes without our written consent`,
        },
        {
          title: '7. Intellectual Property',
          body: `The App, including its design, code, logos, trademarks, and content, is owned by Expensify and protected by applicable intellectual property laws.\n\nYou may not copy, modify, distribute, sell, or lease any part of our App without express written permission.`,
        },
        {
          title: '8. Disclaimers',
          body: `Expensify is provided "as is" without warranties of any kind. We do not guarantee:\n\n• Uninterrupted or error-free service\n• That the App will meet your specific requirements\n• The accuracy of AI-generated data extraction\n\nExpensify is not a substitute for professional financial, tax, or accounting advice.`,
        },
        {
          title: '9. Limitation of Liability',
          body: `To the maximum extent permitted by law, Expensify shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including but not limited to loss of data, financial losses, or business interruption.\n\nOur total liability to you for any claims arising from these terms shall not exceed the amount you paid to use the App in the past 12 months.`,
        },
        {
          title: '10. Changes to Terms',
          body: `We reserve the right to update these Terms of Service at any time. We will notify users of significant changes through the App or via email.\n\nContinued use of the App after changes take effect constitutes acceptance of the revised terms.`,
        },
        {
          title: '11. Governing Law',
          body: `These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation, and if necessary, through binding arbitration in the jurisdiction where Expensify operates.`,
        },
        {
          title: '12. Contact',
          body: `If you have questions about these Terms of Service, please contact us at:\n\nsupport@expensify.app`,
        },
      ],
    },

    // ── Privacy Policy ───────────────────────────────────────────────────
    privacy: {
      badge: 'Legal',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 28, 2026',
      intro:
        'Your privacy is important to us. This Privacy Policy explains what data Expensify collects, how we use it, and your rights regarding your personal information.',

      sections: [
        {
          title: '1. Information We Collect',
          body: `We collect the following types of information:\n\n**Account Information**\n• Email address\n• Encrypted password (never stored in plain text)\n• Display name (optional)\n\n**Financial Data**\n• Expense records (amount, date, category, notes)\n• Income records (amount, date, source)\n• Custom categories and labels\n• Preferred currency and locale settings\n\n**Receipt Images**\n• Photos captured or uploaded for AI scanning\n• Extracted text and amounts from receipts\n\n**Usage Data**\n• App interactions and feature usage (anonymized)\n• Device type and operating system\n• Crash reports and performance data`,
        },
        {
          title: '2. How We Use Your Information',
          body: `We use your information to:\n\n• Provide and maintain the Expensify service\n• Authenticate your identity and secure your account\n• Process receipt images using AI extraction\n• Sync your financial data across devices\n• Send important service notifications\n• Improve the App through anonymized analytics\n• Respond to your support requests\n\nWe do not sell, rent, or share your personal financial data with third parties for marketing purposes.`,
        },
        {
          title: '3. Data Storage and Security',
          body: `Your data is stored securely using Supabase, a trusted cloud database provider with industry-standard security measures.\n\n• All data is encrypted at rest and in transit (TLS/SSL)\n• Passwords are hashed using bcrypt before storage\n• Access to your data is restricted to authenticated sessions only\n• Database access requires row-level security (RLS) policies\n• Regular automated backups are performed\n\nWhile we take reasonable precautions, no system is 100% secure. We encourage you to use a strong, unique password.`,
        },
        {
          title: '4. Receipt Image Processing',
          body: `When you scan a receipt:\n\n• The image is transmitted securely to our AI processing service\n• Text and amounts are extracted and returned to your device\n• Processed images are not stored permanently on our servers after extraction\n• Receipt data is not used to train AI models without your explicit opt-in\n• You can delete any scanned receipt data from within the App at any time`,
        },
        {
          title: '5. Data Sharing',
          body: `We may share your data only in these limited circumstances:\n\n**Service Providers:** We use trusted third-party services (Supabase for database, AI processing APIs) that are contractually bound to protect your data.\n\n**Legal Requirements:** We may disclose information if required by law, court order, or to protect the rights and safety of our users.\n\n**Business Transfer:** In the event of a merger or acquisition, user data may be transferred with appropriate privacy protections.\n\nWe never sell your personal data to advertisers or data brokers.`,
        },
        {
          title: '6. Your Rights',
          body: `You have the following rights regarding your data:\n\n• **Access:** Request a copy of all data we hold about you\n• **Correction:** Update inaccurate personal information at any time within the App\n• **Deletion:** Request complete deletion of your account and all associated data\n• **Portability:** Export your financial data in a standard format\n• **Restriction:** Ask us to stop processing your data in certain circumstances\n\nTo exercise any of these rights, contact us at support@expensify.app.`,
        },
        {
          title: '7. Cookies and Analytics',
          body: `The mobile app does not use browser cookies. We do use:\n\n• **Session tokens** stored locally to keep you logged in\n• **Anonymized analytics** to understand feature usage and improve the app\n• **Crash reporting** to detect and fix bugs faster\n\nAll analytics data is aggregated and cannot be used to identify individual users.`,
        },
        {
          title: '8. Children\'s Privacy',
          body: `Expensify is not directed at children under the age of 16. We do not knowingly collect personal information from children.\n\nIf you believe a child has provided us with personal information, please contact us and we will promptly delete it.`,
        },
        {
          title: '9. International Data Transfers',
          body: `Your data may be stored and processed in servers located outside your home country. By using Expensify, you consent to such transfers.\n\nWe ensure that any international transfers are conducted in compliance with applicable data protection laws and with appropriate safeguards in place.`,
        },
        {
          title: '10. Data Retention',
          body: `We retain your data for as long as your account is active or as needed to provide services.\n\n• Active account data: retained until account deletion\n• Deleted account data: removed within 30 days of deletion request\n• Anonymized usage analytics: retained indefinitely (cannot identify you)\n• Backup copies: purged within 90 days after account deletion`,
        },
        {
          title: '11. Changes to This Policy',
          body: `We may update this Privacy Policy periodically. We will notify you of material changes via in-app notification or email before the changes take effect.\n\nContinued use of the App after the effective date constitutes acceptance of the updated policy.`,
        },
        {
          title: '12. Contact Us',
          body: `For any privacy-related questions or to exercise your rights, contact us at:\n\nsupport@expensify.app\n\nWe aim to respond to all requests within 30 days.`,
        },
      ],
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // ESPAÑOL
  // ════════════════════════════════════════════════════════════════════════
  es: {
    nav: {
      features: 'Funciones',
      howItWorks: 'Cómo funciona',
      getApp: 'Descargar',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
    },
    footer: {
      rights: '© 2026 Expensify. Todos los derechos reservados.',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
    },

    terms: {
      badge: 'Legal',
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 28 de marzo de 2026',
      intro:
        'Bienvenido a Expensify. Al descargar, instalar o utilizar nuestra aplicación, aceptas quedar vinculado por estos Términos de Servicio. Por favor, léelos cuidadosamente antes de usar la app.',

      sections: [
        {
          title: '1. Aceptación de los Términos',
          body: `Al acceder o usar Expensify ("la App"), confirmas que tienes al menos 16 años y que has leído, comprendido y aceptas estar vinculado por estos Términos de Servicio y nuestra Política de Privacidad.\n\nSi utilizas la App en nombre de una organización, representas que tienes autoridad para vincular a esa organización con estos términos.`,
        },
        {
          title: '2. Descripción del Servicio',
          body: `Expensify es una aplicación de gestión de finanzas personales que permite a los usuarios:\n\n• Registrar y categorizar gastos e ingresos\n• Escanear recibos mediante reconocimiento con inteligencia artificial\n• Visualizar patrones de gasto a través de gráficos y tableros de control\n• Gestionar múltiples monedas y configuraciones regionales\n• Almacenar datos financieros de forma segura en la nube\n\nLa App se ofrece de forma gratuita y está destinada a uso personal y no comercial.`,
        },
        {
          title: '3. Registro de Cuenta',
          body: `Para usar Expensify, debes crear una cuenta con un correo electrónico válido y una contraseña. Eres responsable de:\n\n• Proporcionar información de registro precisa y completa\n• Mantener la confidencialidad de tus credenciales\n• Toda actividad que ocurra bajo tu cuenta\n• Notificarnos de inmediato sobre cualquier uso no autorizado\n\nNos reservamos el derecho de suspender o cancelar cuentas que violen estos términos.`,
        },
        {
          title: '4. Datos y Contenido del Usuario',
          body: `Conservas la plena propiedad de todos los datos financieros que ingreses en la App, incluyendo gastos, ingresos, categorías y recibos.\n\nAl usar la App, nos otorgas una licencia limitada y no exclusiva para almacenar, procesar y mostrar tus datos únicamente con el fin de prestarte el servicio.\n\nEres el único responsable de la exactitud de los datos ingresados. Expensify no es un servicio de asesoramiento financiero y no verifica la corrección de tus registros.`,
        },
        {
          title: '5. Escaneo de Recibos con IA',
          body: `Nuestra función de escaneo de recibos utiliza inteligencia artificial para extraer texto y cifras de las imágenes. Ten en cuenta:\n\n• Los datos extraídos pueden no ser siempre 100% precisos\n• Siempre debes revisar y confirmar los datos escaneados antes de guardarlos\n• Las imágenes de recibos se procesan de forma segura y no se utilizan para entrenar modelos de IA sin tu consentimiento explícito\n• No somos responsables de decisiones financieras basadas en datos escaneados incorrectamente`,
        },
        {
          title: '6. Usos Prohibidos',
          body: `Aceptas no utilizar la App para:\n\n• Realizar actividades ilegales, incluido el fraude o lavado de dinero\n• Intentar realizar ingeniería inversa, descompilar o modificar la App\n• Acceder a la App a través de medios automatizados (bots, scrapers)\n• Introducir malware, virus u otro código dañino\n• Violar los derechos de otros usuarios o terceros\n• Utilizar la App con fines de reventa comercial sin nuestro consentimiento por escrito`,
        },
        {
          title: '7. Propiedad Intelectual',
          body: `La App, incluyendo su diseño, código, logos, marcas registradas y contenido, es propiedad de Expensify y está protegida por las leyes de propiedad intelectual aplicables.\n\nNo puedes copiar, modificar, distribuir, vender ni arrendar ninguna parte de nuestra App sin permiso escrito expreso.`,
        },
        {
          title: '8. Exenciones de Responsabilidad',
          body: `Expensify se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos:\n\n• Un servicio ininterrumpido o libre de errores\n• Que la App cumpla con tus requisitos específicos\n• La precisión de los datos extraídos por IA\n\nExpensify no es un sustituto del asesoramiento financiero, fiscal o contable profesional.`,
        },
        {
          title: '9. Limitación de Responsabilidad',
          body: `En la máxima medida permitida por la ley, Expensify no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso de la App, incluyendo pérdida de datos, pérdidas financieras o interrupción del negocio.\n\nNuestra responsabilidad total ante ti por cualquier reclamación derivada de estos términos no excederá el monto que hayas pagado por usar la App en los últimos 12 meses.`,
        },
        {
          title: '10. Cambios en los Términos',
          body: `Nos reservamos el derecho de actualizar estos Términos de Servicio en cualquier momento. Notificaremos a los usuarios sobre cambios significativos a través de la App o por correo electrónico.\n\nEl uso continuado de la App después de que los cambios entren en vigor constituye la aceptación de los términos revisados.`,
        },
        {
          title: '11. Ley Aplicable',
          body: `Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables. Cualquier disputa se resolverá mediante negociación de buena fe y, si es necesario, mediante arbitraje vinculante en la jurisdicción donde opera Expensify.`,
        },
        {
          title: '12. Contacto',
          body: `Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:\n\nsupport@expensify.app`,
        },
      ],
    },

    privacy: {
      badge: 'Legal',
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 28 de marzo de 2026',
      intro:
        'Tu privacidad es importante para nosotros. Esta Política de Privacidad explica qué datos recopila Expensify, cómo los usamos y tus derechos sobre tu información personal.',

      sections: [
        {
          title: '1. Información que Recopilamos',
          body: `Recopilamos los siguientes tipos de información:\n\n**Información de Cuenta**\n• Correo electrónico\n• Contraseña cifrada (nunca almacenada en texto plano)\n• Nombre de usuario (opcional)\n\n**Datos Financieros**\n• Registros de gastos (monto, fecha, categoría, notas)\n• Registros de ingresos (monto, fecha, fuente)\n• Categorías y etiquetas personalizadas\n• Moneda y configuración regional preferidas\n\n**Imágenes de Recibos**\n• Fotos tomadas o subidas para el escaneo con IA\n• Texto y montos extraídos de los recibos\n\n**Datos de Uso**\n• Interacciones con la app y uso de funciones (anonimizados)\n• Tipo de dispositivo y sistema operativo\n• Informes de errores y datos de rendimiento`,
        },
        {
          title: '2. Cómo Usamos tu Información',
          body: `Usamos tu información para:\n\n• Proporcionar y mantener el servicio de Expensify\n• Autenticar tu identidad y proteger tu cuenta\n• Procesar imágenes de recibos mediante extracción con IA\n• Sincronizar tus datos financieros entre dispositivos\n• Enviar notificaciones importantes del servicio\n• Mejorar la App mediante análisis anonimizados\n• Responder a tus solicitudes de soporte\n\nNo vendemos, alquilamos ni compartimos tus datos financieros personales con terceros para fines de marketing.`,
        },
        {
          title: '3. Almacenamiento y Seguridad de Datos',
          body: `Tus datos se almacenan de forma segura utilizando Supabase, un proveedor de base de datos en la nube de confianza con medidas de seguridad estándar de la industria.\n\n• Todos los datos están cifrados en reposo y en tránsito (TLS/SSL)\n• Las contraseñas se hashean con bcrypt antes de almacenarse\n• El acceso a tus datos está restringido a sesiones autenticadas\n• El acceso a la base de datos requiere políticas de seguridad a nivel de fila (RLS)\n• Se realizan copias de seguridad automatizadas de forma regular\n\nAunque tomamos precauciones razonables, ningún sistema es 100% seguro. Te recomendamos usar una contraseña fuerte y única.`,
        },
        {
          title: '4. Procesamiento de Imágenes de Recibos',
          body: `Cuando escaneas un recibo:\n\n• La imagen se transmite de forma segura a nuestro servicio de procesamiento con IA\n• El texto y los montos se extraen y se devuelven a tu dispositivo\n• Las imágenes procesadas no se almacenan permanentemente en nuestros servidores después de la extracción\n• Los datos de recibos no se usan para entrenar modelos de IA sin tu opt-in explícito\n• Puedes eliminar cualquier dato de recibo escaneado desde dentro de la App en cualquier momento`,
        },
        {
          title: '5. Compartición de Datos',
          body: `Solo podemos compartir tus datos en estas circunstancias limitadas:\n\n**Proveedores de Servicio:** Utilizamos servicios de terceros de confianza (Supabase para base de datos, APIs de procesamiento de IA) que están contractualmente obligados a proteger tus datos.\n\n**Requisitos Legales:** Podemos divulgar información si lo exige la ley, una orden judicial o para proteger los derechos y la seguridad de nuestros usuarios.\n\n**Transferencia de Negocio:** En caso de fusión o adquisición, los datos del usuario pueden transferirse con las protecciones de privacidad adecuadas.\n\nNunca vendemos tus datos personales a anunciantes o intermediarios de datos.`,
        },
        {
          title: '6. Tus Derechos',
          body: `Tienes los siguientes derechos sobre tus datos:\n\n• **Acceso:** Solicitar una copia de todos los datos que tenemos sobre ti\n• **Corrección:** Actualizar información personal inexacta en cualquier momento dentro de la App\n• **Eliminación:** Solicitar la eliminación completa de tu cuenta y todos los datos asociados\n• **Portabilidad:** Exportar tus datos financieros en un formato estándar\n• **Restricción:** Solicitarnos que dejemos de procesar tus datos en ciertas circunstancias\n\nPara ejercer cualquiera de estos derechos, contáctanos en support@expensify.app.`,
        },
        {
          title: '7. Cookies y Analíticas',
          body: `La aplicación móvil no utiliza cookies del navegador. Sí utilizamos:\n\n• **Tokens de sesión** almacenados localmente para mantenerte conectado\n• **Analíticas anonimizadas** para entender el uso de funciones y mejorar la app\n• **Informes de errores** para detectar y corregir bugs más rápidamente\n\nTodos los datos de analíticas están agregados y no pueden usarse para identificar usuarios individuales.`,
        },
        {
          title: '8. Privacidad de Menores',
          body: `Expensify no está dirigido a menores de 16 años. No recopilamos intencionalmente información personal de niños.\n\nSi crees que un menor nos ha proporcionado información personal, contáctanos y la eliminaremos de inmediato.`,
        },
        {
          title: '9. Transferencias Internacionales de Datos',
          body: `Tus datos pueden almacenarse y procesarse en servidores ubicados fuera de tu país de origen. Al usar Expensify, consientes dichas transferencias.\n\nNos aseguramos de que cualquier transferencia internacional se realice de acuerdo con las leyes de protección de datos aplicables y con las salvaguardas apropiadas.`,
        },
        {
          title: '10. Retención de Datos',
          body: `Conservamos tus datos mientras tu cuenta esté activa o según sea necesario para prestar los servicios.\n\n• Datos de cuenta activa: retenidos hasta la eliminación de la cuenta\n• Datos de cuenta eliminada: eliminados dentro de los 30 días posteriores a la solicitud\n• Analíticas de uso anonimizadas: retenidas indefinidamente (no pueden identificarte)\n• Copias de seguridad: purgadas dentro de los 90 días posteriores a la eliminación de la cuenta`,
        },
        {
          title: '11. Cambios en esta Política',
          body: `Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios importantes mediante notificación en la app o por correo electrónico antes de que los cambios entren en vigor.\n\nEl uso continuado de la App después de la fecha efectiva constituye la aceptación de la política actualizada.`,
        },
        {
          title: '12. Contáctanos',
          body: `Para cualquier pregunta relacionada con la privacidad o para ejercer tus derechos, contáctanos en:\n\nsupport@expensify.app\n\nNos comprometemos a responder todas las solicitudes dentro de los 30 días.`,
        },
      ],
    },
  },
}
