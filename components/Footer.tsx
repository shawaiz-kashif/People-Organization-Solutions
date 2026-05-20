import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        src="/images/POS-Logo.png"
        alt="People Org Solutions"
        width={430}
        height={100}
      />
      <p>123 Fifth Avenue, NY 10160, New York, USA</p>
      <p>Phone: 800-123-456 | Email: contact@example.com</p>
    </footer>
  );
}