import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import type { GetReadingResponse, DeleteReadingResponse } from '@/types/reading';

// GET /api/readings/[id] - Get a specific reading by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { id } = await params;

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' } as GetReadingResponse,
        { status: 401 }
      );
    }

    // Fetch the specific reading
    // RLS policy ensures user can only access their own reading
    const { data, error } = await supabase
      .from('readings')
      .select('*')
      .eq('id', id)
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { success: false, error: 'Reading not found' } as GetReadingResponse,
          { status: 404 }
        );
      }
      console.error('Database error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch reading' } as GetReadingResponse,
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, reading: data } as GetReadingResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as GetReadingResponse,
      { status: 500 }
    );
  }
}

// DELETE /api/readings/[id] - Delete a specific reading
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const { id } = await params;

    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' } as DeleteReadingResponse,
        { status: 401 }
      );
    }

    // Delete the reading
    // RLS policy ensures user can only delete their own reading
    const { error } = await supabase
      .from('readings')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete reading' } as DeleteReadingResponse,
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true } as DeleteReadingResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' } as DeleteReadingResponse,
      { status: 500 }
    );
  }
}
