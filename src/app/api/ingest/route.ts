import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      error: 'Not Implemented',
      message:
        'ETL Ingestion is an offline pipeline. Run `python -m scripts.etl.load` locally to regenerate public/data.db.',
    },
    { status: 501 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      error: 'Not Implemented',
      message:
        'ETL Ingestion is an offline pipeline. Run `python -m scripts.etl.load` locally to regenerate public/data.db.',
    },
    { status: 501 }
  );
}
