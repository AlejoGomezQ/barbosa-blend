export const WHATSAPP_NUMBER = "573014975996";
export const WHATSAPP_MESSAGE = "Holaaa! Estoy interesado en un cafecito de finca ☕";

export function whatsappUrl(_message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.link/rev5pu`;
}
