export interface EmailHeader {
  subject: string;
  from: { address: string; name: string }[];
  to: { address: string; name: string }[];
  date: string;
}
