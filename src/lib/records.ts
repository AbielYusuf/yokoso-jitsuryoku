import type { Character } from "@/data/characters";
import { CHARACTERS } from "@/data/characters";
import type { ClassRecord } from "@/data/classes";
import { CLASSES } from "@/data/classes";
import type { ExamRecord } from "@/data/exams";
import { EXAMS } from "@/data/exams";

/**
 * Typed record lookups for the archive. Framework-independent — no network,
 * no database, no duplicated datasets. Each helper returns the matching
 * record or `undefined` when the id cannot be resolved.
 */

export function getCharacterById(id: string): Character | undefined {
  return CHARACTERS.find((c) => c.id === id);
}

export function getClassById(id: string): ClassRecord | undefined {
  return CLASSES.find((c) => c.id === id);
}

export function getExamById(id: string): ExamRecord | undefined {
  return EXAMS.find((e) => e.id === id);
}

export function getCharactersByIds(ids: string[]): Character[] {
  return ids
    .map((id) => getCharacterById(id))
    .filter((c): c is Character => c !== undefined);
}