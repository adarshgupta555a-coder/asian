import jsPDF from "jspdf";

export const generateInvoice = (invoiceData) => {
  const doc = new jsPDF();

  const {
    orderId,
    customerName,
    email,
    items,
    totalAmount,
    paymentStatus,
    date
  } = invoiceData;

  // Title
  doc.setFontSize(20);
  doc.text("INVOICE", 80, 20);

  doc.setFontSize(12);
  doc.text(`Order ID: ${orderId}`, 20, 40);
  doc.text(`Customer: ${customerName}`, 20, 50);
  doc.text(`Email: ${email}`, 20, 60);
  doc.text(`Date: ${date}`, 20, 70);
  doc.text(`Payment Status: ${paymentStatus}`, 20, 80);

  // Table Header
  let y = 100;
  doc.text("Item", 20, y);
  doc.text("Qty", 100, y);
  doc.text("Price", 130, y);

  y += 10;

  items.forEach((item) => {
    doc.text(item.name, 20, y);
    doc.text(String(item.quantity), 100, y);
    doc.text(`₹${item.price}`, 130, y);
    y += 10;
  });

  // Total
  y += 10;
  doc.setFontSize(14);
  doc.text(`Total Amount: ₹${totalAmount}`, 20, y);

  // Save file
  doc.save(`invoice-${orderId}.pdf`);
};