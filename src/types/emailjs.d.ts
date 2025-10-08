declare module "@emailjs/browser" {
  interface SendParams {
    service_id: string;
    template_id: string;
    template_params: Record<string, any>;
    user_id?: string;
  }

  interface EmailJS {
    init(publicKey: any): unknown;
    send: (
      serviceID: string,
      templateID: string,
      templateParams: Record<string, any>,
      publicKey?: string
    ) => Promise<any>;
  }

  const emailjs: EmailJS;
  export default emailjs;
}
