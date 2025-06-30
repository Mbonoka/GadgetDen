import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autoResponse = `Hi ${form.name}, thank you for contacting GadgetDen. We have received your message and will get back to you shortly.`;
    const mailtoLink = `mailto:esthermbonoka@gmail.com?subject=Contact from ${form.name}&body=Name: ${form.name}%0DEmail: ${form.email}%0D%0DMessage:%0D${form.message}%0D%0D---%0DAuto-response to sender:%0D${autoResponse}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 3 }}>
        <Link href="https://wa.me/254712345678" target="_blank" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <WhatsAppIcon color="success" sx={{ mr: 1 }} /> WhatsApp Us
        </Link>
        <Link href="tel:+254712345678" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ mr: 1 }} /> +254 702 072 425
        </Link>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        <TextField label="Name" name="name" fullWidth required onChange={handleChange} value={form.name} />
        <TextField label="Email" name="email" type="email" fullWidth required onChange={handleChange} value={form.email} />
        <TextField label="Message" name="message" multiline rows={4} fullWidth required onChange={handleChange} value={form.message} />
        <Button type="submit" variant="contained">Send Message</Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
