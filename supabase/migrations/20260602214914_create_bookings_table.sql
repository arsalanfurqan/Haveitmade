/*
  # Create bookings table for HaveItMaid

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text) - customer full name
      - `phone` (text) - customer phone number
      - `address` (text) - service address
      - `service_type` (text) - type of cleaning service requested
      - `preferred_date` (date) - preferred service date
      - `preferred_time` (text) - preferred service time
      - `status` (text) - booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz) - when the booking was created

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to insert (public booking form)
    - Add policy for authenticated users to read all bookings (admin access)

  3. Notes
    - The booking form is public-facing so INSERT is allowed without authentication
    - Only authenticated users (staff/admins) can read/update bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
