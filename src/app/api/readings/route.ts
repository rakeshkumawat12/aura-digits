import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import type { SaveReadingRequest, SaveReadingResponse, GetReadingsResponse } from '@/types/reading';

// POST /api/readings - Save a new reading
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' } as SaveReadingResponse,
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json() as SaveReadingRequest;

    // Validate required fields
    if (!body.date_of_birth || !body.mulank || !body.destiny || !body.lu_shu_grid) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' } as SaveReadingResponse,
        { status: 400 }
      );
    }

    // Generate a default title if not provided
    const title = body.title || `Reading for ${new Date(body.date_of_birth).toLocaleDateString()}`;

    // Insert into database
    const { data, error } = await supabase
      .from('readings')
      .insert({
        user_id: user.id,
        date_of_birth: body.date_of_birth,
        mulank: body.mulank,
        destiny: body.destiny,
        lu_shu_grid: body.lu_shu_grid,
        personality_analysis: body.personality_analysis,
        lucky_numbers: body.lucky_numbers,
        angel_numbers: body.angel_numbers || null,
        active_planes: body.active_planes || null,
        missing_numbers: body.missing_numbers || null,
        title,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to save reading' } as SaveReadingResponse,
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, reading: data } as SaveReadingResponse,
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as SaveReadingResponse,
      { status: 500 }
    );
  }
}

// GET /api/readings - Get all readings for the authenticated user
export async function GET() {
  try {
    const supabase = await createClient();

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' } as GetReadingsResponse,
        { status: 401 }
      );
    }

    // Fetch all readings for the user, ordered by most recent first
    const { data, error } = await supabase
      .from('readings')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch readings' } as GetReadingsResponse,
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, readings: data } as GetReadingsResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as GetReadingsResponse,
      { status: 500 }
    );
  }
}
