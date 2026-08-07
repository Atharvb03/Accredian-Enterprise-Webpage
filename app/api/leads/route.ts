import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    const { name, email, company, phone, message } = body;

    if (!name || !email || !company || !phone || !message) {
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

    // Validate phone format (basic validation)
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedData = {
      name: name.trim().substring(0, 100),
      email: email.trim().toLowerCase().substring(0, 100),
      company: company.trim().substring(0, 100),
      phone: phone.trim().substring(0, 20),
      message: message.trim().substring(0, 1000),
    };

    // Mock database operation
    // In production, you would save to a database here
    // Example: await db.leads.create({ data: sanitizedData });
    
    // Log the lead (for demonstration - in production, use proper logging)
    console.log("New lead received:", {
      timestamp: new Date().toISOString(),
      name: sanitizedData.name,
      company: sanitizedData.company,
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
