import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  company: string;
  domain: string;
  numberOfCandidates: string;
  modeOfDelivery: string;
  location: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    const { name, email, countryCode, phoneNumber, company, domain, numberOfCandidates, modeOfDelivery, location } = body;

    if (!name || !email || !countryCode || !phoneNumber || !company || !domain || !numberOfCandidates || !modeOfDelivery || !location) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation - digits only)
    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      countryCode: countryCode.trim().substring(0, 10),
      phoneNumber: phoneNumber.trim().substring(0, 15),
      company: company.trim().substring(0, 100),
      domain: domain.trim().substring(0, 100),
      numberOfCandidates: numberOfCandidates.trim().substring(0, 10),
      modeOfDelivery: modeOfDelivery.trim().substring(0, 20),
      location: location.trim().substring(0, 100),
    };

    // Mock database operation
    // In production, you would save to a database here
    // Example: await db.leads.create({ data: sanitizedData });
    
    // Log the lead (for demonstration - in production, use proper logging)
    console.log("New lead received:", {
      timestamp: new Date().toISOString(),
      name: sanitizedData.name,
      company: sanitizedData.company,
      domain: sanitizedData.domain,
      modeOfDelivery: sanitizedData.modeOfDelivery,
      numberOfCandidates: sanitizedData.numberOfCandidates,
      // Don't log sensitive info like email/phone in production
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest! Our team will contact you within 24 hours.",
        data: {
          id: `lead_${Date.now()}`, // Mock ID
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
