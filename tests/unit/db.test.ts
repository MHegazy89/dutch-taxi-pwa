import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Database Schema & Seed Verification', () => {
  it('should verify 000_init.sql contains all mandatory CBR tables', () => {
    const migrationPath = path.resolve(__dirname, '../../src/lib/db/migrations/000_init.sql');
    const sql = fs.readFileSync(migrationPath, 'utf-8');

    expect(sql).toContain('CREATE TABLE IF NOT EXISTS vocab');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS grammar');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS practice_q');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS practice_option');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS flashcard');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS scenario');
    expect(sql).toContain('CREATE TABLE IF NOT EXISTS video_chunk');
  });

  it('should verify public/data.db binary was built by ETL', () => {
    const dbPath = path.resolve(__dirname, '../../public/data.db');
    expect(fs.existsSync(dbPath)).toBe(true);
    const stats = fs.statSync(dbPath);
    expect(stats.size).toBeGreaterThan(1000);
  });
});
