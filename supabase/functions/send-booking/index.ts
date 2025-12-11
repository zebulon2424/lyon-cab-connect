import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  vehicleType: string;
  wheelchairType?: string;
  childSeat: string;
  childAge?: string;
  payment: string;
  name: string;
  phone: string;
  email: string;
  estimatedPrice?: string;
}

const vehicleLabels: Record<string, string> = {
  sedan: "Berline (4 passagers)",
  minivan: "Minivan (8 passagers)",
  bus: "Minibus (19 passagers)",
  tpmr: "TPMR (Transport PMR)",
  vsl: "VSL (Véhicule Sanitaire)",
};

const paymentLabels: Record<string, string> = {
  online: "Paiement en ligne",
  cash: "Espèces",
  card: "Carte bancaire",
};

const childSeatLabels: Record<string, string> = {
  none: "Aucun",
  baby: "Siège bébé (0-9 mois)",
  child: "Siège enfant (9 mois - 4 ans)",
  booster: "Rehausseur (4-10 ans)",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Received booking request");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingRequest = await req.json();
    console.log("Booking data:", JSON.stringify(booking));

    // Validate required fields
    if (!booking.name || !booking.phone || !booking.email || !booking.pickup || !booking.destination) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          🚖 Nouvelle Réservation Taxi Lyon Cab
        </h1>
        
        <h2 style="color: #333; margin-top: 30px;">📋 Informations Client</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Nom</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Téléphone</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.phone}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.email}</td>
          </tr>
        </table>

        <h2 style="color: #333; margin-top: 30px;">🚗 Détails de la Course</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Départ</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.pickup}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Destination</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.destination}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Date</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.date}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Heure</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.time}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Passagers</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.passengers}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Bagages</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.luggage}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Type de véhicule</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${vehicleLabels[booking.vehicleType] || booking.vehicleType}</td>
          </tr>
          ${booking.vehicleType === 'tpmr' ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Type fauteuil</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.wheelchairType === 'foldable' ? 'Fauteuil pliable' : 'Fauteuil avec rampe'}</td>
          </tr>
          ` : ''}
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Siège enfant</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${childSeatLabels[booking.childSeat] || 'Aucun'}</td>
          </tr>
          ${booking.childAge ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Âge enfant</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${booking.childAge}</td>
          </tr>
          ` : ''}
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Mode de paiement</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${paymentLabels[booking.payment] || booking.payment}</td>
          </tr>
          ${booking.estimatedPrice ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Prix estimé</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd; color: #d4af37; font-weight: bold;">${booking.estimatedPrice}</td>
          </tr>
          ` : ''}
        </table>

        <p style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px; color: #856404;">
          ⚡ Veuillez contacter le client rapidement pour confirmer la réservation.
        </p>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px; text-align: center;">
          Email envoyé automatiquement depuis le site Taxi Lyon Cab
        </p>
      </div>
    `;

    console.log("Sending email to contact@taxilyon.cab");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Taxi Lyon Cab <onboarding@resend.dev>",
        to: ["contact@taxilyon.cab"],
        subject: `🚖 Nouvelle Réservation - ${booking.name} - ${booking.date}`,
        html: emailHtml,
        reply_to: booking.email,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Erreur envoi email: ${errorText}`);
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
