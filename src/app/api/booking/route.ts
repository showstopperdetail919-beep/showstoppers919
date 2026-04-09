import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const BOOKINGS_FILE = path.join(process.cwd(), 'src', 'data', 'bookings.json');

async function readBookings(): Promise<object[]> {
  try {
    const raw = await fs.readFile(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeBookings(bookings: object[]): Promise<void> {
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), 'utf-8');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, vehicleType, address } = body;

    if (!name || !email || !phone || !service || !date || !vehicleType || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const booking = {
      id: `booking_${Date.now()}`,
      submittedAt: new Date().toISOString(),
      name,
      email,
      phone,
      service,
      date,
      vehicleType,
      address,
      message: body.message || '',
    };

    const bookings = await readBookings();
    bookings.push(booking);
    await writeBookings(bookings);

    return NextResponse.json({ success: true, id: booking.id }, { status: 201 });
  } catch (err) {
    console.error('Booking error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await readBookings();
    return NextResponse.json({ bookings });
  } catch (err) {
    console.error('Read bookings error:', err);
    return NextResponse.json({ error: 'Failed to read bookings' }, { status: 500 });
  }
}
