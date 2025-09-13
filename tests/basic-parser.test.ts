import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const ZOD_CSV_PATH = path.join(__dirname, "../data/zod.csv");
const BAD_FIELDS_CSV = path.join(__dirname, "../data/bad fields.csv");
const ROW_LENGTH_CSV = path.join(__dirname, "../data/row length.csv");
const EMPTY_CSV = path.join(__dirname, "../data/empty fields.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH,)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV keeps empty fields", async () => {
  const results = await parseCSV(EMPTY_CSV)
    expect(results[0]).toEqual(["a", "", "b"])
    expect(results[1]).toEqual(["1", "", "2"])
});

test("parseCSV incorrect splits fields ", async () => {
  const results = await parseCSV(BAD_FIELDS_CSV)
    expect(results[0]).not.toEqual(["last, first", "age"])
    expect(results[0]).toEqual(["'last", "first'", "age"]) // broken on purpose
});

// test("parseCSV  inconsistent row length", async () => {
//   const results = await parseCSV(ROW_LENGTH_CSV)
//     expect(results[0].length).toEqual(3) // correct
//     expect(results[0].length).toEqual(2) // short
//     expect(results[0].length).toEqual(4) // long
// });

const PersonRowSchema = z.tuple([z.string(), z.coerce.number()]).transform( t => ({name: t[0], age: t[1]}))

test("parseCSV returns schema", async () => {
  const results = await parseCSV(ZOD_CSV_PATH, PersonRowSchema)
    expect(results).toEqual([{name: "Alice", age: 23}, {name: "Charlie", age: 25}])
});