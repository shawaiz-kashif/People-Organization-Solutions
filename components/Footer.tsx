import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        src="https://peopleorgsolutions.com/wp-content/uploads/2026/01/SiteLogo-PO-190x121.png"
        alt="People Org Solutions"
        width={200}
        height={96}
      />
      <p>123 Fifth Avenue, NY 10160, New York, USA</p>
      <p>Phone: 800-123-456 | Email: contact@example.com</p>
    </footer>
  );
}