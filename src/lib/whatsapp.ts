export const WHATSAPP_NUMBER = "573014975996";
export const WHATSAPP_MESSAGE = "Holaaa! Estoy interesado en un cafecito de finca ☕";

export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
